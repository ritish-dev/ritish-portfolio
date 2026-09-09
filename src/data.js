export const aiTools = ["GitHub Copilot","ChatGPT","Claude","Amazon Q","OpenAI Codex"];
export const workflow = [
  ["01","Discover","Clarify requirements, constraints and solution paths."],
  ["02","Design","Explore architecture, APIs, UI patterns and tradeoffs."],
  ["03","Build","Accelerate implementation across frontend, backend and cloud."],
  ["04","Debug","Analyze failures, unfamiliar code paths and integration issues."],
  ["05","Refine","Refactor, review edge cases and improve maintainability."],
  ["06","Deliver","Validate, deploy, support and continuously improve."]
];

export const projects = [
  {
    number:"01", title:"Enterprise Platform Modernization", label:"Architecture / React / AWS",
    description:"Modernized business-critical applications from AngularJS to React while establishing reusable patterns, shared components and scalable frontend standards.",
    tags:["React","TypeScript","AWS","Platform Architecture"], metric:"~45%", metricLabel:"build-time reduction",
    challenge:"Modernize legacy enterprise applications while maintaining production continuity and improving scalability, maintainability and developer experience.",
    approach:"Defined reusable React architecture patterns and shared UI components, then helped move server-hosted capabilities to AWS serverless services including Lambda, API Gateway, S3 and CloudFront.",
    role:"Technical architecture, hands-on delivery, code review, cross-team guidance, CI/CD and production support.",
    impact:"Improved scalability and operational efficiency while reducing build times by approximately 45%."
  },
  {
    number:"02", title:"Digital Certificate Platform", label:"Product Platform / Workflow",
    description:"Architected certificate-management capabilities spanning templates, awarding workflows, administration, evaluation rules, notifications and extensible platform services.",
    tags:["React","APIs","Cloud","Workflow Design"], metric:"E2E", metricLabel:"solution delivery",
    challenge:"Support complex certificate lifecycle workflows through reusable, extensible enterprise capabilities.",
    approach:"Designed platform capabilities across template management, awarding, user administration, evaluation rules, notifications and supporting services.",
    role:"Architecture, solution design, frontend/platform implementation, API integration and stakeholder collaboration.",
    impact:"Created reusable platform and automation patterns that supported delivery across multiple product modules."
  },
  {
    number:"03", title:"Cloud-Native Learning Platform", label:"Enterprise Learning / Platform",
    description:"Technical leadership for a cloud-native learning platform within a global LMS ecosystem, spanning architecture, delivery, integrations and production support.",
    tags:["React","AWS","APIs","Platform"], metric:"150M+", metricLabel:"ecosystem users",
    challenge:"Deliver scalable enterprise capabilities across a large global learning ecosystem and distributed engineering organization.",
    approach:"Owned delivery from requirements discovery and technical design through implementation, deployment, production support and enhancement.",
    role:"Technical lead and architectural decision-maker working across Product, Business Analysis and Engineering leadership.",
    impact:"Supported an LMS ecosystem serving 150M+ users across 80+ countries while improving reusable architecture and delivery practices."
  }
];

export const experience = [
  ["2021 — Present","Senior / Lead Technical Consultant","Blackboard, Inc.","Technical lead and architectural decision-maker for cloud-native learning capabilities, owning delivery from discovery through production support."],
  ["2017 — 2021","Software Engineer","Browse Info Solutions","Modernized enterprise client applications including high-volume React experiences for Domino’s and responsive healthcare applications for OptimizeRx."],
  ["2016 — 2017","UI Developer (Intern)","Perficient Inc.","Built responsive React/Redux/Node.js applications with REST APIs, authentication and reusable components."],
  ["2016 — 2017","Graduate Assistant","Eastern Michigan University","Developed accessibility-compliant student systems and user-centered web experiences."],
  ["2013 — 2014","UI Developer","Indicode Technologies","Built AngularJS applications, reusable components and REST integrations with Spring MVC backends."]
];

export const skillGroups = [
  { title: "Frontend", technologies: ["React", "TypeScript", "JavaScript", "Redux", "Angular", "Storybook"] },
  { title: "Backend & APIs", technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL"] },
  { title: "Cloud / Platform", technologies: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "DynamoDB", "Docker", "Kubernetes"] },
  { title: "AI-Assisted Development", technologies: aiTools },
  { title: "DevOps / Productivity", technologies: ["CI/CD", "Jenkins", "Azure DevOps", "GitHub Actions"] }
];
