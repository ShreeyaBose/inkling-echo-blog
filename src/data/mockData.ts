
import { Author, Category, Post } from './types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    bio: 'Tech enthusiast and software developer with over a decade of experience in web technologies.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Food critic and travel blogger who has visited over 50 countries in search of culinary adventures.'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Health and wellness coach focused on holistic approaches to fitness and mental wellbeing.'
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Lifestyle', slug: 'lifestyle' },
  { id: '3', name: 'Travel', slug: 'travel' },
  { id: '4', name: 'Food', slug: 'food' },
  { id: '5', name: 'Health', slug: 'health' }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    slug: 'future-of-web-development',
    excerpt: 'Exploring emerging trends and technologies that are shaping the future of web development.',
    content: `
# The Future of Web Development

Web development has come a long way since the early days of static HTML pages. Today, we're witnessing an unprecedented evolution in web technologies, frameworks, and methodologies that are reshaping how we build for the web.

## AI-Assisted Development

Artificial Intelligence is no longer just a buzzword; it's becoming an integral part of the development workflow. From intelligent code completion to automated testing and even UI generation, AI tools are enhancing developer productivity and creativity.

Code assistants can now understand context, suggest entire functions, and even explain complex code snippets. This democratizes development, making it more accessible to newcomers while allowing experienced developers to focus on more complex problems.

## WebAssembly (Wasm)

WebAssembly is revolutionizing what's possible in the browser. By allowing code written in multiple languages like C++ and Rust to run in the browser at near-native speed, Wasm opens new frontiers for web applications.

Performance-intensive applications that were once desktop-only can now run smoothly on the web. Games, video editors, CAD software, and scientific simulations are just the beginning of what's possible with WebAssembly.

## Edge Computing

The traditional client-server model is evolving with edge computing pushing computation closer to the end user. This paradigm shift improves performance, reduces latency, and enhances the user experience.

Modern web applications can now execute code at CDN edges, reducing the round-trip time to origin servers. This approach is particularly valuable for global applications where users are distributed worldwide.

## Conclusion

The future of web development is bright, with new technologies enabling more powerful, efficient, and accessible applications. By staying informed about these trends and embracing new tools, developers can build experiences that were once impossible on the web.
    `,
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    publishedAt: '2023-11-15T08:00:00Z',
    author: authors[0],
    categories: [categories[0]],
    featured: true
  },
  {
    id: '2',
    title: 'Hidden Gems: 5 Underrated Travel Destinations',
    slug: 'hidden-gems-underrated-travel',
    excerpt: 'Discover these off-the-beaten-path destinations that offer authentic experiences away from tourist crowds.',
    content: `
# Hidden Gems: 5 Underrated Travel Destinations

While popular destinations like Paris, Tokyo, and New York will always draw crowds, there's something special about discovering places that haven't yet made it onto every traveler's bucket list. These hidden gems offer authentic cultural experiences, breathtaking scenery, and the joy of exploration without the overwhelming tourist crowds.

## 1. Comporta, Portugal

Just an hour south of Lisbon lies Comporta, a stunning stretch of coastline that remains remarkably undeveloped. With miles of pristine beaches backed by sand dunes and pine forests, this area offers a peaceful alternative to the Algarve. The laid-back atmosphere attracts creatives and those looking to disconnect, with simple restaurants serving fresh seafood and local wines.

## 2. Svaneti, Georgia

Nestled high in the Caucasus Mountains, the region of Svaneti feels like stepping back in time. Medieval stone towers dot villages where ancient traditions still thrive. Spectacular hiking trails wind through alpine meadows with views of snow-capped peaks. The hospitality of the Svan people makes visitors feel welcome, offering homemade food and chacha (Georgian grappa) to warm up after a day of exploration.

## 3. Puglia, Italy

While tourists flock to Tuscany and the Amalfi Coast, Puglia in Italy's heel remains relatively undiscovered by international visitors. The region boasts charming whitewashed towns, ancient olive groves, and a stunning coastline with crystal-clear waters. Don't miss the unique trulli houses in Alberobello and the baroque splendor of Lecce, often called "the Florence of the South."

## 4. Luang Prabang, Laos

Nestled at the confluence of the Mekong and Nam Khan rivers, Luang Prabang captivates visitors with its well-preserved architecture, vibrant night markets, and spiritual atmosphere. Wake early to witness monks in saffron robes collecting alms, explore ancient temples, or cool off in the turquoise pools of Kuang Si Falls just outside town.

## 5. Salento, Colombia

In Colombia's coffee region, Salento offers colorful colonial architecture against a backdrop of rolling green hills and wax palms. Hike through the stunning Valle de Cocora, visit family-run coffee farms to learn about the bean-to-cup process, and enjoy the relaxed pace of life in this charming mountain town.

## The Joy of Discovery

What makes these destinations special isn't just their beauty, but the sense of discovery they provide. By venturing beyond the well-trodden path, you'll create unique memories and stories that few others share. Just remember to travel responsibly, respect local cultures, and help preserve these places for future explorers.
    `,
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    publishedAt: '2023-10-28T10:30:00Z',
    author: authors[1],
    categories: [categories[2]]
  },
  {
    id: '3',
    title: 'Mindfulness Practices for Busy Professionals',
    slug: 'mindfulness-for-professionals',
    excerpt: 'Simple mindfulness techniques that can be integrated into even the busiest schedules for better mental health.',
    content: `
# Mindfulness Practices for Busy Professionals

In today's fast-paced professional world, the constant demands on our attention can leave us feeling overwhelmed and mentally exhausted. Mindfulness—the practice of bringing awareness to the present moment without judgment—offers a powerful antidote to this modern condition. Even with packed schedules, professionals can integrate simple mindfulness techniques throughout their day to improve focus, reduce stress, and enhance overall wellbeing.

## Morning Mindfulness: Starting with Intention

How you begin your day sets the tone for what follows. Before reaching for your phone or jumping into emails:

- Take three deep, conscious breaths as soon as you wake up
- Set an intention for the day (e.g., "Today I will practice patience in challenging situations")
- Spend just 2-3 minutes scanning your body and noting how you feel

This brief morning ritual creates a moment of calm awareness before the day's demands begin, helping you approach challenges with greater clarity.

## Mindful Transitions

The spaces between activities offer perfect opportunities for micro-practices:

- When moving between meetings, take 30 seconds to feel your feet on the ground and take three conscious breaths
- Before opening your email, pause to notice your posture and any tension in your body
- When switching tasks, close your eyes for a moment and reset your attention

These transition practices prevent the mental residue of one activity from contaminating the next, improving your focus and presence.

## Mindful Meetings

Meetings consume a significant portion of many professionals' workdays. Bring mindfulness into this space:

- Arrive a minute early to center yourself
- Practice fully listening without planning your response
- Notice when your mind wanders and gently bring it back to the present discussion
- Observe physical sensations that arise during challenging interactions

By applying mindfulness in meetings, you'll not only be more effective but also less drained afterward.

## Conclusion: Small Practices, Big Impact

Mindfulness doesn't require hours of meditation or a complete lifestyle overhaul. By integrating these small practices into your existing routine, you create multiple moments of awareness throughout your day. Over time, these moments accumulate, building your capacity to remain centered amidst professional demands and ultimately leading to greater effectiveness, creativity, and satisfaction in your work.
    `,
    coverImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    publishedAt: '2023-11-05T09:15:00Z',
    author: authors[2],
    categories: [categories[1], categories[4]]
  },
  {
    id: '4',
    title: 'Building a Sustainable Home Office',
    slug: 'sustainable-home-office',
    excerpt: 'Tips and strategies for creating an environmentally friendly and productive home workspace.',
    content: `
# Building a Sustainable Home Office

With remote and hybrid work becoming increasingly common, the home office has evolved from a luxury to a necessity for many professionals. As we spend more time working from home, creating a space that's not only productive but also environmentally responsible has never been more important. A sustainable home office reduces your carbon footprint while often creating a healthier, more inspiring place to work.

## Eco-Friendly Office Furniture

The foundation of any sustainable office starts with thoughtfully chosen furniture:

- Look for pieces made from sustainably harvested wood, reclaimed materials, or recycled content
- Consider buying quality second-hand furniture instead of new
- Choose items designed for longevity and repairability rather than planned obsolescence
- Select non-toxic finishes and materials that won't off-gas harmful compounds

Investing in a proper ergonomic chair and desk setup is not only better for your body but also more sustainable, as you won't need to replace uncomfortable furniture that leads to health issues.

## Energy Efficiency

Reducing energy consumption saves money while lowering your environmental impact:

- Position your desk to maximize natural light, reducing the need for artificial lighting
- Use LED bulbs for any necessary lighting
- Choose ENERGY STAR certified electronics when possible
- Set up power strips that can be easily turned off to eliminate vampire power draw
- Consider renewable energy sources like small solar panels for charging devices

## Digital Sustainability

Our digital habits have environmental consequences too:

- Regularly clean digital files and email inboxes to reduce server storage needs
- Use cloud services that commit to renewable energy
- Extend device lifespans through proper maintenance and updates
- Consider refurbished electronics when upgrades are necessary

## Bringing Nature In

A sustainable office connects to the natural world:

- Incorporate houseplants to improve air quality and wellbeing
- Use natural materials and textures in your decor
- Position your workspace near windows with views of nature if possible

## Conclusion

Creating a sustainable home office isn't about achieving perfection—it's about making intentional choices that align with environmental values while supporting your productivity and wellbeing. By considering the environmental impact of your home office decisions, you create a workspace that benefits both you and the planet.
    `,
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    publishedAt: '2023-11-10T11:45:00Z',
    author: authors[0],
    categories: [categories[1], categories[0]]
  },
  {
    id: '5',
    title: 'The Science of Sourdough: Beginner's Guide',
    slug: 'sourdough-science-beginners-guide',
    excerpt: 'Unlock the mysteries behind perfect sourdough bread with this science-based approach for beginners.',
    content: `
# The Science of Sourdough: Beginner's Guide

There's something almost magical about transforming just flour, water, and salt into a crusty, flavorful loaf of sourdough bread. Behind this seemingly simple process lies fascinating science—an intricate dance of biology, chemistry, and physics that has sustained humanity for thousands of years. Understanding these scientific principles can help beginners navigate common challenges and consistently achieve better results.

## The Living Starter

Unlike commercial bread that relies on packaged yeast, sourdough begins with a starter—a symbiotic culture of wild yeasts and bacteria. This ecosystem is what gives sourdough its distinctive flavor and leavening power:

- **Wild yeasts** consume simple sugars in flour and produce carbon dioxide gas that makes your bread rise
- **Lactic acid bacteria** produce organic acids that contribute flavor complexity and natural preservation
- Together, they create an environment hostile to unwanted microorganisms

A healthy starter should double in size within 4-8 hours after feeding and have a pleasant, tangy aroma. Regular feedings maintain the proper balance between yeasts and bacteria.

## The Crucial Fermentation Process

Fermentation is where the magic happens:

- **Enzymatic activity** breaks down starches in flour into simpler sugars that microorganisms can consume
- **Gluten development** creates the structure that captures gas bubbles
- **Acid production** strengthens gluten bonds and develops flavor
- **Proteolysis** breaks down proteins, contributing to flavor complexity

Temperature significantly affects fermentation rate—warmer conditions speed up the process but may reduce flavor complexity, while cooler, slower fermentations often yield more complex flavors.

## The Role of Hydration

The ratio of water to flour (hydration) dramatically influences your bread's character:

- **Lower hydration** (65-70%) creates denser bread that's easier for beginners to handle
- **Higher hydration** (75-85%) yields more open crumb structure but requires more skill to manage

Beginners often find success starting with lower hydration recipes and gradually increasing as they gain experience.

## Conclusion

Understanding the science behind sourdough empowers you to troubleshoot problems and adapt recipes with confidence. Remember that each sourdough journey is unique—variables like your local microbiome, water chemistry, and kitchen environment all influence your results. Embrace the learning process, take notes, and enjoy the satisfaction of creating something delicious through this ancient, scientific craft.
    `,
    coverImage: 'https://images.unsplash.com/photo-1555951015-6da1aa4c554e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    publishedAt: '2023-10-22T14:20:00Z',
    author: authors[1],
    categories: [categories[3]]
  },
  {
    id: '6',
    title: 'Understanding Modern JavaScript Frameworks',
    slug: 'modern-javascript-frameworks',
    excerpt: 'A comprehensive comparison of React, Vue, and Angular to help you choose the right framework for your next project.',
    content: `
# Understanding Modern JavaScript Frameworks

The JavaScript ecosystem continues to evolve rapidly, with frameworks and libraries constantly emerging and maturing. For developers planning new projects, choosing between React, Vue, and Angular—the three most prominent options—can be challenging. Each framework has distinct philosophies, strengths, and trade-offs that make them suitable for different use cases.

## React: Flexibility and Ecosystem

Created by Facebook in 2013, React has grown to become the most widely used JavaScript library for building user interfaces.

**Key Characteristics:**
- Component-based architecture
- Virtual DOM for efficient rendering
- JSX syntax that combines JavaScript with HTML-like structure
- Unidirectional data flow

**Strengths:**
- Extremely flexible, allowing developers to make architectural decisions
- Vast ecosystem with solutions for almost any need
- Strong community support and abundant learning resources
- Great for building complex, state-driven applications

**Considerations:**
- Not a complete framework—requires additional libraries for routing, state management, etc.
- The freedom it provides can lead to inconsistencies across projects
- Steeper learning curve for complete beginners due to JSX and modern JavaScript concepts

## Vue: Progressive and Approachable

Vue positions itself as a progressive framework that can be adopted incrementally, from enhancing simple HTML pages to powering sophisticated single-page applications.

**Key Characteristics:**
- Template-based syntax with optional JSX support
- Reactive data binding system
- Component-based architecture
- Built-in directives for common operations

**Strengths:**
- Gentle learning curve, especially for developers with HTML/CSS background
- Excellent documentation
- More opinionated than React but less restrictive than Angular
- Great for both small projects and larger applications

**Considerations:**
- Smaller ecosystem compared to React
- Fewer job opportunities compared to React and Angular in some markets
- Less suited for extremely complex enterprise applications

## Angular: Complete Solution for Enterprise

Angular is a complete, opinionated framework developed and maintained by Google, designed with large enterprise applications in mind.

**Key Characteristics:**
- TypeScript-based
- Full MVC framework with built-in solutions for common needs
- Dependency injection system
- Two-way data binding capabilities

**Strengths:**
- Comprehensive solution with everything included
- Strong typing with TypeScript helps catch errors early
- Enforces consistent code practices across teams
- Built-in solutions for routing, forms, HTTP requests, and more

**Considerations:**
- Steepest learning curve of the three
- More verbose and ceremonial
- Can be overkill for smaller projects
- Version transitions have historically been challenging

## How to Choose

When selecting a framework, consider:

1. **Project complexity and scale**: Angular for large enterprise applications, React for complex UIs with unique requirements, Vue for anything from small to large projects
2. **Team experience**: Vue might be easier for teams with limited JavaScript experience
3. **Ecosystem needs**: React has the largest ecosystem of third-party components
4. **Long-term maintenance**: Angular provides more structure for large teams
5. **Performance requirements**: All three can be optimized for high performance, but React and Vue may have a slight edge for specific use cases

The good news is that all three frameworks are mature, well-maintained, and capable of building modern web applications. Your team's experience and specific project requirements should ultimately guide your decision.
    `,
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    publishedAt: '2023-11-18T16:00:00Z',
    author: authors[0],
    categories: [categories[0]],
    featured: true
  }
];
