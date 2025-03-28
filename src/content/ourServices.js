// all services
export const ourServices = [
  {
    id: 1,
    title: "Web Development",
    subHeading: "Custom sites. Seamless experiences. Built around your brand.",
    image: require("../assets/images/services/web-dev1.jpeg"),
    desc: "From sleek landing pages to powerful e-commerce platforms, we build websites that load fast, look great, and convert — all aligned with your specs.",
    serviceDetails: {
      banner: require("../assets/images/services/web-dev/banner.jpeg"),
      img1: require("../assets/images/services/web-dev/1.jpeg"),
      img2: require("../assets/images/services/web-dev/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for Web Development?",
        list: [
          {
            title: "Future-Ready Solutions",
            desc: "We integrate the latest technologies, including React, Vue.js, Angular, Next.js, and WebAssembly, ensuring your web applications are scalable, secure, and future-proof.",
          },
          {
            title: "Tailored to Your Vision",
            desc: "Our client-first approach ensures your website reflects your brand identity while achieving your business objectives.",
          },
          {
            title: "Seamless Performance",
            desc: "We prioritize fast load times, mobile responsiveness, and bug-free functionality to enhance user satisfaction.",
          },
          {
            title: "End-to-End Support",
            desc: "From concept to launch and beyond, our comprehensive support ensures your web application remains high-performing and up-to-date.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/web-dev/expertise1.png"),
          title: "Single-Page Applications (SPAs)",
          list: [
            "Built using modern frameworks like React, Vue.js, and Angular.",
            "Deliver real-time updates and seamless user interactions.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/expertise2.jpeg"),
          title: "Progressive Web Apps (PWAs)",
          list: [
            "Secure payment gateways, AI-driven recommendations, and AR-powered shopping experiences",
            "Technologies include Shopify, WooCommerce, and Magento.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/expertise3.jpeg"),
          title: "Server-Side Rendered (SSR) Apps",
          list: [
            "Leveraging Next.js and Nuxt.js for pre-rendered, SEO-optimized content.",
            "Ideal for content-heavy platforms like blogs and news websites.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/expertise4.jpeg"),
          title: "E-Commerce Platforms",
          list: [
            "Features offline capabilities, push notifications, and fast load speeds.",
            "Combines mobile app functionality with web accessibility.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/expertise5.jpeg"),
          title: "Content Management Systems (CMS)",
          list: [
            "Custom solutions using WordPress, Drupal, and Joomla.",
            "Scalable and mobile-responsive designs for any industry.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/web-dev/process1.jpeg"),
          title: "Discovery & Planning",
          list: [
            "Understand business goals, target audience, and technical requirements.",
            "Perform market research and competitor analysis.",
            "Define project scope, milestones, and timelines.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/process2.jpeg"),
          title: "UI/UX Design & Prototyping",
          list: [
            "Create wireframes and interactive prototypes.",
            "Ensure user-friendly, accessible, and engaging design experiences.",
            "Iterate based on client feedback and usability testing.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/process3.jpeg"),
          title: "Development & Engineering",
          list: [
            "Implementing the app with cutting-edge technologies.",
            "Integrating APIs, databases, and third-party services.",
            "Ensuring performance optimization and security compliance",
          ],
        },
      ],
      solutionUseCases: {
        heading: "Revolutionize Your Business with Web Development Solutions",
        contentArr: [
          {
            title: "Use Case 1: E-Commerce Platforms",
            list: [
              "Example: Shopify",
              "Features: Secure payments, AR-powered shopping experiences.",
              "Impact: Reach a global audience with seamless shopping.",
            ],
          },
          {
            title: "Use Case 2: Healthcare Portals",
            list: [
              "Example: Telemedicine platforms",
              "Features: Appointment scheduling, video consultations.",
              "Impact: Improve patient accessibility and clinic efficiency.",
            ],
          },
          {
            title: "Use Case 3: Media Streaming Websites",
            list: [
              "Example: Netflix",
              "Features: Adaptive streaming, personalized playlists.",
              "Impact: On-demand content delivery for global audiences.",
            ],
          },
          {
            title: "Use Case 4: Interactive Learning Portals",
            list: [
              "Example: E-learning websites like Coursera",
              "Features: Gamified learning experiences, progress tracking.",
              "Impact: Boost student engagement and accessibility.",
            ],
          },
          {
            title: "Use Case 5: AR-Powered Real Estate Websites",
            list: [
              "Example: Virtual property tours",
              "Features: 360-degree views, immersive experiences.",
              "Impact: Revolutionize property showcasing and buying.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "App Development",
    subHeading: "Apps that move with your users — and your goals.",
    image: require("../assets/images/services/app-dev1.jpeg"),
    desc: "Whether Android or iOS, we create intuitive, feature-rich mobile apps tailored to your business logic, user flow, and long-term growth.",
    serviceDetails: {
      banner: require("../assets/images/services/app-dev/banner.jpeg"),
      img1: require("../assets/images/services/app-dev/1.jpeg"),
      img2: require("../assets/images/services/app-dev/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for App Development?",
        list: [
          {
            title: "Future-Ready Solutions",
            desc: "We stay ahead of the curve with AI-powered apps, 5G optimization, and IoT integration, ensuring your app is innovative, scalable, and future-proof.",
          },
          {
            title: "Tailored to Your Vision",
            desc: "From initial strategy to deployment, our client-first approach ensures your app is built to align with your goals and audience needs.",
          },
          {
            title: "Seamless Performance",
            desc: "Our team of experts delivers apps with flawless functionality, lightning-fast speed, and Specslo-grade quality.",
          },
          {
            title: "End-to-End Support",
            desc: "We’re with you at every step, offering development, deployment, and post-launch maintenance to ensure your app thrives in the long term.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/app-dev/expertise1.jpeg"),
          title: "Native Apps",
          list: [
            "Optimized for Performance and Reliability.",
            "Our native apps are designed for optimal performance, leveraging platform-specific technologies like Swift, Kotlin, and Objective-C. These apps provide superior speed, full device integration, and a seamless user experience.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise2.jpeg"),
          title: "Cross-Platform Apps",
          list: [
            "One Codebase, Multiple Platforms We develop cross-platform apps using advanced frameworks like Flutter, React Native, and Xamarin, ensuring consistent functionality and design across iOS, Android, and other platforms while reducing development time and costs.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise3.jpeg"),
          title: "Progressive Web Apps (PWAs)",
          list: [
            "Web Meets Native Our PWAs combine the best of web and mobile experiences. They are responsive, secure, and lightweight, providing native app-like functionality directly through web browsers, eliminating the need for app store downloads.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise4.png"),
          title: "AI-Enabled Apps",
          list: [
            "Smarter, Data-Driven Solutions We integrate Artificial Intelligence (AI) capabilities into your apps, such as Machine Learning (ML), Natural Language Processing (NLP), and computer vision. These apps deliver personalized recommendations, predictive analytics, and intelligent automation for enhanced user engagement.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise5.png"),
          title: "IoT-Integrated Apps",
          list: [
            "Connected Devices, Smarter Interactions",
            "Our IoT-enabled apps connect seamlessly with smart devices, enabling features like real-time monitoring, automation, and data synchronization across devices. Whether for smart homes, healthcare wearables, or industrial IoT, our solutions enhance connectivity.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise6.jpeg"),
          title: "Cloud-Based Apps",
          list: [
            "Scalable and Globally Accessible Harness the power of leading cloud platforms like AWS, Google Cloud, and Microsoft Azure to create apps that are scalable, secure, and globally accessible. From data storage to app hosting, we build robust cloud-native solutions for businesses of all sizes.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise7.jpeg"),
          title: "Augmented Reality (AR) & Virtual Reality (VR) Apps",
          list: [
            "Engaging, Immersive Experiences We develop AR/VR-powered apps for industries like e-commerce, gaming, and real estate, offering features such as virtual product try-ons, immersive gaming environments, and 3D property tours to enhance user interaction.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise8.jpeg"),
          title: "Blockchain-Based Apps",
          list: [
            "Secure, Transparent, Decentralized Our blockchain app solutions are perfect for industries requiring secure transactions, decentralized systems, and smart contracts. Use cases include crypto wallets, NFT platforms, and supply chain management.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise9.jpeg"),
          title: "Wearable Technology Apps",
          list: [
            "Seamless Experiences on the Go",
            "We design apps for wearable devices, such as smartwatches, fitness trackers, and health monitors, enabling real-time data collection and enhancing user convenience across industries like healthcare, fitness, and lifestyle.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise10.jpeg"),
          title: "Healthcare Apps",
          list: [
            "Revolutionizing Patient Care We create secure, HIPAA-compliant apps for telemedicine, patient management, appointment scheduling, health monitoring, and fitness tracking. By integrating IoT and AI, these apps empower healthcare providers and improve patient outcomes.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise11.jpeg"),
          title: "Gaming Apps",
          list: [
            "Innovative, Interactive, and Engaging Our gaming apps feature stunning graphics, AI-driven gameplay, and multiplayer capabilities. We use platforms like Unity and Unreal Engine to create engaging gaming experiences for mobile and cross-platform play.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise12.jpeg"),
          title: "Real Estate Apps",
          list: [
            "Simplifying Property Transactions Our real estate apps feature virtual property tours, agent-buyer communication tools, customizable search filters, and location-based suggestions. They streamline the property search process, connecting buyers, sellers, and agents effortlessly.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise13.jpeg"),
          title: "Enterprise Mobility Solutions",
          list: [
            "Empower Your Workforce We build enterprise apps that improve productivity, streamline operations, and enhance collaboration within organizations. These apps are tailored for workflows, employee management, and real-time analytics.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/app-dev/process1.jpeg"),
          title: "Discovery & Planning",
          list: [
            "Understand business goals, target audience, and technical requirements.",
            "Perform market research and competitor analysis.",
            "Define project scope, milestones, and timelines.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/process2.jpeg"),
          title: "UI/UX Design & Prototyping",
          list: [
            "Create wireframes and interactive prototypes.",
            "Ensure user-friendly, accessible, and engaging design experiences.",
            "Iterate based on client feedback and usability testing.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/process3.jpeg"),
          title: "Development & Engineering",
          list: [
            "Implementing the app with cutting-edge technologies.",
            "Integrating APIs, databases, and third-party services.",
            "Ensuring performance optimization and security compliance",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "Custom Software Development",
    subHeading: "Your business is unique. Your software should be too.",
    image: require("../assets/images/services/custom-software1.jpeg"),
    desc: "We build scalable, secure, high-performance solutions that solve your real problems — not generic tools, but software shaped by your specs.",
    serviceDetails: {
      banner: require("../assets/images/services/custom-software/banner.jpeg"),
      img1: require("../assets/images/services/custom-software/1.jpeg"),
      img2: require("../assets/images/services/custom-software/2.png"),
      whyChooseContent: {
        heading: "Why Choose Specslo for Custom Software Development?",
        list: [
          {
            title: "Future-Ready Solutions",
            desc: "We develop software that fits your specific requirements—no one-size-fits-all approach.",
          },
          {
            title: "Scalability & Flexibility",
            desc: "Our solutions grow with your business, adapting to evolving needs and challenges.",
          },
          {
            title: "Future-Ready Tech",
            desc: "We integrate AI, blockchain, IoT, and cloud computing for cutting-edge performance.",
          },
          {
            title: "Seamless Integration",
            desc: "Connect with existing systems, APIs, and platforms to enhance business efficiency.",
          },
          {
            title: "Security & Compliance",
            desc: "We prioritize data security and compliance with industry regulations to keep your business protected.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/custom-software/expertise1.png"),
          title: "Enterprise Software Solutions",
          list: [
            "Custom ERP and CRM development",
            "Workflow automation and process optimization",
            "Secure financial and HR management systems",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/expertise2.jpeg"),
          title: "AI-Powered Software",
          list: [
            "Intelligent automation and predictive analytics",
            "AI-driven customer support solutions",
            "Natural Language Processing (NLP) for data insights",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/expertise3.jpeg"),
          title: "Cloud-Based Applications",
          list: [
            "SaaS platforms for business efficiency",
            "Cloud migration and optimization",
            "Serverless architecture for high scalability",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/expertise4.jpeg"),
          title: "Blockchain Solutions",
          list: [
            "Secure, decentralized applications (dApps)",
            "Smart contract development and auditing",
            "Digital identity and asset management",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/expertise5.jpeg"),
          title: "IoT-Enabled Software",
          list: [
            "Smart device integration and automation",
            "IoT data processing and real-time analytics",
            "Remote monitoring and predictive maintenance",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/expertise6.jpeg"),
          title: "Cloud-Based Web Applications",
          list: [
            "Tailored cross-platform and native apps",
            "API development for seamless connectivity",
            "Scalable, high-performance backend solutions",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/custom-software/process1.jpeg"),
          title: "Product Scope",
          list: [
            "A structured, in-depth process that aligns your vision with business goals.",
            "Phase Deliverables:\n\nRequirements Analysis\nUser Stories\nBusiness Process Modeling (BPMN)\nSitemap\nTech Research & Feasibility Study\nUX Personas & Stakeholder Analysis",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/process2.jpeg"),
          title: "UI/UX Design",
          list: [
            "We start by creating key screens and then extend the design across the entire product.",
            "Phase Deliverables:\n  UI Concept\nDesign System\nFull Product UX/UI",
          ],
        },
        {
          img: require("../assets/images/services/custom-software/process3.jpeg"),
          title: "Development & Testing",
          list: [
            "After approval, we begin development with progressive module delivery and ongoing testing.",
            "Phase Deliverables: \n\nProgressive Module Delivery\nCodebase Documentation\nContinuous Testing & Feedback",
          ],
        },
      ],
      solutionUseCases: {
        heading:
          "Revolutionize Your Business with Custom Software Development Solutions",
        contentArr: [
          {
            title: "Use Case 1: AI-Driven Customer Support",
            list: [
              "Example: AI chatbots for instant customer assistance.",
              "Features: Automated responses, natural language understanding, and personalized engagement.",
              "Impact: Reduces response time and improves customer satisfaction.",
            ],
          },
          {
            title: "Use Case 2: Automated Logistics Management",
            list: [
              "Example: AI-powered route optimization software.",
              "Features: Real-time tracking, automated scheduling, and predictive analytics.",
              "Impact: Reduces fuel costs and improves delivery efficiency.",
            ],
          },
          {
            title: "Use Case 3: Cloud-Based SaaS Platforms",
            list: [
              "Example: Scalable business management software.",
              "Features: Remote accessibility, multi-user collaboration, and automated data backups.",
              "Impact: Enhances operational efficiency and reduces IT overhead.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: "AI Solutions",
    subHeading: "Make your systems smarter — the way you need them.",
    image: require("../assets/images/services/ai1.png"),
    desc: "We integrate AI where it matters most : automation, predictions, chatbots, and beyond — customized to optimize your workflows and decisions.",
    serviceDetails: {
      banner: require("../assets/images/services/ai/banner.jpeg"),
      img1: require("../assets/images/services/ai/1.png"),
      img2: require("../assets/images/services/ai/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for Artificial Intelligence?",
        list: [
          {
            title: "AI Customization for Your Business",
            desc: "We design AI-driven solutions that fit your specific needs—no generic models, just tailored intelligence.",
          },
          {
            title: "Data-Driven Intelligence",
            desc: "Leverage AI to analyze data, automate processes, and predict outcomes with precision.",
          },
          {
            title: "Scalable AI Infrastructure",
            desc: "Our AI models grow with your business, ensuring they remain adaptable and efficient.",
          },
          {
            title: "Seamless Integration",
            desc: "We integrate AI seamlessly into your existing software, CRMs, ERPs, and digital ecosystems.",
          },
          {
            title: "AI-Powered Security & Compliance",
            desc: "Enhance cybersecurity and ensure regulatory compliance with AI-driven monitoring and risk detection.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/ai/expertise1.jpeg"),
          title: "AI-Powered Chatbots & Virtual Assistants",
          list: [
            "AI-driven customer support bots for real-time assistance.",
            "Voice-enabled AI agents for seamless interactions.",
            "Chatbots for healthcare, finance, e-commerce, and more.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise2.jpeg"),
          title: "Predictive Analytics & AI-Driven Insights",
          list: [
            "Advanced data analysis to forecast trends and optimize decision-making.",
            "AI-powered risk assessment and fraud detection.",
            "Personalized recommendations based on behavioral insights.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise3.jpeg"),
          title: "Computer Vision & Image Recognition",
          list: [
            "AI-powered diagnostics in healthcare (X-rays, MRIs, CT scans).",
            "Automated quality control for manufacturing and logistics.",
            "Facial recognition and security surveillance solutions.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise4.jpeg"),
          title: "Natural Language Processing (NLP)",
          list: [
            "AI-driven text analysis for sentiment detection and feedback evaluation.",
            "Automated transcription, summarization, and document processing.",
            "Intelligent voice assistants and AI-powered search engines.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise5.jpeg"),
          title: "AI-Powered Automation & Process Optimization",
          list: [
            "AI-driven robotic process automation (RPA) for business efficiency.",
            "Smart workflow automation for HR, finance, and supply chain management.",
            "AI-enhanced CRM and ERP systems for enterprise-level optimization.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise6.jpeg"),
          title: "AI for Healthcare & Life Sciences",
          list: [
            "AI-powered diagnostics and disease prediction.",
            "Automated patient management and personalized treatment recommendations.",
            "Drug discovery and clinical trial optimization with AI algorithms.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise7.png"),
          title: "AI for Marketing & Personalization",
          list: [
            "AI-powered customer segmentation and targeted marketing campaigns.",
            "Chatbots and automated responses to improve user engagement.",
            "AI-driven content recommendations and dynamic ad placement.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise8.jpeg"),
          title: "AI in Finance & Fraud Prevention",
          list: [
            "AI-powered risk assessment models for banking and insurance.",
            "Automated fraud detection in real-time transactions.",
            "AI-driven credit scoring and investment analysis.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/ai/process1.jpeg"),
          title: "AI Strategy & Consulting",
          list: [
            "We assess your business needs and define a clear AI roadmap tailored to your objectives.",
            "Deliverables:\n AI feasibility study\n Use case identification\n AI implementation roadmap",
          ],
        },
        {
          img: require("../assets/images/services/ai/process2.jpeg"),
          title: "Data Collection & Model Training",
          list: [
            "We gather and preprocess data to train AI models that deliver high accuracy and meaningful insights.",
            "Deliverables: \n Data extraction and cleaning\n AI model training and fine-tuning\n Performance evaluation and optimization",
          ],
        },
        {
          img: require("../assets/images/services/ai/process3.jpeg"),
          title: "AI Model Development & Integration",
          list: [
            "We build and deploy AI models that integrate seamlessly with your existing applications.",
            "Deliverables: \n AI model architecture design\n API-based AI integration\n Real-time AI deployment",
          ],
        },
      ],
      solutionUseCases: {
        heading: "Revolutionize Your Business with AI Solutions",
        contentArr: [
          {
            title: "Use Case 1: AI-Powered Healthcare Diagnostics",
            list: [
              "Example: AI-driven analysis of X-rays and MRI scans.",
              "Features: Automated diagnosis, anomaly detection, and predictive health insights.",
              "Impact: Faster, more accurate diagnostics with reduced human error.",
            ],
          },
          {
            title: "Use Case 2: AI in E-Commerce & Customer Support",
            list: [
              "Example: AI-powered chatbots for personalized customer assistance.",
              "Features: 24/7 customer service, automated order tracking, and AI-driven recommendations.",
              "Impact: Improved customer engagement and increased conversion rates.",
            ],
          },
          {
            title: "Use Case 3: AI-Driven Financial Risk Analysis",
            list: [
              "Example: AI models for fraud detection and credit risk assessment.",
              "Features: Real-time fraud detection, AI-based loan approvals, and investment predictions.",
              "Impact: Reduced fraud losses and improved decision-making for financial institutions.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    subHeading: "From raw data to real impact.",
    image: require("../assets/images/services/data-science1.jpeg"),
    desc: "We turn your data into actionable insights with predictive models, dashboards, and trend analysis — helping you stay three steps ahead.",
    serviceDetails: {
      banner: require("../assets/images/services/data-science/banner.jpeg"),
      img1: require("../assets/images/services/data-science/1.png"),
      img2: require("../assets/images/services/data-science/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for Data Science?",
        list: [
          {
            title: "Tailored Data Strategies",
            desc: "We design data-driven solutions specifically aligned with your business goals.",
          },
          {
            title: "Advanced AI & ML Integration",
            desc: "Enhance decision-making with predictive analytics, automation, and intelligent algorithms.",
          },
          {
            title: "Seamless Data Processing",
            desc: "From data collection to visualization, our solutions ensure accuracy, security, and efficiency.",
          },
          {
            title: "Scalable & Secure Solutions",
            desc: "Handle vast amounts of data with enterprise-grade security and compliance.",
          },
          {
            title: "Industry-Specific Data Models",
            desc: "We build AI-powered models tailored for diverse industries, optimizing performance and outcomes.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/data-science/expertise1.jpeg"),
          title: "Predictive Analytics & Forecasting",
          list: [
            "Identify trends and future outcomes using data-driven predictions.",
            "Optimize inventory, customer behavior forecasting, and financial planning.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise2.jpeg"),
          title: "Machine Learning & AI Model Development",
          list: [
            "Build custom AI models for automation, fraud detection, and personalized recommendations.",
            "Implement reinforcement learning, deep learning, and NLP models.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise3.jpeg"),
          title: "Big Data Processing & Management",
          list: [
            "Process and analyze massive datasets efficiently with Hadoop, Spark, and cloud-based data pipelines.",
            "Design scalable architectures for real-time data processing.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise4.jpeg"),
          title: "Data Visualization & Business Intelligence",
          list: [
            "Transform complex data into interactive dashboards with Power BI, Tableau, and Looker.",
            "Enable better decision-making through intuitive reporting and analytics.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise5.jpeg"),
          title: "NLP & Text Analytics",
          list: [
            "Extract meaningful insights from text data using Natural Language Processing.",
            "Automate customer service with AI-driven chatbots and sentiment analysis.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise6.jpeg"),
          title: "Image Recognition & Computer Vision",
          list: [
            "Implement AI-powered image classification, object detection, and facial recognition.",
            "Enhance medical imaging, security surveillance, and retail analytics.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise7.jpeg"),
          title: "Data Engineering & ETL Solutions",
          list: [
            "Design and implement data pipelines for efficient data extraction, transformation, and loading.",
            "Optimize database performance and ensure seamless data integration.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/expertise8.jpeg"),
          title: "Fraud Detection & Risk Analytics",
          list: [
            "Build AI models to detect anomalies, fraud, and cyber threats in real time.",
            "Develop automated fraud prevention systems for finance, insurance, and e-commerce.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/data-science/process1.jpeg"),
          title: "Data Strategy & Consulting",
          list: [
            "Assess your business needs and define a tailored data strategy.",
            "Identify key KPIs and measurable objectives.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/process2.jpeg"),
          title: "Data Collection & Cleaning",
          list: [
            "Extract structured and unstructured data from multiple sources.",
            "Process and clean data to ensure accuracy and reliability.",
          ],
        },
        {
          img: require("../assets/images/services/data-science/process3.jpeg"),
          title: "AI Model Development & Integration",
          list: [
            "Develop machine learning and AI models for predictive insights.",
            "Integrate AI models into existing applications and workflows.",
          ],
        },
      ],
      solutionUseCases: {
        heading: "Revolutionize Your Business with Data Science Solutions",
        contentArr: [
          {
            title: "Use Case 1: AI-Powered Healthcare Analytics",
            list: [
              "Example: Predict patient readmission risks and optimize treatment plans.",
              "Impact: Improved patient outcomes and reduced operational costs.",
            ],
          },
          {
            title: "Use Case 2: Fraud Detection in Banking",
            list: [
              "Example: AI-powered risk analysis and real-time fraud detection.",
              "Impact: Enhanced security, reduced fraudulent transactions.",
            ],
          },
          {
            title: "Use Case 3: AI-Driven E-Commerce Personalization",
            list: [
              "Example: AI-powered recommendation engines for personalized shopping.",
              "Impact: Increased conversion rates and customer satisfaction.",
            ],
          },
          {
            title: "Use Case 4: Smart Logistics & Supply Chain Optimization",
            list: [
              "Example: Predictive analytics for route optimization and inventory forecasting.",
              "Impact: Reduced logistics costs and enhanced efficiency.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 6,
    title: "Game Development",
    subHeading: "Bring your game specs to life — across any platform.",
    image: require("../assets/images/services/game-dev1.jpeg"),
    desc: "From concept to launch, we develop immersive 2D/3D games, multiplayer systems, and real-time environments tailored to your creative vision.",
    serviceDetails: {
      banner: require("../assets/images/services/game-dev/banner.jpeg"),
      img1: require("../assets/images/services/game-dev/1.jpeg"),
      img2: require("../assets/images/services/game-dev/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for Game Development?",
        list: [
          {
            title: "Next-Gen Game Engines",
            desc: "Leverage the power of Unity and Unreal Engine to create visually stunning, high-performance games.",
          },
          {
            title: "Custom Game Solutions",
            desc: "Every game is uniquely designed to align with your vision, audience, and business goals.",
          },
          {
            title: "End-to-End Development",
            desc: "From concept art to launch, we handle the full development cycle, ensuring a seamless process.",
          },
          {
            title: "Multiplatform Support",
            desc: "Deploy your games on PC, Console, Mobile, AR, and VR for maximum reach.",
          },
          {
            title: "In-Game Monetization",
            desc: "We help implement ads, in-app purchases, and premium content strategies for revenue generation.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/game-dev/expertise1.jpeg"),
          title: "2D/3D Game Design",
          list: [
            "Visually stunning and engaging games for PC, console, and mobile.",
            "High-quality character modeling, animation, and environment design.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise2.jpeg"),
          title: "Unity Game Development",
          list: [
            "Cross-platform games powered by Unity’s robust and flexible engine.",
            "Supports mobile, desktop, console, and AR/VR gaming.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise3.jpeg"),
          title: "Unreal Engine Game Development",
          list: [
            "High-performance, realistic games with advanced physics and stunning graphics.",
            "Best for AAA titles, simulation games, and VR experiences.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise4.jpeg"),
          title: "AR Game Development",
          list: [
            "Augmented reality experiences that merge digital and real-world interactions.",
            "Ideal for interactive storytelling, gaming, and brand engagement.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise5.jpeg"),
          title: "VR Game Development",
          list: [
            "Immersive virtual reality games designed for Oculus, HTC Vive, and PlayStation VR.",
            "Realistic physics and enhanced player interactions.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise6.jpeg"),
          title: "Multiplayer Game Development",
          list: [
            "Real-time multiplayer functionality for interactive and engaging gameplay.",
            "Supports PvP, co-op, and MMO games.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise7.jpeg"),
          title: "Educational & Training Games",
          list: [
            "Gamified learning solutions for education, corporate training, and skill-building.",
            "Engaging formats to improve retention and effectiveness.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise8.jpeg"),
          title: "Storyboarding & Concept Art",
          list: [
            "Crafting compelling characters, environments, and narratives.",
            "Lays the foundation for immersive storytelling and gameplay.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise9.jpeg"),
          title: "Game Testing & QA",
          list: [
            "Comprehensive testing for bug-free, smooth, and optimized gameplay.",
            "Ensures high frame rates, responsiveness, and performance.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/expertise10.jpeg"),
          title: "In-Game Monetization Strategies",
          list: [
            "Implement ads, in-app purchases, subscriptions, and premium features.",
            "Drive revenue without compromising player experience.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/game-dev/process1.jpeg"),
          title: "Game Concept & Strategy",
          list: [
            "Define the gameplay mechanics, target audience, and business objectives.",
            "Research market trends and competitor games.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/process2.jpeg"),
          title: "Storyboarding & Concept Design",
          list: [
            "Develop characters, environments, and in-game interactions.",
            "Create compelling narratives for player engagement.",
          ],
        },
        {
          img: require("../assets/images/services/game-dev/process3.jpeg"),
          title: "Game Development & Engineering",
          list: [
            "Implement gameplay mechanics, AI behaviors, and multiplayer features.",
            "Develop cross-platform compatibility for seamless gaming.",
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title: "UI/UX Design",
    subHeading: "Specs-led design that speaks to your users.",
    image: require("../assets/images/services/uiux1.jpeg"),
    desc: "Our design team creates interfaces that are not just beautiful — but functional, accessible, and aligned with your user journey and goals.",
    serviceDetails: {
      banner: require("../assets/images/services/uiux/banner.jpeg"),
      img1: require("../assets/images/services/uiux/1.jpeg"),
      img2: require("../assets/images/services/uiux/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose Specslo for UI/UX Design?",
        list: [
          {
            title: "User-First Approach",
            desc: "We prioritize intuitive and research-backed design solutions that resonate with users.",
          },
          {
            title: "Seamless User Journeys",
            desc: "Every interaction is optimized for clarity, accessibility, and efficiency.",
          },
          {
            title: "Cross-Device Compatibility",
            desc: "Responsive designs that function flawlessly across desktop, mobile, and tablet devices.",
          },
          {
            title: "Scalable & Future-Ready",
            desc: "Our designs evolve with your brand and business needs for long-term impact.",
          },
          {
            title: "Brand-Centric Creativity",
            desc: "We merge strategy and creativity to deliver unique and memorable user experiences.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/uiux/expertise1.jpeg"),
          title: "User Research & Analysis",
          list: [
            "Understanding user needs, pain points, and behaviors.",
            "Conducting market research and competitor analysis.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise2.jpeg"),
          title: "Wireframing & Prototyping",
          list: [
            "Early-stage visual layouts for effective user flow mapping.",
            "Interactive prototypes for testing and iteration.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise3.jpeg"),
          title: "Interactive UI Design",
          list: [
            "Engaging, intuitive, and visually appealing interfaces.",
            "Designed to enhance user engagement and satisfaction.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise4.jpeg"),
          title: "Responsive Design",
          list: [
            "Optimized layouts for desktop, tablet, and mobile devices.",
            "Ensuring adaptability across all screen sizes.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise5.jpeg"),
          title: "Brand Integration",
          list: [
            "Seamless incorporation of your brand’s visual identity.",
            "Maintaining consistency in colors, typography, and style.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise6.jpeg"),
          title: "Usability Testing",
          list: [
            "Ensuring smooth functionality through real-user feedback.",
            "Refining interactions to enhance ease of use.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise7.png"),
          title: "Accessibility Design",
          list: [
            "Designing for inclusivity and WCAG compliance.",
            "Ensuring all users, including those with disabilities, can interact effortlessly.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise8.jpeg"),
          title: "Visual Design",
          list: [
            "Eye-catching layouts and UI elements that reinforce brand identity.",
            "Creating immersive and appealing user experiences.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/expertise9.jpeg"),
          title: "Design System Development",
          list: [
            "Establishing consistent UI components and design guidelines.",
            "Enhancing scalability and maintaining uniformity across platforms.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/uiux/process1.jpeg"),
          title: "Discovery & Planning",
          list: [
            "Understand business goals, target audience, and technical requirements.",
            "Perform market research and competitor analysis.",
            "Define project scope, milestones, and timelines.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/process2.jpeg"),
          title: "UI/UX Design & Prototyping",
          list: [
            "Create wireframes and interactive prototypes.",
            "Ensure user-friendly, accessible, and engaging design experiences.",
            "Iterate based on client feedback and usability testing.",
          ],
        },
        {
          img: require("../assets/images/services/uiux/process3.jpeg"),
          title: "Development & Engineering",
          list: [
            "Implementing the app with cutting-edge technologies.",
            "Integrating APIs, databases, and third-party services.",
            "Ensuring performance optimization and security compliance",
          ],
        },
      ],
    },
  },
];
