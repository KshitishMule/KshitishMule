export const PERSONAL = {
  name: 'Kshitish Mule',
  role: 'AI & Robotics Developer',
  tagline: 'I build intelligent systems where Python, AI, and robotics come together to create machines that can think, learn, and interact with the real world.',
  bio: "I build intelligent systems where Python, AI, and robotics come together to create machines that can think, learn, and interact with the real world. From smart automation tools to AI-powered robots, I focus on turning ideas into systems that don't just run code—but behave intelligently.",
  email: 'kshitishmule1@gmail.com',
  github: 'https://github.com/KshitishMule',
  linkedin: 'https://linkedin.com/in/kshitish-mule-coder15',
  resume: '/Kshitish_Mule_Resume.pdf',
  location: 'Pune, India',
  available: true,
};

export const SKILLS = [
  {
    category: 'Programming & Development',
    items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'NLTK', 'Data Analysis', 'Model Training'],
  },
  {
    category: 'Robotics & Automation',
    items: ['Robotics Systems', 'Sensor Integration', 'Computer Vision', 'Automation Tools', 'Embedded Systems', 'Raspberry Pi'],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'AWS re/Start Program',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    description: 'Completed a comprehensive cloud training program covering AWS services, Linux, networking, security, and hands-on labs.',
    skills: ['AWS', 'Cloud Computing', 'Linux', 'Networking', 'Security'],
  },
  {
    id: 2,
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: '2024',
    description: 'Gained hands-on experience in data analysis, visualization, and working with libraries like Pandas and NumPy.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    issuer: 'Google',
    date: '2024',
    description: 'Learned core ML concepts including supervised learning, model evaluation, and data preprocessing.',
    skills: ['Machine Learning', 'Model Evaluation', 'Data Preprocessing'],
  },
  {
    id: 4,
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    description: 'Built full-stack web applications using HTML, CSS, JavaScript, and React.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: 'Advanced Security Mechanisms for AIDL Communication in High-Risk Environments',
    venue: 'STM Journals',
    date: '2025',
    link: 'https://journals.stmjournals.com/article/article=2025/view=234761/',
    description: 'AIDL enables communication between Android app components but introduces security risks in high-risk environments like healthcare, finance, and military systems. This work proposes a layered security framework combining native Android protections, identity verification, and cryptographic techniques to ensure secure, reliable inter-process communication.',
    tags: ['Android', 'AIDL', 'Security', 'IPC', 'Cryptography'],
  },
  {
    id: 2,
    title: 'Advancements in Machine Learning: A Comprehensive Review of Algorithms, Applications, and Future Directions',
    venue: 'STM Journals',
    date: '2025',
    link: 'https://journals.stmjournals.com/rtpl/article=2025/view=217719/',
    description: 'This study proposes a machine learning-based framework for selecting optimal design strategies using predictive and generative models. It ensures high-performing outputs and is validated on protein and RNA design tasks while highlighting key advancements in AI.',
    tags: ['Machine Learning', 'AI', 'Generative Models', 'Deep Learning'],
  },
  {
    id: 3,
    title: 'NURO: An AI-Powered Voice and Vision Controlled Robotic System Using Raspberry Pi',
    venue: 'Accepted — Awaiting Publication',
    date: '2025',
    link: null,
    description: 'NURO is an AI-powered robotic system built using Raspberry Pi that integrates voice recognition and computer vision to enable intelligent interaction with its environment. The system can understand voice commands, process visual inputs, and perform tasks autonomously, showcasing real-time decision-making and human-machine interaction.',
    tags: ['Robotics', 'Raspberry Pi', 'Computer Vision', 'Voice Recognition', 'AI'],
  },
];

export const PROJECTS = [
  {
    id: 'live-currency-converter',
    title: 'Live Currency Converter',
    shortDesc: 'A real-time currency conversion web app that fetches live exchange rates using APIs.',
    fullDesc: 'A real-time currency conversion web app that fetches live exchange rates using APIs. Built with a clean UI to provide fast, accurate conversions across multiple currencies.',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    github: 'https://github.com/KshitishMule/Live-Currency-Converter',
    live: null,
    featured: true,
    highlights: ['Live exchange rates via API', 'Multi-currency support', 'Clean responsive UI', 'Fast & accurate conversions'],
  },
  {
    id: 'chatgpt-clone',
    title: 'ChatGPT Clone',
    shortDesc: 'An AI-powered chatbot that generates human-like responses using NLP and language models.',
    fullDesc: 'An AI-powered chatbot application that generates human-like responses using NLP and language models. Features real-time interaction, conversational memory, and a modern chat interface.',
    tags: ['Python', 'NLP', 'React', 'Node.js', 'AI'],
    category: 'ai & ml',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    github: 'https://github.com/KshitishMule/ChatGptClone',
    live: null,
    featured: true,
    highlights: ['Human-like AI responses', 'Conversational memory', 'Real-time interaction', 'Modern chat interface'],
  },
  {
    id: 'bmo-faces',
    title: 'BMO Faces — Face Recognition',
    shortDesc: 'A computer vision project that detects and recognizes faces using AI models in real time.',
    fullDesc: 'A computer vision project that detects and recognizes faces using AI models. Built for real-time face detection and identification, with applications in security and smart systems.',
    tags: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV', 'AI'],
    category: 'computer vision',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    github: 'https://github.com/KshitishMule/BMO-faces',
    live: null,
    featured: true,
    highlights: ['Real-time face detection', 'AI-powered recognition', 'Security applications', 'Smart system integration'],
  },
];

export const CATEGORIES = ['all', 'ai & ml', 'computer vision', 'web'];