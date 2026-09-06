"use client";

import React, { useState } from "react";
import {
  Award,
  MapPin,
  Star,
  Users,
  Sun,
  BatteryCharging,
  Cpu,
  Zap,
  Video,
  ShieldAlert,
  Wrench,
  Factory,
  User,
  Globe,
  Headphones,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Home as HomeIcon,
  Building2,
  Briefcase,
  FolderKanban,
  Contact as ContactIcon,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerSlider from "@/components/PartnerSlider";
import ProjectSlider from "@/components/ProjectSlider";
import Calculator from "@/components/Calculator";
import styles from "./page.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [quoteSummary, setQuoteSummary] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");

  const handleCalculatorQuoteRequest = (summary: string) => {
    setQuoteSummary(summary);
    setContactForm((prev) => ({
      ...prev,
      message: `I would like to request a formal quote for: ${summary}. Please contact me to schedule a site survey.`,
    }));
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp hotline (digits only, no +) — inquiries are delivered here.
  const WHATSAPP_NUMBER = "2349122896507";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;

    const lines = [
      "New inquiry from dfqsolarworld.com",
      "",
      `Name: ${contactForm.name}`,
      `Email: ${contactForm.email}`,
      contactForm.phone ? `Phone: ${contactForm.phone}` : "",
      contactForm.message ? `Message: ${contactForm.message}` : "",
      quoteSummary ? `Selected setup: ${quoteSummary}` : "",
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: "", email: "", phone: "", message: "" });
      setQuoteSummary("");
    }, 6000);
  };

  const allProjects = [
    { title: "Commercial Solar System", location: "Dubai, UAE", type: "commercial", capacity: "1.5 MW", image: "/assets/project-dubai.png" },
    { title: "50MW Solar Power Plant", location: "Texas, USA", type: "utility", capacity: "Utility Scale", image: "/assets/project-texas.png" },
    { title: "Industrial Solar Solution", location: "Johannesburg, South Africa", type: "industrial", capacity: "800 kW", image: "/assets/project-johannesburg.png" },
    { title: "Home Solar Installation", location: "Sydney, Australia", type: "residential", capacity: "15 kW", image: "/assets/project-sydney.png" }
  ];

  const filteredProjects = projectFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.type === projectFilter);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.appContainer}>
      {/* Header / Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Pages/Tabs Views */}
      <main className={styles.mainContent}>
        {/* ==================== HOME TAB ==================== */}
        {activeTab === "home" && (
          <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className={styles.heroSection}>
              <div className={styles.heroSun} aria-hidden="true" />
              <div className={styles.heroPanels} aria-hidden="true" />
              <div className={`container ${styles.heroInner}`}>
                <div className={styles.heroGrid}>
                  <div className={styles.heroTextCol}>
                    <span className={styles.heroEyebrow}>
                      <Sun size={15} /> Solar &amp; lithium storage · Nigeria
                    </span>
                    <h1 className={styles.heroTitle}>
                      Energy independence,<br />
                      <span className={styles.goldText}>engineered in Nigeria.</span>
                    </h1>
                    <p className={styles.heroDesc}>
                      Solar and lithium backup that keeps the lights, the cold room and the
                      production line running long after the grid goes dark.
                    </p>
                    <div className={styles.heroCtaRow}>
                      <button onClick={() => handleTabChange("quote")} className={styles.btnPrimary}>
                        Get a free quote
                        <span className={styles.arrowIconWrapper}>
                          <ArrowRight className={`${styles.arrowIcon} ${styles.arrowNormal}`} size={16} />
                          <ArrowUpRight className={`${styles.arrowIcon} ${styles.arrowRightHovered}`} size={16} />
                        </span>
                      </button>
                      <button onClick={() => handleTabChange("solutions")} className={styles.btnSecondary}>
                        Explore solutions <ChevronRight size={16} className={styles.btnIcon} />
                      </button>
                    </div>

                    {/* Hard-number proof strip */}
                    <div className={styles.heroStats}>
                      <div className={styles.heroStat}>
                        <span className={`${styles.heroStatNum} tnum`}>1,500+</span>
                        <span className={styles.heroStatLabel}>Systems installed</span>
                      </div>
                      <div className={styles.heroStatDivider} aria-hidden="true" />
                      <div className={styles.heroStat}>
                        <span className={`${styles.heroStatNum} tnum`}>24/7</span>
                        <span className={styles.heroStatLabel}>Backup power</span>
                      </div>
                      <div className={styles.heroStatDivider} aria-hidden="true" />
                      <div className={styles.heroStat}>
                        <span className={`${styles.heroStatNum} tnum`}>36</span>
                        <span className={styles.heroStatLabel}>States covered</span>
                      </div>
                      <div className={styles.heroStatDivider} aria-hidden="true" />
                      <div className={styles.heroStat}>
                        <span className={`${styles.heroStatNum} tnum`}>10&nbsp;yr</span>
                        <span className={styles.heroStatLabel}>Storage warranty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Complete Solar & Power Solutions (8-Grid) */}
            <section className={`${styles.servicesSection} section-padding`}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>What we do</span>
                  <h2 className={styles.sectionTitle}>Complete solar &amp; power solutions</h2>
                  <p className={styles.sectionSubtitle}>
                    End-to-end renewable energy and security systems, from the first site survey to long-term maintenance.
                  </p>
                </div>

                <div className={styles.servicesGrid}>
                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Sun size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Solar Installation</h4>
                    <p className={styles.serviceDesc}>High-efficiency residential and commercial solar panel installation.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <BatteryCharging size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Lithium Battery Systems</h4>
                    <p className={styles.serviceDesc}>Tier-1 backup storage setups leveraging Felicity Lithium cells.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Cpu size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Inverter Installation</h4>
                    <p className={styles.serviceDesc}>Pure sine wave hybrid inverters engineered for high load transfer.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Zap size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Electrical Installation</h4>
                    <p className={styles.serviceDesc}>Industrial and estate electrical layout wiring and distributions.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Video size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>CCTV Installation</h4>
                    <p className={styles.serviceDesc}>Full security cameras setup with remote monitoring solar backups.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <ShieldAlert size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Electric Fence Installation</h4>
                    <p className={styles.serviceDesc}>High voltage perimeter electric fence protection systems.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Wrench size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Solar Maintenance</h4>
                    <p className={styles.serviceDesc}>Regular panel washing, battery health audits, and inverter upgrades.</p>
                  </div>

                  <div className={styles.serviceCard} onClick={() => handleTabChange("solutions")}>
                    <div className={styles.serviceIconBox}>
                      <Factory size={24} />
                    </div>
                    <h4 className={styles.serviceTitle}>Industrial Solutions</h4>
                    <p className={styles.serviceDesc}>Megawatt solar plants designed for factories and manufacturing centers.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Stats Box (5 Stats in Dark Navy Container) */}
            <section className={styles.statsSection}>
              <div className="container">
                <div className={styles.statsContainerBox}>
                  <div className={styles.statItem}>
                    <Zap size={28} className={styles.statIcon} />
                    <span className={styles.statNumber}>1,500+</span>
                    <span className={styles.statLabel}>Projects Completed</span>
                  </div>
                  <div className={styles.statItem}>
                    <User size={28} className={styles.statIcon} />
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Years of Experience</span>
                  </div>
                  <div className={styles.statItem}>
                    <Users size={28} className={styles.statIcon} />
                    <span className={styles.statNumber}>5,000+</span>
                    <span className={styles.statLabel}>Satisfied Customers</span>
                  </div>
                  <div className={styles.statItem}>
                    <Globe size={28} className={styles.statIcon} />
                    <span className={styles.statNumber}>36</span>
                    <span className={styles.statLabel}>States Covered</span>
                  </div>
                  <div className={styles.statItem}>
                    <Headphones size={28} className={styles.statIcon} />
                    <span className={styles.statNumber}>24/7</span>
                    <span className={styles.statLabel}>Technical Support</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Products Section */}
            <section className={`${styles.featuredProductsSection} section-padding`}>
              <div className="container">
                <div className={styles.productsHeaderRow}>
                  <div>
                    <span className={styles.sectionTag}>Equipment</span>
                    <h2 className={styles.productsTitle}>The kit we build with</h2>
                  </div>
                  <button onClick={() => handleTabChange("products")} className={styles.viewAllBtn}>
                    View All
                    <span className={styles.arrowIconWrapper}>
                      <ArrowRight className={`${styles.arrowIcon} ${styles.arrowNormal}`} size={16} />
                      <ArrowUpRight className={`${styles.arrowIcon} ${styles.arrowRightHovered}`} size={16} />
                    </span>
                  </button>
                </div>

                <div className={styles.productsScrollTrack}>
                  <div className={styles.prodScrollCard}>
                    <div className={styles.prodImgBox}>
                      <img src="/assets/product-panel.png" alt="Solar Panels" />
                    </div>
                    <div className={styles.prodContent}>
                      <h4>Solar Panels</h4>
                      <p>High efficiency solar panels for maximum energy output.</p>
                      <button onClick={() => handleTabChange("products")} className={styles.prodBtn}>Specs Details</button>
                    </div>
                  </div>

                  <div className={styles.prodScrollCard}>
                    <div className={styles.prodImgBox}>
                      <img src="/assets/product-battery.png" alt="Lithium Batteries" />
                    </div>
                    <div className={styles.prodContent}>
                      <h4>Lithium Batteries</h4>
                      <p>Long lasting and reliable lithium batteries for energy storage.</p>
                      <button onClick={() => handleTabChange("products")} className={styles.prodBtn}>Specs Details</button>
                    </div>
                  </div>

                  <div className={styles.prodScrollCard}>
                    <div className={styles.prodImgBox}>
                      <img src="/assets/product-inverter.png" alt="Hybrid Inverters" />
                    </div>
                    <div className={styles.prodContent}>
                      <h4>Hybrid Inverters</h4>
                      <p>Smart inverters for seamless power conversion.</p>
                      <button onClick={() => handleTabChange("products")} className={styles.prodBtn}>Specs Details</button>
                    </div>
                  </div>

                  <div className={styles.prodScrollCard}>
                    <div className={styles.prodImgBox}>
                      <img src="/assets/product-mppt.png" alt="MPPT Controllers" />
                    </div>
                    <div className={styles.prodContent}>
                      <h4>MPPT Controllers</h4>
                      <p>Advanced MPPT controllers for maximum efficiency.</p>
                      <button onClick={() => handleTabChange("products")} className={styles.prodBtn}>Specs Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Showcase Slider */}
            <section className={`${styles.projectsSliderSection} section-padding`}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Case studies</span>
                  <h2 className={styles.sectionTitle}>Power delivered, site by site</h2>
                  <p className={styles.sectionSubtitle}>
                    Recent installations across commercial, industrial, utility and residential sites.
                  </p>
                </div>
                <ProjectSlider />
              </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialSection}>
              <div className="container">
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteMark}>“</div>
                  <blockquote className={styles.testimonialQuote}>
                    DFQ Solar World delivered beyond our expectations. Their team was professional, the installation was seamless, and the system performance is excellent.
                  </blockquote>
                  <div className={styles.testimonialUser}>
                    <span className={styles.userAvatar}>
                      <User size={24} />
                    </span>
                    <div>
                      <h5 className={styles.userName}>Michael Thompson</h5>
                      <p className={styles.userRole}>CEO, GreenFuture Industries</p>
                    </div>
                  </div>
                  <div className={styles.testimonialLogoBox}>
                    <img src="/assets/logo.png" alt="DFQ Solar World Logo" className={styles.testimonialLogo} />
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Partners */}
            <PartnerSlider />
          </div>
        )}

        {/* ==================== ABOUT TAB ==================== */}
        {activeTab === "about" && (
          <div className="animate-fade-in-up">
            <section className={`${styles.aboutHero} section-padding`}>
              <div className="container">
                <div className={styles.aboutHeader}>
                  <span className={styles.sectionTag}>About us</span>
                  <h2 className={styles.aboutMainTitle}>Clean, dependable power for Africa</h2>
                  <p className={styles.aboutMainDesc}>
                    DFQ Solar World is a premier renewable energy developer and engineering contractor. Founded on the principles of quality, reliability, and innovation, we provide high-performance off-grid and grid-connected solar power systems.
                  </p>
                </div>

                <div className={styles.missionVisionGrid}>
                  <div className={styles.mvCard}>
                    <div className={styles.mvIconBox}>
                      <Award size={32} />
                    </div>
                    <h3>Our Mission</h3>
                    <p>To provide affordable, reliable, and sustainable solar energy solutions across Nigeria and Africa, building a cleaner environment for future generations.</p>
                  </div>
                  <div className={styles.mvCard}>
                    <div className={styles.mvIconBox}>
                      <Globe size={32} />
                    </div>
                    <h3>Our Vision</h3>
                    <p>To become Africa&apos;s leading renewable energy enterprise, recognized for world-class solar engineering and community-focused electrification programs.</p>
                  </div>
                </div>

                <div className={styles.valuesSection}>
                  <h3 className={styles.valuesTitle}>Our Core Values</h3>
                  <div className={styles.valuesGrid}>
                    <div className={styles.valueBox}>
                      <div className={styles.vIconBox}>
                        <Zap size={24} />
                      </div>
                      <h4>Innovation</h4>
                      <p>Adopting advanced smart solar tech and storage integrations to maximize performance.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <div className={styles.vIconBox}>
                        <Award size={24} />
                      </div>
                      <h4>Integrity</h4>
                      <p>Building trust through transparent pricing, verified specifications, and honest consulting.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <div className={styles.vIconBox}>
                        <Sun size={24} />
                      </div>
                      <h4>Sustainability</h4>
                      <p>Minimizing environmental impacts and carbon footprints through clean energy adoption.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <div className={styles.vIconBox}>
                        <Star size={24} />
                      </div>
                      <h4>Excellence</h4>
                      <p>Upholding standard engineering protocols for robust, safe, and efficient installations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== SOLUTIONS TAB ==================== */}
        {activeTab === "solutions" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Solutions</span>
                  <h2 className={styles.sectionTitle}>Sized for every scale</h2>
                  <p className={styles.sectionSubtitle}>
                    From a feasibility study and 3D layout to construction and long-term maintenance, we handle the whole build.
                  </p>
                </div>

                <div className={styles.fullSolutionsGrid}>
                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolDetails}>
                      <h3><HomeIcon size={26} className={styles.solTitleIcon} /> Residential Systems</h3>
                      <p>Enjoy uninterrupted power and break free from grid instability. Our residential systems are designed to fit your roof space and budget, offering a blend of panels, smart inverters, and battery backups.</p>
                      <ul>
                        <li>Smart load management & switching</li>
                        <li>High-efficiency roof tiles and modules</li>
                        <li>Overnight silent battery power</li>
                        <li>Mobile App performance monitoring</li>
                      </ul>
                      <button onClick={() => handleTabChange("quote")} className={styles.btnPrimary}>Size Your Home System</button>
                    </div>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-sydney.png" alt="Residential System" />
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-dubai.png" alt="Commercial System" />
                    </div>
                    <div className={styles.fullSolDetails}>
                      <h3><Building2 size={26} className={styles.solTitleIcon} /> Commercial Systems</h3>
                      <p>Protect your business margins against peak utility tariffs and diesel generator fuel costs. Our commercial rooftop and carport solar solutions provide stable, clean power during your peak operating hours.</p>
                      <ul>
                        <li>Peak load shaving & demand charge reductions</li>
                        <li>Corporate sustainability and ESG compliance</li>
                        <li>High-durability structures (25+ year lifespan)</li>
                        <li>Accelerated tax write-offs for green assets</li>
                      </ul>
                      <button onClick={() => handleTabChange("contact")} className={styles.btnPrimary}>Request Corporate Audit</button>
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolDetails}>
                      <h3><Factory size={26} className={styles.solTitleIcon} /> Industrial Systems</h3>
                      <p>Power continuous production lines and manufacturing machinery with megawatt-scale solar arrays. We design robust microgrids with battery buffers to eliminate power quality sags and plant stoppages.</p>
                      <ul>
                        <li>Mega-watt scale ground and roof installations</li>
                        <li>Microgrid controller integrations (solar + grid + gen)</li>
                        <li>Harmonic filtering and power factor corrections</li>
                        <li>Comprehensive O&M maintenance contracts</li>
                      </ul>
                      <button onClick={() => handleTabChange("contact")} className={styles.btnPrimary}>Speak with an Engineer</button>
                    </div>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-johannesburg.png" alt="Industrial System" />
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/product-battery.png" alt="Energy Storage Solutions" />
                    </div>
                    <div className={styles.fullSolDetails}>
                      <h3><BatteryCharging size={26} className={styles.solTitleIcon} /> Energy Storage Solutions</h3>
                      <p>Experience true energy independence with grade-A lithium-iron-phosphate (LiFePO4) storage systems. Designed to buffer grid outages and deliver continuous 24/7 power for residential, commercial, and industrial microgrids.</p>
                      <ul>
                        <li>Scalable 5kWh to 100kWh+ Felicity lithium storage banks</li>
                        <li>6,000+ deep discharge cycles & 10-year battery warranty</li>
                        <li>Zero-millisecond automatic transfer switching (UPS quality)</li>
                        <li>Smart BMS battery protection and mobile app monitoring</li>
                      </ul>
                      <button onClick={() => handleTabChange("quote")} className={styles.btnPrimary}>Calculate Storage Needs</button>
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolDetails}>
                      <h3><Wrench size={26} className={styles.solTitleIcon} /> Solar Maintenance & Servicing</h3>
                      <p>Protect your clean energy investment and maximize annual system yields with our engineering maintenance contracts. We offer preventive panel washing, thermal diagnostics, and emergency repair services nationwide.</p>
                      <ul>
                        <li>Scheduled high-pressure deionized panel washing</li>
                        <li>Inverter thermal auditing, firmware updates & calibration</li>
                        <li>Battery cell health balancing & safety checks</li>
                        <li>24/7 priority emergency technical repair coverage</li>
                      </ul>
                      <button onClick={() => handleTabChange("quote")} className={styles.btnPrimary}>Add Maintenance To Quote</button>
                    </div>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-texas.png" alt="Solar Maintenance" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PROJECTS TAB ==================== */}
        {activeTab === "projects" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Portfolio</span>
                  <h2 className={styles.sectionTitle}>Projects built to spec</h2>
                  <p className={styles.sectionSubtitle}>
                    Installations engineered to international standards across commercial, industrial, utility and residential sites.
                  </p>
                </div>

                {/* Filters */}
                <div className={styles.filtersRow}>
                  {["all", "commercial", "utility", "industrial", "residential"].map((filter) => (
                    <button
                      key={filter}
                      className={`${styles.filterBtn} ${projectFilter === filter ? styles.filterActive : ""}`}
                      onClick={() => setProjectFilter(filter)}
                    >
                      {filter === "all" ? "All projects" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGalleryGrid}>
                  {filteredProjects.map((project, idx) => (
                    <div key={idx} className={styles.galleryCard}>
                      <div className={styles.galleryImgBox}>
                        <img src={project.image} alt={project.title} />
                        <span className={styles.galleryBadge}>{project.capacity}</span>
                      </div>
                      <div className={styles.galleryContent}>
                        <span className={styles.galleryLoc}><MapPin size={12} className={styles.galleryLocIcon} /> {project.location}</span>
                        <h4>{project.title}</h4>
                        <p>Fully commissioned solar grid integration delivering stable power output with certified metrics.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PRODUCTS TAB ==================== */}
        {activeTab === "products" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Catalog</span>
                  <h2 className={styles.sectionTitle}>High-efficiency components</h2>
                  <p className={styles.sectionSubtitle}>
                    We supply and install only grade-A certified products from leading manufacturers, built to last the system&apos;s lifespan.
                  </p>
                </div>

                <div className={styles.productsTabGrid}>
                  {/* Panels */}
                  <div className={styles.productTabCard}>
                    <div className={styles.productBadge}>Tier-1</div>
                    <div className={styles.prodTabIconBox}>
                      <Sun size={28} />
                    </div>
                    <h3>DFQ Solar Panels</h3>
                    <p className={styles.productDesc}>High-efficiency N-Type Bifacial Monocrystalline modules (550W+). Delivers exceptional output even in low-light and high-temperature environments.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Efficiency: Up to 22.5%</li>
                      <li>Warranty: 25 Years Performance</li>
                      <li>Frame: Anodized Aluminum Alloy</li>
                    </ul>
                  </div>

                  {/* Batteries */}
                  <div className={`${styles.productTabCard} ${styles.productHighlight}`}>
                    <div className={styles.productBadgeFeatured}>Featured Partner Product</div>
                    <div className={styles.prodTabIconBox}>
                      <BatteryCharging size={28} />
                    </div>
                    <h3>Felicity Solar Lithium Battery</h3>
                    <p className={styles.productDesc}>Wall-mounted Lithium Iron Phosphate (LiFePO4) storage systems (5kWh & 10kWh packs). Built for continuous cycle durability in demanding climates.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Cycles: &gt; 6,000 cycles @ 80% DoD</li>
                      <li>Warranty: 10 Years Strategic coverage</li>
                      <li>Smart BMS: Built-in safety and balancing</li>
                    </ul>
                  </div>

                  {/* Inverters */}
                  <div className={styles.productTabCard}>
                    <div className={styles.productBadge}>Smart Tech</div>
                    <div className={styles.prodTabIconBox}>
                      <Cpu size={28} />
                    </div>
                    <h3>DFQ Hybrid Inverters</h3>
                    <p className={styles.productDesc}>Smart multi-mode hybrid inverters (3.5kVA to 50kVA). Coordinates power between solar arrays, lithium battery storage, utilities, and backup generators.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Transfer: &lt; 10ms seamless switching</li>
                      <li>Phase: Single and 3-Phase outputs</li>
                      <li>Control: Built-in MPPT chargers</li>
                    </ul>
                  </div>

                  {/* Solar Lights */}
                  <div className={styles.productTabCard}>
                    <div className={styles.productBadge}>Outdoor</div>
                    <div className={styles.prodTabIconBox}>
                      <Zap size={28} />
                    </div>
                    <h3>Smart Solar Street Lights</h3>
                    <p className={styles.productDesc}>All-in-one solar street and compound lighting solutions. Features high-capacity lithium buffers, daylight sensors, and motion dimmers.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Lumens: 8,000 - 15,000 lm</li>
                      <li>Battery: High-grade LiFePO4 pack</li>
                      <li>Sensing: Auto night-switch + PIR motion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== CALCULATOR / QUOTE TAB ==================== */}
        {activeTab === "quote" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Estimator</span>
                  <h2 className={styles.sectionTitle}>Size your system in seconds</h2>
                  <p className={styles.sectionSubtitle}>
                    Set your bill, property type and backup needs. We&apos;ll recommend the array, inverter, battery capacity and an installed-cost range.
                  </p>
                </div>
                <Calculator onQuoteRequest={handleCalculatorQuoteRequest} />
              </div>
            </section>
          </div>
        )}

        {/* ==================== CONTACT TAB ==================== */}
        {activeTab === "contact" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Get in touch</span>
                  <h2 className={styles.sectionTitle}>Ready to power your property?</h2>
                  <p className={styles.sectionSubtitle}>
                    Send your details over WhatsApp and our engineering team will review your specs and reply, usually within 24 hours.
                  </p>
                </div>

                <div className={styles.contactContainer}>
                  {/* Form */}
                  <div className={styles.contactFormBox}>
                    <h3 className={styles.contactFormTitle}>Submit Site Details</h3>
                    {quoteSummary && (
                      <div className={styles.quoteSummaryAlert}>
                        <strong>Selected Quote Setup:</strong> {quoteSummary}
                      </div>
                    )}

                    <form onSubmit={handleContactSubmit} className={styles.form}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className={styles.formInput}
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className={styles.formInput}
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+234 912 289 6507"
                          className={styles.formInput}
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Message & Site Details *</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Describe your load requirements or copy calculator results..."
                          className={styles.formTextarea}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        />
                      </div>

                      <button type="submit" className={styles.formSubmitBtn}>
                        Send via WhatsApp
                      </button>

                      {submitted && (
                        <div className={styles.toastSuccess}>
                          <CheckCircle size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> Opening WhatsApp with your details. Press send there and our team will reply shortly.
                        </div>
                      )}
                    </form>
                  </div>

                  {/* Office Info */}
                  <div className={styles.contactInfoBox}>
                    <h3 className={styles.contactInfoTitle}>Customer Support & Contact</h3>
                    <div className={styles.infoList}>
                      <div className={styles.infoItem}>
                        <Phone size={24} className={styles.contactInfoIcon} />
                        <div>
                          <h5>Phone & WhatsApp Hotline</h5>
                          <p>
                            <a href="https://wa.me/+2348140679281" style={{ color: "inherit", textDecoration: "none" }}>
                              +234 814 067 9281
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <Mail size={24} className={styles.contactInfoIcon} />
                        <div>
                          <h5>Email Address</h5>
                          <p>info@dfqsolarworld.com</p>
                          <p>support@dfqsolarworld.com</p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <Clock size={24} className={styles.contactInfoIcon} />
                        <div>
                          <h5>Operating Hours</h5>
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM (Emergency maintenance only)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Mobile Sticky Bottom Navbar */}
      <nav className={styles.mobileBottomNav}>
        <button
          onClick={() => handleTabChange("home")}
          className={`${styles.bottomNavBtn} ${activeTab === "home" ? styles.bottomNavBtnActive : ""}`}
        >
          <HomeIcon size={20} />
          <span>Home</span>
        </button>
        <button
          onClick={() => handleTabChange("solutions")}
          className={`${styles.bottomNavBtn} ${activeTab === "solutions" ? styles.bottomNavBtnActive : ""}`}
        >
          <Briefcase size={20} />
          <span>Services</span>
        </button>
        <button
          onClick={() => handleTabChange("projects")}
          className={`${styles.bottomNavBtn} ${activeTab === "projects" ? styles.bottomNavBtnActive : ""}`}
        >
          <FolderKanban size={20} />
          <span>Projects</span>
        </button>
        <button
          onClick={() => handleTabChange("contact")}
          className={`${styles.bottomNavBtn} ${activeTab === "contact" ? styles.bottomNavBtnActive : ""}`}
        >
          <ContactIcon size={20} />
          <span>Contact</span>
        </button>
      </nav>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
