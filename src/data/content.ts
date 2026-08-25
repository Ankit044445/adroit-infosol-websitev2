export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  detail: string;
  icon: string;
  technologies: string[];
  ctaLabel: string;
  cta: { title: string; description: string };
  whyPlatform: { heading: string; paragraphs: string[] };
  whyUs: { title: string; desc: string }[];
  expertise: string[];
  process?: { title: string; desc: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: "android-app-development",
    title: "Android App Development",
    icon: "android",
    short:
      "Build powerful, secure, and high-performance Android applications tailored to your business needs.",
    tagline: "Turn your Android app idea into a powerful digital solution built to solve real business challenges and create lasting value.",
    detail:
      "Our Android app development services help businesses build secure, scalable, and feature-rich mobile applications tailored to their unique requirements. Whether you need a customer-facing app, an enterprise mobility solution, or an IoT-enabled application, our experienced team develops reliable Android solutions that enhance customer engagement, streamline business operations, and support long-term digital growth.",
    technologies: ["Kotlin", "Java", "Jetpack Compose", "Firebase", "Room", "REST/GraphQL"],
    ctaLabel: "Discuss Your Android Project",
    cta: { title: "Have an Android App Idea? Let's Build It Together.", description: "Whether you have a new app idea or want to enhance an existing Android application, our team is ready to help you turn it into a reliable digital solution built for your business goals." },
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
    process: [
      {
        title: "Requirement & Platform Discovery",
        desc: "Understand your business goals, target Android devices, and feature scope to define a clear technical roadmap.",
      },
      {
        title: "UI/UX for Android",
        desc: "Design interfaces that follow Material Design and Android usability patterns while staying true to your brand.",
      },
      {
        title: "Native Development",
        desc: "Build with Kotlin, Java, and Jetpack Compose, integrating hardware, APIs, and third-party services as needed.",
      },
      {
        title: "Device & OS Testing",
        desc: "Validate performance, compatibility, and stability across Android versions, screen sizes, and device manufacturers.",
      },
      {
        title: "Play Store Launch",
        desc: "Handle store listing, release builds, and rollout so your app reaches users smoothly on Google Play.",
      },
      {
        title: "Updates & Support",
        desc: "Provide ongoing maintenance, feature updates, and support as Android OS versions and user needs evolve.",
      },
    ],
  },
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    icon: "ios",
    short:
      "Deliver premium iPhone and iPad applications with seamless performance and intuitive user experiences.",
    tagline: "Turn your app idea into a refined iOS experience designed to engage Apple users and create meaningful value for your business.",
    detail:
      "Our iOS app development services help businesses create premium applications that deliver exceptional experiences across iPhone and iPad devices. Whether you're launching a customer-facing app, a business application, or an enterprise solution, we develop secure, intuitive, and high-performance iOS applications that strengthen your brand, engage users, and drive long-term business success.",
    technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "CloudKit", "REST/GraphQL"],
    ctaLabel: "Discuss Your iOS Project",
    cta: { title: "Ready to Build Your iOS App?", description: "Whether you have a new app idea or want to enhance an existing iOS application, our team is ready to help you turn it into a reliable digital solution built for your business goals." },
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
    process: [
      {
        title: "Requirement & Platform Discovery",
        desc: "Understand your business goals, target Apple devices, and feature scope to define a clear technical roadmap.",
      },
      {
        title: "UI/UX for iOS",
        desc: "Design interfaces that follow Apple's Human Interface Guidelines while staying true to your brand and user needs.",
      },
      {
        title: "Native Development",
        desc: "Build with Swift and SwiftUI, integrating device capabilities, APIs, and third-party services as needed.",
      },
      {
        title: "Device & OS Testing",
        desc: "Validate performance, compatibility, and stability across iPhone, iPad, and current iOS versions.",
      },
      {
        title: "App Store Launch",
        desc: "Handle App Store submission, review requirements, and release builds for a smooth launch.",
      },
      {
        title: "Updates & Support",
        desc: "Provide ongoing maintenance, feature updates, and support as iOS versions and user needs evolve.",
      },
    ],
  },
  {
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development",
    icon: "crossplatform",
    short:
      "Build high-quality mobile applications for Android and iOS using Flutter and React Native.",
    tagline: "Build powerful mobile experiences across Android and iOS with efficient, scalable solutions using Flutter and React Native.",
    detail:
      "Develop Android and iOS applications efficiently with a shared development approach using Flutter and React Native. Cross-platform development helps businesses streamline development, maintain a consistent experience across platforms, and simplify ongoing enhancements and maintenance.",
    technologies: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase", "Fastlane"],
    ctaLabel: "Discuss Your App Project",
    cta: { title: "Ready to Build Your Cross-Platform App?", description: "Whether you have a new app idea or want to enhance an existing application, our team is ready to help you build a reliable cross-platform solution designed for your business goals." },
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
    process: [
      {
        title: "Requirement & Scope Discovery",
        desc: "Understand your business goals and target platforms to define shared vs. platform-specific feature scope.",
      },
      {
        title: "Shared UI/UX Design",
        desc: "Design a consistent experience that works naturally on both Android and iOS without feeling generic on either.",
      },
      {
        title: "Cross-Platform Development",
        desc: "Build with Flutter or React Native, wiring in native modules for platform-specific features where needed.",
      },
      {
        title: "Multi-Device Testing",
        desc: "Validate behavior, performance, and UI consistency across a range of Android and iOS devices.",
      },
      {
        title: "Dual Store Launch",
        desc: "Prepare and submit builds for both Google Play and the App Store, coordinating a synchronized release.",
      },
      {
        title: "Updates & Support",
        desc: "Maintain one shared codebase going forward, rolling out fixes and features to both platforms together.",
      },
    ],
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    icon: "web",
    short:
      "Develop secure, scalable, and responsive web applications that streamline business operations.",
    tagline: "Transform complex business requirements into secure, scalable web applications designed to streamline operations and support long-term growth.",
    detail:
      "Our custom web application development services help businesses streamline operations, automate workflows, and enhance customer engagement through secure and scalable web solutions. From business portals and SaaS platforms to enterprise applications and workflow automation systems, we build responsive, high-performance web applications tailored to your business objectives and future growth.",
    technologies: ["React", "Node.js", "PostgreSQL", "MySQL", "AWS", "Wappler"],
    ctaLabel: "Discuss Your Web Project",
    cta: { title: "Ready to Build Your Custom Web Application?", description: "Whether you have a new product idea or want to modernize an existing web application, our team is ready to help you build a reliable, scalable solution designed around your business goals." },
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
    process: [
      {
        title: "Requirement & Workflow Mapping",
        desc: "Understand your business processes, data model, and integration needs to define a clear technical scope.",
      },
      {
        title: "System Architecture & UI/UX",
        desc: "Design a scalable application structure and intuitive interfaces suited to your team's day-to-day workflows.",
      },
      {
        title: "Full-Stack Development",
        desc: "Build the front-end, back-end, and database layer together, wiring in APIs and third-party integrations.",
      },
      {
        title: "QA & Security Testing",
        desc: "Validate functionality, data integrity, and security across the roles and permissions your application needs.",
      },
      {
        title: "Deployment",
        desc: "Deploy to your chosen cloud or hosting environment with proper configuration, backups, and monitoring in place.",
      },
      {
        title: "Maintenance & Enhancements",
        desc: "Provide ongoing support, performance tuning, and new features as your business processes evolve.",
      },
    ],
  },
  {
    slug: "limesurvey-customization",
    title: "LimeSurvey Customization",
    icon: "survey",
    short:
      "Maximize the power of LimeSurvey with custom themes, plugins, integrations, and feature enhancements.",
    tagline: "Extend LimeSurvey beyond its standard capabilities with custom plugins, themes, integrations, and tailored survey solutions built around your unique requirements.",
    detail:
      "Our LimeSurvey development and customization services help organizations build powerful, flexible, and fully customized survey solutions tailored to their specific requirements. From custom themes, plugins, and integrations to feature enhancements, workflow automation, and performance optimization, we extend LimeSurvey's capabilities to deliver secure, scalable, and user-friendly survey platforms for research, data collection, and business intelligence.",
    technologies: ["LimeSurvey", "PHP", "MySQL", "REST APIs", "Twig"],
    ctaLabel: "Discuss Your LimeSurvey Requirements",
    cta: { title: "Need More from LimeSurvey? Let's Make It Possible.", description: "Whether you need advanced customization, custom workflows, plugins, integrations, or functionality beyond standard LimeSurvey capabilities, our experienced team is ready to build a solution tailored to your requirements." },
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
    process: [
      {
        title: "Requirement & Survey Audit",
        desc: "Review your existing LimeSurvey setup or requirements to define the customization and integration scope.",
      },
      {
        title: "Theme & Workflow Design",
        desc: "Plan custom themes, question flows, and survey logic that match your branding and respondent experience.",
      },
      {
        title: "Plugin & Feature Development",
        desc: "Build custom plugins, question types, and integrations on top of LimeSurvey's core to extend its capabilities.",
      },
      {
        title: "Testing Across Survey Scenarios",
        desc: "Validate logic branching, data capture, and edge cases across devices and respondent conditions.",
      },
      {
        title: "Deployment & Configuration",
        desc: "Deploy the customized instance with proper server configuration, security, and data-handling practices.",
      },
      {
        title: "Ongoing Support & Enhancements",
        desc: "Provide continued plugin updates, LimeSurvey upgrades, and new features as your survey needs grow.",
      },
    ],
  },
  {
    slug: "cloud-devops-solutions",
    title: "Cloud & DevOps Solutions",
    icon: "cloud",
    short:
      "Accelerate software delivery with reliable cloud infrastructure and DevOps best practices.",
    tagline: "Build secure, scalable cloud infrastructure and streamline software delivery with reliable DevOps practices and automation.",
    detail:
      "Our Cloud and DevOps services help businesses build secure, scalable, and resilient infrastructure that supports modern application development. From cloud migration and infrastructure setup to CI/CD pipeline automation, containerization, monitoring, and performance optimization, we streamline software delivery, improve operational efficiency, and ensure high availability for business-critical applications.",
    technologies: ["AWS", "Docker", "Terraform", "GitHub Actions", "Nginx", "Grafana"],
    ctaLabel: "Discuss Your Cloud & DevOps Needs",
    cta: { title: "Ready to Strengthen Your Cloud & DevOps Infrastructure?", description: "Whether you're moving to the cloud, improving an existing environment, or automating your deployment processes, our team is ready to help you build a reliable, scalable infrastructure that supports your business and applications." },
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
    process: [
      {
        title: "Assessment & Planning",
        desc: "Understand your applications, infrastructure, business requirements, and deployment needs to define the right cloud and DevOps strategy.",
      },
      {
        title: "Cloud Architecture",
        desc: "Design secure, scalable, and reliable cloud architecture aligned with your application requirements and future growth.",
      },
      {
        title: "Infrastructure Setup",
        desc: "Configure cloud computing, networking, databases, storage, and other required services for a reliable operating environment.",
      },
      {
        title: "CI/CD & Automation",
        desc: "Implement automated build and deployment pipelines to streamline software delivery, improve consistency, and reduce manual effort.",
      },
      {
        title: "Testing & Deployment",
        desc: "Validate infrastructure, configurations, and deployment workflows before securely deploying applications to the target environment.",
      },
      {
        title: "Monitoring & Optimization",
        desc: "Monitor infrastructure and continuously improve performance, reliability, scalability, and resource utilization as requirements evolve.",
      },
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    icon: "iot",
    short:
      "Connect devices, collect real-time data, and automate business operations with smart IoT solutions.",
    tagline: "Connect devices, collect real-time data, and build intelligent IoT solutions that improve operations, automate processes, and enable smarter business decisions.",
    detail:
      "Our IoT solutions help businesses connect devices, capture real-time data, and automate critical operations through intelligent, connected ecosystems. From industrial automation and smart home solutions to connected products and remote monitoring systems, we integrate hardware, mobile applications, cloud platforms, and data analytics to deliver secure, scalable, and future-ready IoT solutions.",
    technologies: ["MQTT", "AWS IoT", "Node.js", "InfluxDB", "React", "Flutter"],
    ctaLabel: "Discuss Your IoT Project",
    cta: { title: "Ready to Build Your IoT Solution?", description: "Whether you're developing a new connected product, integrating smart devices, or modernizing an existing IoT ecosystem, our team is ready to help you build secure, scalable, and reliable IoT solutions tailored to your business goals." },
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
    process: [
      {
        title: "Discovery & Requirement Analysis",
        desc: "Understand your business objectives, device ecosystem, connectivity requirements, and technical challenges to define the right IoT solution.",
      },
      {
        title: "Solution Architecture & Device Integration",
        desc: "Design the overall IoT architecture, including connected devices, communication protocols, mobile applications, cloud platforms, and backend systems.",
      },
      {
        title: "Application & Platform Development",
        desc: "Develop mobile applications, web dashboards, backend services, APIs, and cloud integrations that enable seamless device communication and data management.",
      },
      {
        title: "Device Communication & Testing",
        desc: "Validate hardware integration, Bluetooth/BLE communication, real-time data synchronization, security, and overall system reliability through comprehensive testing.",
      },
      {
        title: "Deployment & System Integration",
        desc: "Deploy the complete IoT solution, integrate connected devices with cloud services and business systems, and ensure smooth operation across the entire ecosystem.",
      },
      {
        title: "Monitoring, Support & Continuous Improvement",
        desc: "Monitor solution performance, optimize device connectivity, enhance features, and provide ongoing support as your IoT ecosystem grows.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "uiux",
    short:
      "Create digital experiences your users will love with intuitive navigation and modern interfaces.",
    tagline: "Create seamless user experiences and visually engaging interfaces that improve usability, increase engagement, and support your business goals.",
    detail:
      "Our UI/UX design services help businesses create intuitive, engaging, and user-centered digital experiences that balance aesthetics with functionality. From user research and wireframing to interactive prototypes and modern interface design, we design intuitive digital experiences that improve usability, increase user engagement, and strengthen your brand across web and mobile applications.",
    technologies: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "Usability Testing"],
    ctaLabel: "Discuss Your UI/UX Project",
    cta: { title: "Ready to Design Better Digital Experiences?", description: "Whether you're building a new mobile app, redesigning an existing web application, or creating a complex enterprise platform, our UI/UX design team is ready to help you deliver intuitive, engaging, and user-centered digital experiences that support your business goals." },
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
    process: [
      {
        title: "Discovery & Research",
        desc: "Understand your business goals, target audience, user needs, and project requirements to establish a strong design foundation.",
      },
      {
        title: "UX Planning & Wireframing",
        desc: "Create information architecture, user flows, and wireframes to define intuitive navigation and user interactions before visual design begins.",
      },
      {
        title: "UI Design & Prototyping",
        desc: "Design visually engaging interfaces and interactive prototypes that bring ideas to life and allow early feedback before development.",
      },
      {
        title: "Usability Review & Refinement",
        desc: "Evaluate designs, gather feedback, improve usability, and refine interactions to ensure an intuitive and seamless user experience.",
      },
      {
        title: "Developer Handoff",
        desc: "Prepare design assets, specifications, and reusable components to ensure a smooth transition from design to development.",
      },
      {
        title: "Continuous Design Support",
        desc: "Support future enhancements, feature additions, and user experience improvements as your product evolves.",
      },
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
    photo: "/images/testimonials/manuel-goren.webp",
    quote:
      "Great experience…. Adroit Infosol Team is very professional. They are dependable and worked relatively rapidly and was communicate throughout the process. Will use them again as needed. Thanks!",
  },
  {
    name: "Peter Oey",
    photo: "/images/testimonials/peter-oey.webp",
    quote:
      "Adroit InfoSol Team was easy to communicate. Delivered the project on time. Was open to hear comments and responded to them quickly. Code review revealed a very tidy and readable code. I will definitely do more business with them again!",
  },
  {
    name: "Joe Fritz",
    photo: "/images/testimonials/joe-fritz.webp",
    quote:
      "This is the third project I've done with Adroit InfoSol. I keep hiring Vishal because he keeps doing a good job. I always feel like he appreciates the work I bring him, no matter the size the contract. As before, I was very satisfied and more project together will be done…!!!",
  },
  {
    name: "Diana Jones",
    photo: "/images/testimonials/diana-jones.webp",
    quote:
      "Absolutely Amazing Team. Went beyond the initial Job to make sure everything was done properly. They have delivered the app in schedule and without any errors. I never experienced this before from any vendor. Vishal suggested even improvements which increased user friendlyness. VERY good work. I will definitely work with them again.",
  },
];

// real client reviews, 2015-2019
export const globalReviews = [
  {
    name: "Fikret",
    role: "USA · iOS app update",
    quote:
      "The one thing I like about Adroit Infosol, they are always eager to implement a project as efficient and professional as possible with no hacky solution.",
  },
  {
    name: "Marc",
    role: "St Albans, UK · LimeSurvey export plugin",
    quote:
      "I will definitely be working with Kalpana again, thank you so much for the work undertaken with LimeSurvey. The additional module was exactly what we needed.",
  },
  {
    name: "Tyler",
    role: "Milton, USA · Geofencing app & AWS backend",
    quote:
      "Kalpana is a joy to work with and her teammates are top tier developers. They built out my project to our spec sheet with great communication skills. I highly recommend her!",
  },
  {
    name: "Chen",
    role: "USA · iOS vehicle speed analysis app",
    quote:
      "Vishal is very knowledgeable about what he is doing. They delivered a good project and sometimes went the extra mile for what I asked for. I would recommend working with Adroit Infosol.",
  },
  {
    name: "Chet",
    role: "USA · Android property management app",
    quote: "Outstanding job. Will request Adroit Infosol for future work.",
  },
  {
    name: "Ryan",
    role: "Cypress, USA · Android group messaging app",
    quote:
      "Vishal and his team did an excellent job on this project as usual. He is a very skilled and reliable developer and I would definitely work with him in the future.",
  },
  {
    name: "Andrew",
    role: "USA · LimeSurvey, PHP & server admin",
    quote: "I cannot express how happy we are with the work performed by team Adroit Infosol.",
  },
  {
    name: "Sangy",
    role: "USA · iOS/Android app with 360 camera",
    quote:
      "Vishal was cooperative during the contract and in including additional features to the iOS app. Would continue working with Adroit Infosol in the future.",
  },
];

// most client work is under NDA, this is what's public
// `image` = real project logo, pulled from adroitinfosol.com
export const portfolio = [
  { name: "Leakage Management System", platforms: ["Android", "iOS", "Web"], image: "/images/portfolio/leakage-management.webp" },
  { name: "Trip Survey App", platforms: ["Android", "iOS", "Web"], image: "/images/portfolio/trip-survey-app.webp" },
  { name: "Bluetooth Leak Detector", platforms: ["Android", "iOS", "Web"], image: "/images/portfolio/bluetooth-leak-detector.webp" },
  { name: "Appointment Management", platforms: ["Android", "iOS", "Web"], image: "/images/portfolio/appointment-management.webp" },
  { name: "Monitor Civil Project", platforms: ["Android", "iOS", "IoT"], image: "/images/portfolio/monitor-civil-project.webp" },
  { name: "Driving Style Analysis App", platforms: ["Android", "iOS", "Web"], image: "/images/portfolio/driving-style-analysis.webp" },
  { name: "Offline LimeSurvey App", platforms: ["Web", "LimeSurvey"], image: "/images/portfolio/offline-limesurvey-app.webp" },
  { name: "Property Maintenance", platforms: ["Android"], image: "/images/portfolio/property-maintenance.webp" },
  { name: "Security Alarm", platforms: ["iOS"], image: "/images/portfolio/security-alarm.webp" },
  { name: "Simba", platforms: ["Web", "Android"], image: "/images/portfolio/simba.webp" },
  { name: "Civil Project Expenses", platforms: ["Hybrid"], image: "/images/portfolio/civil-project-expenses.webp" },
  { name: "HatchTank", platforms: ["Hybrid"], image: "/images/portfolio/hatchtank.webp" },
  { name: "Farm Management", platforms: ["Android", "Hybrid"], image: "/images/portfolio/farm-management.webp" },
  { name: "LimeSurvey - Map Question", platforms: ["Web", "LimeSurvey"], image: "/images/portfolio/limesurvey-map-question.webp" },
  { name: "LimeSurvey - SQL Export", platforms: ["Web", "LimeSurvey"], image: "/images/portfolio/limesurvey-sql-export.webp" },
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

// `slug` = Simple Icons mark, recolored via CSS mask; `null` = plain text pill
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

// icon slugs for service-page tech chips, unmapped names fall back to a code glyph
export const techIconSlugs: Record<string, string> = {
  Kotlin: "kotlin",
  Java: "openjdk",
  Swift: "swift",
  SwiftUI: "swift",
  Flutter: "flutter",
  "React Native": "react",
  React: "react",
  Dart: "dart",
  TypeScript: "typescript",
  Firebase: "firebase",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Docker: "docker",
  Terraform: "terraform",
  "GitHub Actions": "githubactions",
  Nginx: "nginx",
  Grafana: "grafana",
  Figma: "figma",
  LimeSurvey: "limesurvey",
  PHP: "php",
  Fastlane: "fastlane",
  MQTT: "mqtt",
  InfluxDB: "influxdb",
};

// Home page differentiators, separate from `values` (About page)
export const homeDifferentiators = [
  {
    title: "NDA-First Confidentiality",
    desc: "We sign your NDA, or provide our own, before discussing any project details. Confidentiality is standard on every engagement.",
    icon: "shield",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Fixed-price for well-defined scopes, a dedicated team for ongoing product work, or milestone billing for evolving projects.",
    icon: "briefcase",
  },
  {
    title: "Post-Launch Support Included",
    desc: "Every project ships with a stabilization window, plus ongoing maintenance and enhancement plans if you want continued support.",
    icon: "checkCircle",
  },
  {
    title: "Built for Global Time Zones",
    desc: "Clients across multiple continents since 2013 - overlapping hours, async updates, and recorded demos keep progress visible either way.",
    icon: "globe",
  },
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
    photo: "/images/employee-review/zalak-s.svg",
    quote:
      "Great place to work, learn, and build practical skills. The team is supportive, communication is smooth, and I always get opportunities to improve with real projects.",
  },
  {
    name: "Rahul S",
    role: "Web Developer",
    tenure: "3+ Years",
    photo: "/images/employee-review/rahul-s.svg",
    quote:
      "I enjoy the work culture here because collaboration is strong and everyone is ready to help. We focus on quality delivery and keep learning with every project.",
  },
  {
    name: "Vaibhav J",
    role: "Web Developer",
    tenure: "4+ Years",
    photo: "/images/employee-review/vaibhav-j.svg",
    quote:
      "Adroit Infosol gives a balanced environment to grow professionally. Leadership is approachable, timelines are clear, and the team environment stays positive.",
  },
  {
    name: "Vishal P",
    role: "iOS & Flutter Developer",
    tenure: "7+ Years",
    photo: "/images/employee-review/vishal-p.svg",
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
  { label: "Portfolio", to: "/portfolio" },
  { label: "Work Culture", to: "/work-culture" },
];
