import type {
    Project,
    Experience,
    Education,
    Achievement,
    Certification,
    Skill,
    ContactInfo,
    PersonalInfo,
    Publication
} from "./types"

export const personalInfo: PersonalInfo = {
    name: "Mehadi Hossain",
    title: "Software Engineer",
    bio: "Backend engineer focused on designing resilient and scalable systems using modern Java ecosystems. Keen interest in automation and backend innovation. Eager to join a collaborative, forward-thinking organization where I can contribute to meaningful technical challenges.",
    location: "Dinajpur, Bangladesh",
    education: "MEngg in ICT, BUET",
    interests: [
        "Distributed Systems",
        "Intelligent Automation",
        "Machine Learning",
        "AI"
    ],
    resumeUrl: "https://drive.google.com/file/d/1zswWSqAgnUli6UkqF-yAcMMkHZAbqVz5/view?usp=sharing",
    profileImage: process.env.NODE_ENV === 'production' ? '/portfolio/profile-ge.png' : '/profile-ge.png',
}

export const aboutSections = [
    "With six years of backend development experience, I focus on creating scalable, secure, and efficient systems using Java, Spring Boot, and microservices. I've successfully delivered projects ranging from financial automation tools and third-party integrations to large-scale platform migrations—always prioritizing performance, security, and clean architecture.",
    "I believe in the power of teamwork and continuous improvement. I’ve collaborated closely with product managers, frontend developers, and QA teams to ensure seamless deployment and high system availability. I also enjoy mentoring others and contributing to a culture of learning and technical excellence.",
    "Beyond coding, I enjoy hiking and discovering new places. To stay current in the fast-evolving tech industry, I continually explore new tools, frameworks, and best practices.",
]

export const experiences: Experience[] = [
    {
        id: "senior-software-engineer-hackno",
        title: "Senior Software Engineer",
        company: "Cosmos Tech Labs | Full Time",
        location: "Remote",
        startDate: "July 2024",
        endDate: "July 2025",
        duration: "13 months",
        description: "At Cosmos Tech Labs, I spearhead backend development initiatives, focusing on building scalable microservices and robust APIs using Java and Spring Boot. My role involves collaborating with cross-functional teams to design and implement features that enhance system performance and reliability. I stay abreast of emerging technologies to ensure our solutions are cutting-edge and efficient.",
        achievements: [
            "Designed and implemented scalable backend features and microservices using Java and Spring Boot, based on product specifications and architectural guidelines.",
            "Integrated third-party services (Stripe, AppSumo, Zapier), enhancing system capabilities and reducing operational overhead.",
            "Built an AI-driven text-to-image module, incorporating ChatGPT and blockchain-backed storage for secure digital asset ownership.",
            "Collaborated closely with Product and Engineering teams to deliver new features and resolve bugs, maintaining a 95% on-time delivery rate for major releases."
        ],
        tools: [
            "Spring Boot", "Docker", "PostgreSQL", "Redis", "OpenAI GPT-4"
        ],
        languages: ["Java"],
    },
    {
        id: "senior-software-engineer-hackno",
        title: "Senior Software Engineer - (Job Support)",
        company: "Hackno Tech | Contract",
        location: "Remote",
        startDate: "June 2023",
        endDate: "February 2024",
        duration: "9 months",
        description:
            "At Hackno Tech, I provided expert backend development support for developers to elevate overall team capabilities.",
        achievements: [
            "Provided backend development for banking applications, utilizing Java, Spring Boot, and REST APIs.",
            "Improved CI/CD pipeline efficiency by automating 40% of regression tests using Behavior-Driven Development (BDD) with Cucumber.",
        ],
        tools: [
            "Spring Boot", "Cucumber", "Docker", "JSF", "Kafka"
        ],
        languages: ["Java"],
    },
    {
        id: "senior-software-engineer-bjit",
        title: "Senior Software Engineer",
        company: "BJIT Limited | Full Time",
        location: "On-site, Dhaka, Bangladesh",
        startDate: "October 2020",
        endDate: "December 2021",
        duration: "1 year 3 months",
        description:
            "As a Senior Software Engineer at BJIT Limited, I led the backend development of automation tools for a major telecom client. My role involved designing and implementing high-performance APIs using Spring Boot and Spock/Groovy, optimizing test execution through multithreading, and mentoring junior developers. I collaborated closely with cross-functional teams to ensure the delivery of robust, scalable solutions that met client requirements and industry standards.",
        achievements: [
            "Led the design and development of backend automation tools, including a high-performance API testing framework using Spock/Groovy.",
            "Optimized framework performance by introducing multithreaded execution, reducing test execution time by 30%",
            "Mentored junior developers on code quality, design patterns, and debugging techniques, actively participating in team code reviews to foster collective growth."
        ],
        tools: [
            "Spring Boot", "Spock", "Postman", "Jenkins", "Docker", "ANTLR"
        ],
        languages: ["Java", "Groovy"],
        recommendationLetterUrl: "https://drive.google.com/file/d/1XUxcz2XuNmGPHEe0eeK-lP3GLbgFxuAD/view?usp=sharing",
    },
    {
        id: "software-engineer-bjit",
        title: "Software Engineer",
        company: "BJIT Limited | Full Time",
        location: "On-site, Dhaka, Bangladesh",
        startDate: "January 2018",
        endDate: "September 2020",
        duration: "2 years 9 months",
        description:
            "At BJIT Limited, I contributed to backend development projects for clients in the event management and ecommerce sectors. I specialized in building robust APIs, microservices, and data processing pipelines using Java, Spring Boot, and related technologies. I collaborated closely with cross-functional teams to deliver scalable solutions that met client requirements and industry standards.",
        achievements: [
            "Played a key role in the migration from a monolithic application to a containerized microservices architecture.",
            "Gained experience in data migration and management using Talend Data Management.",
            "Built complementary UI features using ReactJS to support backend workflows.",
        ],
        tools: [ "Spring Boot", "Talend Data Management", "ReactJS", "JBPM", "MySQL", "Redis"],
        languages: ["Java", "JavaScript"],
    },
]

export const educations: Education[] = [
    {
        id: "ucp-bs",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka, Bangladesh",
        degree: "MEngg in Information and Communication Technology (ICT)",
        startDate: "April 2018",
        endDate: "December 2023",
        duration: "4 years",
        gpa: "3.0/4.0",
        coursework: [
            "Distributed Systems",
            "Advanced Artificial Intelligence",
            "Advanced Networking"
        ],
    },
    {
        id: "pgc-ics",
        institution: "Hajee Mohammad Danesh Science & Technology University (HSTU)",
        location: "Dinajpur, Bangladesh",
        degree: "BSc in Electronics and Communication Engineering (ECE)",
        startDate: "January 2012",
        endDate: "February 2017",
        duration: "4 years",
        gpa: "3.33/4.0",
        subjects: ["Data Structures & Algorithms", "Object Oriented Programming", "Discrete Mathematics", "Database Management System", "Computer Networks"],
    },
]

export const projects: Project[] = [
    {
        id: "free-flow-learning",
        title: "Final Year Project - Free Flow Learning",
        description:
            "Built an immersive Oculus Meta Quest VR app using Unity 3D based on C# programming language. Leveraged XR Libraries to simulate accurate in app interaction and collision physics. Connected MySQL database for score keeping properties.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/unity-logo.png' : '/unity-logo.png',
        technologies: [
            "Meta Quest 2",
            "C#",
            "MySQL",
            "XR",
            "Unity3D",
            "Oculus",
            "Rendering/Vizualization",
        ],
        githubUrl: "https://github.com/teebs339/FYP-Free-Flow-Learning",
    },
    {
        id: "wedding-planner-pdf",
        title: "Event Planner PDF Generator",
        description:
            "n8n workflow integrating APIs of Google Sheets, Slides, and Gmail to generate and deliver event planner PDFs. Uses GPT-5 Model for data structuring JSON and JavaScript nodes for formatting the JSON within n8n before automated export and email delivery.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/wedding-planner-n8n-new-new.png' : '/wedding-planner-n8n-new-new.png',
        technologies: [
            "n8n",
            "Google Sheets API",
            "Google Slides API",
            "Google Drive API",
            "Gmail API",
            "Wix Automations",
            "OpenAI API (GPT-5)",
            "JavaScript",
            "Node.js",
            "Webhooks",
            "JSON",
            "Google Workspace (GCC)",
        ],
        githubUrl: "https://github.com/teebs339/n8n-Wedding-Planner-PDF-generator",
    },
    {
        id: "video-transcribe-rpa",
        title: "Video Transcribe RPA",
        description:
            "Built an automated RPA pipeline using Python and UiPath/VB.NET to fetch videos from Google Sheets and MagicBrief, extract frames and audio, generate transcripts via Whisper API, and upload outputs to Miro, optimized for scalable, low-intervention VM deployment.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/video-transcribe-rpa.png' : '/video-transcribe-rpa.png',
        technologies: [
            "UiPath",
            "RPA",
            "Python",
            "VB.NET",
            "OpenAI Whisper",
            "Miro",
            "pandas",
            "moviepy",
            "Virtual Machine (VM)",
        ],
        githubUrl: "https://github.com/teebs339/Video-Transcribe-RPA",
    },
    {
        id: "fmcsa-extractor",
        title: "FMCSA Backend Data Extractor RPA",
        description:
            "Developed an RPA bot to automatically scrape and process FMCSA backend data, parse it into structured Excel reports using RegEx, and format outputs with VBA. Built a dynamic workflow driven by MX/US DOT numbers while ensuring compliance with public FMCSA datasets.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/FMCSA.png' : '/FMCSA.png',
        technologies: ["RPA", "UiPath", "Excel VBA", "RegEx"],
        githubUrl: "https://github.com/teebs339/FMCSA-Backend-Data-Extractor",
    },
]

// export const achievements: Achievement[] = [
//     {
//         id: "rpa-team-lead",
//         title: "RPA Team Lead",
//         organization: "Sybros Tech, Lahore",
//         description:
//             "Led the RPA team to deliver enterprise automations across SAP platforms, optimizing workflows and boosting efficiency. Mentored developers and earned a formal recommendation letter from the CEO recognizing leadership, technical excellence, professionalism, problem-solving, teamwork, and reliability.",
//         links: [
//             {
//                 url: "https://www.linkedin.com/in/ateeb-shahid/",
//                 text: "LinkedIn Profile",
//             },
//             {
//                 url: "https://drive.google.com/file/d/1WNQjBqon14Xk6qgpfdOJw9HBeVa9nRSm/view?usp=sharing",
//                 text: "View Recommendation Letter",
//             },
//         ],
//     },
//     {
//         id: "top-rated-freelancer",
//         title: "RPA Experience in the UAE",
//         organization: "UAE",
//         description:
//             "Led AI-driven automation projects at across the UAE using RPA, n8n, Python, Node.js, machine learning models, Docker, and CRM integrations. Delivered enterprise-grade solutions that optimized workflows, reduced manual effort, and improved operational efficiency for clients in multiple sectors.",
//     },
//     {
//         id: "rpa-workshop",
//         title: "Conducted RPA Workshop at University of Management & Technology (UMT)",
//         organization: "Representing SybrosTech as a TL",
//         description:
//             "UMT's Department of AI hosted an RPA workshop in collaboration with Sybros Tech. On May 3, 2024, an MoU was signed to offer student internships. Workshop led by CEO Maaz Tariq & TL Ateeb Shahid, Sybros Tech is a pioneering RPA company in Pakistan, aiming to drive impactful collaboration in automation.",
//         links: [
//             {
//                 url: "https://www.facebook.com/SSTUMTofficial/posts/pfbid0BqiUZLoGXsBh3EtbrmE4YTKzH5f7M5DoBKeYtMBCmkqMva9qpiNZzTWVAPyFPsdBl?rdid=zdE5DEPz1xLNUwBv#",
//                 text: "View Post 1",
//             },
//             {
//                 url: "https://www.facebook.com/SSTUMTofficial/posts/pfbid02P9CE7mTX1qCsrVoS8SPE6m2jm5B3teDnxhniXdepmyBv3scfnrKQMDfC5BbY8gpJl",
//                 text: "View Post 2",
//             },
//         ],
//     },
// ]


export const publications: Publication[] = [
    {
        id: "auto-writing-eval-2023",
        title: "Automated Writing Evaluation Using Sentence by Sentence Scoring Model",
        summary: "Automated writing evaluation is the use of computer programs to assess written work and offer feedback to the writer. This process is commonly used in educational settings to grade essays and give students a better understanding of their writing abilities. Existing works score specific dimensions of an essay, grammar, word choice, coherence, and others to provide targeted feedback. Also, most systems focus on evaluating the essay as a whole rather than individual sentences. Sentence-level evaluation can provide more detailed and specific feedback to the writers, which may help to improve their writing skills over time. In this work, we propose a mechanism for evaluating student essays at the sentence level. A publicly available essay dataset was collected and then evaluated manually by experts to prepare a dataset with sentence-level scores. Two models were developed: the first model is based on pre-trained models (BigBird, Longformer, and DeBERTa), and the second model is a neural network architecture based on multi-head-attention mechanisms. Models calculate the holistic score for each sentence. The final score for each essay is obtained by summing up the marks for each sentence. Experimental results show that the proposed model can score essays with high accuracy and low average error.",
        date: "Jan 2025",
        publisher: "IEEE",
        links: [
            {
                url: "https://ieeexplore.ieee.org/document/10212752",
                text: "View Paper on IEEE Xplore",
            },
            {
                url: "https://ncim2023.cse.duet.ac.bd/",
                text: "NICM 2023 (Conference ID: 59001)",
            },
        ],
    }
]

// export const certifications: Certification[] = [
//     {
//         id: "tensorflow-ml",
//         title: "Machine Learning with TensorFlow on Google cloud",
//         issuer: "Udemy",
//         date: "Nov 2024",
//         url: "http://ude.my/UC-95616298-c95a-4c29-80e4-cff99ad8a6c3",
//     },
// ]

export const technicalSkills: Skill[] = [
    {
        category: "Programming Languages",
        items: ["Java", "Groovy", "JavaScript", "SQL"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "Redis"],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate",
            "Spock Framework",
            "ReactJS"
        ],
    },
    {
        category: "Tools & Technologies",
        items: [
            "Jira",
            "Docker",
            "Kubernetes",
            "Git & GitHub",
            "Jenkins",
            "OpenAI GPT-4",
            "CI/CD",
            "Postman",
        ],
    },
    
]

export const softSkills = [
    {
        title: "Communication",
        description:
            "Excellent written and verbal communication skills. Experienced in presenting technical concepts to both technical and non-technical audiences. Skilled in documentation and technical writing.",
    },
    {
        title: "Problem Solving",
        description:
            "Strong analytical thinking and creative problem-solving abilities. Capable of breaking down complex problems into manageable components and developing effective solutions.",
    },
    {
        title: "Teamwork",
        description:
            "Collaborative team player with experience working in diverse groups. Sharp leadership & decision making capabilities. Comfortable giving and receiving feedback, and adapting to different team dynamics and work styles.",
    },
    {
        title: "Leadership Qualities",
        description:
            "Excellent at prioritizing tasks and relegating to the team. Adept at meeting deadlines and managing multiple projects simultaneously. Experienced with agile methodologies and project management tools.",
    },
]

export const contactInfo: ContactInfo = {
    email: "mehadi.hstu@gmail.com",
    location: "Dinajpur, Bangladesh",
    phone: "+8801745249030",
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/mehadi-hossain/",
        github: "https://github.com/mehadi13",
        whatsapp: "https://wa.me/+8801745249030",
    },
}

