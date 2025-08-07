import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Anuj",
  lastName: "Patwal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend Developer",
  avatar: "/images/avatar.jpg",
  email: "anujpatwal126@gmail.com",
  location: "Asia/India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pxtwxl",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/anuj-patwal-prof",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the logic behind great experiences</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">ECommerce Application</strong></>,
    href: "/work",
  },
  subline: (
    <>
      I'm Anuj Patwal, a Backend Developer driven with a passion for crafting efficient and scalable
      architectures.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anuj is a backend developer based in Bengaluru, passionate about architecting scalable systems and solving complex technical challenges with clean, efficient code. His work spans APIs, databases, cloud infrastructure, and the seamless orchestration of backend services that power modern applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Amiti Software Technologies",
        timeframe: "Apr 2025 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Building modular microservices with Spring Boot, following best practices in controller-service-repository
            architecture to ensure clean code separation.
          </>,
          <>
            Implementing exception handling, input validation, and security features in Spring Boot applications to enhance
            robustness and API reliability.
          </>,
          <>
            Integrating Apache Kafka for asynchronous communication between microservices, improving system scalability and
            fault tolerance.
          </>,
          <>
            Developing Kafka producers and consumers to handle real-time data pipelines, ensuring reliable message delivery
            and processing.
          </>
        ],
        images: [],
      },
      {
        company: "LG Soft India",
        timeframe: "Jun 2024 - Apr 2025",
        role: "Research Engineer Intern(Java Developer)",
        achievements: [
          <>
            Worked on SOME/IP protocol, including service discovery, message serialization, and inter-process communication
            in automotive ECUs.
          </>,
          <>
            Developed and implemented APIs as services and notifications for in-vehicle communication using SOME/IP,
            ensuring seamless data exchange between ECUs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Chandigarh University",
        description: <>Studied Software Engineering.</>,
      },
      {
        name: "Delhi Public School",
        description: <>Passed High School and Senior Secondary School.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Java, C++, Javascript, Typescript</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/java.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/c-.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/js.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/typescript.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Frameworks & Libraries",
        description: <>SpringBoot, Hibernate, Nextjs</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/springboot.png",
            alt: "Project image",
            width: 12,
            height: 6,
          },
          {
            src: "/images/skills/hibernate.png",
            alt: "Project image",
            width: 22,
            height: 6,
          },
          {
            src: "/images/skills/nextjs.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
       {
        title: "Databases",
        description: <>PostgreSQL, MySQL, Redis</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/postgresql.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/mysql.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/redis.png",
            alt: "Project image",
            width: 7,
            height: 6,
          },
        ],
      },
       {
        title: "Cloud & DevOps",
        description: <>Firebase, Github Actions, Jenkins</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/firebase.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/github.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/jenkins.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Containers & Orchestration",
        description: <>Docker</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/docker.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Messaging & Streaming",
        description: <>Apache Kafka</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/kafka.webp",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Version Control",
        description: <>Git , Github</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/git.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/github.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
      {
        title: "Other Tools",
        description: <>Postman, Maven, Gradle, Linux</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/postman.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/maven.png",
            alt: "Project image",
            width: 8,
            height: 6,
          },
          {
            src: "/images/skills/gradle.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
          {
            src: "/images/skills/linux.png",
            alt: "Project image",
            width: 6,
            height: 6,
          },
        ],
      },
    ],
  },
};

// Blog section removed
// const blog = { ... }

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// Gallery section removed
// const gallery = { ... }

export { person, social, newsletter, home, about, work };
