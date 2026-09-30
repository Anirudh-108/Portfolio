import { asset } from '../utils/asset'

export const profile = {
  name: 'Anirudh Suryawanshi',
  firstName: 'Anirudh',
  shortName: 'AS',
  title: 'Software Engineer',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'AI Engineer',
  ],
  email: 'anirudhsuryawanshi759@gmail.com',
  phone: '+91-8319194220',
  linkedin: 'https://www.linkedin.com/in/anirudh-suryawanshi',
  linkedinLabel: 'linkedin.com/in/anirudh-suryawanshi',
  github: 'https://github.com/Anirudh-108',
  leetcode: 'https://leetcode.com/u/Anirudh-108/',
  twitter: 'https://twitter.com/ani_rudh108',
  facebook: 'https://www.facebook.com/anirudh.suryawanshi.568/',
  resume: 'https://drive.google.com/file/d/1qaicex-slP1e908B5EmHjScAEvCT4vY-/view?usp=sharing',
  location: 'Chennai, India',
  availability: 'Open to opportunities',
  heroTagline:
    'Software Engineer with nearly 2 years of experience in enterprise application development — backend engineering, RESTful APIs, cloud, Generative AI, Agentic AI, and CI/CD.',
  aboutIntro:
    'Software Engineer with nearly 2 years of experience in enterprise application development, with hands-on experience in backend engineering, RESTful APIs, cloud technologies, Generative AI, Agentic AI, and CI/CD. Currently specializing in Java and Spring Boot, with experience building backend applications using Spring MVC, Spring Data JPA, Hibernate, SQL, and microservices architecture through enterprise-style personal projects.',
  aboutBody:
    'Experienced with Node.js, Express.js, Git, Docker, Azure Cloud, and DevOps practices. Knowledgeable in Retrieval-Augmented Generation (RAG), LLMs, LangChain, and LangGraph. Passionate about delivering reliable, scalable systems that solve real business problems.',
  techTags: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'React', 'Azure', 'Redis', 'Kafka', 'LangGraph'],
  codingStats: [
    {
      value: '300+',
      label: 'Questions Solved on CodeChef',
      platform: 'CodeChef',
      icon: 'bx-code-block',
    },
    {
      value: '250+',
      label: 'Questions Solved on LeetCode',
      platform: 'LeetCode',
      icon: 'bx-terminal',
    },
    {
      value: '200+',
      label: 'Questions Solved on GeeksforGeeks',
      platform: 'GeeksforGeeks',
      icon: 'bx-brain',
    },
  ],
  skillBars: [
    { name: 'Java & Spring Boot', percent: 90 },
    { name: 'Generative & Agentic AI', percent: 85 },
    { name: 'Node.js & Express', percent: 88 },
    { name: 'Cloud & DevOps (Azure)', percent: 82 },
    { name: 'Frontend (React / Angular)', percent: 78 },
  ],
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Software Engineer Level 2 — R&D Innovation Lab',
    company: 'Hexaware Technologies',
    location: 'Chennai, India',
    period: 'Jul 2026 — Present',
    points: [
      'Designed and integrated Agentic AI workflows and orchestration solutions into enterprise applications, improving workflow automation efficiency by 30% and reducing manual processing efforts by 25%.',
      'Developed AI agents, LLM-powered workflows, and enterprise API integrations, optimizing orchestration, secure data exchange, error handling, and backend scalability while reducing workflow execution time by 20%.',
    ],
  },
  {
    role: 'Software Engineer Level 1 — R&D Innovation Lab',
    company: 'Hexaware Technologies',
    location: 'Chennai, India',
    period: 'Jul 2025 — Jul 2026',
    points: [
      'Led a team of 3 engineers in developing and delivering scalable backend solutions using Node.js, Express.js, RESTful APIs, and MongoDB, ensuring reliable application performance and supporting business-critical functionality.',
      'Designed and enhanced backend APIs with Express.js, implementing request validation, business logic, exception handling, and database integration — reducing API-related defects by 20% and improving maintainability.',
      'Developed and maintained CI/CD pipelines for automated build, testing, and deployment processes — reducing manual deployment effort by 30% and improving release efficiency and deployment consistency.',
      'Used Azure App Service, Key Vault, Logic Apps, and Blob Storage for cloud deployments and workflows — improving operational reliability by 25%.',
    ],
  },
  {
    role: 'Associate Software Engineer — R&D Innovation Lab',
    company: 'Hexaware Technologies',
    location: 'Chennai, India',
    period: 'Nov 2024 — Jul 2025',
    points: [
      'Resolved 30+ critical backend and REST API defects in TypeScript and Express.js services through debugging, performance analysis, and database optimization, improving application stability.',
      'Improved application performance by 40% through optimization of business logic, query execution, and data access patterns across Express.js and MongoDB services.',
      'Improved application security by remediating vulnerabilities identified through SAST/SCA assessments, addressing XSS, CSRF, and third-party dependency risks through secure coding practices.',
    ],
  },
]

export const services = [
  {
    icon: 'bx-server',
    title: 'Backend Engineering',
    description:
      'Scalable APIs and services with Java Spring Boot, Node.js, Express, and microservices patterns.',
    points: ['REST APIs', 'Spring Boot / JPA', 'Node.js & Express'],
  },
  {
    icon: 'bx-git-branch',
    title: 'Microservices & Messaging',
    description:
      'Event-driven systems with Kafka, Saga orchestration, and reliable cross-service workflows.',
    points: ['Apache Kafka', 'Saga Pattern', 'Transactional Outbox'],
  },
  {
    icon: 'bx-cloud',
    title: 'Cloud & DevOps',
    description:
      'Azure deployments, CI/CD pipelines, Docker, and secure cloud operations.',
    points: ['Azure App Service', 'CI/CD Pipelines', 'Docker & Kubernetes'],
  },
  {
    icon: 'bx-chip',
    title: 'AI & GenAI',
    description:
      'RAG assistants, LLMs, LangChain, LangGraph, and MCP-powered agentic workflows.',
    points: ['RAG / LangChain', 'LangGraph', 'Spring AI', 'MCP Server'],
  },
  {
    icon: 'bx-code-alt',
    title: 'Frontend Development',
    description:
      'Modern interfaces with React, Angular, and responsive web standards.',
    points: ['React.js', 'Angular', 'HTML5 / CSS3'],
  },
  {
    icon: 'bx-shield-quarter',
    title: 'Security & Quality',
    description:
      'Secure coding, JWT/RBAC, and vulnerability remediation from SAST/SCA assessments.',
    points: ['JWT & OAuth', 'SAST / SCA', 'Secure Coding'],
  },
]

export const education = [
  {
    icon: 'bxs-graduation',
    title: 'B.Tech — Information Technology',
    school: 'Technocrats Institute of Technology, Bhopal',
    period: '2020 — 2024',
    result: 'CGPA 8.73',
  },
  {
    icon: 'bxs-school',
    title: 'Twelfth Grade — CBSE',
    school: 'Kendriya Vidyalaya, Seoni',
    period: 'Maths & Science',
    result: 'Score 76%',
  },
  {
    icon: 'bxs-buildings',
    title: 'Tenth Grade — CBSE',
    school: 'Kendriya Vidyalaya, Seoni',
    period: 'Secondary',
    result: 'Score 67%',
  },
]

export const certifications = [
  {
    icon: 'bx-bot',
    title: 'Claude Certified Developer — Foundations',
    issuer: 'Anthropic',
    validity: "Aug'26 to Aug'27",
    link: 'https://drive.google.com/file/d/133ZokDKbDssWriz1jLujDgsdtbBdceHP/view?usp=sharing',
  },
  {
    icon: 'bx-bot',
    title: 'Claude Certified Associate — Foundations',
    issuer: 'Anthropic',
    validity: "Aug'26 to Aug'27",
    link: 'https://drive.google.com/file/d/1rPmTUxq7MCbaXYEi_ZGQEJ5Glng87AJ_/view?usp=sharing',
  },
  {
    icon: 'bxl-aws',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    validity: "Jan'25 to Jan'28",
    link: 'https://drive.google.com/file/d/12JyRbnzwPBRP9i-2EFOgC8u-j1BI3IYk/view?usp=sharing',
  },
  {
    icon: 'bxl-microsoft',
    title: 'Microsoft Certified: Azure Developer',
    issuer: 'Futureskills Prime',
    validity: "Oct'25 to Oct'26",
    link: 'https://drive.google.com/file/d/1B1rxWwg-WQPurL9RK734VGi9PflE9Ph8/view?usp=sharing',
  },
  {
    icon: 'bx-globe',
    title: 'Web Development',
    issuer: 'Techniche IIT Guwahati × 1stop',
    validity: 'Jun–Jul 2022',
    link: 'https://drive.google.com/file/d/1aektUl0k6RzZY5LgY5M4GhbhbOhqUv-3/view?usp=sharing',
  },
  {
    icon: 'bx-code-alt',
    title: 'Programming in Java by NPTEL',
    issuer: 'National Programme on Technology Enhanced Learning',
    validity: 'Jan–Apr 2023 · Elite 78%',
    link: 'https://drive.google.com/file/d/1XUEjOcqMsM4-nn7l9XqWQC5iMwnzA2Ek/view?usp=sharing',
  },
  {
    icon: 'bx-code-alt',
    title: 'Programming in C++ by NPTEL',
    issuer: 'National Programme on Technology Enhanced Learning',
    validity: 'Jan–Apr 2023 · Elite 78%',
    link: 'https://drive.google.com/file/d/1LZDTlCz4juKQcJhQ7kBYSbWRCguyzM_i/view?usp=sharing',
  },
  {
    icon: 'bx-code-alt',
    title: 'Data Structure and Algorithm Using Java by NPTEL',
    issuer: 'NPTEL — IIT Kharagpur',
    validity: 'Jan–Apr 2023 · Elite 78%',
    link: 'https://drive.google.com/file/d/12wHU7_PHx2_XHI7aZez34L9xXB9iS21u/view?usp=sharing',
  },
  {
    icon: 'bx-code-alt',
    title: 'Problem Solving through Programming in C by NPTEL',
    issuer: 'NPTEL — IIT Kharagpur',
    validity: 'Jan–Apr 2023 · Elite 78%',
    link: 'https://drive.google.com/file/d/1LZDTlCz4juKQcJhQ7kBYSbWRCguyzM_i/view?usp=sharing',
  },
]

export const projects = [
  {
    id: 1,
    title: 'BankNova',
    category: 'java',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Spring AI'],
    image: asset('img/project-banknova.png'),
    description:
      'Enterprise digital banking platform with multi-module Spring Boot microservices (auth, accounts, transfers, loans, notifications, AI), Spring Cloud Gateway, PostgreSQL, Flyway, Kafka saga orchestration, JWT/RBAC, OAuth 2.0, and a Spring AI RAG assistant with OpenAI embeddings and pgvector.',
    link: 'https://github.com/Anirudh-108',
  },
  {
    id: 2,
    title: 'OrderSphere',
    category: 'java',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'Redis'],
    image: asset('img/project-ordersphere.png'),
    description:
      'E-commerce order processing microservices with Spring Cloud Gateway, JWT RBAC, PostgreSQL, Redis, Kafka Saga/outbox, idempotent payments, Docker, and Azure Pipelines CI/CD.',
    link: 'https://github.com/Anirudh-108',
  },
  {
    id: 3,
    title: 'Health Care System',
    category: 'java',
    tags: ['Java', 'Swing', 'Oracle'],
    image: asset('img/project-healthcare.png'),
    description:
      'Healthcare system with Java Swing, AWT, Joda API, and Oracle Database for patient and clinic data management.',
    link: 'https://github.com/Anirudh-108/Sanjeevani.git',
  },
  {
    id: 4,
    title: 'AskTrack',
    category: 'ai',
    tags: ['AI', 'RAG', 'React', 'FastAPI'],
    image: asset('img/project-asktrack.png'),
    description:
      'Full-stack AI chatbot for document Q&A with RAG and semantic search. Upload PDF/TXT/DOC/DOCX, ask questions with FAISS vector retrieval, conversational memory, and source citations — built with React, TypeScript, and FastAPI.',
    link: 'https://github.com/Anirudh-108/AskTrack/tree/main',
  },
  {
    id: 5,
    title: 'Dice Game',
    category: 'web',
    tags: ['Web App', 'HTML/CSS/JS'],
    image: asset('img/project-dicegame.png'),
    description:
      'Engaging dice game with rolling animations and an intuitive interface built with HTML, CSS, and JavaScript.',
    link: 'https://anirudh-108.github.io/Dice-Game/',
  },
  {
    id: 6,
    title: 'Infirmary Handling',
    category: 'c',
    tags: ['C', 'File Handling'],
    image: asset('img/project-infirmary.png'),
    description:
      'Menu-driven C program to manage doctors, nurses, patients, and medicines using file handling.',
    link: 'https://github.com/Anirudh-108/Infirmary-Handling',
  },
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'java', label: 'Java' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'Web App' },
  { id: 'c', label: 'C' },
]
