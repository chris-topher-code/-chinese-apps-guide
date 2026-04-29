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
    paymentCompare: "Use both if possible. WeChat Pay is everywhere socially; Alipay is often smoother for travel, utilities, and foreign card setup.",
    shoppingCompare: "Taobao has everything, JD is stronger for reliable electronics and delivery, Pinduoduo is deal-heavy but harder for beginners.",
    transportCompare: "Amap is the map and transit brain. Didi is the ride-hailing backup when public transport is not enough.",
    navHome: "Home",
    navPacks: "Packs",
    navCompare: "Compare",
    navTips: "Tips",
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
    openCoolapk: "Open CoolAPK",
    searchWeb: "Search web",
    starterCopy: "Open store searches for the first-week essentials.",
    appStoreCopy: (name) => `Choose where to search for ${name}.`,
    tipsTitle: "First-week tip",
    tipsBody: "Install WeChat, Alipay, a map app, and a translation app before landing. Payment and identity rules change, so verify setup requirements in the app before relying on it."
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
    paymentCompare: "Utilisez les deux si possible. WeChat Pay est partout dans les usages sociaux ; Alipay est souvent plus pratique pour le voyage, les services et les cartes étrangères.",
    shoppingCompare: "Taobao a presque tout, JD est plus fiable pour l'électronique et la livraison, Pinduoduo est très orienté promotions mais moins simple pour débuter.",
    transportCompare: "Amap est le cerveau pour cartes et transports. Didi sert de solution de secours pour les taxis et voitures privées.",
    navHome: "Accueil",
    navPacks: "Packs",
    navCompare: "Comparer",
    navTips: "Conseils",
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
    openCoolapk: "Ouvrir CoolAPK",
    searchWeb: "Recherche web",
    starterCopy: "Ouvrir les recherches store pour les essentiels de la première semaine.",
    appStoreCopy: (name) => `Choisissez où rechercher ${name}.`,
    tipsTitle: "Conseil première semaine",
    tipsBody: "Installez WeChat, Alipay, une app de cartes et une app de traduction avant d'arriver. Les règles de paiement et d'identité changent souvent, donc vérifiez les exigences dans l'app."
  }
};

const packs = [
  { id: "arrival", icon: "✈", color: "#f3ead7", label: { en: "Arrival Basics", fr: "Arrivée" }, categories: ["social", "payment", "transport", "travel"] },
  { id: "payments", icon: "▰", color: "#e5efd9", label: { en: "Payments", fr: "Paiement" }, categories: ["payment"] },
  { id: "transport", icon: "▣", color: "#f5e9c9", label: { en: "Transport", fr: "Transport" }, categories: ["transport", "travel"] },
  { id: "food", icon: "☕", color: "#f3ded3", label: { en: "Food Delivery", fr: "Repas" }, categories: ["food"] },
  { id: "shopping", icon: "▤", color: "#f6ecd7", label: { en: "Shopping", fr: "Shopping" }, categories: ["shopping"] }
];

const categories = [
  { id: "all", label: { en: "All", fr: "Tous" } },
  { id: "social", label: { en: "Social", fr: "Social" } },
  { id: "payment", label: { en: "Payments", fr: "Paiement" } },
  { id: "transport", label: { en: "Transport", fr: "Transport" } },
  { id: "travel", label: { en: "Travel", fr: "Voyage" } },
  { id: "food", label: { en: "Food", fr: "Repas" } },
  { id: "shopping", label: { en: "Shopping", fr: "Shopping" } },
  { id: "video", label: { en: "Video", fr: "Vidéo" } },
  { id: "music", label: { en: "Music", fr: "Musique" } },
  { id: "news", label: { en: "News", fr: "Actualités" } },
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
    categories: ["social", "payment"],
    icon: "微",
    color: "#16b84e",
    essential: true,
    desc: { en: "Messaging, QR codes, mini-programs, services, and social life.", fr: "Messagerie, QR codes, mini-programmes, services et vie sociale." },
    tags: ["Social", "Payments", "Mini apps"],
    badge: { en: "Foreigner-friendly", fr: "Assez accessible" },
    badgeType: "good",
    note: { en: "Set up first", fr: "À configurer tôt" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Works well after phone verification", fr: "Fonctionne après vérification téléphone" },
    bestFor: { en: "Everyone in China", fr: "Tout le monde en Chine" },
    steps: {
      en: ["Install before arrival if possible.", "Register with a phone number.", "Ask contacts to share QR codes.", "Verify payment options before relying on WeChat Pay."],
      fr: ["Installez avant l'arrivée si possible.", "Inscrivez-vous avec un numéro de téléphone.", "Ajoutez les contacts par QR code.", "Vérifiez les options de paiement avant d'en dépendre."]
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
    icon: "支",
    color: "#1677ff",
    essential: true,
    desc: { en: "Pay anywhere, link cards, access travel, utilities, and mini services.", fr: "Payer partout, lier une carte, accéder aux voyages, services et mini-apps." },
    tags: ["Payments", "Finance", "Travel"],
    badge: { en: "Passport setup", fr: "Passeport utile" },
    badgeType: "good",
    note: { en: "Best for daily use", fr: "Très utile au quotidien" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Often the easiest payment start", fr: "Souvent le paiement le plus simple au début" },
    bestFor: { en: "Tourists and residents", fr: "Touristes et résidents" },
    steps: {
      en: ["Install Alipay.", "Add your passport details if requested.", "Try linking an international card.", "Test a small QR payment before depending on it."],
      fr: ["Installez Alipay.", "Ajoutez le passeport si demandé.", "Essayez de lier une carte internationale.", "Testez un petit paiement QR avant d'en dépendre."]
    },
    caution: { en: "Foreign card support can vary by card, merchant, and policy changes.", fr: "Les cartes étrangères peuvent dépendre de la carte, du commerçant et des règles du moment." },
    similar: "Apple Pay + PayPal + local services",
    store: "Alipay"
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
    id: "meituan",
    cn: "美团",
    en: "Meituan",
    category: "food",
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
    id: "wechatpay",
    cn: "微信支付",
    en: "WeChat Pay",
    category: "payment",
    categories: ["payment", "social"],
    icon: "付",
    color: "#19ad4f",
    essential: true,
    desc: { en: "QR payments inside WeChat for shops, restaurants, transfers, and mini-programs.", fr: "Paiements QR dans WeChat pour magasins, restaurants, transferts et mini-programmes." },
    tags: ["Payments", "WeChat"],
    badge: { en: "Inside WeChat", fr: "Dans WeChat" },
    badgeType: "good",
    note: { en: "Set up with WeChat", fr: "À configurer avec WeChat" },
    setup: { en: "Medium", fr: "Moyenne" },
    foreigner: { en: "Depends on WeChat identity and card setup", fr: "Dépend de l'identité et carte WeChat" },
    bestFor: { en: "Everyday QR payments", fr: "Paiements QR quotidiens" },
    steps: { en: ["Open WeChat.", "Go to Pay and Services.", "Check card or identity requirements.", "Test a small merchant payment first."], fr: ["Ouvrez WeChat.", "Allez dans Pay and Services.", "Vérifiez carte ou identité.", "Testez un petit paiement marchand."] },
    caution: { en: "Availability for foreign cards can change by policy and merchant.", fr: "La disponibilité des cartes étrangères peut changer selon règles et commerçants." },
    similar: "Apple Pay + PayPal inside WeChat",
    store: "WeChat Pay"
  },
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
    desc: { en: "Vocabulary learning app with visuals, spaced review, and English study tools.", fr: "App de vocabulaire avec visuels, révisions espacées et outils d'anglais." },
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
    iosUrl: "https://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124?uo=4"
  },
  alipay: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c9/6a/b4/c96ab483-5589-1806-e7f7-97802455e6b3/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%94%AF%E4%BB%98%E5%AE%9D-%E4%BE%BF%E6%8D%B7%E7%94%9F%E6%B4%BB-%E4%B8%80%E7%82%B9%E5%B0%B1%E5%A5%BD/id333206289?uo=4"
  },
  amap: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/15/09/a3/1509a39d-42f1-ee06-0653-9b5863c83819/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE-%E9%AB%98%E5%BE%B7%E6%89%93%E8%BD%A6-%E5%AF%BC%E8%88%AA%E5%85%AC%E4%BA%A4%E5%9C%B0%E9%93%81%E5%87%BA%E8%A1%8C/id461703208?uo=4"
  },
  didi: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/36/2a/e6/362ae61e-3c63-f9ba-8ce9-7a4228457e53/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%BB%B4%E6%BB%B4%E5%9B%BD%E9%99%85%E7%89%88-%E5%A2%83%E5%A4%96%E5%87%BA%E8%A1%8C-%E8%BD%BB%E6%9D%BE%E6%89%93%E8%BD%A6/id1362398401?uo=4"
  },
  meituan: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/4c/cf/b64ccfc6-6775-53aa-b46b-9def7004f84a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%A2-%E9%97%AE%E7%BE%8E%E5%9B%A2-%E9%83%BD%E5%AE%89%E6%8E%92/id423084029?uo=4"
  },
  dianping: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/d8/8d/40d88d83-2390-6a4d-ae03-2db7fdf13463/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84-%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E6%8C%87%E5%8D%97/id351091731?uo=4"
  },
  taobao: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4d/c4/26/4dc42695-c9b2-d11f-7e20-ec9e1f8d3cb0/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%B7%98%E5%AE%9D-%E4%B8%87%E8%83%BD%E7%9A%84%E6%B7%98%E5%AE%9D/id387682726?uo=4"
  },
  pinduoduo: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/dc/2f/36/dc2f36d3-33d1-2acb-1464-0e19e7d82fd2/AppIcon-1x_U007emarketing-0-8-0-0-0-85-220-0.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%8B%BC%E5%A4%9A%E5%A4%9A-%E5%A4%9A%E5%A4%9A%E4%B9%B0%E8%8F%9C-%E7%99%BE%E4%BA%BF%E8%A1%A5%E8%B4%B4/id1044283059?uo=4"
  },
  "12306": {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/43/5e/ac/435eaceb-0c86-383c-c262-2e9a405c8ecf/AppIcon-0-0-1x_U007emarketing-0-9-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%93%81%E8%B7%AF12306/id564818797?uo=4"
  },
  xiaohongshu: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/95/40/a2/9540a2d5-892d-713b-3bad-4d652b549af3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E5%85%B4%E8%B6%A3%E7%A4%BE%E5%8C%BA/id741292507?uo=4"
  },
  douyin: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b6/12/37/b61237d2-7d27-d169-19b8-364daab2299f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%8A%96%E9%9F%B3/id1142110895?uo=4"
  },
  jd: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/00/12/27/0012274c-b0c0-7c23-b329-5225d93e7c3b/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E4%BA%AC%E4%B8%9C-%E5%8F%88%E5%A5%BD%E5%8F%88%E4%BE%BF%E5%AE%9C/id414245413?uo=4"
  },
  ctrip: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/61/f2/ff/61f2ff23-ae77-a3f1-1f2a-cb6fa5a7d5ca/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E6%90%BA%E7%A8%8B%E6%97%85%E8%A1%8C-%E8%AE%A2%E9%85%92%E5%BA%97%E6%9C%BA%E7%A5%A8%E7%81%AB%E8%BD%A6%E7%A5%A8/id379395415?uo=4"
  },
  dingtalk: {
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/28/10/c8/2810c844-3cce-03d3-403f-c09570ed501a/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
    iosUrl: "https://apps.apple.com/cn/app/%E9%92%89%E9%92%89/id930368978?uo=4"
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
  tipsButton: document.querySelector("#tipsButton")
};

function t(key, ...args) {
  const value = translations[state.lang][key] || translations.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function local(value) {
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || "";
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
    <button class="starter-card ${state.pack === pack.id ? "active" : ""}" type="button" data-pack="${pack.id}" style="--starter-bg: ${pack.color}">
      <span>${pack.icon}</span>
      <strong>${local(pack.label)}</strong>
    </button>
  `).join("");
}

function renderFilters() {
  els.filterRow.innerHTML = categories.map((category) => `
    <button class="filter-pill ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">
      ${local(category.label)}
    </button>
  `).join("");
}

function getFilteredApps() {
  const activePack = packs.find((pack) => pack.id === state.pack);
  const query = state.query.trim().toLowerCase();

  return apps.filter((app) => {
    const appCategories = app.categories || [app.category];
    const categoryMatch = state.category === "all" || appCategories.includes(state.category);
    const packMatch = !activePack || appCategories.some((category) => activePack.categories.includes(category)) || app.essential;
    const haystack = [
      app.cn,
      app.en,
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
  els.resultsNote.textContent = t("results", filtered.length);
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
        <span class="app-note">${local(app.note)}</span>
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
        <ul>${local(app.steps).map((step) => `<li>${step}</li>`).join("")}</ul>
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
    const coolapk = `https://www.coolapk.com/search?q=${encodeURIComponent(app.cn || app.en)}`;
    const web = `https://www.google.com/search?q=${encodeURIComponent(`${app.en} ${app.cn} official app`)}`;
    return [
      `<a href="${appStore}" target="_blank" rel="noopener">${t("openIos")} · ${app.en}</a>`,
      `<a href="${coolapk}" target="_blank" rel="noopener">${t("openCoolapk")} · ${app.en}</a>`,
      `<a class="secondary" href="${web}" target="_blank" rel="noopener">${t("searchWeb")} · ${app.en}</a>`
    ];
  }).join("");

  els.storeDialog.showModal();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

document.addEventListener("click", (event) => {
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
    renderAll();
    return;
  }

  const filter = event.target.closest("[data-category]");
  if (filter) {
    state.category = filter.dataset.category;
    state.pack = "all";
    renderAll();
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
  openStoreDialog(apps.filter((app) => ["wechat", "alipay", "amap", "didi", "meituan"].includes(app.id)));
});
els.tipsButton.addEventListener("click", () => {
  els.storeTitle.textContent = t("tipsTitle");
  els.storeCopy.textContent = t("tipsBody");
  els.storeActions.innerHTML = "";
  els.storeDialog.showModal();
});

renderAll();
