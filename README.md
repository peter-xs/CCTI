# CCTI

CCTI (Code Character Type Indicator) 是一个 MBTI 风格的程序员性格测试工具。

> 不是测试你是什么样的人，而是探索你写代码时是什么样的人。

## 快速开始

无需安装，一行命令即可运行：

```bash
npx github:peter-xs/CCTI
```

## 本地开发

```bash
git clone https://github.com/peter-xs/CCTI.git
cd CCTI
npm install
npm run build
npm test
```

## 功能特性

- 🎯 28 道专业编程场景题目
- 📊 4 大维度分析（构造/探索、结构/动态、理论/实践、独行/开源）
- 🧩 16 种独特的代码人格类型
- 🖥️ 终端原生 Ink UI 体验
- 🎨 精美 ASCII 分享卡片
- 📦 零安装，npx 直接运行

## 使用方式

```bash
# 交互式测试
npx github:peter-xs/CCTI

# 查看所有 16 种类型
npx github:peter-xs/CCTI --types

# JSON 格式输出
npx github:peter-xs/CCTI --json --answers AAAAAAAAAAAAAAAAAAAAAAAAAAAA

# 生成分享卡片
npx github:peter-xs/CCTI --share --answers AAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

## 四大维度

| 维度 | 字母 | 说明 |
|------|------|------|
| C vs I | 构造者 / 探索者 | 编程思维方式 |
| S vs D | 结构师 / 动态派 | 代码组织策略 |
| T vs E | 理论派 / 实践派 | 问题解决路径 |
| A vs O | 独行侠 / 开源精神 | 协作与影响力 |

## 16 种代码人格

CSTA 架构建造师、CSTO 社区架构师、CDTA 完美主义者、CDTO 快速交付师、
CETA 理论学家、CETO 技术导师、CEDA 实验工程师、CEDO 开源先驱者、
ISTA 独立探索者、ISTO 开源探索者、IDTA 快速原型师、IDTO 创业开发者、
IETA 研究员、IETO 技术传播者、IEDA 黑客验证师、IEDO 开源创客。

## 分享示例

```
╔══════════════════════════════════════╗
║          ██████╗██╗  ██╗             ║
║         ██╔════╝██║  ██║             ║
║         ██║     ███████║             ║
║         ╚██████╗██║  ██║             ║
║          ╚═════╝╚═╝  ╚═╝             ║
║                                      ║
║  CCTI - Code Character Type Indicator║
║                                      ║
║  CSTA 架构建造师               ║
║                                      ║
║  C(100%) S(100%) T(100%) A(100%)    ║
║                                      ║
║  npx github:peter-xs/CCTI            ║
╚══════════════════════════════════════╝
```

## License

MIT