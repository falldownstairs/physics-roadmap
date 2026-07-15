import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'Googlebot',
                    'Google-Extended',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'GPTBot',
                    'PerplexityBot',
                    'Perplexity-User',
                    'Claude-SearchBot',
                    'Claude-User',
                    'ClaudeBot',
                ],
                allow: '/',
            },
        ],
        sitemap: 'https://physicsroadmap.com/sitemap.xml',
    };
}
