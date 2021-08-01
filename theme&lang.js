lang = localStorage.lang || "AR";
theme = localStorage.theme || "light";

const words = {
    EN: {
        title: "Shamoussa Village",
        desc: "Shamoussa Village in Fayed Ismallia one of the Best beaches in the area",
        navLink1: "Utilities",
        navLink2: "Operations",
        navLink3: "Pricing",
        navLink4: "Testimonials",
        navLink6: "Contact Us",
        headerTitleH1: "Shamoussa",
        headerTitleH1Span: "Village",
        headerTitleH4: "The Best Beach in Ismaillia,\nIf you want the Best to speend the summer with family then finaly\nyou got it.",
        btnText: "Learn more ↓",
        section1: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
            featuresHeader1: "Seafood Restaurant.",
            featuresDescription1: "We serve all seafood dishes and grills of all kinds in our restaurant.",
            featuresHeader2: "Swimming Pools.",
            featuresDescription2: "We Have a 3 masive Swimming pools for all Ages.",
            featuresHeader3: "Cafes and Sports Yard.",
            featuresDescription3: "A Collection of sports yard and cafes for you to get the most fun vacation.",
        },
        section2: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        section3: {
            headingSecondary : "most popular prices",
            btnGreen: "Discover all prices",
        },
        section4: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        section5: {
            gallery: "Gallery",
        },
        section6: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        footer: {
            link1: "About",
            link2: "Pricing",
            link3: "Terms of Use",
            link4: "Privacy Policy",
            link5: "Careers",
            link6: "Blog",
            link7: "Contact Us",
        },
    },
    AR: {
        title: "قرية شموسه",
        desc: "قرية شموسه هي واحده من اجمل قري فايد ف الاسماعيلية.",
        navLink1: "خدمات",
        navLink2: "عمليات",
        navLink3: "الاسعار",
        navLink4: "تقيمات الزوار",
        navLink6: "تواصل معنا",
        headerTitleH1: "",
        headerTitleH1Span: "قرية شموسة",
        headerTitleH4: "اجمل قرية ف الاسماعيلية \n لو بتدور علي افضل مكان تصيف فيه مع العيلة و الاصحاب  \n ف انت ف المكان المناسب.",
        btnText: "لمعرفة المزيد ↓",
        section1: {
            description: "خدماتنا",
            header: "كل حاجه هتحتاجها موجودة ف قريتنا علشان تقضي اجمل يوم واكتر كمان.",
            featuresHeader1: "مطعم ماكولات بحرية",
            featuresDescription1: "بنقدم في مطعمنا جميع المؤكولات البحرية و المشاوي من جميع الاصناف.",
            featuresHeader2: "حمامات سباحة",
            featuresDescription2: "لدينا 3 حمامات سباحه جميلة جدا و مميزة و لجميع الاعمار.",
            featuresHeader3: "صالات رياضية و كافيهات",
            featuresDescription3: "مجموعه من الكافيهات و الصالات الرياضه علشان تستمع بوقتك معانا و مجموعه من النوادي الرياضيه.",
        },
        section2: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        section3: {
            headingSecondary: "اكتر الاسعار المفضلة",
            btnGreen: "شاهد جميع الاسعار",
        },
        section4: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        section5: {
            gallery: "المعرض",
        },
        section6: {
            description: "Utilities",
            header: "Everything you need in a our Village to spend the most fun time and more.",
        },
        footer: {
            link1: "مين احنا؟",
            link2: "الاسعار",
            link3: "طرق الاستخدام",
            link4: "الخصوصيات",
            link5: "اشتغل معانا",
            link6: "بلوج",
            link7: "تواصل معنا",
        },
    },
};

const dom = {
    // UI
    html: document.querySelector("html"),
    body: document.querySelector("body"),
    titleCon: document.querySelector(".title_con"),
    sticky: document.querySelector(".nav"),
    logo: document.querySelector(".nav__logo img"),
    btnGreen: document.querySelector(".btn--green"),
    // Lang
    title: document.querySelector("title"),
    desc: document.querySelector(".desc"),
    navLink1: document.querySelector(".nav__link--1"),
    navLink2: document.querySelector(".nav__link--2"),
    navLink3: document.querySelector(".nav__link--3"),
    navLink4: document.querySelector(".nav__link--4"),
    navLink5: document.querySelector(".nav__link--5"),
    navLink6: document.querySelector(".nav__link--6"),
    headerTitleH1: document.querySelector(".header__title--h1"),
    headerTitleH1Span: document.querySelector(".sim-word"),
    headerTitleH4: document.querySelector(".header__title--h4"),
    btnText: document.querySelector(".btn--text"),
    section1: {
        description: document.querySelector("#section--1 .section__description"),
        header: document.querySelector("#section--1 .section__header"),
        featuresHeader: document.querySelectorAll("#section--1 .features__header"),
        featuresDescription: document.querySelectorAll("#section--1 .features__description"),
    },
    section2: {
        description: "",
        header: "",
    },
    section3: {
        headingSecondary : document.querySelector('.heading-secondary'),
    },
    section4: {
        description: "",
        header: "",
    },
    section5: {
        gallery: document.querySelector(".gallery-header"),
    },
    section6: {
        description: "",
        header: "",
    },
    footer: {
        link1: document.querySelector('.footer__link--1'),
        link2: document.querySelector('.footer__link--2'),
        link3: document.querySelector('.footer__link--3'),
        link4: document.querySelector('.footer__link--4'),
        link5: document.querySelector('.footer__link--5'),
        link6: document.querySelector('.footer__link--6'),
        link7: document.querySelector('.footer__link--7'),
    },
};

function UIchanges() {
    // Lang
    dom.html.lang = lang.toLowerCase();
    dom.html.style.direction = lang == "AR" ? "rtl" : "ltr";
    if (lang == "AR") {
        dom.titleCon.style.right = "0px";
        dom.titleCon.style.clipPath = "polygon(15% 0, 100% 0, 100% 100%, 0 100%)";
        dom.logo.style.transform = "translateX(5px) translateY(4px)";
    } else {
        dom.titleCon.style.left = "0px";
        dom.titleCon.style.clipPath = "polygon(0% 0, 85% 0, 100% 100%, 0 100%)";
        dom.logo.style.transform = "translateX(-5px) translateY(4px)";
    }
    // Theme
    if (theme == "light") {
        dom.body.style.backgroundColor = "#f3f3f3";
        dom.body.style.color = "#333";
        dom.sticky.style.backgroundColor = "transparent";
        dom.btnGreen.style.backgroundColor = "#3ca8b2";
        dom.btnGreen.style.color = "#000";
        dom.logo.src = "img/icon-d.png";
    } else {
        dom.body.style.backgroundColor = "rgba(0,0,0,0.75)";
        dom.body.style.color = "#eee";
        dom.sticky.style.backgroundColor = "rgba(0,0,0,0.1)";
        dom.btnGreen.style.backgroundColor = "#3ca8b2";
        dom.btnGreen.style.color = "#fff";
        dom.logo.src = "img/icon-l.png";
    }
}

function changeLangAndTheme() {
    UIchanges();

    dom.title.textContent = words[`${lang}`].title;
    dom.desc.textContent = words[`${lang}`].desc;
    dom.navLink1.textContent = words[`${lang}`].navLink1;
    dom.navLink2.textContent = words[`${lang}`].navLink2;
    dom.navLink4.textContent = words[`${lang}`].navLink4;
    dom.navLink3.textContent = words[`${lang}`].navLink3;
    dom.navLink5.textContent = words[`${lang}`].section5.gallery;
    dom.navLink6.textContent = words[`${lang}`].navLink6;
    dom.headerTitleH1.textContent = words[`${lang}`].headerTitleH1;
    dom.headerTitleH1Span.textContent = words[`${lang}`].headerTitleH1Span;
    dom.headerTitleH4.textContent = words[`${lang}`].headerTitleH4;
    dom.btnText.textContent = words[`${lang}`].btnText;

    // Section 1
    dom.section1.description.textContent = words[`${lang}`].section1.description;
    dom.section1.header.textContent = words[`${lang}`].section1.header;

    [...dom.section1.featuresHeader].forEach((el, index) => {
        el.textContent = words[`${lang}`].section1[`featuresHeader${index + 1}`];
    });
    [...dom.section1.featuresDescription].forEach((el, index) => {
        el.textContent = words[`${lang}`].section1[`featuresDescription${index + 1}`];
    });
    for ( let i = 1 ; i <= 7 ; i++ ) {
        dom.footer[`link${i}`].textContent = words[`${lang}`].footer[`link${i}`];
    }
    dom.section5.gallery.textContent = words[`${lang}`].section5.gallery;
    dom.section3.headingSecondary.textContent = words[`${lang}`].section3.headingSecondary;
    dom.btnGreen.textContent = words[`${lang}`].section3.btnGreen;
}
changeLangAndTheme();
