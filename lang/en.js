// ---------- Navbar titles
const enNavbarData = {
  title: " Zhihao He ",
  Home: "Home",
  publications: "Publications",
  CV: "CV",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "Zhihao He",
  jobTitle: "Ph.D. Candidate",
  home_title: "About me",
  home_content: `
  <div>
    <p>Hello, I'm Zhihao He (贺志浩), a PhD candidate jointly enrolled in the Department of Land and Real Estate Management at the School of Public Administration and Policy, Renmin University of China, and the Department of Economics and Finance at the College of Business, City University of Hong Kong.</p>
    <p>I am currently on the job market and expect to graduate in December 2026.</p>
    <h2 class="title">Research interests</h2>
    <p>Urban Economics; Real Estate Economics; Land Economics.</p>
    <h2 class="title">Research advisers</h2>
    <p>ZHANG Yuesong (RUC); LEUNG Ka Yui Charles (CityU HK).</p>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
    {
      title: `A Dataset of the Smart Governance Index for Chinese Cities`,
      journal: "Scientific Data",
      status: "Online soon",
      date: "2026",
      link: "http://link.com",
      replication: "https://doi.org/10.7910/DVN/7MZRIL",
      News: "https://www.cssn.cn/zzx/zzx_rdjj/202504/t20250404_5866949.shtml",
      writers: ["Lu Song", "Zhihao He", "Yinghao Pan", "Haijun Yue*"],
    },
    {
      title: `Sex Imbalances of Children and Housing Demand: Evidence from China`,
      journal: "Cities",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S026427512500469X?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Yuesong Zhang", "Xueqiang Ji", "Yinghao Pan*"],
    },
    {
      title: `From cost to creativity: Tracing the impact of housing affordability on innovation and entrepreneurship in urban China`,
      journal: "Habitat International",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0197397525000980?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Zhuoqun Li*", "Guanyun Cui", "Ziyan Xu"],
    },
    {
      title: `Bequest motives in the housing wealth effect: A new perspective from China`,
      journal: "Cities",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0264275123005838?via%3Dihub",
      replication: "",
      writers: ["Zhihao He", "Qilin Zhang", "Yinghao Pan*"],
    },
  ],

  type_two_title: "Working Papers",
  type_two_items: [
    {
      title: `Macroprudential Policies Under Fiscal Federalism? Evidence from China`,
      journal: "Under Review",
      status: "",
      abstract: `This paper explores macroprudential policy implementation within a hierarchical government structure, focusing on the fiscal effects on local governments when the Chinese government restricts financing for real estate developers to address property market risks. Our difference-in-differences approach across Chinese prefecture-level cities provides causal evidence that financing constraints significantly elevate local government debt risk, driven by increased corporate bankruptcies and weakened land markets that reduce primary revenue sources. In response, local governments boost bond issuance, improve non-tax revenue collection, and collaborate with state-owned enterprises to stabilize land markets. Policy implications are also considered.`,
      presentations: [
        "AEA 2026",
      ],
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Ka Yui Charles Leung", "Qilin Zhang*"],
    },
    {
      title: `Sons versus Daughters: Child Gender, Parental Labor Supply, and Well-Being in China`,
      journal: "Journal of Happiness Studies",
      status: "Reject and Resubmit",
      abstract: `This paper examines how child gender causally affects parental labor supply and well-being by exploiting the quasi-random assignment of firstborn child gender in China. Using data from the China Family Panel Studies (2016-2022) and a two-way fixed effects framework, we find that having a firstborn son increases parental labor force participation by 1.68 percentage points and weekly work hours by 0.82 hours, translating to approximately 3 percent higher labor income. Effects are larger under the One-Child Policy and vary across child development stages. We identify cultural norms and anticipated housing costs for sons' marriages as primary mechanisms, ruling out educational expenses. Despite higher earnings, parents of firstborn sons report lower subjective well-being, with increased working hours serving as the key mediating mechanism. These findings demonstrate how cultural constraints can induce welfare-reducing labor supply decisions.`,
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Yinghao Pan"],
    },
    {
      title: `When Land Expropriation Increases Income: Evidence from China's Structural Transformation`,
      journal: "Journal of Development Studies",
      status: "Revise and Resubmit",
      abstract: `While land expropriation historically impoverished rural populations in developing countries, we find contrasting evidence from China. Using panel data (2010-2018) and difference-in-differences estimation, we show that land expropriation increases household income by 9.3% in the short term, with larger long-term effects. Unlike typical dispossession outcomes, China's expropriation operates through a "reverse pressure mechanism," pushing farmers from agriculture into higher-productivity employment and increasing wage income by 35.5%. Effects are most potent for vulnerable groups: households in western regions (17.1% increase), those highly dependent on agriculture, and those with weaker social networks. Two mechanisms drive these results: compensation-funded financial asset accumulation and forced labor reallocation. China's distinctive outcomes stem from rapid industrialization, providing alternative employment, mandatory compensation, and complementary infrastructure investments, conditions often absent in history. These findings challenge conventional wisdom about land dispossession while highlighting how institutional context determines whether expropriation impoverishes or enriches affected populations.`,
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Yinghao Pan"],
    },
    {
      title: `Corruption Signals and Public Response: Experimental Evidence from China`,
      journal: "Public Administration and Development",
      status: "Revise and Resubmit",
      abstract: `Despite extensive transparency initiatives, a persistent gap exists between anti-corruption messaging and public accountability responses. This experimental study of 963 Chinese citizens examines how corruption information affects citizen willingness to engage in government oversight. Results reveal that direct corruption experiences significantly reduce accountability motivation, with passive bribery recipients showing strongest reluctance. Conversely, media coverage enhances citizen engagement, with data-driven reporting outperforming narrative approaches. Public service satisfaction moderates these relationships—satisfied citizens show reduced responsiveness to transparency initiatives. Paradoxically, both corruption experiences and anti-corruption media initially reduce government fairness perceptions while increasing accountability motivation. For practitioners, findings indicate anti-corruption communications should emphasize quantitative achievements over narratives, and transparency programs must address service delivery problems to maximize citizen oversight engagement.`,
      date: "2025",
      link: "",
      replication: "",
      writers: ["Guanyun Cui", "Xing Ni", "Hui Cui*", "Zhihao He*"],
    },
  ],

  type_three_title: "Others",
  type_three_items: [
  {
    title: `Housing Costs Impede Green Innovation: Evidence from Chinese Cities`,
    journal: "",
    date: "2025",
    writers: ["Zhihao He", "Guiyuan Yi", "Yinghao Pan*"],
  },
  {
    title: `International Expansion and Firm Performance: Evidence from Chinese Firms`,
    journal: "",
    date: "2025",
    writers: ["Zhihao He", "Jialuo Li", "Huachen Sun", "Yinghao Pan*"],
  },
  {
    title: `Housing Conditions and Child Development: Evidence from China`,
    journal: "",
    date: "2025",
    writers: ["Zhihao He", "Ziyan Xu", "Shangjie Wu", "Siyuan Feng*"],
  },
  {
    title: `How Enhanced Trade Secret Protection Reduces Patent Applications: A Study of Intellectual Property Choices`,
    journal: "",
    date: "2025",
    writers: ["Xunfeng Zhuo", "Zhihao He", "Songpei Zhang*"],
  },
  {
    title: `From Isolated to Integrated: The Synergistic Impact of Dual Green-Digital Pilots on China's Urban Ecological Resilience`,
    journal: "",
    date: "2025",
    writers: ["Sishu Zhou", "Yuesong Zhang", "Zhihao He*", "Genghong Guo"],
  },
  {
    title: `Foreign Exposure and Tenant Turnover: Evidence from Beijing's Grade-A Office Market`,
    journal: "",
    date: "2025",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
  {
    title: `China's urban services converge as soft delivery catches up with hard infrastructure`,
    journal: "",
    date: "2025",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
  {
    title: `Credit Deleveraging and Firm Dynamics: Evidence from China's Real Estate Market`,
    journal: "",
    date: "2026",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
],

  type_four_title: "",
  type_four_items: [],
};

// ---------- CV page data
const enCVPageData = {
  title: "Curriculum Vitae",
  download_text: "You can also download a PDF copy of my CV in",
  download_english_text: "English",
  download_chinese_text: "Chinese",
  download_english_link: "#",  // Add your actual PDF link here
  download_chinese_link: "#",  // Add your actual PDF link here
  
  sections: [
    {
      title: "Education",
      items: [
        {
          degree: "Ph.D, Economics",
          institution: "National School of Development, Peking University",
          supervisor: "Prof. Min Wang",
          date: "Sep. 2021 - Jul. 2026 (expected)",
        },
        {
          degree: "Postgraduate Fellow",
          institution: "Charles H. Dyson School of Applied Economics and Management, Cornell University",
          supervisor: "Prof. Jinhua Zhao",
          date: "Sep.1 2024 - Aug.31 2025",
        },
        {
          degree: "B.S., Environmental Science",
          institution: "College of Environmental Sciences and Engineering, Peking University",
          date: "2017-2021",
        },
        {
          degree: "B.A., Economics",
          institution: "National School of Development, Peking University",
          date: "2018-2021",
        }
      ]
    },
    {
      title: "Teaching Experiences",
      items: [
        {
          role: "TA to Prof. Xianling Long",
          course: "Environmental Economics",
          date: "Spring 2023 and 2024"
        },
        {
          role: "TA to Prof. Cong Peng",
          course: "Urban Economics in Developing Countries (Ph.D., in English)",
          date: "Fall 2023"
        },
        {
          role: "TA to Prof. Lijun Zhu",
          course: "Intermediate Macroeconomics (UG core)",
          date: "Fall 2022"
        }
      ]
    },
    {
      title: "Professional Services",
      items: [
        {
          description: "Referee services for: Journal of Environmental Economics and Management (×1), China Economic Review (×6), China Economic Quarterly International (×2), China Economic Journal (×1), 经济学（季刊）(×2)"
        },
        {
          description: "Data & code reviewer: 经济学（季刊）(×20)"
        }
      ]
    },
    {
      title: "Awards",
      items: [
        "The Second Award and The Best Poster Award, The 8th HEOA Doctoral Forum on Health Policy and Economics, 2025",
        "Excellent Paper Award, The 7th China Health Economic Development Forum, 2024",
        "Excellent Paper Award, The 8th Annual Meeting of the China Labor Economists Forum, 2024",
        "Excellent Paper Award, The 6th China Health Economic Development Forum, 2023",
        "Award for Academic Excellence, Peking University, 2022 & 2023",
        "Excellent Teaching Assistant Award, Peking University, 2022 Fall",
        "National Scholarship, Peking University, 2020",
        "Merit Student, 2018 & 2020",
        "May 4th Scholarship, Peking University, 2018"
      ]
    },
    {
      title: "Skills",
      items: [
        "STATA, R, Python (for NetCDF data cleaning), ArcGIS, LaTeX"
      ]
    },
    {
      title: "Languages",
      items: [
        "Chinese (native), English (fluent)"
      ]
    }
  ]
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Academic Positions & Experience",
  items: [
    {
      title: `Ph.D. Candidate`,
      company: "Renmin University of China & City University of Hong Kong",
      startData: "September 2020",
      endDate: "Expected December 2026",
      location: "Beijing & Hong Kong",
      abstract:
        "Joint Ph.D. program in Land and Real Estate Management (RUC) and Economics and Finance (CityU). Conducting research on urban economics, real estate economics, and land economics under the supervision of Prof. Zhang Yuesong and Prof. Leung Ka Yui Charles.",
      achievements: [
        "Multiple publications in leading journals including Cities and Habitat International",
        "Selected presentations at major international conferences (CAERE, AAEA, PKU CCER)",
        "Developed comprehensive research agenda on housing markets and urban development"
      ],
    },
  ],
};
