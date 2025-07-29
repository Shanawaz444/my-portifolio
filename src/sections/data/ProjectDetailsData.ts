// ProjectDetailsData.ts
export interface ProjectDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
}

const projectData: ProjectDetail[] = [
{
  id: "project1",
  title: "Forex Pairs Stock Predictor",
  shortDescription: "Predicts forex trends using real-time data and ML models.",
  fullDescription: `Developed a full-stack system to predict forex trading pairs using live data from MetaTrader 5 (MT5). 
Backend services built with FastAPI fetch and process real-time market data, apply predictive ML models, 
and expose APIs consumed by a React frontend to display forecasts, analytics, and trading metrics. 
The system is CI/CD integrated, Git-managed, and deployed on AWS ECS for scalability and high availability.`,
  skills: ["FastAPI", "React", "AWS ECS", "Git", "CI/CD", "ML Models"],
},

  {
    id: "returns-optimizer",
    title: "Returns Pipeline Optimization",
    shortDescription:
      "Redesigned returns processing for speed and scalability across 110+ FCs.",
    fullDescription:
      `Redesigned the returns pipeline for parallel processing, 
      cutting average completion time to 14 minutes, improving order closure by 50%, 
      and reducing 3M daily API calls across 110+ FCs for improved performance and efficiency.`,
    skills: ["Java", "Spring Boot", "AWS", "CI/CD", "Git", "Agile"],
  },
  {
    id: "project3",
    title: "Another Project",
    shortDescription: "Short summary here...",
    fullDescription: "Detailed explanation of the second project.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
  },
  // Add more projects as needed
];

export default projectData;
