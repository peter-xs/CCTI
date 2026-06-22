#!/usr/bin/env node

// bin/ccti-ink.js
import React6 from "react";
import { render } from "ink";

// src/App.jsx
import React5, { useState as useState2, useEffect as useEffect2 } from "react";
import { Box as Box5, Text as Text5, useInput as useInput2, useApp } from "ink";

// src/components/Welcome.jsx
import React from "react";
import { Box, Text } from "ink";
var CCTI_LOGO = `
   \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557
  \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D
  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551   \u2588\u2588\u2551   
  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551   \u2588\u2588\u2551   
  \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   
   \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   
`;
function Welcome({ onStart }) {
  return /* @__PURE__ */ React.createElement(Box, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React.createElement(Box, { marginBottom: 1 }, /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, CCTI_LOGO)), /* @__PURE__ */ React.createElement(Box, { marginBottom: 1 }, /* @__PURE__ */ React.createElement(Text, { color: "blue" }, "Code Character Type Indicator")), /* @__PURE__ */ React.createElement(Box, { marginBottom: 1 }, /* @__PURE__ */ React.createElement(Text, { dimColor: true }, "\u7A0B\u5E8F\u5458\u4EE3\u7801\u4EBA\u683C\u6D4B\u8BD5 - \u4E0D\u662F\u6D4B\u8BD5\u4F60\u662F\u4EC0\u4E48\u6837\u7684\u4EBA")), /* @__PURE__ */ React.createElement(Box, { marginBottom: 1 }, /* @__PURE__ */ React.createElement(Text, { dimColor: true }, "\u800C\u662F\u63A2\u7D22\u4F60\u5199\u4EE3\u7801\u65F6\u662F\u4EC0\u4E48\u6837\u7684\u4EBA")), /* @__PURE__ */ React.createElement(Box, { marginTop: 2 }, /* @__PURE__ */ React.createElement(Text, { color: "green" }, "\u6309 Enter \u5F00\u59CB\u6D4B\u8BD5...")), /* @__PURE__ */ React.createElement(Box, { marginTop: 1 }, /* @__PURE__ */ React.createElement(Text, { dimColor: true }, "\u6309 Ctrl+C \u53EF\u968F\u65F6\u9000\u51FA")));
}

// src/components/Question.jsx
import React2, { useState, useEffect } from "react";
import { Box as Box2, Text as Text2, useInput } from "ink";
function Question({ question, current, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    setSelected(null);
    setShowResult(false);
  }, [question.id]);
  useInput((input, key) => {
    if (showResult) return;
    if (key.upArrow || key.downArrow) {
      if (selected === "A") {
        setSelected("B");
      } else if (selected === "B") {
        setSelected("A");
      } else {
        setSelected("A");
      }
      return;
    }
    const normalized = input.toUpperCase();
    if (normalized === "A" || normalized === "1") {
      setSelected("A");
    } else if (normalized === "B" || normalized === "2") {
      setSelected("B");
    } else if (key.return && selected) {
      setShowResult(true);
      setTimeout(() => {
        onAnswer(selected === "A" ? question.options[0] : question.options[1]);
      }, 300);
    }
  });
  const progress = Math.round(current / total * 100);
  const barWidth = 40;
  const filledWidth = Math.round(current / total * barWidth);
  const emptyWidth = barWidth - filledWidth;
  const progressBar = "\u2588".repeat(filledWidth) + "\u2591".repeat(emptyWidth);
  return /* @__PURE__ */ React2.createElement(Box2, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(Text2, { dimColor: true }, "[", progressBar, "] ", progress, "% (", current, "/", total, ")")), /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(Text2, { bold: true, color: "cyan" }, question.prompt)), /* @__PURE__ */ React2.createElement(Box2, { flexDirection: "column", marginLeft: 2 }, /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(
    Text2,
    {
      color: selected === "A" ? "green" : "white",
      bold: selected === "A"
    },
    selected === "A" ? "\u2192 " : "  ",
    "A. ",
    question.options[0].text
  )), /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(
    Text2,
    {
      color: selected === "B" ? "green" : "white",
      bold: selected === "B"
    },
    selected === "B" ? "\u2192 " : "  ",
    "B. ",
    question.options[1].text
  ))), !selected && /* @__PURE__ */ React2.createElement(Box2, { marginTop: 1 }, /* @__PURE__ */ React2.createElement(Text2, { dimColor: true }, "\u6309 \u2191/\u2193 \u9009\u62E9\uFF0CA/B \u952E\u9009\u62E9\uFF0CEnter \u786E\u8BA4")), selected && !showResult && /* @__PURE__ */ React2.createElement(Box2, { marginTop: 1 }, /* @__PURE__ */ React2.createElement(Text2, { color: "yellow" }, "\u6309 Enter \u786E\u8BA4\uFF0C\u2191/\u2193 \u5207\u6362\u9009\u9879")), showResult && /* @__PURE__ */ React2.createElement(Box2, { marginTop: 1 }, /* @__PURE__ */ React2.createElement(Text2, { color: "green" }, "\u2713 \u5DF2\u8BB0\u5F55")));
}

// src/components/Result.jsx
import React3 from "react";
import { Box as Box3, Text as Text3 } from "ink";
function drawRadarChart(dimensions) {
  const size = 10;
  const lines = [];
  const percentages = dimensions.map((d) => {
    const [left, right] = d.letters;
    const leftScore = d.scores[left];
    const rightScore = d.scores[right];
    const total = leftScore + rightScore;
    if (d.winner === left) {
      return { left: Math.round(leftScore / total * 100), right: Math.round(rightScore / total * 100) };
    } else {
      return { left: Math.round(leftScore / total * 100), right: Math.round(rightScore / total * 100) };
    }
  });
  lines.push("\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510");
  dimensions.forEach((d, i) => {
    const [left, right] = d.letters;
    const pct = percentages[i];
    const leftBar = "\u2588".repeat(Math.round(pct.left / 5));
    const rightBar = "\u2591".repeat(Math.round(pct.right / 5));
    lines.push(`\u2502 ${left} ${leftBar}${rightBar} ${right}  ${d.winner}(${pct[d.winner === left ? "left" : "right"]}%) \u2502`);
  });
  lines.push("\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518");
  return lines.join("\n");
}
function Result({ result }) {
  const { code, type, dimensions } = result;
  const radarChart = drawRadarChart(dimensions);
  return /* @__PURE__ */ React3.createElement(Box3, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, "\u{1F389} \u6D4B\u8BD5\u5B8C\u6210\uFF01")), /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "green", bold: true }, "\u4F60\u7684 CCTI \u7C7B\u578B\u662F\uFF1A", code, " - ", type.name)), /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { dimColor: true }, type.title)), /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, null, type.summary)), /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { dimColor: true }, radarChart)), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 1, marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "green", bold: true }, "\u4F60\u64C5\u957F")), type.strengths.map((s, i) => /* @__PURE__ */ React3.createElement(Box3, { key: i, marginLeft: 2 }, /* @__PURE__ */ React3.createElement(Text3, { color: "green" }, "\u2713 ", s))), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 1, marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "yellow", bold: true }, "\u9700\u8981\u7559\u610F")), type.risks.map((r, i) => /* @__PURE__ */ React3.createElement(Box3, { key: i, marginLeft: 2 }, /* @__PURE__ */ React3.createElement(Text3, { color: "yellow" }, "\u26A0 ", r))), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 2 }, /* @__PURE__ */ React3.createElement(Text3, { dimColor: true }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "blue" }, "\u8FD0\u884C ccti --share \u751F\u6210\u5206\u4EAB\u5361\u7247")), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 1 }, /* @__PURE__ */ React3.createElement(Text3, { dimColor: true }, "\u5206\u4EAB\u6587\u6848\uFF1A\u6211\u662F ", code, " ", type.name, "\u3002\u4F60\u4E5F\u6765\u6D4B\u6D4B\uFF1Anpx github:peter-xs/CCTI")));
}

// src/components/ShareCard.jsx
import React4 from "react";
import { Box as Box4, Text as Text4 } from "ink";
function ShareCard({ result }) {
  const { code, type, dimensions } = result;
  const dimInfo = dimensions.map((d) => {
    const [left, right] = d.letters;
    const leftScore = d.scores[left];
    const rightScore = d.scores[right];
    const total = leftScore + rightScore;
    const confidence = Math.round(Math.abs(leftScore - rightScore) / total * 100);
    return `${d.winner}(${confidence}%)`;
  }).join(" ");
  const card = `
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551                                      \u2551
\u2551          \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551             \u2551
\u2551         \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551          \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D             \u2551
\u2551                                      \u2551
\u2551  CCTI - Code Character Type Indicator\u2551
\u2551                                      \u2551
\u2551  ${code.padEnd(4)} ${type.name.padEnd(12)}        \u2551
\u2551  ${type.title.padEnd(28)}    \u2551
\u2551                                      \u2551
\u2551  ${dimInfo.padEnd(28)}    \u2551
\u2551                                      \u2551
\u2551  npx github:peter-xs/CCTI            \u2551
\u2551                                      \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`;
  return /* @__PURE__ */ React4.createElement(Box4, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React4.createElement(Box4, { marginBottom: 1 }, /* @__PURE__ */ React4.createElement(Text4, { color: "cyan", bold: true }, "\u5206\u4EAB\u5361\u7247\u5DF2\u751F\u6210\uFF01")), /* @__PURE__ */ React4.createElement(Box4, { marginBottom: 1 }, /* @__PURE__ */ React4.createElement(Text4, null, card)), /* @__PURE__ */ React4.createElement(Box4, { marginTop: 1 }, /* @__PURE__ */ React4.createElement(Text4, { dimColor: true }, "\u590D\u5236\u4EE5\u4E0A\u5185\u5BB9\u5206\u4EAB\u5230\u793E\u4EA4\u5A92\u4F53")), /* @__PURE__ */ React4.createElement(Box4, { marginTop: 1 }, /* @__PURE__ */ React4.createElement(Text4, { color: "green" }, "\u7B80\u77ED\u5206\u4EAB\u6587\u6848\uFF1A")), /* @__PURE__ */ React4.createElement(Box4, { marginLeft: 2 }, /* @__PURE__ */ React4.createElement(Text4, { color: "green" }, "\u6211\u662F ", code, " ", type.name, "\u3002\u4F60\u4E5F\u6765\u6D4B\u6D4B\uFF1Anpx github:peter-xs/CCTI")));
}

// src/model.js
var DIMENSIONS = [
  {
    key: "mindset",
    letters: ["C", "I"],
    names: ["Construct", "Investigate"],
    label: "\u7F16\u7A0B\u601D\u7EF4\u65B9\u5F0F"
  },
  {
    key: "structure",
    letters: ["S", "D"],
    names: ["Structure", "Dynamic"],
    label: "\u4EE3\u7801\u7EC4\u7EC7\u7B56\u7565"
  },
  {
    key: "method",
    letters: ["T", "E"],
    names: ["Theory", "Empirical"],
    label: "\u95EE\u9898\u89E3\u51B3\u8DEF\u5F84"
  },
  {
    key: "collaboration",
    letters: ["A", "O"],
    names: ["Alone", "Open"],
    label: "\u534F\u4F5C\u4E0E\u5F71\u54CD\u529B"
  }
];
var QUESTIONS = [
  {
    id: "q01",
    dimension: "mindset",
    prompt: "\u63A5\u5230\u4E00\u4E2A\u65B0\u9700\u6C42\u65F6\uFF0C\u4F60\u66F4\u81EA\u7136\u7684\u7B2C\u4E00\u6B65\u662F\uFF1F",
    options: [
      { letter: "C", text: "\u5148\u642D\u51FA\u4E00\u4E2A\u80FD\u8DD1\u7684\u7248\u672C\uFF0C\u8BA9\u95EE\u9898\u53D8\u5F97\u5177\u4F53\u3002" },
      { letter: "I", text: "\u5148\u8FFD\u95EE\u573A\u666F\u3001\u8FB9\u754C\u548C\u9650\u5236\uFF0C\u5F04\u6E05\u771F\u6B63\u8981\u89E3\u51B3\u4EC0\u4E48\u3002" }
    ]
  },
  {
    id: "q02",
    dimension: "mindset",
    prompt: "\u9762\u5BF9\u964C\u751F\u4EE3\u7801\u5E93\uFF0C\u4F60\u901A\u5E38\u4F1A\uFF1F",
    options: [
      { letter: "C", text: "\u4ECE\u5165\u53E3\u5F00\u59CB\u8DD1\u6D41\u7A0B\uFF0C\u8FB9\u6539\u8FB9\u7406\u89E3\u3002" },
      { letter: "I", text: "\u5148\u8BFB\u76EE\u5F55\u3001\u4F9D\u8D56\u548C\u5173\u952E\u62BD\u8C61\uFF0C\u753B\u51FA\u5FC3\u91CC\u7684\u5730\u56FE\u3002" }
    ]
  },
  {
    id: "q03",
    dimension: "mindset",
    prompt: "\u4F60\u66F4\u4EAB\u53D7\u54EA\u7C7B\u5DE5\u4F5C\uFF1F",
    options: [
      { letter: "C", text: "\u628A\u4E00\u4E2A\u60F3\u6CD5\u505A\u6210\u7528\u6237\u771F\u7684\u80FD\u7528\u7684\u4E1C\u897F\u3002" },
      { letter: "I", text: "\u62C6\u89E3\u590D\u6742\u95EE\u9898\uFF0C\u627E\u5230\u9690\u85CF\u7684\u673A\u5236\u548C\u539F\u56E0\u3002" }
    ]
  },
  {
    id: "q04",
    dimension: "mindset",
    prompt: "\u6280\u672F\u8C03\u7814\u65F6\uFF0C\u4F60\u66F4\u5BB9\u6613\u88AB\u4EC0\u4E48\u5438\u5F15\uFF1F",
    options: [
      { letter: "C", text: "\u793A\u4F8B\u4EE3\u7801\u3001\u6A21\u677F\u9879\u76EE\u3001\u6700\u5FEB\u4E0A\u624B\u8DEF\u5F84\u3002" },
      { letter: "I", text: "\u8BBE\u8BA1\u7406\u5FF5\u3001\u6743\u8861\u5206\u6790\u3001\u5B9E\u73B0\u539F\u7406\u3002" }
    ]
  },
  {
    id: "q05",
    dimension: "mindset",
    prompt: "\u5F53\u9700\u6C42\u8FD8\u5F88\u6A21\u7CCA\u65F6\uFF0C\u4F60\u503E\u5411\u4E8E\uFF1F",
    options: [
      { letter: "C", text: "\u505A\u4E00\u4E2A\u539F\u578B\uFF0C\u7528\u5B9E\u9645\u53CD\u9988\u63A8\u8FDB\u8BA8\u8BBA\u3002" },
      { letter: "I", text: "\u7EE7\u7EED\u6F84\u6E05\u95EE\u9898\uFF0C\u907F\u514D\u505A\u51FA\u9519\u8BEF\u65B9\u5411\u7684\u539F\u578B\u3002" }
    ]
  },
  {
    id: "q06",
    dimension: "mindset",
    prompt: "\u4F60\u5BF9\u201C\u8FB9\u5199\u8FB9\u60F3\u201D\u7684\u611F\u53D7\u66F4\u63A5\u8FD1\uFF1F",
    options: [
      { letter: "C", text: "\u8FD9\u662F\u5F88\u81EA\u7136\u7684\u63A2\u7D22\u65B9\u5F0F\u3002" },
      { letter: "I", text: "\u53EF\u4EE5\uFF0C\u4F46\u6700\u597D\u5148\u77E5\u9053\u63A2\u7D22\u8FB9\u754C\u3002" }
    ]
  },
  {
    id: "q07",
    dimension: "mindset",
    prompt: "\u4E00\u6B21\u6210\u529F\u7684\u7F16\u7801\u4F53\u9A8C\uFF0C\u5BF9\u4F60\u6765\u8BF4\u66F4\u50CF\uFF1F",
    options: [
      { letter: "C", text: "\u5B8C\u6210\u4E00\u4E2A\u53EF\u89C1\u3001\u53EF\u4EA4\u4ED8\u7684\u529F\u80FD\u3002" },
      { letter: "I", text: "\u7EC8\u4E8E\u7406\u89E3\u4E00\u4E2A\u590D\u6742\u7CFB\u7EDF\u4E3A\u4EC0\u4E48\u8FD9\u6837\u8FD0\u8F6C\u3002" }
    ]
  },
  {
    id: "q08",
    dimension: "structure",
    prompt: "\u4F60\u770B\u5230\u4E00\u4E2A 800 \u884C\u51FD\u6570\u65F6\uFF0C\u7B2C\u4E00\u53CD\u5E94\u662F\uFF1F",
    options: [
      { letter: "S", text: "\u62C6\u5206\u804C\u8D23\uFF0C\u8BA9\u7ED3\u6784\u91CD\u65B0\u6E05\u695A\u8D77\u6765\u3002" },
      { letter: "D", text: "\u5148\u786E\u8BA4\u5F53\u524D\u95EE\u9898\uFF0C\u4E0D\u6025\u7740\u5927\u8303\u56F4\u6539\u52A8\u3002" }
    ]
  },
  {
    id: "q09",
    dimension: "structure",
    prompt: "\u4F60\u66F4\u4E0D\u80FD\u5FCD\u53D7\u54EA\u79CD\u9879\u76EE\uFF1F",
    options: [
      { letter: "S", text: "\u80FD\u8DD1\uFF0C\u4F46\u6A21\u5757\u8FB9\u754C\u6DF7\u4E71\u3002" },
      { letter: "D", text: "\u7ED3\u6784\u6F02\u4EAE\uFF0C\u4F46\u6539\u4E00\u4E2A\u9700\u6C42\u5904\u5904\u53D7\u9650\u3002" }
    ]
  },
  {
    id: "q10",
    dimension: "structure",
    prompt: "\u8BBE\u8BA1\u6A21\u5757\u65F6\uFF0C\u4F60\u66F4\u770B\u91CD\uFF1F",
    options: [
      { letter: "S", text: "\u6E05\u6670\u7684\u8FB9\u754C\u3001\u547D\u540D\u548C\u4F9D\u8D56\u65B9\u5411\u3002" },
      { letter: "D", text: "\u9002\u5E94\u53D8\u5316\u7684\u901F\u5EA6\u548C\u6539\u52A8\u6210\u672C\u3002" }
    ]
  },
  {
    id: "q11",
    dimension: "structure",
    prompt: "\u9047\u5230\u91CD\u590D\u4EE3\u7801\uFF0C\u4F60\u901A\u5E38\u4F1A\uFF1F",
    options: [
      { letter: "S", text: "\u5C3D\u5FEB\u62BD\u8C61\uFF0C\u907F\u514D\u590D\u5236\u6269\u6563\u3002" },
      { letter: "D", text: "\u5148\u89C2\u5BDF\u53D8\u5316\u662F\u5426\u7A33\u5B9A\uFF0C\u907F\u514D\u8FC7\u65E9\u62BD\u8C61\u3002" }
    ]
  },
  {
    id: "q12",
    dimension: "structure",
    prompt: "\u4F60\u504F\u597D\u7684\u9879\u76EE\u6587\u6863\u662F\uFF1F",
    options: [
      { letter: "S", text: "\u67B6\u6784\u56FE\u3001\u7EA6\u5B9A\u3001\u76EE\u5F55\u804C\u8D23\u90FD\u6BD4\u8F83\u5B8C\u6574\u3002" },
      { letter: "D", text: "\u77ED\u5C0F\u76F4\u63A5\uFF0C\u80FD\u5E2E\u52A9\u5FEB\u901F\u5B8C\u6210\u5F53\u524D\u4EFB\u52A1\u3002" }
    ]
  },
  {
    id: "q13",
    dimension: "structure",
    prompt: "\u5F53\u4EA7\u54C1\u65B9\u5411\u9891\u7E41\u53D8\u5316\u65F6\uFF0C\u4F60\u4F1A\u4F18\u5148\uFF1F",
    options: [
      { letter: "S", text: "\u5B88\u4F4F\u6838\u5FC3\u6A21\u578B\uFF0C\u907F\u514D\u7CFB\u7EDF\u5931\u53BB\u5F62\u72B6\u3002" },
      { letter: "D", text: "\u51CF\u5C11\u627F\u8BFA\uFF0C\u8BA9\u4EE3\u7801\u4FDD\u6301\u53EF\u66FF\u6362\u3001\u53EF\u5220\u9664\u3002" }
    ]
  },
  {
    id: "q14",
    dimension: "structure",
    prompt: "\u4F60\u5BF9\u201C\u4E34\u65F6\u65B9\u6848\u201D\u7684\u6001\u5EA6\u66F4\u63A5\u8FD1\uFF1F",
    options: [
      { letter: "S", text: "\u53EF\u4EE5\u6709\uFF0C\u4F46\u5FC5\u987B\u6807\u6E05\u8FB9\u754C\u548C\u8FD8\u503A\u8BA1\u5212\u3002" },
      { letter: "D", text: "\u73B0\u5B9E\u9879\u76EE\u9700\u8981\u5B83\uFF0C\u5173\u952E\u662F\u522B\u8BA9\u5B83\u53D8\u6210\u6C38\u4E45\u65B9\u6848\u3002" }
    ]
  },
  {
    id: "q15",
    dimension: "method",
    prompt: "\u6392\u67E5\u7EBF\u4E0A\u95EE\u9898\u65F6\uFF0C\u4F60\u66F4\u5E38\u7528\uFF1F",
    options: [
      { letter: "T", text: "\u5148\u5EFA\u7ACB\u5047\u8BBE\uFF0C\u518D\u6309\u56E0\u679C\u94FE\u9A8C\u8BC1\u3002" },
      { letter: "E", text: "\u5148\u770B\u65E5\u5FD7\u3001\u6307\u6807\u548C\u590D\u73B0\u8DEF\u5F84\uFF0C\u8BA9\u6570\u636E\u8BF4\u8BDD\u3002" }
    ]
  },
  {
    id: "q16",
    dimension: "method",
    prompt: "\u5B66\u4E60\u65B0\u6280\u672F\u65F6\uFF0C\u4F60\u503E\u5411\u4E8E\uFF1F",
    options: [
      { letter: "T", text: "\u5148\u7406\u89E3\u6838\u5FC3\u6982\u5FF5\u548C\u8BBE\u8BA1\u6A21\u578B\u3002" },
      { letter: "E", text: "\u5148\u5199 demo\uFF0C\u8E29\u8FC7\u5751\u518D\u56DE\u5934\u8865\u7406\u8BBA\u3002" }
    ]
  },
  {
    id: "q17",
    dimension: "method",
    prompt: "\u4EE3\u7801\u8BC4\u5BA1\u91CC\uFF0C\u4F60\u66F4\u5BB9\u6613\u6307\u51FA\uFF1F",
    options: [
      { letter: "T", text: "\u62BD\u8C61\u4E0D\u4E00\u81F4\u3001\u8FB9\u754C\u4E0D\u5408\u7406\u3001\u6982\u5FF5\u6DF7\u7528\u3002" },
      { letter: "E", text: "\u5F02\u5E38\u6CA1\u5904\u7406\u3001\u6D4B\u8BD5\u4E0D\u591F\u3001\u573A\u666F\u6CA1\u8986\u76D6\u3002" }
    ]
  },
  {
    id: "q18",
    dimension: "method",
    prompt: "\u6280\u672F\u9009\u578B\u65F6\uFF0C\u4F60\u66F4\u76F8\u4FE1\uFF1F",
    options: [
      { letter: "T", text: "\u539F\u5219\u3001\u6A21\u578B\u548C\u957F\u671F\u6F14\u8FDB\u7A7A\u95F4\u3002" },
      { letter: "E", text: "\u793E\u533A\u6210\u719F\u5EA6\u3001\u6027\u80FD\u6570\u636E\u548C\u56E2\u961F\u7ECF\u9A8C\u3002" }
    ]
  },
  {
    id: "q19",
    dimension: "method",
    prompt: "\u4F60\u5199\u6D4B\u8BD5\u65F6\u66F4\u5728\u610F\uFF1F",
    options: [
      { letter: "T", text: "\u6D4B\u8BD5\u80FD\u8868\u8FBE\u8BBE\u8BA1\u610F\u56FE\u548C\u4E0D\u53D8\u91CF\u3002" },
      { letter: "E", text: "\u6D4B\u8BD5\u80FD\u8986\u76D6\u771F\u5B9E\u4E8B\u6545\u548C\u5173\u952E\u8DEF\u5F84\u3002" }
    ]
  },
  {
    id: "q20",
    dimension: "method",
    prompt: "\u5F53\u76F4\u89C9\u548C\u6570\u636E\u51B2\u7A81\u65F6\uFF0C\u4F60\u66F4\u53EF\u80FD\uFF1F",
    options: [
      { letter: "T", text: "\u91CD\u65B0\u68C0\u67E5\u6570\u636E\u662F\u5426\u53CD\u6620\u4E86\u6B63\u786E\u95EE\u9898\u3002" },
      { letter: "E", text: "\u5148\u5C0A\u91CD\u6570\u636E\uFF0C\u518D\u8C03\u6574\u81EA\u5DF1\u7684\u5224\u65AD\u3002" }
    ]
  },
  {
    id: "q21",
    dimension: "method",
    prompt: "\u4F60\u66F4\u559C\u6B22\u54EA\u79CD\u6280\u672F\u6587\u7AE0\uFF1F",
    options: [
      { letter: "T", text: "\u628A\u4E00\u4E2A\u7CFB\u7EDF\u8BBE\u8BA1\u8BB2\u900F\u7684\u957F\u6587\u3002" },
      { letter: "E", text: "\u6709\u4EE3\u7801\u3001\u6709 benchmark\u3001\u6709\u8E29\u5751\u8BB0\u5F55\u7684\u5B9E\u6218\u6587\u3002" }
    ]
  },
  {
    id: "q22",
    dimension: "collaboration",
    prompt: "\u8FDB\u5165\u6DF1\u5EA6\u7F16\u7801\u72B6\u6001\u65F6\uFF0C\u4F60\u66F4\u9700\u8981\uFF1F",
    options: [
      { letter: "A", text: "\u5B8C\u6574\u5B89\u9759\u7684\u65F6\u95F4\u5757\uFF0C\u5C11\u4E00\u70B9\u6253\u65AD\u3002" },
      { letter: "O", text: "\u53CA\u65F6\u4EA4\u6D41\uFF0C\u907F\u514D\u65B9\u5411\u8DD1\u504F\u3002" }
    ]
  },
  {
    id: "q23",
    dimension: "collaboration",
    prompt: "\u4F60\u66F4\u613F\u610F\u5982\u4F55\u5F71\u54CD\u56E2\u961F\uFF1F",
    options: [
      { letter: "A", text: "\u7528\u9AD8\u8D28\u91CF\u4EE3\u7801\u548C\u7A33\u5B9A\u4EA4\u4ED8\u5EFA\u7ACB\u4FE1\u4EFB\u3002" },
      { letter: "O", text: "\u901A\u8FC7\u8BA8\u8BBA\u3001\u5206\u4EAB\u548C\u5DE5\u5177\u63A8\u52A8\u5927\u5BB6\u4E00\u8D77\u53D8\u597D\u3002" }
    ]
  },
  {
    id: "q24",
    dimension: "collaboration",
    prompt: "\u9047\u5230\u68D8\u624B\u6280\u672F\u5206\u6B67\u65F6\uFF0C\u4F60\u503E\u5411\u4E8E\uFF1F",
    options: [
      { letter: "A", text: "\u5148\u72EC\u7ACB\u505A\u8DB3\u5206\u6790\uFF0C\u518D\u62FF\u7ED3\u8BBA\u8BA8\u8BBA\u3002" },
      { letter: "O", text: "\u5C3D\u65E9\u62C9\u9F50\u4E0A\u4E0B\u6587\uFF0C\u8BA9\u5927\u5BB6\u4E00\u8D77\u6536\u655B\u3002" }
    ]
  },
  {
    id: "q25",
    dimension: "collaboration",
    prompt: "\u4F60\u5BF9\u5F00\u6E90\u9879\u76EE\u7684\u5174\u8DA3\u66F4\u50CF\uFF1F",
    options: [
      { letter: "A", text: "\u9700\u8981\u65F6\u4F1A\u8BFB\u6E90\u7801\u3001\u63D0 issue \u6216\u4FEE bug\u3002" },
      { letter: "O", text: "\u613F\u610F\u6301\u7EED\u53C2\u4E0E\u793E\u533A\u3001\u7EF4\u62A4\u9879\u76EE\u6216\u5199\u6587\u6863\u3002" }
    ]
  },
  {
    id: "q26",
    dimension: "collaboration",
    prompt: "\u5728\u56E2\u961F\u77E5\u8BC6\u6C89\u6DC0\u4E0A\uFF0C\u4F60\u66F4\u81EA\u7136\u7684\u505A\u6CD5\u662F\uFF1F",
    options: [
      { letter: "A", text: "\u628A\u5173\u952E\u903B\u8F91\u5199\u8FDB\u4EE3\u7801\u3001\u6D4B\u8BD5\u548C\u6E05\u6670\u547D\u540D\u91CC\u3002" },
      { letter: "O", text: "\u4E3B\u52A8\u5199\u6587\u6863\u3001\u505A\u5206\u4EAB\u3001\u5EFA\u7ACB\u534F\u4F5C\u7EA6\u5B9A\u3002" }
    ]
  },
  {
    id: "q27",
    dimension: "collaboration",
    prompt: "\u5F53\u65B0\u4EBA\u63A5\u624B\u4F60\u7684\u6A21\u5757\u65F6\uFF0C\u4F60\u5E0C\u671B\u4ED6\u4EEC\u4E3B\u8981\u4F9D\u9760\uFF1F",
    options: [
      { letter: "A", text: "\u4EE3\u7801\u7ED3\u6784\u672C\u8EAB\u8DB3\u591F\u53EF\u8BFB\u3002" },
      { letter: "O", text: "README\u3001\u793A\u4F8B\u548C\u6211\u7559\u4E0B\u7684\u4E0A\u4E0B\u6587\u8BF4\u660E\u3002" }
    ]
  },
  {
    id: "q28",
    dimension: "collaboration",
    prompt: "\u4F60\u7406\u60F3\u4E2D\u7684\u4E00\u5929\u66F4\u63A5\u8FD1\uFF1F",
    options: [
      { letter: "A", text: "\u5C11\u4F1A\u3001\u5C11\u6D88\u606F\uFF0C\u4E13\u6CE8\u628A\u6838\u5FC3\u95EE\u9898\u89E3\u51B3\u6389\u3002" },
      { letter: "O", text: "\u7F16\u7801\u3001\u8BC4\u5BA1\u3001\u8BA8\u8BBA\u3001\u5206\u4EAB\u4E4B\u95F4\u8282\u594F\u5747\u8861\u3002" }
    ]
  }
];
var TYPES = {
  CSTA: {
    name: "\u67B6\u6784\u5EFA\u9020\u5E08",
    title: "The System Architect",
    summary: "\u4F60\u64C5\u957F\u628A\u590D\u6742\u60F3\u6CD5\u843D\u6210\u7A33\u5B9A\u7ED3\u6784\uFF0C\u559C\u6B22\u8BA9\u7CFB\u7EDF\u6709\u6E05\u695A\u7684\u9AA8\u67B6\u3002",
    strengths: ["\u80FD\u628A\u62BD\u8C61\u843D\u5230\u5DE5\u7A0B\u5B9E\u73B0", "\u91CD\u89C6\u8FB9\u754C\u548C\u957F\u671F\u7EF4\u62A4", "\u9002\u5408\u642D\u5EFA\u6838\u5FC3\u6A21\u5757"],
    risks: ["\u53EF\u80FD\u4F4E\u4F30\u63A2\u7D22\u9636\u6BB5\u7684\u6DF7\u4E71\u4EF7\u503C", "\u5BB9\u6613\u5728\u65E9\u671F\u6295\u5165\u8FC7\u591A\u7ED3\u6784\u6210\u672C"]
  },
  CSTO: {
    name: "\u6280\u672F\u5E03\u9053\u5EFA\u9020\u5E08",
    title: "The Architecture Advocate",
    summary: "\u4F60\u80FD\u628A\u7CFB\u7EDF\u8BBE\u8BA1\u8BB2\u6E05\u695A\uFF0C\u4E5F\u80FD\u5E26\u7740\u56E2\u961F\u4E00\u8D77\u628A\u5B83\u505A\u51FA\u6765\u3002",
    strengths: ["\u64C5\u957F\u5BF9\u9F50\u6280\u672F\u5171\u8BC6", "\u80FD\u8F93\u51FA\u89C4\u8303\u548C\u6700\u4F73\u5B9E\u8DF5", "\u9002\u5408\u5E73\u53F0\u3001\u57FA\u7840\u8BBE\u65BD\u548C\u6280\u672F\u9886\u5BFC\u89D2\u8272"],
    risks: ["\u8BA8\u8BBA\u548C\u5171\u8BC6\u6210\u672C\u53EF\u80FD\u504F\u9AD8", "\u5BB9\u6613\u628A\u4E2A\u4EBA\u6807\u51C6\u63A8\u5E7F\u5F97\u8FC7\u5FEB"]
  },
  CSEA: {
    name: "\u53EF\u9760\u4EA4\u4ED8\u8005",
    title: "The Reliable Shipper",
    summary: "\u4F60\u5173\u6CE8\u53EF\u8FD0\u884C\u3001\u53EF\u9A8C\u8BC1\u3001\u53EF\u7EF4\u62A4\u7684\u4EA4\u4ED8\u7ED3\u679C\uFF0C\u662F\u9879\u76EE\u91CC\u7684\u7A33\u5B9A\u63A8\u8FDB\u529B\u91CF\u3002",
    strengths: ["\u4EA4\u4ED8\u610F\u8BC6\u5F3A", "\u80FD\u5E73\u8861\u8D28\u91CF\u4E0E\u73B0\u5B9E\u7EA6\u675F", "\u91CD\u89C6\u6D4B\u8BD5\u548C\u53CD\u9988"],
    risks: ["\u53EF\u80FD\u5BF9\u5916\u90E8\u534F\u4F5C\u6295\u5165\u4E0D\u8DB3", "\u5BB9\u6613\u628A\u590D\u6742\u95EE\u9898\u538B\u5728\u81EA\u5DF1\u8EAB\u4E0A"]
  },
  CSEO: {
    name: "\u4EA7\u54C1\u5DE5\u7A0B\u5E08",
    title: "The Product Engineer",
    summary: "\u4F60\u5584\u4E8E\u628A\u7528\u6237\u95EE\u9898\u53D8\u6210\u53EF\u843D\u5730\u65B9\u6848\uFF0C\u5E76\u901A\u8FC7\u534F\u4F5C\u6301\u7EED\u6539\u5584\u4F53\u9A8C\u3002",
    strengths: ["\u4EA7\u54C1\u611F\u548C\u5DE5\u7A0B\u611F\u517C\u5177", "\u9002\u5408\u8DE8\u804C\u80FD\u5408\u4F5C", "\u80FD\u5FEB\u901F\u628A\u53CD\u9988\u8F6C\u6210\u6539\u8FDB"],
    risks: ["\u53EF\u80FD\u88AB\u534F\u4F5C\u4E0A\u4E0B\u6587\u5207\u788E\u4E13\u6CE8\u529B", "\u5BB9\u6613\u4E3A\u4E86\u63A8\u8FDB\u800C\u63A5\u53D7\u8FC7\u591A\u9700\u6C42\u53D8\u5316"]
  },
  CDTA: {
    name: "\u5B8C\u7F8E\u4E3B\u4E49\u5DE5\u5320",
    title: "The Precise Craftsperson",
    summary: "\u4F60\u8FFD\u6C42\u4EE3\u7801\u6982\u5FF5\u6E05\u6670\uFF0C\u540C\u65F6\u4FDD\u7559\u5B9E\u73B0\u5F39\u6027\uFF0C\u5E38\u80FD\u5199\u51FA\u5E72\u51C0\u800C\u4E0D\u7B28\u91CD\u7684\u65B9\u6848\u3002",
    strengths: ["\u62BD\u8C61\u5224\u65AD\u654F\u9510", "\u80FD\u63A7\u5236\u590D\u6742\u5EA6", "\u9002\u5408\u91CD\u6784\u548C\u6838\u5FC3\u5E93\u8BBE\u8BA1"],
    risks: ["\u53EF\u80FD\u5BF9\u201C\u4E0D\u591F\u4F18\u96C5\u201D\u7684\u65B9\u6848\u8010\u5FC3\u8F83\u4F4E", "\u5BB9\u6613\u5EF6\u540E\u4EA4\u4ED8\u6765\u8FFD\u6C42\u66F4\u597D\u7684\u5F62\u6001"]
  },
  CDTO: {
    name: "\u6846\u67B6\u521B\u9020\u8005",
    title: "The Framework Maker",
    summary: "\u4F60\u559C\u6B22\u521B\u5EFA\u53EF\u590D\u7528\u5DE5\u5177\u548C\u6A21\u5F0F\uFF0C\u5E76\u8BA9\u66F4\u591A\u4EBA\u7528\u66F4\u597D\u7684\u65B9\u5F0F\u5DE5\u4F5C\u3002",
    strengths: ["\u5584\u4E8E\u6C89\u6DC0\u5DE5\u5177\u94FE", "\u80FD\u628A\u4E2A\u4EBA\u7ECF\u9A8C\u53D8\u6210\u56E2\u961F\u8D44\u4EA7", "\u9002\u5408 DX \u548C\u5E73\u53F0\u5DE5\u7A0B"],
    risks: ["\u53EF\u80FD\u6784\u5EFA\u8D85\u8FC7\u5F53\u524D\u9700\u6C42\u7684\u80FD\u529B", "\u9700\u8981\u8B66\u60D5\u5DE5\u5177\u7EF4\u62A4\u6210\u672C"]
  },
  CDEA: {
    name: "\u5FEB\u901F\u5B9E\u73B0\u8005",
    title: "The Practical Builder",
    summary: "\u4F60\u91CD\u89C6\u771F\u5B9E\u53CD\u9988\u548C\u7075\u6D3B\u5B9E\u73B0\uFF0C\u64C5\u957F\u5728\u4E0D\u786E\u5B9A\u4E2D\u5FEB\u901F\u63A8\u8FDB\u3002",
    strengths: ["\u4E0A\u624B\u5FEB\u3001\u884C\u52A8\u5FEB", "\u80FD\u5728\u53D8\u5316\u4E2D\u4FDD\u6301\u4EA7\u51FA", "\u9002\u5408 MVP \u548C\u4E1A\u52A1\u8FED\u4EE3"],
    risks: ["\u53EF\u80FD\u7559\u4E0B\u540E\u7EED\u6574\u7406\u538B\u529B", "\u9700\u8981\u4E3B\u52A8\u8BB0\u5F55\u5173\u952E\u51B3\u7B56"]
  },
  CDEO: {
    name: "\u521B\u4E1A\u5F00\u53D1\u8005",
    title: "The Startup Engineer",
    summary: "\u4F60\u80FD\u4E00\u8FB9\u63A2\u7D22\u4E00\u8FB9\u4EA4\u4ED8\uFF0C\u8FD8\u80FD\u501F\u52A9\u534F\u4F5C\u628A\u60F3\u6CD5\u63A8\u5411\u771F\u5B9E\u7528\u6237\u3002",
    strengths: ["\u9002\u5E94\u53D8\u5316\u80FD\u529B\u5F3A", "\u6C9F\u901A\u548C\u5B9E\u73B0\u90FD\u5728\u7EBF", "\u9002\u5408\u65E9\u671F\u4EA7\u54C1\u548C\u589E\u957F\u5B9E\u9A8C"],
    risks: ["\u5BB9\u6613\u540C\u65F6\u6253\u5F00\u592A\u591A\u6218\u7EBF", "\u9700\u8981\u5B9A\u671F\u6536\u675F\u6280\u672F\u503A"]
  },
  ISTA: {
    name: "\u7CFB\u7EDF\u7814\u7A76\u5458",
    title: "The System Researcher",
    summary: "\u4F60\u559C\u6B22\u628A\u7CFB\u7EDF\u60F3\u900F\uFF0C\u518D\u7528\u7A33\u56FA\u7ED3\u6784\u8868\u8FBE\u7406\u89E3\u3002",
    strengths: ["\u7406\u89E3\u6DF1\u3001\u5224\u65AD\u7A33", "\u9002\u5408\u590D\u6742\u9886\u57DF\u5EFA\u6A21", "\u80FD\u53D1\u73B0\u9690\u85CF\u98CE\u9669"],
    risks: ["\u53EF\u80FD\u542F\u52A8\u8F83\u6162", "\u9700\u8981\u7528\u5C0F\u6B65\u9A8C\u8BC1\u9632\u6B62\u8FC7\u5EA6\u5206\u6790"]
  },
  ISTO: {
    name: "\u67B6\u6784\u5BFC\u5E08",
    title: "The Architecture Mentor",
    summary: "\u4F60\u64C5\u957F\u7406\u89E3\u590D\u6742\u7CFB\u7EDF\uFF0C\u5E76\u628A\u8FD9\u79CD\u7406\u89E3\u8F6C\u5316\u6210\u56E2\u961F\u53EF\u5171\u4EAB\u7684\u77E5\u8BC6\u3002",
    strengths: ["\u80FD\u505A\u6DF1\u5EA6\u6280\u672F\u62C6\u89E3", "\u9002\u5408\u5E26\u6559\u548C\u6280\u672F\u65B9\u6848\u8BC4\u5BA1", "\u5584\u4E8E\u5EFA\u7ACB\u5171\u540C\u8BED\u8A00"],
    risks: ["\u53EF\u80FD\u8BB2\u5F97\u6BD4\u505A\u5F97\u591A", "\u9700\u8981\u7559\u610F\u4E0D\u540C\u7ECF\u9A8C\u5C42\u540C\u5B66\u7684\u5438\u6536\u6210\u672C"]
  },
  ISEA: {
    name: "\u6545\u969C\u4FA6\u63A2",
    title: "The Incident Detective",
    summary: "\u4F60\u51B7\u9759\u3001\u7EC6\u81F4\u3001\u8BC1\u636E\u5BFC\u5411\uFF0C\u64C5\u957F\u4ECE\u73B0\u8C61\u8FFD\u5230\u6839\u56E0\u3002",
    strengths: ["\u6392\u969C\u80FD\u529B\u5F3A", "\u91CD\u89C6\u6570\u636E\u548C\u590D\u73B0", "\u9002\u5408\u7A33\u5B9A\u6027\u3001\u6027\u80FD\u548C\u5B89\u5168\u65B9\u5411"],
    risks: ["\u53EF\u80FD\u8FC7\u5EA6\u504F\u5411\u95EE\u9898\u5206\u6790", "\u5BB9\u6613\u5FFD\u7565\u5BF9\u5916\u540C\u6B65"]
  },
  ISEO: {
    name: "\u5F00\u653E\u8BCA\u65AD\u5E08",
    title: "The Open Debugger",
    summary: "\u4F60\u80FD\u628A\u590D\u6742\u95EE\u9898\u67E5\u6E05\u695A\uFF0C\u4E5F\u613F\u610F\u628A\u8FC7\u7A0B\u900F\u660E\u5316\uFF0C\u5E2E\u52A9\u56E2\u961F\u4E00\u8D77\u5347\u7EA7\u3002",
    strengths: ["\u64C5\u957F\u534F\u540C\u6392\u969C", "\u80FD\u6C89\u6DC0\u4E8B\u6545\u590D\u76D8", "\u9002\u5408 SRE\u3001\u652F\u6301\u590D\u6742\u7CFB\u7EDF\u7684\u89D2\u8272"],
    risks: ["\u5BB9\u6613\u88AB\u5404\u79CD\u6C42\u52A9\u6253\u65AD", "\u9700\u8981\u4FDD\u62A4\u6DF1\u5EA6\u5206\u6790\u65F6\u95F4"]
  },
  IDTA: {
    name: "\u6A21\u578B\u63A2\u7D22\u8005",
    title: "The Concept Explorer",
    summary: "\u4F60\u559C\u6B22\u63A2\u7D22\u95EE\u9898\u7A7A\u95F4\uFF0C\u627E\u5230\u8F7B\u5DE7\u4F46\u6709\u7406\u8BBA\u652F\u6491\u7684\u89E3\u6CD5\u3002",
    strengths: ["\u6982\u5FF5\u654F\u611F\u5EA6\u9AD8", "\u9002\u5408\u7B97\u6CD5\u3001\u8BED\u8A00\u3001\u6846\u67B6\u5185\u6838\u7B49\u65B9\u5411", "\u80FD\u63D0\u51FA\u65B0\u89C6\u89D2"],
    risks: ["\u53EF\u80FD\u4E0D\u591F\u5173\u6CE8\u843D\u5730\u7EC6\u8282", "\u9700\u8981\u66F4\u9891\u7E41\u5730\u4EA4\u4ED8\u4E2D\u95F4\u6210\u679C"]
  },
  IDTO: {
    name: "\u5F00\u6E90\u601D\u60F3\u5BB6",
    title: "The Open Source Thinker",
    summary: "\u4F60\u4EAB\u53D7\u63A2\u7D22\u65B0\u8303\u5F0F\uFF0C\u5E76\u901A\u8FC7\u793E\u533A\u4EA4\u6D41\u8BA9\u60F3\u6CD5\u6210\u957F\u3002",
    strengths: ["\u9002\u5408\u5F00\u6E90\u3001\u7814\u7A76\u578B\u5DE5\u5177\u548C\u6280\u672F\u5185\u5BB9", "\u80FD\u8FDE\u63A5\u4E0D\u540C\u601D\u8DEF", "\u8868\u8FBE\u548C\u62BD\u8C61\u80FD\u529B\u5F3A"],
    risks: ["\u53EF\u80FD\u88AB\u65B0\u60F3\u6CD5\u5206\u6563\u6CE8\u610F\u529B", "\u9700\u8981\u660E\u786E\u9879\u76EE\u8FB9\u754C"]
  },
  IDEA: {
    name: "\u5B9E\u9A8C\u4FEE\u884C\u8005",
    title: "The Quiet Experimenter",
    summary: "\u4F60\u901A\u8FC7\u5B9E\u9A8C\u7406\u89E3\u4E16\u754C\uFF0C\u559C\u6B22\u72EC\u7ACB\u9A8C\u8BC1\u3001\u9010\u6B65\u903C\u8FD1\u7B54\u6848\u3002",
    strengths: ["\u5B9E\u9A8C\u8BBE\u8BA1\u624E\u5B9E", "\u80FD\u8010\u5FC3\u5904\u7406\u4E0D\u786E\u5B9A\u95EE\u9898", "\u9002\u5408\u6027\u80FD\u8C03\u4F18\u548C\u539F\u578B\u9A8C\u8BC1"],
    risks: ["\u53EF\u80FD\u6C89\u6D78\u5728\u5C40\u90E8\u5B9E\u9A8C\u91CC", "\u9700\u8981\u4E3B\u52A8\u66B4\u9732\u8FDB\u5C55\u548C\u7ED3\u8BBA"]
  },
  IDEO: {
    name: "\u5F00\u6E90\u521B\u5BA2",
    title: "The Community Maker",
    summary: "\u4F60\u559C\u6B22\u63A2\u7D22\u3001\u8BD5\u9A8C\u548C\u5206\u4EAB\uFF0C\u7ECF\u5E38\u628A\u5C0F\u60F3\u6CD5\u505A\u6210\u522B\u4EBA\u4E5F\u80FD\u4F7F\u7528\u7684\u4E1C\u897F\u3002",
    strengths: ["\u521B\u9020\u529B\u5F3A", "\u4E50\u4E8E\u5206\u4EAB", "\u9002\u5408\u5DE5\u5177\u3001\u63D2\u4EF6\u3001\u793E\u533A\u9879\u76EE\u548C\u6280\u672F\u5185\u5BB9"],
    risks: ["\u5BB9\u6613\u5F00\u65B0\u5751", "\u9700\u8981\u7EF4\u62A4\u8282\u594F\u548C\u957F\u671F\u627F\u8BFA"]
  }
};

// src/scoring.js
function createEmptyScores() {
  return Object.fromEntries(
    DIMENSIONS.flatMap(
      (dimension) => dimension.letters.map((letter) => [letter, 0])
    )
  );
}
function scoreAnswers(answers) {
  const scores = createEmptyScores();
  for (const answer of answers) {
    if (!Object.hasOwn(scores, answer.letter)) {
      throw new Error(`Unknown answer letter: ${answer.letter}`);
    }
    scores[answer.letter] += 1;
  }
  const dimensions = DIMENSIONS.map((dimension) => {
    const [left, right] = dimension.letters;
    const leftScore = scores[left];
    const rightScore = scores[right];
    const winner = leftScore >= rightScore ? left : right;
    const total = leftScore + rightScore;
    const confidence = total === 0 ? 0 : Math.round(Math.abs(leftScore - rightScore) / total * 100);
    return {
      key: dimension.key,
      label: dimension.label,
      letters: dimension.letters,
      names: dimension.names,
      scores: {
        [left]: leftScore,
        [right]: rightScore
      },
      winner,
      confidence
    };
  });
  const code = dimensions.map((dimension) => dimension.winner).join("");
  const type = TYPES[code];
  if (!type) {
    throw new Error(`No CCTI type definition found for ${code}`);
  }
  return {
    code,
    type,
    scores,
    dimensions
  };
}

// src/App.jsx
function App({ presetAnswers, showShare }) {
  const { exit } = useApp();
  const [state, setState] = useState2("welcome");
  const [currentIndex, setCurrentIndex] = useState2(0);
  const [answers, setAnswers] = useState2([]);
  const [result, setResult] = useState2(null);
  const isTTY = process.stdin.isTTY;
  useEffect2(() => {
    if (presetAnswers && presetAnswers.length > 0) {
      const calculatedResult = scoreAnswers(presetAnswers);
      setResult(calculatedResult);
      setState(showShare ? "share" : "result");
    }
  }, [presetAnswers, showShare]);
  useInput2((input, key) => {
    if (!isTTY || presetAnswers) return;
    if (state === "welcome" && key.return) {
      setState("testing");
    }
    if (state === "result" && input.toLowerCase() === "s") {
      setState("share");
    }
    if ((state === "result" || state === "share") && key.return) {
      exit();
    }
  });
  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setState("calculating");
      setTimeout(() => {
        const calculatedResult = scoreAnswers(newAnswers);
        setResult(calculatedResult);
        setState("result");
      }, 500);
    }
  };
  if (state === "calculating") {
    return /* @__PURE__ */ React5.createElement(Box5, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React5.createElement(Text5, { color: "cyan" }, "\u6B63\u5728\u5206\u6790\u4F60\u7684\u4EE3\u7801\u4EBA\u683C..."), /* @__PURE__ */ React5.createElement(Box5, { marginTop: 1 }, /* @__PURE__ */ React5.createElement(Text5, { dimColor: true }, "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 50%")));
  }
  if (state === "welcome" && !presetAnswers) {
    return /* @__PURE__ */ React5.createElement(Welcome, { onStart: () => setState("testing") });
  }
  if (state === "testing") {
    return /* @__PURE__ */ React5.createElement(
      Question,
      {
        question: QUESTIONS[currentIndex],
        current: currentIndex + 1,
        total: QUESTIONS.length,
        onAnswer: handleAnswer
      }
    );
  }
  if (state === "result" && result) {
    return /* @__PURE__ */ React5.createElement(Box5, { flexDirection: "column" }, /* @__PURE__ */ React5.createElement(Result, { result }), /* @__PURE__ */ React5.createElement(Box5, { marginTop: 1 }, /* @__PURE__ */ React5.createElement(Text5, { dimColor: true }, "\u6309 S \u67E5\u770B\u5206\u4EAB\u5361\u7247\uFF0C\u6309 Enter \u9000\u51FA")));
  }
  if (state === "share" && result) {
    return /* @__PURE__ */ React5.createElement(Box5, { flexDirection: "column" }, /* @__PURE__ */ React5.createElement(ShareCard, { result }), /* @__PURE__ */ React5.createElement(Box5, { marginTop: 1 }, /* @__PURE__ */ React5.createElement(Text5, { dimColor: true }, "\u6309 Enter \u9000\u51FA")));
  }
  return /* @__PURE__ */ React5.createElement(Box5, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React5.createElement(Text5, { color: "cyan" }, "\u6B63\u5728\u8BA1\u7B97..."));
}

// src/format.js
var RESET = "\x1B[0m";
var BOLD = "\x1B[1m";
var DIM = "\x1B[2m";
var CYAN = "\x1B[36m";
var GREEN = "\x1B[32m";
var YELLOW = "\x1B[33m";
function color(text, code) {
  if (!process.stdout.isTTY || process.env.NO_COLOR) {
    return text;
  }
  return `${code}${text}${RESET}`;
}
function formatResult(result) {
  const lines = [];
  lines.push("");
  lines.push(color(`\u4F60\u7684 CCTI \u7C7B\u578B\u662F\uFF1A${result.code} - ${result.type.name}`, BOLD + CYAN));
  lines.push(color(result.type.title, DIM));
  lines.push("");
  lines.push(result.type.summary);
  lines.push("");
  lines.push(color("\u7EF4\u5EA6\u7ED3\u679C", BOLD));
  for (const dimension of result.dimensions) {
    const [left, right] = dimension.letters;
    const [leftName, rightName] = dimension.names;
    const leftScore = dimension.scores[left];
    const rightScore = dimension.scores[right];
    const label = `${dimension.label}: ${left}${leftScore} / ${right}${rightScore}`;
    const winnerName = dimension.winner === left ? leftName : rightName;
    lines.push(`- ${label} -> ${dimension.winner} (${winnerName}), \u503E\u5411\u5F3A\u5EA6 ${dimension.confidence}%`);
  }
  lines.push("");
  lines.push(color("\u4F60\u64C5\u957F", BOLD + GREEN));
  for (const item of result.type.strengths) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push(color("\u9700\u8981\u7559\u610F", BOLD + YELLOW));
  for (const item of result.type.risks) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push(color("\u5206\u4EAB\u6587\u6848", BOLD));
  lines.push(`\u6211\u662F ${result.code} ${result.type.name}\u3002\u4F60\u4E5F\u6765\u6D4B\u6D4B\u81EA\u5DF1\u7684\u4EE3\u7801\u4EBA\u683C\uFF1Anpx github:peter-xs/CCTI`);
  lines.push("");
  return lines.join("\n");
}
function formatTypeList() {
  const lines = [];
  lines.push(color("CCTI 16 \u79CD\u4EE3\u7801\u4EBA\u683C", BOLD + CYAN));
  lines.push("");
  for (const [code, type] of Object.entries(TYPES)) {
    lines.push(`${code} ${type.name} - ${type.summary}`);
  }
  lines.push("");
  lines.push(color("\u56DB\u4E2A\u7EF4\u5EA6", BOLD));
  for (const dimension of DIMENSIONS) {
    const [left, right] = dimension.letters;
    const [leftName, rightName] = dimension.names;
    lines.push(`- ${dimension.label}: ${left} ${leftName} / ${right} ${rightName}`);
  }
  return lines.join("\n");
}
function formatShareCard(result) {
  const { code, type, dimensions } = result;
  const dimInfo = dimensions.map((d) => {
    const [left, right] = d.letters;
    const leftScore = d.scores[left];
    const rightScore = d.scores[right];
    const total = leftScore + rightScore;
    const confidence = Math.round(Math.abs(leftScore - rightScore) / total * 100);
    return `${d.winner}(${confidence}%)`;
  }).join(" ");
  const card = `
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551                                      \u2551
\u2551          \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551             \u2551
\u2551         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551             \u2551
\u2551         \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551             \u2551
\u2551          \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D             \u2551
\u2551                                      \u2551
\u2551  CCTI - Code Character Type Indicator\u2551
\u2551                                      \u2551
\u2551  ${code.padEnd(4)} ${type.name.padEnd(12)}        \u2551
\u2551  ${type.title.padEnd(28)}    \u2551
\u2551                                      \u2551
\u2551  ${dimInfo.padEnd(28)}    \u2551
\u2551                                      \u2551
\u2551  npx github:peter-xs/CCTI            \u2551
\u2551                                      \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`;
  const lines = [];
  lines.push("");
  lines.push(color("\u5206\u4EAB\u5361\u7247\u5DF2\u751F\u6210\uFF01", BOLD + CYAN));
  lines.push("");
  lines.push(card);
  lines.push("");
  lines.push(color("\u7B80\u77ED\u5206\u4EAB\u6587\u6848\uFF1A", BOLD + GREEN));
  lines.push(`\u6211\u662F ${code} ${type.name}\u3002\u4F60\u4E5F\u6765\u6D4B\u6D4B\uFF1Anpx github:peter-xs/CCTI`);
  lines.push("");
  return lines.join("\n");
}

// bin/ccti-ink.js
var args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`CCTI - Coder Character Type Indicator

Usage:
  ccti           Start the interactive test (Ink UI)
  ccti --types   List all 16 result types
   ccti --json    Print the final result as JSON
  ccti --answers ABBA...  Score a 28-letter A/B answer string
  ccti --share   Generate share card after test
  ccti --help    Show help

Run from GitHub:
  npx github:peter-xs/CCTI
`);
  process.exit(0);
}
if (args.includes("--types")) {
  console.log(formatTypeList());
  process.exit(0);
}
if (args.includes("--json")) {
  const presetAnswers = getOptionValue(args, "--answers");
  if (!presetAnswers) {
    console.error("--json requires --answers");
    process.exit(1);
  }
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}
if (args.includes("--share") && args.includes("--answers")) {
  const presetAnswers = getOptionValue(args, "--answers");
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  if (!process.stdout.isTTY) {
    console.log(formatShareCard(result));
    process.exit(0);
  }
  render(React6.createElement(App, { presetAnswers: answers, showShare: true }));
} else if (args.includes("--answers")) {
  const presetAnswers = getOptionValue(args, "--answers");
  const answers = answersFromString(presetAnswers);
  const result = scoreAnswers(answers);
  if (!process.stdout.isTTY) {
    console.log(formatResult(result));
    process.exit(0);
  }
  render(React6.createElement(App, { presetAnswers: answers, showShare: false }));
} else {
  if (!process.stdout.isTTY) {
    console.error("CCTI interactive mode requires a TTY. Use --answers with preset answers.");
    process.exit(1);
  }
  render(React6.createElement(App));
}
function getOptionValue(args2, name) {
  const index = args2.indexOf(name);
  if (index === -1) return void 0;
  return args2[index + 1];
}
function answersFromString(value) {
  if (!value) {
    throw new Error("--answers requires a 28-letter string of A and B choices.");
  }
  const normalized = value.trim().toUpperCase();
  if (normalized.length !== QUESTIONS.length) {
    throw new Error(`--answers requires exactly ${QUESTIONS.length} choices. Received ${normalized.length}.`);
  }
  return [...normalized].map((choice, index) => {
    const question = QUESTIONS[index];
    if (choice === "A") {
      return {
        questionId: question.id,
        dimension: question.dimension,
        letter: question.options[0].letter
      };
    }
    if (choice === "B") {
      return {
        questionId: question.id,
        dimension: question.dimension,
        letter: question.options[1].letter
      };
    }
    throw new Error(`Invalid answer "${choice}" at position ${index + 1}. Use only A or B.`);
  });
}
