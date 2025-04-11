import "../styles/globals.css";
import { Link } from "gatsby";
import { Button } from "../components//ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components//ui/card";
import { ExternalLink } from "lucide-react";
import { ScrollArea } from "../components//ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../components//ui/avatar";
import { Globe, Mail, Github, Linkedin, GraduationCap, Briefcase, Code, Lightbulb, BookOpen } from "lucide-react";
import React from "react";

const resumeOcrData = {
    name: "Marhaf Chamie",
    title: "Senior AI & Software Engineer",
    hook: "I helped many startups to grow fast, one of the startups sold for 34 Millions",
    summary:
        "Senior Software Engineer with 10 years of hands-on experience delivering full-stack, mobile, and backend systems across fintech, e-commerce, mobility, and SaaS. Specialized in React, React Native, TypeScript, Node.js, and cloud platforms (AWS, GCP, Azure). Proven leadership in building apps from zero to launch, leading engineering teams, and integrating advanced APIs such as ChatGPT APIs, Gemini APIs, Grok APIs, and Bluetooth SDKs. Strong remote track record (8 years) and a history of innovation—transforming underperforming systems into scalable, high-performance platforms.",
    experience: [
        {
            company: "INMOGR, Dubai, UAE",
            role: "Senior AI Engineer",
            years: "May 2024 – PRESENT",
            responsibilities: [
                "Built automated pipeline to use AI to generate video script and generate video everyday",
                "Engineered NodeJS System that analyze the video and generate SEO optizied metadata using AI everyday",
                "Automated the process of uploading the generated video into YouTube on specific time using Google APIs everyday",
                "Architected a mini Selenium project that detects liveliness of the channel - Google shuts channel thinking it is fake or altered",
                "All systems hosted on Raspberry-Pi 5",
            ],
        },
        {
            company: "EnvoyThere, Los Angeles, United States",
            role: "Senior Full Stack Engineer on BlinkMobility",
            years: "Sep 2022 – May 2024",
            responsibilities: [
                "Re-architected and rebuilt entire rental platform for scale and reliability",
                "Migrated mobile app from Expo to React Native, and from JavaScript to TypeScript",
                "Built and deployed a custom Bluetooth SDK to enable vehicle control offline and online",
                "Developed compliant KYC onboarding using ClearMe and Checkr APIs",
                "Deployed production systems using AWS, Firebase, and PostgreSQL",
            ],
        },
        {
            company: "Noumena, Miami, USA",
            role: "Senior Full Stack Engineer on Noumenati",
            years: "Dec 2020 – Aug 2022",
            responsibilities: [
                "Engineered multi-step KYC loan workflow with full identity and income verification",
                "Designed and shipped mobile video streaming capabilities for iOS and Android",
                "Created modular social pages with drag-and-drop layout builder",
                "Increased user engagement by 30% through custom UX flows and performance improvements",
            ],
        },
        {
            company: "Aleph-Labs, Kuala Lumpur, Malaysia",
            role: "Senior Frontend Engineer",
            years: "May 2019 – Dec 2020",
            responsibilities: [
                "Developed mobile and web banking apps with real-time financial operations",
                "Implemented full digital KYC onboarding for new bank customers",
                "Built secure admin portals with role-based access and compliance controls",
                "Led team of 5 engineers across front-end, back-end, and QA",
                "Mentored junior developers and improved codebase quality and delivery speed",
            ],
        },
        {
            company: "Episub, Sydney, Australia",
            role: "Full Stack Engineer",
            years: "Sep 2018 – May 2019",
            responsibilities: [
                "Built responsive web apps with React and Node.js across platforms",
                "Delivered intuitive front-end UIs and robust backend APIs",
                "Collaborated in Agile teams using Scrum and Jira",
            ],
        },
        {
            company: "Avtian, Houston, Texas, USA",
            role: "Frontend Engineer",
            years: "May 2018 – Sep 2018",
            responsibilities: ["Developed cross-browser UI using React", "Contributed to front-end architecture and usability flows"],
        },
        {
            company: "Freelancer, Kuala Lumpur, Malaysia",
            role: "Full Stack Engineer",
            years: "Dec 2015 – Jun 2017",
            responsibilities: [
                "Delivered Java-based web application for condominium management",
                "Collected client feedback and managed full project lifecycle",
                "Built, deployed, and maintained systems end-to-end",
            ],
        },
    ],
    externalLinks: {
        linkedin: "https://www.linkedin.com/in/inmogr",
        github: "https://github.com/inmogr",
        selfIntroduction: "https://drive.google.com/file/d/1VWf9650iOwe2kug9WfWUYVHNkprSPN5b/view?usp=sharing",
    },
    jobDescriptions: `
  Senior AI Engineer
  Responsibilities:
  - Built automated pipeline to use AI to generate video script and generate video everyday
  - Engineered NodeJS System that analyze the video and generate SEO optizied metadata using AI everyday
  - Automated the process of uploading the generated video into YouTube on specific time using Google APIs everyday
  - Architected a mini Selenium project that detects liveliness of the channel - Google shuts channel thinking it is fake or altered
  
  Senior Full Stack Engineer
  Responsibilities:
  - Re-architected and rebuilt entire rental platform for scale and reliability
  - Migrated mobile app from Expo to React Native, and from JavaScript to TypeScript
  - Built and deployed a custom Bluetooth SDK to enable vehicle control offline and online
  - Developed compliant KYC onboarding using ClearMe and Checkr APIs
  - Deployed production systems using AWS, Firebase, and PostgreSQL

  Senior Full Stack Engineer
  Responsibilities:
  - Engineered multi-step KYC loan workflow with full identity and income verification
  - Designed and shipped mobile video streaming capabilities for iOS and Android
  - Created modular social pages with drag-and-drop layout builder
  - Increased user engagement by 30% through custom UX flows and performance improvements

  Senior Frontend Engineer
  Responsibilities:
  - Developed mobile and web banking apps with real-time financial operations
  - Implemented full digital KYC onboarding for new bank customers
  - Built secure admin portals with role-based access and compliance controls
  - Led team of 5 engineers across front-end, back-end, and QA
  - Mentored junior developers and improved codebase quality and delivery speed
  
  Full Stack Engineer
  Responsibilities:
  - Built responsive web apps with React and Node.js across platforms
  - Delivered intuitive front-end UIs and robust backend APIs
  - Collaborated in Agile teams using Scrum and Jira
  
  Frontend Engineer
  Responsibilities:
  - Developed cross-browser UI using React
  - Contributed to front-end architecture and usability flows
  
  Full Stack Engineer
  Responsibilities:
  - Delivered Java-based web application for condominium management
  - Collected client feedback and managed full project lifecycle
  - Built, deployed, and maintained systems end-to-end
  `,
    skills: [
        "React",
        "React Native",
        "Angular",
        "Node.js",
        "ExpressJS",
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "MongoDB",
        "AWS",
        "GCP",
        "Azure",
        "ChatGPT",
        "Gemini API",
        "Stripe",
        "Plaid",
        "Checkr",
        "ClearMe",
        "Google Maps",
        "Sentry",
        "GitHub",
        "GitLab",
        "Jenkins",
        "CI/CD",
        "Docker",
        "OAuth",
        "Jira",
        "Miro",
        "Figma",
        "Team Leadership",
        "System Architecture",
        "Cross-Functional Collaboration",
        "Agile Delivery",
    ],
    contact: {
        email: "hireme2025apr@inmogr.aleeas.com",
        emailLink: "mailto:hireme2025apr@inmogr.aleeas.com",
        location: "Dubai, UAE",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/inmogr",
        github: "https://github.com/inmogr",
        selfIntroduction: "https://drive.google.com/file/d/1VWf9650iOwe2kug9WfWUYVHNkprSPN5b/view?usp=sharing",
    },
};

const techIcons = [
    {
        name: "React Native",
        src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
    {
        name: "React",
        src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
        name: "ExpressJS",
        src: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    },
    {
        name: "TypeScript",
        src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
        name: "JavaScript",
        src: "https://cdn.worldvectorlogo.com/logos/javascript-2.svg",
    },
    {
        name: "ChatGPT API",
        src: "https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg",
    },
    {
        name: "Grok API",
        src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png",
    },
    {
        name: "Gemini API",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/688px-Google_Gemini_logo.svg.png",
    },
    {
        name: "Ollama",
        src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/ollama.png",
    },
    {
        name: "HuggingFace",
        src: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    },
    {
        name: "Slack Bot",
        src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    },
    {
        name: "Telegram Bot",
        src: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg",
    },
    {
        name: "Shell Script Writing",
        src: "https://cdn.worldvectorlogo.com/logos/bash-2.svg",
    },
    {
        name: "GitHub Actions",
        src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
    {
        name: "Jenkins",
        src: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg",
    },
    {
        name: "Google Cloud",
        src: "https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg",
    },
    {
        name: "AWS",
        src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    },
    {
        name: "Azure",
        src: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
    },
    {
        name: "Firebase",
        src: "https://cdn.worldvectorlogo.com/logos/firebase-2.svg",
    },
    {
        name: "Jira",
        src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    },
    {
        name: "Scrum",
        src: "https://cdn.worldvectorlogo.com/logos/scrum-1.svg",
    },
    {
        name: "Agile",
        src: "https://cdn.worldvectorlogo.com/logos/agile-software.svg",
    },
    {
        name: "NPM",
        src: "https://icon.icepanel.io/Technology/svg/NPM.svg",
    },
    {
        name: "Redux",
        src: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    },
    {
        name: "Vite",
        src: "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
    },
    {
        name: "Nginx",
        src: "https://icon.icepanel.io/Technology/svg/NGINX.svg",
    },
    {
        name: "Docker",
        src: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    },
    {
        name: "Android",
        src: "https://icon.icepanel.io/Technology/png-shadow-512/Android-Studio.png",
    },
    {
        name: "Cloudflare",
        src: "https://icon.icepanel.io/Technology/svg/Cloudflare.svg",
    },
    {
        name: "EsLint",
        src: "https://icon.icepanel.io/Technology/svg/ESLint.svg",
    },
    {
        name: "Chrome Extension",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHWmJqswjeSOHOsd8u_zIK6Fe8_rBiJDqsQ&s",
    },
    {
        name: "Chrome Extension",
        src: "https://icon.icepanel.io/Technology/svg/Chrome.svg",
    },
    {
        name: "GitLab",
        src: "https://icon.icepanel.io/Technology/svg/GitLab.svg",
    },
    {
        name: "GraphQL",
        src: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
    },
    {
        name: "Markdown",
        src: "https://icon.icepanel.io/Technology/png-shadow-512/Markdown.png",
    },
    {
        name: "Linux",
        src: "https://icon.icepanel.io/Technology/png-shadow-512/Linux.png",
    },
    {
        name: "MaterialUI",
        src: "https://icon.icepanel.io/Technology/svg/Material-UI.svg",
    },
    {
        name: "Postman",
        src: "https://icon.icepanel.io/Technology/svg/Postman.svg",
    },
    {
        name: "BitBucket",
        src: "https://icon.icepanel.io/Technology/svg/BitBucket.svg",
    },
];

export default function Home() {
    return (
        <div className="bg-background min-h-screen font-sans antialiased">
            {/* Hero Section */}
            <section id="hero" className="relative py-24 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <Avatar className="w-32 h-32 rounded-full mx-auto mb-4">
                        <AvatarImage
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHS5o_f3bKJGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727598026201?e=1749686400&v=beta&t=hY9c0giw50KoK4_FzfKVo4pttpS_e1h6B2RcMHWbnA4"
                            alt={resumeOcrData.name}
                        />
                        <AvatarFallback>{resumeOcrData.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <h1 className="text-4xl font-bold">{resumeOcrData.name}</h1>
                    <p className="text-lg mt-2">{resumeOcrData.title}</p>
                    <p className="text-md mt-2">{resumeOcrData.hook}</p>
                    <div className="mt-8">
                        <Button variant="outline" asChild>
                            <Link to={resumeOcrData.externalLinks.selfIntroduction} className="mr-4">
                                Self Introduction
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link to={resumeOcrData.contact.emailLink} className="mr-4">
                                Convert idea into reality
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <nav className="bg-secondary text-secondary-foreground py-4 sticky top-0 z-10">
                <div className="container mx-auto px-4">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a href="#about" className="hover:text-primary transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-primary transition-colors">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-primary transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-primary transition-colors">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#technologies" className="hover:text-primary transition-colors">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-primary transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* About Me Section */}
            <section id="about" className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                        <p>{resumeOcrData.summary}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Details</h3>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                                Location: {resumeOcrData.contact.location}
                            </li>
                            <li className="mb-2 flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                Email:
                                <a href={resumeOcrData.contact.emailLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                    {resumeOcrData.contact.email}
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <Linkedin className="mr-2 h-4 w-4 text-muted-foreground" />
                                <a href={resumeOcrData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <Github className="mr-2 h-4 w-4 text-muted-foreground" />
                                <a href={resumeOcrData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
                    <ScrollArea className="h-[400px]">
                        <div className="grid gap-6">
                            {resumeOcrData.experience.map((exp, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <Briefcase className="mr-2 h-5 w-5" />
                                            {exp.company}
                                        </CardTitle>
                                        <CardDescription>
                                            {exp.role} ({exp.years})
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i}>{resp}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Awaneek.com</CardTitle>
                                <CardDescription>E-commerce platform using AI to verify product legality</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Tech: React, React Native, Node.js, TypeScript, AI</p>
                                <Button asChild variant="outline">
                                    <a href="https://www.linkedin.com/company/awaneek/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Ammerny.com</CardTitle>
                                <CardDescription>Mobile app for tracking service requests from initiation to delivery</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Tech: React Native, Firebase</p>
                                <Button asChild variant="outline">
                                    <a href="https://www.linkedin.com/company/ammerny/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Qaf.com</CardTitle>
                                <CardDescription>Enterprise system digitizing paper-based operations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Tech: Angular, React, Express.js</p>
                                <Button asChild variant="outline">
                                    <a href="https://qaf.itqanalquran.org/" target="_blank" rel="noopener noreferrer">
                                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["React", "React Native", "Angular"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Backend</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["Node.js", "ExpressJS"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Languages</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["JavaScript", "TypeScript"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Databases</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["PostgreSQL", "MySQL", "Firebase", "MongoDB"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            {/* Replace with database icon */}
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Cloud</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["AWS", "GCP", "Azure"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            {/* Replace with cloud icon */}
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Tools &amp; DevOps</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) => ["GitHub", "GitLab", "Jenkins", "CI/CD", "Docker", "OAuth", "Jira", "Miro", "Figma"].includes(skill))
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            {/* Replace with tool icon */}
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">APIs &amp; Integrations</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) =>
                                        ["ChatGPT", "Gemini API", "Stripe", "Plaid", "Checkr", "ClearMe", "Google Maps", "Sentry"].includes(skill),
                                    )
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            {/* Replace with api icon */}
                                            <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Leadership &amp; Soft Skills</h3>
                            <ul className="list-none pl-0">
                                {resumeOcrData.skills
                                    .filter((skill) =>
                                        ["Team Leadership", "System Architecture", "Cross-Functional Collaboration", "Agile Delivery"].includes(skill),
                                    )
                                    .map((skill, index) => (
                                        <li key={index} className="mb-1 flex items-center">
                                            {/* Replace with leadership icon */}
                                            <Lightbulb className="mr-2 h-4 w-4 text-muted-foreground" />
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Icons Section */}
            <section id="technologies" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-16">
                        {techIcons.map((icon, index) => (
                            <div key={index} className="w-20 h-20 relative flex flex-row items-center justify-center">
                                <img
                                    src={icon.src}
                                    alt={icon.name}
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 10vw, 5vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <GraduationCap className="mr-2 h-5 w-5" />
                                Bachelor of Science in Computer Science
                            </CardTitle>
                            <CardDescription>UIAM University</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>B.S Computer Science with GCP 3.72 / 4</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p>Feel free to reach out!</p>
                            <ul className="mt-4">
                                <li className="mb-2 flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                    <a href={resumeOcrData.contact.emailLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                        {resumeOcrData.contact.email}
                                    </a>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                                    {resumeOcrData.contact.location}
                                </li>
                                <li className="mb-2 flex items-center">
                                    <Linkedin className="mr-2 h-4 w-4 text-muted-foreground" />
                                    <a href={resumeOcrData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <Github className="mr-2 h-4 w-4 text-muted-foreground" />
                                    <a href={resumeOcrData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Optional Contact Form */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-muted-foreground border-t">
                <div className="container mx-auto px-4">
                    <p>
                        © {new Date().getFullYear()} {resumeOcrData.name}. All rights reserved.
                    </p>
                    <p>
                        <a href="#hero" className="hover:text-primary transition-colors">
                            Back to Top
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
