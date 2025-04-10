'use client';

import {personalizedGreeting} from '@/ai/flows/personalized-greeting';
import {suggestSkills} from '@/ai/flows/suggest-skills';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ExternalLink} from 'lucide-react';
import {useEffect, useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Globe, Mail, Phone, Github, Linkedin, GraduationCap, Briefcase, Code, Lightbulb, BookOpen} from 'lucide-react';
import {cn} from "@/lib/utils";
import Link from "next/link";

const resumeOcrData = {
  name: 'Marhaf Chamie',
  title: 'Senior AI & Software Engineer',
  summary:
    'Senior Software Engineer with 10 years of hands-on experience delivering full-stack, mobile, and backend systems across fintech, e-commerce, mobility, and SaaS. Specialized in React, React Native, TypeScript, Node.js, and cloud platforms (AWS, GCP, Azure). Proven leadership in building apps from zero to launch, leading engineering teams, and integrating advanced APIs such as ChatGPT APIs, Gemini APIs, Grok APIs, and Bluetooth SDKs. Strong remote track record (8 years) and a history of innovation—transforming underperforming systems into scalable, high-performance platforms.',
  experience: [
    {
      company: 'INMOGR, Dubai, UAE',
      role: 'Senior AI Engineer',
      years: 'May 2024 – PRESENT',
      responsibilities: [
        'Built automated pipeline to use AI to generate video script and generate video everyday',
        'Engineered NodeJS System that analyze the video and generate SEO optizied metadata using AI everyday',
        'Automated the process of uploading the generated video into YouTube on specific time using Google APIs everyday',
        'Architected a mini Selenium project that detects liveliness of the channel - Google shuts channel thinking it is fake or altered',
        'All systems hosted on Raspberry-Pi 5',
      ],
    },
    {
      company: 'EnvoyThere, Los Angeles, United States',
      role: 'Senior Full Stack Engineer on BlinkMobility',
      years: 'Sep 2022 – May 2024',
      responsibilities: [
        'Re-architected and rebuilt entire rental platform for scale and reliability',
        'Migrated mobile app from Expo to React Native, and from JavaScript to TypeScript',
        'Built and deployed a custom Bluetooth SDK to enable vehicle control offline and online',
        'Developed compliant KYC onboarding using ClearMe and Checkr APIs',
        'Deployed production systems using AWS, Firebase, and PostgreSQL',
      ],
    },
    {
      company: 'Noumena, Miami, USA',
      role: 'Senior Full Stack Engineer on Noumenati',
      years: 'Dec 2020 – Aug 2022',
      responsibilities: [
        'Engineered multi-step KYC loan workflow with full identity and income verification',
        'Designed and shipped mobile video streaming capabilities for iOS and Android',
        'Created modular social pages with drag-and-drop layout builder',
        'Increased user engagement by 30% through custom UX flows and performance improvements',
      ],
    },
    {
      company: 'Aleph-Labs, Kuala Lumpur, Malaysia',
      role: 'Senior Frontend Engineer',
      years: 'May 2019 – Dec 2020',
      responsibilities: [
        'Developed mobile and web banking apps with real-time financial operations',
        'Implemented full digital KYC onboarding for new bank customers',
        'Built secure admin portals with role-based access and compliance controls',
        'Led team of 5 engineers across front-end, back-end, and QA',
        'Mentored junior developers and improved codebase quality and delivery speed',
      ],
    },
    {
      company: 'Episub, Sydney, Australia',
      role: 'Full Stack Engineer',
      years: 'Sep 2018 – May 2019',
      responsibilities: [
        'Built responsive web apps with React and Node.js across platforms',
        'Delivered intuitive front-end UIs and robust backend APIs',
        'Collaborated in Agile teams using Scrum and Jira',
      ],
    },
    {
      company: 'Avtian, Houston, Texas, USA',
      role: 'Frontend Engineer',
      years: 'May 2018 – Sep 2018',
      responsibilities: [
        'Developed cross-browser UI using React',
        'Contributed to front-end architecture and usability flows',
      ],
    },
    {
      company: 'Freelancer, Kuala Lumpur, Malaysia',
      role: 'Full Stack Engineer',
      years: 'Dec 2015 – Jun 2017',
      responsibilities: [
        'Delivered Java-based web application for condominium management',
        'Collected client feedback and managed full project lifecycle',
        'Built, deployed, and maintained systems end-to-end',
      ],
    },
  ],
  externalLinks: {
    linkedin: 'https://www.linkedin.com/in/marhaf-syed',
    github: 'https://github.com/marhaf-syed',
    portfolio: 'https://marhaf-syed.com',
    selfIntroduction: 'https://marhaf-syed.com',
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
    'React',
    'React Native',
    'Angular',
    'Node.js',
    'ExpressJS',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'MongoDB',
    'AWS',
    'GCP',
    'Azure',
    'ChatGPT',
    'Gemini API',
    'Stripe',
    'Plaid',
    'Checkr',
    'ClearMe',
    'Google Maps',
    'Sentry',
    'GitHub',
    'GitLab',
    'Jenkins',
    'CI/CD',
    'Docker',
    'OAuth',
    'Jira',
    'Miro',
    'Figma',
    'Team Leadership',
    'System Architecture',
    'Cross-Functional Collaboration',
    'Agile Delivery',
  ],
  contact: {
    email: 'inmogr@msn.com',
    phone: '+1 669-326-7896',
    phoneUAE: '+971-52-100-9986',
    location: 'Dubai, UAE',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/marhaf-syed',
    github: 'https://github.com/marhaf-syed',
    portfolio: 'https://marhaf-syed.com',
    selfIntroduction: 'https://marhaf-syed.com/about',
  },
};

async function getSuggestedSkills(jobDescriptions: string) {
  const skills = await suggestSkills({jobDescriptions});
  return skills.suggestedSkills;
}

async function getPersonalizedGreeting() {
  // This is placeholder logic; you might fetch location/browsing history.
  const greeting = await personalizedGreeting({location: 'Unknown'});
  return greeting.greeting;
}

export default function Home() {
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [personalizedGreetingMessage, setPersonalizedGreetingMessage] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      const skills = await getSuggestedSkills(resumeOcrData.jobDescriptions);
      setSuggestedSkills(skills);

      const greeting = await getPersonalizedGreeting();
      setPersonalizedGreetingMessage(greeting);
    };

    loadData();
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-24 bg-primary text-primary-foreground text-center"
      >
        <div className="container mx-auto px-4">
          <Avatar className="w-32 h-32 rounded-full mx-auto mb-4">
            <AvatarImage src="https://avatars.githubusercontent.com/u/6199549?v=4" alt={resumeOcrData.name} />
            <AvatarFallback>{resumeOcrData.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">{resumeOcrData.name}</h1>
          <p className="text-lg mt-2">{resumeOcrData.title}</p>
          <p className="text-md mt-2">"{personalizedGreetingMessage}"</p>
          <div className="mt-8">
            <Button asChild>
              <Link href={resumeOcrData.externalLinks.portfolio} className="mr-4">
                View Portfolio
              </Link>
            </Button>
            <Button variant="outline">Contact Me</Button>
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
                Email: {resumeOcrData.contact.email}
              </li>
              <li className="mb-2 flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                Phone: {resumeOcrData.contact.phone}
              </li>
              <li className="mb-2 flex items-center">
                <Linkedin className="mr-2 h-4 w-4 text-muted-foreground" />
                <a href={resumeOcrData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              </li>
              <li className="mb-2 flex items-center">
                <Github className="mr-2 h-4 w-4 text-muted-foreground" />
                <a href={resumeOcrData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
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
                <p>Tech: React, Node.js, AI</p>
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">
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
                  <a href="#" target="_blank" rel="noopener noreferrer">
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
                <p>Tech: Angular, Java</p>
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">
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
                  .filter(skill => ['React', 'React Native', 'Angular'].includes(skill))
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
                  .filter(skill => ['Node.js', 'ExpressJS'].includes(skill))
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
                  .filter(skill => ['JavaScript', 'TypeScript'].includes(skill))
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
                  .filter(skill => ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB'].includes(skill))
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
                  .filter(skill => ['AWS', 'GCP', 'Azure'].includes(skill))
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
                  .filter(skill => ['GitHub', 'GitLab', 'Jenkins', 'CI/CD', 'Docker', 'OAuth', 'Jira', 'Miro', 'Figma'].includes(skill))
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
                  .filter(skill => ['ChatGPT', 'Gemini API', 'Stripe', 'Plaid', 'Checkr', 'ClearMe', 'Google Maps', 'Sentry'].includes(skill))
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
                  .filter(skill => ['Team Leadership', 'System Architecture', 'Cross-Functional Collaboration', 'Agile Delivery'].includes(skill))
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
                  <a href={`mailto:${resumeOcrData.contact.email}`} className="hover:text-primary">
                    {resumeOcrData.contact.email}
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  {resumeOcrData.contact.phone}
                </li>
                <li className="mb-2 flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                  {resumeOcrData.contact.location}
                </li>
                <li className="mb-2 flex items-center">
                  <Linkedin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <a href={resumeOcrData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                </li>
                <li className="mb-2 flex items-center">
                  <Github className="mr-2 h-4 w-4 text-muted-foreground" />
                  <a href={resumeOcrData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
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
