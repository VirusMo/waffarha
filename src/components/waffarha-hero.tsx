"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Image from "next/image";

type Language = "ar" | "en";

const team = [
  "فارس منجي سبيتان",
  "مصطفى رمضان شعبان",
  "محمد أحمد عبد النبي",
  "يوسف نبيل عويس",
  "يوسف رمضان حزين",
];

const hardwareImages = [
  { src: "/images/hardware/esp32.jpg", width: 1080, height: 1011 },
  { src: "/images/hardware/ct-current-sensor.jpg", width: 1079, height: 1010 },
  { src: "/images/hardware/pzem-004t.jpg", width: 1080, height: 1015 },
  { src: "/images/hardware/oled-display.jpg", width: 1080, height: 1061 },
  { src: "/images/hardware/power-module.jpg", width: 1080, height: 1073 },
];

const content = {
  ar: {
    switchLabel: "Switch language to English",
    nav: ["نبذة ومميزات", "آلية العمل", "مكونات النظام", "الجانب التقني", "خارطة الطريق"],
    prototype: "مشروع جامعي · نموذج قيد التطوير",
    explore: "استكشف المشروع",
    scroll: "مرّر لاكتشاف الحكاية",
    heroLead: "طاقة البيت المصري،",
    heroAccent: "بصورة أوضح.",
    heroDesc:
      "وفّرها تصور لنظام ذكي منخفض التكلفة يساعد الأسر المصرية على فهم استهلاك الكهرباء — خطوة نحو قرارات يومية أوعى.",
    artLabel: "تصور معماري توضيحي لفكرة وفّرها",
    concept: "تصور للنظام · لم يُجمّع بعد",
    problemKicker: "لماذا وفّرها؟",
    problemTitle: "الاستهلاك يحدث كل يوم.\nلكن الصورة ليست واضحة دائماً.",
    problemBody:
      "من الصعب ملاحظة أثر الأجهزة والعادات اليومية من دون متابعة بسيطة ومفهومة. تبدأ وفّرها من سؤال عملي: كيف نجعل استهلاك البيت أسهل في الفهم؟",
    problemPoints: ["تفاصيل الاستخدام موزعة بين أجهزة كثيرة", "القراءة المجردة لا تشرح نمط الاستهلاك", "الوعي خطوة أولى نحو ترشيد أفضل"],
    solutionKicker: "الفكرة ببساطة",
    solutionTitle: "من القياس إلى فهمٍ يساعدك.",
    solutionBody:
      "المسار المقترح يجمع القياس الكهربائي، معالجة المتحكم، ثم عرض معلومات سهلة القراءة. هذا تسلسل تصميمي مخطط، وليس نظاماً عاملاً بعد.",
    steps: [
      { title: "قياس كهربائي", body: "قراءات التيار والجهد عبر المكوّنات المخطط لها" },
      { title: "حساب الطاقة", body: "معالجة القيم وفق طريقة التنفيذ والمعايرة" },
      { title: "تحليل مبسّط", body: "تلخيص الأنماط لتصبح أوضح للمستخدم" },
      { title: "واجهة متابعة", body: "عرض مفهوم — لوحة اليوم محاكاة توضيحية" },
    ],
    hardwareKicker: "المكوّنات المخططة",
    hardwareTitle: "كل جزء له دور.\nوالتركيب ما زال في الطريق.",
    hardwareNote: "رسوم تخطيطية للمكوّنات — لا توجد صور تركيب فعلي بعد.",
    hardware: [
      ["ESP32", "وحدة تحكم واتصال مقترحة"],
      ["CT Current Sensor", "استشعار التيار ضمن التصميم"],
      ["PZEM-004T", "قياس كهربائي ضمن مسار النموذج"],
      ["OLED Display", "عرض محلي مقترح للقراءات"],
      ["5V Power Module", "تغذية وحدة التحكم في التصميم"],
    ],
    demoKicker: "واجهة مقترحة",
    demoTitle: "هكذا قد تبدو المتابعة.",
    demoNotice: "محاكاة — بيانات للشرح فقط",
    demoBody: "قيم افتراضية لعرض الفكرة. لا اتصال بمستشعرات ولا بيانات مقاسة من جهاز.",
    demoMetric: ["قدرة لحظية", "طاقة اليوم", "مؤشر توضيحي"],
    demoUnit: ["كيلوواط", "كيلوواط ساعة", "عينة فقط"],
    chartTitle: "منحنى استخدام توضيحي",
    chartLabels: ["ص", "ن", "ث", "ر", "خ", "ج", "س"],
    closingKicker: "وفّرها",
    closingTitle: "فهم أوضح للطاقة.\nوخطوة أذكى للبيت.",
    closingBody:
      "مشروع جامعي يستكشف كيف يمكن للتقنية منخفضة التكلفة أن تجعل متابعة استهلاك الكهرباء أقرب وأسهل للأسر المصرية.",
    teamTitle: "فريق المشروع",
    status: "نموذج أولي · المكوّنات لم تُجمّع بعد",
    footer: "وفّرها — مشروع جامعي للطاقة المنزلية في مصر",
    energyHome: "المنزل",
    energySense: "قياس مخطط",
    energyUnderstand: "فهم أوضح",
    heroPresentationTitle: "Smart Energy Manager",
    heroPresentationSubtitle: "نظام ذكي منخفض التكلفة لإدارة استهلاك الكهرباء في المنازل المصرية",
    presentationMessage: "لا نحتاج إلى تحويل كل منزل إلى Smart Home حتى نجعله أكثر ذكاءً في استهلاك الكهرباء.",
    currentStatusTitle: "حالة المشروع الآن",
    currentStatus: "مشروع جامعي في مرحلة التصميم. المكوّنات غير مجمّعة، ولا توجد قراءات فعلية أو وظائف تشغيلية منفّذة حتى الآن.",
    aboutHeading: "نبذة عن المشروع",
    aboutParagraphs: [
      "تتمثل فكرة المشروع في تطوير جهاز ذكي يساعد الأسر المصرية على مراقبة وتحليل وإدارة استهلاك الكهرباء داخل منازلها، دون الحاجة إلى تغيير الأجهزة الكهربائية التقليدية أو تحويل المنزل بالكامل إلى Smart Home.",
      "يعتمد النظام على وحدة إلكترونية تُركَّب بالقرب من لوحة الكهرباء المنزلية، وتستخدم حساسات لقياس التيار والجهد وحساب الطاقة المستهلكة لحظيًا. ثم تُرسل البيانات إلى وحدة معالجة تحلل نمط الاستهلاك وتعرضه للمستخدم من خلال تطبيق هاتف أو لوحة تحكم.",
    ],
    ideaLabel: "الفكرة في جملة واحدة",
    idea: "وحدة واحدة عند لوحة الكهرباء تحوّل أي منزل تقليدي إلى منزل يعرف كم يستهلك، ولماذا، وكيف يوفّر.",
    featuresHeading: "المميزات الرئيسية",
    featureItems: [
      ["مراقبة الاستهلاك", "عرض الاستهلاك اللحظي واليومي والشهري بشكل واضح وبسيط."],
      ["تقدير الفاتورة", "حساب قيمة الفاتورة المتوقعة وفق شرائح الكهرباء المصرية."],
      ["التنبؤ بنهاية الشهر", "توقع الاستهلاك بنهاية الشهر لتجنب مفاجآت الفاتورة."],
      ["اكتشاف الشذوذ", "رصد أنماط الاستهلاك غير الطبيعية، مثل ارتفاع غير مبرر أو جهاز يعمل لفترة طويلة."],
      ["توصيات مخصصة", "نصائح مبنية على نمط استهلاك كل أسرة لمساعدتها على الترشيد."],
      ["التحكم في الأحمال", "إدارة بعض الأجهزة المختارة مثل سخانات ومضخات المياه دون استبدالها."],
    ],
    flowHeading: "آلية عمل النظام",
    flowSteps: [
      ["القياس", "حساسات التيار والجهد عند لوحة الكهرباء"],
      ["الحساب", "حساب الطاقة المستهلكة لحظيًا"],
      ["المعالجة", "تحليل النمط والتنبؤ واكتشاف الشذوذ"],
      ["العرض", "تطبيق هاتف أو لوحة تحكم"],
    ],
    flowDescription: "تُنفَّذ هذه الخطوات بشكل مستمر، فيرى المستخدم صورة محدّثة لاستهلاكه، ويتلقى تقديرات وتوصيات مبنية على بياناته الفعلية.",
    componentsHeading: "مكونات النظام",
    componentRows: [
      ["وحدة القياس", "تُركَّب بالقرب من لوحة الكهرباء، وتقيس التيار والجهد وتحسب الطاقة المستهلكة لحظيًا."],
      ["وحدة المعالجة", "تستقبل البيانات وتحلل نمط الاستهلاك وتطبّق خوارزميات التنبؤ واكتشاف الشذوذ."],
      ["التطبيق / لوحة التحكم", "واجهة المستخدم لعرض الاستهلاك والفاتورة المتوقعة والتنبيهات والتوصيات."],
      ["وحدات التحكم المستقلة", "وحدات آمنة لتشغيل وإيقاف أحمال مختارة، مثل سخانات المياه ومضخات المياه."],
    ],
    loadHeading: "التحكم في الأحمال الكهربائية",
    loadParagraph: "يستهدف المشروع تطوير خاصية للتحكم في بعض الأحمال المختارة من خلال وحدات تحكم مستقلة وآمنة، بما يسمح للمستخدم بإدارة أجهزته التقليدية دون الحاجة إلى استبدالها بأجهزة ذكية.",
    loadItems: ["سخانات المياه.", "مضخات المياه."],
    loadConclusion: "وبذلك يستفيد المستخدم من مزايا الإدارة الذكية بتكلفة أقل بكثير من تغيير الأجهزة.",
    technicalHeading: "الجانب البرمجي والتقني",
    technicalItems: [
      ["إنترنت الأشياء (IoT)", "نقل البيانات من وحدات القياس والتحكم إلى المعالجة والتطبيق."],
      ["تحليل البيانات", "تحويل القراءات الخام إلى معلومات مفهومة: استهلاك يومي وشهري وأنماط الاستخدام."],
      ["خوارزميات التنبؤ", "تقدير الاستهلاك والفاتورة المتوقعة بنهاية الشهر."],
      ["اكتشاف الشذوذ", "رصد السلوك غير الطبيعي في الاستهلاك وتنبيه المستخدم."],
      ["تعلّم آلي متقدم", "إمكانية تطوير نماذج أكثر تقدمًا في المراحل القادمة."],
    ],
    valueHeading: "القيمة المستهدفة",
    valueItems: [
      ["حل عملي", "يناسب المنازل المصرية التقليدية دون تعديل أجهزتها."],
      ["قابل للتصنيع المحلي", "تصميم يمكن تطويره وإنتاجه محليًا."],
      ["قابل للتطوير", "يبدأ بالمراقبة ثم يتوسع إلى التحكم والتحليل المتقدم."],
      ["إدارة أوضح وأسهل", "يجعل فهم الطاقة وترشيدها أمرًا بسيطًا للمستخدم العادي."],
    ],
    visionLabel: "رؤية مستقبلية",
    vision: "إمكانية دمج النظام مع أنظمة الطاقة الشمسية لإدارة الاستهلاك والإنتاج معًا.",
    roadmapHeading: "خارطة طريق مقترحة",
    roadmapStages: [
      ["المرحلة 1 المراقبة", "وحدة القياس، عرض الاستهلاك اللحظي واليومي والشهري، وتقدير الفاتورة وفق الشرائح."],
      ["المرحلة 2 التحليل", "التنبؤ بالاستهلاك، اكتشاف الشذوذ، والتوصيات المخصصة."],
      ["المرحلة 3 التحكم", "وحدات تحكم مستقلة وآمنة لسخانات ومضخات المياه."],
      ["المرحلة 4 التوسع", "نماذج تعلّم آلي أكثر تقدمًا، والتكامل مع الطاقة الشمسية."],
    ],
    roadmapNote: "ترتيب المراحل مقترح للتنفيذ التدريجي، ويمكن تعديله وفق الإمكانات والأولويات.",
    pageLabel: "من العرض التقديمي الأصلي",
    visualDisclaimer: "تصور مقترح فقط · الجهاز غير مُجمّع · أي أرقام توضيحية وليست قراءات فعلية",
    proposedDisclaimer: "المميزات والوظائف التالية قدرات مقترحة في العرض، ولم تُنفّذ بعد في جهاز عامل.",
    flowDisclaimer: "الوصف أعلاه يشرح آلية النظام المقترحة؛ الجهاز غير مُجمّع ولا تتوفر بيانات فعلية حتى الآن.",
    imageOverviewAlt: "رسم توضيحي لنبذة ومميزات نظام إدارة الطاقة الذكي",
    imageFlowAlt: "مخطط آلية عمل النظام من القياس إلى العرض",
    imageComponentsAlt: "مخطط مكونات النظام وأدوارها",
    imageRoadmapAlt: "مخطط خارطة الطريق المقترحة للمشروع",
  },
  en: {
    switchLabel: "غيّر اللغة إلى العربية",
    nav: ["Overview & features", "How it works", "Components", "Technical", "Roadmap"],
    prototype: "University project · Prototype in progress",
    explore: "Explore the project",
    scroll: "Scroll to follow the story",
    heroLead: "Egyptian home energy,",
    heroAccent: "made clearer.",
    heroDesc:
      "Waffarha is an affordable smart-system concept designed to help Egyptian households understand electricity use and make more informed everyday choices.",
    artLabel: "Architectural concept illustration for Waffarha",
    concept: "System concept · Not assembled",
    problemKicker: "Why Waffarha",
    problemTitle: "Energy is used every day.\nThe full picture is not always clear.",
    problemBody:
      "Without simple, understandable feedback, the impact of appliances and daily habits can be hard to see. Waffarha starts with a practical question: how can home energy use be easier to understand?",
    problemPoints: ["Usage is spread across many appliances", "A raw reading alone does not explain a pattern", "Awareness is a first step toward better choices"],
    solutionKicker: "The idea, simply",
    solutionTitle: "From measurement to useful insight.",
    solutionBody:
      "The proposed path brings together electrical measurement, controller processing, and a clear interface. This is a planned design sequence, not an operating system.",
    steps: [
      { title: "Measure", body: "Current and voltage through the planned components" },
      { title: "Calculate energy", body: "Process values using the eventual implementation and calibration" },
      { title: "Summarize", body: "Make usage patterns easier to understand" },
      { title: "Present", body: "A considered interface — the dashboard here is illustrative" },
    ],
    hardwareKicker: "Planned components",
    hardwareTitle: "Every part has a role.\nAssembly is still ahead.",
    hardwareNote: "Schematic illustrations only — there are no photos of an assembled device yet.",
    hardware: [
      ["ESP32", "Proposed controller and connectivity"],
      ["CT Current Sensor", "Current sensing in the proposed design"],
      ["PZEM-004T", "Electrical measurement in the prototype path"],
      ["OLED Display", "Proposed local readout"],
      ["5V Power Module", "Controller supply in the design"],
    ],
    demoKicker: "Interface concept",
    demoTitle: "A possible view of home energy.",
    demoNotice: "SIMULATION — DEMONSTRATION DATA",
    demoBody: "Illustrative sample values only. No sensor connection and no measurements from a device.",
    demoMetric: ["Instant power", "Today's energy", "Illustrative index"],
    demoUnit: ["kW", "kWh", "sample only"],
    chartTitle: "Illustrative usage curve",
    chartLabels: ["S", "M", "T", "W", "T", "F", "S"],
    closingKicker: "Waffarha · وفّرها",
    closingTitle: "Clearer energy insight.\nA more thoughtful home.",
    closingBody:
      "A university project exploring how accessible technology could make electricity use easier to follow for households in Egypt.",
    teamTitle: "Project team",
    status: "University prototype · Hardware not assembled",
    footer: "Waffarha — A university home-energy project in Egypt",
    energyHome: "HOME",
    energySense: "PLANNED MEASUREMENT",
    energyUnderstand: "CLEARER INSIGHT",
    heroPresentationTitle: "Smart Energy Manager",
    heroPresentationSubtitle: "An affordable smart system for managing electricity consumption in Egyptian homes",
    presentationMessage: "We do not need to turn every home into a Smart Home to make it smarter about electricity consumption.",
    currentStatusTitle: "Project status today",
    currentStatus: "A university project in the design stage. The components are not assembled, and there are no actual readings or implemented operating features yet.",
    aboutHeading: "About the project",
    aboutParagraphs: [
      "The project proposes developing a smart device that helps Egyptian households monitor, analyze, and manage electricity consumption in their homes, without needing to replace traditional electrical appliances or convert the entire home into a Smart Home.",
      "The system is based on an electronic unit installed near the home electrical panel. It uses sensors to measure current and voltage and calculate energy consumed in real time. The data is then sent to a processing unit that analyzes consumption patterns and presents them through a phone app or control panel.",
    ],
    ideaLabel: "The idea in one sentence",
    idea: "One unit at the electrical panel turns any traditional home into a home that knows how much it consumes, why, and how to save.",
    featuresHeading: "Key features",
    featureItems: [
      ["Consumption monitoring", "Clearly and simply display real-time, daily, and monthly consumption."],
      ["Bill estimation", "Calculate the expected bill according to Egyptian electricity tariff bands."],
      ["End-of-month prediction", "Forecast consumption by month end to avoid bill surprises."],
      ["Anomaly detection", "Detect unusual consumption patterns, such as an unexplained increase or an appliance running for a long time."],
      ["Personalized recommendations", "Advice based on each household’s consumption pattern to help it conserve energy."],
      ["Load control", "Manage selected appliances such as water heaters and pumps without replacing them."],
    ],
    flowHeading: "How the system works",
    flowSteps: [
      ["Measure", "Current and voltage sensors at the electrical panel"],
      ["Calculate", "Calculate energy consumed in real time"],
      ["Process", "Analyze patterns, forecast, and detect anomalies"],
      ["Present", "Phone application or control panel"],
    ],
    flowDescription: "These steps are designed to run continuously so users can see an updated view of their consumption and receive estimates and recommendations based on their actual data.",
    componentsHeading: "System components",
    componentRows: [
      ["Measurement unit", "Installed near the electrical panel; measures current and voltage and calculates energy consumed in real time."],
      ["Processing unit", "Receives data, analyzes consumption patterns, and applies forecasting and anomaly-detection algorithms."],
      ["Application / control panel", "The user interface for consumption, estimated bills, alerts, and recommendations."],
      ["Independent control units", "Safe units for switching selected loads, such as water heaters and water pumps, on and off."],
    ],
    loadHeading: "Electrical load control",
    loadParagraph: "The project aims to develop control of selected loads using independent, safe control units. This would let users manage traditional appliances without replacing them with smart appliances.",
    loadItems: ["Water heaters.", "Water pumps."],
    loadConclusion: "This lets users benefit from smart management at a much lower cost than replacing appliances.",
    technicalHeading: "Software and technical aspects",
    technicalItems: [
      ["Internet of Things (IoT)", "Transfer data from measurement and control units to processing and the application."],
      ["Data analysis", "Turn raw readings into understandable information: daily and monthly consumption and usage patterns."],
      ["Forecasting algorithms", "Estimate consumption and the expected bill at the end of the month."],
      ["Anomaly detection", "Detect unusual consumption behavior and alert the user."],
      ["Advanced machine learning", "Possibility of developing more advanced models in future stages."],
    ],
    valueHeading: "Target value",
    valueItems: [
      ["Practical solution", "Suited to traditional Egyptian homes without modifying their appliances."],
      ["Locally manufacturable", "A design that can be developed and produced locally."],
      ["Expandable", "Starts with monitoring, then expands into control and advanced analysis."],
      ["Clearer, easier management", "Makes understanding and conserving energy simple for everyday users."],
    ],
    visionLabel: "Future vision",
    vision: "The possibility of integrating the system with solar energy systems to manage consumption and generation together.",
    roadmapHeading: "Proposed roadmap",
    roadmapStages: [
      ["Stage 1 — Monitoring", "Measurement unit; display real-time, daily, and monthly consumption; estimate the bill according to tariff bands."],
      ["Stage 2 — Analysis", "Consumption forecasting, anomaly detection, and personalized recommendations."],
      ["Stage 3 — Control", "Independent and safe control units for water heaters and water pumps."],
      ["Stage 4 — Expansion", "More advanced machine-learning models and integration with solar energy."],
    ],
    roadmapNote: "The stages are proposed for gradual implementation and may be adjusted according to capabilities and priorities.",
    pageLabel: "From the original presentation",
    visualDisclaimer: "Concept illustration only · hardware not assembled · figures are examples, not live readings",
    proposedDisclaimer: "The following features are proposed capabilities from the presentation; they are not implemented in a working device.",
    flowDisclaimer: "This describes the proposed system flow; the device is not assembled and no actual data is available yet.",
    imageOverviewAlt: "Illustration of the smart energy management project and its features",
    imageFlowAlt: "Diagram of the system flow from measurement to presentation",
    imageComponentsAlt: "Diagram of system components and their roles",
    imageRoadmapAlt: "Diagram of the proposed project roadmap",
  },
} as const;

function HeadingWords({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`heading-words ${className}`} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span className="heading-word" aria-hidden="true" key={`${word}-${index}`} style={{ "--word-index": index } as CSSProperties}>
          {word}
        </span>
      ))}
    </span>
  );
}

function HouseEnergyArt({ label }: { label: string }) {
  return (
    <div className="house-art scroll-visual" role="img" aria-label={label} data-parallax="0.7">
      <div className="house-art-halo" />
      <div className="architecture architecture-back" />
      <div className="architecture architecture-mid" />
      <svg className="house-svg" viewBox="0 0 620 570" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="power-line" x1="95" y1="450" x2="500" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#18BD93" />
            <stop offset=".56" stopColor="#55DFC0" />
            <stop offset="1" stopColor="#F4C95D" />
          </linearGradient>
          <linearGradient id="home-glass" x1="280" y1="200" x2="310" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#113D46" stopOpacity=".94" />
            <stop offset="1" stopColor="#0A202B" stopOpacity=".32" />
          </linearGradient>
          <filter id="line-light" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path className="art-path art-path-muted" d="M70 426h100l42-44M443 149h97v78M444 426h104v-64" />
        <path className="art-path art-path-flow" pathLength="1" d="M70 426h100l42-44 39-29 69 6 59-56 45-70 59-56" />
        <path className="home-body" d="m160 266 150-117 150 117v182c0 16-13 29-29 29H189c-16 0-29-13-29-29V266Z" />
        <path className="home-roof" d="m133 271 177-138 177 138" />
        <path className="home-inner" d="m192 281 118-91 118 91v166H192V281Z" />
        <path className="house-wire" d="M200 398h74v-54h73v54h71" />
        <rect className="house-window" x="214" y="297" width="57" height="65" rx="12" />
        <rect className="house-window house-window-gold" x="350" y="297" width="57" height="65" rx="12" />
        <path className="house-door" d="M281 447v-61a29 29 0 0 1 58 0v61" />
        <path className="art-bolt" d="m315 216-28 51h23l-9 37 43-58h-27l13-30Z" />
        <path className="art-leaf" d="M314 126c0-49 30-78 77-91-2 49-26 81-70 94" />
        <path className="art-leaf-stem" d="M310 144c7-43 31-76 66-98" />
        <circle className="path-node node-start" cx="70" cy="426" r="7" />
        <circle className="path-node node-mid" cx="341" cy="359" r="6" />
        <circle className="path-node node-end" cx="507" cy="211" r="7" />
        <g className="flow-pulse" filter="url(#line-light)"><circle r="6" /></g>
      </svg>
      <div className="house-caption"><span className="caption-dot" /><span>HOME ENERGY · CONCEPT</span></div>
    </div>
  );
}

function EnergyBridge({ labels }: { labels: readonly string[] }) {
  return (
    <div className="energy-bridge scroll-visual" aria-hidden="true" data-parallax="0.45">
      <svg viewBox="0 0 720 260" preserveAspectRatio="none">
        <path className="bridge-base" d="M0 190 C110 190 110 75 230 75 S350 190 465 190 595 85 720 85" />
        <path className="bridge-flow" pathLength="1" d="M0 190 C110 190 110 75 230 75 S350 190 465 190 595 85 720 85" />
        <circle className="bridge-node bridge-node-a" cx="230" cy="75" r="7" />
        <circle className="bridge-node bridge-node-b" cx="465" cy="190" r="7" />
      </svg>
      <div className="bridge-label bridge-label-a">{labels[0]}</div>
      <div className="bridge-label bridge-label-b">{labels[1]}</div>
      <div className="bridge-label bridge-label-c">{labels[2]}</div>
    </div>
  );
}

function StoryHeading({ id, kicker, title, body }: { id: string; kicker: string; title: string; body?: string }) {
  return (
    <div className="story-heading scroll-reveal">
      <span className="section-kicker"><i />{kicker}</span>
      <h2 id={id}><HeadingWords text={title} /></h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function PresentationImage({ src, alt, caption, disclaimer, onEnlarge }: { src: string; alt: string; caption: string; disclaimer: string; onEnlarge: (src: string, alt: string, width: number, height: number) => void }) {
  return (
    <figure className="presentation-image scroll-reveal">
      <button className="image-zoom-trigger" type="button" onClick={() => onEnlarge(src, alt, 1672, 941)} aria-label={`${alt} — enlarge image`}>
        <Image src={src} alt={alt} width={1672} height={941} sizes="(max-width: 720px) 92vw, 72vw" />
      </button>
      <figcaption><i /><span>{caption}</span><small>{disclaimer}</small></figcaption>
    </figure>
  );
}

export default function WaffarhaHero() {
  const [language, setLanguage] = useState<Language>("ar");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string; width: number; height: number } | null>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const experience = experienceRef.current;
    if (!experience) return;

    const revealElements = experience.querySelectorAll<HTMLElement>(".scroll-reveal, .hardware-card");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revealElements.forEach((element) => observer.observe(element));

    const supportsScrollTimeline = CSS.supports("animation-timeline: view()") && CSS.supports("animation-timeline: scroll()")
      ? true
      : CSS.supports("animation-timeline", "view()");
    let queued = false;
    const updateFallbackMotion = () => {
      if (supportsScrollTimeline || queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        const viewport = window.innerHeight;
        experience.querySelectorAll<HTMLElement>(".scroll-visual").forEach((element) => {
          const bounds = element.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, (viewport - bounds.top) / (viewport + bounds.height)));
          const distance = Number(element.dataset.parallax ?? 0.3);
          element.style.setProperty("--scene-depth-y", `${(0.5 - progress) * 54 * distance}px`);
          element.style.setProperty("--scene-depth-scale", String(0.94 + progress * 0.08));
        });
        queued = false;
      });
    };
    if (!supportsScrollTimeline) {
      window.addEventListener("scroll", updateFallbackMotion, { passive: true });
      window.addEventListener("resize", updateFallbackMotion, { passive: true });
      updateFallbackMotion();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFallbackMotion);
      window.removeEventListener("resize", updateFallbackMotion);
    };
  }, []);

  useEffect(() => {
    if (!zoomedImage) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setZoomedImage(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [zoomedImage]);

  function enlargeImage(src: string, alt: string, width: number, height: number) {
    setZoomedImage({ src, alt, width, height });
  }

  function moveEnergyField(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !experienceRef.current) return;
    const experience = experienceRef.current;
    experience.style.setProperty("--pointer-x", `${event.clientX}px`);
    experience.style.setProperty("--pointer-y", `${event.clientY}px`);

    experience.querySelectorAll<HTMLElement>("[data-parallax]").forEach((layer) => {
      const box = layer.getBoundingClientRect();
      const factor = Number(layer.dataset.parallax ?? 0.3);
      const dx = (event.clientX - (box.left + box.width / 2)) / Math.max(box.width, 1);
      const dy = (event.clientY - (box.top + box.height / 2)) / Math.max(box.height, 1);
      layer.style.setProperty("--mouse-x", `${dx * 30 * factor}px`);
      layer.style.setProperty("--mouse-y", `${dy * 24 * factor}px`);
    });
  }

  function tiltCard(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--tilt-x", `${(x - 0.5) * 8}deg`);
    card.style.setProperty("--tilt-y", `${(0.5 - y) * 8}deg`);
    card.style.setProperty("--shine-x", `${x * 100}%`);
    card.style.setProperty("--shine-y", `${y * 100}%`);
  }

  function resetCard(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <main className="waffarha-experience" ref={experienceRef} onPointerMove={moveEnergyField}>
      <div className="cursor-energy-field" aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
      <div className="story-progress" aria-hidden="true"><span /></div>

      <header className="story-header">
        <a className="story-brand" href="#home" aria-label="Waffarha home">
          <span className="story-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none"><path d="M5 20 21 7l16 13v17H5V20Z" /><path d="M16 37V24h10v13" /><path d="m24 14-8 12h7l-3 7 12-15h-7l3-4" className="brand-lightning" /></svg>
          </span>
          <span><strong>وفّرها</strong><small>WAFFARHA</small></span>
        </a>
        <nav className="story-nav" aria-label={language === "ar" ? "التنقل بين المشاهد" : "Scene navigation"}>
          {[
            ["problem", t.nav[0]],
            ["how-it-works", t.nav[1]],
            ["hardware", t.nav[2]],
            ["technical", t.nav[3]],
            ["roadmap", t.nav[4]],
          ].map(([id, label], index) => <a href={`#${id}`} key={id}><i>0{index + 1}</i>{label}</a>)}
        </nav>
        <button className="language-toggle" type="button" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label={t.switchLabel}>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><path d="M2.9 10h14.2M10 2.75c2 2 3 4.4 3 7.25s-1 5.25-3 7.25c-2-2-3-4.4-3-7.25s1-5.25 3-7.25Z" /></svg>
          <span>{language === "ar" ? "EN" : "ع"}</span>
        </button>
      </header>

      <svg className="story-thread" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
        <path className="thread-base" pathLength="1" d="M50 0 C25 100 76 152 50 250 S27 397 50 500 75 650 50 750 27 900 50 1000" />
        <path className="thread-progress-line" pathLength="1" d="M50 0 C25 100 76 152 50 250 S27 397 50 500 75 650 50 750 27 900 50 1000" />
        <circle className="thread-orbit" cx="50" cy="250" r="10" />
        <circle className="thread-orbit thread-orbit-two" cx="50" cy="750" r="10" />
      </svg>

      <section className="story-scene hero-scene" id="home" aria-labelledby="hero-title">
        <div className="scene-frame hero-frame">
          <div className="hero-copy scroll-reveal is-visible">
            <div className="hero-prototype"><span className="status-pip" />{t.prototype}</div>
            <h1 id="hero-title" lang={language}>
              <span className="hero-title-ar">وفّرها</span>
              <span className="hero-title-en" dir="ltr">WAFFARHA</span>
            </h1>
            <h2 className="hero-presentation-title" dir="ltr">{t.heroPresentationTitle}</h2>
            <p className="hero-intro">{t.heroPresentationSubtitle}</p>
            <p className="hero-message">{t.presentationMessage}</p>
            <div className="project-status-banner"><strong>{t.currentStatusTitle}</strong><span>{t.currentStatus}</span></div>
            <a className="explore-action" href="#problem">
              <span>{t.explore}</span>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v13m-6-6 6 6 6-6" /></svg>
            </a>
            <div className="hero-scroll-note"><span className="scroll-line" />{t.scroll}</div>
          </div>
          <div className="hero-visual-wrap">
            <HouseEnergyArt label={t.artLabel} />
            <div className="hero-status-float scroll-reveal is-visible">
              <span className="status-spark" aria-hidden="true">✳</span>
              <span>{t.concept}</span>
              <small>01 / 06</small>
            </div>
          </div>
          <div className="hero-edge-note"><span>EGYPT · HOME ENERGY</span><i /></div>
        </div>
        <div className="scene-transition scene-transition-hero" aria-hidden="true" />
      </section>

      <section className="story-scene problem-scene" id="problem" aria-labelledby="problem-title">
        <div className="scene-frame split-frame">
          <div className="scene-copy">
            <StoryHeading id="problem-title" kicker={t.aboutHeading} title={t.aboutHeading} />
            <div className="presentation-prose">{t.aboutParagraphs.map((paragraph, index) => <p className="scroll-reveal" key={index}>{paragraph}</p>)}</div>
            <aside className="idea-callout scroll-reveal"><strong>{t.ideaLabel}</strong><p>{t.idea}</p></aside>
          </div>
          <div className="problem-visual scroll-visual" data-parallax="0.55" aria-hidden="true">
            <div className="problem-orbit orbit-one" /><div className="problem-orbit orbit-two" />
            <div className="problem-home"><HouseEnergyArt label="" /></div>
            <div className="problem-appliance appliance-a"><i /><span>01</span></div>
            <div className="problem-appliance appliance-b"><i /><span>02</span></div>
            <div className="problem-appliance appliance-c"><i /><span>03</span></div>
            <svg className="problem-wires" viewBox="0 0 500 440"><path d="M245 215 C115 100 60 120 60 80 M250 220 C370 100 436 126 438 70 M245 240 C120 360 70 320 52 382" /><circle cx="60" cy="80" r="4" /><circle cx="438" cy="70" r="4" /><circle cx="52" cy="382" r="4" /></svg>
          </div>
        </div>
        <div className="scene-frame presentation-wide">
          <p className="proposal-note scroll-reveal">{t.proposedDisclaimer}</p>
          <PresentationImage src="/images/presentation/project-overview.png.png" alt={t.imageOverviewAlt} caption={t.pageLabel} disclaimer={t.visualDisclaimer} onEnlarge={enlargeImage} />
          <div className="feature-section-head"><StoryHeading id="features-title" kicker={t.featuresHeading} title={t.featuresHeading} /></div>
          <div className="feature-grid">
            {t.featureItems.map(([title, description], index) => <article className="feature-card scroll-reveal" key={title} style={{ "--reveal-index": index } as CSSProperties}>
              <span className="feature-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><i className="feature-trace" />
            </article>)}
          </div>
        </div>
        <EnergyBridge labels={[t.energyHome, t.energySense, t.energyUnderstand]} />
      </section>

      <section className="story-scene process-scene" id="how-it-works" aria-labelledby="process-title">
        <div className="scene-frame process-frame">
          <StoryHeading id="process-title" kicker={t.flowHeading} title={t.flowHeading} />
          <div className="process-path" aria-hidden="true"><span /></div>
          <div className="process-steps">
            {t.flowSteps.map(([title, description], index) => <article className="process-step scroll-reveal" key={title} style={{ "--reveal-index": index } as CSSProperties}>
              <div className="step-number">0{index + 1}<span /></div>
              <span className="step-icon" aria-hidden="true">{["⌁", "ϟ", "⌘", "▤"][index]}</span>
              <h3>{title}</h3><p>{description}</p>
              <div className="step-bottom"><i />{t.concept}</div>
            </article>)}
          </div>
          <p className="flow-description scroll-reveal">{t.flowDescription}</p>
          <p className="proposal-note flow-disclaimer scroll-reveal">{t.flowDisclaimer}</p>
          <PresentationImage src="/images/diagrams/system-flow.png.png" alt={t.imageFlowAlt} caption={t.pageLabel} disclaimer={t.visualDisclaimer} onEnlarge={enlargeImage} />
        </div>
      </section>

      <section className="story-scene hardware-scene" id="hardware" aria-labelledby="hardware-title">
        <div className="scene-frame hardware-frame">
          <StoryHeading id="hardware-title" kicker={t.componentsHeading} title={t.componentsHeading} />
          <PresentationImage src="/images/diagrams/system-components.png.png" alt={t.imageComponentsAlt} caption={t.pageLabel} disclaimer={t.visualDisclaimer} onEnlarge={enlargeImage} />
          <div className="component-table-wrap scroll-reveal">
            <table className="component-table"><thead><tr><th>{language === "ar" ? "المكوّن" : "Component"}</th><th>{language === "ar" ? "الدور" : "Role"}</th></tr></thead>
              <tbody>{t.componentRows.map(([name, role]) => <tr key={name}><th scope="row">{name}</th><td>{role}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="hardware-subhead"><span className="section-kicker"><i />{t.hardwareKicker}</span><p className="hardware-note"><span className="note-icon">◇</span>{t.hardwareNote}</p></div>
          <div className="hardware-grid">
            {t.hardware.map(([name, description], index) => <article className="hardware-card" key={name} onPointerMove={tiltCard} onPointerLeave={resetCard}>
              <div className="hardware-card-top"><span>0{index + 1} / COMPONENT</span><span className="hardware-status">PLANNED</span></div>
              <div className={`hardware-art hardware-art-${index}`}>
                <button className="hardware-image-zoom" type="button" onClick={() => enlargeImage(hardwareImages[index].src, `${language === "ar" ? "صورة" : "Photo of"} ${name} — ${language === "ar" ? "مكوّن مخطط، والجهاز غير مُجمّع" : "planned component; device not assembled"}`, hardwareImages[index].width, hardwareImages[index].height)} aria-label={`${language === "ar" ? "تكبير صورة" : "Enlarge photo of"} ${name}`}>
                  <Image src={hardwareImages[index].src} alt={`${language === "ar" ? "صورة المكوّن المخطط" : "Photo of planned component"}: ${name}`} width={hardwareImages[index].width} height={hardwareImages[index].height} sizes="(max-width: 720px) 38vw, 18vw" />
                </button>
                <span className="hardware-art-orbit" />
              </div>
              <h3 dir="ltr">{name}</h3><p>{description}</p>
              <div className="hardware-card-line"><span /><i /></div>
            </article>)}
          </div>
          <div className="hardware-path" aria-hidden="true"><svg viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0 38h230l40-24h180l50 48h190l50-30h190l42 22h228" /><path className="hardware-path-flow" pathLength="1" d="M0 38h230l40-24h180l50 48h190l50-30h190l42 22h228" /></svg></div>
        </div>
      </section>

      <section className="story-scene load-control-scene" id="load-control" aria-labelledby="load-control-title">
        <div className="scene-frame load-control-frame">
          <StoryHeading id="load-control-title" kicker={t.loadHeading} title={t.loadHeading} />
          <p className="load-control-copy scroll-reveal">{t.loadParagraph}</p>
          <ul className="load-targets">{t.loadItems.map((item, index) => <li className="scroll-reveal" style={{ "--reveal-index": index } as CSSProperties} key={item}><span aria-hidden="true">•</span><b>{item}</b><i /></li>)}</ul>
          <p className="load-control-conclusion scroll-reveal">{t.loadConclusion}</p>
        </div>
      </section>

      <section className="story-scene technical-scene" id="technical" aria-labelledby="technical-title">
        <div className="scene-frame technical-frame">
          <StoryHeading id="technical-title" kicker={t.technicalHeading} title={t.technicalHeading} />
          <p className="proposal-note scroll-reveal">{t.proposedDisclaimer}</p>
          <ul className="technical-list">{t.technicalItems.map(([title, description], index) => <li className="technical-item scroll-reveal" key={title} style={{ "--reveal-index": index } as CSSProperties}>
            <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><i />
          </li>)}</ul>
          <div className="value-section">
            <StoryHeading id="value-title" kicker={t.valueHeading} title={t.valueHeading} />
            <div className="value-grid">{t.valueItems.map(([title, description], index) => <article className="value-card scroll-reveal" key={title} style={{ "--reveal-index": index } as CSSProperties}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </article>)}</div>
            <aside className="vision-callout scroll-reveal"><strong>{t.visionLabel}</strong><p>{t.vision}</p></aside>
          </div>
        </div>
      </section>

      <section className="story-scene dashboard-scene" id="simulation" aria-labelledby="demo-title">
        <div className="scene-frame dashboard-frame">
          <div className="dashboard-copy">
            <StoryHeading id="demo-title" kicker={t.demoKicker} title={t.demoTitle} body={t.demoBody} />
            <div className="simulation-seal"><span className="seal-bars"><i /><i /><i /></span><span><strong>{t.demoNotice}</strong><small>{language === "ar" ? "قيم توضيحية فقط · لا توجد قراءات فعلية" : "Illustrative values only · no live readings"}</small></span></div>
          </div>
          <div className="demo-dashboard scroll-visual" data-parallax="0.35">
            <div className="dashboard-header"><div><span className="dashboard-overline">WAFFARHA / ENERGY VIEW</span><h3 id="dashboard-title">{language === "ar" ? "نظرة على المنزل" : "Home overview"}</h3></div><span className="demo-badge"><i />{language === "ar" ? "محاكاة" : "DEMO"}</span></div>
            <div className="dashboard-metrics">
              {t.demoMetric.map((label, index) => <article className="metric-tile" key={label}><span>{label}</span><strong>{["1.8", "6.4", "72"][index]}<small>{t.demoUnit[index]}</small></strong><div className={`metric-spark metric-spark-${index}`}><i /><i /><i /><i /><i /><i /><i /></div></article>)}
            </div>
            <div className="chart-panel">
              <div className="chart-heading"><span>{t.chartTitle}</span><small>DEMONSTRATION ONLY</small></div>
              <div className="chart-area"><div className="chart-gridlines"><i /><i /><i /><i /></div><svg viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label={t.chartTitle}><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#26D1A2" stopOpacity=".28" /><stop offset="1" stopColor="#26D1A2" stopOpacity="0" /></linearGradient></defs><path className="chart-area-fill" d="M0 143 C70 130 68 105 144 116s85 17 135-27 91-6 145 30 85-24 130-43 93 17 146-39v153H0Z" /><path className="chart-line" pathLength="1" d="M0 143 C70 130 68 105 144 116s85 17 135-27 91-6 145 30 85-24 130-43 93 17 146-39" /><circle cx="554" cy="76" r="5" className="chart-point" /></svg></div>
              <div className="chart-labels">{t.chartLabels.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
            </div>
            <div className="dashboard-footnote"><span className="footnote-icon">i</span>{t.demoNotice} · {t.demoUnit[2]}</div>
          </div>
        </div>
      </section>

      <section className="story-scene closing-scene" id="roadmap" aria-labelledby="closing-title">
        <div className="closing-backdrop" aria-hidden="true"><div /><div /><svg viewBox="0 0 1200 500" preserveAspectRatio="none"><path className="closing-current" pathLength="1" d="M0 340 C130 340 95 180 260 180S405 390 568 340 745 95 885 185 1045 355 1200 80" /></svg></div>
        <div className="scene-frame closing-frame">
          <div className="closing-copy scroll-reveal">
            <span className="section-kicker"><i />{t.roadmapHeading}</span>
            <h2 id="closing-title"><HeadingWords text={t.roadmapHeading} /></h2>
            <PresentationImage src="/images/diagrams/project-roadmap.png.png" alt={t.imageRoadmapAlt} caption={t.pageLabel} disclaimer={t.visualDisclaimer} onEnlarge={enlargeImage} />
            <ol className="roadmap-list">{t.roadmapStages.map(([title, description], index) => <li className="scroll-reveal" style={{ "--reveal-index": index } as CSSProperties} key={title}>
              <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><i />
            </li>)}</ol>
            <p className="roadmap-note">* {t.roadmapNote}</p>
            <span className="closing-prototype"><i />{t.status}</span>
          </div>
          <div className="team-card scroll-reveal">
            <div className="team-card-head"><span className="team-monogram">و</span><span><small>WAFFARHA · UNIVERSITY PROJECT</small><strong>{t.teamTitle}</strong></span></div>
            <ul>{team.map((name, index) => <li key={name}><span>0{index + 1}</span><b>{name}</b><i /></li>)}</ul>
          </div>
        </div>
        <aside className="final-project-message"><strong>{language === "ar" ? "رسالة المشروع" : "Project message"}</strong><p>{t.presentationMessage}</p></aside>
        <footer className="closing-footer"><span>{t.footer}</span><span>وفّرها <i /> WAFFARHA</span></footer>
      </section>
      {zoomedImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={zoomedImage.alt} onClick={() => setZoomedImage(null)}>
        <button className="image-lightbox-close" type="button" onClick={() => setZoomedImage(null)} aria-label={language === "ar" ? "إغلاق الصورة المكبرة" : "Close enlarged image"}>×</button>
        <Image className="image-lightbox-image" src={zoomedImage.src} alt={zoomedImage.alt} width={zoomedImage.width} height={zoomedImage.height} sizes="96vw" onClick={(event) => event.stopPropagation()} />
      </div>}
    </main>
  );
}
