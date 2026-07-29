import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.manyasoftsolutions.com';
  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const serviceSlugs = [
    'software-development',
    'mobile-app-development',
    'cloud-solutions',
    'ai-solutions',
    'it-consulting',
    'digital-transformation',
    'enterprise-software',
    'web-applications',
    'technology-consulting',
    'managed-it',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Industry routes
  const industrySlugs = [
    'healthcare',
    'finance',
    'retail',
    'manufacturing',
    'education',
    'logistics',
    'real-estate',
  ];

  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Case Study routes
  const caseStudySlugs = [
    'national-telehealth-portal',
    'zero-latency-trading',
    'headless-commerce',
    'smart-factory',
    'supply-chain-visibility',
    'proptech-automation',
  ];

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Career routes
  const careerSlugs = [
    'senior-frontend-engineer',
    'cloud-infrastructure-architect',
    'machine-learning-researcher',
    'enterprise-account-executive',
  ];

  const careerRoutes = careerSlugs.map((slug) => ({
    url: `${baseUrl}/careers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...routes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...careerRoutes,
  ];
}
