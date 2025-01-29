'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    BookOpen,
    Briefcase,
    ArrowRight,
    Wrench
} from 'lucide-react';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-12 ${className}`}>
        {children}
    </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {children}
    </h2>
);

const SkillCard = ({ icon: Icon, title, skills }: { icon: React.ElementType, title: string, skills: string[] }) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-sm border"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
    >
        <div className="p-2 bg-blue-50 w-fit rounded-lg mb-4">
            <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {skill}
                </li>
            ))}
        </ul>
    </motion.div>
);

const ProjectCard = ({ title, description, link }: { title: string, description: string, link: string }) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-sm border group hover:border-blue-500 transition-colors"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
    >
        <Link href={link}>
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors mb-3">
                {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center text-blue-500 font-medium">
                View Project <ArrowRight className="w-4 h-4 ml-2" />
            </div>
        </Link>
    </motion.div>
);

const TimelineItem = ({ title, period, company, description, skills }: { title: string, period: string, company: string, description: string, skills?: string[] }) => (
    <motion.div
        className="mb-10 ml-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    >
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{company} · {period}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        {skills && (
            <div className="flex gap-2 mt-2 flex-wrap">
                {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                    </Badge>
                ))}
            </div>
        )}
    </motion.div>
);

const experienceData = [
    {
        company: "RIT Student Life",
        title: "Social Media Coordinator",
        startDate: "2024-08",
        endDate: "Present",
        skills: ["Media Management", "Content Creation"],
        responsibilities: [
            "Curate and manage engaging content for Instagram and Facebook",
            "Promote campus events and resources to the student body",
            "Track engagement metrics and optimize content strategy"
        ]
    },
    {
        company: "RIT Campus",
        title: "Brick City Ambassador",
        startDate: "2023-08",
        endDate: "Present",
        skills: ["Campus Tours", "Public Speaking"],
        responsibilities: [
            "Guide prospective students and families through campus tours",
            "Share comprehensive information about RIT's programs and facilities",
            "Represent the university at various campus events"
        ]
    },
    {
        company: "STEP Program",
        title: "Mathematics Tutor",
        startDate: "2024-02",
        endDate: "2024-06",
        skills: ["Mathematics", "Teaching", "Mentoring"],
        responsibilities: [
            "Tutored 6-12th grade students in various mathematics subjects",
            "Developed personalized learning strategies for each student",
            "Maintained progress reports and communication with teachers"
        ]
    },
    {
        company: "Wegmans Food Markets",
        title: "Customer Service Representative",
        startDate: "2022-03",
        endDate: "Present",
        skills: ["Customer Service", "Problem Solving", "Team Leadership"],
        responsibilities: [
            "Resolve customer inquiries and maintain high satisfaction rates",
            "Handle complex customer service situations with professionalism",
            "Collaborate with team members to ensure smooth operations"
        ]
    }
];

const calculateDuration = ({ startDate, endDate = 'Present' }: { startDate: string, endDate?: string }) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);

    if (isNaN(start.getTime()) || (endDate !== 'Present' && isNaN(end.getTime()))) {
        return "Invalid date";
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years === 0) {
        return `${months} ${months === 1 ? 'mo' : 'mos'}`;
    } else if (months === 0) {
        return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
    } else {
        return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${months === 1 ? 'mo' : 'mos'}`;
    }
};

export default function Main() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full min-h-screen">
            <Navbar scrolled={scrolled} />
            <div className="container mx-auto px-5 sm:max-w-5xl">
                <motion.header
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                        Hi, my name is Devin Vasavong & I&apos;m a first-generation student.
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        I&apos;m a <span className="font-semibold">software engineering student</span> born and raised in Rochester, NY.
                        I&apos;m currently studying at the
                        <Link href="https://www.rit.edu" className="font-semibold text-[#F76902] hover:underline"> Rochester Institute of Technology</Link>,
                        where I&apos;m pursuing a Bachelor&apos;s degree in Software Engineering.
                        I&apos;m passionate about building software that makes a difference in people&apos;s lives.
                    </p>
                </motion.header>

                <Section>
                    <SectionTitle>Skills</SectionTitle>
                    <p className="text-lg text-gray-700 mb-8">
                        I&apos;m primarily interested in full-stack development, but I also have experience with mobile app development
                        and game development. Here are some of the technologies I&apos;ve worked with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SkillCard
                            icon={Code}
                            title="Programming Languages"
                            skills={["JavaScript", "Python", "Java", "C++"]}
                        />
                        <SkillCard
                            icon={BookOpen}
                            title="Frameworks & Libraries"
                            skills={["React", "Node.js", "Express", "Next.js"]}
                        />
                        <SkillCard
                            icon={Wrench}
                            title="Tools & Technologies"
                            skills={["Git & GitHub", "Docker", "Firebase", "SQL & NoSQL"]}
                        />
                    </div>
                </Section>

                <Section>
                    <SectionTitle>Featured Projects</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ProjectCard
                            title="Workplace Management"
                            description="ShiftList, a workplace management web-application for small businesses, aims to simplify the process of scheduling shifts and managing employees."
                            link="/work/workplace-scheduling"
                        />
                        <ProjectCard
                            title="Sweets"
                            description="Sweets, a group on ROBLOX, is a group with over 30,000 members that focuses on creating games and experiences for the ROBLOX platform."
                            link="http://roblox.com/groups/4158441/Sweets"
                        />
                    </div>
                </Section>

                <Section>
                    <SectionTitle>Work Experience</SectionTitle>

                    <div className="grid gap-8">
                        {experienceData.map((experience, index) => {
                            const startDate = new Date(experience.startDate);
                            const duration = calculateDuration({ startDate: experience.startDate, endDate: experience.endDate });

                            return (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="md:w-1/3">
                                            <h3 className="text-xl font-semibold text-gray-800">{experience.company}</h3>
                                            <p className="text-blue-600 font-medium">{experience.title}</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                {startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {experience.endDate} · {duration}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {experience.skills.map((skill, skillIndex) => (
                                                    <Badge key={skillIndex} variant="outline">{skill}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <div className="prose">
                                                <ul className="list-disc space-y-2 text-gray-600 ml-4">
                                                    {experience.responsibilities.map((responsibility, respIndex) => (
                                                        <li key={respIndex}>{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </Section>
            </div>
        </div>
    );
}