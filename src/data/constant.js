import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline, IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export { logo, circleImg };

export const companyDetails = {
  email: "support@specslo.com",
  location: "Archi Peace Park, Sector-4, Udaipur, India",
  phone: "+91-7597406130",
};

// industries
export const industries = [
  {
    id: 1,
    title: "FinTech and Banking",
    image: "/assets/images/icons/FinTech and Banking.png",
    desc: "Addressing financial specs with secure payment systems.",
  },
  {
    id: 2,
    title: "Healthcare and Biotech",
    image: "/assets/images/icons/Healthcare and Biotech.png",
    desc: "Turning healthcare specs into solutions that advance patient care and optimize operations.",
  },
  {
    id: 3,
    title: "E-commerce and Retail",
    image: "/assets/images/icons/E-commerce and Retail.png",
    desc: "Meeting retail specs with scalable,e-commerce platforms, predictive analytics, and AI-powered chatbots.",
  },
  {
    id: 4,
    title: "Gaming and Entertainment",
    image: "/assets/images/icons/Gaming and Entertainment.png",
    desc: "Crafting specs into immersive gaming experiences with AR/VR and real time player.",
  },
  {
    id: 5,
    title: "Logistics and Supply Chain Management",
    image: "/assets/images/icons/Logistics and Supply Chain Management.png",
    desc: "Fulfilling supply chain specs with IoT-driven tracking systems, predictive analytics.",
  },
  {
    id: 6,
    title: "Education and E-Learning",
    image: "/assets/images/icons/Education and E-Learning.png",
    desc: "Shaping educational specs into adaptive learning platforms, virtual classrooms.",
  },
  {
    id: 7,
    title: "Restaurants and Hotels",
    image: "/assets/images/icons/Restaurants and Hotels.png",
    desc: "Designing hospitality specs to elevate guest experiences with AI-powered.",
  },
];

export const testimonials = [
  {
    name: "Sandheep Chauhan",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "Specslo delivered exactly what we needed. Their expertise in web development transformed our online presence and boosted our engagement significantly.",
    position: "Founder",
    company: "BRIGHTWAVE SOLUTIONS",
  },
  {
    name: "Rahul Gupta",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "The mobile app they developed for us is flawless. The team was professional, communicative, and exceeded all our expectations.",
    position: "CEO",
    company: "FINTECH INNOVATORS",
  },
  {
    name: "Priya Desai",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Their Al and data science services revolutionized our analytics. We can now make smarter, data-driven decisions effortlessly.",
    position: "COO",
    company: "GLOBAL TRADE CORP",
  },
];

export const futureGoals = [
  {
    icon: <IoChatbubblesOutline size={30} />,
    title: "Expand Solutions for Modern Business",
    description:
      "Grow our services to meet evolving digital needs and become your go-to partner for transformative technology.",
  },
  {
    icon: <RiTeamLine size={30} />,
    title: "Innovate Sustainably",
    description:
      "Blend future-focused tech with eco-friendly practices to create a greener, smarter tomorrow.",
  },
  {
    icon: <IoDiamondOutline size={30} />,
    title: "Built Around Your Specs",
    description:
      "Every solution starts with your goals and evolves through your feedback.",
  },
  {
    icon: <IoMdGlobe size={30} />,
    title: "Go Global, Stay Personal",
    description:
      "Strengthen our international presence while customizing solutions to align with each client’s unique specifications.",
  },
  {
    icon: <IoMdCheckmarkCircleOutline size={30} />,
    title: "Enhance User Experience",
    description:
      "Deliver intuitive, engaging, and user-friendly designs that make every interaction meaningful and specs-driven.",
  },
  {
    icon: <LuBrainCircuit size={30} />,
    title: "Lead with AI, ML, and Future Tech",
    description:
      "Leverage AI, machine learning, and cutting-edge technologies to build solutions that anticipate tomorrow’s challenges.",
  },
];

// all services
export const ourServices = [
  {
    id: 1,
    title: "Web Development",
    image: require("../assets/images/services/web-dev1.jpeg"),
    desc: "Website development is the process of building and maintaining a website. It involves planning, designing, coding, and testing.",
  },
  {
    id: 2,
    title: "App Development",
    image: require("../assets/images/services/app-dev1.jpeg"),
    desc: "App development is the process of creating software applications to meet business needs and improve customer experience. It involves planning, designing, developing, and testing the app.",
  },
  {
    id: 3,
    title: "Custom Software Development",
    image: require("../assets/images/services/custom-software1.jpeg"),
    desc: "Building software specifically for a client's exact requirements, providing tailored features and functionality not found in off-the-shelf solutions.",
  },
  {
    id: 4,
    title: "AI Service",
    image: require("../assets/images/services/ai1.png"),
    desc: "AI services are a collection of offerings that use artificial intelligence (AI) to help businesses and individuals solve problems.",
  },
  {
    id: 5,
    title: "Data Service",
    image: require("../assets/images/services/data-science1.jpeg"),
    desc: "Data science is the practice of extracting meaningful insights from large datasets using statistical methods, programming, and machine learning to inform decision-making.",
  },
  {
    id: 6,
    title: "Game Development",
    image: require("../assets/images/services/game-dev1.jpeg"),
    desc: "Game development, production, or design is a process that starts from an idea or concept. Often the idea is based on a modification of an existing game concept. The game idea may fall within one or several genres.",
  },
  {
    id: 7,
    title: "UI/UX Design",
    image: require("../assets/images/services/uiux1.jpeg"),
    desc: "UI/UX design is the practice of crafting visually appealing and user-friendly interfaces that seamlessly guide users through a digital product, ensuring a positive overall experience. ",
  },
];

// frequently asked questions
export const faqs = [
  {
    id: 1,
    question: "How do native and hybrid apps differ from each other?",
    answer: `Native apps are developed specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). They offer optimal performance and access to all device features

    Hybrid apps are built using web technologies like HTML, CSS, and JavaScript, and run inside a native container. They can be deployed across multiple platforms but might not perform as well as native apps.`,
  },
  {
    id: 2,
    question: "What is the typical timeframe for developing a mobile app?",
    answer:
      "The development time for a mobile app can vary widely based on the complexity of the app, the features required, and the development platform. On average, it can take anywhere from 3 to 9 months from the initial concept to deployment.",
  },
  {
    id: 3,
    question: "Which platforms should we prioritize: iOS or Android?",
    answer:
      "The choice of platform depends on your target audience. If your users are primarily iPhone users, targeting iOS makes sense. For a broader audience, consider developing for both iOS and Android. Cross-platform development tools can also help target both platforms simultaneously.",
  },
  {
    id: 4,
    question: "What is the estimated cost of developing a mobile app?",
    answer:
      "The cost of developing a mobile app depends on various factors, including the complexity of the app, the number of features, the design requirements, and the development time. It can range from a few thousand dollars for a simple app to hundreds of thousands for a complex, feature-rich application.",
  },
  {
    id: 5,
    question: "How do you guarantee the security of the mobile application?",
    answer:
      "We implement industry best practices for app security, including data encryption, secure coding practices, regular security testing, and compliance with relevant regulations to protect user data and privacy.",
  },
  {
    id: 6,
    question:
      "Are you able to provide updates and maintenance for the app after it's launched?",
    answer:
      "Yes, we offer ongoing maintenance and support services to ensure your app remains up-to-date, secure, and performs well. This includes bug fixes, updates for new OS versions, and adding new features.",
  },
];
