export const projects = [
  {
    title: 'JusticeWatch',
    description: "JusticeWatch is a civic tech platform that allows users to explore police department performance and safety legislation data in real time. I developed the frontend using React, TypeScript, and Tailwind CSS, and built a RESTful backend with Flask and PostgreSQL to integrate data from the LegiScan API. I also implemented unit testing with Jest and automated CI/CD pipelines to ensure clean deployments and reliable functionality.",
      image: '/images/1.png',
      tags: ['PostgreSQL', 'Flask', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    source: 'https://www.justicewatch.me/',
    visit: 'https://gitlab.com/gjkeller1/cs373-spring-2025-group-07',
    completed: true,
    id: 0,
  },
  {
    title: 'PrizePickers',
    description:"PrizePickers is an ongoing full-stack web application that analyzes NBA player data to help users make smarter sports betting decisions. I’m building the backend with Flask, SQLAlchemy, and PostgreSQL to serve a RESTful API that processes weighted performance statistics. On the frontend, I’m using Next.js, React, TypeScript, and Tailwind CSS to create an intuitive interface with interactive graphs and visual insights.",
    image: '/images/2.png',
    tags: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    source: '',
    visit: 'https://github.com/stoven2k17/PrizePickers',
    completed: false,
    id: 1,
  },
  {
    title: 'YelpCamp',
    description: "YelpCamp is a full-stack campground discovery web app that lets users browse, review, and save over 100 campground listings. I created secure user authentication and access control using Node.js and Express.js, and designed RESTful APIs powered by MongoDB to support fast, scalable CRUD operations. The responsive frontend was built with React, offering a smooth and engaging user experience.",
      image: '/images/3.png',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    source: '',
    visit: '',
    completed: false,
    id: 2,
  }
];

export const TimeLineData = [
  { year: 2022, text: 'Began studying Computer Science at the University of Texas at Austin and explored foundational programming and problem-solving skills.', },
  { year: 2023, text: 'Developed an x86-32 toy kernel in C', },
  { year: 2024, text: 'Built my first full-stack applications and deepened my knowledge of software engineering, algorithms, and system design, took on the role of Teaching Assistant for Differential Calculus, and launched JusticeWatch, a civic tech platform focused on public safety transparency.', },
  { year: 2025, text: 'Currently building PrizePickers, an ongoing full-stack web app that analyzes NBA data to recommend top betting props, while continuing to grow my skills in full-stack development and data analytics.', },
];