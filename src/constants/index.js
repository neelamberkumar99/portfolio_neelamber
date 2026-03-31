import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Computer Science (Honours)",
    company_name: "uiet punjab university",
    icon: otu,
    iconBg: "#fff",
    date: "2026 - Present(3rd year)",
    points: [
      "current CGPA: 8.1/10",
      "under top 1% (percentage) coding competitions,young turks coding competition winner,",
      " 1000+ problem solving of data structures and algorithms",
      " Software design and development, including REST API, OOP, and software architecture.",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "High School",
    company_name: "woodbine modern school, ON",
    icon: rhhs,
    iconBg: "#fff",
    date: "2019-2022",
    points: [
      "winner of science exhibition (gold medalist)",
      "10th Grade: 86%",
      "12th Grade: 86.4%",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "mobinet",
    icon: ibm,
    iconBg: "#fff",
    date: "July. 2025 - Present",
    points: [
      "Full-Stack development 🤖",
    ],
  },
  //{
    //title: "IT Technician",
    //company_name: "Canada's Wonderland",
    //icon: wonderland,
    //iconBg: "#fff",
    //date: "Jun. 2023 - Jan. 2026",
    //points: [
     // "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
     // "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      //"Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      //"Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
    //"Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
   // ],
 // },
  {
    title: "industrial training - IT Support",
    company_name: "punjab university(uiet)",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "July. 2023 - Aug. 2023",
    points: [
      "Overhauled 400+ Surface tablets to bedside iPads, deploying the in-house 'Get Well Soon' app with Intune to hospital systems.",
      "Developed and refined an admin portal for managing app services, user roles, and subscription expirations.",
      "Utilized Jamf Pro for MDM, securely deploying iPads/iPhones across clinical departments.",
      "Implemented Vocera VOIP on iPhones, enabling real-time communication among nurses and ER staff.",
      "Performed in-room checks, resolved device issues, and collaborated with vendors on bug logs and system updates.",
    ],
  },
 // {
   /* title: "Tech Sales Associate",
    company_name: "Staples Canada (Co-op)",
    icon: staples,
    iconBg: "#1294C8",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
      "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
      "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
      "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
      "Facilitated e-commerce transactions, merging in-store and online channels.",
    ],
  },
  */
];



const extracurricular = [
  {
    title: "mobonet development Certificate",
    type: "summer internship Certificate",
    icon: microsoft,
    iconBg: "#052FAD",
    date: "july 2025",
    points: [
      "Developed mobile apps using modern frameworks, designed user-friendly UI/UX, integrated APIs for dynamic features, fixed bugs and improved app performance, and collaborated with cross-functional teams to deliver high-quality products.",
    ],
    credential: "https://drive.google.com/file/d/1JrV28ge1Ec6GeSDCsfEeOmhqBNtvNCM5/view?usp=sharing",
  },
  {
    title: "AI tools and chatgpt certificate",
    type: "workshop Certificate",
    icon: google,
    iconBg: "#000000",
    date: "oct 2025",
    points: [
      " learned practical use of AI for productivity, explored prompt engineering techniques, used ChatGPT for content generation and problem solving, gained hands-on experience with AI tools, understood real-world applications of AI, improved efficiency using AI-based solution",
    ],
    credential: "https://drive.google.com/file/d/1yB25wpYmGXvVrB1k-UCM6tTkiAYUstCW/view?usp=sharing",
  },
  {
  title: "generated AI certificate",
  type: "simple skills Certificate",
  icon: google,
  iconBg: "#000000",
  date: "june 2025",
  points: [
    " learned basics of AI models and tools, explored prompt engineering techniques, built simple AI-based projects, understood real-world AI applications, worked with AI tools for content generation, gained knowledge of ethical AI usage, improved problem-solving using AI techinique."
  ],
  credential: "https://drive.google.com/file/d/131zpSDcFnJ-At4MtlubSrXvnROEUQFiq/view?usp=sharing",
  },
  {
    title: "Hackathon certificate(iit delhi)",
    type: "Proof of Completion",
    icon: microsoft,
    iconBg: "#000000",
    date: "aug 2025",
    points: ["Participated in hackathon at Indian Institute of Technology Delhi, collaborated in a team to solve real-world problems, developed innovative project under time constraints, applied problem-solving and coding skills, presented solution to judges, gained hands-on experience in rapid development and teamwork"],
    credential: "https://drive.google.com/file/d/1JWCiPzPAGo_Bmn4I6mPdd52JjKmR60Hn/view?usp=sharing",
  },
  {
    title: "india largest coding competition certificate",
    type: "top 1% Certificate",
    icon: github,
    iconBg: "#000000",
    date: "sep 2025",
    points: ["Ranked in top 1% in one of India’s largest coding competitions, demonstrated strong problem-solving and algorithmic skills, solved complex challenges under time constraints, showcased competitive programming expertise, excelled in academic subjects with strong analytical and logical reasoning skills,"],
    credential: "https://drive.google.com/file/d/1bOGQgzaarvVrd6yRk-xYt8gek1ykTS0u/view?usp=sharing",
  },
  {
    title: "gemini for google cloud certificate",
    type: "workshop Certificate",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["gained knowledge of generative AI and cloud-based AI tools, explored practical applications of Gemini, developed skills in prompt engineering and AI-driven solutions"],
    credential: "https://drive.google.com/file/d/1PjvJUw395vxZjrmaZVTQNcv85LTtQkaz/view?usp=sharing",
  },
  /*
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  },
  */
];

const projects = [
//   {
//     name: "ATS Screener 🔍",
//     description:
//       "Free, open-source ATS resume screener that simulates 6 real enterprise platforms (Workday, Taleo, iCIMS, Greenhouse, Lever, SuccessFactors) instead of giving you one made-up score. Each platform uses its own weighted scoring model with verified math for keyword matching, format parsing, and experience evaluation. Features AI-powered scoring via Gemini with a rule-based fallback engine, PDF/DOCX parsing entirely in-browser, and per-platform optimization suggestions that reference specific lines in your resume. 500+ users on launch night.",
//     tags: [
//       {
//         name: "SvelteKit 2",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Gemini/NLP",
//         color: "green-text-gradient",
//       },
//       {
//         name: "ATS-Simulation",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Rule-Engine",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: atsscreenerlanding,
//     source_code_link: "",
//     live_project_link: "",
//   },
    {
    name: "spotify 🎵",
    description:
    "A simple Spotify-inspired music player web application built using HTML, CSS, and JavaScript, featuring a clean and responsive user interface with a dark theme and green accent colors. The layout includes a sidebar with navigation options like Home, Search, and Library, along with a main section displaying playlists, songs, and album covers. The design highlights a functional music player with basic controls such as play, pause, next, previous, volume control, and a progress bar. Songs are displayed in a structured list with titles, artists, and durations, and users can click to play music dynamically. The interface is minimal and user-friendly, with smooth transitions and interactive elements, making it suitable for beginners learning frontend development and creating a basic music streaming experience."
  ,
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "responsive design",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1643208589896-07b8feb4dffa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/neelamberkumar99/spotify_clone.git",
    live_project_link: "https://spotify-clone-ashen-five-11.vercel.app/",
  },
  {
    name: "kc-collection 🌐",
    description:
      "A luxury jewelry brand named KC Collection, showcasing elegant gold and diamond jewelry with a premium and sophisticated aesthetic. The scene features a beautiful model wearing a gold necklace, earrings, and rings, styled in a high-end fashion look with a dark background and soft golden lighting. The composition highlights both lifestyle and product elements, including clean white background product shots for e-commerce display, along with bridal jewelry sets in rich traditional style. The design also includes a modern sale banner with “Flat 50% OFF” in golden typography, enhanced with sparkling diamond effects and cinematic glow. The overall visual style is minimal, ultra-realistic, high detail, and 4K quality, representing luxury, elegance, and premium branding suitable for website, advertisement, and social media content.",
    tags: [
      {
        name: " Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: " Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "  ",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZ28lMjBvZiUyMGUlMjBjb21tZXJjZSUyMHdlYnNpdGUlMjBsaWtlJTIwZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D",
    source_code_link: "",
    live_project_link: "https://kc-collection.vercel.app/",
  },
  {
    name: "fmpg 🔐",
    description:
      "A modern web platform named FMPG that provides detailed information about different PG accommodations, showcasing clean and user-friendly interface design. The layout displays multiple room listings with clear details such as price, number of beds, available facilities, and location. Each listing includes high-quality images of rooms with neat interiors, proper lighting, and organized spaces, along with feature icons for WiFi, food, parking, and security. The design emphasizes simplicity, accessibility, and clarity with a light background, structured cards, and intuitive navigation. The platform also includes filtering options for price range, room type, and amenities, ensuring a smooth user experience. The overall style is minimal, responsive, and professional, suitable for students and working professionals searching for comfortable and affordable PG accommodations.",
    tags: [
      {
        name: " React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "responsive design",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: "https://plus.unsplash.com/premium_photo-1727184019252-0910ed4b29bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzJTIwb2YlMjBwZyhzdHVkZW50JTIwcmVzaWRhbmNlKSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    source_code_link: "",
    live_project_link: " https://fmpg.vercel.app/",
  },
  
  // {
  //   name: "Sunnify (Spotify Downloader) 🎵",
  //   description:
  //     "Sunnify is a Spotify downloader that reverse-engineers embed pages to extract track metadata by parsing protected JSON states without authentication. It features a cross-platform PyQt5 desktop client (macOS, Windows, Linux) with thread-safe UI updates and supports playlists with 1000+ tracks via Spotify's internal spclient API. Includes retry logic with exponential backoff for rate limiting, cross-platform FFmpeg detection, 43 pytest unit tests with GitHub Actions CI/CD, and ships as a Homebrew Cask.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "PyQt5",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "yt-dlp",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Homebrew",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: sunnifyimage,
  //   source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
  //   live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  // },
  
  // {
  //   name: "FinancialFlow 💸",
  //   description:
  //     "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
  //   tags: [
  //     {
  //       name: "React-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: financialflowimage,
  //   source_code_link: "",
  //   live_project_link: "",
  // },
  // {
  //   name: "Enterprise API Tester 🌐",
  //   description:
  //     "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
  //   tags: [
  //     {
  //       name: "Typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Authentication-Body",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: enterpriseapitester,
  //   source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
  //   live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  // },
  // {
  //   name: "KnifeThrow 🎯",
  //   description:
  //     "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "swing",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "maven",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "arcadegame",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: knifethrowimage,
  //   source_code_link: "",
  //   live_project_link: ",
  // },
  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   ,
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Neelamber for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Neelamber's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Neelamber Kumar's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Neelamber's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Neelamber as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Neelamber's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Neelamber's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Neelamber's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
