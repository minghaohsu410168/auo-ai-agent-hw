import { input } from "@inquirer/prompts";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";
import { initMessage, addMessage, getMessages } from "./db/messages.js";
import { convertUnitTool, convertUnit } from "./tools/convert_unit.js";

const client = new OpenAI({ apiKey: OPENAI_API_KEY });
const tools = [convertUnitTool];
const AVAILABLE_TOOLS = {
  convert_unit: convertUnit,
};

await initMessage(
  "你是一位實用的單位換算助理，請用繁體中文回答。遇到單位換算問題時，請使用 convert_unit 工具。"
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
      console.log(message.content);
      await addMessage(message.content, "assistant");
      break;
    }

    getMessages().push(message);

    for (const toolCall of message.tool_calls) {
      const fnName = toolCall.function.name;
      const args = JSON.parse(toolCall.function.arguments);
      console.log(`\n[呼叫 tool] ${fnName}(${JSON.stringify(args)})`);

      const fn = AVAILABLE_TOOLS[fnName];
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
