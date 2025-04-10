'use client';

import {personalizedGreeting} from '@/ai/flows/personalized-greeting';
import {suggestSkills} from '@/ai/flows/suggest-skills';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ExternalLink} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import {useEffect, useState} from 'react';

const resumeOcrData = {
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
  name: 'Marhaf Chamie',
  title: 'Senior AI & Software Engineer',
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

  const [selectedSection, setSelectedSection] = useState('Summary');

  useEffect(() => {
    console.log('Selected section:', selectedSection);
  }, [selectedSection]);

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
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <img
            src="https://avatars.githubusercontent.com/u/6199549?v=4"
            alt="Profile"
            className="rounded-full h-10 w-10 mx-auto mb-2"
          />
          <div className="text-center">
            <h2 className="text-lg font-semibold">{resumeOcrData.name}</h2>
            <p className="text-sm text-muted-foreground">{resumeOcrData.title}</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSelectedSection('Summary')}>
                Summary
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSelectedSection('Experience')}>
                Experience
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSelectedSection('Links')}>
                External Links
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSelectedSection('Skills')}>
                Skills
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {resumeOcrData.name}
          </p>
        </SidebarFooter>
      </Sidebar>
      <div className="md:pl-[16rem] p-4">
        {/* Introduction Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>{personalizedGreetingMessage}</CardDescription>
          </CardHeader>
        </Card>

        {/* Conditionally render content based on selected section */}
        {selectedSection === 'Summary' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>{resumeOcrData.summary}</CardDescription>
            </CardHeader>
          </Card>
        )}

        {selectedSection === 'Experience' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Experience Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              {resumeOcrData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.role} ({exp.years})
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {selectedSection === 'Links' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>External Links</CardTitle>
              <CardDescription>Connect with me on these platforms.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button asChild>
                <a
                  href={resumeOcrData.externalLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  LinkedIn <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild>
                <a
                  href={resumeOcrData.externalLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild>
                <a
                  href={resumeOcrData.externalLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Portfolio <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild>
                <a
                  href={resumeOcrData.externalLinks.selfIntroduction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Self-Introduction <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {selectedSection === 'Skills' && (
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Here's a list of my skills:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {resumeOcrData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </SidebarProvider>
  );
}
