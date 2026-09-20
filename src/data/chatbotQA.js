// CYBERNAXE CHATBOT - PREDEFINED Q&A KNOWLEDGE BASE

export const SUGGESTED_QUESTIONS = [
  'What services do you offer?',
  'How much does an AI agent cost?',
  'Can you build me a website?',
  'How long does a project take?',
  'Do you work with international clients?',
  'How do I get started?',
];

export const QA_PAIRS = [
  // ─── SERVICES ───
  {
    id: 'services',
    keywords: [
      'service', 'services', 'offer', 'do you do', 'what do you',
      'help', 'capabilities', 'solutions', 'what can you',
    ],
    answer:
      "We offer six core services:\n\n• AI Agent Development - support, leads, bookings\n• Business Automation - connect tools, remove repetitive work\n• Custom Web Applications - dashboards, portals, systems\n• AI-Powered Business Solutions - RAG, intelligent search\n• Business Websites & E-commerce - Next.js, WordPress, Shopify\n• UI/UX Design & Prototyping - Figma, wireframes, design systems\n\nWhich one interests you?",
  },
  {
    id: 'ai-agents',
    keywords: [
      'ai agent', 'ai agents', 'agent', 'agents', 'chatbot',
      'customer support', 'support agent', 'lead agent', 'booking agent',
    ],
    answer:
      "AI Agents are intelligent assistants that talk to your customers, answer questions, qualify leads, and handle bookings - 24/7. We build four types:\n\n• Customer Support Agent - answers FAQs from your business data\n• Lead Qualification Agent - captures and filters enquiries\n• Booking Agent - handles reservations and appointments\n• Workflow Agent - connects AI to your internal systems\n\nWhich one sounds useful for your business?",
  },
  {
    id: 'automation',
    keywords: [
      'automation', 'automate', 'workflow', 'workflows', 'repetitive',
      'manual work', 'n8n', 'zapier', 'integrate', 'integration',
    ],
    answer:
      "Business Automation connects your tools and removes repetitive work - like copying data between apps, sending follow-up emails, or updating spreadsheets.\n\nWe typically use n8n, REST APIs, and webhooks to connect systems like CRM, WhatsApp, email, and databases.\n\nWhat's the repetitive task you'd like to eliminate?",
  },
  {
    id: 'web-apps',
    keywords: [
      'web app', 'web application', 'custom software', 'dashboard',
      'portal', 'saas', 'platform', 'system', 'management system',
      'nextjs', 'next.js', 'react',
    ],
    answer:
      "We build custom web applications - dashboards, customer portals, admin panels, POS systems, and SaaS platforms.\n\nTypical stack:\n• Frontend: Next.js, React\n• Backend: Node.js, Express\n• Database: MongoDB, PostgreSQL\n\nHave a specific system in mind?",
  },
  {
    id: 'websites',
    keywords: [
      'website', 'websites', 'web site', 'landing page', 'ecommerce',
      'e-commerce', 'online store', 'shop', 'shopify', 'wordpress',
      'business site', 'portfolio',
    ],
    answer:
      "Yes - we build:\n\n• Business websites (fast, SEO-friendly)\n• E-commerce stores (Shopify, custom Next.js)\n• Portfolio and blog sites\n• Landing pages for campaigns\n\nEvery site is mobile-friendly and optimized for speed. Do you have an existing site or starting fresh?",
  },
  {
    id: 'design',
    keywords: [
      'design', 'ui', 'ux', 'ui/ux', 'figma', 'wireframe',
      'prototype', 'prototyping', 'user experience', 'interface',
    ],
    answer:
      "Our UI/UX service covers the full design process:\n\n• User research and wireframes\n• High-fidelity UI in Figma\n• Interactive prototypes\n• Design systems for scale\n\nWe design first, then build - so the product works before code is written. Want to see a sample?",
  },

  // ─── PRICING ───
  {
    id: 'pricing',
    keywords: [
      'price', 'pricing', 'cost', 'how much', 'rate', 'rates',
      'fee', 'fees', 'charge', 'budget', 'quote', 'quotation',
      'expensive', 'cheap',
    ],
    answer:
      "Every project is scoped individually - pricing depends on complexity, features, and timeline.\n\nRough guidance:\n• Business website: from a few hundred USD\n• AI agent: from a few hundred USD\n• Custom software: quote-based\n\nShare what you'd like to build on WhatsApp (+94 77 020 2138) and we'll send a proper proposal.",
  },
  {
    id: 'payment',
    keywords: [
      'payment', 'pay', 'installment', 'installments', 'deposit',
      'advance', 'milestone', 'how to pay',
    ],
    answer:
      "We usually work with a milestone-based payment model:\n\n• 50% upfront to begin\n• 50% on delivery\n\nFor larger projects, we split into three milestones. We accept bank transfer and most major payment methods.\n\nMessage us on WhatsApp for the full terms.",
  },

  // ─── TIMELINE ───
  {
    id: 'timeline',
    keywords: [
      'how long', 'timeline', 'time', 'duration', 'when',
      'delivery', 'deadline', 'fast', 'quick', 'days', 'weeks',
    ],
    answer:
      "Typical timelines:\n\n• Business website: 5 – 10 days\n• E-commerce store: 2 – 3 weeks\n• AI agent: 2 – 4 weeks\n• Custom software: 4 – 8 weeks\n\nWe'll give you a firm timeline once we understand your project. Want to discuss yours?",
  },

  // ─── PROCESS ───
  {
    id: 'process',
    keywords: [
      'process', 'how do you work', 'how it works', 'steps',
      'workflow of project', 'development process',
    ],
    answer:
      "Our process has five steps:\n\n1. Discover - understand your business and goals\n2. Design - plan the solution and user experience\n3. Build - develop the application or AI agent\n4. Integrate - connect your existing tools and systems\n5. Launch - test, deploy, and refine\n\nYou're involved at every stage. Ready to start step 1?",
  },

  // ─── INTERNATIONAL ───
  {
    id: 'international',
    keywords: [
      'international', 'overseas', 'foreign', 'usa', 'uk', 'australia',
      'europe', 'singapore', 'global', 'outside sri lanka', 'abroad',
      'other countries', 'remote',
    ],
    answer:
      "Yes - we work with clients globally. We're based in Colombo, Sri Lanka, but our clients are in the US, UK, Australia, Europe, and Singapore.\n\nAll communication happens over WhatsApp, email, or Zoom - whatever's easiest for you. Time zone differences are not a problem.\n\nWhere are you based?",
  },
  {
    id: 'location',
    keywords: [
      'where', 'location', 'based', 'office', 'address', 'sri lanka',
      'colombo', 'country', 'city',
    ],
    answer:
      "We're based in Colombo, Sri Lanka - but we serve clients globally. Most of our work happens remotely over WhatsApp, email, and video calls.\n\nIf you're in Sri Lanka, we can also arrange in-person meetings in Colombo.",
  },

  // ─── GETTING STARTED ───
  {
    id: 'get-started',
    keywords: [
      'get started', 'start', 'begin', 'next step', 'how to start',
      'hire', 'work with you', 'engage', 'onboard', 'sign up',
    ],
    answer:
      "Getting started is easy:\n\n1. Tell us what you'd like to build (WhatsApp is fastest)\n2. We'll send a short proposal within 24 hours\n3. You approve, we begin\n\n👉 WhatsApp: +94 77 020 2138\n👉 Or use the contact form on this page\n\nWhat would you like to build?",
  },
  {
    id: 'contact',
    keywords: [
      'contact', 'reach', 'talk', 'call', 'message', 'email',
      'whatsapp', 'phone', 'number', 'linkedin', 'connect',
    ],
    answer:
      "You can reach us here:\n\n• WhatsApp: +94 77 020 2138 (fastest)\n• LinkedIn: /company/cybernaxe-solutions\n• Contact form: scroll down to 'Let's build something'\n\nWe usually reply within a few hours during business hours.",
  },

  // ─── COMPANY ───
  {
    id: 'about',
    keywords: [
      'about', 'who are you', 'company', 'cybernaxe', 'tell me about',
      'background', 'team', 'who is',
    ],
    answer:
      "Cybernaxe Solutions is an AI and software studio based in Colombo, Sri Lanka, founded in 2022.\n\nWe help businesses automate customer communication, capture leads, and build modern software - using AI agents, automation workflows, and custom web applications.\n\nWant to know more about a specific service?",
  },
  {
    id: 'why-us',
    keywords: [
      'why you', 'why cybernaxe', 'why choose', 'different',
      'better than', 'competitors', 'unique', 'special',
    ],
    answer:
      "A few reasons clients choose us:\n\n• We build real, working products - not just prototypes\n• Small team = direct communication, no middlemen\n• AI-first approach to every solution\n• Transparent pricing and realistic timelines\n• We serve clients globally from Sri Lanka\n\nWant to see examples of our work?",
  },

  // ─── AI TECHNOLOGY ───
  {
    id: 'tech-stack',
    keywords: [
      'technology', 'tech stack', 'stack', 'tools', 'framework',
      'languages', 'what tech', 'built with',
    ],
    answer:
      "Our typical stack:\n\n• Frontend: Next.js, React\n• Backend: Node.js, Express, Python\n• Database: MongoDB, PostgreSQL\n• AI: OpenAI, LangChain, RAG, Vector DBs\n• Automation: n8n, REST APIs, webhooks\n• Cloud: Vercel, AWS\n\nWe choose the tools that fit your project - not the other way around.",
  },
  {
    id: 'ai-vs-chatbot',
    keywords: [
      'ai vs', 'difference between', 'real ai', 'gpt', 'llm',
      'rag', 'vector', 'openai', 'langchain',
    ],
    answer:
      "Great question. A basic chatbot follows scripted rules - it only answers what you pre-programmed.\n\nAn AI Agent uses LLMs (like GPT) + your business data to understand questions and respond naturally. It can:\n\n• Answer questions it wasn't specifically trained on\n• Learn from your documents and FAQs\n• Take actions (book, capture, notify)\n\nThat's what we build.",
  },

  // ─── SUPPORT ───
  {
    id: 'support',
    keywords: [
      'support', 'maintenance', 'after launch', 'bug', 'bugs',
      'updates', 'ongoing', 'warranty',
    ],
    answer:
      "Every project includes a support period after launch - typically 30 to 90 days depending on the scope.\n\nAfter that, we offer optional monthly maintenance plans that cover:\n\n• Bug fixes and small updates\n• Security patches\n• Performance monitoring\n\nWant to discuss what your project needs?",
  },

  // ─── GREETINGS ───
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon'],
    answer:
      "Hi! 👋 How can I help you today?\n\nYou can ask me about our services, pricing, timelines, or how to get started. Or tap one of the suggested questions below.",
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'appreciate', 'cheers'],
    answer:
      "You're welcome! 😊 If you'd like to discuss your project further, message us on WhatsApp at +94 77 020 2138 - we usually reply within a few hours.",
  },
  {
    id: 'bye',
    keywords: ['bye', 'goodbye', 'see you', 'talk later'],
    answer:
      "Thanks for stopping by! Feel free to come back anytime, or reach us directly on WhatsApp (+94 77 020 2138). Have a great day! 👋",
  },
];

// =========================================================
// MATCHING FUNCTION
// =========================================================
export function findAnswer(input) {
  const text = input.toLowerCase().trim();
  if (!text) return null;

  // Score each Q&A pair by keyword matches
  let best = null;
  let bestScore = 0;

  for (const qa of QA_PAIRS) {
    let score = 0;
    for (const keyword of qa.keywords) {
      if (text.includes(keyword)) {
        // Longer keyword matches are worth more
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = qa;
    }
  }

  // Require a minimum score to avoid random matches
  if (bestScore < 3) return null;

  return best.answer;
}

export const FALLBACK_ANSWER =
  "I'm not sure I understood that. 🤔\n\nYou can ask me about:\n• Our services\n• Pricing\n• Timelines\n• How to get started\n\nOr message us directly on WhatsApp at +94 77 020 2138 for a quick answer.";