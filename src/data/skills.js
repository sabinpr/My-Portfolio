import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiEjs,
  SiPug,
  SiElementor,
  SiMysql,
  SiRedis,
  SiCelery,
} from "react-icons/si";

import { FiZap } from "react-icons/fi";

export const skills = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Responsive Design", icon: FiZap, color: "#6366F1" },

  // Backend
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Django REST Framework (DRF)", icon: SiDjango, color: "#FF1709" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },

  // Authentication / APIs
  { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#000000" },
  { name: "REST APIs", icon: FiZap, color: "#6366F1" },
  { name: "Axios / Fetch", icon: FiZap, color: "#6366F1" },

  // Template Engines
  { name: "EJS", icon: SiEjs, color: "#A91E50" },
  { name: "Pug", icon: SiPug, color: "#A86454" },

  // WordPress
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "Elementor", icon: SiElementor, color: "#92003B" },

  // Tools
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Celery", icon: SiCelery, color: "#37814A" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
];
