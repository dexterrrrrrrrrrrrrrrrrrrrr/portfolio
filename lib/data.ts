export const profile = {
  name: "Anurag Paul",
  tagline: "Wiring intelligence into the systems people rely on when the network goes quiet.",
  taglineShort: "AI/ML Developer • Full Stack Engineer • Community Builder",
  email: "anuragpaul2006@gmail.com",
  github: "https://github.com/dexterrrrrrrrrrrrrrrrrrrrr",
  linkedin: "https://www.linkedin.com/in/anurag-paul-022206334/",
  resumeUrl: "/resume.pdf",
  location: "Bengaluru, India",
};

export const positions = [
  { role: "Google Student Ambassador", org: "2026 Cohort", icon: "sparkles" },
  { role: "Vice Chair", org: "IEEE Information Theory Society", icon: "network" },
  { role: "AI/ML Developer", org: "Independent", icon: "brain" },
  { role: "Full Stack Developer", org: "Independent", icon: "code" },
  { role: "Community Builder", org: "Open Source", icon: "users" },
  { role: "Open Source Enthusiast", org: "GitHub", icon: "git-branch" },
];

export const education = [
  {
    period: "2024 — 2028",
    title: "B.E. Information Science & Engineering",
    place: "Sai Vidya Institute of Technology, Bangalore",
    detail:
      "Focused on distributed systems, machine learning, and applied AI — building projects that hold up outside the classroom, not just inside it.",
  },
  {
    period: "2015 — 2023",
    title: "Schooling",
    place: "Kendriya Vidyalaya AFS Yelahanka",
    detail:
      "Where the habit of taking things apart to see how they work started — a habit that turned into a career.",
  },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Google Student Ambassador",
    org: "Google",
    description:
      "Representing Google's developer programs on campus — running sessions on AI tooling and cloud fundamentals, and connecting student builders with Google's developer ecosystem.  GID : 12540",
    tags: ["Community", "Public Speaking", "Developer Relations"],
  },
  {
    period: "2025 — Present",
    title: "Vice Chair",
    org: "IEEE Information Theory Society",
    description:
      "Co-leading chapter strategy, technical talks, and member engagement for one of IEEE's research-driven student societies, with a focus on information theory's overlap with modern ML.",
    tags: ["Leadership", "IEEE", "Technical Talks"],
  },
  {
    period: "2024 — Present",
    title: "Freelance AI/ML & Full Stack Developer",
    org: "Independent",
    description:
      "Designing and shipping end-to-end products — from data pipelines and model training to production-ready React/Next.js front ends — for early-stage ideas that need one person who can own the whole stack.",
    tags: ["Next.js", "Python", "Machine Learning"],
  },
  {
    period: "2024 — Present",
    title: "Hackathon Builder",
    org: "Various",
    description:
      "Consistent hackathon participant with a focus on rapid prototyping under real constraints — mesh networking, air-quality ML, and generative AI tooling among the themes tackled.",
    tags: ["Rapid Prototyping", "Team Leadership"],
  },
  {
    period: "2024 — Present",
    title: "Community Organizer",
    org: "Open Source",
    description:
      "Contributing to and organizing around open-source tooling — writing docs, triaging issues, and helping other students make their first contributions.",
    tags: ["Open Source", "Mentorship"],
  },
];

export const skills = {
  Programming: [
    { name: "Python", level: 92 },
    { name: "C++", level: 78 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 86 },
    { name: "SQL", level: 80 },
  ],
  "Web & Systems": [
    { name: "React", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 82 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git", level: 88 },
    { name: "Docker", level: 50 },
  ],
  "AI & Machine Learning": [
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 82 },
    { name: "TensorFlow", level: 78 },
    { name: "PyTorch", level: 76 },
    { name: "Scikit-learn", level: 88 },
    { name: "OpenCV", level: 74 },
    { name: "Pandas / NumPy", level: 90 },
    { name: "Prompt Engineering", level: 88 },
    { name: "LLMs", level: 84 },
    { name: "Gemini API", level: 80 },
    { name: "OpenAI API", level: 82 },
  ],
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: "Live" | "Upcoming";
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
    {
    slug: "smartrag",
    title: "SmartRAG",
    tag: "AI Engineering",
    status: "Live",
    description:
      "An intelligent RAG system that combines semantic caching and cost-aware LLM routing to deliver faster, more efficient AI responses.",
    longDescription:
      "SmartRAG combines document retrieval, semantic caching, and query complexity analysis to intelligently route requests between lightweight and larger LLMs. It uses Qdrant for vector search, Redis for semantic caching, and Ollama for local LLM inference, with real-time analytics for cache hits, latency, routing, and cost metrics.",
    tech: [
      "Python",
      "FastAPI",
      "Ollama",
      "Qdrant",
      "Redis",
      "Sentence Transformers",
      "Streamlit",
      "Docker",
    ],
    features: [
      "Semantic response caching",
      "Cost-aware LLM routing",
      "Query complexity detection",
      "Vector-based document retrieval",
      "Real-time performance analytics",
    ],
    githubUrl:
      "https://github.com/dexterrrrrrrrrrrrrrrrrrrrr/smartrag",
    },
    {
    slug: "agentshield-ai",
    title: "AgentShield-AI",
    tag: "Agentic AI & Cybersecurity",
    status: "Live",
    description:
      "A secure Agentic AI platform combining intelligent agent orchestration, human-in-the-loop approvals, isolated code execution, and real-time monitoring.",
    longDescription:
      "AgentShield-AI is a full-stack Agentic AI platform built using LangGraph, Groq, FastAPI, Next.js, MongoDB, and Docker. It enables AI agents to execute tools through controlled workflows while enforcing explicit human approval for agent-initiated code execution. The platform features an isolated Docker-based sandbox supporting six programming languages, authenticated user sessions, execution monitoring, and audit logging. Its interactive AI Playground and security-focused dashboard provide transparency and control over agent activities.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Groq",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "Tailwind CSS",
      "WebSockets",
    ],
    features: [
      "LangGraph-based AI agent orchestration",
      "Human-in-the-loop execution approvals",
      "Isolated Docker code execution sandbox",
      "Support for Python, C, C++, Java, JavaScript, and TypeScript",
      "Real-time agent monitoring and audit logs",
      "Authenticated AI Playground with tool execution",
      "Execution limits and security controls",
      "Responsive dashboard with AI digital stardust animations",
    ],
    githubUrl:
      "https://github.com/dexterrrrrrrrrrrrrrrrrrrrr/AgentShield-AI",
  },
  {
    slug: "graphmind-graphrag",
    title: "GraphMind GraphRAG",
    tag: "AI Engineering",
    status: "Live",
    description:
      "A knowledge graph-enhanced RAG system combining semantic vector search, graph relationships, and local LLMs for context-aware question answering.",
    longDescription:
      "GraphMind GraphRAG is a locally powered retrieval-augmented generation system that combines Neo4j knowledge graphs with semantic vector retrieval to improve contextual understanding and multi-hop question answering. It extracts entities and relationships from documents, organizes them into a knowledge graph, and retrieves relevant information through graph traversal and vector similarity search. The system uses Ollama with a locally hosted Qwen model for information extraction and response generation, FastAPI for backend services, and Streamlit for an interactive interface.",
    tech: [
      "Python",
      "FastAPI",
      "Neo4j",
      "Ollama",
      "Qwen",
      "GraphRAG",
      "Vector Search",
      "Streamlit",
      "Docker",
    ],
    features: [
      "Knowledge graph construction from documents",
      "Entity and relationship extraction",
      "Hybrid graph and vector retrieval",
      "Multi-hop question answering",
      "Local LLM inference using Ollama",
      "Interactive Streamlit dashboard",
      "Graph-based contextual retrieval",
      "Containerized deployment with Docker",
    ],
    githubUrl:
      "https://github.com/dexterrrrrrrrrrrrrrrrrrrrr/graphmind-graphrag",
  },
  {
    slug: "local-mesh-alert-network",
    title: "Local Mesh Alert Network",
    tag: "Decentralized Systems",
    status: "Live",
    description:
      "An AI-assisted emergency communication platform that keeps hotels, hospitals, campuses, and disaster zones talking to each other even when the internet doesn't work.",
    longDescription:
      "Local Mesh Alert Network creates decentralized local mesh networks for critical environments, ensuring reliable alert broadcasting and coordination during outages, pandemics, or disasters — when centralized infrastructure is exactly what fails first.",
    tech: ["Next.js", "React", "AI", "Mesh Networking", "WebRTC"],
    features: [
      "Offline-first communication",
      "Emergency broadcasting",
      "Peer-to-peer mesh networking",
      "Disaster response coordination",
      "Secure local connectivity",
    ],
    liveUrl: "https://local-mesh-alert-system-tujp-9ah6jand1.vercel.app/",
  },
{
    slug: "ai-retinal-analyzer",
    title: "AI Retinal Analyzer",
    tag: "Computer Vision & Generative AI",
    status: "Live",
    description:
      "An AI-powered web application that analyzes retinal fundus images using computer vision and Gemini AI to predict myopia and generate intelligent medical-style diagnostic reports.",
    longDescription:
      "AI Retinal Analyzer leverages Computer Vision techniques to detect and analyze key retinal structures such as the optic disc, blood vessels, and macula from fundus images. The extracted insights are combined with Gemini AI to produce detailed, easy-to-understand medical-style reports, helping users gain preliminary insights into potential eye conditions like myopia through a modern and intuitive web interface.",
    tech: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Google Gemini",
      "Streamlit",
      "NumPy",
      "Pillow",
    ],
    features: [
      "AI-powered myopia prediction",
      "Automatic retinal feature detection",
      "Optic disc, macula & blood vessel analysis",
      "Gemini-generated medical-style reports",
      "Modern responsive Streamlit interface",
    ],
liveUrl: "https://eye-disease-prediction-ffdexterrrrrrrrrrrrr.streamlit.app/",
  },
  {
    slug: "crop-yield-predictor",
    title: "Crop Yield Predictor",
    tag: "Machine Learning & Databricks",
    status: "Live",
    description:
      "An AI-powered crop yield prediction platform built with Databricks, MLflow, and Streamlit that provides real-time yield forecasts based on agricultural and geographical inputs.",
    longDescription:
      "Crop Yield Predictor is an interactive machine learning application designed to help farmers, researchers, and policymakers estimate crop production using historical agricultural data. Built on Databricks with MLflow for model management, the application uses a trained Random Forest model to predict crop yield from inputs such as State, District, Season, Crop, Area, and Year. It features an intuitive Streamlit interface, robust preprocessing, and a fallback prediction model to ensure uninterrupted functionality even when the primary MLflow model is unavailable.",
    tech: [
      "Python",
      "Databricks",
      "MLflow",
      "Random Forest",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
    ],
    features: [
      "Real-time crop yield prediction",
      "Databricks & MLflow model deployment",
      "Random Forest machine learning model",
      "Interactive Streamlit dashboard",
      "Fallback prediction model for reliability",
      "Historical agricultural data analysis",
    ],
    liveUrl: "https://crop-yield-app-bgvwzbzylwskquhwjgwric.streamlit.app/",
  },
  {
    slug: "bharath-sync",
    title: "Bharath Sync",
    tag: "Applied Machine Learning",
    status: "Live",
    description:
      "A hybrid ML air-quality prediction system covering cities across India, combining multiple algorithms into one model that hits ~99.7% prediction accuracy.",
    longDescription:
      "Bharath Sync blends Random Forest, Gradient Boosting, and LightGBM into a single hybrid model for AQI forecasting, with interactive visualizations and pollution analytics that turn raw sensor data into readable environmental insight.",
    tech: ["Python", "Random Forest", "LightGBM", "Scikit-learn", "Streamlit"],
    features: [
      "~99.7% prediction accuracy",
      "Multi-city AQI forecasting",
      "Interactive pollution analytics",
      "Hybrid ensemble architecture",
    ],
    githubUrl: "https://github.com/dexterrrrrrrrrrrrrrrrrrrrr/Bharath-Sync",
  },
  {
    slug: "ai-interview-assistant",
    title: "AI Interview Assistant",
    tag: "Generative AI",
    status: "Upcoming",
    description:
      "A concept for a mock-interview coach that generates role-specific questions, scores spoken answers, and gives structured, actionable feedback in real time.",
    tech: ["Next.js", "LLMs", "Speech-to-Text", "Gemini API"],
    features: [
      "Role-specific question generation",
      "Real-time answer scoring",
      "Structured feedback reports",
    ],
  },
  {
    slug: "smart-education-platform",
    title: "Smart Education Platform",
    tag: "Generative AI in Edtech",
    status: "Upcoming",
    description:
      "A concept platform that uses generative AI to turn a syllabus into adaptive lesson plans, auto-generated quizzes, and a personal pace for every student.",
    tech: ["Next.js", "OpenAI API", "MongoDB", "Node.js"],
    features: [
      "Adaptive lesson generation",
      "Auto-generated assessments",
      "Personalized learning pace",
    ],
  },
  {
    slug: "cv-attendance-system",
    title: "Computer Vision Attendance System",
    tag: "Computer Vision",
    status: "Upcoming",
    description:
      "A concept face-recognition attendance system built for classrooms and offices — no cards, no manual roll calls, just a camera and a trained model.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
    features: [
      "Real-time face recognition",
      "Automated attendance logging",
      "Anti-spoofing checks",
    ],
  },
];

export const certifications = [
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM", year: "2025" },
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", year: "2025" },
  { name: "API Fundamentals Student Expert", issuer: "Postman", year: "2026" },
  { name: "Gemini Certified University Student", issuer: "Google", year: "2025" },
  { name: "Agents and Workflows", issuer: "OpenAI", year: "2026" },
  { name: "Claude Academy: AI Fluency: Framework & Foundations", issuer: "Anthropic", year: "2026" },
  { name: "Critical Thinking in the AI Era", issuer: "HP Life", year: "2026" },
];

export const hackathons = [
  {
  year: "2026",
  name: "Cypher 4.0 Hackathon",
  result: "Winner | 1st Place 🏆",
  detail: "Secured 1st place among 450+ participants in an 18-hour hackathon organized by the Rotaract Club of Atria Institute of Technology, Bengaluru.",
  },
  {
  year: "2026",
  name: "National Level Hackathon 3.0",
  result: "Runner-Up  2nd Place 🥈",
  detail: "Secured 2nd place at National Level Hackathon 3.0, organized by the Department of Computer Science & Engineering, RR Institute of Technology, Bengaluru, under the theme 'Innovate for Impact: Technology Solutions for Real-World Challenges'.",
 },
  {
    year: "2026",
    name: "Cepheus Hackathon",
    result: "Finalist",
    detail: "Built a real-time disaster-alert prototype under a 24-hour constraint.",
  },
  {
    year: "2025",
    name: "Smart India Hackathon",
    result: "Winner — College Round",
    detail: "Led a 6-person team building an ML-based environmental monitoring tool.",
  },
  {
    year: "2025",
    name: "OSCODE Hackathon",
    result: "Top 5",
    detail: "Prototyped an offline-first communication tool for campus emergencies.",
  },
  {
    year: "2024",
    name: "Google Solution Challenge",
    result: "Participant",
    detail: "Contributed AI features to a sustainability-focused submission.",
  },
];

export const achievements = [
  { label: "Projects Shipped", value: 6 },
  { label: "GitHub Contributions", value: 650 },
  { label: "Hackathons", value: 8 },
  { label: "Certifications", value: 6 },
  { label: "Community Events Led", value: 5 },
];

export const blogPosts = [
  {
    title: "What Information Theory Actually Teaches You About ML",
    category: "AI",
    excerpt:
      "Entropy isn't just a chapter in a textbook — it's the reason certain model architectures work at all. A practical walkthrough.",
    date: "2026-03-12",
  },
  {
    title: "Building a Mesh Network When the Internet Isn't an Option",
    category: "Open Source",
    excerpt:
      "Notes from building Local Mesh Alert Network — what breaks first when you assume connectivity, and how to design around it.",
    date: "2026-01-24",
  },
  {
    title: "Hybrid Models Beat Single Models — Here's the Data",
    category: "ML",
    excerpt:
      "Why combining Random Forest, Gradient Boosting, and LightGBM outperformed every single-algorithm baseline on air-quality data.",
    date: "2025-11-08",
  },
  {
    title: "What Nobody Tells You About Your First Hackathon",
    category: "Career",
    excerpt:
      "The scoreboard matters less than the muscle you build shipping something real in 24 hours. A few honest takeaways.",
    date: "2025-09-02",
  },
];

export const testimonials = [
  {
  name: "Md Zeeshan",
  role: "Google Student Ambassador & IEEE Member",
  quote:
    "Working with Anurag, you quickly realize he's someone who doesn't wait around for things to happen. He takes an idea, gets the team moving, and somehow turns it into a working result.",
  },
  {
    name: "Alisha Pandit",
    role: "IEEE Chapter Member",
    quote:
      "As Vice Chair he doesn't just organize events — he makes sure the technical content is actually worth showing up for.",
  },
  {
    name: "Dr. Priya Arundhati",
    role: "Faculty Mentor",
    quote:
      "One of the few students who treats machine learning as an engineering discipline, not a black box. Rigorous and curious.",
  },
  {
    name: "rohit raj",
    role: "Open Source Collaborator",
    quote:
      "Reviews issues like he's going to maintain the code himself in five years. That kind of care is rare in student contributors.",
  },
  {
    name: "Dhanush M",
    role: "Hackathon Teammate",
    quote:
      "Anurag is the person who turns a 2am panic into a working demo by 6am. Calm under pressure and genuinely good at the craft.",
  }, 
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
