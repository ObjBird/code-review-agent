# 代码审查代理

这是一个基于Mastra和OpenAI的代码审查代理，可以对提供的代码进行全面、专业的审查。

## 功能

- 全面的代码质量评估
- 安全性检查
- 性能优化建议
- 最佳实践推荐
- 详细的代码风格分析

## 使用方法

1. 克隆仓库
```bash
git clone https://github.com/ObjBird/code-review-agent.git
cd code-review-agent
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
   - 复制 `.env.example` 文件并重命名为 `.env`：
   ```bash
   cp .env.example .env
   ```
   - 编辑 `.env` 文件，填入您的实际配置：
   ```
   OPENAI_API_KEY=你的OpenAI API密钥
   CLOUDFLARE_ACCOUNT_ID=你的Cloudflare账户ID
   CLOUDFLARE_API_TOKEN=你的Cloudflare API令牌
   ```

   **获取 Cloudflare 账户 ID**：
   - 登录您的 Cloudflare 账户
   - 在控制面板右上角或主页面上查找"账户 ID"或"Account ID"
   - 通常是一个形如 `a1b2c3d4e5f6g7h8i9j0` 的字符串

   **获取 Cloudflare API 令牌**：
   - 登录 Cloudflare 控制面板
   - 导航到"个人资料">"API 令牌"
   - 创建一个新的 API 令牌，确保它有足够的权限（Workers相关权限）

4. 启动开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## 项目结构

```
code-review-agent/
├── .env.example        # 环境变量模板
├── .gitignore          # Git忽略文件配置
├── README.md           # 项目说明文档
├── index.js            # 主入口文件
├── package.json        # 项目配置和依赖
└── agents/
    └── cr-agent.js     # 代码审查代理配置
```

## 部署

项目使用Cloudflare Workers进行部署：

```bash
# 构建项目
npm run build

# 部署到Cloudflare（确保已配置环境变量）
# 部署过程会自动执行
```

确保您已经正确配置了环境变量，特别是 `CLOUDFLARE_ACCOUNT_ID` 和 `CLOUDFLARE_API_TOKEN`。

## 自定义

如果您想修改代码审查的标准或提示词，可以编辑 `agents/cr-agent.js` 文件中的 `instructions` 部分。

## 许可证

ISC