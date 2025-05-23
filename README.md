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
创建一个`.env`文件，并添加以下内容：
```
OPENAI_API_KEY=你的OpenAI API密钥
CLOUDFLARE_ACCOUNT_ID=你的Cloudflare账户ID
CLOUDFLARE_API_TOKEN=你的Cloudflare API令牌
```

4. 启动开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## 部署

项目使用Cloudflare进行部署，确保你已经正确配置了环境变量。

## 许可证

ISC