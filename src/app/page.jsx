"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Navbar from "@/components/navbar/Navbar.jsx";
import Home from "@/components/home/Home.jsx";
import About from "@/components/about/About.jsx";
import Certifications from "@/components/certifcations/Certifications.jsx";
import Projects from "@/components/projects/Projects.jsx";
import Skills from "@/components/skills/Skills.jsx";
import Contact from "@/components/contact/Contact.jsx";
import Footer from "@/components/footer/Footer.jsx";
import ToastProvider from "@/components/toaster/ToastProvider.jsx";
import ExperienceSection from "@/components/experience/ExperienceSection.jsx";
import EducationSection from "@/components/education/EducationSection.jsx";
import ContactButtons from "@/components/contactButtons/ContactButtons";
import JsonLdSchemas from "@/components/seo/JsonLdSchemas.jsx";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Section refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // On mount: load saved theme from localStorage
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  // Apply .dark class to <html> element whenever darkMode changes
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  // Scroll tracking to highlight navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "education", ref: educationRef },
        { id: "skills", ref: skillsRef },
        { id: "certifications", ref: certificationsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPos = window.scrollY;

      for (let sec of sections) {
        const el = sec.ref.current;
        if (el) {
          const top = el.offsetTop - 150;
          const bottom = top + el.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Wake backend (Render) server
  useEffect(() => {
    const wakeServer = async () => {
      try {
        await axios.get(
          "https://portfolio-form-backend-t69y.onrender.com/api/wake-up"
        );
      } catch (e) {}
    };
    wakeServer();
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* JSON-LD Schemas for SEO */}
      <JsonLdSchemas />

      <ToastProvider />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        sectionRefs={{
          home: homeRef,
          about: aboutRef,
          experience: experienceRef,
          education: educationRef,
          skills: skillsRef,
          certifications: certificationsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />

      <main>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>
        <div ref={educationRef}>
          <EducationSection />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={certificationsRef}>
          <Certifications />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <ContactButtons
          message="MERN Stack Developer consultation"
          whatsappno="9096378354"
          phoneno="9096378354"
        />
      </main>

      <Footer />
    </>
  );
}
