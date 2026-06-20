export const DIMENSIONS = [
  {
    key: 'ci',
    label: '构造 vs 探索',
    letters: ['C', 'I'],
    names: ['构造者 Construct', '探索者 Investigate'],
  },
  {
    key: 'sd',
    label: '结构 vs 动态',
    letters: ['S', 'D'],
    names: ['结构师 Structure', '动态派 Dynamic'],
  },
  {
    key: 'te',
    label: '理论 vs 实践',
    letters: ['T', 'E'],
    names: ['理论派 Theory', '实践派 Empirical'],
  },
  {
    key: 'ao',
    label: '独行 vs 开源',
    letters: ['A', 'O'],
    names: ['独行侠 Alone', '开源精神 Open'],
  },
];

export const TYPES = {
  CSTA: {
    name: '架构建造师',
    title: 'The System Architect',
    summary: '你喜欢先设计完整的架构，再一丝不苟地实现。代码是艺术品，结构是信仰。',
    strengths: [
      '系统化思考，能构建稳定的整体结构',
      '关注可维护性和可扩展性',
      '擅长编写文档和清晰的接口定义',
    ],
    risks: [
      '可能过度设计，导致早期进展较慢',
      '对快速变化和不确定性适应较慢',
    ],
  },
  CSTO: {
    name: '社区架构师',
    title: 'The Community Architect',
    summary: '你既能设计严谨的系统，也乐于在团队中分享和推动最佳实践。',
    strengths: [
      '技术与协作能力兼具',
      '善于将复杂概念传达给团队',
      '推动代码规范和流程落地',
    ],
    risks: [
      '容易在帮助他人和自己深度工作之间失衡',
      '可能过于关注流程而影响速度',
    ],
  },
  CDTA: {
    name: '完美主义者',
    title: 'The Perfectionist',
    summary: '你对代码质量有极高追求，喜欢精雕细琢，独立工作时产出最优质代码。',
    strengths: [
      '代码质量极高，注重细节',
      '独立完成任务能力强',
      '对技术选型有严谨的判断',
    ],
    risks: [
      '可能因追求完美而拖延交付',
      '对不完美的代码容忍度低',
    ],
  },
  CDTO: {
    name: '快速交付师',
    title: 'The Rapid Deliverer',
    summary: '你灵活高效，能快速交付可用方案，同时保持对质量的关注。',
    strengths: [
      '快速迭代，响应需求变化',
      '能在压力下保持效率',
      '善于在有限资源下做取舍',
    ],
    risks: [
      '可能为了速度牺牲长期可维护性',
      '对规范和文档重视不足',
    ],
  },
  CETA: {
    name: '理论学家',
    title: 'The Theorist',
    summary: '你深入理解计算机科学原理，喜欢用逻辑和理论解决问题。',
    strengths: [
      '理论基础扎实',
      '善于从根本上分析和解决问题',
      '对算法和复杂系统有深刻理解',
    ],
    risks: [
      '可能过于关注正确性而忽视实用性',
      '对快速原型和实践验证兴趣较低',
    ],
  },
  CETO: {
    name: '技术导师',
    title: 'The Technical Mentor',
    summary: '你理论深厚且善于表达，喜欢写技术文章和教导他人。',
    strengths: [
      '擅长将复杂知识简单化',
      '技术文章和演讲能力强',
      '是团队中的知识传播者',
    ],
    risks: [
      '教学和写作可能占用大量编码时间',
      '有时过于理想化',
    ],
  },
  CEDA: {
    name: '实验工程师',
    title: 'The Experimental Engineer',
    summary: '你通过实验验证想法，独立探索新技术，追求最佳实践。',
    strengths: [
      '动手能力强，善于验证假设',
      '对新工具和框架接受度高',
      '能快速适应变化',
    ],
    risks: [
      '可能频繁切换技术栈',
      '实验成果未必能沉淀为规范',
    ],
  },
  CEDO: {
    name: '开源先驱者',
    title: 'The Open Source Pioneer',
    summary: '你实验精神十足，积极为开源社区贡献，用实践证明一切。',
    strengths: [
      '开源贡献积极',
      '善于将实验转化为社区价值',
      '影响力和行动力兼具',
    ],
    risks: [
      '可能同时参与太多项目导致精力分散',
      '对稳定维护的长期承诺不足',
    ],
  },
  ISTA: {
    name: '独立探索者',
    title: 'The Independent Explorer',
    summary: '你独立探索新技术，严谨地将它们整合到规范的系统中。',
    strengths: [
      '自主学习能力极强',
      '能在探索与规范之间找到平衡',
      '适合攻坚创新项目',
    ],
    risks: [
      '可能过于独立，协作沟通不足',
      '探索方向需要外部对齐',
    ],
  },
  ISTO: {
    name: '开源探索者',
    title: 'The Open Source Explorer',
    summary: '你热衷于尝试新技术并与社区分享，是新技术的早期采用者。',
    strengths: [
      '对新技术敏感',
      '乐于分享和传播',
      '能带动团队技术进步',
    ],
    risks: [
      '可能追逐潮流而忽略稳定性',
      '对成熟技术的深耕不足',
    ],
  },
  IDTA: {
    name: '快速原型师',
    title: 'The Rapid Prototyper',
    summary: '你能用最快的速度把想法变成可运行的原型，独立且高效。',
    strengths: [
      '原型开发速度极快',
      '善于验证想法可行性',
      '独立工作能力强',
    ],
    risks: [
      '原型转正时可能缺乏系统思考',
      '代码可能不够稳健',
    ],
  },
  IDTO: {
    name: '创业开发者',
    title: 'The Startup Developer',
    summary: '你极快速度的原型开发者，善于将想法快速转化为产品。',
    strengths: [
      '快速验证商业模式',
      '全栈能力强',
      '适应不确定性',
    ],
    risks: [
      '长期可维护性可能被忽视',
      '容易技术债累积',
    ],
  },
  IETA: {
    name: '研究员',
    title: 'The Researcher',
    summary: '你对新技术充满好奇，深入研究原理，独立探索未知领域。',
    strengths: [
      '研究能力强',
      '善于发现新技术潜力',
      '独立思考深入',
    ],
    risks: [
      '研究周期可能较长',
      '成果落地需要团队支持',
    ],
  },
  IETO: {
    name: '技术传播者',
    title: 'The Technology Evangelist',
    summary: '你热爱探索新技术并热衷于将它们传播给更多人。',
    strengths: [
      '学习能力强',
      '表达能力突出',
      '能推动技术普及',
    ],
    risks: [
      '可能涉猎广而不深',
      '容易成为“新技术布道者”而忽视落地',
    ],
  },
  IEDA: {
    name: '黑客验证师',
    title: 'The Hacker Validator',
    summary: '你通过不断实验验证假设，独立解决复杂技术挑战。',
    strengths: [
      '动手解决复杂问题',
      '善于从实践中学习',
      '独立攻关能力强',
    ],
    risks: [
      '可能忽视文档和测试',
      '方法可能过于激进',
    ],
  },
  IEDO: {
    name: '开源创客',
    title: 'The Open Source Maker',
    summary: '你是实验室里的创客，热衷于开源项目和快速原型开发。',
    strengths: [
      '创新能力突出',
      '开源贡献积极',
      '善于将创意落地',
    ],
    risks: [
      '项目多而精力分散',
      '对长期维护可能缺乏耐心',
    ],
  },
};

export const QUESTIONS = [
  // C vs I: 7 questions
  {
    id: 1,
    dimension: 'ci',
    prompt: '接到一个新项目需求时，你通常会：',
    options: [
      { letter: 'C', text: '先花几小时画出完整的架构图和数据流图，确保方案可行再动手' },
      { letter: 'I', text: '先写一个最简单的原型跑起来，在实际运行中调整设计' },
    ],
  },
  {
    id: 2,
    dimension: 'ci',
    prompt: '在技术选型时，你更倾向于：',
    options: [
      { letter: 'C', text: '选择经过充分验证、生态成熟、文档完善的技术栈' },
      { letter: 'I', text: '尝试新兴的、有趣的、可能带来突破的技术' },
    ],
  },
  {
    id: 3,
    dimension: 'ci',
    prompt: '面对一个复杂功能，你开始实现的方式是：',
    options: [
      { letter: 'C', text: '拆分成模块，定义好接口和数据结构，再逐步实现' },
      { letter: 'I', text: '先写一版能跑通的代码，再重构优化' },
    ],
  },
  {
    id: 4,
    dimension: 'ci',
    prompt: '你的代码风格更接近：',
    options: [
      { letter: 'C', text: '每一行都有明确目的，结构清晰，像盖楼一样严谨' },
      { letter: 'I', text: '灵活多变，喜欢尝试不同写法来找到最佳表达' },
    ],
  },
  {
    id: 5,
    dimension: 'ci',
    prompt: '当项目需要引入第三方库时，你更看重：',
    options: [
      { letter: 'C', text: '稳定性、维护状态、社区口碑和长期支持' },
      { letter: 'I', text: '创新性、简洁性、是否解决了我当前的痛点' },
    ],
  },
  {
    id: 6,
    dimension: 'ci',
    prompt: '你更喜欢的工作节奏是：',
    options: [
      { letter: 'C', text: '有计划地推进，每个阶段都有明确产出和检查点' },
      { letter: 'I', text: '边做边探索，根据反馈随时调整方向' },
    ],
  },
  {
    id: 7,
    dimension: 'ci',
    prompt: '对于代码中的不确定部分，你会：',
    options: [
      { letter: 'C', text: '先想清楚边界条件和处理逻辑，再写代码' },
      { letter: 'I', text: '先写一版测试效果，遇到问题再补逻辑' },
    ],
  },

  // S vs D: 7 questions
  {
    id: 8,
    dimension: 'sd',
    prompt: '你的代码风格更接近：',
    options: [
      { letter: 'S', text: '每个函数都有清晰的 JSDoc，变量命名遵循严格的命名规范' },
      { letter: 'D', text: '变量名有时叫 foo、bar、temp，但代码能跑就行' },
    ],
  },
  {
    id: 9,
    dimension: 'sd',
    prompt: '你更喜欢哪种类型系统：',
    options: [
      { letter: 'S', text: '完整的类型系统，编译期捕获所有错误' },
      { letter: 'D', text: '动态类型，快速开发，必要时再补类型' },
    ],
  },
  {
    id: 10,
    dimension: 'sd',
    prompt: '项目目录结构对你来说：',
    options: [
      { letter: 'S', text: '必须严格统一，文件命名和层级关系一目了然' },
      { letter: 'D', text: '只要能跑，结构随时调整，不必过早规范' },
    ],
  },
  {
    id: 11,
    dimension: 'sd',
    prompt: '当你需要修改他人代码时：',
    options: [
      { letter: 'S', text: '先通读相关模块，确保符合现有规范再修改' },
      { letter: 'D', text: '找到问题点直接改，改完跑通测试即可' },
    ],
  },
  {
    id: 12,
    dimension: 'sd',
    prompt: '你对待 lint 规则的态度是：',
    options: [
      { letter: 'S', text: '严格遵守，甚至主动增加更严格的规则' },
      { letter: 'D', text: '灵活运用，必要时禁用某些规则' },
    ],
  },
  {
    id: 13,
    dimension: 'sd',
    prompt: '你写单元测试的频率：',
    options: [
      { letter: 'S', text: '几乎是 TDD，先写测试再写实现' },
      { letter: 'D', text: '核心逻辑写测试，其他靠手动验证' },
    ],
  },
  {
    id: 14,
    dimension: 'sd',
    prompt: '面对紧急需求变更，你会：',
    options: [
      { letter: 'S', text: '先评估影响范围，调整设计文档再动手' },
      { letter: 'D', text: '直接改代码，快速响应变化' },
    ],
  },

  // T vs E: 7 questions
  {
    id: 15,
    dimension: 'te',
    prompt: '你的项目出了一个很奇怪的 Bug，你会：',
    options: [
      { letter: 'T', text: '从错误日志入手，逐层分析调用链，找到根因后一次性修复' },
      { letter: 'E', text: '先在关键位置加几个 console.log，看看哪里不对再说' },
    ],
  },
  {
    id: 16,
    dimension: 'te',
    prompt: '学习新技术时，你更喜欢：',
    options: [
      { letter: 'T', text: '先读官方文档和原理，理解整体架构再动手' },
      { letter: 'E', text: '直接看示例代码，边改边学' },
    ],
  },
  {
    id: 17,
    dimension: 'te',
    prompt: '你更信任哪种知识来源：',
    options: [
      { letter: 'T', text: '官方文档、论文、经典书籍' },
      { letter: 'E', text: '实战经验、博客、Stack Overflow' },
    ],
  },
  {
    id: 18,
    dimension: 'te',
    prompt: '在代码评审中，你更关注：',
    options: [
      { letter: 'T', text: '设计是否合理、是否有潜在边界问题' },
      { letter: 'E', text: '功能是否能跑、是否有明显 Bug' },
    ],
  },
  {
    id: 19,
    dimension: 'te',
    prompt: '你写代码前通常会：',
    options: [
      { letter: 'T', text: '在脑中或纸上先想清楚逻辑和数据流' },
      { letter: 'E', text: '打开编辑器直接写，边写边理清思路' },
    ],
  },
  {
    id: 20,
    dimension: 'te',
    prompt: '你如何看待代码注释：',
    options: [
      { letter: 'T', text: '重要函数必须有注释，复杂逻辑必须解释为什么' },
      { letter: 'E', text: '代码自解释即可，注释保持最少' },
    ],
  },
  {
    id: 21,
    dimension: 'te',
    prompt: '遇到性能问题，你会：',
    options: [
      { letter: 'T', text: '先分析算法复杂度，找到瓶颈再优化' },
      { letter: 'E', text: '先做基准测试，尝试几种方案对比效果' },
    ],
  },

  // A vs O: 7 questions
  {
    id: 22,
    dimension: 'ao',
    prompt: '写完一个功能模块后，你更倾向于：',
    options: [
      { letter: 'A', text: '自己反复检查确认无误后，再提交给团队' },
      { letter: 'O', text: '尽早提交 PR，让同事帮忙看看，早期发现问题' },
    ],
  },
  {
    id: 23,
    dimension: 'ao',
    prompt: '你更喜欢的工作方式是：',
    options: [
      { letter: 'A', text: '独立开发，戴上耳机沉浸式编码' },
      { letter: 'O', text: 'Pair Programming，随时交流和 review 代码' },
    ],
  },
  {
    id: 24,
    dimension: 'ao',
    prompt: '对于自己解决不了的问题，你会：',
    options: [
      { letter: 'A', text: '先自己研究透彻，实在没办法再求助' },
      { letter: 'O', text: '快速在团队或社区提问，借助集体智慧' },
    ],
  },
  {
    id: 25,
    dimension: 'ao',
    prompt: '你对开源项目的参与态度：',
    options: [
      { letter: 'A', text: '更多使用，深入研究源码，较少主动贡献' },
      { letter: 'O', text: '积极提交 issue 和 PR，参与社区讨论' },
    ],
  },
  {
    id: 26,
    dimension: 'ao',
    prompt: '在团队中，你通常扮演：',
    options: [
      { letter: 'A', text: '独立完成任务的核心 contributor' },
      { letter: 'O', text: '协调沟通、推动协作的 connector' },
    ],
  },
  {
    id: 27,
    dimension: 'ao',
    prompt: '你如何看待代码所有权：',
    options: [
      { letter: 'A', text: '每个人都应该对自己模块负责到底' },
      { letter: 'O', text: '代码是团队的，大家应该互相 review 和改进' },
    ],
  },
  {
    id: 28,
    dimension: 'ao',
    prompt: '工作之余，你更愿意：',
    options: [
      { letter: 'A', text: '独自钻研一个感兴趣的技术领域' },
      { letter: 'O', text: '参加技术 meetup 或写博客分享经验' },
    ],
  },
];
