// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-services",
          title: "services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-awards-amp-honors",
          title: "awards &amp; honors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-paper-titled-power-efficient-transceiver-design-for-full-duplex-dual-function-radar-communication-systems-accepted-for-presentation-in-the-2024-ieee-25th-international-workshop-on-signal-processing-advances-in-wireless-communications-spawc",
          title: 'Paper titled “Power-Efficient Transceiver Design for Full-Duplex Dual-Function Radar Communication Systems” accepted for...',
          description: "",
          section: "News",},{id: "news-paper-titled-service-fairness-enhancement-for-bdris-assisted-fluid-antenna-systems-accepted-for-presentation-at-the-2025-ieee-101st-vehicular-technology-conference-ieee-vtc2025-spring",
          title: 'Paper titled “Service fairness enhancement for BDRIS assisted fluid antenna systems” accepted for...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-for-presentation-at-the-2025-international-conference-on-communications-ieee-icc-titles-qos-aware-power-minimization-for-fluid-antennas-assisted-integrated-sensing-and-communication-green-transceiver-design-for-integrated-sensing-and-backscatter-communication-with-qos-demands",
          title: 'Two papers accepted for presentation at the 2025 International Conference on Communications (IEEE...',
          description: "",
          section: "News",},{id: "news-awarded-the-development-and-research-training-grant-amount-3000-from-unsw-sydney-australia",
          title: 'Awarded the Development and Research Training Grant, amount $3000, from UNSW, Sydney, Australia....',
          description: "",
          section: "News",},{id: "news-appointed-head-lab-demonstrator-for-elec9123-design-proficiency-may-sep-2025-school-of-electrical-engineering-and-telecommunications-unsw-sydney",
          title: 'Appointed Head Lab Demonstrator for ELEC9123 Design Proficiency (May–Sep 2025), School of Electrical...',
          description: "",
          section: "News",},{id: "news-paper-titled-energy-efficient-near-field-beamforming-a-review-on-practical-channel-models-published-in-mdpi-energies",
          title: 'Paper titled “Energy-Efficient Near-Field Beamforming: A Review on Practical Channel Models” published in...',
          description: "",
          section: "News",},{id: "news-paper-titled-green-transceiver-design-and-antenna-selection-for-qos-aware-integrated-sensing-and-communication-systems-accepted-for-publication-in-ieee-transactions-on-green-communications-and-networking",
          title: 'Paper titled “Green Transceiver Design and Antenna Selection for QoS-Aware Integrated Sensing and...',
          description: "",
          section: "News",},{id: "news-appointed-lab-demonstrator-for-elec3104-digital-signal-processing-sep-dec-2025-school-of-electrical-engineering-and-telecommunications-unsw-sydney",
          title: 'Appointed Lab Demonstrator for ELEC3104 Digital Signal Processing (Sep–Dec 2025), School of Electrical...',
          description: "",
          section: "News",},{id: "news-paper-drl-based-max-min-fairness-in-fluid-ris-aided-fluid-antenna-systems-accepted-for-presentation-at-ieee-globecom-2025-authors-m-anjum-ma-khan-d-mishra-h-jung-a-seneviratne",
          title: 'Paper “DRL-based Max-Min Fairness in Fluid RIS-aided Fluid Antenna Systems” accepted for presentation...',
          description: "",
          section: "News",},{id: "news-paper-drl-based-user-fairness-in-bdris-assisted-elaa-systems-accepted-in-ieee-wireless-communications-letters-authors-ma-khan-m-anjum-d-mishra-h-jung-tq-duong",
          title: 'Paper “DRL-based User Fairness in BDRIS-assisted ELAA Systems” accepted in IEEE Wireless Communications...',
          description: "",
          section: "News",},{id: "news-invited-to-serve-on-the-technical-program-committee-tpc-for-ieee-icc-2026-wireless-communications-track",
          title: 'Invited to serve on the Technical Program Committee (TPC) for IEEE ICC 2026,...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-ai-empowered-project-based-learning-at-the-unsw-s-education-festival-2025",
          title: 'Presented a poster on AI-Empowered Project-Based Learning at the UNSW’s Education Festival 2025....',
          description: "",
          section: "News",},{id: "news-presented-the-paper-drl-based-max-min-fairness-in-fluid-ris-aided-fluid-antenna-systems-authored-by-mahnoor-anjum-muhammad-abdullah-khan-deepak-mishra-haejoon-jung-and-aruna-seneviratne-at-the-4th-workshop-on-fluid-antenna-systems-fas-for-6g-held-at-ieee-globecom-2025-in-taipei-taiwan",
          title: 'Presented the paper DRL-based Max-Min Fairness in Fluid RIS-aided Fluid Antenna Systems, authored...',
          description: "",
          section: "News",},{id: "news-paper-integrating-ai-in-project-based-engineering-education-strengthening-course-design-and-assessment-integrity-accepted-for-presentation-at-the-ieee-global-engineering-education-conference-educon-2026-cairo-egypt",
          title: 'Paper Integrating AI in Project-Based Engineering Education: Strengthening Course Design and Assessment Integrity...',
          description: "",
          section: "News",},{id: "news-paper-reinforcement-learning-based-resource-allocation-in-secure-bdris-aided-movable-antenna-systems-accepted-for-presentation-at-the-ieee-international-conference-on-communications-glasgow-scotland-uk",
          title: 'Paper Reinforcement Learning-based Resource Allocation in Secure BDRIS-Aided Movable Antenna Systems accepted for...',
          description: "",
          section: "News",},{id: "news-paper-energy-efficient-cell-free-integrated-sensing-and-backscatter-communication-for-sustainable-networks-accepted-in-mdpi-energies-authors-m-anjum-d-mishra",
          title: 'Paper “Energy-efficient Cell-free Integrated Sensing and Backscatter Communication for Sustainable Networks” accepted in...',
          description: "",
          section: "News",},{id: "news-appointed-head-lab-demonstrator-for-elec4601-digital-and-embedded-systems-design-school-of-electrical-engineering-and-telecommunications-unsw-sydney",
          title: 'Appointed Head Lab Demonstrator for ELEC4601 Digital and Embedded Systems Design, School of...',
          description: "",
          section: "News",},{id: "news-recognized-as-an-exemplary-reviewer-2025-by-ieee-wireless-communications-letters-wcl",
          title: 'Recognized as an Exemplary Reviewer (2025) by IEEE Wireless Communications Letters (WCL).',
          description: "",
          section: "News",},{id: "news-invited-to-serve-on-the-technical-program-committee-tpc-for-ieee-globecom-2026-communication-amp-amp-information-system-security-track",
          title: 'Invited to serve on the Technical Program Committee (TPC) for IEEE GLOBECOM 2026,...',
          description: "",
          section: "News",},{id: "news-appointed-head-lab-demonstrator-for-elec9123-design-proficiency-may-sep-2026-school-of-electrical-engineering-and-telecommunications-unsw-sydney",
          title: 'Appointed Head Lab Demonstrator for ELEC9123 Design Proficiency (May–Sep 2026), School of Electrical...',
          description: "",
          section: "News",},{id: "news-runner-up-of-group-level-3mt-school-of-electrical-engineering-and-telecommunications-unsw-sydney",
          title: 'Runner-up of Group-Level 3MT, School of Electrical Engineering and Telecommunications, UNSW Sydney.',
          description: "",
          section: "News",},{id: "news-invited-to-serve-on-the-technical-program-committee-tpc-for-ieee-vtc-spring-2027-protocol-security-and-services-for-wireless-networks-track",
          title: 'Invited to serve on the Technical Program Committee (TPC) for IEEE VTC-Spring 2027,...',
          description: "",
          section: "News",},{id: "news-paper-full-duplex-fluid-antennas-for-integrated-sensing-and-backscatter-communication-a-drl-based-fairness-design-accepted-in-ieee-wcl-authors-m-anjum-d-mishra-a-seneviratne",
          title: 'Paper “Full-Duplex Fluid-Antennas for Integrated Sensing and Backscatter Communication: A DRL-based Fairness Design”...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%68%6E%6F%6F%72.%61%6E%6A%75%6D@%75%6E%73%77.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mahnooranjum", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37086915966/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mahnooranjum", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3317-1597", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Mahnoor-Anjum/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LAkkwYUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
