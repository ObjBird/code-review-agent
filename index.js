import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { CloudflareDeployer } from '@mastra/deployer-cloudflare';
import { codeReviewAgent } from './agents/cr-agent.js';

export const mastra = new Mastra({
  agents: { codeReviewAgent },
  logger: createLogger({
    name: 'CodeReviewMastra',
    level: 'info',
  }),
  deployer: new CloudflareDeployer({
    projectName: 'code-review-agent',
    scope: process.env.CLOUDFLARE_ACCOUNT_ID || '',
    auth: {
      apiToken: process.env.CLOUDFLARE_API_TOKEN || ''
    }
  })
});