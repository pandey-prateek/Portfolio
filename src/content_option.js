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
    title: "Let me weave an intriguing narrative about myself.",
    aboutme: "I'm Prateek Pandey, currently enrolled in the M.Tech Computer Science program at IIIT Hyderabad, maintaining an impressive CGPA of 8.76. With 2.3 years of experience as a seasoned Software Engineer, I've contributed significantly at Nucleus Software Exports Ltd and Impetus Technologies. My expertise lies in Java Spring development, complemented by multiple projects in JavaScript and Python.",
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
const acolades = [{
    name: "GATE-2022",
    desc: "Secure AIR 459 in GATE 2022",

},
{
    name: "Dean's merit List",
    desc: "Attain a place in the Dean's Merit List.",
}
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
        value: 55,
    }
];

const services = [{
        title: "Web Development",
        description: "Web-Based Lending Application(Industry Project):\
        Played a key role in enhancing a web-based lending application by introducing innovative features and creating new versions. Leveraged Java and the Spring framework to ensure improved robustness and efficiency.\n\n\
        JSON Rule Validator:\
        Built a JavaScript-based JSON Rule Validator to validate user-defined syntax against specified rules. Implemented React for dynamic user interfaces and utilized Node.js for server-side functionality.\n\n\
        KAOOVA Crow and Vulture Hunt Game:\
        Designed and developed an engaging game entirely using d3.js. Demonstrated proficiency in JavaScript and seamless integration of diverse technologies.\n\n\
        Backend Systems with Flask:\
        Applied hands-on experience in backend development using Python and Flask. Created multiple efficient and scalable backend systems, including those for a distributed IoT platform, to complement frontend functionalities.",
    },
    {
        title: "System Application development",
        description: "I have experience in system application development, both in academic coursework and personal projects. Some of the applications I've created include:\n\n\
        POSIX Shell: I implemented a shell based on the POSIX standard, providing users with a command-line interface to interact with the operating system.\n\n\
        Terminal File Explorer: I developed a file explorer that operates within the terminal/command-line interface, allowing users to navigate and manipulate files and directories using commands.\n\n\
        Peer-to-Peer File Sharing System with Socket Programming: I created a Peer-to-Peer (P2P) file sharing system using socket programming, enabling users to share files directly without relying on a central server.\n\n\
        In addition to these projects, I am proficient in working with Linux systems. My skills include system administration, command-line operations, and a strong understanding of the Linux environment, which is essential for software development and deployment in Unix-like systems."
        
    },
    {
        title: "Machine Learning",
        description: " I've explored the world of machine learning, getting better at using different statistical tools for specific jobs. I've worked on tasks like grouping similar data, predicting outcomes, sorting things into categories, spotting unusual patterns, and recognizing specific features in images using algorithms like KNN, KMeans, GMM, Linear Regression, and Decision Trees.\
        \n\nIn the field of data analysis, I've used methods like BUC (Bottom-Up Computation) and FP-growth to understand and pull meaningful insights from data.\
        \n\nIn deep learning, I've taken on projects that go beyond the usual methods. For example, I created a special kind of neural network, called a convex neural network, to make sure that the model works well not just during training but also when it's put to the test. This helps the model to perform better in real-world situations.\
        \n\nIn another project, I worked on understanding language better, specifically pulling out key phrases from scientific papers. This involved using techniques like natural language inference and sentiment analysis to get important information from complex scientific texts.,"
    },
];

const dataportfolio = [{
        img: require( "./assets/images/kl.jpg"),
        description: "KeyPhrase-Extraction-from-Scientific-Papers",
        link: "https://github.com/pandey-prateek/KeyPhrase-Extraction-from-Scientific-Papers",
    },
    {
        img: require( "./assets/images/tm.jpg"),
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
        description: "Termnal File Explorer",
        link: "https://github.com/pandey-prateek/File-Explorer",
    },
    {
        img: require( "./assets/images/crow.jpg"),
        description: "KAOOA: TRADITIONAL ABSTRACT STRATEGY HUNT GAME",
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
    acolades,
};