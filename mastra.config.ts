import { defineConfig } from 'mastra';

export default defineConfig({
  name: 'code-review-agent',
  version: '1.0.0',
  agents: {
    enabled: true,
    directory: './src/agents'
  },
  tools: {
    enabled: true,
    directory: './src/tools'
  },
  workflows: {
    enabled: false
  },
  memory: {
    enabled: true,
    provider: '@mastra/memory'
  },
  llms: [
    {
      provider: 'OPEN_AI',
      name: 'gpt-4o'
    }
  ],
  db: {
    provider: '@mastra/libsql',
    uri: process.env.LIBSQL_URL || './local.db',
    authToken: process.env.LIBSQL_AUTH_TOKEN
  }
});
