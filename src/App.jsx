import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download, Code2, Cloud,
  BrainCircuit, Layers3, ChevronRight, X
} from "lucide-react";

import { aiTools, workflow, projects, experience, skillGroups } from "./data";

function ProjectVisual({ number }) {
  return <div className={`project-visual visual-${number}`} aria-hidden="true">
    <svg viewBox="0 0 300 100" fill="none">
      {number === "01" ? <>
        <path d="M65 25H105V50H147M65 75H105V50M193 50H235" />
        <rect x="15" y="10" width="50" height="30" rx="5"/><rect x="15" y="60" width="50" height="30" rx="5"/>
        <rect x="147" y="27" width="46" height="46" rx="9"/><rect x="235" y="30" width="50" height="40" rx="5"/>
        <path d="m160 50 7 7 13-14" className="visual-accent"/>
      </> : number === "02" ? <>
        <path d="M50 50H250"/><circle cx="45" cy="50" r="19"/><circle cx="150" cy="50" r="19"/><circle cx="255" cy="50" r="19"/>
        <path d="m37 50 5 5 10-11m90 6 5 5 10-11m90 6 5 5 10-11" className="visual-accent"/>
      </> : <>
        <path d="M150 50 45 22M150 50 45 78M150 50 255 22M150 50 255 78"/>
        <circle cx="150" cy="50" r="24"/><circle cx="45" cy="22" r="12"/><circle cx="45" cy="78" r="12"/><circle cx="255" cy="22" r="12"/><circle cx="255" cy="78" r="12"/>
        <circle cx="150" cy="50" r="9" className="visual-accent"/>
      </>}
    </svg>
  </div>;
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    const padding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar) document.body.style.paddingRight = `${scrollbar}px`;
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = padding;
      trigger?.focus({ preventScroll: true });
    };
  }, [project]);
  return <dialog ref={dialogRef} className="modal" aria-labelledby="case-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    } }}>
    {project && <article>
      <button className="modal-close" onClick={onClose} aria-label="Close case study" autoFocus><X size={20}/></button>
      <p className="eyebrow">CASE STUDY · {project.number}</p>
      <h2 id="case-title">{project.title}</h2>
      <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="case-grid">{[["Challenge", project.challenge], ["Approach", project.approach], ["My role", project.role], ["Impact", project.impact]].map(([title, copy]) =>
        <section key={title}><h3>{title}</h3><p>{copy}</p></section>
      )}</div>
    </article>}
  </dialog>;
}

export default function App(){
 const [selected,setSelected]=useState(null);
 const [active, setActive] = useState("");
 const closeModal = useCallback(() => setSelected(null), []);
 useEffect(() => {
   const sections = ["work", "ai", "experience", "about"].map(id => document.getElementById(id));
   let frame;
   const update = () => {
     cancelAnimationFrame(frame);
     frame = requestAnimationFrame(() => {
       const current = sections.find(section => {
         const rect = section.getBoundingClientRect();
         return rect.top <= window.innerHeight * .4 && rect.bottom > window.innerHeight * .4;
       });
       setActive(current?.id || "");
     });
   };
   update();
   window.addEventListener("scroll", update, { passive: true });
   window.addEventListener("resize", update);
   return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
 }, []);
 return <div className="site-shell">
  <a className="skip-link" href="#top">Skip to content</a>
  <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
    <a className="brand" href="#top"><span className="brand-mark">RK</span><span className="brand-name">Ritish Kolan</span></a>
    <div className="nav-links">{[["work", "Work"], ["ai", "AI Workflow"], ["experience", "Experience"], ["about", "About"]].map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}</div>
    <a className="nav-cta" href="mailto:ritish.kolan05@gmail.com">Let’s talk <ArrowUpRight size={16}/></a>
  </nav></header>

  <main id="top" tabIndex={-1}>
   <section className="hero container">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="availability"><span className="pulse"/>Open to senior / principal engineering opportunities</div>
    <div className="hero-grid">
     <div>
      <p className="eyebrow">PRINCIPAL ENGINEER · AI-ENABLED SOFTWARE & WEB PLATFORM ARCHITECT</p>
      <h1>I build & modernize <span className="accent-line">software platforms</span><span className="muted-line">with web, cloud & AI.</span></h1>
     </div>
     <div className="hero-side">
      <p className="hero-copy">10+ years delivering enterprise web and cloud platforms—combining React, TypeScript, APIs and AWS serverless with AI-assisted engineering.</p>
      <div className="hero-actions"><a className="primary-btn" href="#work">Explore my work <ChevronRight size={17}/></a><a className="text-link" href="mailto:ritish.kolan05@gmail.com"><Mail size={17}/> Email me</a></div>
     </div>
    </div>
    <div className="hero-stats"><div><strong>10+</strong><span>Years engineering</span></div><div><strong>~45%</strong><span>Build-time reduction</span></div><div><strong>150M+</strong><span>Global LMS ecosystem</span></div><div><strong>E2E</strong><span>Solution delivery</span></div></div>
   </section>

   <section className="marquee-strip"><div className="container strip-inner"><span>REACT</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>AWS</span><i>✦</i><span>APIs</span><i>✦</i><span>AI-ASSISTED ENGINEERING</span></div></section>

   <section className="section container" id="work">
    <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Platforms, modernization & measurable impact.</h2></div><p>Selected examples are generalized to respect proprietary enterprise work. Click a project to see the engineering story.</p></div>
    <div className="project-grid three">
     {projects.map(p=><button className="project-card" key={p.number} aria-haspopup="dialog" aria-label={`Read case study: ${p.title}`} onClick={()=>setSelected(p)}>
      <div className="project-top"><span className="project-number">{p.number}</span><ArrowUpRight size={20} aria-hidden="true"/></div>
      <ProjectVisual number={p.number}/>
      <p className="project-label">{p.label}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p>
      <div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
      <div className="metric"><strong>{p.metric}</strong><span>{p.metricLabel}</span></div>
     </button>)}
    </div>
   </section>

   <section className="section ai-section" id="ai"><div className="container">
    <div className="ai-heading"><div><p className="eyebrow">AI-ENABLED ENGINEERING</p><h2>AI accelerates the workflow.<br/>Engineering judgment owns the outcome.</h2></div><p>I use AI day-to-day to accelerate solution exploration, implementation, troubleshooting, code refinement and developer productivity—while keeping architecture, review and validation in the loop.</p></div>
    <ol className="workflow" aria-label="AI-supported engineering workflow">{workflow.map(([n,t,d])=><li className="workflow-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    <div className="tool-row"><span>TOOLKIT</span>{aiTools.map(t=><b key={t}>{t}</b>)}</div>
   </div></section>

   <section className="section section-dark" id="experience"><div className="container">
    <div className="section-heading light"><div><p className="eyebrow">EXPERIENCE</p><h2>From UI development to platform leadership.</h2></div></div>
    <div className="timeline">{experience.map(([period,role,company,summary], index)=><article className={`timeline-row ${index === 0 ? "current-role" : ""}`} key={company+role}>
      <div className="timeline-period">{period}</div><div className="timeline-role"><h3>{role}</h3><p className="company">{company}</p></div><div className="timeline-content"><p>{summary}</p></div>
    </article>)}</div>
   </div></section>

   <section className="section container" id="about">
    <div className="about-grid"><div><p className="eyebrow">HOW I WORK</p><h2>Architecture thinking. Product mindset. Hands-on delivery.</h2></div>
    <div className="about-copy"><p>I work across discovery, technical design, rapid prototyping, implementation, deployment and production support—turning complex enterprise requirements into scalable software.</p><p>My foundation is web-platform engineering, strengthened by cloud-native architecture, API integration, stakeholder leadership and practical AI-assisted development.</p></div></div>
    <div className="capability-grid">
     <div className="capability"><Code2/><h3>Web Platform</h3><p>React, TypeScript, Redux, Angular, Storybook, reusable architecture and accessible UI.</p></div>
     <div className="capability"><Cloud/><h3>Cloud & APIs</h3><p>AWS serverless, Node.js, REST, GraphQL, Docker and Kubernetes.</p></div>
     <div className="capability"><BrainCircuit/><h3>AI-Assisted Delivery</h3><p>Exploration, implementation, debugging, refactoring and productivity with engineering oversight.</p></div>
     <div className="capability"><Layers3/><h3>Technical Leadership</h3><p>POCs, architecture decisions, mentoring, reviews, stakeholders and distributed teams.</p></div>
    </div>
   </section>

   <section className="section skills-section" aria-labelledby="stack-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">TECH STACK</p><h2 id="stack-title">The tools behind the work.</h2></div><p>Web and cloud foundations, supported by practical AI-assisted development.</p></div>
    <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.title}><span className="skill-number" aria-hidden="true">0{index + 1}</span><h3>{group.title}</h3><ul>{group.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></article>)}</div>
   </div></section>

   <section className="contact-section"><div className="container contact-grid">
    <div><p className="eyebrow">LET'S CONNECT</p><h2>Building something ambitious?</h2><p className="contact-copy">Interested in principal/lead software, web platform, cloud and AI-enabled engineering opportunities.</p></div>
       <div className="contact-links"><a className="resume-btn" href="/Ritish-Kolan-Resume.pdf" download><Download size={18}/> Download Resume</a><a href="mailto:ritish.kolan05@gmail.com"><Mail size={18} /> ritish.kolan05@gmail.com</a>
         <a href="https://www.linkedin.com/in/ritish-kolan-0685aa148"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a>
         <span className="contact-placeholder"><Github size={18} /> GitHub <small>Link coming soon</small></span>
         <span>
           <MapPin size={18} /> Raleigh area, North Carolina
         </span>
       </div>
   </div></section>
  </main>
  <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Ritish Kolan</span><span>React · Cloud · AI-enabled engineering</span></div></footer>
  <ProjectModal project={selected} onClose={closeModal}/>
 </div>
}
