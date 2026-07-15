import type { Lesson } from './types';

export const BASE_URL = 'https://physicsroadmap.com';
export const SITE_NAME = 'PhysicsRoadmap';

export const publisherJsonLd = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/icons/app-logo.png`,
  email: 'physicsroadmap1@gmail.com',
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  description:
    'Free AP Physics C self-study roadmaps with video lessons and practice questions for Mechanics and Electricity & Magnetism.',
  publisher: publisherJsonLd,
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  ...publisherJsonLd,
  '@id': `${BASE_URL}/#organization`,
  description:
    'PhysicsRoadmap publishes free AP Physics C learning roadmaps, lessons, and practice questions for independent students.',
};

export function absoluteUrl(path = '/') {
  if (path === '/') return BASE_URL;
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function cleanText(value = '') {
  return value
    .replace(/\$\$?([^$]+)\$\$?/g, '$1')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1 / $2')
    .replace(/\\Delta/g, 'Delta')
    .replace(/\\bar\{([^}]*)\}/g, 'average $1')
    .replace(/\\/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getLessonStats(lesson: Lesson) {
  const videoCount = lesson.videos?.length ?? 0;
  const questionCount =
    lesson.videos?.reduce((total, video) => total + (video.questions?.length ?? 0), 0) ?? 0;

  return { videoCount, questionCount };
}

export function lessonDescription(lesson: Lesson, courseTitle: string) {
  const { videoCount, questionCount } = getLessonStats(lesson);
  return `Learn ${lesson.title} for ${courseTitle} with ${videoCount} video lesson${videoCount === 1 ? '' : 's'} and ${questionCount} practice question${questionCount === 1 ? '' : 's'}.`;
}

export function estimatedTimeToIsoDuration(estimatedTime?: string) {
  const minutes = estimatedTime?.match(/(\d+)\s*minutes?/i)?.[1];
  return minutes ? `PT${minutes}M` : undefined;
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}
