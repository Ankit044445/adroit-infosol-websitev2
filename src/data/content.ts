// Centralized site copy. Content is preserved from the existing
// Adroit Infosol website — only presentation/UI is redesigned.

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  detail: string;
  icon: string;
  stat: { value: string; label: string };
  capabilities: string[];
  technologies: string[];
  deliverables: string[];
  ctaLabel: string;
  whyPlatform: { heading: string; paragraphs: string[] };
  whyUs: { title: string; desc: string }[];
  expertise: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "android-app-development",
    title: "Android App Development",
    icon: "android",
    short:
      "Build powerful, secure, and high-performance Android applications tailored to your business needs.",
    detail:
      "Our Android app development services help businesses build secure, scalable, and feature-rich mobile applications tailored to their unique requirements. Whether you need a customer-facing app, an enterprise mobility solution, or an IoT-enabled application, our experienced team develops reliable Android solutions that enhance customer engagement, streamline business operations, and support long-term digital growth.",
    stat: { value: "60+", label: "Android apps shipped to Play Store" },
    capabilities: [
      "Native Kotlin & Java development for phones, tablets, and foldables",
      "Enterprise mobility apps with offline-first sync and role-based access",
      "Play Store publishing, ASO, and release-pipeline management",
      "Legacy Android app modernization and performance tuning",
    ],
    technologies: ["Kotlin", "Java", "Jetpack Compose", "Firebase", "Room", "REST/GraphQL"],
    deliverables: ["Architecture & tech spec", "Pixel-accurate UI build", "QA-tested APK/AAB", "Play Store rollout"],
    ctaLabel: "Discuss Your Android Project",
    whyPlatform: {
      heading: "Why Choose Android for Your Business?",
      paragraphs: [
        "Android gives businesses the opportunity to reach a broad and diverse audience across smartphones, tablets, wearables, TVs, and connected devices. Its flexible ecosystem supports everything from customer-facing mobile apps to enterprise mobility and IoT-enabled solutions.",
        "With extensive customization options, seamless integration with hardware and third-party services, and the flexibility to support diverse business requirements, Android is a strong choice for businesses looking to improve customer engagement, streamline operations, or build innovative digital products.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Building digital products and technology solutions for businesses since 2013." },
      { title: "Android Development Expertise", desc: "Hands-on expertise in native Android development using Kotlin, Java, and modern Android technologies." },
      { title: "Complex Integration Capabilities", desc: "Experience integrating BLE, NFC, IoT devices, APIs, payment gateways, maps, and third-party systems." },
      { title: "End-to-End Development", desc: "From UI/UX and architecture to development, testing, deployment, and ongoing enhancements." },
      { title: "Quality-Focused Engineering", desc: "Focused on performance, security, usability, clean architecture, and long-term maintainability." },
      { title: "Long-Term Technology Partner", desc: "Transparent communication, reliable collaboration, and continued technical support as your product evolves." },
    ],
    expertise: [
      "Custom Business App Development",
      "Offline Data Caching & Auto-Sync",
      "Payment SDK Integration (Square, Stripe & More)",
      "Dynamic Form & Survey Apps",
      "Location Tracking & Geofencing Apps",
      "Map-Based Apps with Google Maps & HERE SDKs",
      "Bluetooth, BLE & NFC Hardware Integration",
      "Image, Video Capture & Annotation Apps",
      "Fitness & Activity Tracking Apps",
      "AI-Powered Apps & API Integration",
    ],
  },
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    icon: "ios",
    short:
      "Deliver premium iPhone and iPad applications with seamless performance and intuitive user experiences.",
    detail:
      "Our iOS app development services help businesses create premium applications that deliver exceptional experiences across iPhone and iPad devices. Whether you're launching a customer-facing app, a business application, or an enterprise solution, we develop secure, intuitive, and high-performance iOS applications that strengthen your brand, engage users, and drive long-term business success.",
    stat: { value: "40+", label: "iOS apps live on the App Store" },
    capabilities: [
      "Native Swift & SwiftUI development for iPhone and iPad",
      "App Store submission, review handling, and TestFlight rollouts",
      "Apple ecosystem integrations, including Apple Pay, HealthKit, Widgets, and Push",
      "Human Interface Guideline-compliant, accessibility-first UI",
    ],
    technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "CloudKit", "REST/GraphQL"],
    deliverables: ["UX-audited wireframes", "Native iOS build", "TestFlight beta", "App Store launch"],
    ctaLabel: "Discuss Your iOS Project",
    whyPlatform: {
      heading: "Why Choose iOS for Your Business?",
      paragraphs: [
        "iOS provides businesses with access to a highly engaged user base within Apple's trusted ecosystem. With its strong focus on user experience, privacy, security, and seamless integration across Apple devices, iOS is an excellent platform for delivering premium digital experiences.",
        "Whether you're building a customer-facing app, a business application, or a connected digital solution, iOS offers a consistent and reliable environment for creating applications that strengthen customer engagement, support business operations, and deliver long-term value.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Building digital products and technology solutions for businesses since 2013." },
      { title: "iOS Development Expertise", desc: "Hands-on expertise in building native iOS applications for iPhone and iPad using modern Apple technologies." },
      { title: "Complex Integration Capabilities", desc: "Experience integrating APIs, payments, maps, audio/video communication, device features, and third-party services." },
      { title: "End-to-End Development", desc: "From UI/UX and architecture to development, testing, App Store deployment, and ongoing enhancements." },
      { title: "Quality-Focused Engineering", desc: "Focused on performance, security, usability, Apple platform guidelines, and long-term maintainability." },
      { title: "Long-Term Technology Partner", desc: "Transparent communication, reliable collaboration, and continued technical support as your product evolves." },
    ],
    expertise: [
      "Custom Business App Development",
      "Offline Data Caching & Auto-Sync",
      "Payment SDK Integration (Square, Stripe & More)",
      "Dynamic Form & Survey Apps",
      "Location Tracking & Geofencing Apps",
      "Map-Based Apps with Google Maps & HERE SDKs",
      "Matrix SDK Integration for Audio & Video Apps",
      "Image, Video Capture & Annotation Apps",
      "Fitness & Activity Tracking Apps",
    ],
  },
  {
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development",
    icon: "crossplatform",
    short:
      "Build high-quality mobile applications for Android and iOS using Flutter and React Native.",
    detail:
      "Develop Android and iOS applications efficiently with a shared development approach using Flutter and React Native. Cross-platform development helps businesses streamline development, maintain a consistent experience across platforms, and simplify ongoing enhancements and maintenance.",
    stat: { value: "1", label: "codebase, 2 platforms shipped in parallel" },
    capabilities: [
      "Single codebase delivery across Android and iOS with Flutter or React Native",
      "Shared design system so both platforms stay pixel-consistent",
      "Native-module bridging for camera, payments, and device APIs",
      "Faster iteration cycles for startups validating product-market fit",
    ],
    technologies: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase", "Fastlane"],
    deliverables: ["Shared component library", "Dual-platform build", "Automated CI/CD", "Store submissions"],
    ctaLabel: "Discuss Your App Project",
    whyPlatform: {
      heading: "Why Choose Cross-Platform App Development?",
      paragraphs: [
        "Cross-platform development enables businesses to reach both Android and iOS users with a shared development approach, reducing duplicated effort while maintaining consistent functionality and user experiences across platforms.",
        "Using modern frameworks like Flutter and React Native, businesses can accelerate development, simplify ongoing maintenance, and evolve their applications more efficiently. It is a practical choice for organizations looking to build and manage mobile applications across multiple platforms without maintaining completely separate development efforts.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Building digital products and technology solutions for businesses since 2013." },
      { title: "Flutter & React Native Expertise", desc: "Hands-on experience building cross-platform mobile applications using Flutter and React Native." },
      { title: "Complex Integration Capabilities", desc: "Experience integrating APIs, payments, maps, device features, third-party services, and platform-specific functionality." },
      { title: "End-to-End Development", desc: "From UI/UX and architecture to development, testing, app store deployment, and ongoing enhancements." },
      { title: "Quality-Focused Engineering", desc: "Focused on performance, usability, maintainability, and delivering consistent experiences across Android and iOS." },
      { title: "Long-Term Technology Partner", desc: "Transparent communication, reliable collaboration, and continued technical support as your product evolves." },
    ],
    expertise: [
      "Custom Business App Development",
      "Offline Data Caching & Auto-Sync",
      "Payment SDK Integration (Square, Stripe & More)",
      "Dynamic Form & Survey Apps",
      "Location Tracking & Geofencing Apps",
      "Map-Based Apps with Google Maps & HERE SDKs",
      "Bluetooth, BLE & NFC Hardware Integration",
      "Image, Video Capture & Annotation Apps",
      "Fitness & Activity Tracking Apps",
    ],
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    icon: "web",
    short:
      "Develop secure, scalable, and responsive web applications that streamline business operations.",
    detail:
      "Our custom web application development services help businesses streamline operations, automate workflows, and enhance customer engagement through secure and scalable web solutions. From business portals and SaaS platforms to enterprise applications and workflow automation systems, we build responsive, high-performance web applications tailored to your business objectives and future growth.",
    stat: { value: "45+", label: "web platforms in production" },
    capabilities: [
      "SaaS platforms, internal tools, and customer portals built to scale",
      "Workflow automation that replaces manual, spreadsheet-driven processes",
      "Role-based dashboards with real-time data and reporting",
      "API-first architecture ready for future mobile or third-party integrations",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "MySQL", "AWS", "Wappler"],
    deliverables: ["System architecture", "Responsive web build", "Admin & reporting dashboard", "Cloud deployment"],
    ctaLabel: "Discuss Your Web Project",
    whyPlatform: {
      heading: "Why Choose Custom Web Applications for Your Business?",
      paragraphs: [
        "Every business has unique processes, workflows, and goals that off-the-shelf software may not fully address. Custom web applications are built around your specific requirements, helping streamline operations, automate processes, improve collaboration, and create better experiences for your customers and teams.",
        "Designed to evolve with your business, a custom web application can integrate with your existing systems, adapt to changing requirements, and scale as your operations grow. Whether you need a business management platform, customer portal, SaaS product, or workflow-driven application, a tailored solution gives you greater flexibility and control over how your software supports your business.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Building digital products and technology solutions for businesses since 2013." },
      { title: "Full-Stack Development Expertise", desc: "Experienced in building robust web applications across modern front-end, back-end, and database technologies." },
      { title: "Complex Business Solutions", desc: "Experience developing workflow-driven applications, business platforms, portals, dashboards, and solutions tailored to unique operational requirements." },
      { title: "API & System Integrations", desc: "Integrate third-party APIs, payment systems, cloud services, maps, external platforms, and existing business systems." },
      { title: "Scalable & Quality-Focused Engineering", desc: "Build secure, maintainable, and scalable applications designed for performance and long-term business growth." },
      { title: "Long-Term Technology Partner", desc: "Transparent communication, reliable collaboration, and continued technical support as your application and business evolve." },
    ],
    expertise: [
      "Advanced Data Tables with Search, Filters & Pagination",
      "Form-Based Workflow Applications",
      "Advanced Survey Applications & Reporting",
      "CSV/Excel Import & Export, PDF Generation",
      "REST API Development & Integration",
      "Firebase Integration",
      "AWS Cloud Services Integration",
      "Google Maps & HERE Maps Integration",
      "Payment Gateway & SDK Integration",
      "Database Design & Optimization",
      "MySQL Query & Performance Optimization",
    ],
  },
  {
    slug: "limesurvey-customization",
    title: "LimeSurvey Customization",
    icon: "survey",
    short:
      "Maximize the power of LimeSurvey with custom themes, plugins, integrations, and feature enhancements.",
    detail:
      "Our LimeSurvey development and customization services help organizations build powerful, flexible, and fully customized survey solutions tailored to their specific requirements. From custom themes, plugins, and integrations to feature enhancements, workflow automation, and performance optimization, we extend LimeSurvey's capabilities to deliver secure, scalable, and user-friendly survey platforms for research, data collection, and business intelligence.",
    stat: { value: "10+", label: "years of LimeSurvey specialization" },
    capabilities: [
      "Custom themes and branded survey experiences",
      "Bespoke plugin development for scoring, logic, and workflows",
      "Integrations with CRM, analytics, and payment systems",
      "Performance tuning for high-volume research and enterprise surveys",
    ],
    technologies: ["LimeSurvey", "PHP", "MySQL", "REST APIs", "Twig"],
    deliverables: ["Custom theme/plugin", "Third-party integration", "QA on live survey flows", "Ongoing support"],
    ctaLabel: "Discuss Your LimeSurvey Requirements",
    whyPlatform: {
      heading: "Why Choose LimeSurvey?",
      paragraphs: [
        "LimeSurvey is a flexible, open-source survey platform that gives organizations greater control over how they create, manage, and collect data through online surveys. Its extensive survey features and customization capabilities make it suitable for everything from simple feedback forms to complex research and data-collection projects.",
        "For organizations with specialized requirements, LimeSurvey can be extended beyond its standard functionality through custom themes, plugins, question types, integrations, workflows, and reporting solutions, creating a survey platform tailored more closely to specific business and research needs.",
      ],
    },
    whyUs: [
      { title: "10+ Years of LimeSurvey Experience", desc: "Deep hands-on experience working with LimeSurvey across diverse survey and data-collection requirements." },
      { title: "Advanced LimeSurvey Customization", desc: "Customize survey behavior, workflows, interfaces, and functionality to meet unique project requirements." },
      { title: "Custom Plugins & Question Types", desc: "Develop specialized plugins and custom question types that extend LimeSurvey beyond its standard capabilities." },
      { title: "Themes & User Experience", desc: "Create customized themes and survey experiences aligned with branding, usability, and specific respondent needs." },
      { title: "Integrations, Data & Reporting", desc: "Connect LimeSurvey with external systems and develop tailored data export, reporting, and integration solutions." },
      { title: "End-to-End LimeSurvey Support", desc: "From installation and configuration to customization, upgrades, troubleshooting, and ongoing enhancements." },
    ],
    expertise: [
      "LimeSurvey Installation & Configuration",
      "Custom Survey Workflows & Behavior",
      "Custom LimeSurvey Plugin Development",
      "Custom Question Type Development & Modification",
      "Custom Theme & Template Development",
      "Survey Design, Data Collection & Reporting",
      "Custom Data Export & Integration Solutions",
      "Mobile App Solutions for LimeSurvey",
    ],
  },
  {
    slug: "cloud-devops-solutions",
    title: "Cloud & DevOps Solutions",
    icon: "cloud",
    short:
      "Accelerate software delivery with reliable cloud infrastructure and DevOps best practices.",
    detail:
      "Our Cloud and DevOps services help businesses build secure, scalable, and resilient infrastructure that supports modern application development. From cloud migration and infrastructure setup to CI/CD pipeline automation, containerization, monitoring, and performance optimization, we streamline software delivery, improve operational efficiency, and ensure high availability for business-critical applications.",
    stat: { value: "99.9%", label: "uptime across managed infrastructure" },
    capabilities: [
      "Cloud migration and infrastructure-as-code setup on AWS",
      "CI/CD pipeline automation for fast, reliable releases",
      "Docker containerization and orchestration",
      "Monitoring, alerting, and cost optimization for production systems",
    ],
    technologies: ["AWS", "Docker", "Terraform", "GitHub Actions", "Nginx", "Grafana"],
    deliverables: ["Infra audit & plan", "CI/CD pipeline", "Containerized deployment", "Monitoring setup"],
    ctaLabel: "Discuss Your Cloud & DevOps Needs",
    whyPlatform: {
      heading: "Why Cloud & DevOps for Your Business?",
      paragraphs: [
        "Modern applications need infrastructure that can scale reliably while supporting faster and more efficient software delivery. Cloud and DevOps practices help businesses automate deployments, improve system reliability, optimize infrastructure management, and respond more quickly to changing business and technology needs.",
        "By combining scalable cloud infrastructure with automation and continuous integration and delivery practices, businesses can reduce manual processes, deploy updates more consistently, and build a stronger foundation for application growth and long-term operational efficiency.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Deep understanding of application architecture, deployment, and infrastructure requirements built through years of software development experience." },
      { title: "Cloud Infrastructure Expertise", desc: "Experience configuring, deploying, and managing cloud and hosting environments across AWS, Microsoft Azure, DigitalOcean, and GoDaddy." },
      { title: "CI/CD & Deployment Automation", desc: "Automate build, testing, and deployment workflows to improve delivery consistency and reduce manual deployment effort." },
      { title: "Scalable & Reliable Infrastructure", desc: "Design cloud environments focused on scalability, availability, performance, and the evolving needs of your applications." },
      { title: "Application-to-Cloud Expertise", desc: "Bridge the gap between development and infrastructure with practical experience deploying and managing web, mobile backend, and business applications in cloud environments." },
      { title: "Ongoing Cloud & DevOps Support", desc: "Provide continuous infrastructure management, deployment improvements, monitoring support, and technical assistance as your applications evolve." },
    ],
    expertise: [
      "Cloud & Hosting Infrastructure Setup on AWS, Azure, DigitalOcean, and GoDaddy",
      "Cloud Networking Setup (VPC, Routing & Gateways)",
      "Cloud Compute & Database Setup (EC2, RDS)",
      "High Availability & Auto Scaling",
      "Cloud Storage & CDN Setup (S3, CloudFront)",
      "Serverless Functions & API Endpoints (Lambda)",
      "Docker & Kubernetes Containerization",
      "Cloud-Based Email & SMS Integration",
      "Firebase & Cloud Service Integration",
      "CI/CD Pipeline Setup & Automation",
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    icon: "iot",
    short:
      "Connect devices, collect real-time data, and automate business operations with smart IoT solutions.",
    detail:
      "Our IoT solutions help businesses connect devices, capture real-time data, and automate critical operations through intelligent, connected ecosystems. From industrial automation and smart home solutions to connected products and remote monitoring systems, we integrate hardware, mobile applications, cloud platforms, and data analytics to deliver secure, scalable, and future-ready IoT solutions.",
    stat: { value: "24/7", label: "real-time device monitoring" },
    capabilities: [
      "Device connectivity, firmware integration, and edge data capture",
      "Companion mobile apps for monitoring and remote control",
      "Cloud data pipelines for real-time analytics and alerting",
      "Industrial automation and smart-facility monitoring systems",
    ],
    technologies: ["MQTT", "AWS IoT", "Node.js", "InfluxDB", "React", "Flutter"],
    deliverables: ["Connectivity architecture", "Device dashboard", "Companion app", "Analytics & alerts"],
    ctaLabel: "Discuss Your IoT Project",
    whyPlatform: {
      heading: "Why Choose IoT for Your Business?",
      paragraphs: [
        "The Internet of Things (IoT) enables businesses to connect devices, sensors, and equipment with software applications to automate processes, collect real-time data, and improve operational visibility. From healthcare and industrial automation to smart home solutions and connected consumer products, IoT helps organizations make faster decisions, reduce manual effort, and deliver more connected user experiences.",
        "Modern IoT solutions integrate connected devices with mobile applications, cloud platforms, and business systems to transform real-time data into actionable insights. Whether you're developing a new connected product or enhancing an existing solution, IoT provides the foundation for scalable, intelligent, and future-ready digital solutions.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Building reliable web, mobile, cloud, and enterprise solutions for businesses since 2013." },
      { title: "Connected Device & Hardware Integration Expertise", desc: "Hands-on experience integrating BLE-enabled devices, smart hardware, SDKs, sensors, and connected products with mobile and web applications." },
      { title: "End-to-End IoT Solution Development", desc: "From device communication and mobile applications to backend services, cloud integration, and user interfaces, we deliver complete IoT solutions." },
      { title: "Real-Time Data & Cloud Connectivity", desc: "Enable secure device communication, real-time data synchronization, monitoring, alerts, and cloud-connected user experiences." },
      { title: "Complex Integration Capabilities", desc: "Expertise in integrating IoT devices with third-party APIs, cloud platforms, business systems, and custom software ecosystems." },
      { title: "Long-Term Technology Partner", desc: "Providing ongoing enhancements, maintenance, technical support, and future-ready solutions as your IoT ecosystem grows." },
    ],
    expertise: [
      "Custom IoT Solution Development",
      "Healthcare & Medical Device Integration",
      "Asset Tracking & Fleet Monitoring Solutions",
      "Industrial IoT & Equipment Monitoring",
      "Smart Home & Consumer IoT Solutions",
      "Wearable & Fitness Device Applications",
      "Bluetooth & BLE Device Integration",
      "Cloud-Connected IoT Platforms",
      "Mobile Apps for Connected Devices",
      "Real-Time Monitoring & Alerts",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "uiux",
    short:
      "Create digital experiences your users will love with intuitive navigation and modern interfaces.",
    detail:
      "Our UI/UX design services help businesses create intuitive, engaging, and user-centered digital experiences that balance aesthetics with functionality. From user research and wireframing to interactive prototypes and modern interface design, we design intuitive digital experiences that improve usability, increase user engagement, and strengthen your brand across web and mobile applications.",
    stat: { value: "50+", label: "products designed end-to-end" },
    capabilities: [
      "User research, journey mapping, and information architecture",
      "Wireframing and interactive, click-through prototypes",
      "Modern UI design systems for web and mobile products",
      "Usability testing and iterative design refinement",
    ],
    technologies: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "Usability Testing"],
    deliverables: ["UX research summary", "Wireframes & prototype", "Visual UI kit", "Dev-ready design specs"],
    ctaLabel: "Discuss Your UI/UX Project",
    whyPlatform: {
      heading: "Why Choose UI/UX Design?",
      paragraphs: [
        "Great design goes beyond visual appeal, it creates intuitive, user-centered experiences that help people interact with your digital products effortlessly. Whether it's a mobile app, web application, or enterprise platform, effective UI/UX design improves usability, increases user engagement, and builds trust in your brand.",
        "A well-designed user experience reduces learning curves, simplifies complex workflows, and encourages users to complete their goals more efficiently. By combining user research, thoughtful interaction design, and modern interface design, businesses can improve customer satisfaction, increase conversions, and create digital products that stand out in a competitive market.",
      ],
    },
    whyUs: [
      { title: "13+ Years of Experience", desc: "Our deep software development expertise enables us to design practical, user-focused interfaces that are technically feasible, scalable, and ready for development." },
      { title: "User-Centered Design Approach", desc: "We design with your users in mind, creating intuitive experiences that improve usability, simplify workflows, and increase user satisfaction." },
      { title: "Research-Driven Design Process", desc: "Every design decision is guided by user research, business goals, and industry best practices to create meaningful digital experiences." },
      { title: "Mobile & Web UI/UX Expertise", desc: "From mobile applications to enterprise web platforms, we design consistent experiences that work seamlessly across devices and screen sizes." },
      { title: "Interactive Prototyping & Design Systems", desc: "We create wireframes, interactive prototypes, and scalable design systems that improve collaboration, accelerate development, and maintain design consistency." },
      { title: "Long-Term Technology Partner", desc: "Beyond delivering beautiful designs, we continue supporting product improvements, design enhancements, and evolving user experiences as your business grows." },
    ],
    expertise: [
      "User Research & UX Strategy",
      "Wireframing & User Journey Mapping",
      "UI Design for Web & Mobile Applications",
      "Interactive Prototyping",
      "Design Systems & Component Libraries",
      "Responsive Web Design",
      "Dashboard & Enterprise Application Design",
      "Product Design Consulting",
    ],
  },
];

export const stats = [
  { value: "13+", label: "Years", icon: "clock" },
  { value: "150+", label: "Apps Built", icon: "code" },
  { value: "7+", label: "Countries Served", icon: "globe" },
  { value: "99%", label: "Client Satisfaction", icon: "heart" },
] as const;

export const testimonials = [
  {
    name: "Manuel Goren",
    quote:
      "Great experience…. Adroit Infosol Team is very professional. They are dependable and worked relatively rapidly and was communicate throughout the process. Will use them again as needed. Thanks!",
  },
  {
    name: "Peter Oey",
    quote:
      "Adroit InfoSol Team was easy to communicate. Delivered the project on time. Was open to hear comments and responded to them quickly. Code review revealed a very tidy and readable code. I will definitely do more business with them again!",
  },
  {
    name: "Joe Fritz",
    quote:
      "This is the third project I've done with Adroit InfoSol. I keep hiring Vishal because he keeps doing a good job. I always feel like he appreciates the work I bring him, no matter the size the contract. As before, I was very satisfied and more project together will be done…!!!",
  },
  {
    name: "Diana Jones",
    quote:
      "Absolutely Amazing Team. Went beyond the initial Job to make sure everything was done properly. They have delivered the app in schedule and without any errors. I never experienced this before from any vendor. Vishal suggested even improvements which increased user friendlyness. VERY good work. I will definitely work with them again.",
  },
];

export const processSteps = [
  {
    title: "Discovery & Planning",
    desc: "Understand business goals, define project requirements, and create a clear roadmap for successful execution.",
  },
  {
    title: "UI/UX & Architecture",
    desc: "Design intuitive user experiences and scalable system architectures that establish a strong foundation for development.",
  },
  {
    title: "Agile Development",
    desc: "Build secure, scalable applications using agile methodologies with continuous collaboration and regular progress updates.",
  },
  {
    title: "QA & Testing",
    desc: "Validate functionality, performance, security, and usability to ensure a reliable, high-quality digital solution.",
  },
  {
    title: "Deployment & Launch",
    desc: "Deploy applications securely across cloud platforms, web environments, and mobile app stores for a seamless launch.",
  },
  {
    title: "Support & Evolution",
    desc: "Provide ongoing maintenance, enhancements, and technical support to keep your software secure, optimized, and future-ready.",
  },
];

// `slug` maps to a Simple Icons (cdn.simpleicons.org) brand mark, rendered
// as a CSS mask so it inherits our theme colors instead of each brand's own
// fixed color (avoids e.g. Apple's mark disappearing on a dark background).
// `slug: null` = no official mark on Simple Icons, falls back to a plain
// text pill.
export const techStack: { name: string; slug: string | null }[] = [
  { name: "Android", slug: "android" },
  { name: "iOS", slug: "apple" },
  { name: "Flutter", slug: "flutter" },
  { name: "React Native", slug: "react" },
  { name: "React", slug: "react" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "AWS", slug: null },
  { name: "Docker", slug: "docker" },
  { name: "LimeSurvey", slug: "limesurvey" },
  { name: "Wappler", slug: null },
];

export const values = [
  {
    title: "Client-Centered Thinking",
    desc: "We begin by listening. Understanding your business, your challenges, and your goals is the foundation of every successful project. We work closely with our clients to define clear expectations, communicate openly, and ensure that the solution we build addresses the real business need.",
    icon: "target",
  },
  {
    title: "Continuous Learning",
    desc: "Technology is constantly evolving, and so are we. We continuously learn and explore new programming languages, platforms, tools, and development practices. This helps us evaluate the right technologies for each project and deliver solutions that are relevant, practical, and built for the future.",
    icon: "compass",
  },
  {
    title: "Engineering Excellence",
    desc: "We care about the quality of the software we build. Our team follows sound coding practices, thoughtful architecture, and maintainable development standards to create software that is reliable, efficient, and easier to evolve over time.",
    icon: "layers",
  },
  {
    title: "Practical & Scalable Solutions",
    desc: "We don't believe in using technology simply for the sake of technology. We analyze the requirements, evaluate available options, and select the approach that best fits the business need, budget, and future goals.",
    icon: "trendingUp",
  },
  {
    title: "Security by Design",
    desc: "Security is an important part of modern software development. We consider security throughout the development lifecycle, from infrastructure and source code to testing and deployment.",
    icon: "shield",
  },
  {
    title: "Quality Through Testing",
    desc: "Quality is built into our development process. Our QA team performs structured testing throughout the application lifecycle, while code reviews and continuous testing help us identify issues early.",
    icon: "checkCircle",
  },
];

export const leadership = [
  {
    name: "Kalpana Patel",
    role: "CEO & Co-Founder",
    bio: "Kalpana Patel is the CEO and Co-Founder of Adroit Infosol. She leads the company's business growth, operations, and client relationships, with a strong focus on building a culture of trust, collaboration, and long-term partnerships. Her vision and leadership have played an important role in shaping Adroit Infosol's journey since its establishment in 2013.",
    photo: "/images/team/kalpana-patel.webp",
  },
  {
    name: "Vishal Patel",
    role: "CTO & Co-Founder",
    bio: "Vishal Patel is the CTO and Co-Founder of Adroit Infosol, with extensive experience in software development, technology architecture, and product engineering. He leads the company's technical direction and focuses on delivering practical, high-quality solutions within agreed timelines and budgets while building lasting value for clients.",
    photo: "/images/team/vishal-patel.webp",
  },
  {
    name: "Dipak Shah",
    role: "Technical Lead",
    bio: "Dipak Shah is the Technical Lead at Adroit Infosol, with over 25 years of experience in software development. Starting his career with FoxPro, he has evolved with the technology landscape and brings extensive expertise in designing data structures and scalable solutions for complex digital products. Today, he leads development across Android, iOS, Flutter, and web technologies.",
    photo: "/images/team/dipak-shah.webp",
  },
  {
    name: "Mukesh Pavar",
    role: "Project Manager & Team Lead",
    bio: "Mukesh Pavar is a Project Manager and Team Lead at Adroit Infosol with over 21 years of experience in software development and project management. He brings extensive expertise in client and team management, along with strong skills in creating software design specifications, database and entity relationship diagrams, workflows, and logic diagrams for complex digital products.",
    photo: "/images/team/mukesh-pavar.webp",
  },
];

export const devTeam = [
  { name: "Zalak S", role: "Web Developer", photo: "/images/team/zalak-s.webp" },
  { name: "Komal P", role: "Web Developer", photo: "/images/team/komal-p.webp" },
  { name: "Rahul S", role: "Web Developer", photo: "/images/team/rahul-s.webp" },
  { name: "Vaibhav J", role: "Web Developer", photo: "/images/team/vaibhav-j.webp" },
  { name: "Neel S", role: "Web Developer", photo: "/images/team/neel-s.webp" },
  { name: "Vikas S", role: "Web Developer", photo: "/images/team/vikas-s.webp" },
  { name: "Ankit M", role: "Web Developer", photo: "/images/team/ankit-m.webp" },
  { name: "Jay T", role: "Android Developer", photo: "/images/team/jay-t.webp" },
  { name: "Amit S", role: "Android & Flutter Developer", photo: "/images/team/amit-s.webp" },
  { name: "Vishal P", role: "iOS & Flutter Developer", photo: "/images/team/vishal-p.webp" },
  { name: "Dhruvit G", role: "iOS Developer", photo: "/images/team/dhruvit-g.webp" },
  { name: "Ravi M", role: "QA Engineer", photo: "/images/team/ravi-m.webp" },
];

export const perks = [
  { title: "Respect & Inclusion", desc: "A workplace where every voice is heard and valued.", icon: "heart" },
  { title: "Competitive Compensation", desc: "Pay that reflects your skills and contribution.", icon: "wallet" },
  { title: "Positive Work Environment", desc: "A culture built on trust, support, and collaboration.", icon: "smile" },
  { title: "Flexible Leave Policy", desc: "Time off when you need it, no unnecessary hassle.", icon: "calendar" },
  { title: "Flexible Working Hours & Hybrid Work", desc: "Work in a way that fits your life and your best output.", icon: "clock" },
  { title: "Global Project Exposure", desc: "Work with clients and teams across the world.", icon: "globe" },
  { title: "Continuous Learning & Career Growth", desc: "Ongoing training and clear paths to grow your career.", icon: "bookOpen" },
  { title: "Team Celebrations & Events", desc: "Festivals, milestones, and wins, celebrated together.", icon: "sparkles" },
];

export const employeeReviews = [
  {
    name: "Zalak S",
    role: "Web Developer",
    tenure: "5+ Years",
    quote:
      "Great place to work, learn, and build practical skills. The team is supportive, communication is smooth, and I always get opportunities to improve with real projects.",
  },
  {
    name: "Rahul S",
    role: "Web Developer",
    tenure: "3+ Years",
    quote:
      "I enjoy the work culture here because collaboration is strong and everyone is ready to help. We focus on quality delivery and keep learning with every project.",
  },
  {
    name: "Vaibhav J",
    role: "Web Developer",
    tenure: "4+ Years",
    quote:
      "Adroit Infosol gives a balanced environment to grow professionally. Leadership is approachable, timelines are clear, and the team environment stays positive.",
  },
  {
    name: "Vishal P",
    role: "iOS & Flutter Developer",
    tenure: "7+ Years",
    quote:
      "The work process is structured and transparent, which helps us stay productive. I appreciate the trust, flexibility, and focus on delivering high-quality solutions.",
  },
];

export const consultationSteps = [
  { step: "1", title: "Book a Slot" },
  { step: "2", title: "Free 30-min Call" },
  { step: "3", title: "Get Your Proposal" },
  { step: "4", title: "We Start Building" },
];

export const consultationGains = [
  {
    title: "Free project scope analysis",
    desc: "We assess your full requirement at zero cost",
  },
  {
    title: "Tech stack recommendation",
    desc: "Best technologies suited for your budget and goals",
  },
  {
    title: "Clear timeline & pricing guidance",
    desc: "No surprises later, full transparency from day one",
  },
];

export const contactInfo = {
  email: "sales@adroitinfosol.com",
  location: "Vadodara, Gujarat, India",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/adroitinfosol/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/adroitinfosolteam/", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/AdroitInfosolTeam/", icon: "facebook" },
  ],
};

export const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "It depends on scope. A focused MVP or single-platform app usually takes 6 to 12 weeks, while a multi-platform or enterprise-grade product can run 3 to 6 months. We share a clear milestone-based timeline after the discovery call, before any work begins.",
  },
  {
    q: "Do you sign an NDA before starting?",
    a: "Yes. We're happy to sign your NDA, or provide our own, before we discuss any project details. Confidentiality is standard practice for every engagement.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Fixed-price for well-defined projects, a dedicated development team for ongoing product work, and hourly or milestone-based billing for smaller or evolving scopes. We recommend the model that fits your project during the consultation.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes a post-launch stabilization window, and we offer ongoing maintenance and enhancement plans for clients who want continued support after that.",
  },
  {
    q: "Can you work with our existing team or codebase?",
    a: "Yes. We regularly join existing teams, take over legacy codebases, and integrate with client-side project management and version control workflows.",
  },
  {
    q: "How do you handle communication across time zones?",
    a: "We've worked with clients across multiple continents since 2013. We agree on overlapping working hours upfront and use async updates, recorded demos, and shared trackers to keep progress visible regardless of time zone.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Work Culture", to: "/work-culture" },
];
