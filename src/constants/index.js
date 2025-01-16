import { uco, ippudo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    dart,
    firebase,
    sql,
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Inventory Manager Web App',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Dice Roll Simulator Web Application',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'SQL Web-Based Student Enrollment System',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'In progress...',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    
];