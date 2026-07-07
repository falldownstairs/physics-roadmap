import type { MetadataRoute } from 'next';
import { courseData as mechanicsData } from '@/lib/mechanicsContent';
import { courseData as emData } from '@/lib/emContent';

export const revalidate = 86400;

const BASE_URL = 'https://physicsroadmap.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/mechanics`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/electricity-magnetism`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    const mechanicsLessons: MetadataRoute.Sitemap = mechanicsData
        .filter((node) => node.type === 'lesson')
        .map((node) => ({
            url: `${BASE_URL}/mechanics/lesson/${node.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    const emLessons: MetadataRoute.Sitemap = emData
        .filter((node) => node.type === 'lesson')
        .map((node) => ({
            url: `${BASE_URL}/electricity-magnetism/lesson/${node.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    return [...staticPages, ...mechanicsLessons, ...emLessons];
}
