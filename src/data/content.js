const heroImage = 'imagen-fondo.avif';

export const defaultLanguage = 'es';

export const languages = {
  es: {
    code: 'es',
    label: 'ES',
    name: 'Español',
    path: 'es/',
  },
  en: {
    code: 'en',
    label: 'EN',
    name: 'English',
    path: 'en/',
  },
};

export const content = {
  es: {
    meta: {
      title: 'Aser Fole de Navia de la Cruz - Ciberseguridad y Ciberinteligencia',
      description:
        'Portfolio profesional de Aser Fole de Navia de la Cruz, ingeniero informático especializado en ciberseguridad, ciberinteligencia, DevSecOps e infraestructura.',
    },
    navigation: {
      ariaLabel: 'Navegación principal',
      languageLabel: 'Cambiar idioma',
      links: [
        { label: 'Perfil', href: '#perfil' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Stack', href: '#stack' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    profile: {
      name: 'Aser Fole de Navia de la Cruz',
      role: 'Ingeniero informático en ISDEFE | Especializado en Ciberseguridad y Ciberinteligencia',
      email: '',
      location: 'Madrid, España · Galicia',
      availability: 'Base actual en Madrid, con vinculación y disponibilidad profesional en Galicia',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aser-fole-de-navia-de-la-cruz/' },
      ],
    },
    hero: {
      eyebrow: 'Ciberseguridad · Ciberinteligencia · DevSecOps · Infraestructura',
      title: 'Ingeniería de ciberseguridad para entornos técnicos exigentes.',
      value:
        'Ingeniero informático especializado en ciberseguridad y ciberinteligencia, con experiencia en hardening, automatización de infraestructura, diseño de redes, despliegue de servicios y análisis de inteligencia aplicada a la defensa.',
      primaryCta: { label: 'Ver proyectos', href: '#proyectos' },
      secondaryCta: { label: 'Contactar en LinkedIn', href: '#contacto' },
      image: {
        src: heroImage,
        alt: 'Imagen de fondo tecnológica en tonos oscuros',
        credit: '',
        creditUrl: '',
      },
    },
    about: {
      id: 'perfil',
      eyebrow: 'Sobre mí',
      title: 'Perfil de ingeniería orientado a defensa, automatización y operación segura.',
      body: [
        'Actualmente me encuentro trabajando en ISDEFE como ingeniero informático, especializado en ciberseguridad y ciberinteligencia. Mi trabajo se centra en fortalecer sistemas, automatizar infraestructura virtual, desplegar y configurar servicios, diseñar redes y aplicar ciberinteligencia para apoyar decisiones en defensa.',
        'Actualmente estoy en Madrid y también puedo colaborar de forma telemática en proyectos y entornos distribuidos. Me interesa construir soluciones seguras, reproducibles y bien documentadas, combinando visión defensiva, automatización y capacidad de análisis.',
      ],
      strengthsTitle: 'Fortalezas técnicas',
      strengths: [
        'Hardening de sistemas informáticos',
        'Automatización de infraestructura virtual',
        'Análisis y explotación de ciberinteligencia',
        'Diseño de redes y despliegue de servicios',
        'DevSecOps con Ansible, Terraform y Packer',
        'Pentesting y análisis de vulnerabilidades',
      ],
      principles: [
        { label: 'Defensa', text: 'Seguridad aplicada a sistemas, redes e infraestructura.' },
        { label: 'Automatización', text: 'Procesos reproducibles para operar con más rigor.' },
        { label: 'Ciberinteligencia', text: 'Análisis aplicado para apoyar decisiones de seguridad y defensa.' },
      ],
    },
    experience: {
      id: 'experiencia',
      eyebrow: 'Experiencia',
      title: 'Experiencia en ciberseguridad, infraestructura y automatización.',
      intro:
        'Trayectoria centrada en ciberseguridad, administración de firewalls, DevSecOps, diseño de redes, despliegue de infraestructura, despliegue de servicios y ciberinteligencia.',
      items: [
        {
          role: 'Ingeniero de Ciberseguridad',
          company: 'ISDEFE · Jornada completa · Madrid',
          period: 'Sept. 2023 - Actualidad',
          context:
            'Trabajo presencial en funciones vinculadas a ciberseguridad, ciberinteligencia, infraestructura virtual y operación técnica segura.',
          highlights: [
            'Hardening de sistemas informáticos y mejora de la postura defensiva de entornos técnicos.',
            'Administración y automatización de infraestructura virtual de la organización con enfoque DevSecOps.',
            'Análisis y explotación de ciberinteligencia para apoyar procesos de seguridad.',
            'Diseño de redes, despliegue y configuración de servidores y servicios.',
          ],
          tags: ['Ciberseguridad', 'Ciberinteligencia', 'DevSecOps', 'Hardening', 'Redes'],
        },
        {
          role: 'Contrato de prácticas',
          company: 'Everis · En remoto · La Coruña, Galicia',
          period: 'Sept. 2020 - Ago. 2021',
          context:
            'Prácticas profesionales con funciones en desarrollo de aplicaciones web y administración de Next-Generation Firewalls.',
          highlights: [
            'Desarrollo de aplicaciones web entre septiembre de 2020 y abril de 2021.',
            'Administración de Next-Generation Firewalls entre mayo y agosto de 2021.',
            'Trabajo con Fortigate, políticas de seguridad de red y fundamentos de desarrollo y bases de datos.',
          ],
          tags: ['Fortigate', 'NGFW', 'Desarrollo web', 'Java', 'SQL'],
        },
      ],
    },
    projects: {
      id: 'proyectos',
      eyebrow: 'Proyectos destacados',
      title: 'Proyectos y ejercicios aplicados a seguridad, automatización y operación.',
      intro:
        'Trabajos y ejercicios con foco en seguridad de red, operaciones de ciberseguridad y defensa en escenarios de alta exigencia.',
      items: [
        {
          name: 'TFG - Automatización de la gestión de las políticas de seguridad de la red',
          description:
            'Trabajo de fin de grado orientado a automatizar la gestión de políticas de seguridad de red, con foco en eficiencia operativa y control técnico.',
          impact:
            'Conecta administración de red, seguridad perimetral y automatización para reducir trabajo manual en la gestión de políticas.',
          technologies: ['Automatización', 'Seguridad de red', 'Políticas de seguridad', 'NGFW'],
          link: '#',
        },
        {
          name: 'Locked Shields 2025',
          kicker: 'ejercicio',
          description:
            'Participación en Locked Shields, el mayor y más complejo ejercicio internacional de ciberdefensa en vivo.',
          impact:
            'Experiencia en un entorno live-fire de alta exigencia, con escenarios realistas de defensa, coordinación técnica y respuesta ante incidentes.',
          technologies: ['Locked Shields', 'Ciberdefensa', 'Blue Team', 'Incident Response', 'Live-fire'],
          link: '#',
        },
        {
          name: 'TFM - Centro de operaciones de seguridad con despliegue y escalado automatizado',
          description:
            'Trabajo de fin de máster centrado en un centro de operaciones de seguridad con capacidades de despliegue y escalado automatizado.',
          impact:
            'Aplica principios de automatización e infraestructura reproducible al contexto de operaciones de seguridad.',
          technologies: ['SOC', 'Automatización', 'DevSecOps', 'Infraestructura'],
          link: '#',
        },
      ],
    },
    skills: {
      id: 'stack',
      eyebrow: 'Stack y skills',
      title: 'Herramientas y capacidades para construir, defender y automatizar entornos seguros.',
      intro:
        'Selección de tecnologías y dominios de trabajo aplicados a sistemas, ciberseguridad, ciberinteligencia, automatización e infraestructura.',
      categories: [
        {
          name: 'Seguridad defensiva',
          items: ['Hardening', 'Blue Team', 'Análisis de vulnerabilidades', 'SOC', 'Nessus', 'Wireshark'],
        },
        {
          name: 'Pentesting y análisis',
          items: ['Nmap', 'Metasploit', 'Maltego', 'Pentesting', 'Reconocimiento', 'Evaluación técnica'],
        },
        {
          name: 'Ciberinteligencia',
          items: ['MISP', 'PICO', 'Análisis de ciberinteligencia', 'Explotación de información'],
        },
        {
          name: 'DevSecOps e infraestructura',
          items: ['Ansible', 'Terraform', 'Packer', 'Docker', 'VMware', 'VirtualBox'],
        },
        {
          name: 'Sistemas y cloud',
          items: ['Linux', 'Debian', 'Ubuntu', 'Shell Scripting', 'AWS', 'Fortigate'],
        },
        {
          name: 'Desarrollo y documentación',
          items: ['Python', 'C', 'Java', 'SQL', 'LaTeX', 'Informes técnicos'],
        },
        {
          name: 'Idiomas',
          items: ['Español', 'Inglés', 'Gallego'],
        },
      ],
    },
    education: {
      id: 'formacion',
      eyebrow: 'Formación',
      title: 'Base académica en ingeniería informática, ciberseguridad y ciberinteligencia.',
      items: [
        {
          title: 'Máster Universitario en Ciberseguridad y Ciberinteligencia',
          institution: 'Universitat Politècnica de València (UPV)',
          period: 'Sept. 2022 - Feb. 2024',
          description:
            'Formación especializada en ciberseguridad y ciberinteligencia, con trabajo final sobre un centro de operaciones de seguridad con despliegue y escalado automatizado.',
        },
        {
          title: 'Grado en Ingeniería Informática',
          institution: 'Universidade da Coruña',
          period: 'Sept. 2016 - Feb. 2022',
          description:
            'Formación universitaria en tecnología de la información, con trabajo final sobre automatización de la gestión de políticas de seguridad de red.',
        },
      ],
    },
    contact: {
      id: 'contacto',
      eyebrow: 'Contacto',
      title: 'Conecta conmigo en LinkedIn.',
      text: '',
      emailLabel: '',
      socialLabel: 'Perfil profesional',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aser-fole-de-navia-de-la-cruz/' },
      ],
    },
    footer: {
      text: 'Aser Fole de Navia de la Cruz · Ciberseguridad, ciberinteligencia e infraestructura',
      backToTop: 'Volver arriba',
    },
  },

  en: {
    meta: {
      title: 'Aser Fole de Navia de la Cruz - Cybersecurity and Cyber Intelligence',
      description:
        'Professional portfolio of Aser Fole de Navia de la Cruz, computer engineer specialized in cybersecurity, cyber intelligence, DevSecOps and infrastructure.',
    },
    navigation: {
      ariaLabel: 'Main navigation',
      languageLabel: 'Change language',
      links: [
        { label: 'Profile', href: '#profile' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Stack', href: '#stack' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    profile: {
      name: 'Aser Fole de Navia de la Cruz',
      role: 'Computer Engineer at ISDEFE | Specialized in Cybersecurity and Cyber Intelligence',
      email: '',
      location: 'Madrid, Spain · Galicia',
      availability: 'Currently based in Madrid, with professional ties and availability in Galicia',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aser-fole-de-navia-de-la-cruz/?locale=en-US' },
      ],
    },
    hero: {
      eyebrow: 'Cybersecurity · Cyber Intelligence · DevSecOps · Infrastructure',
      title: 'Cybersecurity engineering for demanding technical environments.',
      value:
        'Computer engineer specialized in cybersecurity and cyber intelligence, with experience in system hardening, infrastructure automation, network design, service deployment and intelligence analysis applied to defense.',
      primaryCta: { label: 'View projects', href: '#projects' },
      secondaryCta: { label: 'Contact on LinkedIn', href: '#contact' },
      image: {
        src: heroImage,
        alt: 'Dark technology background image',
        credit: '',
        creditUrl: '',
      },
    },
    about: {
      id: 'profile',
      eyebrow: 'About',
      title: 'An engineering profile focused on defense, automation and secure operations.',
      body: [
        'I am currently working at ISDEFE as a computer engineer specialized in cybersecurity and cyber intelligence. My work focuses on strengthening systems, automating virtual infrastructure, deploying and configuring services, designing networks and applying cyber intelligence to support defense decisions.',
        'I am currently based in Madrid and can also collaborate remotely with distributed teams and projects. I am interested in building secure, reproducible and well-documented solutions that combine defensive thinking, automation and analytical capability.',
      ],
      strengthsTitle: 'Technical strengths',
      strengths: [
        'Computer system hardening',
        'Virtual infrastructure automation',
        'Cyber intelligence analysis and exploitation',
        'Network design and service deployment',
        'DevSecOps with Ansible, Terraform and Packer',
        'Pentesting and vulnerability analysis',
      ],
      principles: [
        { label: 'Defense', text: 'Security applied to systems, networks and infrastructure.' },
        { label: 'Automation', text: 'Reproducible processes for more rigorous operations.' },
        { label: 'Cyber intelligence', text: 'Applied analysis to support security and defense decisions.' },
      ],
    },
    experience: {
      id: 'experience',
      eyebrow: 'Experience',
      title: 'Experience in cybersecurity, infrastructure and automation.',
      intro:
        'Background focused on cybersecurity, firewall administration, DevSecOps, network design, infrastructure deployment, service deployment and cyber intelligence.',
      items: [
        {
          role: 'Cybersecurity Engineer',
          company: 'ISDEFE · Full-time · Madrid',
          period: 'Sep. 2023 - Present',
          context:
            'On-site work in cybersecurity, cyber intelligence, virtual infrastructure and secure technical operations.',
          highlights: [
            'Hardening of computer systems and improvement of the defensive posture of technical environments.',
            'Administration and automation of the organization’s virtual infrastructure with a DevSecOps approach.',
            'Analysis and exploitation of cyber intelligence to support security processes.',
            'Network design, deployment and configuration of servers and services.',
          ],
          tags: ['Cybersecurity', 'Cyber Intelligence', 'DevSecOps', 'Hardening', 'Networking'],
        },
        {
          role: 'Internship Contract',
          company: 'Everis · Remote · A Coruña, Galicia',
          period: 'Sep. 2020 - Aug. 2021',
          context:
            'Professional internship covering web application development and Next-Generation Firewall administration responsibilities.',
          highlights: [
            'Web application development from September 2020 to April 2021.',
            'Next-Generation Firewall administration from May to August 2021.',
            'Work with Fortigate, network security policies, development fundamentals and databases.',
          ],
          tags: ['Fortigate', 'NGFW', 'Web development', 'Java', 'SQL'],
        },
      ],
    },
    projects: {
      id: 'projects',
      eyebrow: 'Featured projects',
      title: 'Projects and exercises applied to security, automation and operations.',
      intro:
        'Work and exercises focused on network security, cybersecurity operations and defense in highly demanding scenarios.',
      items: [
        {
          name: 'Final Degree Project - Automation of Network Security Policy Management',
          description:
            'Final degree project focused on automating network security policy management, with an emphasis on operational efficiency and technical control.',
          impact:
            'Connects network administration, perimeter security and automation to reduce manual work in policy management.',
          technologies: ['Automation', 'Network security', 'Security policies', 'NGFW'],
          link: '#',
        },
        {
          name: 'Locked Shields 2025',
          kicker: 'exercise',
          description:
            'Participation in Locked Shields, the world’s largest and most complex international live-fire cyber defence exercise.',
          impact:
            'Experience in a demanding live-fire environment, with realistic defense, technical coordination and incident response scenarios.',
          technologies: ['Locked Shields', 'Cyber Defence', 'Blue Team', 'Incident Response', 'Live-fire'],
          link: '#',
        },
        {
          name: 'Master’s Thesis - Security Operations Center with Automated Deployment and Escalation Capabilities',
          description:
            'Master’s thesis centered on a security operations center with automated deployment and escalation capabilities.',
          impact:
            'Applies automation and reproducible infrastructure principles to a security operations context.',
          technologies: ['SOC', 'Automation', 'DevSecOps', 'Infrastructure'],
          link: '#',
        },
      ],
    },
    skills: {
      id: 'stack',
      eyebrow: 'Stack and skills',
      title: 'Tools and capabilities for building, defending and automating secure environments.',
      intro:
        'A focused selection of technologies and working domains applied to systems, cybersecurity, cyber intelligence, automation and infrastructure.',
      categories: [
        {
          name: 'Defensive security',
          items: ['Hardening', 'Blue Team', 'Vulnerability analysis', 'SOC', 'Nessus', 'Wireshark'],
        },
        {
          name: 'Pentesting and analysis',
          items: ['Nmap', 'Metasploit', 'Maltego', 'Pentesting', 'Reconnaissance', 'Technical assessment'],
        },
        {
          name: 'Cyber intelligence',
          items: ['MISP', 'PICO', 'Cyber intelligence analysis', 'Information exploitation'],
        },
        {
          name: 'DevSecOps and infrastructure',
          items: ['Ansible', 'Terraform', 'Packer', 'Docker', 'VMware', 'VirtualBox'],
        },
        {
          name: 'Systems and cloud',
          items: ['Linux', 'Debian', 'Ubuntu', 'Shell Scripting', 'AWS', 'Fortigate'],
        },
        {
          name: 'Development and documentation',
          items: ['Python', 'C', 'Java', 'SQL', 'LaTeX', 'Technical reporting'],
        },
        {
          name: 'Languages',
          items: ['Spanish', 'English', 'Galician'],
        },
      ],
    },
    education: {
      id: 'education',
      eyebrow: 'Education',
      title: 'Academic background in computer engineering, cybersecurity and cyber intelligence.',
      items: [
        {
          title: 'Master’s Degree in Cybersecurity and Cyber Intelligence',
          institution: 'Universitat Politècnica de València (UPV)',
          period: 'Sep. 2022 - Feb. 2024',
          description:
            'Specialized training in cybersecurity and cyber intelligence, with a master’s thesis on a security operations center with automated deployment and escalation capabilities.',
        },
        {
          title: 'Bachelor’s Degree in Computer Engineering',
          institution: 'Universidade da Coruña',
          period: 'Sep. 2016 - Feb. 2022',
          description:
            'University education in information technology, with a final degree project on automating network security policy management.',
        },
      ],
    },
    contact: {
      id: 'contact',
      eyebrow: 'Contact',
      title: 'Connect with me on LinkedIn.',
      text: '',
      emailLabel: '',
      socialLabel: 'Professional profile',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aser-fole-de-navia-de-la-cruz/?locale=en-US' },
      ],
    },
    footer: {
      text: 'Aser Fole de Navia de la Cruz · Cybersecurity, cyber intelligence and infrastructure',
      backToTop: 'Back to top',
    },
  },
};
