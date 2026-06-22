#!/usr/bin/env node

// bin/ccti-ink.js
import React6 from "react";
import { render } from "ink";
// src/components/Welcome.jsx
import React, { useEffect, useState } from "react";
import { Box, Text, useInput } from "ink";

// src/components/Question.jsx
import React2, { useState as useState2 } from "react";
import { Box as Box2, Text as Text2, useInput as useInput2 } from "ink";

// src/components/Result.jsx
import React3, { useEffect as useEffect2, useState as useState3 } from "react";
import { Box as Box3, Text as Text3 } from "ink";

// src/components/ShareCard.jsx
import React4 from "react";
import { Box as Box4, Text as Text4 } from "ink";

// src/model.js
var DIMENSIONS = [
  { key: "C", name: "Construct", opposite: "I", full: "Construct / Investigate" },
  { key: "I", name: "Investigate", opposite: "C", full: "Construct / Investigate" },
  { key: "S", name: "Structure", opposite: "D", full: "Structure / Dynamic" },
  { key: "D", name: "Dynamic", opposite: "S", full: "Structure / Dynamic" },
  { key: "T", name: "Theory", opposite: "E", full: "Theory / Empirical" },
  { key: "E", name: "Empirical", opposite: "T", full: "Theory / Empirical" },
  { key: "A", name: "Alone", opposite: "O", full: "Alone / Open" },
  { key: "O", name: "Open", opposite: "A", full: "Alone / Open" }
];
var QUESTIONS = [
  {
    id: 1,
    text: "When starting a new project, you prefer to...",
    options: [
      { label: "A", text: "Build something tangible and useful right away", dimension: "C", weight: 1 },
      { label: "B", text: "Explore the problem space and research existing solutions", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 2,
    text: "Your ideal codebase is...",
    options: [
      { label: "A", text: "Well-organized with clear patterns and conventions", dimension: "S", weight: 1 },
      { label: "B", text: "Flexible and adaptable to changing requirements", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 3,
    text: "When learning a new technology, you...",
    options: [
      { label: "A", text: "Dive deep into the theory and underlying principles", dimension: "T", weight: 1 },
      { label: "B", text: "Start building and learn through hands-on experience", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 4,
    text: "You prefer to work...",
    options: [
      { label: "A", text: "Independently with deep focus and minimal interruptions", dimension: "A", weight: 1 },
      { label: "B", text: "Collaboratively with frequent team discussions", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 5,
    text: "When debugging, you typically...",
    options: [
      { label: "A", text: "Systematically trace through the code to find the root cause", dimension: "C", weight: 1 },
      { label: "B", text: "Experiment with different approaches to isolate the issue", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 6,
    text: "Your approach to code reviews is...",
    options: [
      { label: "A", text: "Focus on consistency, style, and following established patterns", dimension: "S", weight: 1 },
      { label: "B", text: "Look for innovative solutions and challenge existing approaches", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 7,
    text: "When designing a system, you prioritize...",
    options: [
      { label: "A", text: "Mathematical correctness and theoretical soundness", dimension: "T", weight: 1 },
      { label: "B", text: "Practical performance and real-world usability", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 8,
    text: "In team meetings, you tend to...",
    options: [
      { label: "A", text: "Listen carefully and contribute thoughtful, well-considered ideas", dimension: "A", weight: 1 },
      { label: "B", text: "Engage actively and brainstorm ideas with the group", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 9,
    text: "Your favorite type of programming task is...",
    options: [
      { label: "A", text: "Building features and seeing immediate user impact", dimension: "C", weight: 1 },
      { label: "B", text: "Refactoring and optimizing existing code", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 10,
    text: "When it comes to project planning, you prefer...",
    options: [
      { label: "A", text: "Detailed specifications and clear milestones", dimension: "S", weight: 1 },
      { label: "B", text: "Agile iterations with room for discovery", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 11,
    text: "You value code that is...",
    options: [
      { label: "A", text: "Elegant and conceptually pure", dimension: "T", weight: 1 },
      { label: "B", text: "Robust and handles edge cases well", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 12,
    text: "Your communication style is...",
    options: [
      { label: "A", text: "Concise and focused, preferring written documentation", dimension: "A", weight: 1 },
      { label: "B", text: "Expressive and collaborative, enjoying pair programming", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 13,
    text: "When faced with a complex problem, you...",
    options: [
      { label: "A", text: "Break it down into smaller, manageable components", dimension: "C", weight: 1 },
      { label: "B", text: "Look for unconventional angles and creative solutions", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 14,
    text: "Your relationship with technical debt is...",
    options: [
      { label: "A", text: "Avoid it at all costs; clean code is paramount", dimension: "S", weight: 1 },
      { label: "B", text: "Accept it as a trade-off for speed and flexibility", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 15,
    text: "You prefer algorithms that are...",
    options: [
      { label: "A", text: "Provably optimal and well-understood", dimension: "T", weight: 1 },
      { label: "B", text: "Good enough and efficient in practice", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 16,
    text: "After a long coding session, you recharge by...",
    options: [
      { label: "A", text: "Spending time alone with personal projects or reading", dimension: "A", weight: 1 },
      { label: "B", text: "Socializing with friends or attending tech meetups", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 17,
    text: "Your code tends to be...",
    options: [
      { label: "A", text: "Practical and focused on solving the immediate problem", dimension: "C", weight: 1 },
      { label: "B", text: "Exploratory with potential for future extensibility", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 18,
    text: "When onboarding a new team member, you...",
    options: [
      { label: "A", text: "Provide comprehensive documentation and coding standards", dimension: "S", weight: 1 },
      { label: "B", text: "Pair program and let them learn by doing", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 19,
    text: "You are drawn to programming languages that...",
    options: [
      { label: "A", text: "Have strong type systems and formal semantics", dimension: "T", weight: 1 },
      { label: "B", text: "Are pragmatic and have large ecosystems", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 20,
    text: "In open source contributions, you prefer...",
    options: [
      { label: "A", text: "Working independently on well-defined issues", dimension: "A", weight: 1 },
      { label: "B", text: "Collaborating with the community on design decisions", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 21,
    text: "When your code breaks in production, you...",
    options: [
      { label: "A", text: "Methodically trace the issue using logs and monitoring", dimension: "C", weight: 1 },
      { label: "B", text: "Quickly patch and then investigate the root cause", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 22,
    text: "Your approach to testing is...",
    options: [
      { label: "A", text: "Comprehensive coverage with detailed test cases", dimension: "S", weight: 1 },
      { label: "B", text: "Targeted testing focused on critical paths", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 23,
    text: "You find satisfaction in...",
    options: [
      { label: "A", text: "Proving the correctness of your solution", dimension: "T", weight: 1 },
      { label: "B", text: "Seeing your code perform well under real-world load", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 24,
    text: "Your workspace setup reflects...",
    options: [
      { label: "A", text: "A quiet, organized environment for deep work", dimension: "A", weight: 1 },
      { label: "B", text: "A collaborative space with whiteboards and discussion areas", dimension: "O", weight: 1 }
    ]
  },
  {
    id: 25,
    text: "When evaluating a new framework, you care most about...",
    options: [
      { label: "A", text: "How quickly you can build production-ready features", dimension: "C", weight: 1 },
      { label: "B", text: "Its architectural innovations and unique approaches", dimension: "I", weight: 1 }
    ]
  },
  {
    id: 26,
    text: "Your git workflow is...",
    options: [
      { label: "A", text: "Structured with clear branch naming and commit conventions", dimension: "S", weight: 1 },
      { label: "B", text: "Flexible, adapting to the needs of each feature", dimension: "D", weight: 1 }
    ]
  },
  {
    id: 27,
    text: "You believe the best code is...",
    options: [
      { label: "A", text: "Self-documenting with clear abstractions", dimension: "T", weight: 1 },
      { label: "B", text: "Well-commented with practical examples", dimension: "E", weight: 1 }
    ]
  },
  {
    id: 28,
    text: "In a hackathon, you are most likely to...",
    options: [
      { label: "A", text: "Work on a polished solo project that showcases your skills", dimension: "A", weight: 1 },
      { label: "B", text: "Join a team and contribute to a collaborative effort", dimension: "O", weight: 1 }
    ]
  }
];
var TYPES = {
  CIST: {
    code: "CIST",
    name: "The Architect",
    description: "You build robust systems with meticulous attention to structure and theoretical soundness. Your code is a cathedral—beautifully designed, carefully constructed, and built to last. You excel at creating frameworks and libraries that others rely on.",
    strengths: ["System design", "Code organization", "Technical documentation", "Long-term planning"],
    famous: "Linux kernel maintainers, language designers"
  },
  CISE: {
    code: "CISE",
    name: "The Craftsman",
    description: "You are a practical builder who values clean, well-structured code that solves real problems. You believe that good code is code that works, and you have the discipline to make it maintainable too.",
    strengths: ["Full-stack development", "Code refactoring", "Best practices", "Mentoring"],
    famous: "Senior full-stack developers, tech leads"
  },
  CIDT: {
    code: "CIDT",
    name: "The Pioneer",
    description: "You explore new territories in code, building innovative solutions while maintaining structural integrity. You are not afraid to challenge conventions when you see a better way.",
    strengths: ["Rapid prototyping", "Innovation", "Problem-solving", "Architecture evolution"],
    famous: "Startup CTOs, framework creators"
  },
  CIDE: {
    code: "CIDE",
    name: "The Hacker",
    description: "You get things done. You build fast, iterate quickly, and are not afraid to break things to move forward. Your pragmatic approach and dynamic style make you invaluable in fast-paced environments.",
    strengths: ["Rapid development", "MVP creation", "Adaptability", "Resourcefulness"],
    famous: "Startup founders, hackathon winners"
  },
  COST: {
    code: "COST",
    name: "The Collaborator",
    description: "You build bridges between people and code. Your structured approach combined with your openness makes you the glue that holds teams together. You excel at creating shared understanding.",
    strengths: ["Team leadership", "Code review", "Knowledge sharing", "Cross-functional work"],
    famous: "Engineering managers, developer advocates"
  },
  COSE: {
    code: "COSE",
    name: "The Mentor",
    description: "You are a natural teacher who builds practical solutions while bringing others along. Your empathy and structured thinking make you an invaluable team member and leader.",
    strengths: ["Pair programming", "Onboarding", "Technical writing", "Community building"],
    famous: "Developer advocates, engineering coaches"
  },
  CODT: {
    code: "CODT",
    name: "The Visionary",
    description: "You see the future of code and are not afraid to build it with a team. Your dynamic, open approach to development inspires others and pushes boundaries.",
    strengths: ["Innovation leadership", "Open source", "Conference speaking", "Thought leadership"],
    famous: "Open source maintainers, conference speakers"
  },
  CODE: {
    code: "CODE",
    name: "The Energizer",
    description: "You bring energy and pragmatism to every project. Your dynamic, collaborative style makes you the heart of any development team. You build fast and bring people with you.",
    strengths: ["Team motivation", "Rapid iteration", "User empathy", "Cross-pollination"],
    famous: "Product engineers, team leads"
  },
  IIST: {
    code: "IIST",
    name: "The Researcher",
    description: "You dive deep into problems, seeking fundamental understanding before building. Your structured, theoretical approach produces elegant solutions to complex challenges.",
    strengths: ["Algorithm design", "Performance optimization", "Deep debugging", "Research"],
    famous: "Compiler engineers, database architects"
  },
  IISE: {
    code: "IISE",
    name: "The Analyst",
    description: "You investigate problems with a methodical, practical approach. Your ability to analyze systems and find empirical solutions makes you indispensable for complex debugging.",
    strengths: ["Debugging", "Performance tuning", "System analysis", "Data-driven decisions"],
    famous: "Site reliability engineers, data engineers"
  },
  IIDT: {
    code: "IIDT",
    name: "The Explorer",
    description: "You are driven by curiosity and a desire to understand. Your dynamic approach to investigation leads you to discover novel solutions that others miss.",
    strengths: ["Research", "Innovation", "Problem decomposition", "Creative solutions"],
    famous: "Research engineers, AI practitioners"
  },
  IIDE: {
    code: "IIDE",
    name: "The Experimenter",
    description: "You learn by doing, experimenting your way to solutions. Your empirical, dynamic style makes you adaptable and resourceful in the face of uncertainty.",
    strengths: ["Rapid experimentation", "A/B testing", "Prototyping", "Learning new tech"],
    famous: "Growth engineers, ML engineers"
  },
  IOST: {
    code: "IOST",
    name: "The Connector",
    description: "You bridge the gap between deep technical knowledge and collaborative development. Your theoretical understanding combined with your openness makes you a powerful communicator.",
    strengths: ["Technical communication", "Documentation", "Teaching", "Architecture review"],
    famous: "Technical writers, developer relations"
  },
  IOSE: {
    code: "IOSE",
    name: "The Consultant",
    description: "You bring practical wisdom and collaborative energy to every project. Your empirical approach and communication skills make you a trusted advisor.",
    strengths: ["Consulting", "Code review", "Cross-team collaboration", "Best practices"],
    famous: "Staff engineers, consultants"
  },
  IODT: {
    code: "IODT",
    name: "The Philosopher",
    description: "You contemplate the deeper questions of software design and share your insights with the community. Your dynamic, open approach to theory inspires others.",
    strengths: ["Thought leadership", "Architecture", "Mentoring", "Conference speaking"],
    famous: "Distinguished engineers, language designers"
  },
  IODE: {
    code: "IODE",
    name: "The Polymath",
    description: "You draw from diverse experiences and share your learnings openly. Your empirical, dynamic, collaborative approach makes you a well-rounded and influential developer.",
    strengths: ["Full-stack expertise", "Community building", "Knowledge sharing", "Adaptability"],
    famous: "Tech influencers, developer advocates"
  }
};

// src/scoring.js
function calculateScores(answers) {
  const scores = {};
  for (const dim of DIMENSIONS) {
    scores[dim.key] = 0;
  }
  for (const answer of answers) {
    const { dimension, weight } = answer;
    if (scores[dimension] !== void 0) {
      scores[dimension] += weight;
    }
  }
  return scores;
}
function determineType(scores) {
  const pairs = [
    ["C", "I"],
    ["S", "D"],
    ["T", "E"],
    ["A", "O"]
  ];
  let typeCode = "";
  for (const [a, b] of pairs) {
    typeCode += scores[a] >= scores[b] ? a : b;
  }
  return TYPES[typeCode] || TYPES["CODE"];
}
function getDimensionBreakdown(scores) {
  const pairs = [
    ["C", "I"],
    ["S", "D"],
    ["T", "E"],
    ["A", "O"]
  ];
  return pairs.map(([a, b]) => {
    const total = scores[a] + scores[b];
    const aPct = total > 0 ? Math.round(scores[a] / total * 100) : 50;
    const bPct = total > 0 ? Math.round(scores[b] / total * 100) : 50;
    return {
      dimension: `${a}-${b}`,
      left: { key: a, score: scores[a], pct: aPct },
      right: { key: b, score: scores[b], pct: bPct }
    };
  });
}

// src/format.js
function wrapText(text, maxWidth) {
  if (text.length <= maxWidth) return [text];
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxWidth) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}
function center(text, width) {
  const pad = Math.max(0, width - text.length);
  const left = Math.floor(pad / 2);
  return " ".repeat(left) + text;
}
function formatResult(result) {
  const { type, scores, breakdown } = result;
  const width = 60;
  const lines = [];
  lines.push("=".repeat(width));
  lines.push(center(`CCTI Result: ${type.code}`, width));
  lines.push(center(type.name, width));
  lines.push("=".repeat(width));
  lines.push("");
  for (const line of wrapText(type.description, width - 4)) {
    lines.push("  " + line);
  }
  lines.push("");
  lines.push("Dimension Breakdown:");
  for (const dim of breakdown) {
    const barWidth = 20;
    const leftBar = Math.round(dim.left.pct / 100 * barWidth);
    const rightBar = barWidth - leftBar;
    const bar = "█".repeat(leftBar) + "░".repeat(rightBar);
    lines.push(`  ${dim.left.key} ${bar} ${dim.right.key}  (${dim.left.pct}% / ${dim.right.pct}%)`);
  }
  lines.push("");
  lines.push("Strengths:");
  for (const s of type.strengths) {
    lines.push(`  \u2022 ${s}`);
  }
  lines.push("");
  lines.push(`Famous ${type.code}s: ${type.famous}`);
  lines.push("=".repeat(width));
  return lines.join("\n");
}
function generateShareCard(result) {
  const { type } = result;
  const width = 44;
  const lines = [];
  lines.push("\u250C" + "\u2500".repeat(width - 2) + "\u2510");
  lines.push("\u2502" + center("CCTI", width - 2) + "\u2502");
  lines.push("\u2502" + center("Code Character Type Indicator", width - 2) + "\u2502");
  lines.push("\u251C" + "\u2500".repeat(width - 2) + "\u2524");
  lines.push("\u2502" + center(type.code, width - 2) + "\u2502");
  lines.push("\u2502" + center(type.name, width - 2) + "\u2502");
  lines.push("\u2514" + "\u2500".repeat(width - 2) + "\u2518");
  return lines.join("\n");
}

// src/components/Welcome.jsx
function Welcome({ onStart }) {
  const [showHint, setShowHint] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1500);
    return () => clearTimeout(t);
  }, []);
  useInput((input, key) => {
    if (key.return || input === " ") {
      onStart();
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { flexDirection: "column", alignItems: "center", padding: 1 }, /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502                                            \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502      CCTI                                  \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502      Code Character Type Indicator          \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502                                            \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502      Discover your programming personality  \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2502                                            \u2502"), /* @__PURE__ */ React.createElement(Text, { color: "cyan", bold: true }, "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"), /* @__PURE__ */ React.createElement(Box, { marginTop: 1 }, /* @__PURE__ */ React.createElement(Text, { color: "gray" }, "28 questions \u00B7 4 dimensions \u00B7 16 types")), showHint && /* @__PURE__ */ React.createElement(Box, { marginTop: 1 }, /* @__PURE__ */ React.createElement(Text, { color: "yellow" }, "Press Enter or Space to start")));
}

// src/components/Question.jsx
function Question({ question, current, total, onAnswer }) {
  const [selected, setSelected] = useState2(null);
  const [showResult, setShowResult] = useState2(false);
  useInput2((input, key) => {
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
  return /* @__PURE__ */ React2.createElement(Box2, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(Text2, { color: "gray" }, `Question ${current} of ${total}`)), /* @__PURE__ */ React2.createElement(Box2, { marginBottom: 1 }, /* @__PURE__ */ React2.createElement(Text2, { bold: true }, question.text)), /* @__PURE__ */ React2.createElement(Box2, { flexDirection: "column", marginTop: 1 }, question.options.map((opt) => {
    const isSelected = selected === opt.label;
    const marker = isSelected ? "\u25B8" : " ";
    const color = isSelected ? "green" : "white";
    return /* @__PURE__ */ React2.createElement(Box2, { key: opt.label, marginBottom: 1 }, /* @__PURE__ */ React2.createElement(Text2, { color }, `${marker} ${opt.label}. ${opt.text}`));
  })), !selected && /* @__PURE__ */ React2.createElement(Box2, { marginTop: 1 }, /* @__PURE__ */ React2.createElement(Text2, { color: "gray" }, "Use \u2191\u2193 arrow keys or A/B to select, then Enter to confirm")));
}

// src/components/Result.jsx
function Result({ result, onRestart, onShare }) {
  const [showBreakdown, setShowBreakdown] = useState3(false);
  useEffect2(() => {
    const t = setTimeout(() => setShowBreakdown(true), 500);
    return () => clearTimeout(t);
  }, []);
  const { type, breakdown } = result;
  return /* @__PURE__ */ React3.createElement(Box3, { flexDirection: "column", padding: 1, alignItems: "center" }, /* @__PURE__ */ React3.createElement(Box3, { marginBottom: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, "\u2502                                            \u2502"), /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, `\u2502         ${type.code} - ${type.name.padEnd(24)}\u2502`), /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, "\u2502                                            \u2502"), /* @__PURE__ */ React3.createElement(Text3, { color: "cyan", bold: true }, "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518")), /* @__PURE__ */ React3.createElement(Box3, { width: 60, marginTop: 1 }, /* @__PURE__ */ React3.createElement(Text3, { color: "gray" }, type.description)), showBreakdown && /* @__PURE__ */ React3.createElement(Box3, { flexDirection: "column", marginTop: 1, width: 60 }, /* @__PURE__ */ React3.createElement(Text3, { bold: true, underline: true }, "Dimension Breakdown"), breakdown.map((dim) => {
    const barWidth = 20;
    const leftBar = Math.round(dim.left.pct / 100 * barWidth);
    const rightBar = barWidth - leftBar;
    const bar = "\u2588".repeat(leftBar) + "\u2591".repeat(rightBar);
    return /* @__PURE__ */ React3.createElement(Box3, { key: dim.dimension, marginTop: 1 }, /* @__PURE__ */ React3.createElement(Text3, null, `${dim.left.key} ${bar} ${dim.right.key}  (${dim.left.pct}% / ${dim.right.pct}%)`));
  })), /* @__PURE__ */ React3.createElement(Box3, { flexDirection: "column", marginTop: 1, width: 60 }, /* @__PURE__ */ React3.createElement(Text3, { bold: true, underline: true }, "Strengths"), type.strengths.map((s) => /* @__PURE__ */ React3.createElement(Text3, { key: s }, `\u2022 ${s}`))), /* @__PURE__ */ React3.createElement(Box3, { marginTop: 2 }, /* @__PURE__ */ React3.createElement(Text3, { color: "yellow" }, "Press R to restart, S to share")));
}

// src/components/ShareCard.jsx
function ShareCard({ result, onBack }) {
  const { type } = result;
  const card = generateShareCard(result);
  return /* @__PURE__ */ React4.createElement(Box4, { flexDirection: "column", alignItems: "center", padding: 1 }, /* @__PURE__ */ React4.createElement(Text4, { color: "cyan" }, card), /* @__PURE__ */ React4.createElement(Box4, { marginTop: 1 }, /* @__PURE__ */ React4.createElement(Text4, { color: "gray" }, "Copy the above to share your result!")), /* @__PURE__ */ React4.createElement(Box4, { marginTop: 1 }, /* @__PURE__ */ React4.createElement(Text4, { color: "yellow" }, "Press B to go back")));
}

// src/App.jsx
import React5, { useState as useState4, useCallback } from "react";
import { Box as Box5, Text as Text5, useInput as useInput3, useApp } from "ink";
var STEPS = {
  WELCOME: "welcome",
  QUESTION: "question",
  RESULT: "result",
  SHARE: "share"
};
function App() {
  const { exit } = useApp();
  const [step, setStep] = useState4(STEPS.WELCOME);
  const [answers, setAnswers] = useState4([]);
  const [result, setResult] = useState4(null);
  const handleStart = useCallback(() => {
    setStep(STEPS.QUESTION);
  }, []);
  const handleAnswer = useCallback((option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (newAnswers.length >= QUESTIONS.length) {
      const scores = calculateScores(newAnswers);
      const type = determineType(scores);
      const breakdown = getDimensionBreakdown(scores);
      setResult({ type, scores, breakdown });
      setStep(STEPS.RESULT);
    }
  }, [answers]);
  const handleRestart = useCallback(() => {
    setAnswers([]);
    setResult(null);
    setStep(STEPS.WELCOME);
  }, []);
  const handleShare = useCallback(() => {
    setStep(STEPS.SHARE);
  }, []);
  const handleBack = useCallback(() => {
    setStep(STEPS.RESULT);
  }, []);
  useInput3((input, key) => {
    if (step === STEPS.RESULT) {
      if (input.toLowerCase() === "r") {
        handleRestart();
      } else if (input.toLowerCase() === "s") {
        handleShare();
      } else if (key.escape) {
        exit();
      }
    } else if (step === STEPS.SHARE) {
      if (input.toLowerCase() === "b" || key.escape) {
        handleBack();
      }
    } else if (step === STEPS.WELCOME && key.escape) {
      exit();
    }
  });
  return /* @__PURE__ */ React5.createElement(Box5, { flexDirection: "column" }, step === STEPS.WELCOME && /* @__PURE__ */ React5.createElement(Welcome, { onStart: handleStart }), step === STEPS.QUESTION && /* @__PURE__ */ React5.createElement(Question, { question: QUESTIONS[answers.length], current: answers.length + 1, total: QUESTIONS.length, onAnswer: handleAnswer }), step === STEPS.RESULT && result && /* @__PURE__ */ React5.createElement(Result, { result, onRestart: handleRestart, onShare: handleShare }), step === STEPS.SHARE && result && /* @__PURE__ */ React5.createElement(ShareCard, { result, onBack: handleBack }));
}

// bin/ccti-ink.js
render(/* @__PURE__ */ React6.createElement(App, null));
