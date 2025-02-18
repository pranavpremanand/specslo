import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import moonShapeImg from "../assets/images/yellow-moon-shape.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline, IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export { logo, circleImg, moonShapeImg };

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

// healthcare web solutions
export const healthcareWebSolutions = [
  {
    id: 1,
    image: require("../assets/images/healthcare web solutions/1.png"),
    html: `
    <div>
      <p class="mb-8">
       <span class="text4 text-primary1">1. Customized Websites for Your Unique Needs : </span>
        From patient engagement to operational efficiency, Specslo develops healthcare websites that transform how you deliver care. Types of websites we offer include:
      </p>
      
      <div class="space-y-6">        
        <ul class="space-y-4">
          <li class="">
            <h4 class="text4">a. Hospital Websites</h4>
            <p>
              Showcasing services and specialists with secure patient portals and virtual tours.
            </p>
          </li>

          <li class="">
            <h4 class="text4">b. Clinic Websites</h4>
            <p>
              Featuring telehealth, scheduling, and feedback systems tailored for small to large clinics.
            </p>
          </li>

          <li class="">
            <h4 class="text4">c. Telemedicine Platforms</h4>
            <p>
              Video consultations, e-prescriptions, and secure payment integrations for remote care.
            </p>
          </li>

          <li class="">
            <h4 class="text4">d. Pharmacy Websites</h4>
            <p>
              E-commerce solutions for medication purchases, prescription uploads, and delivery tracking.
            </p>
          </li>

          <li class="">
            <h4 class="text4">e. Diagnostic Center Websites</h4>
            <p>
              Online test catalogs, result delivery, and lab management tools.
            </p>
          </li>
        </ul>

        <h3 class="text4 pt-8">
          All Websites Include:
        </h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Mobile responsiveness</li>
          <li>HIPAA compliance</li>
          <li>SEO-optimized designs</li>
          <li>Secure payment and data handling</li>
        </ul>
      </div>
    </div>`,
  },
  {
    id: 2,
    image: require("../assets/images/healthcare web solutions/2.jpeg"),
    html: `<div>
  <p class="mb-8">
    <span class="text4 text-primary1">2. Enhanced Functionality with Custom Plugins</span>
    <br />
    Healthcare Plugin Development: Expand your WordPress healthcare websites with feature-rich plugins designed to enhance usability and engagement. Key features include:
  </p>

  <div class="space-y-6">
    <ul class="space-y-4">
      <li class="">
        <h4 class="text4">a. Patient Scheduling</h4>
        <p>Seamless appointment management.</p>
      </li>

      <li class="">
        <h4 class="text4">b. Health Tracking</h4>
        <p>Real-time data collection and notifications.</p>
      </li>

      <li class="">
        <h4 class="text4">c. Content Management</h4>
        <p>User-friendly plugins for dynamic updates.</p>
      </li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li>Clinics integrating health calculators.</li>
      <li>Blogs offering patient-friendly health tools.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 3,
    image: require("../assets/images/healthcare web solutions/3.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">3. Healthcare API Integration</span>
    <br />
    Streamline your digital ecosystem with custom API integration services.
  </p>

  <div class="space-y-6">
    <h3 class="text4">Spec Highlights:</h3>
    <ul class="space-y-4">
      <li>End-to-end API development and integration.</li>
      <li>Support for third-party and open-source healthcare APIs.</li>
      <li>Real-time data exchange between platforms.</li>
      <li>Enhanced interoperability for patient management systems.</li>
      <li>API solutions for lab result automation and insurance verification.</li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li>Clinics integrating telehealth platforms with existing systems.</li>
      <li>Hospitals leveraging APIs for lab test result automation.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 4,
    image: require("../assets/images/healthcare web solutions/4.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">4. Website Design & Redesign</span>
    <br />
    Upgrade your digital identity with visually appealing and functionally superior designs tailored for the healthcare sector.
  </p>

  <div class="space-y-6">
    <h3 class="text4">Spec Highlights:</h3>
    <ul class="space-y-4">
      <li>User-centric, intuitive designs to boost engagement.</li>
      <li>Accessibility-compliant layouts for diverse user groups.</li>
      <li>Responsive redesigns to enhance existing websites.</li>
      <li>Integration of healthcare branding elements for trust-building.</li>
      <li>Secure and encrypted data handling features.</li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li>Rebranding initiatives for expanding healthcare providers.</li>
      <li>Revamping legacy websites for improved functionality and user experience.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 5,
    image: require("../assets/images/healthcare web solutions/5.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">5. Revolutionize Patient Care with Apps</span>
    <br />
    Why Invest in Healthcare Apps? Mobile apps provide a transformative platform for engaging patients, streamlining operations, and enhancing care delivery. By aligning with your specifications, Specslo ensures tailored apps that meet the dynamic needs of modern healthcare.
  </p>

  <div class="space-y-6">
    <h3 class="text4">Benefits include:</h3>
    <ul class="space-y-4">
      <li>Remote Access: Telehealth capabilities for consultations anytime, anywhere.</li>
      <li>Enhanced Care: Features like real-time monitoring and secure messaging.</li>
      <li>Operational Efficiency: Streamlined scheduling, reminders, and secure payments.</li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="list-disc list-inside space-y-2">
      <li>Rebranding initiatives for expanding healthcare providers.</li>
      <li>Revamping legacy websites for improved functionality and user experience.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 6,
    image: require("../assets/images/healthcare web solutions/6.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">6. Embracing AI: Revolutionizing Healthcare Operations</span>
    <br />
    Why Now is the Time for AI: Artificial Intelligence (AI) is not just a trend—it’s transforming the way healthcare operates.
  </p>

  <div class="space-y-6">
    <h3 class="text4">Here’s how AI can benefit your organization:</h3>
    <ul class="space-y-4">
      <li>Predictive Analytics: Identify patient risks before they escalate.</li>
      <li>Automation: Simplify repetitive tasks like billing and scheduling.</li>
      <li>Enhanced Diagnostics: Use AI tools for faster and more accurate results.</li>
      <li>Personalized Care: Provide tailored treatment plans based on patient data.</li>
    </ul>

    <h3 class="text4 pt-8">Features That Matter:</h3>
    <ul class="space-y-4">
      <li>Wearable Device Integration: Real-time data collection from smart devices to monitor patient health.</li>
      <li>Push Notifications: Medication reminders, health tips, and important updates.</li>
      <li>Emergency Alerts: Instant notifications and SOS features for critical health events.</li>
      <li>Telehealth Integration: Easy-to-use interfaces for video consultations and virtual care.</li>
      <li>AI-Powered Insights: Personalized health recommendations based on patient history.</li>
      <li>Health Tracking: Comprehensive tracking of vitals, fitness, and chronic conditions.</li>
      <li>Secure Messaging: Encrypted communication between patients and providers for enhanced care coordination.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 7,
    image: require("../assets/images/healthcare web solutions/7.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">7. Data Science Services: Unlocking Insights for Smarter Healthcare</span>
    <br />
    Data holds the power to transform healthcare, but unlocking its potential requires advanced tools and expertise. Specslo offers data science services designed to improve patient outcomes, streamline operations, and enable informed decision-making.
  </p>

  <div class="space-y-6">
    <h3 class="text4">Why Choose Data Science in Healthcare?</h3>
    <ul class="space-y-4">
      <li>Actionable Insights: Analyze patient data to identify trends and improve care.</li>
      <li>Operational Efficiency: Optimize staffing, resource allocation, and workflows.</li>
      <li>Predictive Analytics: Anticipate patient needs and disease outbreaks.</li>
      <li>Personalized Medicine: Deliver tailored treatment plans based on historical data.</li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="space-y-4">
      <li>Hospitals reducing emergency room wait times with predictive staffing.</li>
      <li>Public health agencies monitoring and managing disease outbreaks.</li>
      <li>Pharmaceutical companies optimizing drug trial processes.</li>
      <li>Insurance providers analyzing claims data to prevent fraud and improve risk assessment.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 8,
    image: require("../assets/images/healthcare web solutions/8.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">8. Custom Software for Healthcare Excellence</span>
    <br />
    Tailored Technology to Meet Complex Needs Generic software often fails to address healthcare-specific challenges. Specslo’s custom software solutions bridge the gap by delivering:
  </p>

  <div class="space-y-6">
    <ul class="space-y-4">
      <li>Streamlined Workflows: Simplify hospital and clinic operations.</li>
      <li>EHR Integration: Ensuring seamless data access and compliance.</li>
      <li>Scalable Solutions: Designed to grow with your practice.</li>
    </ul>

    <h3 class="text4 pt-8">Use Cases:</h3>
    <ul class="space-y-4">
      <li>Automated resource allocation tools for hospitals.</li>
      <li>Patient portals for enhanced engagement.</li>
      <li>Lab data management software for diagnostics.</li>
    </ul>
  </div>
</div>
`,
  },
  {
    id: 9,
    image: require("../assets/images/healthcare web solutions/9.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">9. Game Development: An Innovative Approach to Healthcare</span>
    <br />
    Gamification is an emerging trend in healthcare that can:
  </p>

  <div class="space-y-6">
    <ul class="space-y-4">
      <li>Engage Patients: Use games to encourage healthy habits and adherence to treatment plans.</li>
      <li>Educate Effectively: Create interactive training modules for healthcare professionals.</li>
      <li>Rehabilitate Patients: Develop physical therapy games to make recovery enjoyable.</li>
    </ul>

    <h3 class="text4 pt-8">Why Choose Game Development?</h3>
    <ul class="space-y-4">
      <li>Interactive and Fun: Keeps patients motivated and involved.</li>
      <li>Custom Solutions: Tailored games for specific health challenges.</li>
      <li>Cross-Audience Appeal: Suitable for children, adults, and senior care.</li>
    </ul>
  </div>
</div>
`,
  },
];
