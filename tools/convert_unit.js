export const convertUnitTool = {
  type: "function",
  function: {
    name: "convert_unit",
    description: "進行單位換算",
    parameters: {
      type: "object",
      properties: {
        value: {
          type: "number",
          description: "要換算的數值，例如 25",
        },
        from_unit: {
          type: "string",
          description: "原始單位，例如 C、F、km、mile、kg、lb",
        },
        to_unit: {
          type: "string",
          description: "目標單位，例如 C、F、km、mile、kg、lb",
        },
      },
      required: ["value", "from_unit", "to_unit"],
    },
  },
};

function normalizeUnit(unit) {
  const text = unit.toLowerCase();

  if (["c", "°c", "攝氏"].includes(text)) return "c";
  if (["f", "°f", "華氏"].includes(text)) return "f";
  if (["km", "公里", "公裡"].includes(text)) return "km";
  if (["mile", "miles", "英里", "英哩"].includes(text)) return "mile";
  if (["kg", "公斤"].includes(text)) return "kg";
  if (["lb", "lbs", "pound", "pounds", "磅"].includes(text)) return "lb";

  return text;
}

export function convertUnit({ value, from_unit, to_unit }) {
  const from = normalizeUnit(from_unit);
  const to = normalizeUnit(to_unit);

  if (from === "c" && to === "f") {
    return { value, from_unit, to_unit, result: value * 9 / 5 + 32 };
  }

  if (from === "f" && to === "c") {
    return { value, from_unit, to_unit, result: (value - 32) * 5 / 9 };
  }

  if (from === "km" && to === "mile") {
    return { value, from_unit, to_unit, result: value * 0.621371 };
  }

  if (from === "mile" && to === "km") {
    return { value, from_unit, to_unit, result: value / 0.621371 };
  }

  if (from === "kg" && to === "lb") {
    return { value, from_unit, to_unit, result: value * 2.20462 };
  }

  if (from === "lb" && to === "kg") {
    return { value, from_unit, to_unit, result: value / 2.20462 };
  }

  return { error: `不支援 ${from_unit} 到 ${to_unit} 的單位換算` };
}
