const logotext = "Prateek Pandey";
const meta = {
    title: "Prateek Pandey",
    description: "I’m Prateek Pandey M Tech(IIIT HYDERABAD),GATE 2022",
};

const introdata = {
    title: "I’m Prateek Pandey",
    animated: {
        first: "Software Engineer",
        second: "AI Enthusiast",
        third: "Photographer",
    },
    description: "Computer Science M.Tech at IIITH (2022-2024) CGPA-8.76 | Proficient in JAVA, C++, Python | Experienced in Software Development | AIR 459 (Gate 2022 )|Passionate about NLP and Computer Vision",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "I am Prateek Pandey, currently pursuing an M.Tech in Computer Science at IIIT Hyderabad with a notable CGPA of 8.76. As a seasoned Software Engineer, I've contributed significantly at Impetus Technologies and Nucleus Software Exports Ltd., specializing in Java, Spring Boot, and Hadoop. My passion for innovation is reflected in projects like keyphrase extraction from scientific publications and implementing Convex Neural Networks. Proficient in various programming languages and frameworks, I take pride in academic achievements such as securing AIR 459 in Gate 2022 and earning a coveted spot in the Dean's Merit List for M.Tech in 2023.",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "Impetus Technologies",
        date: "2/2021-11/2021",
    },
    {
        jobtitle: "Software Engineer",
        where: "Nucleus Software Exports",
        date: "5/2019-10/2020",
    },
    {
        jobtitle: "Software Intern",
        where: "Nucleus Software Exports",
        date: "12/2018-5/2019",
    },
    {
        jobtitle: "Software Intern",
        where: "V2 Games",
        date: "6/2017-7/2017",
    },
];

const skills = [{
    name: "C++",
    value: 80,
},
{
    name: "JAVA",
    value: 85,
},
{
    name: "Javascript",
    value: 55,
},
{
    name: "Python",
    value: 70,
},
{
    name: "Jquery",
    value: 85,
},{
        name: "Spring",
        value: 80,
    },
    {
        name: "MySQL",
        value: 85,
    },
    {
        name: "React",
        value: 40,
    }
];

const services = [{
        title: "Web Development",
        description: "Skilled in Web Development, I've successfully completed projects utilizing Jquery-Spring Boot and React-Node.js stacks. My expertise extends to Backend development with proficiency in Java, Node.js, and Python.",
    },
    {
        title: "System Application development",
        description: "Proficient in C++, I've leveraged my skills to develop a range of projects, including a custom POSIX shell, terminal file explorer, and a peer-to-peer file-sharing system.",
    },
    {
        title: "ML Development",
        description: "Developed multiple models using PyTorch to accomplish diverse tasks, including keyphrase extraction, sentiment analysis, next word prediction, convex optimization, and object identification",
    },
];

const dataportfolio = [{
        img: require( "./assets/images/kl.jpg"),
        description: "KeyPhrase-Extraction-from-Scientific-Papers",
        link: "https://github.com/pandey-prateek/KeyPhrase-Extraction-from-Scientific-Papers",
    },
    {
        img: require( "./assets/images/ascii.jpg"),
        description: "ASCII(POSIX SHELL)",
        link: "https://github.com/pandey-prateek/ASCII-Posix-Shell-",
    },
    {
        img: require( "./assets/images/nn.jpg"),
        description: "Convex Neural Network",
        link: "https://github.com/pandey-prateek/Convex-Neural-Networks",
    },
    {
        img: require( "./assets/images/fe.jpg"),
        description: "File Explorer",
        link: "https://github.com/pandey-prateek/File-Explorer",
    },
    {
        img: require( "./assets/images/crow.jpg"),
        description: "Kaoova",
        link: "https://github.com/pandey-prateek/Koova",
    },
    {
        img: require( "./assets/images/json.jpg"),
        description: "JSON Rule Validator",
        link: "https://github.com/pandey-prateek/JSON-Rule-Validator",
    },

    {
        img: require( "./assets/images/distr.jpg"),
        description: "Distributed IOT Platform",
        link: "https://github.com/pandey-prateek/Distributed-IOT-Platform",
    },{
        img: require( "./assets/images/li.jpg"),
        description: "Natural-Language-Inference-Elmo",
        link: "https://github.com/pandey-prateek/Natural-Language-Inference-Elmo",
    },
    {
        img: require( "./assets/images/ml.jpg"),
        description: "Machine Learning Algo",
        link: "https://github.com/pandey-prateek/Machine-Learning-Algos",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "pandey.prateek@outlook.com",
    YOUR_FONE: "+91-8527253547",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/pandey-prateek",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/prateek-pandey-1903/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};