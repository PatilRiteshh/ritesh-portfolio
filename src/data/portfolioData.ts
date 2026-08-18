import { Project, SkillCategory, TimelineItem, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ritesh Patil',
  shortName: 'Ritesh',
  tagline: "HELLO, I'M RITESH",
  title: 'Java Full Stack Developer',
  supportingText: 'Building scalable, secure and user-focused web applications.',
  description:
    'BE Computer Engineering student passionate about Java, backend development, full-stack web applications, databases, REST APIs and software engineering.',
  aboutBio:
    "I'm Ritesh Patil, a BE Computer Engineering student focused on Java Full Stack Development. I enjoy building practical web applications, developing backend systems, working with databases and continuously improving my problem-solving and software development skills.",
  email: 'rdp4957@gmail.com',
  profileImage: '/src/assets/images/ritesh_portrait_1786990118886.jpg',
  education: {
    degree: 'BE Computer Engineering',
    university: 'Savitribai Phule Pune University (SPPU)',
    status: 'Pursuing',
  },
  careerFocus: 'Java Full Stack Development / Backend Development',
  interests: ['Backend Development', 'REST APIs', 'Databases', 'DSA', 'System Architecture'],
  socials: {
    github: 'https://github.com/PatilRiteshh',
    linkedin: 'https://www.linkedin.com/in/riteshpatil01/',
    email: 'mailto:rdp4957@gmail.com',
  },
};

export const TECH_TICKER_ITEMS = [
  'Java',
  'Spring Boot',
  'MySQL',
  'REST API',
  'HTML5',
  'CSS3',
  'JavaScript',
  'JSP',
  'Servlets',
  'JDBC',
  'Git',
  'GitHub',
  'Tomcat',
  'Maven',
  'Hibernate',
  'Microservices',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Backend',
    iconName: 'Server',
    description: 'Server-side architectures, business logic, and web services',
    skills: [
      { name: 'Spring Boot', highlight: true },
      { name: 'Java Servlets', highlight: true },
      { name: 'JSP', highlight: false },
      { name: 'JDBC', highlight: true },
      { name: 'REST APIs', highlight: true },
    ],
  },
  {
    category: 'Programming',
    iconName: 'Code2',
    description: 'Core languages for systems and enterprise solutions',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: false },
      { name: 'SQL', highlight: true },
    ],
  },
  {
    category: 'Database',
    iconName: 'Database',
    description: 'Relational schema design, querying, and NoSQL stores',
    skills: [
      { name: 'MySQL', highlight: true },
      { name: 'MongoDB', highlight: false },
    ],
  },
  {
    category: 'Frontend',
    iconName: 'Layout',
    description: 'Interactive, responsive user interfaces and styling',
    skills: [
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
      { name: 'JavaScript', highlight: true },
    ],
  },
  {
    category: 'Tools & DevOps',
    iconName: 'Wrench',
    description: 'Developer tooling, version control, and web servers',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'Apache Tomcat', highlight: false },
      { name: 'IntelliJ IDEA', highlight: false },
      { name: 'Eclipse', highlight: false },
      { name: 'VS Code', highlight: false },
    ],
  },
  {
    category: 'Core Concepts',
    iconName: 'Binary',
    description: 'Foundational computer science principles & architectures',
    skills: [
      { name: 'OOP', highlight: true },
      { name: 'Data Structures', highlight: true },
      { name: 'Algorithms', highlight: true },
      { name: 'DBMS', highlight: true },
      { name: 'Computer Networks', highlight: false },
      { name: 'Operating Systems', highlight: false },
    ],
  },
];

export const LEARNING_JOURNEY: TimelineItem[] = [
  {
    stage: 1,
    title: 'Java Fundamentals',
    phase: 'Core Foundation',
    description: 'Mastering syntax, control flow, variables, data types, and core standard libraries.',
    skills: ['Java SE', 'Syntax', 'Data Types', 'Exception Handling'],
    icon: 'Coffee',
    status: 'completed',
  },
  {
    stage: 2,
    title: 'Object-Oriented Programming',
    phase: 'Software Architecture',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, and SOLID design patterns.',
    skills: ['Inheritance', 'Polymorphism', 'Interfaces', 'Design Patterns'],
    icon: 'Layers',
    status: 'completed',
  },
  {
    stage: 3,
    title: 'Data Structures & Algorithms',
    phase: 'Problem Solving',
    description: 'Time/space complexity analysis, arrays, linked lists, trees, sorting, and algorithmic optimization.',
    skills: ['Arrays & Strings', 'LinkedLists', 'Binary Trees', 'Searching & Sorting'],
    icon: 'Binary',
    status: 'completed',
  },
  {
    stage: 4,
    title: 'JDBC + MySQL',
    phase: 'Data Persistence',
    description: 'Relational database schema modeling, ACID transactions, and Java Database Connectivity.',
    skills: ['JDBC Driver', 'PreparedStatement', 'SQL Queries', 'Connection Pooling'],
    icon: 'Database',
    status: 'completed',
  },
  {
    stage: 5,
    title: 'Servlets + JSP',
    phase: 'Web Fundamentals',
    description: 'HTTP request-response cycle, Session management, Filters, and MVC web architecture with Apache Tomcat.',
    skills: ['HttpServlet', 'JSP Expression Language', 'Sessions & Cookies', 'Apache Tomcat'],
    icon: 'Globe',
    status: 'completed',
  },
  {
    stage: 6,
    title: 'Spring Boot',
    phase: 'Enterprise Framework',
    description: 'Dependency Injection, Inversion of Control (IoC), Spring MVC, Spring Data JPA, and Spring Security.',
    skills: ['Spring Boot', 'Spring Data JPA', 'IoC / DI', 'Application Configuration'],
    icon: 'Flame',
    status: 'completed',
  },
  {
    stage: 7,
    title: 'REST APIs',
    phase: 'Service Integration',
    description: 'Designing stateless RESTful endpoints, JSON serialization, status code conventions, and API documentation.',
    skills: ['HTTP Verbs', 'JSON / DTOs', 'Error Handling', 'JWT Authentication'],
    icon: 'Send',
    status: 'completed',
  },
  {
    stage: 8,
    title: 'Full Stack Development',
    phase: 'End-to-End Integration',
    description: 'Connecting frontend interfaces with backend RESTful services, responsive UI design, and asynchronous data fetching.',
    skills: ['JavaScript / UI', 'API Integration', 'Full Stack Architecture', 'State Flow'],
    icon: 'Monitor',
    status: 'completed',
  },
  {
    stage: 9,
    title: 'Real-World Projects',
    phase: 'Practical Engineering',
    description: 'Building end-to-end production-grade applications addressing real-world problem domains.',
    skills: ['PG Management', 'Legal-Tech AI', 'Threat Intel SOC', 'System Design'],
    icon: 'FolderGit2',
    status: 'completed',
  },
  {
    stage: 10,
    title: 'Git + GitHub + Deployment',
    phase: 'DevOps & Collaboration',
    description: 'Version control workflows, branching strategies, server containerization, and cloud deployment.',
    skills: ['Git Flow', 'Pull Requests', 'Build Automation', 'Cloud Hosting'],
    icon: 'GitBranch',
    status: 'mastering',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'pg-management-system',
    title: 'PG Management System',
    shortDescription:
      'A web-based PG management platform for managing PG listings, users, bookings and administrative operations.',
    overview:
      'A comprehensive web platform engineered with Java enterprise technologies to streamline paying guest accommodation workflows. The system allows prospective tenants to browse verified listings, submit booking requests, manage rent receipts, and provides property administrators with comprehensive tenant onboarding, room allocation, and financial tracking dashboards.',
    problem:
      'Manual PG and hostel management relies on fragmented paper records and disorganized messaging, causing billing errors, double-booked rooms, and slow tenant verification.',
    solution:
      'Built a robust MVC web application leveraging Java Servlets, JSP, JDBC, and MySQL on Apache Tomcat with role-based access control, automated booking state machines, and real-time room inventory management.',
    technologies: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Tomcat', 'HTML5/CSS3', 'JavaScript'],
    features: [
      'Secure User Registration & Multi-Role Authentication (Tenants & Admins)',
      'Dynamic PG Listing Catalog with Room Type, Amenities & Pricing Filters',
      'Instant PG Booking & Room Allocation Engine with Status Tracking',
      'Tenant Dashboard for Viewing Lease Details, Payment History & Maintenance Requests',
      'Administrative Control Center for Managing Room Occupancy & Revenue Reports',
      'Transaction-Safe Database Operations with Prepared Statements & Connection Pooling',
    ],
    architecture: {
      frontend: 'JSP views with responsive CSS and JavaScript validation',
      backend: 'Java Servlets following MVC pattern on Apache Tomcat Server',
      database: 'MySQL relational database with normalized schema (InnoDB, ACID)',
      securityOrTools: 'Session-based authentication, BCrypt password hashing, JDBC transaction management',
      flowDescription:
        'User Browser ➔ Apache Tomcat Web Container ➔ Servlet Controllers ➔ Service Layer ➔ JDBC DAO Layer ➔ MySQL Relational Store',
    },
    challenges: [
      'Handling concurrent booking requests for limited room capacity using database transactions.',
      'Implementing flexible session management and multi-role authorization filters across administrative routes.',
      'Optimizing complex SQL queries for multi-criteria room filtering and occupancy calculations.',
    ],
    colorTheme: {
      bgGradient: 'from-[#1B2A4A] via-[#1E1F3B] to-[#121424]',
      cardBorder: 'border-blue-500/30',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      accentColor: '#2196F3',
      glowColor: 'rgba(33, 150, 243, 0.25)',
    },
    githubUrl: 'https://github.com/rdp4957/pg-management-system',
    liveUrl: 'https://github.com/rdp4957/pg-management-system',
    type: 'fullstack',
    mockupType: 'pg',
  },
  {
    id: 'pre-advocate',
    title: 'Pre-Advocate',
    shortDescription:
      'An AI-assisted legal guidance platform designed to provide preliminary legal information and help users connect with suitable advocates.',
    overview:
      'Pre-Advocate is a modern legal-tech solution bridging the gap between citizens and legal counsel. Powered by Spring Boot and the Gemini API, it analyzes user queries to deliver structured preliminary legal guidance, categorize legal domains, and intelligently recommend verified advocates while managing secure consultation appointments.',
    problem:
      'Navigating legal rights and finding specialized advocates can be intimidating, confusing, and financially prohibitive for individuals seeking initial guidance.',
    solution:
      'Engineered a secure Spring Boot REST API platform integrating the Gemini API to summarize relevant legal sections and guide users to qualified advocates based on jurisdiction and case type.',
    disclaimer:
      'Provides preliminary information and does not replace professional legal advice.',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Spring Security',
      'JWT',
      'REST API',
      'Gemini API',
      'Hibernate/JPA',
    ],
    features: [
      'Stateless JWT-based Authentication with Role-Based Authorization (Client, Advocate, Admin)',
      'AI-Powered Legal Query Analysis & Structured Preliminary Guidance Engine',
      'Intelligent Advocate Recommendation Engine by Specialization & Location',
      'Interactive Appointment Booking & Consultation Management System',
      'Automated Case Summary Generation for Advocates prior to Consultations',
      'Secure RESTful Endpoints with Global Exception Handling & DTO Validation',
    ],
    architecture: {
      frontend: 'Responsive React Single Page Application with dynamic query workflow',
      backend: 'Spring Boot 3.x REST Services, Spring Security, Spring Data JPA',
      database: 'MySQL Database for user credentials, advocate profiles, and case logs',
      securityOrTools: 'JWT Bearer token verification, Gemini API client, Maven, Swagger/OpenAPI',
      flowDescription:
        'Client Application ➔ Spring Security Filter Chain ➔ REST Controllers ➔ Gemini AI Service / Advocate Service ➔ Spring Data JPA ➔ MySQL Database',
    },
    challenges: [
      'Crafting precise AI system prompts with built-in legal safety constraints and automated disclaimer enforcement.',
      'Configuring resilient token-based stateless security with fine-grained endpoint authorization.',
      'Structuring clean entity mappings and handling bidirectional JPA relationships efficiently.',
    ],
    colorTheme: {
      bgGradient: 'from-[#2B1B4A] via-[#241A3E] to-[#141226]',
      cardBorder: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      accentColor: '#7567D9',
      glowColor: 'rgba(117, 103, 217, 0.25)',
    },
    githubUrl: 'https://github.com/rdp4957/pre-advocate',
    liveUrl: 'https://github.com/rdp4957/pre-advocate',
    type: 'ai',
    mockupType: 'legal',
  },
  {
    id: 'threat-intelligence-soc-aggregator',
    title: 'Threat Intelligence SOC Aggregator',
    shortDescription:
      'A cybersecurity platform that aggregates threat intelligence feeds and presents security information through a centralized dashboard.',
    overview:
      'A security operations center (SOC) threat aggregation and visualization dashboard designed to gather, normalize, and analyze Indicators of Compromise (IOCs) from industry intelligence feeds including VirusTotal, AlienVault OTX, and MISP.',
    problem:
      'Security analysts face alert fatigue and fragmented threat data when manually checking IP addresses, malicious domains, and file hashes across multiple disparate security providers.',
    solution:
      'Developed a centralized aggregation engine in Python and Flask backed by MongoDB that polls threat feeds, extracts IOCs, calculates composite threat risk scores, and visualizes security metrics in real time.',
    technologies: [
      'Python',
      'Flask',
      'MongoDB',
      'VirusTotal API',
      'MISP',
      'AlienVault OTX',
      'REST API',
      'Chart.js',
    ],
    features: [
      'Multi-Source IOC Collection (IP addresses, Domains, URLs, SHA256 hashes)',
      'Automated Threat Feed Aggregation & Deduplication Pipeline',
      'Real-Time Composite Threat Risk Score Calculation',
      'Interactive SOC Dashboard with Threat Feeds, IOC Cards & Severity Badges',
      'Rapid IOC Search & Lookup Tool with Instant Reputation Breakdown',
      'Structured Threat Intelligence Export in STIX/JSON Formats',
    ],
    architecture: {
      frontend: 'Analytical dashboard with real-time severity metrics and trend visualization',
      backend: 'Python Flask REST microservice with asynchronous threat feed pollers',
      database: 'MongoDB document store optimized for flexible, dynamic IOC payloads',
      securityOrTools: 'VirusTotal v3 API, AlienVault OTX SDK, MISP Integration, PyMongo',
      flowDescription:
        'Threat Feeds / Analyst Query ➔ Flask Aggregator Service ➔ Threat Intelligence API Connectors ➔ Normalizer Engine ➔ MongoDB ➔ SOC Dashboard UI',
    },
    challenges: [
      'Normalizing varied data schemas from disparate security intelligence feeds into a cohesive document model.',
      'Implementing rate limiting and caching strategies to stay within external API quotas while maintaining fresh data.',
      'Designing an intuitive, high-density visualization for security analysts to quickly triage urgent threats.',
    ],
    colorTheme: {
      bgGradient: 'from-[#1A3326] via-[#162A24] to-[#0F1E19]',
      cardBorder: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      accentColor: '#7ED957',
      glowColor: 'rgba(126, 217, 87, 0.25)',
    },
    githubUrl: 'https://github.com/rdp4957/soc-threat-aggregator',
    liveUrl: 'https://github.com/rdp4957/soc-threat-aggregator',
    type: 'security',
    mockupType: 'soc',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'backend-dev',
    title: 'Backend Development',
    subtitle: 'Java & Spring Ecosystem',
    description: 'Java backend applications and REST APIs engineered for reliability, security, and high performance.',
    highlights: ['Spring Boot & Microservices', 'Servlets & MVC Architecture', 'Clean Code & SOLID Principles'],
    iconName: 'Server',
    accent: '#2196F3',
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Development',
    subtitle: 'End-to-End Solutions',
    description: 'Responsive web applications seamlessly integrating intuitive frontend interfaces with robust backend logic.',
    highlights: ['End-to-End Architecture', 'Responsive UI & Modern Styling', 'State Management & Async Data'],
    iconName: 'Layout',
    accent: '#35C6E8',
  },
  {
    id: 'database-dev',
    title: 'Database Development',
    subtitle: 'Schema Design & Optimization',
    description: 'MySQL database design, normalized schemas, indexed queries, and reliable Java application integration.',
    highlights: ['Relational Schema Design', 'ACID Transactions & JDBC', 'Query Optimization & Indexing'],
    iconName: 'Database',
    accent: '#7ED957',
  },
  {
    id: 'api-dev',
    title: 'API Development',
    subtitle: 'RESTful Architecture',
    description: 'Secure, documented, and structured REST APIs built with Spring Boot, JWT authentication, and standard HTTP conventions.',
    highlights: ['JWT & Spring Security', 'DTO Validation & Error Handling', 'Swagger / OpenAPI Standards'],
    iconName: 'Cpu',
    accent: '#7567D9',
  },
];
