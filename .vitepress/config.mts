import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/raycast-unblock/',
  title: 'Raycast Unblock',
  lastUpdated: true,
  metaChunk: true,
  description: 'Unblock all features in Raycast Pro Plan with implementing similar functions in other ways.',
  head: [
    ['script', {
      src: 'https://openpanel.dev/op.js',
      defer: '',
      async: '',
    }],
    ['script', {}, `window.op =
      window.op ||
      function (...args) {
        (window.op.q = window.op.q || []).push(args);
      };
    window.op('ctor', {
      clientId: 'e6fa1828-537a-4ade-bd7e-e78ef1ff4373',
      trackScreenViews: true,
      trackOutgoingLinks: true,
      trackAttributes: true,
    });
    `],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: 'https://github.com/wibus-wee/raycast-unblock/edit/main/packages/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under MIT. Created on Feb 2, 2024',
      copyright: 'raycast-unblock © Wibus',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-raycast-unblock' },
      { text: 'Features', items: [
        { text: 'AI', link: '/features/ai/' },
        { text: 'Translator', link: '/features/translator/google-translate' },
        { text: 'Cloud Sync', link: '/features/sync/icloud-drive' },
      ] },
      { text: 'Config', link: '/features/' },
      { text: 'About', items: [
        {
          text: 'Q&A',
          link: 'about/qna',
        },
      ] },
    ],

    logo: { src: '/icon.png', width: 24, height: 24 },

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Raycast Unblock?', link: '/guide/what-is-raycast-unblock' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Intercept Raycast', link: '/guide/intercept-raycast' },
        ],
      },
      {
        text: 'General',
        items: [
          { text: 'General Config', link: '/features/' },
        ],
      },
      {
        text: 'Feature - AI',
        items: [
          { text: 'General', link: '/features/ai/' },
          { text: 'OpenAI', link: '/features/ai/openai' },
          { text: 'Azure OpenAI', link: '/features/ai/azure-openai' },
          { text: 'Function Call', link: '/features/ai/function-call' },
          { text: 'Gemini', link: '/features/ai/gemini' },
          { text: 'Groq Web', link: '/features/ai/groq-web' },
          { text: 'Cohere', link: '/features/ai/cohere' },
          { text: 'Cohere Web', link: '/features/ai/cohere-web' },
        ],
      },
      {
        text: 'Feature - Translator',
        items: [
          { text: 'Google Translate', link: '/features/translator/google-translate' },
          { text: 'DeepL Translate', link: '/features/translator/deeplx' },
          { text: 'Shortcut Translator', link: '/features/translator/shortcut-translator' },
          { text: 'LibreTranslate', link: '/features/translator/libre-translate' },
          { text: 'AI Translator', link: '/features/translator/ai-translator' },
        ],
      },
      {
        text: 'Feature - Cloud Sync',
        items: [
          { text: 'iCloud Drive', link: '/features/sync/icloud-drive' },
          { text: 'Local Sync', link: '/features/sync/local-sync' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wibus-wee/raycast-unblock' },
    ],

    search: {
      provider: 'local',
    },
  },
})
