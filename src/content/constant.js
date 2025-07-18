import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import moonShapeImg from "../assets/images/yellow-moon-shape.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { FaBrain } from "react-icons/fa";

export { logo, circleImg, moonShapeImg };

export const companyDetails = {
  email: "support@specslo.com",
  location: "Jupiter Plaza , Sector-4, Udaipur, India",
  phone: "+91-7597406130",
  whatsapp: "https://wa.me/917597406130",
  instagram: "https://www.instagram.com/specslo",
  linkedin: "https://www.linkedin.com/company/specslo/",
  youtube: "https://www.youtube.com/@speccslo",
  x: "https://x.com/specslo",
  facebook: "https://www.facebook.com/specslo",
};

// industries
export const industries = [
  {
    id: 1,
    title: "FinTech and Banking",
    icon: "/assets/images/icons/FinTech and Banking.png",
    image: require("../assets/images/industries/Finance & Banking.webp"),
  },
  {
    id: 2,
    title: "Healthcare and Biotech",
    icon: "/assets/images/icons/Healthcare and Biotech.png",
    image: require("../assets/images/industries/Healthcare.webp"),
  },
  {
    id: 3,
    title: "E-commerce and Retail",
    icon: "/assets/images/icons/E-commerce and Retail.png",
    image: require("../assets/images/industries/E-commerce & Retail.webp"),
  },
  {
    id: 4,
    title: "Gaming and Entertainment",
    icon: "/assets/images/icons/Gaming and Entertainment.png",
    image: require("../assets/images/industries/Game.webp"),
  },
  {
    id: 5,
    title: "Logistics and Supply Chain Management",
    icon: "/assets/images/icons/Logistics and Supply Chain Management.png",
    image: require("../assets/images/industries/Logistics & Supply Chain.webp"),
  },
  {
    id: 6,
    title: "Education and E-Learning",
    icon: "/assets/images/icons/Education and E-Learning.png",
    image: require("../assets/images/industries/Education.webp"),
  },
  {
    id: 7,
    title: "Restaurants and Hotels",
    icon: "/assets/images/icons/Restaurants and Hotels.png",
    image: require("../assets/images/industries/Restaurants and Hotels.webp"),
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
    icon: <LuBrainCircuit size={30} />,
    title: "Lead with AI Innovation",
    description:
      "Advance real-world AI applications — especially in healthcare, where smart diagnostics, predictive care, and automated systems can transform patient outcomes.",
  },
  {
    icon: <IoMdGlobe size={30} />,
    title: "Go Global, Stay Custom",
    description:
      "Expand Specslo’s global reach while delivering personalized, specs-based solutions to every client, everywhere.",
  },
  {
    icon: <RiTeamLine size={30} />,
    title: "Redefine User Experience",
    description:
      "Deliver seamless, intuitive digital experiences across all platforms — making every interaction meaningful and efficient.",
  },
  {
    icon: <IoChatbubblesOutline size={30} />,
    title: "Expand Solutions for Modern Business",
    description:
      "Grow our services to meet evolving digital needs and become your go-to partner for transformative technology.",
  },
  {
    icon: <IoDiamondOutline size={30} />,
    title: "Build Sustainable Tech",
    description:
      "Blend innovation with responsibility by integrating eco-conscious, ethical development practices into everything we build.",
  },
  {
    icon: <FaBrain size={30} />,
    title: "Empower Through Data & Intelligence",
    description:
      "Leverage AI, ML, and data science to help businesses make smarter decisions, faster — shaping a future that’s proactive, not reactive.",
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

// web development portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    title: "5G Homes",
    image: require("../assets/images/portfolio/web development/5ghomes.webp"),
    serviceType: "Web Development",
  },
  {
    id: 2,
    title: "Autopilot",
    image: require("../assets/images/portfolio/web development/Autopilot.png"),
    serviceType: "Web Development",
  },
  {
    id: 3,
    title: "Bayut",
    image: require("../assets/images/portfolio/web development/bayut.webp"),
    serviceType: "Web Development",
  },
  {
    id: 4,
    title: "Cold Creekcap",
    image: require("../assets/images/portfolio/web development/cold creekcap.webp"),
    serviceType: "Web Development",
  },
  {
    id: 5,
    title: "College Nutritionist",
    image: require("../assets/images/portfolio/web development/collegenutritionist.png"),
    serviceType: "Web Development",
  },
  {
    id: 6,
    title: "Leadership.net",
    image: require("../assets/images/portfolio/web development/leadership.net.png"),
    serviceType: "Web Development",
  },
  {
    id: 7,
    title: "Menissa Caterings",
    image: require("../assets/images/portfolio/web development/menissa caterings.webp"),
    serviceType: "Web Development",
  },
  {
    id: 8,
    title: "Think Reality",
    image: require("../assets/images/portfolio/web development/think reality.webp"),
    serviceType: "Web Development",
  },
];

// app development portfolio
export const appDevelopmentPortfolio = [
  {
    id: 1,
    title: "Cryptopadie",
    image: require("../assets/images/portfolio/app development/cryptopadie.png"),
    serviceType: "App Development",
  },
  {
    id: 2,
    title: "Doctor Plus",
    image: require("../assets/images/portfolio/app development/doctorplus.png"),
    serviceType: "App Development",
  },
  {
    id: 3,
    title: "Dubai Travel Guide",
    image: require("../assets/images/portfolio/app development/dubai travel guide.webp"),
    serviceType: "App Development",
  },
  {
    id: 4,
    title: "Elora Hair Palour",
    image: require("../assets/images/portfolio/app development/elora hair palour.webp"),
    serviceType: "App Development",
  },
  {
    id: 5,
    title: "Evans Francis",
    image: require("../assets/images/portfolio/app development/evans francis.webp"),
    serviceType: "App Development",
  },
  {
    id: 6,
    title: "House of Deliverance",
    image: require("../assets/images/portfolio/app development/house of deliverance.png"),
    serviceType: "App Development",
  },
  {
    id: 7,
    title: "MyBitsShop",
    image: require("../assets/images/portfolio/app development/mybitsshop.webp"),
    serviceType: "App Development",
  },
  {
    id: 8,
    title: "Namaz",
    image: require("../assets/images/portfolio/app development/namaz.webp"),
    serviceType: "App Development",
  },
  {
    id: 9,
    title: "Potea",
    image: require("../assets/images/portfolio/app development/potea.webp"),
    serviceType: "App Development",
  },
  {
    id: 10,
    title: "Rentop",
    image: require("../assets/images/portfolio/app development/rentop.png"),
    serviceType: "App Development",
  },
];

// game development portfolio
export const gameDevelopmentPortfolio = [
  {
    id: 1,
    title: "3D Bowling Game",
    image: require("../assets/images/portfolio/game development/3d bowling game.png"),
    serviceType: "Game Development",
  },
  {
    id: 2,
    title: "Car Stunt Extreme Racing",
    image: require("../assets/images/portfolio/game development/car stunt extreme racing.png"),
    serviceType: "Game Development",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.jpg"),
    description:
      "Our custom website design services are tailored to reflect your brand’s identity and vision. We work closely with you to create a website that is visually appealing, user-friendly, and optimized for performance. Whether it's a portfolio, business site, or blog, we ensure your website stands out. Our designs are responsive, ensuring a great user experience on any device.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.jpg"),
    description:
      "We specialize in building scalable, secure, and high-performing e-commerce platforms. Whether you're launching a new online store or enhancing an existing one, we integrate the best payment gateways, inventory management systems, and marketing tools. Our solutions are designed to boost sales and provide customers with a seamless shopping experience.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.jpg"),
    description:
      "Our Content Management System (CMS) solutions make it easy for businesses to manage their website’s content. We work with popular CMS platforms like WordPress, Joomla, and Drupal to create flexible, easy-to-use interfaces. With our CMS, you can easily update your website, add new content, and manage media without needing technical expertise.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.jpg"),
    description:
      "Our API integration services connect your website with third-party tools and services, enhancing its functionality and performance. From payment gateways to CRM systems, we ensure seamless communication between your website and external platforms. We provide custom API integrations that meet your specific business requirements, streamlining operations and improving efficiency.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.jpg"),
    description:
      "We provide comprehensive website maintenance and support to keep your site secure, updated, and performing optimally. Our services include regular updates, security enhancements, and performance monitoring to prevent potential issues. Whether it's fixing bugs, optimizing speed, or ensuring compatibility with new technologies, we’ve got you covered.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.jpg"),
    description:
      "Our iOS app development services ensure that your app is optimized for the Apple ecosystem. We focus on delivering high-performance, user-friendly applications tailored to meet the unique needs of iOS users. Whether it’s for iPhone, iPad, or Apple Watch, we create seamless experiences. From concept to launch, we prioritize quality and usability.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.jpg"),
    description:
      "With our Android app development services, we create robust and feature-rich applications for Android devices. We work with the latest Android frameworks to ensure smooth performance across various devices. Our apps are designed for scalability and longevity. Trust us to bring your Android app vision to life with precision and speed.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.jpg"),
    description:
      "Our cross-platform app development services enable you to reach a broader audience by creating apps that work seamlessly across both iOS and Android platforms. By using technologies like React Native and Flutter, we ensure consistent user experiences and reduce time-to-market. Maximize your app’s reach while saving on development costs with our solutions.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.jpg"),
    description:
      "We believe that the design is crucial to app success. Our UI/UX design services focus on creating intuitive, engaging, and aesthetically pleasing designs. We research your target audience to build interfaces that are easy to navigate. Our goal is to make sure users love using your app while ensuring it’s functional and visually appealing.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.jpg"),
    description:
      "Before launching your app, we conduct thorough testing to ensure it’s bug-free, secure, and optimized. Our testing includes performance, usability, and compatibility checks across multiple devices and platforms. Once your app passes all tests, we guide you through the deployment process, ensuring a smooth launch on the App Store or Google Play.",
  },
];
