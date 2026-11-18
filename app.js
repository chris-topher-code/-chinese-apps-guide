const translations = {
  en: {
    eyebrow: "First-week app survival guide",
    title: "Chinese Apps Guide",
    subtitle: "Essential apps for daily life in China, explained for foreigners before they land.",
    searchLabel: "Search apps, tasks, or setup tips",
    searchPlaceholder: "Search apps, tasks, or setup tips",
    starterPacks: "Starter packs",
    seeAll: "See all",
    browseByNeed: "Browse by need",
    essentialApps: "Essential China apps",
    downloadStack: "Get starter stack",
    quickComparisons: "Quick comparisons",
    whichOne: "Which one should I use?",
    paymentCalloutLabel: "Strong payment recommendation",
    paymentCalloutTitle: "Link a Wise or Revolut card to both WeChat and Alipay before you arrive.",
    paymentCalloutBody: "This is the single most important payment step for foreigners. A Wise or Revolut card lets you spend directly from your foreign account at QR payment terminals across China. Link the same card in WeChat Pay AND Alipay so you can pay almost anywhere — even at shops that accept only one of them. Test a small payment before you rely on it.",
    paymentCompare: "Use WeChat Pay and Alipay together if possible: WeChat Pay is everywhere socially, while Alipay is often smoother for travel, utilities, and foreign card setup. TenPayGo is the new Tencent option for visitors who want to pay without a WeChat account.",
    shoppingCompare: "Taobao has everything, JD is stronger for reliable electronics and delivery, Pinduoduo is deal-heavy but harder for beginners.",
    transportCompare: "Amap is the map and transit brain. Didi is the ride-hailing backup when public transport is not enough.",
    navHome: "Home",
    navBasics: "Basics",
    navCompare: "Compare",
    navTips: "Tips",
    skipToGuide: "Skip to the app guide",
    menuEyebrow: "Guide sections",
    menuTitle: "Jump to",
    menuBasics: "Basics",
    menuBasicsNote: "Starter packs",
    menuApps: "All apps",
    menuAppsNote: "Full list",
    menuPayments: "Payments",
    menuPaymentsNote: "WeChat Pay, Alipay, TenPayGo",
    menuTransport: "Transport",
    menuTransportNote: "Maps, rides, trains",
    menuFood: "Food",
    menuFoodNote: "Delivery and local finds",
    menuShopping: "Shopping",
    menuShoppingNote: "Marketplaces and deals",
    menuAi: "AI & search",
    menuAiNote: "Yuanbao, DeepSeek, Kimi + more",
    menuVpn: "VPN",
    menuVpnNote: "Mullvad, Astrill, Surfshark",
    menuStudent: "Student life",
    menuStudentNote: "Study and social",
    menuLongstay: "Long stay",
    menuLongstayNote: "Housing and work",
    menuCompare: "Compare apps",
    menuCompareNote: "Which one to use",
    menuTips: "First-week tips",
    menuTipsNote: "Before you land",
    emptyTitle: "No apps found",
    emptyCopy: "Try another task, app name, or category.",
    choosePlatform: "Choose platform",
    storeNote: "Store availability can change. These links open store searches so users can verify the latest listing before installing.",
    results: (count) => `${count} app${count === 1 ? "" : "s"} ready for this guide`,
    getApp: "Get app",
    viewDetails: "View setup guide",
    setup: "Setup",
    foreigner: "Foreigner use",
    bestFor: "Best for",
    howToStart: "How to start",
    watchOut: "Watch out",
    similar: "Similar to",
    openIos: "Open iOS App Store",
    openAndroid: "Open Google Play",
    openCoolapk: "Open CoolAPK",
    searchWeb: "Search web",
    starterCopy: "Open store searches for the first-week essentials.",
    appStoreCopy: (name) => `Choose where to search for ${name}.`,
    tipsEyebrow: "Before you land",
    tipsTitle: "First-week tips",
    tipsBody: "Install WeChat, Alipay, a map app, and a translation app before landing. Payment and identity rules change, so verify setup requirements in the app before relying on it.",
    vpnEyebrow: "Connectivity",
    vpnTitle: "VPNs that work in China (2026)",
    vpnBody: "Install and test a paid VPN before you fly. App stores and VPN sites are often blocked inside China. Mullvad is technically the best but harder for non-tech users; Astrill is reliable and stable but sometimes slow; Surfshark is the easiest and cheapest, though it needs No Border mode and is not 100% reliable. For most users, Astrill or Surfshark are the practical recommendations.",
    vpnMullvadTitle: "Mullvad — best but technical",
    vpnMullvadBody: "Technically the strongest option, but setup is more complicated for non-technical users.",
    vpnAstrillTitle: "Astrill — recommended for most",
    vpnAstrillBody: "Reliable and stable, with occasional slow speeds.",
    vpnSurfsharkTitle: "Surfshark — easiest + cheapest",
    vpnSurfsharkBody: "Easy and cheap, but needs No Border mode and is not 100% reliable.",
    vpnLegal: "VPN use is legally restricted in China; check current rules and use responsibly.",
    tipInstallTitle: "Install before landing",
    tipInstallBody: "Download WeChat, Alipay, Amap, and a translation app while you still have fast, unrestricted Wi-Fi.",
    tipPayTitle: "Set up payments early",
    tipPayBody: "Link a Wise or Revolut card in both WeChat Pay and Alipay, then test a small QR payment before depending on it.",
    tipAddressTitle: "Save addresses in Chinese",
    tipAddressBody: "Keep your hotel, school, or apartment address in Chinese so taxi drivers and delivery couriers can find you.",
    tipDataTitle: "Stay connected",
    tipDataBody: "Arrange roaming or a China eSIM before you fly, and carry a power bank for long days out.",
    tipPowerBankTitle: "Power bank warning",
    tipPowerBankBody: "Power banks without CCC certification are not allowed on flights in China. Airport security confiscates them permanently — even expensive ones. Check for the CCC mark before you fly."
  },
  fr: {
    eyebrow: "Guide de survie pour la première semaine",
    title: "Guide des Apps Chinoises",
    subtitle: "Les apps essentielles pour la vie quotidienne en Chine, expliquées aux étrangers avant leur arrivée.",
    searchLabel: "Rechercher des apps, besoins ou conseils",
    searchPlaceholder: "Rechercher des apps, besoins ou conseils",
    starterPacks: "Packs de départ",
    seeAll: "Tout voir",
    browseByNeed: "Explorer par besoin",
    essentialApps: "Apps essentielles en Chine",
    downloadStack: "Obtenir le pack essentiel",
    quickComparisons: "Comparaisons rapides",
    whichOne: "Laquelle utiliser ?",
    paymentCalloutLabel: "Recommandation forte — paiement",
    paymentCalloutTitle: "Liez une carte Wise ou Revolut à WeChat ET à Alipay avant d'arriver.",
    paymentCalloutBody: "C'est l'étape de paiement la plus importante pour un étranger. Une carte Wise ou Revolut vous permet de dépenser directement depuis votre compte étranger sur les terminaux de paiement QR partout en Chine. Liez la même carte dans WeChat Pay ET dans Alipay pour payer presque partout, même chez les commerçants qui n'acceptent qu'un seul des deux. Testez un petit paiement avant d'en dépendre.",
    paymentCompare: "Utilisez WeChat Pay et Alipay ensemble si possible : WeChat Pay est partout dans les usages sociaux, tandis qu'Alipay est souvent plus pratique pour le voyage, les services et les cartes étrangères. TenPayGo est la nouvelle option de Tencent pour les visiteurs qui veulent payer sans compte WeChat.",
    shoppingCompare: "Taobao a presque tout, JD est plus fiable pour l'électronique et la livraison, Pinduoduo est très orienté promotions mais moins simple pour débuter.",
    transportCompare: "Amap est le cerveau pour cartes et transports. Didi sert de solution de secours pour les taxis et voitures privées.",
    navHome: "Accueil",
    navBasics: "Bases",
    navCompare: "Comparer",
    navTips: "Conseils",
    skipToGuide: "Aller au guide des apps",
    menuEyebrow: "Sections du guide",
    menuTitle: "Aller à",
    menuBasics: "Bases",
    menuBasicsNote: "Packs de départ",
    menuApps: "Toutes les apps",
    menuAppsNote: "Liste complète",
    menuPayments: "Paiement",
    menuPaymentsNote: "WeChat Pay, Alipay, TenPayGo",
    menuTransport: "Transport",
    menuTransportNote: "Cartes, VTC, trains",
    menuFood: "Manger",
    menuFoodNote: "Livraison et adresses",
    menuShopping: "Shopping",
    menuShoppingNote: "Marchés et promos",
    menuAi: "IA et recherche",
    menuAiNote: "Yuanbao, DeepSeek, Kimi + autres",
    menuVpn: "VPN",
    menuVpnNote: "Mullvad, Astrill, Surfshark",
    menuStudent: "Vie étudiante",
    menuStudentNote: "Études et sorties",
    menuLongstay: "Long séjour",
    menuLongstayNote: "Logement et travail",
    menuCompare: "Comparer les apps",
    menuCompareNote: "Laquelle choisir",
    menuTips: "Conseils première semaine",
    menuTipsNote: "Avant d'arriver",
    emptyTitle: "Aucune app trouvée",
    emptyCopy: "Essayez un autre besoin, nom d'app ou catégorie.",
    choosePlatform: "Choisir la plateforme",
    storeNote: "La disponibilité peut changer. Ces liens ouvrent des recherches de stores pour vérifier la fiche la plus récente avant installation.",
    results: (count) => `${count} app${count === 1 ? "" : "s"} dans ce guide`,
    getApp: "Obtenir l'app",
    viewDetails: "Voir le guide",
    setup: "Configuration",
    foreigner: "Usage étranger",
    bestFor: "Idéal pour",
    howToStart: "Pour commencer",
    watchOut: "Attention",
    similar: "Comparable à",
    openIos: "Ouvrir l'App Store iOS",
    openAndroid: "Ouvrir Google Play",
    openCoolapk: "Ouvrir CoolAPK",
    searchWeb: "Recherche web",
    starterCopy: "Ouvrir les recherches store pour les essentiels de la première semaine.",
    appStoreCopy: (name) => `Choisissez où rechercher ${name}.`,
    tipsEyebrow: "Avant d'arriver",
    tipsTitle: "Conseils première semaine",
    tipsBody: "Installez WeChat, Alipay, une app de cartes et une app de traduction avant d'arriver. Les règles de paiement et d'identité changent souvent, donc vérifiez les exigences dans l'app.",
    vpnEyebrow: "Connectivité",
    vpnTitle: "VPN qui fonctionnent en Chine (2026)",
    vpnBody: "Installez et testez un VPN payant avant de partir. Les stores et les sites de VPN sont souvent bloqués en Chine. Mullvad est techniquement le meilleur mais plus difficile pour les non-techniciens ; Astrill est fiable et stable mais parfois lent ; Surfshark est le plus simple et le moins cher, mais nécessite le mode No Border et n'est pas fiable à 100 %. Pour la plupart des utilisateurs, Astrill ou Surfshark sont les recommandations pratiques.",
    vpnMullvadTitle: "Mullvad — meilleur mais technique",
    vpnMullvadBody: "Techniquement le plus solide, mais la configuration est plus compliquée pour les non-techniciens.",
    vpnAstrillTitle: "Astrill — recommandé pour la plupart",
    vpnAstrillBody: "Fiable et stable, avec des ralentissements occasionnels.",
    vpnSurfsharkTitle: "Surfshark — le plus simple et économique",
    vpnSurfsharkBody: "Simple et bon marché, mais nécessite le mode No Border et n'est pas fiable à 100 %.",
    vpnLegal: "L'usage d'un VPN est juridiquement encadré en Chine ; vérifiez les règles et utilisez-le de façon responsable.",
    tipInstallTitle: "Installez avant le départ",
    tipInstallBody: "Téléchargez WeChat, Alipay, Amap et une app de traduction avec un Wi-Fi rapide et sans restrictions.",
    tipPayTitle: "Préparez les paiements tôt",
    tipPayBody: "Liez une carte Wise ou Revolut à WeChat Pay et à Alipay, puis testez un petit paiement QR avant d'en dépendre.",
    tipAddressTitle: "Gardez les adresses en chinois",
    tipAddressBody: "Conservez l'adresse de votre hôtel, école ou appartement en chinois pour les taxis et les livreurs.",
    tipDataTitle: "Restez connecté",
    tipDataBody: "Activez l'itinérance ou une eSIM Chine avant le départ, et emportez une batterie externe pour les longues journées.",
    tipPowerBankTitle: "Avertissement batterie externe",
    tipPowerBankBody: "Les batteries externes sans certification CCC ne sont pas autorisées à bord des vols en Chine. La sécurité de l'aéroport les confisque définitivement — même si elles sont chères. Vérifiez le marquage CCC avant de prendre l'avion."
  }
};

const packs = [
  { id: "arrival", icon: "plane", color: "#f3ead7", label: { en: "Arrival Basics", fr: "Arrivée" }, desc: { en: "Install before landing", fr: "Avant d'arriver" }, appIds: ["wechat", "alipay", "yuanbao", "amap", "didi", "tripcom"] },
  { id: "payments", icon: "credit-card", color: "#e5efd9", label: { en: "Pay in China", fr: "Payer" }, desc: { en: "QR payments and setup", fr: "Paiement QR" }, appIds: ["wechat", "alipay", "tenpaygo"] },
  { id: "transport", icon: "route", color: "#f5e9c9", label: { en: "Move Around", fr: "Se déplacer" }, desc: { en: "Maps, rides, trains", fr: "Cartes, VTC, trains" }, appIds: ["amap", "didi", "hellobike", "12306", "ctrip", "tripcom", "qunar", "baidumaps"] },
  { id: "food", icon: "utensils", color: "#f3ded3", label: { en: "Eat & Drink", fr: "Manger" }, desc: { en: "Delivery and local finds", fr: "Livraison et adresses" }, appIds: ["meituan", "dianping", "eleme", "luckin", "mixue"] },
  { id: "shopping", icon: "shopping-bag", color: "#f6ecd7", label: { en: "Shop Smart", fr: "Shopping" }, desc: { en: "Marketplaces and deals", fr: "Marchés et promos" }, appIds: ["taobao", "jd", "pinduoduo", "xianyu"] },
  { id: "student", icon: "graduation-cap", color: "#e7edf8", label: { en: "Student Life", fr: "Étudiant" }, desc: { en: "Study, food, socials", fr: "Études et quotidien" }, appIds: ["wechat", "alipay", "meituan", "bilibili", "baicizhan", "xiaohongshu", "neteasemusic"] },
  { id: "longstay", icon: "home", color: "#e5ecd9", label: { en: "Long Stay", fr: "Long séjour" }, desc: { en: "Housing, work, services", fr: "Logement et travail" }, appIds: ["wechat", "alipay", "beike", "lianjia", "ziroom", "wellcee", "dingtalk", "wecom", "feishu"] }
];

const categories = [
  { id: "all", label: { en: "All", fr: "Tous" } },
  { id: "social", label: { en: "Social", fr: "Social" } },
  { id: "payment", label: { en: "Payments", fr: "Paiement" } },
  { id: "transport", label: { en: "Transport", fr: "Transport" } },
  { id: "bike", label: { en: "Bike", fr: "Vélo" } },
  { id: "subway", label: { en: "Subway", fr: "Métro" } },
  { id: "travel", label: { en: "Travel", fr: "Voyage" } },
  { id: "food", label: { en: "Food", fr: "Repas" } },
  { id: "shopping", label: { en: "Shopping", fr: "Shopping" } },
  { id: "video", label: { en: "Video", fr: "Vidéo" } },
  { id: "music", label: { en: "Music", fr: "Musique" } },
  { id: "news", label: { en: "News", fr: "Actualités" } },
  { id: "ai", label: { en: "AI & Search", fr: "IA et recherche" } },
  { id: "vpn", label: { en: "VPN", fr: "VPN" } },
  { id: "education", label: { en: "Education", fr: "Éducation" } },
  { id: "realestate", label: { en: "Real Estate", fr: "Immobilier" } },
  { id: "work", label: { en: "Work", fr: "Travail" } }
];

const apps = [
  {
    id: "wechat",
    cn: "微信",
    en: "WeChat",
    category: "social",
    categories: ["social", "payment", "subway"],
    icon: "微",
    color: "#16b84e",
    essential: true,
    desc: { en: "Messaging, QR codes, mini-programs, services, and social life.", fr: "Messagerie, QR codes, mini-programmes, services et vie sociale." },
    tags: ["Social", "Payments", "Mini apps"],
    badge: { en: "Foreigner-friendly", fr: "Assez accessible" },
    badgeType: "good",
    note: { en: "Set up first", fr: "À configurer tôt" },
    subwayNote: { en: "Click Transport, find Metro, activate", fr: "Cliquez sur Transport, trouvez Metro, activez" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Works well after phone verification", fr: "Fonctionne après vérification téléphone" },
    bestFor: { en: "Everyone in China", fr: "Tout le monde en Chine" },
    steps: {
      en: ["Install before arrival if possible.", "Register with a phone number.", "Ask contacts to share QR codes.", "Verify payment options before relying on WeChat Pay."],
      fr: ["Installez avant l'arrivée si possible.", "Inscrivez-vous avec un numéro de téléphone.", "Ajoutez les contacts par QR code.", "Vérifiez les options de paiement avant d'en dépendre."]
    },
    subwaySteps: {
      en: ["Open the app.", "Click Transport.", "Find Metro.", "Activate."],
      fr: ["Ouvrez l'app.", "Cliquez sur Transport.", "Trouvez Metro.", "Activez."]
    },
    caution: { en: "Payment features may require extra identity or card verification.", fr: "Les paiements peuvent demander une vérification d'identité ou de carte." },
    similar: "WhatsApp + PayPal + app store",
    store: "WeChat"
  },
  {
    id: "alipay",
    cn: "支付宝",
    en: "Alipay",
    category: "payment",
    categories: ["payment", "bike", "subway"],
    icon: "支",
    color: "#1677ff",
    essential: true,
    desc: { en: "Pay anywhere, link cards, access travel, utilities, and mini services.", fr: "Payer partout, lier une carte, accéder aux voyages, services et mini-apps." },
    tags: ["Payments", "Finance", "Travel"],
    badge: { en: "Passport setup", fr: "Passeport utile" },
    badgeType: "good",
    note: { en: "Best for daily use", fr: "Très utile au quotidien" },
    bikeNote: { en: "Click Scan, activate bike", fr: "Cliquez sur Scan, activez le vélo" },
    subwayNote: { en: "Click Transport, find Metro, activate", fr: "Cliquez sur Transport, trouvez Metro, activez" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Often the easiest payment start", fr: "Souvent le paiement le plus simple au début" },
    bestFor: { en: "Tourists and residents", fr: "Touristes et résidents" },
    steps: {
      en: ["Install Alipay.", "Add your passport details if requested.", "Try linking an international card.", "Test a small QR payment before depending on it."],
      fr: ["Installez Alipay.", "Ajoutez le passeport si demandé.", "Essayez de lier une carte internationale.", "Testez un petit paiement QR avant d'en dépendre."]
    },
    bikeSteps: {
      en: ["Open the app.", "Click Scan.", "Activate the bike."],
      fr: ["Ouvrez l'app.", "Cliquez sur Scan.", "Activez le vélo."]
    },
    subwaySteps: {
      en: ["Open the app.", "Click Transport.", "Find Metro.", "Activate."],
      fr: ["Ouvrez l'app.", "Cliquez sur Transport.", "Trouvez Metro.", "Activez."]
    },
    caution: { en: "Foreign card support can vary by card, merchant, and policy changes.", fr: "Les cartes étrangères peuvent dépendre de la carte, du commerçant et des règles du moment." },
    similar: "Apple Pay + PayPal + local services",
    store: "Alipay"
  },
  {
    id: "tenpaygo",
    cn: "腾讯支付",
    en: "TenPayGo",
    aliases: ["TencentPay", "Tencent Pay", "Weixin Pay"],
    category: "payment",
    categories: ["payment", "travel"],
    icon: "腾",
    color: "#07c160",
    essential: false,
    desc: { en: "Tencent's new payment app for overseas visitors: pay at any Weixin Pay merchant with an international card or Apple Pay, no WeChat account required.", fr: "La nouvelle app de paiement de Tencent pour les visiteurs étrangers : payez chez tout commerçant Weixin Pay avec une carte internationale ou Apple Pay, sans compte WeChat." },
    tags: ["Payments", "Travel", "No WeChat needed"],
    badge: { en: "New for visitors", fr: "Nouveau pour visiteurs" },
    badgeType: "good",
    note: { en: "Tencent's new visitor app", fr: "La nouvelle app visiteurs de Tencent" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Built for overseas visitors", fr: "Pensé pour les visiteurs étrangers" },
    bestFor: { en: "Tourists without WeChat", fr: "Touristes sans WeChat" },
    steps: {
      en: ["Install TenPayGo before you travel.", "Register with an email address.", "Link an international card or Apple Pay.", "Scan Weixin Pay QR codes to pay."],
      fr: ["Installez TenPayGo avant le départ.", "Inscrivez-vous avec une adresse email.", "Liez une carte internationale ou Apple Pay.", "Scannez les QR Weixin Pay pour payer."]
    },
    caution: { en: "TenPayGo is a standalone app, separate from WeChat Pay. It only works at Weixin Pay merchants in mainland China, not Alipay; card or currency conversion fees may apply.", fr: "TenPayGo est une app autonome, distincte de WeChat Pay. Elle fonctionne seulement chez les commerçants Weixin Pay en Chine continentale, pas Alipay ; des frais de carte ou de change peuvent s'appliquer." },
    similar: "WeChat Pay without a WeChat account",
    store: "TenPayGo"
  },
  {
    id: "yuanbao",
    cn: "腾讯元宝",
    en: "Tencent Yuanbao",
    category: "ai",
    categories: ["ai"],
    icon: "元",
    color: "#2f6fde",
    essential: false,
    desc: { en: "Tencent's free AI assistant with Hunyuan and DeepSeek models, plus a live English–Chinese translation mode that is especially useful for travel.", fr: "L'assistant IA gratuit de Tencent avec les modèles Hunyuan et DeepSeek, et un mode de traduction anglais–chinois en direct particulièrement utile en voyage." },
    tags: ["AI", "Translation", "Free"],
    badge: { en: "Best live translator", fr: "Meilleur traducteur live" },
    badgeType: "good",
    note: { en: "Live English–Chinese translation", fr: "Traduction anglais–chinois en direct" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Chinese-first, English replies work", fr: "Interface chinoise, réponses en anglais possibles" },
    bestFor: { en: "Live translation and free AI", fr: "Traduction en direct et IA gratuite" },
    steps: {
      en: ["Install Tencent Yuanbao.", "Sign in with WeChat or QQ if possible.", "Switch between Hunyuan and DeepSeek models.", "Open translation mode for live conversations."],
      fr: ["Installez Tencent Yuanbao.", "Connectez-vous avec WeChat ou QQ si possible.", "Passez d'un modèle Hunyuan à DeepSeek.", "Ouvrez le mode traduction pour les conversations en direct."]
    },
    caution: { en: "The interface is Chinese-first; ask for English answers when needed.", fr: "L'interface est d'abord en chinois ; demandez des réponses en anglais au besoin." },
    similar: "ChatGPT + Google Translate",
    store: "Tencent Yuanbao"
  },
  {
    id: "deepseek",
    cn: "深度求索",
    en: "DeepSeek",
    category: "ai",
    categories: ["ai"],
    icon: "深",
    color: "#4d6bfe",
    essential: false,
    desc: { en: "Free Chinese AI assistant from DeepSeek, strong at reasoning, coding, and writing, with reliable access in China.", fr: "Assistant IA chinois gratuit de DeepSeek, fort en raisonnement, code et rédaction, avec un accès fiable en Chine." },
    tags: ["AI", "Free", "Reasoning"],
    badge: { en: "Free AI", fr: "IA gratuite" },
    badgeType: "good",
    note: { en: "Great in China", fr: "Très utile en Chine" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "English interface available", fr: "Interface anglaise disponible" },
    bestFor: { en: "Reasoning, coding, and writing", fr: "Raisonnement, code et rédaction" },
    steps: {
      en: ["Install the official DeepSeek app.", "Create an account with email or phone.", "Use chat or reasoning mode for hard questions.", "Ask for English answers when needed."],
      fr: ["Installez l'app officielle DeepSeek.", "Créez un compte avec email ou téléphone.", "Utilisez le mode raisonnement pour les questions difficiles.", "Demandez des réponses en anglais au besoin."]
    },
    caution: { en: "The free service can be busy at peak times; verify important answers.", fr: "Le service gratuit peut être saturé aux heures de pointe ; vérifiez les réponses importantes." },
    similar: "ChatGPT",
    store: "DeepSeek"
  },
  {
    id: "kimi",
    cn: "Kimi",
    en: "Kimi",
    category: "ai",
    categories: ["ai"],
    icon: "K",
    color: "#181818",
    essential: false,
    desc: { en: "Moonshot AI's premium Chinese assistant, the strongest pick for long documents, research, and polished writing.", fr: "L'assistant chinois premium de Moonshot AI, le meilleur choix pour les documents longs, la recherche et la rédaction soignée." },
    tags: ["AI", "Premium", "Long context"],
    badge: { en: "Best premium", fr: "Meilleur premium" },
    badgeType: "good",
    note: { en: "Premium Chinese AI", fr: "IA chinoise premium" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Chinese-first, strong for documents", fr: "Interface chinoise, fort pour les documents" },
    bestFor: { en: "Long documents and polished writing", fr: "Documents longs et rédaction soignée" },
    steps: {
      en: ["Install Kimi and create an account.", "Upload long documents or research material.", "Ask for summaries, analysis, or drafts.", "Check subscription options for heavier use."],
      fr: ["Installez Kimi et créez un compte.", "Importez des documents longs ou des sources.", "Demandez résumés, analyses ou brouillons.", "Vérifiez les options d'abonnement pour un usage intensif."]
    },
    caution: { en: "Many premium features require a subscription, and the free tier can be rate-limited.", fr: "De nombreuses fonctions premium demandent un abonnement, et le niveau gratuit peut être limité." },
    similar: "Claude + ChatGPT",
    store: "Kimi"
  },
  {
    id: "doubao",
    cn: "豆包",
    en: "Doubao",
    category: "ai",
    categories: ["ai"],
    icon: "豆",
    color: "#2f9e44",
    essential: false,
    desc: { en: "ByteDance's fast, simple AI assistant for quick answers, summaries, and everyday tasks.", fr: "L'assistant IA rapide et simple de ByteDance pour les réponses, résumés et tâches du quotidien." },
    tags: ["AI", "Fast", "Everyday"],
    badge: { en: "Fast but basic", fr: "Rapide mais basique" },
    badgeType: "caution",
    note: { en: "Quick answers, not deep work", fr: "Réponses rapides, pas de travail profond" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Simple, Chinese-first", fr: "Simple, interface chinoise" },
    bestFor: { en: "Fast everyday answers", fr: "Réponses rapides du quotidien" },
    steps: {
      en: ["Install Doubao and open the chat.", "Ask a quick question or upload a photo.", "Use it for summaries and everyday tasks.", "Switch apps for deeper reasoning."],
      fr: ["Installez Doubao et ouvrez le chat.", "Posez une question rapide ou importez une photo.", "Utilisez-le pour les résumés et tâches simples.", "Changez d'app pour un raisonnement plus profond."]
    },
    caution: { en: "Fast but less reliable for complex reasoning or important facts.", fr: "Rapide mais moins fiable pour le raisonnement complexe ou les faits importants." },
    similar: "ChatGPT quick answers",
    store: "Doubao"
  },
  {
    id: "bing",
    cn: "必应",
    en: "Bing",
    category: "ai",
    categories: ["ai"],
    icon: "必",
    color: "#0078d4",
    essential: false,
    desc: { en: "Microsoft's search engine, accessible in China and the easiest Google replacement for web, image, and map searches.", fr: "Le moteur de recherche de Microsoft, accessible en Chine et le remplacement le plus simple de Google pour le web, les images et les cartes." },
    tags: ["Search", "Google alternative"],
    badge: { en: "Google replacement", fr: "Alternative à Google" },
    badgeType: "good",
    note: { en: "Use for web search", fr: "Pour la recherche web" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "English results available", fr: "Résultats en anglais disponibles" },
    bestFor: { en: "Searching the web in China", fr: "Recherche web en Chine" },
    steps: {
      en: ["Install Bing or open cn.bing.com.", "Set Bing as your default search engine.", "Use image and map search as needed.", "Check local availability for some results."],
      fr: ["Installez Bing ou ouvrez cn.bing.com.", "Définissez Bing comme moteur par défaut.", "Utilisez la recherche d'images et de cartes selon besoin.", "Vérifiez la disponibilité locale de certains résultats."]
    },
    caution: { en: "Some results and Microsoft services may be limited or redirected in mainland China.", fr: "Certains résultats et services Microsoft peuvent être limités ou redirigés en Chine continentale." },
    similar: "Google Search",
    store: "Bing"
  },
  {
    id: "mullvad",
    cn: "Mullvad VPN",
    en: "Mullvad VPN",
    category: "vpn",
    categories: ["vpn"],
    icon: "M",
    color: "#d64545",
    essential: false,
    desc: { en: "Technically the strongest VPN pick for China in 2026, but setup can be complicated for non-technical users.", fr: "Techniquement le meilleur VPN pour la Chine en 2026, mais sa configuration peut être compliquée pour les non-techniciens." },
    tags: ["VPN", "Privacy", "Advanced"],
    badge: { en: "Best but technical", fr: "Meilleur mais technique" },
    badgeType: "caution",
    note: { en: "Harder for non-tech users", fr: "Plus difficile pour les non-techniciens" },
    setup: { en: "Hard", fr: "Difficile" },
    foreigner: { en: "Buy and install before arrival", fr: "À acheter et installer avant l'arrivée" },
    bestFor: { en: "Technical users who want the best", fr: "Utilisateurs techniques exigeants" },
    steps: {
      en: ["Subscribe before you travel.", "Install it on every device you will bring.", "Save your account details offline.", "Test the connection before you fly."],
      fr: ["Abonnez-vous avant le voyage.", "Installez-le sur tous vos appareils.", "Gardez vos identifiants hors ligne.", "Testez la connexion avant de partir."]
    },
    caution: { en: "VPN use is legally restricted in China; check current rules and keep a backup connection.", fr: "L'usage d'un VPN est juridiquement encadré en Chine ; vérifiez les règles et gardez une connexion de secours." },
    similar: "Proton VPN",
    store: "Mullvad VPN"
  },
  {
    id: "astrill",
    cn: "Astrill VPN",
    en: "Astrill VPN",
    category: "vpn",
    categories: ["vpn"],
    icon: "A",
    color: "#f59f00",
    essential: false,
    desc: { en: "Reliable and stable China-focused VPN; recommended for most users, though speeds can occasionally drop.", fr: "VPN fiable et stable axé sur la Chine ; recommandé pour la plupart des utilisateurs, même si les vitesses baissent parfois." },
    tags: ["VPN", "China-focused", "Stable"],
    badge: { en: "Recommended for most", fr: "Recommandé pour la plupart" },
    badgeType: "good",
    note: { en: "Stable, sometimes slow", fr: "Stable, parfois lent" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Buy before arrival", fr: "À acheter avant l'arrivée" },
    bestFor: { en: "Most users wanting stability", fr: "La plupart des utilisateurs" },
    steps: {
      en: ["Choose a plan before travel.", "Install the app and test it.", "Keep a second VPN as backup.", "Contact support if the connection drops."],
      fr: ["Choisissez un forfait avant le voyage.", "Installez l'app et testez-la.", "Gardez un second VPN en secours.", "Contactez le support en cas de coupure."]
    },
    caution: { en: "Expensive plans and slow speeds are common; legal risk applies.", fr: "Les forfaits chers et les vitesses lentes sont courants ; le risque juridique s'applique." },
    similar: "ExpressVPN",
    store: "Astrill VPN"
  },
  {
    id: "surfshark",
    cn: "Surfshark VPN",
    en: "Surfshark VPN",
    category: "vpn",
    categories: ["vpn"],
    icon: "S",
    color: "#1fc8db",
    essential: false,
    desc: { en: "Easy and cheap VPN; recommended for beginners if No Border mode is enabled, though it is not 100% reliable.", fr: "VPN simple et bon marché ; recommandé pour les débutants si le mode No Border est activé, mais pas fiable à 100 %." },
    tags: ["VPN", "No Border mode", "Budget"],
    badge: { en: "Easiest + cheapest", fr: "Le plus simple et économique" },
    badgeType: "caution",
    note: { en: "Enable No Border mode", fr: "Activez le mode No Border" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Install before arrival", fr: "À installer avant l'arrivée" },
    bestFor: { en: "Non-technical users on a budget", fr: "Utilisateurs non techniques" },
    steps: {
      en: ["Subscribe and install before you fly.", "Turn on No Border mode.", "Connect to a nearby server.", "Test it before relying on it."],
      fr: ["Abonnez-vous et installez avant le départ.", "Activez le mode No Border.", "Connectez-vous à un serveur proche.", "Testez avant d'en dépendre."]
    },
    caution: { en: "Enable No Border mode; connection reliability varies and it is not 100% working.", fr: "Activez le mode No Border ; la fiabilité varie et il ne fonctionne pas à 100 %." },
    similar: "NordVPN",
    store: "Surfshark VPN"
  },
  {
    id: "amap",
    cn: "高德地图",
    en: "Amap",
    category: "transport",
    icon: "导",
    color: "#2577f1",
    essential: true,
    desc: { en: "Maps, navigation, metro, buses, walking routes, and local discovery.", fr: "Cartes, navigation, métro, bus, trajets à pied et découverte locale." },
    tags: ["Maps", "Transit"],
    badge: { en: "English support", fr: "Anglais partiel" },
    badgeType: "good",
    note: { en: "Save for travel", fr: "Indispensable en déplacement" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Useful even with limited Chinese", fr: "Utile même avec peu de chinois" },
    bestFor: { en: "Navigation", fr: "Navigation" },
    steps: {
      en: ["Install before moving around the city.", "Save hotel and key addresses.", "Use metro and walking directions.", "Pair with translation for Chinese place names."],
      fr: ["Installez avant vos déplacements.", "Sauvegardez hôtel et adresses clés.", "Utilisez métro et trajets à pied.", "Combinez avec une traduction pour les noms chinois."]
    },
    caution: { en: "Some labels and merchant details remain Chinese-first.", fr: "Certains lieux et détails restent d'abord en chinois." },
    similar: "Google Maps + Citymapper",
    store: "Amap"
  },
  {
    id: "didi",
    cn: "滴滴",
    en: "Didi",
    category: "transport",
    icon: "滴",
    color: "#ff7a1a",
    essential: true,
    desc: { en: "Ride-hailing for taxis, private cars, airport transfers, and late nights.", fr: "VTC et taxis pour trajets urbains, aéroports et sorties tardives." },
    tags: ["Transport", "Travel"],
    badge: { en: "Phone number", fr: "Numéro requis" },
    badgeType: "caution",
    note: { en: "Good backup app", fr: "Bonne app de secours" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Needs phone and payment setup", fr: "Demande téléphone et paiement" },
    bestFor: { en: "Taxi and ride-hailing", fr: "Taxi et VTC" },
    steps: {
      en: ["Create an account with phone verification.", "Set pickup and destination using map pins.", "Connect a payment method.", "Keep hotel address saved in Chinese."],
      fr: ["Créez un compte avec vérification téléphone.", "Choisissez départ et arrivée sur la carte.", "Ajoutez un moyen de paiement.", "Gardez l'adresse de l'hôtel en chinois."]
    },
    caution: { en: "Airport pickup zones can be confusing; follow in-app instructions carefully.", fr: "Les zones de prise en charge à l'aéroport peuvent être complexes." },
    similar: "Uber",
    store: "DiDi"
  },
  {
    id: "hellobike",
    cn: "哈啰单车",
    en: "HelloBike",
    category: "bike",
    categories: ["bike"],
    icon: "哈",
    color: "#00a1e9",
    essential: false,
    desc: { en: "Hello's shared-bike app for unlocking bikes by QR code; also available inside Alipay.", fr: "L'app de vélos partagés Hello pour déverrouiller un vélo par QR code ; aussi disponible dans Alipay." },
    tags: ["Bike", "QR unlock"],
    badge: { en: "In Alipay too", fr: "Aussi dans Alipay" },
    badgeType: "good",
    note: { en: "Can use inside Alipay", fr: "Utilisable dans Alipay" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Use Alipay if the app asks for Chinese ID", fr: "Utilisez Alipay si l'app demande un ID chinois" },
    bestFor: { en: "Short city rides", fr: "Trajets courts en ville" },
    steps: {
      en: ["Open HelloBike or the Alipay mini app.", "Scan the bike QR code.", "Confirm unlock and price.", "Park in a marked area and lock the bike."],
      fr: ["Ouvrez HelloBike ou la mini-app Alipay.", "Scannez le QR du vélo.", "Confirmez le déverrouillage et le prix.", "Garez-vous dans une zone autorisée et verrouillez."]
    },
    caution: { en: "The standalone app may ask for Chinese verification; the Alipay mini app is often easier.", fr: "L'app autonome peut demander une vérification chinoise ; la mini-app Alipay est souvent plus simple." },
    similar: "Lime + Citi Bike",
    store: "HelloBike"
  },
  {
    id: "meituan",
    cn: "美团",
    en: "Meituan",
    category: "food",
    categories: ["food", "bike"],
    icon: "美",
    color: "#ffd22f",
    essential: true,
    desc: { en: "Food delivery, restaurants, hotels, tickets, local services, and deals.", fr: "Livraison, restaurants, hôtels, billets, services locaux et promos." },
    tags: ["Food", "Lifestyle"],
    badge: { en: "Foreigner-friendly", fr: "Assez accessible" },
    badgeType: "good",
    note: { en: "Best for daily use", fr: "Très utile au quotidien" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Usable with translation and payment", fr: "Utilisable avec traduction et paiement" },
    bestFor: { en: "Food and local deals", fr: "Repas et offres locales" },
    steps: {
      en: ["Set your delivery address in Chinese.", "Use photo menus and ratings.", "Check delivery fees and times.", "Keep phone reachable for couriers."],
      fr: ["Ajoutez votre adresse en chinois.", "Utilisez photos et notes.", "Vérifiez frais et délais.", "Restez joignable pour le livreur."]
    },
    caution: { en: "Delivery calls are usually in Chinese.", fr: "Les appels de livreurs sont souvent en chinois." },
    similar: "Uber Eats + Groupon + TripAdvisor",
    store: "Meituan"
  },
  {
    id: "taobao",
    cn: "淘宝",
    en: "Taobao",
    category: "shopping",
    icon: "淘",
    color: "#ff6a13",
    essential: true,
    desc: { en: "Online shopping for almost everything, from basics to niche products.", fr: "Shopping en ligne pour presque tout, du quotidien aux produits rares." },
    tags: ["Shopping", "Deals"],
    badge: { en: "Passport setup", fr: "Passeport utile" },
    badgeType: "good",
    note: { en: "Explore and compare", fr: "Comparer avant achat" },
    setup: { en: "Hard", fr: "Difficile" },
    foreigner: { en: "Powerful but Chinese-heavy", fr: "Puissant mais très chinois" },
    bestFor: { en: "Shopping variety", fr: "Choix énorme" },
    steps: {
      en: ["Search with image or translated keywords.", "Check seller ratings and reviews.", "Confirm address format.", "Compare with JD for important purchases."],
      fr: ["Cherchez par image ou mots traduits.", "Vérifiez notes et avis vendeur.", "Confirmez l'adresse.", "Comparez avec JD pour les achats importants."]
    },
    caution: { en: "Returns, chat, and delivery details can be difficult without Chinese.", fr: "Retours, chat et livraison peuvent être difficiles sans chinois." },
    similar: "Amazon + eBay + Etsy",
    store: "Taobao"
  },
  {
    id: "pinduoduo",
    cn: "拼多多",
    en: "Pinduoduo",
    category: "shopping",
    icon: "拼",
    color: "#e02f2f",
    essential: false,
    desc: { en: "Deal-heavy shopping, group-buy style discounts, groceries, and bargain finds.", fr: "Shopping très orienté promos, achats groupés, courses et bonnes affaires." },
    tags: ["Shopping", "Deals"],
    badge: { en: "Harder for beginners", fr: "Plus dur au début" },
    badgeType: "caution",
    note: { en: "Compare carefully", fr: "Comparer avec soin" },
    setup: { en: "Hard", fr: "Difficile" },
    foreigner: { en: "Useful but Chinese-heavy", fr: "Utile mais très chinois" },
    bestFor: { en: "Low-price deals", fr: "Petits prix" },
    steps: {
      en: ["Use it after you are comfortable with Chinese shopping apps.", "Compare product quality and seller reviews.", "Check delivery address carefully.", "Avoid impulse buying from aggressive promotions."],
      fr: ["Utilisez-la après être à l'aise avec les apps shopping chinoises.", "Comparez qualité et avis vendeurs.", "Vérifiez bien l'adresse.", "Évitez les achats impulsifs liés aux promotions."]
    },
    caution: { en: "Great prices, but quality and seller reliability need more attention.", fr: "Très bons prix, mais qualité et fiabilité vendeur demandent plus d'attention." },
    similar: "Temu + group deals",
    store: "Pinduoduo"
  },
  {
    id: "dianping",
    cn: "大众点评",
    en: "Dianping",
    category: "food",
    icon: "点",
    color: "#ffbf26",
    essential: false,
    desc: { en: "Restaurant reviews, local rankings, photos, deals, and things to do nearby.", fr: "Avis restaurants, classements locaux, photos, offres et sorties à proximité." },
    tags: ["Food", "Reviews", "Local"],
    badge: { en: "Local insights", fr: "Bons plans locaux" },
    badgeType: "good",
    note: { en: "Find where locals go", fr: "Voir où vont les locaux" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Good with photo browsing", fr: "Pratique avec les photos" },
    bestFor: { en: "Restaurants and activities", fr: "Restaurants et sorties" },
    steps: {
      en: ["Search food, neighborhoods, or attraction names.", "Use photos and ratings to judge places.", "Save addresses and open them in Amap.", "Check recent reviews before going."],
      fr: ["Cherchez plats, quartiers ou attractions.", "Utilisez photos et notes pour choisir.", "Sauvegardez les adresses et ouvrez-les dans Amap.", "Vérifiez les avis récents avant d'y aller."]
    },
    caution: { en: "Popular places may require reservations or have long queues.", fr: "Les lieux populaires peuvent demander réservation ou attente." },
    similar: "Yelp + Google Reviews + local deals",
    store: "Dianping"
  },
  {
    id: "12306",
    cn: "铁路12306",
    en: "12306",
    category: "travel",
    icon: "铁",
    color: "#1595d3",
    essential: true,
    desc: { en: "Official China railway tickets for high-speed and regular trains.", fr: "Billets officiels de train en Chine, grande vitesse et lignes classiques." },
    tags: ["Train Tickets"],
    badge: { en: "Needs Chinese", fr: "Chinois utile" },
    badgeType: "caution",
    note: { en: "Book ahead", fr: "Réserver tôt" },
    setup: { en: "Hard", fr: "Difficile" },
    foreigner: { en: "Passport verification matters", fr: "Vérification passeport importante" },
    bestFor: { en: "Train travel", fr: "Voyage en train" },
    steps: {
      en: ["Register with passport details.", "Verify passenger information.", "Book early for holidays.", "Keep passport used for booking with you."],
      fr: ["Inscrivez le passeport.", "Vérifiez les informations passager.", "Réservez tôt pour les vacances.", "Gardez le passeport utilisé avec vous."]
    },
    caution: { en: "Holiday tickets sell out quickly.", fr: "Les billets partent vite pendant les vacances." },
    similar: "National rail booking app",
    store: "12306"
  },
  {
    id: "xiaohongshu",
    cn: "小红书",
    en: "Xiaohongshu",
    category: "social",
    icon: "红",
    color: "#fa2449",
    essential: false,
    desc: { en: "Lifestyle tips, local finds, reviews, restaurants, beauty, and travel ideas.", fr: "Conseils lifestyle, bonnes adresses, avis, restaurants, beauté et voyages." },
    tags: ["Lifestyle", "Reviews"],
    badge: { en: "Local insights", fr: "Bons plans locaux" },
    badgeType: "good",
    note: { en: "Find hidden gems", fr: "Trouver des pépites" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Great with visual browsing", fr: "Très visuel, donc accessible" },
    bestFor: { en: "Restaurants and lifestyle", fr: "Restaurants et lifestyle" },
    steps: {
      en: ["Search neighborhoods, foods, or attractions.", "Use images to understand results.", "Save posts before going out.", "Cross-check addresses in Amap."],
      fr: ["Cherchez quartiers, plats ou lieux.", "Utilisez les images pour comprendre.", "Sauvegardez les posts.", "Vérifiez l'adresse dans Amap."]
    },
    caution: { en: "Trendy places can be crowded or sponsored.", fr: "Les lieux tendance peuvent être bondés ou sponsorisés." },
    similar: "Instagram + Pinterest + Yelp",
    store: "Xiaohongshu"
  },
  {
    id: "douyin",
    cn: "抖音",
    en: "Douyin",
    category: "video",
    icon: "抖",
    color: "#151515",
    essential: false,
    desc: { en: "China's short-video platform for trends, creators, shops, and local discovery.", fr: "Plateforme chinoise de vidéos courtes, tendances, créateurs, shopping et lieux." },
    tags: ["Video", "Trends"],
    badge: { en: "China version", fr: "Version Chine" },
    badgeType: "caution",
    note: { en: "Different from TikTok", fr: "Différent de TikTok" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Useful for culture, harder for setup", fr: "Utile pour la culture, plus dur à configurer" },
    bestFor: { en: "Trends and entertainment", fr: "Tendances et divertissement" },
    steps: {
      en: ["Install the China app, not TikTok.", "Use search for local places.", "Save useful videos.", "Watch for in-app shopping prompts."],
      fr: ["Installez l'app chinoise, pas TikTok.", "Cherchez des lieux locaux.", "Sauvegardez les vidéos utiles.", "Attention aux achats intégrés."]
    },
    caution: { en: "Regional app availability can vary outside China.", fr: "La disponibilité régionale peut varier hors de Chine." },
    similar: "TikTok",
    store: "Douyin"
  },
  {
    id: "jd",
    cn: "京东",
    en: "JD.com",
    category: "shopping",
    icon: "京",
    color: "#d71920",
    essential: false,
    desc: { en: "Reliable shopping, electronics, appliances, fast logistics, and official stores.", fr: "Shopping fiable, électronique, électroménager, livraison rapide et boutiques officielles." },
    tags: ["Shopping", "Electronics"],
    badge: { en: "Reliable delivery", fr: "Livraison fiable" },
    badgeType: "good",
    note: { en: "Good for electronics", fr: "Bien pour l'électronique" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Clearer than many marketplaces", fr: "Plus clair que beaucoup de marketplaces" },
    bestFor: { en: "Reliable goods", fr: "Achats fiables" },
    steps: {
      en: ["Prefer official stores for electronics.", "Compare prices with Taobao.", "Check delivery timing.", "Save invoices for expensive items."],
      fr: ["Privilégiez les boutiques officielles.", "Comparez avec Taobao.", "Vérifiez la livraison.", "Gardez les factures pour les achats chers."]
    },
    caution: { en: "Some services and support are Chinese-first.", fr: "Certains services restent surtout en chinois." },
    similar: "Amazon",
    store: "JD"
  },
  {
    id: "ctrip",
    cn: "携程",
    en: "Ctrip",
    category: "travel",
    icon: "携",
    color: "#287dfa",
    essential: false,
    desc: { en: "The China-focused Ctrip travel app for hotels, flights, trains, attractions, and local travel support.", fr: "L'app chinoise Ctrip pour hôtels, vols, trains, attractions et support voyage local." },
    tags: ["Travel", "Hotels"],
    badge: { en: "English support", fr: "Anglais disponible" },
    badgeType: "good",
    note: { en: "Visitor-friendly", fr: "Pratique visiteur" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "One of the easiest travel apps", fr: "Une des apps voyage les plus simples" },
    bestFor: { en: "Hotels and trips", fr: "Hôtels et trajets" },
    steps: {
      en: ["Use English interface if preferred.", "Compare hotels and train options.", "Check passport requirements.", "Keep booking confirmations offline."],
      fr: ["Utilisez l'interface anglaise si besoin.", "Comparez hôtels et trajets.", "Vérifiez les exigences passeport.", "Gardez les confirmations hors ligne."]
    },
    caution: { en: "Check cancellation rules before booking.", fr: "Vérifiez les conditions d'annulation." },
    similar: "Booking.com + Expedia",
    store: "Ctrip"
  },
  {
    id: "tripcom",
    cn: "携程国际版",
    en: "Trip.com",
    category: "transport",
    categories: ["transport", "travel"],
    icon: "Trip",
    color: "#287dfa",
    essential: false,
    desc: { en: "International booking app for flights, hotels, trains, and attractions in China and abroad, with an English-first interface.", fr: "App de réservation internationale pour vols, hôtels, trains et attractions en Chine et à l'étranger, avec interface anglaise." },
    tags: ["Travel", "Flights", "English"],
    badge: { en: "English-first", fr: "Interface anglaise" },
    badgeType: "good",
    note: { en: "Easier than 12306", fr: "Plus simple que 12306" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Built for international travelers", fr: "Pensé pour les voyageurs internationaux" },
    bestFor: { en: "Flights, hotels, and trains", fr: "Vols, hôtels et trains" },
    steps: {
      en: ["Install Trip.com.", "Search flights, hotels, or trains.", "Pay with an international card.", "Save booking confirmations offline."],
      fr: ["Installez Trip.com.", "Recherchez vols, hôtels ou trains.", "Payez avec une carte internationale.", "Gardez les confirmations hors ligne."]
    },
    caution: { en: "Some rail tickets may still require passport verification; check booking terms.", fr: "Certains billets de train peuvent demander une vérification du passeport ; vérifiez les conditions." },
    similar: "Booking.com + Expedia",
    store: "Trip.com"
  },
  {
    id: "dingtalk",
    cn: "钉钉",
    en: "DingTalk",
    category: "work",
    icon: "钉",
    color: "#176bff",
    essential: false,
    desc: { en: "Work messaging, attendance, approvals, meetings, and company collaboration.", fr: "Messagerie pro, présence, validations, réunions et collaboration d'entreprise." },
    tags: ["Work", "Meetings"],
    badge: { en: "Company-driven", fr: "Selon l'entreprise" },
    badgeType: "caution",
    note: { en: "Install if required", fr: "À installer si demandé" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Depends on employer setup", fr: "Dépend de l'employeur" },
    bestFor: { en: "Chinese workplaces", fr: "Entreprises chinoises" },
    steps: {
      en: ["Install only if a school or employer requests it.", "Join with the organization invite.", "Configure notifications carefully.", "Ask admin about English support."],
      fr: ["Installez si école ou employeur le demande.", "Rejoignez via invitation.", "Réglez bien les notifications.", "Demandez l'aide admin pour l'anglais."]
    },
    caution: { en: "Workflows are organization-specific.", fr: "Les processus dépendent de l'organisation." },
    similar: "Slack + Teams + HR tools",
    store: "DingTalk"
  }
];

const restoredOriginalApps = [
  {
    id: "xianyu",
    cn: "闲鱼",
    en: "Xianyu",
    category: "shopping",
    icon: "闲",
    color: "#f7c948",
    essential: false,
    desc: { en: "Second-hand marketplace for used goods, local deals, and resale shopping.", fr: "Marketplace d'occasion pour produits usagés, bonnes affaires locales et revente." },
    tags: ["Shopping", "Second-hand"],
    badge: { en: "Chinese-heavy", fr: "Très chinois" },
    badgeType: "caution",
    note: { en: "Use after Taobao", fr: "Après Taobao" },
    setup: { en: "Hard", fr: "Difficile" },
    foreigner: { en: "Requires care with sellers and chat", fr: "Demande prudence avec vendeurs et chat" },
    bestFor: { en: "Used goods", fr: "Occasion" },
    steps: { en: ["Search by image or translated keywords.", "Check seller history.", "Avoid off-platform payment.", "Confirm delivery and returns."], fr: ["Cherchez par image ou mots traduits.", "Vérifiez le vendeur.", "Évitez les paiements hors plateforme.", "Confirmez livraison et retours."] },
    caution: { en: "Second-hand buying needs more judgment and Chinese chat.", fr: "L'occasion demande plus de jugement et de discussion en chinois." },
    similar: "Facebook Marketplace + eBay",
    store: "Xianyu"
  },
  {
    id: "beike",
    cn: "贝壳",
    en: "Beike",
    category: "realestate",
    icon: "贝",
    color: "#19a974",
    essential: false,
    desc: { en: "Housing search for rentals, sales, neighborhoods, and property listings.", fr: "Recherche de logements, locations, ventes, quartiers et annonces immobilières." },
    tags: ["Housing", "Rentals"],
    badge: { en: "Resident-focused", fr: "Pour résidents" },
    badgeType: "caution",
    note: { en: "For long stays", fr: "Long séjour" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Useful with Chinese help", fr: "Utile avec aide en chinois" },
    bestFor: { en: "Apartment research", fr: "Recherche logement" },
    steps: { en: ["Search by city and district.", "Compare listings and neighborhoods.", "Confirm agent fees.", "Visit before paying deposits."], fr: ["Cherchez par ville et quartier.", "Comparez annonces et quartiers.", "Confirmez les frais d'agence.", "Visitez avant acompte."] },
    caution: { en: "Contracts and deposits need careful local review.", fr: "Contrats et dépôts doivent être vérifiés localement." },
    similar: "Zillow + real estate agencies",
    store: "Beike"
  },
  {
    id: "lianjia",
    cn: "链家",
    en: "Lianjia",
    category: "realestate",
    icon: "链",
    color: "#0f8f5f",
    essential: false,
    desc: { en: "Real estate listings and agency services for renting or buying homes.", fr: "Annonces immobilières et services d'agence pour louer ou acheter." },
    tags: ["Housing", "Agency"],
    badge: { en: "Resident-focused", fr: "Pour résidents" },
    badgeType: "caution",
    note: { en: "Use with local help", fr: "Avec aide locale" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Better with Chinese-speaking support", fr: "Mieux avec support chinois" },
    bestFor: { en: "Rentals and agents", fr: "Locations et agences" },
    steps: { en: ["Browse by district.", "Contact agents through the app.", "Ask for current availability.", "Review lease terms carefully."], fr: ["Explorez par quartier.", "Contactez les agents.", "Demandez disponibilité réelle.", "Relisez le bail avec soin."] },
    caution: { en: "Listings can move quickly in major cities.", fr: "Les annonces partent vite dans les grandes villes." },
    similar: "Real estate agency app",
    store: "Lianjia"
  },
  {
    id: "ziroom",
    cn: "自如",
    en: "Ziroom",
    category: "realestate",
    categories: ["realestate", "longstay"],
    icon: "自",
    color: "#00a870",
    essential: false,
    desc: { en: "Long-term apartment rentals with furnished rooms and roommate-friendly listings, popular with young professionals in major cities.", fr: "Locations de longue durée avec chambres meublées et colocations, populaires auprès des jeunes actifs des grandes villes." },
    tags: ["Housing", "Rentals", "Long stay"],
    badge: { en: "Long-stay rentals", fr: "Locations longue durée" },
    badgeType: "good",
    note: { en: "Furnished apartments", fr: "Appartements meublés" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Chinese-first; use with local help", fr: "Interface chinoise ; avec aide locale" },
    bestFor: { en: "Furnished long-term rentals", fr: "Locations meublées longue durée" },
    steps: {
      en: ["Browse by city and neighborhood.", "Filter by budget and room type.", "Ask about deposits and contract terms.", "Visit before signing or paying."],
      fr: ["Explorez par ville et quartier.", "Filtrez par budget et type de chambre.", "Renseignez-vous sur les dépôts et le bail.", "Visitez avant de signer ou payer."]
    },
    caution: { en: "Contracts, deposits, and roommate rules need local review.", fr: "Contrats, dépôts et règles de colocation doivent être vérifiés localement." },
    similar: "Zillow + Airbnb long stays",
    store: "Ziroom"
  },
  {
    id: "wellcee",
    cn: "唯心所寓",
    en: "Wellcee",
    category: "realestate",
    categories: ["realestate", "longstay"],
    icon: "W",
    color: "#e94b6b",
    essential: false,
    desc: { en: "English-friendly housing platform for apartments and shared flats, popular with foreigners and international students.", fr: "Plateforme de logement en anglais pour appartements et colocations, populaire auprès des étrangers et étudiants internationaux." },
    tags: ["Housing", "English-friendly", "Long stay"],
    badge: { en: "English-friendly", fr: "Adaptée aux étrangers" },
    badgeType: "good",
    note: { en: "Good for foreigners", fr: "Bien pour les étrangers" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "English interface and international community", fr: "Interface anglaise et communauté internationale" },
    bestFor: { en: "Apartments and shared flats", fr: "Appartements et colocations" },
    steps: {
      en: ["Browse city and neighborhood listings.", "Filter by budget and room type.", "Message landlords or roommates.", "Visit and verify the contract before paying."],
      fr: ["Parcourez les annonces par ville et quartier.", "Filtrez par budget et type de chambre.", "Contactez propriétaires ou colocataires.", "Visitez et vérifiez le contrat avant de payer."]
    },
    caution: { en: "Verify listings and never pay a deposit before viewing.", fr: "Vérifiez les annonces et ne payez jamais de dépôt avant une visite." },
    similar: "SpareRoom + Zillow",
    store: "Wellcee"
  },
  {
    id: "eleme",
    cn: "饿了么",
    en: "Ele.me",
    category: "food",
    icon: "饿",
    color: "#1397ff",
    essential: false,
    desc: { en: "Food delivery alternative with restaurants, supermarkets, and local delivery.", fr: "Alternative de livraison pour restaurants, supermarchés et commerces locaux." },
    tags: ["Food", "Delivery"],
    badge: { en: "Payment needed", fr: "Paiement requis" },
    badgeType: "caution",
    note: { en: "Meituan backup", fr: "Alternative à Meituan" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Usable with payment and translation", fr: "Utilisable avec paiement et traduction" },
    bestFor: { en: "Food delivery", fr: "Livraison repas" },
    steps: { en: ["Set address in Chinese.", "Check photos and ratings.", "Confirm delivery time.", "Keep phone available."], fr: ["Adresse en chinois.", "Regardez photos et notes.", "Confirmez délai.", "Gardez le téléphone disponible."] },
    caution: { en: "Courier communication is usually in Chinese.", fr: "Communication livreur souvent en chinois." },
    similar: "Uber Eats",
    store: "Ele.me"
  },
  {
    id: "luckin",
    cn: "瑞幸咖啡",
    en: "Luckin Coffee",
    category: "food",
    icon: "咖",
    color: "#123c8c",
    essential: false,
    desc: { en: "Coffee chain app for pickup orders, coupons, and store discovery.", fr: "App de chaîne café pour commandes à emporter, coupons et magasins." },
    tags: ["Coffee", "Coupons"],
    badge: { en: "Easy pickup", fr: "Retrait facile" },
    badgeType: "good",
    note: { en: "Coffee runs", fr: "Pause café" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Visual menu helps", fr: "Menu visuel utile" },
    bestFor: { en: "Coffee pickup", fr: "Café à emporter" },
    steps: { en: ["Choose nearby store.", "Order from photos.", "Use pickup number.", "Watch coupon prices."], fr: ["Choisissez un magasin.", "Commandez avec photos.", "Utilisez le numéro de retrait.", "Regardez les coupons."] },
    caution: { en: "Pickup stores can be close together; check the address.", fr: "Plusieurs magasins proches : vérifiez l'adresse." },
    similar: "Starbucks app",
    store: "Luckin Coffee"
  },
  {
    id: "mixue",
    cn: "蜜雪冰城",
    en: "Mixue",
    category: "food",
    icon: "蜜",
    color: "#e31b23",
    essential: false,
    desc: { en: "Budget tea, ice cream, and drinks chain with widespread stores.", fr: "Chaîne économique de thé, glaces et boissons très répandue." },
    tags: ["Drinks", "Budget"],
    badge: { en: "Simple ordering", fr: "Commande simple" },
    badgeType: "good",
    note: { en: "Cheap drinks", fr: "Boissons pas chères" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Useful by photos and counters", fr: "Pratique avec photos et comptoir" },
    bestFor: { en: "Tea and ice cream", fr: "Thé et glaces" },
    steps: { en: ["Find a nearby store.", "Use photos or menu numbers.", "Pay by QR if available.", "Expect Chinese-only menus."], fr: ["Trouvez un magasin proche.", "Utilisez photos ou numéros.", "Payez par QR si possible.", "Menus souvent chinois."] },
    caution: { en: "Not always necessary as an app; many users order in store.", fr: "L'app n'est pas toujours nécessaire ; commande possible sur place." },
    similar: "Budget drink chain app",
    store: "Mixue"
  },
  {
    id: "baidumaps",
    cn: "百度地图",
    en: "Baidu Maps",
    category: "transport",
    icon: "百",
    color: "#2667ff",
    essential: false,
    desc: { en: "Map and navigation alternative with strong local coverage.", fr: "Alternative de cartes et navigation avec bonne couverture locale." },
    tags: ["Maps", "Navigation"],
    badge: { en: "Chinese-first", fr: "D'abord chinois" },
    badgeType: "caution",
    note: { en: "Amap alternative", fr: "Alternative à Amap" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Useful if you can handle Chinese UI", fr: "Utile si l'interface chinoise va" },
    bestFor: { en: "Navigation backup", fr: "Navigation de secours" },
    steps: { en: ["Search Chinese addresses.", "Compare routes.", "Use transit directions.", "Cross-check important trips."], fr: ["Cherchez adresses chinoises.", "Comparez trajets.", "Utilisez transports.", "Vérifiez les trajets importants."] },
    caution: { en: "Less beginner-friendly than English travel apps.", fr: "Moins simple que les apps voyage en anglais." },
    similar: "Google Maps",
    store: "Baidu Maps"
  },
  {
    id: "kuaishou",
    cn: "快手",
    en: "Kuaishou",
    category: "video",
    icon: "快",
    color: "#ff5f00",
    essential: false,
    desc: { en: "Short-video and live-streaming platform with creators, shopping, and local culture.", fr: "Vidéos courtes et live avec créateurs, shopping et culture locale." },
    tags: ["Video", "Live"],
    badge: { en: "China culture", fr: "Culture Chine" },
    badgeType: "good",
    note: { en: "Entertainment", fr: "Divertissement" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Mostly Chinese content", fr: "Contenu surtout chinois" },
    bestFor: { en: "Short video", fr: "Vidéos courtes" },
    steps: { en: ["Browse by interests.", "Save useful creators.", "Be careful with shopping streams.", "Use translation for comments."], fr: ["Explorez par intérêts.", "Sauvegardez créateurs utiles.", "Attention aux lives shopping.", "Traduisez les commentaires."] },
    caution: { en: "Content and registration are China-focused.", fr: "Contenu et inscription centrés Chine." },
    similar: "TikTok + live shopping",
    store: "Kuaishou"
  },
  {
    id: "bilibili",
    cn: "哔哩哔哩",
    en: "Bilibili",
    category: "video",
    icon: "哔",
    color: "#00a1d6",
    essential: false,
    desc: { en: "Long-form video, anime, learning, tech, gaming, and creator communities.", fr: "Vidéos longues, anime, apprentissage, tech, gaming et communautés." },
    tags: ["Video", "Learning"],
    badge: { en: "Great content", fr: "Bon contenu" },
    badgeType: "good",
    note: { en: "Culture and learning", fr: "Culture et apprentissage" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Useful for Chinese immersion", fr: "Utile pour immersion chinois" },
    bestFor: { en: "Video communities", fr: "Communautés vidéo" },
    steps: { en: ["Search topics in Chinese or English.", "Follow channels.", "Use subtitles when available.", "Expect community-specific slang."], fr: ["Cherchez en chinois ou anglais.", "Suivez des chaînes.", "Utilisez sous-titres si disponibles.", "Attendez-vous à de l'argot communautaire."] },
    caution: { en: "Some features may require account verification.", fr: "Certaines fonctions demandent vérification." },
    similar: "YouTube + Twitch + anime community",
    store: "Bilibili"
  },
  {
    id: "wetv",
    cn: "腾讯视频",
    en: "WeTV",
    category: "video",
    icon: "腾",
    color: "#00c070",
    essential: false,
    desc: { en: "Tencent's streaming app for dramas, variety shows, movies, and series.", fr: "Streaming Tencent pour dramas, variétés, films et séries." },
    tags: ["Video", "Streaming"],
    badge: { en: "Streaming", fr: "Streaming" },
    badgeType: "good",
    note: { en: "Shows and dramas", fr: "Séries et émissions" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Content access varies by region", fr: "Accès variable selon région" },
    bestFor: { en: "Chinese entertainment", fr: "Divertissement chinois" },
    steps: { en: ["Search shows.", "Check subtitle options.", "Watch for VIP labels.", "Compare with iQIYI."], fr: ["Cherchez des programmes.", "Vérifiez sous-titres.", "Attention aux labels VIP.", "Comparez avec iQIYI."] },
    caution: { en: "Licensing and VIP access can vary.", fr: "Licences et VIP peuvent varier." },
    similar: "Netflix + Hulu",
    store: "Tencent Video"
  },
  {
    id: "iqiyi",
    cn: "爱奇艺",
    en: "iQIYI",
    category: "video",
    icon: "爱",
    color: "#00be06",
    essential: false,
    desc: { en: "Streaming platform for Chinese dramas, movies, anime, and variety shows.", fr: "Plateforme streaming pour dramas, films, anime et émissions chinoises." },
    tags: ["Video", "Streaming"],
    badge: { en: "Streaming", fr: "Streaming" },
    badgeType: "good",
    note: { en: "Drama library", fr: "Catalogue dramas" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Subtitle options vary", fr: "Sous-titres variables" },
    bestFor: { en: "Shows and movies", fr: "Séries et films" },
    steps: { en: ["Search by title.", "Check free vs VIP episodes.", "Look for subtitle options.", "Compare regional app versions."], fr: ["Cherchez par titre.", "Vérifiez gratuit vs VIP.", "Regardez les sous-titres.", "Comparez les versions régionales."] },
    caution: { en: "Some content is region-locked.", fr: "Certains contenus sont géobloqués." },
    similar: "Netflix",
    store: "iQIYI"
  },
  {
    id: "neteasemusic",
    cn: "网易云音乐",
    en: "NetEase Cloud Music",
    category: "music",
    icon: "音",
    color: "#d71920",
    essential: false,
    desc: { en: "Music streaming with playlists, comments, Chinese music discovery, and social features.", fr: "Streaming musical avec playlists, commentaires, découverte chinoise et social." },
    tags: ["Music", "Playlists"],
    badge: { en: "Music discovery", fr: "Découverte musique" },
    badgeType: "good",
    note: { en: "Chinese music", fr: "Musique chinoise" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Good for music discovery", fr: "Bon pour découvrir" },
    bestFor: { en: "Music streaming", fr: "Streaming musical" },
    steps: { en: ["Search artists.", "Explore playlists.", "Check region availability.", "Use comments for culture cues."], fr: ["Cherchez artistes.", "Explorez playlists.", "Vérifiez disponibilité.", "Lisez commentaires pour contexte."] },
    caution: { en: "Some tracks may be unavailable by region.", fr: "Certains titres peuvent être indisponibles selon région." },
    similar: "Spotify + SoundCloud",
    store: "NetEase Cloud Music"
  },
  {
    id: "qqmusic",
    cn: "QQ音乐",
    en: "QQ Music",
    category: "music",
    icon: "Q",
    color: "#19c26b",
    essential: false,
    desc: { en: "Tencent music streaming with large catalog, playlists, karaoke links, and charts.", fr: "Streaming Tencent avec grand catalogue, playlists, karaoké et classements." },
    tags: ["Music", "Charts"],
    badge: { en: "Large catalog", fr: "Grand catalogue" },
    badgeType: "good",
    note: { en: "Mainstream music", fr: "Musique grand public" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Useful if available in your region", fr: "Utile si disponible dans votre région" },
    bestFor: { en: "Music catalog", fr: "Catalogue musique" },
    steps: { en: ["Search songs and artists.", "Try charts.", "Check VIP labels.", "Compare with NetEase."], fr: ["Cherchez chansons et artistes.", "Essayez les classements.", "Vérifiez labels VIP.", "Comparez avec NetEase."] },
    caution: { en: "Regional licensing can limit songs.", fr: "Les licences régionales peuvent limiter des titres." },
    similar: "Spotify + Apple Music",
    store: "QQ Music"
  },
  {
    id: "toutiao",
    cn: "今日头条",
    en: "Toutiao",
    category: "news",
    icon: "头",
    color: "#df2a2a",
    essential: false,
    desc: { en: "Personalized news feed with articles, short videos, trends, and local topics.", fr: "Fil d'actualités personnalisé avec articles, vidéos courtes, tendances et sujets locaux." },
    tags: ["News", "Trends"],
    badge: { en: "Chinese news", fr: "Actualités Chine" },
    badgeType: "good",
    note: { en: "Local pulse", fr: "Tendances locales" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Chinese reading practice", fr: "Pratique lecture chinois" },
    bestFor: { en: "News feed", fr: "Fil d'actualités" },
    steps: { en: ["Follow topics.", "Use translation when needed.", "Compare with official sources.", "Tune recommendations."], fr: ["Suivez des sujets.", "Traduisez au besoin.", "Comparez aux sources officielles.", "Ajustez recommandations."] },
    caution: { en: "Algorithmic feeds can become narrow quickly.", fr: "Les fils algorithmiques peuvent vite se refermer." },
    similar: "Google News + TikTok-style feed",
    store: "Toutiao"
  },
  {
    id: "tencentnews",
    cn: "腾讯新闻",
    en: "Tencent News",
    category: "news",
    icon: "讯",
    color: "#1473e6",
    essential: false,
    desc: { en: "News app from Tencent with breaking news, video reports, and topic channels.", fr: "App d'actualités Tencent avec alertes, vidéos et chaînes thématiques." },
    tags: ["News", "Video"],
    badge: { en: "Mainstream news", fr: "Actualités grand public" },
    badgeType: "good",
    note: { en: "News alternative", fr: "Alternative news" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Chinese-first but useful", fr: "Chinois d'abord mais utile" },
    bestFor: { en: "News updates", fr: "Actualités" },
    steps: { en: ["Browse topics.", "Enable only important notifications.", "Use translation for long articles.", "Cross-check major news."], fr: ["Parcourez les sujets.", "Limitez notifications.", "Traduisez longs articles.", "Vérifiez infos majeures."] },
    caution: { en: "Notification volume can be high.", fr: "Les notifications peuvent être nombreuses." },
    similar: "Yahoo News + video news",
    store: "Tencent News"
  },
  {
    id: "baicizhan",
    cn: "百词斩",
    en: "BaiCiZhan",
    category: "education",
    icon: "词",
    color: "#1d9bf0",
    essential: false,
    desc: { en: "Vocabulary learning app with visuals, spaced review, and Chinese study tools.", fr: "App de vocabulaire avec visuels, révisions espacées et outils d'anglais." },
    tags: ["Education", "Vocabulary"],
    badge: { en: "Learning", fr: "Apprentissage" },
    badgeType: "good",
    note: { en: "Study helper", fr: "Aide étude" },
    setup: { en: "Easy", fr: "Facile" },
    foreigner: { en: "Useful for language learners", fr: "Utile pour apprenants" },
    bestFor: { en: "Vocabulary", fr: "Vocabulaire" },
    steps: { en: ["Pick a word list.", "Use daily review.", "Pair with real-world practice.", "Track streaks lightly."], fr: ["Choisissez une liste.", "Révisez chaque jour.", "Combinez avec pratique réelle.", "Suivez les séries sans stress."] },
    caution: { en: "It is a study tool, not a full survival translation app.", fr: "C'est un outil d'étude, pas une app complète de traduction." },
    similar: "Duolingo + Anki vocabulary",
    store: "BaiCiZhan"
  },
  {
    id: "qunar",
    cn: "去哪儿",
    en: "Qunar",
    category: "travel",
    icon: "去",
    color: "#00a8b5",
    essential: false,
    desc: { en: "Travel booking app for flights, hotels, train tickets, and price comparison.", fr: "App voyage pour vols, hôtels, trains et comparaison de prix." },
    tags: ["Travel", "Booking"],
    badge: { en: "Price comparison", fr: "Comparaison prix" },
    badgeType: "good",
    note: { en: "Compare fares", fr: "Comparer tarifs" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Useful with passport details", fr: "Utile avec passeport" },
    bestFor: { en: "Travel deals", fr: "Offres voyage" },
    steps: { en: ["Compare with Ctrip.", "Check passenger requirements.", "Review cancellation terms.", "Keep confirmations offline."], fr: ["Comparez avec Ctrip.", "Vérifiez exigences passager.", "Relisez annulation.", "Gardez confirmations hors ligne."] },
    caution: { en: "Booking rules can differ by provider.", fr: "Les règles varient selon fournisseur." },
    similar: "Kayak + Expedia",
    store: "Qunar"
  },
  {
    id: "weibo",
    cn: "微博",
    en: "Weibo",
    category: "social",
    icon: "微",
    color: "#e6162d",
    essential: false,
    desc: { en: "Public social network for trends, celebrities, news, and online discussion.", fr: "Réseau social public pour tendances, célébrités, news et discussions." },
    tags: ["Social", "News"],
    badge: { en: "Trends", fr: "Tendances" },
    badgeType: "good",
    note: { en: "China pulse", fr: "Pouls social" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Useful for public trends", fr: "Utile pour tendances publiques" },
    bestFor: { en: "Social trends", fr: "Tendances sociales" },
    steps: { en: ["Search hashtags.", "Follow official accounts.", "Use translation for posts.", "Avoid relying on rumors."], fr: ["Cherchez hashtags.", "Suivez comptes officiels.", "Traduisez posts.", "Évitez les rumeurs."] },
    caution: { en: "Public discussion moves quickly and context matters.", fr: "Les discussions vont vite et le contexte compte." },
    similar: "X/Twitter",
    store: "Weibo"
  },
  {
    id: "wecom",
    cn: "企业微信",
    en: "WeCom",
    category: "work",
    icon: "企",
    color: "#1f7aff",
    essential: false,
    desc: { en: "Enterprise WeChat for workplace chat, contacts, approvals, and customer communication.", fr: "WeChat entreprise pour chat pro, contacts, validations et clients." },
    tags: ["Work", "Enterprise"],
    badge: { en: "Company-driven", fr: "Selon entreprise" },
    badgeType: "caution",
    note: { en: "Install if required", fr: "Si demandé" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Depends on employer invite", fr: "Dépend de l'invitation employeur" },
    bestFor: { en: "Work communication", fr: "Communication pro" },
    steps: { en: ["Join from employer invite.", "Confirm organization identity.", "Set notification boundaries.", "Ask admin for language support."], fr: ["Rejoignez via invitation.", "Confirmez l'organisation.", "Réglez notifications.", "Demandez support langue."] },
    caution: { en: "Work setup depends entirely on the organization.", fr: "La configuration dépend de l'organisation." },
    similar: "Slack + Microsoft Teams + WeChat",
    store: "WeCom"
  },
  {
    id: "feishu",
    cn: "飞书",
    en: "Feishu",
    category: "work",
    icon: "飞",
    color: "#3370ff",
    essential: false,
    desc: { en: "Work collaboration suite with chat, docs, meetings, calendars, and approvals.", fr: "Suite de collaboration avec chat, docs, réunions, calendrier et validations." },
    tags: ["Work", "Docs"],
    badge: { en: "Modern work suite", fr: "Suite pro moderne" },
    badgeType: "good",
    note: { en: "ByteDance work app", fr: "App pro ByteDance" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Good if your team uses it", fr: "Bien si votre équipe l'utilise" },
    bestFor: { en: "Team collaboration", fr: "Collaboration équipe" },
    steps: { en: ["Join workspace invite.", "Set profile and notifications.", "Use docs and calendar together.", "Ask team about language conventions."], fr: ["Rejoignez workspace.", "Réglez profil et notifications.", "Utilisez docs et calendrier.", "Demandez conventions de langue."] },
    caution: { en: "Only useful when your school or company uses it.", fr: "Utile seulement si école ou entreprise l'utilise." },
    similar: "Slack + Google Workspace + Notion",
    store: "Feishu"
  }
];

apps.push(...restoredOriginalApps);

const iconAssets = {
  wechat: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8b/9f/53/8b9f534e-e826-d72a-f3ae-04231eef8ccf/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.mm"
  },
  alipay: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c9/6a/b4/c96ab483-5589-1806-e7f7-97802455e6b3/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%94%AF%E4%BB%98%E5%AE%9D-%E4%BE%BF%E6%8D%B7%E7%94%9F%E6%B4%BB-%E4%B8%80%E7%82%B9%E5%B0%B1%E5%A5%BD/id333206289?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone"
  },
  tenpaygo: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6d/5d/c9/6d5dc9e6-0d75-4a7e-67be-e7466f1fa44a/AppIcon-0-0-1x_U007ephone-0-1-0-0-85-220.jpeg/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/us/app/tenpaygo/id6778755338?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.wxpai"
  },
  yuanbao: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/81/54/e9/8154e998-73d2-d1ec-9ed0-b383f2e445e7/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id6480446430?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.hunyuan.app.chat"
  },
  deepseek: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cb/38/c4/cb38c4e2-3a04-5f92-eb04-67a943c32ed1/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id6737597349?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.deepseek.chat"
  },
  kimi: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5e/7d/2d/5e7d2db4-8e41-cde1-bfd4-d8ad108ea342/AppIcon26-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id6474233312?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.moonshot.kimichat"
  },
  doubao: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/76/97/22/769722f0-2b89-f875-278d-25f78101f454/AppIcon-0-0-1x_U007epad-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id6459478672?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.larus.nova"
  },
  bing: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/13/f6/f2/13f6f204-d41c-e87e-9f2d-6763eed5c453/AppIcon-0-1x_U007epad-0-1-0-0-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id1114765817?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.microsoft.bing"
  },
  mullvad: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/88/3d/23883d39-03ab-6b8a-8afc-cdd40c6031f4/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/us/app/mullvad-vpn/id1488466513?uo=4"
  },
  astrill: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9d/d3/07/9dd307f7-7975-4d5f-ab59-d7c51ed55a65/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/us/app/astrill-vpn-client/id572953702?uo=4"
  },
  surfshark: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/23/74/7b23743b-c69f-faaa-cc8e-1fc0a1b8fcd6/iOS_AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/us/app/surfshark-vpn-fast-private/id1391782046?uo=4"
  },
  amap: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/15/09/a3/1509a39d-42f1-ee06-0653-9b5863c83819/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE-%E9%AB%98%E5%BE%B7%E6%89%93%E8%BD%A6-%E5%AF%BC%E8%88%AA%E5%85%AC%E4%BA%A4%E5%9C%B0%E9%93%81%E5%87%BA%E8%A1%8C/id461703208?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.autonavi.minimap"
  },
  didi: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/36/2a/e6/362ae61e-3c63-f9ba-8ce9-7a4228457e53/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%BB%B4%E6%BB%B4%E5%9B%BD%E9%99%85%E7%89%88-%E5%A2%83%E5%A4%96%E5%87%BA%E8%A1%8C-%E8%BD%BB%E6%9D%BE%E6%89%93%E8%BD%A6/id1362398401?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.sdu.didi.psnger"
  },
  hellobike: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/9b/f0/c79bf015-e491-9666-bccd-9b9ba44061f3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id1165227346?uo=4"
  },
  meituan: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/4c/cf/b64ccfc6-6775-53aa-b46b-9def7004f84a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%A2-%E9%97%AE%E7%BE%8E%E5%9B%A2-%E9%83%BD%E5%AE%89%E6%8E%92/id423084029?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.sankuai.meituan"
  },
  dianping: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/d8/8d/40d88d83-2390-6a4d-ae03-2db7fdf13463/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84-%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E6%8C%87%E5%8D%97/id351091731?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.dianping.v1"
  },
  taobao: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4d/c4/26/4dc42695-c9b2-d11f-7e20-ec9e1f8d3cb0/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%B7%98%E5%AE%9D-%E4%B8%87%E8%83%BD%E7%9A%84%E6%B7%98%E5%AE%9D/id387682726?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.taobao.taobao"
  },
  pinduoduo: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/dc/2f/36/dc2f36d3-33d1-2acb-1464-0e19e7d82fd2/AppIcon-1x_U007emarketing-0-8-0-0-0-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%8B%BC%E5%A4%9A%E5%A4%9A-%E5%A4%9A%E5%A4%9A%E4%B9%B0%E8%8F%9C-%E7%99%BE%E4%BA%BF%E8%A1%A5%E8%B4%B4/id1044283059?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.xunmeng.pinduoduo"
  },
  xianyu: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a5/71/8a/a5718a2e-61dc-f26e-d1a0-5250ea3dc0ef/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%97%B2%E9%B1%BC-%E4%B8%8A%E9%97%B2%E9%B1%BC-%E8%B5%9A%E4%B8%80%E7%AC%94/id510909506?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.taobao.idlefish"
  },
  beike: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/e9/9d/06e99d7e-95af-fb16-4c6d-d2408da8970c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E8%B4%9D%E5%A3%B3%E6%89%BE%E6%88%BF-%E4%B9%B0%E6%88%BF%E8%A3%85%E4%BF%AE%E6%96%B0%E6%88%BF%E4%BA%8C%E6%89%8B%E6%88%BF%E7%A7%9F%E6%88%BF%E5%B9%B3%E5%8F%B0/id1347663353?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.beike"
  },
  lianjia: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/12/02/c5/1202c54c-a228-20af-403f-b9538d23f3a1/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%93%BE%E5%AE%B6/id405882753?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.lianjia.beike"
  },
  ziroom: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bf/fb/cf/bffbcf17-2ec6-144d-d53f-817f99a75f1b/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id685872176?uo=4"
  },
  wellcee: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ae/f2/2d/aef22daa-e2ce-258b-99ed-8c7f188bd2e5/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/id1323479370?uo=4"
  },
  eleme: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/54/6c/60546cf7-5d4a-e43f-9bd3-572ba5c624c4/AppIcon_new-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD-%E7%82%B9%E5%A4%96%E5%8D%96%E6%9B%B4%E4%BC%98%E6%83%A0/id507161324?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=me.ele"
  },
  luckin: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d2/d1/4d/d2d14d07-39b4-19b7-5406-fd4db8f4c0e6/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1/id1296749505?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.luckin.coffee"
  },
  mixue: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fb/35/e9/fb35e921-e3b1-3b18-dbf5-a52027d759ac/AppIcon-0-0-1x_U007emarketing-0-8-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E-%E9%AB%98%E8%B4%A8%E5%B9%B3%E4%BB%B7/id1504835619?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.mxbi"
  },
  baidumaps: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7e/10/6c/7e106c65-fa75-a380-4f95-5fd556bd6100/appIconLiquid-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E6%99%BA%E8%83%BD%E5%AF%BC%E8%88%AA-%E6%89%93%E8%BD%A6%E5%9C%B0%E9%93%81%E5%85%AC%E4%BA%A4%E6%9B%B4%E5%BF%AB%E5%87%BA%E8%A1%8C/id452186370?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.baidu.BaiduMap"
  },
  kuaishou: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a5/af/d5/a5afd547-1c9f-7683-83bd-cdfd5bdc878b/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%BF%AB%E6%89%8B/id440948110?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.smile.gifmaker"
  },
  bilibili: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7e/40/1c/7e401cc2-55e4-4ea5-e2ab-a56cf9269860/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E5%BC%B9%E5%B9%95%E7%95%AA%E5%89%A7%E7%9B%B4%E6%92%AD%E9%AB%98%E6%B8%85%E8%A7%86%E9%A2%91/id736536022?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.bilibili.app.in"
  },
  wetv: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/ef/99/d3ef9931-0ac0-2fe0-b16c-a3da95039855/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91-%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D-%E6%83%85%E6%84%9F%E5%9B%BE%E9%89%B4/id458318329?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.qqlive"
  },
  iqiyi: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/d3/6a/ebd36a36-1218-39e3-f60d-3f3008390b91/AppIcon-0-1x_U007ephone-0-0-0-1-0-0-sRGB-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%88%B1%E5%A5%87%E8%89%BA-%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA-%E8%8D%92%E8%AF%9E%E7%8A%AF%E7%BD%AA%E5%89%A7/id393765873?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.qiyi.video"
  },
  neteasemusic: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ce/13/bf/ce13bf37-551d-0c12-ad34-be4cb6738f5d/appIconNew-0-1x_U007epad-0-1-0-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90-%E6%95%B0%E4%BA%BF%E9%9F%B3%E4%B9%90%E7%95%85%E5%90%AC/id590338362?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.netease.cloudmusic"
  },
  qqmusic: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3a/1b/fe/3a1bfe67-1575-9821-d387-15d82a468efa/AppIcon-0-0-1x_U007ephone-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/qq%E9%9F%B3%E4%B9%90-%E5%90%AC%E6%88%91%E6%83%B3%E5%90%AC/id414603431?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.qqmusic"
  },
  toutiao: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4d/45/a5/4d45a590-4113-e454-d7a2-706cf3395024/AppIcon-News-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1/id529092160?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.ss.android.article.news"
  },
  tencentnews: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/e9/73/f8e9734e-f3ab-dd0d-cef8-2a488e6a90c0/AppIconNew-0-0-1x_U007epad-0-9-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E6%96%B0%E9%97%BB/id399363156?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.news"
  },
  baicizhan: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ca/84/d2/ca84d278-4b4d-0f59-5c08-9934b803e8b2/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%99%BE%E8%AF%8D%E6%96%A9-%E5%AD%A6%E5%A4%96%E8%AF%AD-%E8%83%8C%E5%8D%95%E8%AF%8D%E5%BF%85%E5%A4%87/id557545298?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.bci.android"
  },
  qunar: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/19/d9/41/19d941a2-ecf2-9ee7-8e0b-a8033e247e1d/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%8E%BB%E5%93%AA%E5%84%BF%E6%97%85%E8%A1%8C-%E8%AE%A2%E9%85%92%E5%BA%97%E6%9C%BA%E7%A5%A8%E7%81%AB%E8%BD%A6%E7%A5%A8/id395096736?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.Qunar"
  },
  weibo: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/34/2c/55342c64-920b-b5c2-ac4c-1ce7080dc729/WeiboAppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%BE%AE%E5%8D%9A/id350962117?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.sina.weibo"
  },
  wecom: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6e/f3/e1/6ef3e177-d47c-f550-cd1d-2d68d7cac114/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1/id1087897068?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.wework"
  },
  feishu: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e9/35/43/e935432a-8826-425f-5944-3560230a999f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%A3%9E%E4%B9%A6-%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E6%97%97%E4%B8%8B-ai-%E5%B7%A5%E4%BD%9C%E5%B9%B3%E5%8F%B0/id1401729613?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.ss.android.lark.feishu"
  },
  "12306": {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/43/5e/ac/435eaceb-0c86-383c-c262-2e9a405c8ecf/AppIcon-0-0-1x_U007emarketing-0-9-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%93%81%E8%B7%AF12306/id564818797?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.MobileTicket"
  },
  xiaohongshu: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/95/40/a2/9540a2d5-892d-713b-3bad-4d652b549af3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E5%85%B4%E8%B6%A3%E7%A4%BE%E5%8C%BA/id741292507?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.xingin.xhs"
  },
  douyin: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b6/12/37/b61237d2-7d27-d169-19b8-364daab2299f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%8A%96%E9%9F%B3/id1142110895?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.ss.android.ugc.aweme"
  },
  jd: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/00/12/27/0012274c-b0c0-7c23-b329-5225d93e7c3b/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E4%BA%AC%E4%B8%9C-%E5%8F%88%E5%A5%BD%E5%8F%88%E4%BE%BF%E5%AE%9C/id414245413?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.jingdong.app.mall"
  },
  ctrip: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/61/f2/ff/61f2ff23-ae77-a3f1-1f2a-cb6fa5a7d5ca/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%90%BA%E7%A8%8B%E6%97%85%E8%A1%8C-%E8%AE%A2%E9%85%92%E5%BA%97%E6%9C%BA%E7%A5%A8%E7%81%AB%E8%BD%A6%E7%A5%A8/id379395415?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=ctrip.android.view"
  },
  tripcom: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/56/f9/fe/56f9fe7f-36ad-50d2-9ef8-8e40537ed0c2/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/us/app/trip-com-book-flights-hotels/id681752345?uo=4"
  },
  dingtalk: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/28/10/c8/2810c844-3cce-03d3-403f-c09570ed501a/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%92%89%E9%92%89/id930368978?uo=4",
    androidUrl: "https://play.google.com/store/apps/details?id=com.alibaba.android.rimet"
  }
};

const state = {
  lang: localStorage.getItem("cag-lang") || "en",
  category: "all",
  pack: "all",
  query: "",
  currentApp: null
};

const els = {
  search: document.querySelector("#searchInput"),
  starterGrid: document.querySelector("#starterGrid"),
  filterRow: document.querySelector("#filterRow"),
  appList: document.querySelector("#appList"),
  resultsNote: document.querySelector("#resultsNote"),
  emptyState: document.querySelector("#emptyState"),
  dialog: document.querySelector("#appDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  closeDialog: document.querySelector("#closeDialog"),
  storeDialog: document.querySelector("#storeDialog"),
  closeStoreDialog: document.querySelector("#closeStoreDialog"),
  storeTitle: document.querySelector("#storeTitle"),
  storeCopy: document.querySelector("#storeCopy"),
  storeActions: document.querySelector("#storeActions"),
  downloadStack: document.querySelector("#downloadStackButton"),
  menuButton: document.querySelector("#menuButton"),
  guideMenu: document.querySelector("#guideMenu"),
  closeMenu: document.querySelector("#closeMenu")
};

function t(key, ...args) {
  const value = translations[state.lang][key] || translations.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function local(value) {
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || "";
}

const sectionAnchors = new Set(["top", "basics", "apps", "compare", "tips"]);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hashFilterMap = {
  payments: { category: "payment", pack: "payments" },
  transport: { pack: "transport" },
  food: { category: "food", pack: "food" },
  shopping: { category: "shopping", pack: "shopping" },
  student: { pack: "student" },
  longstay: { pack: "longstay" }
};

function applyFilterState(key) {
  const explicit = hashFilterMap[key];
  if (explicit) {
    state.category = explicit.category || "all";
    state.pack = explicit.pack || "all";
    state.query = "";
    return true;
  }

  const category = categories.find((item) => item.id === key && item.id !== "all");
  if (category) {
    state.category = category.id;
    state.pack = "all";
    state.query = "";
    return true;
  }

  const pack = packs.find((item) => item.id === key);
  if (pack) {
    state.pack = pack.id;
    state.category = "all";
    state.query = "";
    return true;
  }

  if (key === "all") {
    state.category = "all";
    state.pack = "all";
    state.query = "";
    return true;
  }

  return false;
}

function scrollToId(id, smooth = true) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({
    behavior: smooth && !prefersReducedMotion ? "smooth" : "auto",
    block: "start"
  });
}

function updateHash(key) {
  const nextHash = key ? `#${key}` : "";
  history.replaceState(null, "", `${location.pathname}${location.search}${nextHash}`);
}

function setActiveNav(id) {
  document.querySelectorAll(".bottom-nav a[data-nav]").forEach((link) => {
    const isActive = link.dataset.nav === id;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function openMenu() {
  if (!els.guideMenu.open) els.guideMenu.showModal();
  els.menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (els.guideMenu.open) els.guideMenu.close();
  els.menuButton.setAttribute("aria-expanded", "false");
}

function getAppCategories(app) {
  return app.categories || [app.category];
}

function iconSvg(name) {
  const icons = {
    "plane": '<path d="M16 3 9.5 9.5 3 8l-1 2 5.5 3L5 18l2 1 3.5-4.5 3 5.5 2-1-1.5-6.5L21 6l-5-3Z"/>',
    "credit-card": '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/>',
    "route": '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h3a3 3 0 0 1 0 6h2a3 3 0 0 1 3 3v1"/>',
    "utensils": '<path d="M7 3v8"/><path d="M4 3v4a3 3 0 0 0 6 0V3"/><path d="M7 11v10"/><path d="M17 3v18"/><path d="M14 3h4a3 3 0 0 1 0 6h-1"/>',
    "shopping-bag": '<path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    "graduation-cap": '<path d="m3 8 9-4 9 4-9 4-9-4Z"/><path d="M7 10v5c3 2 7 2 10 0v-5"/><path d="M21 8v6"/>',
    "home": '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    "apple": '<path d="M15.5 4.5c-.8.9-1.8 1.4-3 1.3-.1-1.1.4-2.2 1.1-2.9.8-.8 2-1.4 3-1.4.1 1.1-.3 2.2-1.1 3Z"/><path d="M19 15.8c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.8-4-3.3-2.7-4.1-3-8.9-1.3-11.4 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.4 7.8.6 8.9Z"/>',
    "android": '<path d="M7 9h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"/><path d="M9 9 7 5"/><path d="m15 9 2-4"/><path d="M8 5h8"/><path d="M5 10v5"/><path d="M19 10v5"/><path d="M10 13h.01"/><path d="M14 13h.01"/>',
    "search": '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>'
  };
  return `<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24">${icons[name] || icons.search}</svg>`;
}

function countAppsForCategory(categoryId) {
  if (categoryId === "all") return apps.length;
  return apps.filter((app) => getAppCategories(app).includes(categoryId)).length;
}

function appIconHtml(app) {
  const asset = iconAssets[app.id];
  const fallback = `<span class="icon-fallback">${app.icon}</span>`;
  if (!asset?.iconUrl) {
    return `<span class="app-icon" style="background: ${app.color}">${fallback}</span>`;
  }

  return `
    <span class="app-icon has-image" style="background: ${app.color}">
      <img src="${asset.iconUrl}" alt="${app.en} app icon" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove(); this.parentElement.classList.remove('has-image');">
      ${fallback}
    </span>
  `;
}

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  els.search.placeholder = t("searchPlaceholder");
}

function renderStarters() {
  els.starterGrid.innerHTML = packs.map((pack) => `
    <button id="${pack.id}" class="starter-card ${state.pack === pack.id ? "active" : ""}" type="button" data-pack="${pack.id}" style="--starter-bg: ${pack.color}">
      <span class="starter-icon">${iconSvg(pack.icon)}</span>
      <strong>${local(pack.label)}</strong>
      <small>${local(pack.desc)} · ${pack.appIds.length}</small>
    </button>
  `).join("");
}

function renderFilters() {
  els.filterRow.innerHTML = categories.map((category) => `
    <button class="filter-pill ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">
      <span>${local(category.label)}</span>
      <small>${countAppsForCategory(category.id)}</small>
    </button>
  `).join("");
}

function getFilteredApps() {
  const activePack = packs.find((pack) => pack.id === state.pack);
  const query = state.query.trim().toLowerCase();

  return apps.filter((app) => {
    const appCategories = getAppCategories(app);
    const categoryMatch = state.category === "all" || appCategories.includes(state.category);
    const packMatch = !activePack || activePack.appIds.includes(app.id);
    const haystack = [
      app.cn,
      app.en,
      ...(app.aliases || []),
      appCategories.join(" "),
      local(app.desc),
      local(app.note),
      local(app.badge),
      app.tags.join(" "),
      app.similar
    ].join(" ").toLowerCase();
    const queryMatch = !query || haystack.includes(query);
    return categoryMatch && packMatch && queryMatch;
  }).sort((a, b) => Number(b.essential) - Number(a.essential) || a.en.localeCompare(b.en));
}

function renderApps() {
  const filtered = getFilteredApps();
  const activePack = packs.find((pack) => pack.id === state.pack);
  els.resultsNote.textContent = activePack
    ? `${local(activePack.label)} · ${t("results", filtered.length)}`
    : t("results", filtered.length);
  els.emptyState.classList.toggle("hidden", filtered.length > 0);
  els.appList.innerHTML = filtered.map((app, index) => `
    <button class="app-card" type="button" data-app="${app.id}" aria-label="${t("viewDetails")}: ${app.en}" style="--reveal-delay: ${Math.min(index * 35, 420)}ms">
      ${appIconHtml(app)}
      <span class="app-main">
        <h3>${app.en} <span lang="zh-Hans">${app.cn}</span></h3>
        <p>${local(app.desc)}</p>
        <span class="tag-row">
          ${app.tags.map((tag) => `<span class="tag ${tag.toLowerCase().includes("shopping") ? "warning" : ""}">${tag}</span>`).join("")}
        </span>
      </span>
      <span class="app-side">
        <span class="badge ${app.badgeType === "caution" ? "caution" : ""}">◆ ${local(app.badge)}</span>
        <span class="app-note">${local((app.categories || []).includes("bike") && state.category === "bike" && app.bikeNote ? app.bikeNote : (app.categories || []).includes("subway") && state.category === "subway" && app.subwayNote ? app.subwayNote : app.note)}</span>
        <span class="arrow">›</span>
      </span>
    </button>
  `).join("");
}

function renderAll() {
  renderI18n();
  renderStarters();
  renderFilters();
  renderApps();
}

function openAppDialog(app) {
  state.currentApp = app;
  els.dialogContent.innerHTML = `
    <div class="dialog-header">
      ${appIconHtml(app)}
      <div>
        <p class="eyebrow">${local(app.badge)}</p>
        <h2 id="dialogTitle">${app.en} <span lang="zh-Hans">${app.cn}</span></h2>
        <p>${local(app.desc)}</p>
        <div class="tag-row">${app.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
    <div class="dialog-meta">
      <div class="meta-card"><span>${t("setup")}</span><strong>${local(app.setup)}</strong></div>
      <div class="meta-card"><span>${t("foreigner")}</span><strong>${local(app.foreigner)}</strong></div>
      <div class="meta-card"><span>${t("bestFor")}</span><strong>${local(app.bestFor)}</strong></div>
    </div>
    <div class="detail-grid">
      <section class="detail-box">
        <h3>${t("howToStart")}</h3>
        <ul>${(state.category === "bike" && app.bikeSteps ? app.bikeSteps : state.category === "subway" && app.subwaySteps ? app.subwaySteps : app.steps)[state.lang].map((step) => `<li>${step}</li>`).join("")}</ul>
      </section>
      <section class="detail-box">
        <h3>${t("watchOut")}</h3>
        <p>${local(app.caution)}</p>
        <h3>${t("similar")}</h3>
        <p>${app.similar}</p>
      </section>
    </div>
    <div class="dialog-actions">
      <button class="primary-action" type="button" data-store="${app.id}">${t("getApp")}</button>
    </div>
  `;
  els.dialog.showModal();
}

function openStoreDialog(appsToShow) {
  const appList = Array.isArray(appsToShow) ? appsToShow : [appsToShow];
  const first = appList[0];
  const title = appList.length === 1 ? `${first.en} ${first.cn}` : t("downloadStack");
  els.storeTitle.textContent = title;
  els.storeCopy.textContent = appList.length === 1 ? t("appStoreCopy", first.en) : t("starterCopy");

  els.storeActions.innerHTML = appList.flatMap((app) => {
    const appStore = iconAssets[app.id]?.iosUrl || `https://apps.apple.com/search?term=${encodeURIComponent(app.store || app.en)}`;
    const androidStore = iconAssets[app.id]?.androidUrl || `https://play.google.com/store/search?q=${encodeURIComponent(app.store || app.en)}`;
    const web = `https://www.google.com/search?q=${encodeURIComponent(`${app.en} ${app.cn} official app`)}`;
    return [
      `<a href="${appStore}" target="_blank" rel="noopener">${iconSvg("apple")}<span>${t("openIos")} · ${app.en}</span></a>`,
      `<a href="${androidStore}" target="_blank" rel="noopener">${iconSvg("android")}<span>${t("openAndroid")} · ${app.en}</span></a>`,
      `<a class="secondary" href="${web}" target="_blank" rel="noopener">${iconSvg("search")}<span>${t("searchWeb")} · ${app.en}</span></a>`
    ];
  }).join("");

  els.storeDialog.showModal();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor) {
    const key = decodeURIComponent(anchor.getAttribute("href").slice(1));
    if (sectionAnchors.has(key)) {
      event.preventDefault();
      history.pushState(null, "", `#${key}`);
      setActiveNav(key === "apps" ? "basics" : key);
      scrollToId(key);
      if (anchor.closest("#guideMenu")) closeMenu();
      return;
    }
    if (applyFilterState(key)) {
      event.preventDefault();
      history.pushState(null, "", `#${key}`);
      renderAll();
      requestAnimationFrame(() => scrollToId("apps"));
      if (anchor.closest("#guideMenu")) closeMenu();
      return;
    }
  }

  const langButton = event.target.closest(".lang-button");
  if (langButton) {
    state.lang = langButton.dataset.lang;
    localStorage.setItem("cag-lang", state.lang);
    renderAll();
    return;
  }

  const starter = event.target.closest("[data-pack]");
  if (starter) {
    state.pack = starter.dataset.pack;
    state.category = "all";
    state.query = "";
    renderAll();
    updateHash(state.pack === "all" ? "apps" : state.pack);
    setActiveNav("basics");
    return;
  }

  const filter = event.target.closest("[data-category]");
  if (filter) {
    state.category = filter.dataset.category;
    state.pack = "all";
    state.query = "";
    renderAll();
    updateHash(state.category === "all" ? "apps" : state.category);
    return;
  }

  const appCard = event.target.closest("[data-app]");
  if (appCard) {
    const app = apps.find((item) => item.id === appCard.dataset.app);
    if (app) openAppDialog(app);
    return;
  }

  const storeButton = event.target.closest("[data-store]");
  if (storeButton) {
    const app = apps.find((item) => item.id === storeButton.dataset.store);
    if (app) openStoreDialog(app);
  }
});

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderApps();
});

els.closeDialog.addEventListener("click", () => closeDialog(els.dialog));
els.closeStoreDialog.addEventListener("click", () => closeDialog(els.storeDialog));
els.dialog.addEventListener("click", (event) => {
  if (event.target === els.dialog) closeDialog(els.dialog);
});
els.storeDialog.addEventListener("click", (event) => {
  if (event.target === els.storeDialog) closeDialog(els.storeDialog);
});
els.downloadStack.addEventListener("click", () => {
  const activePack = packs.find((pack) => pack.id === state.pack) || packs.find((pack) => pack.id === "arrival");
  openStoreDialog(apps.filter((app) => activePack.appIds.includes(app.id)));
});
els.menuButton.addEventListener("click", () => {
  if (els.guideMenu.open) {
    closeMenu();
  } else {
    openMenu();
  }
});
els.closeMenu.addEventListener("click", closeMenu);
els.guideMenu.addEventListener("click", (event) => {
  if (event.target === els.guideMenu) closeMenu();
});
els.guideMenu.addEventListener("close", () => els.menuButton.setAttribute("aria-expanded", "false"));

window.addEventListener("hashchange", () => {
  const key = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (sectionAnchors.has(key)) {
    setActiveNav(key === "apps" ? "basics" : key);
    scrollToId(key);
    return;
  }
  if (key && applyFilterState(key)) {
    renderAll();
    requestAnimationFrame(() => scrollToId("apps"));
  }
});

const initialHash = decodeURIComponent(location.hash.replace(/^#/, ""));
const hasInitialFilter = initialHash ? applyFilterState(initialHash) : false;
renderAll();
if (hasInitialFilter) {
  const scrollToFilteredApps = () => scrollToId("apps", false);
  window.addEventListener("load", scrollToFilteredApps, { once: true });
  if (document.readyState === "complete") scrollToFilteredApps();
}

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  ["top", "basics", "compare", "tips"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) navObserver.observe(section);
  });
}
