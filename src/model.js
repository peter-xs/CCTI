export const DIMENSIONS = [
  {
    key: 'mindset',
    letters: ['C', 'I'],
    names: ['Construct', 'Investigate'],
    label: '编程思维方式',
  },
  {
    key: 'structure',
    letters: ['S', 'D'],
    names: ['Structure', 'Dynamic'],
    label: '代码组织策略',
  },
  {
    key: 'method',
    letters: ['T', 'E'],
    names: ['Theory', 'Empirical'],
    label: '问题解决路径',
  },
  {
    key: 'collaboration',
    letters: ['A', 'O'],
    names: ['Alone', 'Open'],
    label: '协作与影响力',
  },
];

export const QUESTIONS = [
  {
    id: 'q01',
    dimension: 'mindset',
    prompt: '接到一个新需求时，你更自然的第一步是？',
    options: [
      { letter: 'C', text: '先搭出一个能跑的版本，让问题变得具体。' },
      { letter: 'I', text: '先追问场景、边界和限制，弄清真正要解决什么。' },
    ],
  },
  {
    id: 'q02',
    dimension: 'mindset',
    prompt: '面对陌生代码库，你通常会？',
    options: [
      { letter: 'C', text: '从入口开始跑流程，边改边理解。' },
      { letter: 'I', text: '先读目录、依赖和关键抽象，画出心里的地图。' },
    ],
  },
  {
    id: 'q03',
    dimension: 'mindset',
    prompt: '你更享受哪类工作？',
    options: [
      { letter: 'C', text: '把一个想法做成用户真的能用的东西。' },
      { letter: 'I', text: '拆解复杂问题，找到隐藏的机制和原因。' },
    ],
  },
  {
    id: 'q04',
    dimension: 'mindset',
    prompt: '技术调研时，你更容易被什么吸引？',
    options: [
      { letter: 'C', text: '示例代码、模板项目、最快上手路径。' },
      { letter: 'I', text: '设计理念、权衡分析、实现原理。' },
    ],
  },
  {
    id: 'q05',
    dimension: 'mindset',
    prompt: '当需求还很模糊时，你倾向于？',
    options: [
      { letter: 'C', text: '做一个原型，用实际反馈推进讨论。' },
      { letter: 'I', text: '继续澄清问题，避免做出错误方向的原型。' },
    ],
  },
  {
    id: 'q06',
    dimension: 'mindset',
    prompt: '你对"边写边想"的感受更接近？',
    options: [
      { letter: 'C', text: '这是很自然的探索方式。' },
      { letter: 'I', text: '可以，但最好先知道探索边界。' },
    ],
  },
  {
    id: 'q07',
    dimension: 'mindset',
    prompt: '一次成功的编码体验，对你来说更像？',
    options: [
      { letter: 'C', text: '完成一个可见、可交付的功能。' },
      { letter: 'I', text: '终于理解一个复杂系统为什么这样运转。' },
    ],
  },
  {
    id: 'q08',
    dimension: 'structure',
    prompt: '你看到一个 800 行函数时，第一反应是？',
    options: [
      { letter: 'S', text: '拆分职责，让结构重新清楚起来。' },
      { letter: 'D', text: '先确认当前问题，不急着大范围改动。' },
    ],
  },
  {
    id: 'q09',
    dimension: 'structure',
    prompt: '你更不能忍受哪种项目？',
    options: [
      { letter: 'S', text: '能跑，但模块边界混乱。' },
      { letter: 'D', text: '结构漂亮，但改一个需求处处受限。' },
    ],
  },
  {
    id: 'q10',
    dimension: 'structure',
    prompt: '设计模块时，你更看重？',
    options: [
      { letter: 'S', text: '清晰的边界、命名和依赖方向。' },
      { letter: 'D', text: '适应变化的速度和改动成本。' },
    ],
  },
  {
    id: 'q11',
    dimension: 'structure',
    prompt: '遇到重复代码，你通常会？',
    options: [
      { letter: 'S', text: '尽快抽象，避免复制扩散。' },
      { letter: 'D', text: '先观察变化是否稳定，避免过早抽象。' },
    ],
  },
  {
    id: 'q12',
    dimension: 'structure',
    prompt: '你偏好的项目文档是？',
    options: [
      { letter: 'S', text: '架构图、约定、目录职责都比较完整。' },
      { letter: 'D', text: '短小直接，能帮助快速完成当前任务。' },
    ],
  },
  {
    id: 'q13',
    dimension: 'structure',
    prompt: '当产品方向频繁变化时，你会优先？',
    options: [
      { letter: 'S', text: '守住核心模型，避免系统失去形状。' },
      { letter: 'D', text: '减少承诺，让代码保持可替换、可删除。' },
    ],
  },
  {
    id: 'q14',
    dimension: 'structure',
    prompt: '你对"临时方案"的态度更接近？',
    options: [
      { letter: 'S', text: '可以有，但必须标清边界和还债计划。' },
      { letter: 'D', text: '现实项目需要它，关键是别让它变成永久方案。' },
    ],
  },
  {
    id: 'q15',
    dimension: 'method',
    prompt: '排查线上问题时，你更常用？',
    options: [
      { letter: 'T', text: '先建立假设，再按因果链验证。' },
      { letter: 'E', text: '先看日志、指标和复现路径，让数据说话。' },
    ],
  },
  {
    id: 'q16',
    dimension: 'method',
    prompt: '学习新技术时，你倾向于？',
    options: [
      { letter: 'T', text: '先理解核心概念和设计模型。' },
      { letter: 'E', text: '先写 demo，踩过坑再回头补理论。' },
    ],
  },
  {
    id: 'q17',
    dimension: 'method',
    prompt: '代码评审里，你更容易指出？',
    options: [
      { letter: 'T', text: '抽象不一致、边界不合理、概念混用。' },
      { letter: 'E', text: '异常没处理、测试不够、场景没覆盖。' },
    ],
  },
  {
    id: 'q18',
    dimension: 'method',
    prompt: '技术选型时，你更相信？',
    options: [
      { letter: 'T', text: '原则、模型和长期演进空间。' },
      { letter: 'E', text: '社区成熟度、性能数据和团队经验。' },
    ],
  },
  {
    id: 'q19',
    dimension: 'method',
    prompt: '你写测试时更在意？',
    options: [
      { letter: 'T', text: '测试能表达设计意图和不变量。' },
      { letter: 'E', text: '测试能覆盖真实事故和关键路径。' },
    ],
  },
  {
    id: 'q20',
    dimension: 'method',
    prompt: '当直觉和数据冲突时，你更可能？',
    options: [
      { letter: 'T', text: '重新检查数据是否反映了正确问题。' },
      { letter: 'E', text: '先尊重数据，再调整自己的判断。' },
    ],
  },
  {
    id: 'q21',
    dimension: 'method',
    prompt: '你更喜欢哪种技术文章？',
    options: [
      { letter: 'T', text: '把一个系统设计讲透的长文。' },
      { letter: 'E', text: '有代码、有 benchmark、有踩坑记录的实战文。' },
    ],
  },
  {
    id: 'q22',
    dimension: 'collaboration',
    prompt: '进入深度编码状态时，你更需要？',
    options: [
      { letter: 'A', text: '完整安静的时间块，少一点打断。' },
      { letter: 'O', text: '及时交流，避免方向跑偏。' },
    ],
  },
  {
    id: 'q23',
    dimension: 'collaboration',
    prompt: '你更愿意如何影响团队？',
    options: [
      { letter: 'A', text: '用高质量代码和稳定交付建立信任。' },
      { letter: 'O', text: '通过讨论、分享和工具推动大家一起变好。' },
    ],
  },
  {
    id: 'q24',
    dimension: 'collaboration',
    prompt: '遇到棘手技术分歧时，你倾向于？',
    options: [
      { letter: 'A', text: '先独立做足分析，再拿结论讨论。' },
      { letter: 'O', text: '尽早拉齐上下文，让大家一起收敛。' },
    ],
  },
  {
    id: 'q25',
    dimension: 'collaboration',
    prompt: '你对开源项目的兴趣更像？',
    options: [
      { letter: 'A', text: '需要时会读源码、提 issue 或修 bug。' },
      { letter: 'O', text: '愿意持续参与社区、维护项目或写文档。' },
    ],
  },
  {
    id: 'q26',
    dimension: 'collaboration',
    prompt: '在团队知识沉淀上，你更自然的做法是？',
    options: [
      { letter: 'A', text: '把关键逻辑写进代码、测试和清晰命名里。' },
      { letter: 'O', text: '主动写文档、做分享、建立协作约定。' },
    ],
  },
  {
    id: 'q27',
    dimension: 'collaboration',
    prompt: '当新人接手你的模块时，你希望他们主要依靠？',
    options: [
      { letter: 'A', text: '代码结构本身足够可读。' },
      { letter: 'O', text: 'README、示例和我留下的上下文说明。' },
    ],
  },
  {
    id: 'q28',
    dimension: 'collaboration',
    prompt: '你理想中的一天更接近？',
    options: [
      { letter: 'A', text: '少会、少消息，专注把核心问题解决掉。' },
      { letter: 'O', text: '编码、评审、讨论、分享之间节奏均衡。' },
    ],
  },
];

export const TYPES = {
  CSTA: {
    name: '架构建造师',
    title: 'The System Architect',
    summary: '你擅长把复杂想法落成稳定结构，喜欢让系统有清楚的骨架。',
    strengths: ['能把抽象落到工程实现', '重视边界和长期维护', '适合搭建核心模块'],
    risks: ['可能低估探索阶段的混乱价值', '容易在早期投入过多结构成本'],
  },
  CSTO: {
    name: '技术布道建造师',
    title: 'The Architecture Advocate',
    summary: '你能把系统设计讲清楚，也能带着团队一起把它做出来。',
    strengths: ['擅长对齐技术共识', '能输出规范和最佳实践', '适合平台、基础设施和技术领导角色'],
    risks: ['讨论和共识成本可能偏高', '容易把个人标准推广得过快'],
  },
  CSEA: {
    name: '可靠交付者',
    title: 'The Reliable Shipper',
    summary: '你关注可运行、可验证、可维护的交付结果，是项目里的稳定推进力量。',
    strengths: ['交付意识强', '能平衡质量与现实约束', '重视测试和反馈'],
    risks: ['可能对外部协作投入不足', '容易把复杂问题压在自己身上'],
  },
  CSEO: {
    name: '产品工程师',
    title: 'The Product Engineer',
    summary: '你善于把用户问题变成可落地方案，并通过协作持续改善体验。',
    strengths: ['产品感和工程感兼具', '适合跨职能合作', '能快速把反馈转成改进'],
    risks: ['可能被协作上下文切碎专注力', '容易为了推进而接受过多需求变化'],
  },
  CDTA: {
    name: '完美主义工匠',
    title: 'The Precise Craftsperson',
    summary: '你追求代码概念清晰，同时保留实现弹性，常能写出干净而不笨重的方案。',
    strengths: ['抽象判断敏锐', '能控制复杂度', '适合重构和核心库设计'],
    risks: ['可能对"不够优雅"的方案耐心较低', '容易延后交付来追求更好的形态'],
  },
  CDTO: {
    name: '框架创造者',
    title: 'The Framework Maker',
    summary: '你喜欢创建可复用工具和模式，并让更多人用更好的方式工作。',
    strengths: ['善于沉淀工具链', '能把个人经验变成团队资产', '适合 DX 和平台工程'],
    risks: ['可能构建超过当前需求的能力', '需要警惕工具维护成本'],
  },
  CDEA: {
    name: '快速实现者',
    title: 'The Practical Builder',
    summary: '你重视真实反馈和灵活实现，擅长在不确定中快速推进。',
    strengths: ['上手快、行动快', '能在变化中保持产出', '适合 MVP 和业务迭代'],
    risks: ['可能留下后续整理压力', '需要主动记录关键决策'],
  },
  CDEO: {
    name: '创业开发者',
    title: 'The Startup Engineer',
    summary: '你能一边探索一边交付，还能借助协作把想法推向真实用户。',
    strengths: ['适应变化能力强', '沟通和实现都在线', '适合早期产品和增长实验'],
    risks: ['容易同时打开太多战线', '需要定期收束技术债'],
  },
  ISTA: {
    name: '系统研究员',
    title: 'The System Researcher',
    summary: '你喜欢把系统想透，再用稳固结构表达理解。',
    strengths: ['理解深、判断稳', '适合复杂领域建模', '能发现隐藏风险'],
    risks: ['可能启动较慢', '需要用小步验证防止过度分析'],
  },
  ISTO: {
    name: '架构导师',
    title: 'The Architecture Mentor',
    summary: '你擅长理解复杂系统，并把这种理解转化成团队可共享的知识。',
    strengths: ['能做深度技术拆解', '适合带教和技术方案评审', '善于建立共同语言'],
    risks: ['可能讲得比做得多', '需要留意不同经验层同学的吸收成本'],
  },
  ISEA: {
    name: '故障侦探',
    title: 'The Incident Detective',
    summary: '你冷静、细致、证据导向，擅长从现象追到根因。',
    strengths: ['排障能力强', '重视数据和复现', '适合稳定性、性能和安全方向'],
    risks: ['可能过度偏向问题分析', '容易忽略对外同步'],
  },
  ISEO: {
    name: '开放诊断师',
    title: 'The Open Debugger',
    summary: '你能把复杂问题查清楚，也愿意把过程透明化，帮助团队一起升级。',
    strengths: ['擅长协同排障', '能沉淀事故复盘', '适合 SRE、支持复杂系统的角色'],
    risks: ['容易被各种求助打断', '需要保护深度分析时间'],
  },
  IDTA: {
    name: '模型探索者',
    title: 'The Concept Explorer',
    summary: '你喜欢探索问题空间，找到轻巧但有理论支撑的解法。',
    strengths: ['概念敏感度高', '适合算法、语言、框架内核等方向', '能提出新视角'],
    risks: ['可能不够关注落地细节', '需要更频繁地交付中间成果'],
  },
  IDTO: {
    name: '开源思想家',
    title: 'The Open Source Thinker',
    summary: '你享受探索新范式，并通过社区交流让想法成长。',
    strengths: ['适合开源、研究型工具和技术内容', '能连接不同思路', '表达和抽象能力强'],
    risks: ['可能被新想法分散注意力', '需要明确项目边界'],
  },
  IDEA: {
    name: '实验修行者',
    title: 'The Quiet Experimenter',
    summary: '你通过实验理解世界，喜欢独立验证、逐步逼近答案。',
    strengths: ['实验设计扎实', '能耐心处理不确定问题', '适合性能调优和原型验证'],
    risks: ['可能沉浸在局部实验里', '需要主动暴露进展和结论'],
  },
  IDEO: {
    name: '开源创客',
    title: 'The Community Maker',
    summary: '你喜欢探索、试验和分享，经常把小想法做成别人也能使用的东西。',
    strengths: ['创造力强', '乐于分享', '适合工具、插件、社区项目和技术内容'],
    risks: ['容易开新坑', '需要维护节奏和长期承诺'],
  },
};
