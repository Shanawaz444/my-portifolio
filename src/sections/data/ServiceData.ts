export interface ServiceItem {
  title: string;
  icon?: string;
  skills: string[];
}

const services: ServiceItem[] = [
  {
    title: "Full-Stack Web Development",
    icon: "💻",
    skills: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
  },
  {
    title: "Cloud Deployment",
    icon: "☁️",
    skills: ["AWS", "Docker", "Linux"],
  },
  {
    title: "Backend API Architecture",
    icon: "🔧",
    skills: ["Java", "Spring Boot", "PSQL", "Git", "Distributed Systems"],
  },
  {
    title: "System Design & Architecture",
    icon: "📐",
    skills: ["HLD", "LLD", "Design Patterns", "DSA"],
  },
  {
    title: "Project Management & Agile",
    icon: "📊",
    skills: ["Agile", "Team Leadership", "GitHub", "Planning"],
  },
  {
    title: "Debugging & Optimization",
    icon: "🧩",
    skills: ["Debugging", "Optimized Coding", "Code Reviews"],
  },
];

export default services;
