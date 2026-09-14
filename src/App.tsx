import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import MatrixRain from '@/components/MatrixRain';

type Language = 'es' | 'en';

type Copy = {
  nav: { home: string; profile: string; experience: string; skills: string; contact: string };
  hero: { eyebrow: string; role: string; description: string; cta: string; secondary: string; stats: string[] };
  profile: { kicker: string; title: string; paragraphs: string[]; location: string; email: string; phone: string; availability: string; download: string };
  experience: { kicker: string; title: string; work: string; education: string; current: string; jobs: Array<{ period: string; title: string; company: string; bullets: string[] }>; degree: string; university: string; degreePeriod: string; degreeDescription: string; certifications: string; certs: Array<{ title: string; meta: string; detail: string }> };
  skills: { kicker: string; title: string; methods: string; technical: string; arsenal: string; groups: Array<{ name: string; items: Array<{ label: string; value: number }> }>; tools: string[] };
  contact: { kicker: string; title: string; description: string; reply: string; form: { name: string; email: string; topic: string; phone: string; message: string; button: string; success: string } };
  footer: string;
};

const copy: Record<Language, Copy> = {
  es: {
    nav: { home: 'Inicio', profile: 'Perfil', experience: 'Experiencia', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      eyebrow: 'root@kali:~$ whoami', role: 'Red Team Operator',
      description: 'Pentester ofensivo especializado en aplicaciones web, APIs e infraestructura. Metódico, orientado al impacto de negocio y enfocado en convertir hallazgos críticos en decisiones claras.',
      cta: 'Hablemos', secondary: 'Ver experiencia', stats: ['Auditorías', 'Validación BB', 'Reportes'],
    },
    profile: {
      kicker: '$ cat profile.txt', title: 'Ofensiva con criterio, evidencia y propósito.',
      paragraphs: [
        'Soy un Pentester Ofensivo especializado en aplicaciones web, APIs e infraestructura, con experiencia práctica en auditorías de seguridad, programas de bug bounty y automatización de procesos de testing.',
        'Trabajo con OWASP Top 10, PTES y MITRE ATT&CK para identificar vulnerabilidades como SQL Injection, XSS, SSRF, RCE y fallas de lógica de negocio. Mi entrega combina reportes técnicos detallados con resúmenes ejecutivos que explican el riesgo real.',
      ], location: 'La Habana, Cuba · Remoto', email: 'astrorealo31@gmail.com', phone: '+53 59805123', availability: 'Disponible para colaborar', download: 'Descargar CV',
    },
    experience: {
      kicker: '02 / trayectoria', title: 'Experiencia que se traduce en impacto.', work: 'Experiencia profesional', education: 'Educación y certificaciones', current: 'Actual',
      jobs: [
        { period: 'Ago 2025 — Mar 2026', title: 'Penetration Tester · Mid-Level', company: 'INTRUST SECURITY · Remoto', bullets: ['27+ auditorías en aplicaciones web, APIs y plataformas móviles bajo OWASP y PTES.', 'Identificación de un promedio de 8+ vulnerabilidades por evaluación.', 'Explotación de SQL Injection, XSS, SSRF, RCE y fallas de lógica de negocio.', 'Automatización de reconocimiento y explotación con Python y Bash.', 'Reportes técnicos y resúmenes ejecutivos enfocados en el impacto de negocio.'] },
        { period: 'Dic 2023 — Ago 2025', title: 'Freelancer / Bug Bounty', company: 'Investigador de Seguridad Independiente · Remoto', bullets: ['Participación en múltiples programas de Bug Bounty para aplicaciones web e infraestructura.', '75% de aceptación de reportes: 6 de 8 envíos validados.', 'Pruebas manuales profundas combinadas con herramientas automatizadas.', 'Identificación de fallas de control de acceso, validación y configuración.'] },
        { period: 'May 2023 — Dic 2023', title: 'Especialista en Monitoreo de Sistemas y Seguridad', company: 'XETID DEVELOPMENT COMPANY · La Habana, Cuba', bullets: ['Monitoreo de disponibilidad, integridad y seguridad con Elastic Stack.', 'Simulaciones controladas de DoS para evaluar la resiliencia de la infraestructura.', '40+ reportes de incidentes con análisis post-incidente.'] },
      ], degree: 'Ingeniería en Ciencias de la Computación', university: 'Universidad de Ciencias Informáticas (UCI)', degreePeriod: '2022 — 2026', degreeDescription: 'La Habana, Cuba · Ciberseguridad, desarrollo de software y análisis de datos.', certifications: 'Certificaciones', certs: [{ title: 'EF SET Certificate B1 Intermediate', meta: '41/100 · Feb 2026', detail: 'cert.efset.org/YfMbVQ' }, { title: 'ICIP Certificate', meta: 'Institución ICIP', detail: 'Certificado verificado' }, { title: 'Idiomas', meta: 'Español nativo', detail: 'Inglés B1 · Lectura técnica y reportes' }],
    },
    skills: {
      kicker: '03 / arsenal', title: 'Herramientas para encontrar lo que otros pasan por alto.', methods: 'Metodologías y herramientas', technical: 'Especializaciones técnicas', arsenal: '// tech arsenal',
      groups: [
        { name: 'Métodos & tooling', items: [{ label: 'OWASP · PTES · MITRE ATT&CK', value: 95 }, { label: 'Burp Suite · Nmap · Metasploit', value: 90 }, { label: 'SQLMap · Nuclei · FFUF · Amass', value: 85 }, { label: 'Threat Modeling · Bug Bounty', value: 90 }] },
        { name: 'Áreas técnicas', items: [{ label: 'Web Application Pentesting', value: 95 }, { label: 'API Security Testing', value: 90 }, { label: 'Mobile Security', value: 80 }, { label: 'Python · Bash · JavaScript · SQL', value: 85 }, { label: 'Reconocimiento · Explotación', value: 92 }] },
      ], tools: ['Burp Suite', 'Nmap', 'Metasploit', 'Python', 'Bash', 'SQLMap', 'Nuclei', 'Wireshark'],
    },
    contact: { kicker: '04 / contacto', title: '¿Tienes una superficie que poner a prueba?', description: 'Si necesitas evaluar una aplicación web, API o infraestructura, conversemos sobre el alcance, el riesgo y el resultado que necesitas.', reply: 'Responderé en menos de 24h', form: { name: 'Nombre completo', email: 'Correo electrónico', topic: 'Asunto', phone: 'Teléfono (opcional)', message: 'Cuéntame sobre tu proyecto...', button: 'Enviar mensaje', success: 'Tu cliente de correo está listo para enviar el mensaje.' } },
    footer: 'Red Team Operator · Web, APIs & Infrastructure Security',
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: {
      eyebrow: 'root@kali:~$ whoami', role: 'Red Team Operator',
      description: 'Offensive pentester specialized in web applications, APIs, and infrastructure. Methodical, business-impact driven, and focused on turning critical findings into clear decisions.',
      cta: "Let's talk", secondary: 'View experience', stats: ['Audits', 'BB validation', 'Reports'],
    },
    profile: {
      kicker: '$ cat profile.txt', title: 'Offensive security with evidence, context, and purpose.',
      paragraphs: [
        'I am an Offensive Pentester specialized in web applications, APIs, and infrastructure, with hands-on experience in security assessments, bug bounty programs, and testing automation.',
        'I work with OWASP Top 10, PTES, and MITRE ATT&CK to identify vulnerabilities such as SQL Injection, XSS, SSRF, RCE, and business logic flaws. My delivery combines detailed technical reports with executive summaries that explain the real risk.',
      ], location: 'Havana, Cuba · Remote', email: 'astrorealo31@gmail.com', phone: '+53 59805123', availability: 'Available to collaborate', download: 'Download CV',
    },
    experience: {
      kicker: '02 / background', title: 'Experience translated into impact.', work: 'Professional experience', education: 'Education & certifications', current: 'Current',
      jobs: [
        { period: 'Aug 2025 — Mar 2026', title: 'Penetration Tester · Mid-Level', company: 'INTRUST SECURITY · Remote', bullets: ['27+ assessments across web applications, APIs, and mobile platforms under OWASP and PTES.', 'Identified an average of 8+ vulnerabilities per assessment.', 'Exploited SQL Injection, XSS, SSRF, RCE, and business logic flaws.', 'Automated reconnaissance and exploitation workflows with Python and Bash.', 'Produced technical reports and executive summaries focused on business impact.'] },
        { period: 'Dec 2023 — Aug 2025', title: 'Freelancer / Bug Bounty', company: 'Independent Security Researcher · Remote', bullets: ['Participated in multiple Bug Bounty programs for web applications and infrastructure.', '75% report acceptance rate: 6 of 8 submissions validated.', 'Combined deep manual testing with automated tooling.', 'Identified access control, input validation, and configuration weaknesses.'] },
        { period: 'May 2023 — Dec 2023', title: 'Systems & Security Monitoring Specialist', company: 'XETID DEVELOPMENT COMPANY · Havana, Cuba', bullets: ['Monitored availability, integrity, and security with Elastic Stack.', 'Ran controlled DoS simulations to evaluate infrastructure resilience.', 'Created 40+ incident reports with post-incident analysis.'] },
      ], degree: 'Computer Science Engineering', university: 'University of Informatics Sciences (UCI)', degreePeriod: '2022 — 2026', degreeDescription: 'Havana, Cuba · Cybersecurity, software development, and data analysis.', certifications: 'Certifications', certs: [{ title: 'EF SET Certificate B1 Intermediate', meta: '41/100 · Feb 2026', detail: 'cert.efset.org/YfMbVQ' }, { title: 'ICIP Certificate', meta: 'ICIP institution', detail: 'Verified certificate' }, { title: 'Languages', meta: 'Native Spanish', detail: 'English B1 · Technical reading and reporting' }],
    },
    skills: {
      kicker: '03 / arsenal', title: 'Tools for finding what others overlook.', methods: 'Methodologies & tools', technical: 'Technical specializations', arsenal: '// tech arsenal',
      groups: [
        { name: 'Methods & tooling', items: [{ label: 'OWASP · PTES · MITRE ATT&CK', value: 95 }, { label: 'Burp Suite · Nmap · Metasploit', value: 90 }, { label: 'SQLMap · Nuclei · FFUF · Amass', value: 85 }, { label: 'Threat Modeling · Bug Bounty', value: 90 }] },
        { name: 'Technical areas', items: [{ label: 'Web Application Pentesting', value: 95 }, { label: 'API Security Testing', value: 90 }, { label: 'Mobile Security', value: 80 }, { label: 'Python · Bash · JavaScript · SQL', value: 85 }, { label: 'Reconnaissance · Exploitation', value: 92 }] },
      ], tools: ['Burp Suite', 'Nmap', 'Metasploit', 'Python', 'Bash', 'SQLMap', 'Nuclei', 'Wireshark'],
    },
    contact: { kicker: '04 / contact', title: 'Have an attack surface to test?', description: 'If you need to assess a web application, API, or infrastructure, let’s talk about scope, risk, and the outcome you need.', reply: 'I will reply within 24h', form: { name: 'Full name', email: 'Email address', topic: 'Subject', phone: 'Phone (optional)', message: 'Tell me about your project...', button: 'Send message', success: 'Your email client is ready to send the message.' } },
    footer: 'Red Team Operator · Web, APIs & Infrastructure Security',
  },
};

const stats = [{ value: '27', suffix: '+' }, { value: '75', suffix: '%' }, { value: '40', suffix: '+' }];

function App() {
  const [language, setLanguage] = useState<Language>(() => (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [sent, setSent] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const sections = ['home', 'profile', 'experience', 'skills', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [language]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get('topic') || 'Portfolio inquiry');
    const body = [`Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Phone: ${form.get('phone') || 'Not provided'}`, '', String(form.get('message') || '')].join('\n');
    window.location.href = `mailto:astrorealo31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="app-shell">
      <div className="scanlines" />
      <div className="matrix-glow matrix-glow-one" />
      <div className="matrix-glow matrix-glow-two" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Elieser Hernandez home"><span>&lt;</span>EH<span>/&gt;</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'site-nav open' : 'site-nav'}>
          {Object.entries(t.nav).map(([id, label]) => <a key={id} className={activeSection === (id === 'profile' ? 'profile' : id) ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label="Change language"><span className={language === 'es' ? 'selected' : ''}>ES</span><span>/</span><span className={language === 'en' ? 'selected' : ''}>EN</span></button>
          <span className="online-status"><i /> ONLINE</span>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <div className="terminal-line"><span>root@kali</span>:<b>~</b>$ <strong>whoami</strong><i /></div>
            <p className="eyebrow">01 / offensive security specialist</p>
            <h1>Elieser <em>Hernandez</em></h1>
            <h2><span>&gt;</span> {t.hero.role}</h2>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">{t.hero.cta} <ArrowUpRight size={17} /></a><a className="text-link" href="#experience">{t.hero.secondary} <ArrowDownRight size={17} /></a></div>
            <div className="stats-row">{stats.map((stat, index) => <div className="stat" key={stat.value}><strong>{stat.value}<small>{stat.suffix}</small></strong><span>{t.hero.stats[index]}</span></div>)}</div>
          </div>
          <div className="hero-portrait reveal"><div className="portrait-frame"><MatrixRain /><div className="portrait-overlay" /><div className="portrait-hud"><Lock size={18} /><span>ACCESS_DENIED</span></div><div className="portrait-glitch"><Terminal size={14} /> root@kali:~# nmap -sV -A target</div></div><div className="portrait-label"><span>OPERATOR PROFILE</span><strong>EH / 2026</strong></div><div className="corner corner-tl" /><div className="corner corner-br" /></div>
          <a className="scroll-cue" href="#profile"><span>SCROLL TO EXPLORE</span><ChevronDown size={17} /></a>
        </section>

        <section className="section profile-section" id="profile"><div className="section-heading"><p className="eyebrow">{t.profile.kicker}</p><h2>{t.profile.title}</h2></div><div className="profile-grid"><div className="profile-copy"><p>{t.profile.paragraphs[0]}</p><p>{t.profile.paragraphs[1]}</p><div className="info-grid"><Info icon={<MapPin />} label={language === 'es' ? 'Ubicación' : 'Location'} value={t.profile.location} /><Info icon={<Mail />} label="Email" value={t.profile.email} /><Info icon={<Phone />} label={language === 'es' ? 'Teléfono' : 'Phone'} value={t.profile.phone} /><Info icon={<CheckCircle2 />} label={language === 'es' ? 'Disponibilidad' : 'Availability'} value={t.profile.availability} accent /></div><a className="button button-outline" href="/CV_Ciber_es_8_2026.pdf" download>{t.profile.download} <Download size={17} /></a></div><div className="profile-aside"><div className="aside-number">01<span>/</span></div><div><ShieldCheck size={30} /><p>Evidence-led<br />security testing.</p></div></div></div></section>

        <section className="section timeline-section" id="experience"><div className="section-heading"><p className="eyebrow">{t.experience.kicker}</p><h2>{t.experience.title}</h2></div><div className="timeline-layout"><div><h3 className="column-title"><BriefcaseBusiness size={19} /> {t.experience.work}</h3><div className="timeline">{t.experience.jobs.map((job, index) => <article className="timeline-item" key={job.title}><div className="timeline-dot" /><div className="timeline-card"><div className="card-meta"><span><CalendarDays size={14} /> {job.period}</span>{index === 0 && <b>{t.experience.current}</b>}</div><h4>{job.title}</h4><h5>{job.company}</h5><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></div><div><h3 className="column-title"><BadgeCheck size={19} /> {t.experience.education}</h3><div className="timeline compact"><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-card"><div className="card-meta"><span><CalendarDays size={14} /> {t.experience.degreePeriod}</span></div><h4>{t.experience.degree}</h4><h5>{t.experience.university}</h5><p>{t.experience.degreeDescription}</p></div></article>{t.experience.certs.map((cert) => <article className="timeline-item" key={cert.title}><div className="timeline-dot" /><div className="timeline-card"><div className="card-meta"><span>{cert.meta}</span></div><h4>{cert.title}</h4><p>{cert.detail}</p></div></article>)}</div></div></div></section>

        <section className="section skills-section" id="skills"><div className="section-heading"><p className="eyebrow">{t.skills.kicker}</p><h2>{t.skills.title}</h2></div><div className="skill-columns">{t.skills.groups.map((group, groupIndex) => <div className="skill-panel" key={group.name}><h3><Code2 size={19} /> {groupIndex === 0 ? t.skills.methods : t.skills.technical}</h3>{group.items.map((skill) => <div className="skill-row" key={skill.label}><div><span>{skill.label}</span><b>{skill.value}%</b></div><div className="skill-track"><i style={{ width: `${skill.value}%` }} /></div></div>)}</div>)}</div><div className="arsenal"><h3>{t.skills.arsenal}</h3><div>{t.skills.tools.map((tool) => <span key={tool}><Zap size={14} /> {tool}</span>)}</div></div></section>

        <section className="section contact-section" id="contact"><div className="contact-grid"><div className="contact-copy"><p className="eyebrow">{t.contact.kicker}</p><h2>{t.contact.title}</h2><p>{t.contact.description}</p><div className="reply-note"><Terminal size={17} /> $ echo "{t.contact.reply}"</div><div className="contact-links"><a href="mailto:astrorealo31@gmail.com"><Mail size={18} /> astrorealo31@gmail.com <ExternalLink size={14} /></a><a href="https://www.linkedin.com/in/elieser-hernandez-795771273/" target="_blank" rel="noreferrer"><Linkedin size={18} /> linkedin / elieser-hernandez <ExternalLink size={14} /></a><a href="https://wa.me/5359805123" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp · +53 59805123 <ExternalLink size={14} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label><span>{t.contact.form.name}</span><input name="name" required /></label><label><span>{t.contact.form.email}</span><input name="email" type="email" required /></label></div><div className="form-row"><label><span>{t.contact.form.topic}</span><input name="topic" required /></label><label><span>{t.contact.form.phone}</span><input name="phone" type="tel" /></label></div><label><span>{t.contact.form.message}</span><textarea name="message" rows={5} required /></label><button className="button button-primary" type="submit">{t.contact.form.button} <Send size={16} /></button>{sent && <p className="form-success">{t.contact.form.success}</p>}</form></div></section>
      </main>
      <footer><div className="brand"><span>&lt;</span>EH<span>/&gt;</span></div><p>{t.footer}</p><a href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></footer>
    </div>
  );
}

function Info({ icon, label, value, accent = false }: { icon: JSX.Element; label: string; value: string; accent?: boolean }) {
  return <div className="info-item"><span className="info-icon">{icon}</span><div><small>{label}</small><strong className={accent ? 'accent-text' : ''}>{value}</strong></div></div>;
}

export default App;
