const projects = {
  encon: {
    kicker: "Professional internship · Encon Pharma",
    title: "Cold-Chain Operations Portal",
    summary:
      "A complete serverless application for recording temperature readings, identifying excursions and triggering event-driven alerts.",
    cover: "assets/images/encon-care-logo.webp",
    coverAlt: "Encon Pharma logo",
    status: "Completed",
    period: "Aug–Sep 2026",
    focus: "Cloud · Full stack · IaC",
    story:
      "During a six-week IT internship, I progressed from individual development exercises to designing, building, testing and publicly deploying a complete cold-chain portal. I was mentored by the Head of Software Engineering and worked alongside regional and offshore developers in a professional Agile environment.",
    points: [
      "Built Node.js AWS Lambda functions and a REST API through API Gateway, with DynamoDB handling cold-chain reading data.",
      "Created an event-driven alert flow using SNS, SQS and Lambda, including retries, idempotency protection and a dead-letter queue.",
      "Rebuilt the backend with Terraform, including IAM, CloudWatch, remote state in S3, DynamoDB locking and a reusable module.",
      "Added Jest tests and an automated deployment gate that prevented Terraform deployment when tests failed.",
      "Built the frontend with Next.js, TypeScript, Tailwind CSS and TanStack Query, then deployed it through AWS Amplify.",
      "Presented the final system to the wider development team and gained exposure to Encon's real architecture, environments and development workflow."
    ],
    video: "assets/videos/encon-demo.mp4",
    gallery: [
      { src: "assets/images/encon-workspace.webp", alt: "Encon development workspace", caption: "The professional development environment during the internship." },
      { src: "assets/images/encon-sign.webp", alt: "Encon Pharma office sign", caption: "Encon Pharma — the setting for the six-week internship." }
    ],
    links: [
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Encon-Project" }
    ]
  },
  groot: {
    kicker: "Bradford Agentic AI Hackathon · Award winner",
    title: "Groot AI Interview Platform",
    summary:
      "A tailored, real-time mock interview experience built in one hackathon — and winner of the Best Use of ElevenLabs award.",
    cover: "assets/images/groot-event-poster.webp",
    coverAlt: "Bradford Agentic AI Hackathon event poster",
    status: "Completed · Award winner",
    period: "3 October 2026",
    focus: "Agentic AI · Voice · Product",
    story:
      "At the Bradford Agentic AI Hackathon at the University of Bradford, our team built Groot: an AI mock interview platform that turns a CV and job description into a tailored voice interview. I helped develop, test and present the idea before pitching it to around 120 attendees and four judges.",
    points: [
      "Used the candidate's CV, job description and interview context to create a tailored mock interview.",
      "Integrated an ElevenLabs voice agent capable of asking real-time questions, follow-ups and challenges based on supplied information.",
      "Designed the flow from interview setup and preparation through the live interview and post-interview feedback.",
      "Provided scoring, answer feedback, areas for improvement and progress tracking across interview rounds.",
      "Tested whether the agent referred back to the candidate data and questioned exaggerated or inconsistent claims.",
      "Pitched the final product to the room; the project won Best Use of ElevenLabs."
    ],
    video: "assets/videos/groot-demo.mp4",
    gallery: [
      { src: "assets/images/groot-planning.webp", alt: "The Groot team planning the product", caption: "Planning the product flow and interview experience." },
      { src: "assets/images/groot-building.webp", alt: "The Groot team developing the application", caption: "Building the application during the hackathon." },
      { src: "assets/images/groot-testing.webp", alt: "Testing the Groot application", caption: "Testing the interview workflow and AI response behaviour." },
      { src: "assets/images/groot-event.webp", alt: "Bradford Agentic AI Hackathon attendees", caption: "The Bradford Agentic AI Hackathon at the University of Bradford." }
    ],
    links: [
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Hackerthon_Projects" }
    ]
  },
  webhub: {
    kicker: "BTEC Unit 6 · Where the journey began",
    title: "WebHub — My First Website",
    summary:
      "My first coding experience: a multi-page website planned, documented and hand-coded for a college web-development unit.",
    cover: "assets/images/webhub-homepage.webp",
    coverAlt: "The WebHub website homepage",
    status: "Completed",
    period: "College project",
    focus: "HTML · CSS · JavaScript · PHP",
    story:
      "WebHub was the first website I ever designed and developed, completed for Unit 6: Website Development during my BTEC Level 3 National Extended Diploma in Information Technology. Learning through W3Schools and video tutorials, I turned a blank folder into a working multi-page website — and discovered that I wanted to pursue technology as a career.",
    points: [
      "Planned and documented the website before writing the implementation by hand.",
      "Created pages for courses, available jobs, contact information and online applications.",
      "Built the visual interface and navigation using HTML and CSS.",
      "Added interactive behaviour and form validation with JavaScript.",
      "Used PHP for the form-handling element of the original project.",
      "Deployed the finished static website through GitHub Pages."
    ],
    video: null,
    visualLink: {
      src: "assets/images/webhub-homepage.webp",
      alt: "WebHub homepage",
      href: "https://umarhuss2234.github.io/Collage-Project/",
      label: "Visit the live WebHub website"
    },
    gallery: [],
    links: [
      { label: "Open live website", href: "https://umarhuss2234.github.io/Collage-Project/" },
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Collage-Project" }
    ]
  },
  mirfield: {
    kicker: "First real cybersecurity project · Local business",
    title: "Mirfield Auto Spares Website Security",
    summary:
      "Strengthening a local company's existing PHP website through secure backups, vulnerability assessment and practical security improvements.",
    cover: "assets/images/mirfield-auto-spares-logo.png",
    coverAlt: "Mirfield Automotive Spares company logo",
    status: "Ongoing security project",
    period: "2026 · Ongoing",
    focus: "Web security · PHP · Secure coding",
    story:
      "This is my first real cybersecurity project. My main responsibility was to improve the security of Mirfield Automotive Spares' existing website, protect sensitive information, create recoverable backups and perform security testing to identify potential vulnerabilities. I did not redesign the website; a separate team is expected to modernise its older design later. I would like to return to the project in the future with more industry experience and knowledge so I can strengthen it further.",
    points: [
      "Created full backups through GoDaddy cPanel and kept recoverable copies before making security changes.",
      "Reviewed the existing PHP application for access-control, upload-handling, input-validation and database-query weaknesses.",
      "Hardened administrator access by removing an insecure fallback and enforcing authenticated sessions and permissions.",
      "Added safer file-upload controls, including file-type checks, size limits, random filenames and execution restrictions.",
      "Replaced vulnerable SQL query construction with parameterised queries and stricter input validation.",
      "Documented the findings, fixes and future improvements so the project can continue as my cybersecurity knowledge develops."
    ],
    video: null,
    gallery: [],
    links: [
      { label: "Open company website", href: "https://mirfieldautospares.co.uk/" },
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Cybersecurity-Project-MirfieldAutoSparesLTD-Website" }
    ],
  }
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const dialog = document.querySelector("[data-project-dialog]");
const closeDialogButton = document.querySelector("[data-dialog-close]");
const videoSection = document.querySelector("[data-dialog-video-section]");
const visualLinkSection = document.querySelector("[data-dialog-visual-link-section]");
const visualLink = document.querySelector("[data-dialog-visual-link]");
const visualLinkImage = document.querySelector("[data-dialog-visual-link-image]");
const visualLinkLabel = document.querySelector("[data-dialog-visual-link-label]");
const gallerySection = document.querySelector("[data-dialog-gallery-section]");
const projectVideo = document.querySelector("[data-dialog-video]");
let lastTrigger = null;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const populateProjectDialog = (project) => {
  document.querySelector("[data-dialog-cover]").src = project.cover;
  document.querySelector("[data-dialog-cover]").alt = project.coverAlt;
  document.querySelector("[data-dialog-kicker]").textContent = project.kicker;
  document.querySelector("[data-dialog-title]").textContent = project.title;
  document.querySelector("[data-dialog-summary]").textContent = project.summary;
  document.querySelector("[data-dialog-status]").textContent = project.status;
  document.querySelector("[data-dialog-period]").textContent = project.period;
  document.querySelector("[data-dialog-focus]").textContent = project.focus;
  document.querySelector("[data-dialog-story]").textContent = project.story;

  const points = document.querySelector("[data-dialog-points]");
  points.replaceChildren(
    ...project.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    })
  );

  const links = document.querySelector("[data-dialog-links]");
  links.replaceChildren(
    ...project.links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.innerHTML = `<span>${link.label}</span><span aria-hidden="true">↗</span>`;
      return anchor;
    })
  );

  if (project.video) {
    projectVideo.src = project.video;
    projectVideo.removeAttribute("poster");
    projectVideo.load();
    videoSection.hidden = false;
  } else {
    projectVideo.removeAttribute("src");
    projectVideo.removeAttribute("poster");
    projectVideo.load();
    videoSection.hidden = true;
  }

  if (project.visualLink) {
    visualLink.href = project.visualLink.href;
    visualLinkImage.src = project.visualLink.src;
    visualLinkImage.alt = project.visualLink.alt;
    visualLinkLabel.textContent = project.visualLink.label;
    visualLinkSection.hidden = false;
  } else {
    visualLink.removeAttribute("href");
    visualLinkImage.removeAttribute("src");
    visualLinkImage.alt = "";
    visualLinkLabel.textContent = "";
    visualLinkSection.hidden = true;
  }

  const gallery = document.querySelector("[data-dialog-gallery]");
  gallery.replaceChildren(
    ...project.gallery.map((image) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const caption = document.createElement("figcaption");
      img.src = image.src;
      img.alt = image.alt;
      img.loading = "lazy";
      caption.textContent = image.caption;
      figure.append(img, caption);
      return figure;
    })
  );
  gallerySection.hidden = project.gallery.length === 0;
};

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    lastTrigger = card;
    dialog.dataset.project = card.dataset.project;
    populateProjectDialog(project);
    document.body.classList.add("dialog-open");
    dialog.showModal();
  });
});

const closeProjectDialog = () => {
  projectVideo.pause();
  dialog.close();
};

closeDialogButton.addEventListener("click", closeProjectDialog);

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (isOutside) closeProjectDialog();
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  projectVideo.pause();
  projectVideo.removeAttribute("src");
  projectVideo.load();
  lastTrigger?.focus();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeProjectDialog();
});

const techRail = document.querySelector(".tech-rail");
const techBadges = [...document.querySelectorAll(".tech-badge")];
const techTitle = document.querySelector("[data-tech-title]");
const techDescription = document.querySelector("[data-tech-description]");
let selectedTech = null;

const showTechnology = (badge) => {
  if (!badge || !techTitle || !techDescription) return;
  techTitle.textContent = badge.dataset.tech;
  techDescription.textContent = badge.dataset.description;
};

const restoreTechnology = () => {
  if (selectedTech) {
    showTechnology(selectedTech);
    return;
  }
  techTitle.textContent = "Explore the toolkit";
  techDescription.textContent = "Hover, focus or select an icon to see how I have used it.";
};

techBadges.forEach((badge) => {
  badge.addEventListener("pointerenter", () => showTechnology(badge));
  badge.addEventListener("focus", () => showTechnology(badge));
  badge.addEventListener("pointerleave", restoreTechnology);
  badge.addEventListener("click", () => {
    techBadges.forEach((item) => item.classList.remove("is-active"));
    badge.classList.add("is-active");
    selectedTech = badge;
    showTechnology(badge);
  });
});

techRail?.addEventListener("focusout", () => {
  window.setTimeout(() => {
    if (!techRail.contains(document.activeElement)) restoreTechnology();
  }, 0);
});

const honorsCarousel = document.querySelector("[data-honors-carousel]");

if (honorsCarousel) {
  const track = honorsCarousel.querySelector("[data-honors-track]");
  const viewport = honorsCarousel.querySelector(".honors-viewport");
  const slides = [...honorsCarousel.querySelectorAll("[data-honor-slide]")];
  const dotsContainer = honorsCarousel.querySelector("[data-honor-dots]");
  const previousButton = honorsCarousel.querySelector("[data-honor-previous]");
  const nextButton = honorsCarousel.querySelector("[data-honor-next]");
  const currentLabel = honorsCarousel.querySelector("[data-honor-current]");
  const totalLabel = honorsCarousel.querySelector("[data-honor-total]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wideLayout = window.matchMedia("(min-width: 901px)");
  const duration = 6000;
  let currentPage = 0;
  let currentVisibleCount = wideLayout.matches ? 2 : 1;
  let dots = [];
  let autoplayTimer = null;
  let isPaused = false;
  let touchStartX = 0;

  totalLabel.textContent = String(slides.length).padStart(2, "0");

  const showPage = (nextPage, userInitiated = false) => {
    const pageCount = Math.ceil(slides.length / currentVisibleCount);
    currentPage = (nextPage + pageCount) % pageCount;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const offset = currentPage * (viewport.clientWidth + gap);
    const firstVisible = currentPage * currentVisibleCount;
    const lastVisible = Math.min(firstVisible + currentVisibleCount, slides.length);

    track.style.transform = `translate3d(-${offset}px, 0, 0)`;
    currentLabel.textContent = currentVisibleCount === 2
      ? `${String(firstVisible + 1).padStart(2, "0")}–${String(lastVisible).padStart(2, "0")}`
      : String(firstVisible + 1).padStart(2, "0");
    viewport.setAttribute("aria-live", userInitiated ? "polite" : "off");

    slides.forEach((slide, index) => {
      const isActive = index >= firstVisible && index < lastVisible;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      if ("inert" in slide) slide.inert = !isActive;
    });

    dots.forEach((dot, index) => {
      const isActive = index === currentPage;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const buildDots = (firstVisibleIndex = 0) => {
    currentVisibleCount = wideLayout.matches ? 2 : 1;
    const pageCount = Math.ceil(slides.length / currentVisibleCount);
    currentPage = Math.min(Math.floor(firstVisibleIndex / currentVisibleCount), pageCount - 1);
    dotsContainer.replaceChildren();

    dots = Array.from({ length: pageCount }, (_, pageIndex) => {
      const button = document.createElement("button");
      const firstIndex = pageIndex * currentVisibleCount;
      const titles = slides
        .slice(firstIndex, firstIndex + currentVisibleCount)
        .map((slide) => slide.querySelector("h3")?.textContent)
        .filter(Boolean)
        .join(" and ");

      button.type = "button";
      button.setAttribute("aria-label", `Show ${titles || `achievements ${pageIndex + 1}`}`);
      button.addEventListener("click", () => {
        showPage(pageIndex, true);
        startAutoplay();
      });
      dotsContainer.append(button);
      return button;
    });

    showPage(currentPage);
  };

  const stopAutoplay = () => {
    window.clearTimeout(autoplayTimer);
    autoplayTimer = null;
    honorsCarousel.classList.remove("is-playing");
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (isPaused || reducedMotion.matches || document.hidden) return;

    void honorsCarousel.offsetWidth;
    honorsCarousel.classList.add("is-playing");
    autoplayTimer = window.setTimeout(() => {
      showPage(currentPage + 1);
      startAutoplay();
    }, duration);
  };

  previousButton.addEventListener("click", () => {
    showPage(currentPage - 1, true);
    startAutoplay();
  });

  nextButton.addEventListener("click", () => {
    showPage(currentPage + 1, true);
    startAutoplay();
  });

  honorsCarousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") previousButton.click();
    if (event.key === "ArrowRight") nextButton.click();
  });

  honorsCarousel.addEventListener("pointerenter", () => {
    isPaused = true;
    stopAutoplay();
  });

  honorsCarousel.addEventListener("pointerleave", () => {
    isPaused = false;
    startAutoplay();
  });

  honorsCarousel.addEventListener("focusin", () => {
    isPaused = true;
    stopAutoplay();
  });

  honorsCarousel.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!honorsCarousel.contains(document.activeElement)) {
        isPaused = false;
        startAutoplay();
      }
    }, 0);
  });

  viewport.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showPage(currentPage + (distance < 0 ? 1 : -1), true);
    startAutoplay();
  }, { passive: true });

  reducedMotion.addEventListener("change", startAutoplay);
  document.addEventListener("visibilitychange", startAutoplay);
  wideLayout.addEventListener("change", () => {
    const firstVisibleIndex = currentPage * currentVisibleCount;
    buildDots(firstVisibleIndex);
    startAutoplay();
  });
  window.addEventListener("resize", () => showPage(currentPage));

  buildDots();
  startAutoplay();
}
