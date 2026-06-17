import { input } from "@inquirer/prompts";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";
import { initMessage, addMessage, getMessages } from "./db/messages.js";
import { toOpenAITool } from "./utils/func-tool.js";
import * as allTools from "./tools/index.js";

const client = new OpenAI({ apiKey: OPENAI_API_KEY });
const toolList = Object.values(allTools);
const tools = toolList.map(toOpenAITool);
const AVAILABLE_TOOLS = Object.fromEntries(toolList.map((tool) => [tool.name, tool.fn]));

await initMessage(
  [
    "你是一位實用的台灣生活助理，請用繁體中文回答。",
    "問題需要時間、天氣或 YouBike 資訊時，請使用對應工具。",
    "同一個問題需要多種資訊時，請呼叫多個工具後再整合回答。",
    "YouBike 問題若只提供台北市行政區，請估計該區中心經緯度查詢。",
  ].join("\n")
);

async function runAssistantWithTools() {
  while (true) {
    const response = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: getMessages(),
      tools,
      tool_choice: "auto",
    });

    const message = response.choices[0].message;

    if (!message.tool_calls || message.tool_calls.length === 0) {
      const content = message.content ?? "";
      console.log(content);
      await addMessage(content, "assistant");
      return;
    }

    getMessages().push(message);

    for (const toolCall of message.tool_calls) {
      const fnName = toolCall.function.name;
      const fn = AVAILABLE_TOOLS[fnName];
      const args = JSON.parse(toolCall.function.arguments || "{}");

      console.log(`\n[呼叫 tool] ${fnName}(${JSON.stringify(args)})`);

      const result = await fn(args);
      getMessages().push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: JSON.stringify(result),
      });
    }
  }
}

try {
  while (true) {
    const userQuestion = (
      await input({ message: "請輸入你的問題：" })
    ).trim();

    if (userQuestion === "") continue;
    if (userQuestion.toLowerCase() === "exit") {
      console.log("再會~");
      break;
    }

    await addMessage(userQuestion);
    await runAssistantWithTools();
  }
} catch (err) {
  if (err.name === "ExitPromptError") {
    console.log("\n再會~");
  } else {
    throw err;
  }
}