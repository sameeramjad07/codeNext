export const navItems = [
  { name: "About", link: "#Footer" },
  { name: "Services", link: "/services" },
  { name: "Contact Us", link: "/contact-us" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Wanna work with us?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Mobile application",
    description: "We develop innovative, user-friendly mobile apps for iOS and Android",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Custom Web Development",
    description: "We build custom, scalable, and secure web apps tailored to your business needs, providing a seamless user experience",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "From front-end design to back-end integration, we offer complete full-stack development",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const services = [
  {
    title: "Custom Web Development",
    description: "Tailored web solutions to meet your unique business needs.",
    icon: "🌐",
    link: "/services/custom-web-development",
    image: "/images/custom-web-development.jpg", // Example image path
    features: [
      {
        title: "Responsive Design",
        description:
          "Crafting visually appealing designs that adapt seamlessly to all devices.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Building systems capable of handling growth and evolving requirements.",
      },
      {
        title: "Secure Integrations",
        description:
          "Ensuring your web solutions are equipped with top-notch security protocols.",
      },
    ],
    technologies: [
      "React", "Next.js", "Vue.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"
    ],
  },
  {
    title: "Mobile Application Development",
    description: "Innovative mobile apps for iOS and Android platforms.",
    icon: "📱",
    link: "/services/mobile-application",
    image: "/images/mobile-app-development.jpg", // Example image path
    features: [
      {
        title: "Cross-Platform Support",
        description:
          "Delivering consistent performance across iOS and Android devices.",
      },
      {
        title: "User-Centered Design",
        description:
          "Focusing on intuitive and engaging user experiences.",
      },
      {
        title: "Offline Functionality",
        description:
          "Enabling uninterrupted access even without an internet connection.",
      },
    ],
    technologies: [
      "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "SQLite", "Realm"
    ],
  },
  {
    title: "Full Stack Development",
    description: "End-to-end development services for robust applications.",
    icon: "☁️",
    link: "/services/full-stack-development",
    image: "/images/full-stack-development.jpg", // Example image path
    features: [
      {
        title: "API Development",
        description:
          "Building robust and secure APIs for seamless integration.",
      },
      {
        title: "DevOps Integration",
        description:
          "Streamlining development and deployment with CI/CD practices.",
      },
      {
        title: "Performance Optimization",
        description:
          "Enhancing application speed and responsiveness.",
      },
    ],
    technologies: [
      "MERN Stack", "MEVN Stack", "Django", "Flask", "Ruby on Rails", "Spring Boot", "MySQL", "PostgreSQL", "Docker", "Kubernetes"
    ],
  },
  {
    title: "HR Augmentation",
    description: "Enhance your team with skilled professionals on demand.",
    icon: "🤖",
    link: "/services/hr-augmentation",
    image: "/images/hr-augmentation.jpg", // Example image path
    features: [
      {
        title: "On-Demand Talent",
        description:
          "Access to a global pool of highly skilled professionals.",
      },
      {
        title: "Seamless Integration",
        description:
          "Effortless onboarding and collaboration with your existing team.",
      },
      {
        title: "Scalable Staffing",
        description:
          "Flexible resourcing to match your evolving business needs.",
      },
    ],
    technologies: [
      "HR Management Tools", "Collaboration Platforms", "Slack", "Jira", "Trello", "Zoom"
    ],
  },
];


export const services2 = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "CodeNext Solutions transformed our business with their exceptional web development and HR solutions. Their expertise and attention to detail are unmatched.",
    name: "Sarah Thompson",
    title: "CEO of BrightFuture Enterprises",
  },
  {
    quote:
      "Partnering with CodeNext Solutions was the best decision we made. Their app development team delivered a flawless cross-platform app.",
    name: "David Lee",
    title: "Founder of QuickEats",
  },
  {
    quote:
      "From HR consulting to software development, CodeNext Solutions provided us with everything we needed to grow efficiently.",
    name: "Emily Davis",
    title: "COO of InnovateTech",
  },
  {
    quote:
      "Collaborating with These People was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61569716352364"
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/code-next-solutions/"
  },
];
