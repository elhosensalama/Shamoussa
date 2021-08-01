"use strict";

class Modal {
    modal = document.querySelector(".modal");
    overlay = document.querySelector(".overlay");
    btnCloseModal = document.querySelector(".btn--close-modal");
    btnsOpenModal = document.querySelectorAll(".btn--show-modal");

    constructor() {
        this.init();
    }
    openModal(e) {
        e.preventDefault();
        this.modal.classList.remove("hidden");
        this.overlay.classList.remove("hidden");
    }
    closeModal() {
        this.modal.classList.add("hidden");
        this.overlay.classList.add("hidden");
    }
    init() {
        let mthis = this;
        this.btnsOpenModal.forEach((btn) => btn.addEventListener("click", this.openModal.bind(this)));

        this.btnCloseModal.addEventListener("click", this.closeModal.bind(this));

        this.overlay.addEventListener("click", this.closeModal.bind(this));

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !mthis.modal.classList.contains("hidden")) {
                mthis.closeModal();
            }
        });
    }
}
const modal1 = new Modal();

class Slider {
    slides;
    dotContainer;
    btnSliderLeft;
    btnSliderRight;
    curSlide = 0;
    maxSlide;
    mod;
    constructor(slides, dotContainer, btnSliderLeft, btnSliderRight, mod = "") {
        this.slides = document.querySelectorAll(slides + mod);
        this.dotContainer = document.querySelector(dotContainer + mod);
        this.btnSliderLeft = document.querySelector(btnSliderLeft + mod);
        this.btnSliderRight = document.querySelector(btnSliderRight + mod);
        this.mod = mod;
        this.maxSlide = this.slides.length - 1;

        this.gotoSlide(this.curSlide);
        this.repeatSlide();

        this.btnSliderRight.addEventListener("click", this.nextSlide.bind(this));
        this.btnSliderLeft.addEventListener("click", this.prevSlide.bind(this));

        document.addEventListener("keydown", this.controlDots.bind(this));

        this.createDots();

        this.dotContainer.addEventListener("click", this.changeByDots.bind(this));
    }
    gotoSlide(cur) {
        let mthis = this;
        this.slides.forEach(function (slide, index) {
            slide.style.transform = `translateX(${(index - cur) * 100}%)`;
        });
        [...this.dotContainer.children].forEach(function (dot) {
            dot.classList.remove(`dots__dot--active${mthis.mod}`);
            if (dot.getAttribute("data-slide") == cur) dot.classList.add(`dots__dot--active${mthis.mod}`);
        });
    }
    repeatSlide() {
        let mthis = this;
        setTimeout(function () {
            setInterval(function () {
                if (lang == "EN") mthis.nextSlide();
                else mthis.prevSlide();
            }, 3000);
        }, 1000);
    }
    nextSlide() {
        if (this.curSlide == this.maxSlide) this.curSlide = 0;
        else this.curSlide++;
        this.gotoSlide(this.curSlide);
    }
    prevSlide() {
        if (this.curSlide == 0) this.curSlide = this.maxSlide;
        else this.curSlide--;
        this.gotoSlide(this.curSlide);
    }
    controlDots(e) {
        if (e.key == "ArrowLeft") this.prevSlide();
        e.key == "ArrowRight" && this.nextSlide();
    }
    createDots() {
        let mthis = this;
        this.dotContainer.innerHTML = "";
        this.slides.forEach(function (_, index) {
            let dot = `<button class="dots__dot${mthis.mod} ${index == 0 ? `dots__dot--active${mthis.mod}` : ""}" data-slide="${index}"></button>`;
            mthis.dotContainer.insertAdjacentHTML(lang == "EN" ? "beforeend" : "afterbegin", dot);
        });
    }
    changeByDots(e) {
        if (e.target.classList.contains(`dots__dot${this.mod}`)) {
            this.gotoSlide(e.target.getAttribute("data-slide"));
        }
    }
}

let theme = localStorage.theme || "light";
let lang = localStorage.lang || "EN";

class UI {
  settingOptions = document.querySelector(".settings-options");
  btnMainSettings = document.querySelector(".settings-init");
  btnTheme = document.querySelector(".settings-options__theme");
  btnLang = document.querySelector(".settings-options__lang");
  btnScrollTo = document.querySelector(".btn--scroll-to");
  header = document.querySelector(".header");
  section1 = document.querySelector("#section--1");
  nav = document.querySelector(".nav");
  
  constructor() {
    this.CopyRightDate();
    this.btnMainSettings.addEventListener("click", this.settingToggle.bind(this));
    this.btnTheme.textContent = theme == "dark" ? "🌚" : "🌝";
    this.btnTheme.addEventListener("click", this.themeToggle.bind(this));
    
    this.btnLang.textContent = lang == "EN" ? "EN" : "AR";
    this.btnLang.addEventListener("click", this.langToggle.bind(this));
    
    this.settingOptions.addEventListener("click", function () {
      changeLangAndTheme();
      // location.reload();
    });
    this.lazyLoadingImages();
    this.revealSections();
    this.learMore();
    this.pageNavigation();
    this.tappedComponent();
    this.nav.addEventListener("mouseover", this.handleNavHover.bind(0.5));
    this.nav.addEventListener("mouseout", this.handleNavHover.bind(1));
    this.stickyNavigation();
    this.showGallery();
    this.manageOverlaySpinner();
  }
  CopyRightDate() {
    const theSpan = document.querySelector(".year-date");
    theSpan.textContent = new Date().getFullYear();
  }
  settingToggle() {
    this.settingOptions.classList.toggle("move1");
    this.btnMainSettings.classList.toggle("move2");
  }
  themeToggle() {
    if (localStorage.theme == "light") {
      theme = "dark";
      localStorage.theme = theme;
    } else if (localStorage.theme == "dark") {
      theme = "light";
      localStorage.theme = theme;
    } else {
      localStorage.theme = theme;
    }
    this.btnTheme.textContent = theme == "dark" ? "🌚" : "🌝";
  }
  langToggle() {
    if (localStorage.lang == "EN") {
      lang = "AR";
      localStorage.lang = lang;
    } else if (localStorage.lang == "AR") {
      lang = "EN";
      localStorage.lang = lang;
    } else {
      localStorage.lang = lang;
    }
    this.btnLang.textContent = lang == "EN" ? "EN" : "AR";
  }
  lazyLoadingImages() {
    // Lazy loading images
    const imgTargets = document.querySelectorAll("img[data-src]");
    
    const loadImg = function (entries, observer) {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });
      
      observer.unobserve(entry.target);
    };
    
    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });
    imgTargets.forEach(function (img) {
      imgObserver.observe(img);
    });
  }
  revealSections() {
    // Reveal sections
    
    const allSections = document.querySelectorAll(".section");
    
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allSections.forEach(function (section) {
      section.classList.add("section--hidden");
      sectionObserver.observe(section);
    });
  }
  learMore() {
    let mthis = this;
    this.btnScrollTo.addEventListener("click", function (e) {
      // e.preventDefault();
      const s1coords = mthis.section1.getBoundingClientRect();
      console.log(s1coords);
      console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
      console.log("height/width viewport ", document.documentElement.clientHeight, document.documentElement.clientWidth);
      
      mthis.section1.scrollIntoView({ behavior: "smooth" });
    });
  }
  pageNavigation() {
    // Page navigation
    document.querySelector(".nav__links").addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("nav__link") && e.target.getAttribute("href") != "#") document.querySelector(`${e.target.getAttribute("href")}`).scrollIntoView({ behavior: "smooth" });
    });
  }
  tappedComponent() {
    // Tapped component
    
    document.querySelector(".operations__tab-container").addEventListener("click", function (e) {
      let btnEl = e.target.closest("button");
      if (btnEl?.classList.contains("operations__tab")) {
        [...e.currentTarget.children].forEach(function (el) {
          el.classList.remove("operations__tab--active");
        });
        document.querySelectorAll(".operations__content").forEach(function (el) {
          el.classList.remove("operations__content--active");
        });
        btnEl.classList.add("operations__tab--active");
        document.querySelector(`.operations__content--${btnEl.getAttribute("data-tab")}`).classList.add("operations__content--active");
      }
    });
  }
  handleNavHover(e) {
    // Menu fade animation
    let op = this;
    if (e.target.classList.contains("nav__link")) {
      const el = e.target;
      const siblings = el.closest(".nav").querySelectorAll(".nav__link");
      const logo = el.closest("nav").querySelector(".nav__logo");
      siblings.forEach(function (curEl) {
        if (el != curEl) {
          curEl.style.opacity = op;
        }
      });
      logo.style.opacity = op;
    }
  }
  stickyNavigation() {
    // Sticky navigation
    // NEW ( Intersection Observer API)
    let mthis = this;
    
    const obsCallback = function (entries, observer) {
      entries.forEach(function (en) {
        if (en.isIntersecting) mthis.nav.classList.remove("sticky" + (theme == "dark" ? "dark" : ""));
        else mthis.nav.classList.add("sticky" + (theme == "dark" ? "dark" : ""));
      });
    };
    
    const navHeight = this.nav.getBoundingClientRect().height;
    
    const obsOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };
    
    let obs = new IntersectionObserver(obsCallback, obsOptions);
    obs.observe(this.header);
  }
  showGallery(){
    const galleryImgs = [...document.querySelectorAll('.gallery__img')];
    setTimeout(function () {
      galleryImgs.forEach((img, index) => {
        img.src = `img/gal-${index + 1}.jpg`;
      });
    }, 5000);
  }
  manageOverlaySpinner(){
    const spinner = document.querySelector('.overlay__spinner');
    window.addEventListener("load", function(){
      setTimeout(() => {
        spinner.classList.add("hidden");
        document.querySelector('body').style.overflow = "auto";
      }, 1000);
    })
  }

}

const ui = new UI();

const slide1 = new Slider(".slide", ".dots", ".slider__btn--left", ".slider__btn--right");
const slide2 = new Slider(".slide", ".dots", ".slider__btn--left", ".slider__btn--right", "-mod-1");