"use client";

const JsonLdSchemas = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ganesh Kumbhar",
    jobTitle: "MERN Stack Developer",
    email: "mailto:ganeshhh2003@gmail.com",
    telephone: "+919096378354",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411004",
      addressCountry: "IN",
    },
    url: "https://gktechhub.com",
    image: "https://gktechhub.com/og-image.png",
    sameAs: [
      "https://github.com/Ganesh-D-Kumbhar",
      "https://www.linkedin.com/in/ganesh-d-kumbhar",
      "https://www.hackerrank.com/profile/ganeshhh2003",
      "https://www.instagram.com/ganesh_kumbhar_211",
      "https://www.facebook.com/ganeshkumbhar211",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Karmayogi Institute of Technology, Pandharpur",
    },
    knowsAbout: [
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Full Stack Development",
      "REST APIs",
      "Micro Frontends",
      "UI/UX",
      "Tailwind CSS",
      "Bootstrap",
      "AWS Basics",
      "Git/GitHub",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GK TechHub – Portfolio of Ganesh Kumbhar",
    url: "https://gktechhub.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gktechhub.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gktechhub.com",
      },
    ],
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Dream Homes – Real Estate Website",
    description:
      "A modern, responsive real estate web application featuring property listings for 2BHK, 3BHK, 4BHK, penthouses, villas, studios, duplexes, and townhouses for both rent and sale.",
    image: "https://gktechhub.com/dream-homes/og-image.jpg",
    url: "https://gktechhub.com/dream-homes",
    creator: {
      "@type": "Person",
      name: "Ganesh Kumbhar",
      url: "https://gktechhub.com",
    },
    dateCreated: "2025-01-15",
    keywords: [
      "Real Estate Website",
      "Property Listings",
      "React Developer",
      "Frontend Developer",
      "Buy Property",
      "Rent Property",
      "Dream Homes",
      "Real Estate App",
      "MERN Real Estate Project",
    ],
    inLanguage: "en",
  };

  const employeeSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ganesh Kumbhar",
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Seven Mentor Pvt. Ltd.",
    },
    sameAs: [
      "https://github.com/Ganesh-D-Kumbhar",
      "https://www.linkedin.com/in/ganesh-d-kumbhar",
      "https://www.hackerrank.com/profile/ganeshhh2003",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Karmayogi Institute of Technology, Pandharpur",
    },
    url: "https://gktechhub.com",
    email: "mailto:ganeshhh2003@gmail.com",
    telephone: "+91 9096378354",
  };

  const occupationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ganesh Kumbhar",
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Seven Mentor Corporate Services Pvt. Ltd.",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Karmayogi Institute of Technology, Pandharpur",
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "ReactJs Developer",
        description:
          "Developing full-stack MERN applications, implementing micro-frontend architecture, secure REST APIs, and NodeMailer OAuth2.0 integration.",
        startDate: "2025-02",
        employmentType: "Full-time",
      },
      {
        "@type": "Occupation",
        name: "ReactJs Developer (Internship)",
        description:
          "Contributed to MERN stack development, CMS/LMS modules, role-based access control, and responsive UI implementation.",
        startDate: "2024-10",
        endDate: "2025-01",
        employmentType: "Internship",
      },
    ],
    url: "https://gktechhub.com",
    sameAs: [
      "https://github.com/Ganesh-D-Kumbhar",
      "https://www.linkedin.com/in/ganesh-d-kumbhar",
      "https://www.hackerrank.com/profile/ganeshhh2003",
    ],
  };

  const schemas = [
    personSchema,
    websiteSchema,
    breadcrumbSchema,
    creativeWorkSchema,
    employeeSchema,
    occupationSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};

export default JsonLdSchemas;
