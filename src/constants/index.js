import { uco, ippudo } from "../assets/images";
import {
    car,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    typescript,
    dart,
    firebase,
    sql,
    inventory,
    hat,
    dice,
    website,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: dart,
        name: "Dart",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Web Development Teaching Assistant",
        company_name: "University of Central Oklahoma",
        icon: uco,
        iconBg: "#accbe1",
        date: "Aug 2024 - current",
        points: [
            "Guided over 100 students in web development: Assisted with coding exercises, troubleshooting issues, and explaining core concepts like HTML, CSS, JavaScript, and frameworks.",
            "Developed and maintained teaching resources: Created example projects, tutorials, and documentation to aid student learning and clarify complex topics.",
            "Facilitated workshops and labs: Led hands-on sessions to demonstrate web development techniques, encouraging active participation and problem-solving.",
            
        ],
    },

    {
        title: "Floor Staff",
        company_name: "Ippudo INC",
        icon: ippudo,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Aug 2023",
        points: [
            "Delivered exceptional dining experiences by promptly attending to guests and ensuring their needs were met with professionalism and efficiency.",
            "Actively resolved customer concerns with empathy and professionalism, contributing to a welcoming and positive dining environment.",
            "Supported team efforts during high-volume service periods, demonstrating flexibility and a commitment to excellence.",    
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hanswys',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yong-shen-wong-507517309/',
    }
];

export const projects = [
    {
        iconUrl: inventory,
        theme: 'btn-back-red',
        name: 'Inventory Manager Web App',
        description: 'Developed a real-time inventory management system with Firestore, ensuring reliable tracking and exclusive user access.',
        link: 'https://github.com/hanswys/ywong8-project2-cmsc4373',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-green',
        name: 'Dice Roll Simulator Web Application',
        description: 'Created a simulation app with betting functionality, win/loss tracking, and consistent result storage.',
        link: 'https://github.com/hanswys/ywong8-project1-cmsc4373',
    },
    {
        iconUrl: hat,
        theme: 'btn-back-blue',
        name: 'SQL Web-Based Student Enrollment System',
        description: 'Designed a comprehensive system for managing student records, courses, and enrollment at the University of Central Oklahoma, with robust features like GPA tracking and real-time prerequisite validation.',
        link: 'https://www.youtube.com/watch?v=SJzyLme2jiM',
    },
    {
        iconUrl: website,
        theme: 'btn-back-pink',
        name: '3D Portfolio Website',
        description: 'Built an interactive React-based portfolio with Three.js for 3D visualizations and responsive designs using Tailwind CSS.',
    },
    
];