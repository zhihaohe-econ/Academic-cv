// ---------- Navbar titles
const enNavbarData = {
  title: " Zhihao He ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
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
      replication: "http://replication-link.com",
      writers: ["Zhihao He", "Yuesong Zhang", "Xueqiang Ji", "Yinghao Pan*"],
    },
    {
      title: `From cost to creativity: Tracing the impact of housing affordability on innovation and entrepreneurship in urban China`,
      journal: "Habitat International",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0197397525000980?via%3Dihub",
      replication: "http://replication-link.com",
      writers: ["Zhihao He", "Zhuoqun Li*", "Guanyun Cui", "Ziyan Xu"],
    },
    {
      title: `Bequest motives in the housing wealth effect: A new perspective from China`,
      journal: "Cities",
      status: "",
      date: "2025",
      link: "https://www.sciencedirect.com/science/article/pii/S0264275123005838?via%3Dihub",
      replication: "http://replication-link.com",
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
        "AEA 2025",
      ],
      date: "2025",
      link: "",
      replication: "",
      writers: ["Zhihao He", "Ka Yui Charles Leung", "Qilin Zhang*"],
    },
    {
      title: `Foreign Exposure and Tenant Turnover: Evidence from Beijing's Grade-A Office Market`,
      journal: "Under Review",
      status: "",
      abstract: `We study how geopolitical shocks affect the spatial organization of global cities by examining tenant reallocation in Beijing's commercial office market following the 2018-2019 US-China trade war. Exploiting variation in pre-shock foreign-firm exposure across Grade-A office buildings in five core submarkets, we find that buildings with greater foreign exposure exhibited significantly higher tenant turnover. This adjustment followed a distinct dynamic pattern: an initial decline in turnover, followed by a sharp increase driven primarily by tenant exits. Effects were concentrated in internationally oriented submarkets (CBD and East Second Ring). Institutional proximity moderates this adjustment: buildings closer to Beijing's embassy district exhibit attenuated responses, consistent with an embassy-district shelter effect. Beyond turnover, we document a re-indigenization of the tenant base in higher-exposure buildings, alongside a shift toward smaller-capital and less R&D intensive occupiers.`,
      date: "2025",
      link: "http://link.com",
      replication: "http://replication-link.com",
      writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
    },
    {
      title: `Sons versus Daughters: Child Gender, Parental Labor Supply, and Well-Being in China`,
      journal: "Journal of Happiness Studies",
      status: "Reject and Resubmit",
      abstract: `This paper examines how child gender causally affects parental labor supply and well-being by exploiting the quasi-random assignment of firstborn child gender in China. Using data from the China Family Panel Studies (2016-2022) and a two-way fixed effects framework, we find that having a firstborn son increases parental labor force participation by 1.68 percentage points and weekly work hours by 0.82 hours, translating to approximately 3 percent higher labor income. Effects are larger under the One-Child Policy and vary across child development stages. We identify cultural norms and anticipated housing costs for sons' marriages as primary mechanisms, ruling out educational expenses. Despite higher earnings, parents of firstborn sons report lower subjective well-being, with increased working hours serving as the key mediating mechanism. These findings demonstrate how cultural constraints can induce welfare-reducing labor supply decisions.`,
      date: "2025",
      link: "http://link.com",
      replication: "http://replication-link.com",
      writers: ["Zhihao He", "Yinghao Pan"],
    },
    {
      title: `When Land Expropriation Increases Income: Evidence from China’s Structural Transformation`,
      journal: "Journal of Development Studies",
      status: "Revise and Resubmit",
      abstract: `While land expropriation historically impoverished rural populations in developing countries, we find contrasting evidence from China. Using panel data (2010-2018) and difference-in-differences estimation, we show that land expropriation increases household income by 9.3% in the short term, with larger long-term effects. Unlike typical dispossession outcomes, China’s expropriation operates through a “reverse pressure mechanism,” pushing farmers from agriculture into higher-productivity employment and increasing wage income by 35.5%. Effects are most potent for vulnerable groups: households in western regions (17.1% increase), those highly dependent on agriculture, and those with weaker social networks. Two mechanisms drive these results: compensation-funded financial asset accumulation and forced labor reallocation. China’s distinctive outcomes stem from rapid industrialization, providing alternative employment, mandatory compensation, and complementary infrastructure investments, conditions often absent in history. These findings challenge conventional wisdom about land dispossession while highlighting how institutional context determines whether expropriation impoverishes or enriches affected populations.`,
      date: "2025",
      link: "http://link.com",
      replication: "http://replication-link.com",
      writers: ["Zhihao He", "Yinghao Pan"],
    },
    {
      title: `Corruption Signals and Public Response: Experimental Evidence from China`,
      journal: "Public Administration and Development",
      status: "Revise and Resubmit",
      abstract: `Despite extensive transparency initiatives, a persistent gap exists between anti-corruption messaging and public accountability responses. This experimental study of 963 Chinese citizens examines how corruption information affects citizen willingness to engage in government oversight. Results reveal that direct corruption experiences significantly reduce accountability motivation, with passive bribery recipients showing strongest reluctance. Conversely, media coverage enhances citizen engagement, with data-driven reporting outperforming narrative approaches. Public service satisfaction moderates these relationships—satisfied citizens show reduced responsiveness to transparency initiatives. Paradoxically, both corruption experiences and anti-corruption media initially reduce government fairness perceptions while increasing accountability motivation. For practitioners, findings indicate anti-corruption communications should emphasize quantitative achievements over narratives, and transparency programs must address service delivery problems to maximize citizen oversight engagement.`,
      date: "2025",
      link: "http://link.com",
      replication: "http://replication-link.com",
      writers: ["Guanyun Cui", "Xing Ni", "Hui Cui*", "Zhihao He*"],
    },
  ],

  type_three_title: "Others",
  type_three_items: [
  {
    title: `Housing Costs Impede Green Innovation: Evidence from Chinese Cities`,
    journal: "UR",
    date: "2025",
    writers: ["Zhihao He", "Guiyuan Yi", "Yinghao Pan*"],
  },
  {
    title: `International Expansion and Firm Performance: Evidence from Chinese Firms`,
    journal: "UR",
    date: "2025",
    writers: ["Zhihao He", "Jialuo Li", "Huachen Sun", "Yinghao Pan*"],
  },
  {
    title: `Housing Conditions and Child Development: Evidence from China`,
    journal: "UR",
    date: "2025",
    writers: ["Zhihao He", "Ziyan Xu", "Shangjie Wu", "Siyuan Feng*"],
  },
  {
    title: `How Enhanced Trade Secret Protection Reduces Patent Applications: A Study of Intellectual Property Choices`,
    journal: "UR",
    date: "2025",
    writers: ["Xunfeng Zhuo", "Zhihao He", "Songpei Zhang*"],
  },
  {
    title: `From Isolated to Integrated: The Synergistic Impact of Dual Green-Digital Pilots on China's Urban Ecological Resilience`,
    journal: "UR",
    date: "2025",
    writers: ["Sishu Zhou", "Yuesong Zhang", "Zhihao He*", "Genghong Guo"],
  },
  {
    title: `Foreign Exposure and Tenant Turnover: Evidence from Beijing's Grade-A Office Market`,
    journal: "UR",
    date: "2025",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
  {
    title: `China's urban services converge as soft delivery catches up with hard infrastructure`,
    journal: "UR",
    date: "2025",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
  {
    title: `Credit Deleveraging and Firm Dynamics: Evidence from China's Real Estate Market`,
    journal: "UR",
    date: "2026",
    writers: ["Zekun Fan", "Zhihao He", "Weidong Qu*"],
  },
],

  type_four_title: "",
  type_four_items: [],
};
// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p>My research focuses on urban economics, real estate economics, and land economics. I employ various empirical methods including difference-in-differences, instrumental variables, and quasi-experimental designs to understand how housing markets, land policies, and urban development affect economic outcomes and social welfare.</p>
        <br />
        <h4 style="font-size: 1.1rem">Housing Markets and Social Outcomes</h4>
        <p>One strand of my research examines how housing market conditions influence household behavior and demographic outcomes. In my work on sex imbalances and housing demand, I investigate how gender composition in families affects housing consumption decisions in China. This research provides insights into the intersection of cultural factors, demographic transitions, and real estate markets.</p>
        <br />
        <h4 style="font-size: 1.1rem">Innovation, Entrepreneurship, and Housing Affordability</h4>
        <p>Another major research area explores the relationship between housing costs and economic dynamism. My work traces how housing affordability constraints affect innovation and entrepreneurship in urban China, revealing important trade-offs between property development and economic creativity in rapidly growing cities.</p>
        <br />
        <h4 style="font-size: 1.1rem">Macroprudential Policy and Local Government Finance</h4>
        <p>I also study how national-level financial regulations interact with local government fiscal systems. My research on macroprudential policies under fiscal federalism examines unintended consequences of property market regulations on local government debt and fiscal health, providing policy-relevant insights for financial stability and intergovernmental fiscal relations.</p>
    </div>
  `,
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
