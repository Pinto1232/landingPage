// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Innovative Solutions for the Petroleum Industry",
    heroText:
      "Providing cutting-edge technologies and services to optimize operations, increase efficiency, and ensure safety in petroleum extraction and processing.",
    heroButton1: "Our Services",
    heroButton2: "Get in Touch",

    // Services Section (Index)
    servicesTitle: "Our Specialized Services",
    servicesSubtitle:
      "We provide comprehensive solutions tailored to the unique challenges of the petroleum industry, delivering excellence at every step of the process.",

    // Service Cards
    drillingTitle: "Drilling Operations",
    drillingText:
      "State-of-the-art drilling technologies and expert personnel to ensure efficient and safe extraction operations in any environment.",
    drillingDetails: "Our drilling operations team utilizes the latest technology and proven methodologies to maximize extraction efficiency while maintaining the highest safety standards. We offer onshore and offshore drilling services with expertise in challenging geological conditions.",
    drillingBenefits: "✓ Advanced drilling technology ✓ Expert personnel ✓ Safety-first approach ✓ Cost optimization",

    maintenanceTitle: "Equipment Maintenance",
    maintenanceText:
      "Comprehensive maintenance services to maximize equipment lifespan, prevent downtime, and optimize operational efficiency.",
    maintenanceDetails: "We provide preventive and corrective maintenance services for all types of petroleum equipment. Our technicians are certified and trained to handle complex machinery, ensuring minimal downtime and maximum operational efficiency.",
    maintenanceBenefits: "✓ Preventive maintenance ✓ 24/7 emergency support ✓ Certified technicians ✓ Reduced downtime",

    environmentalTitle: "Environmental Compliance",
    environmentalText:
      "Expert guidance and solutions to ensure all operations meet or exceed environmental regulations while maintaining productivity.",
    environmentalDetails: "Our environmental compliance team ensures your operations meet all local and international regulations. We provide comprehensive environmental assessments, monitoring, and reporting to support your sustainability goals.",
    environmentalBenefits: "✓ Regulatory compliance ✓ Sustainability consulting ✓ Environmental monitoring ✓ Carbon reduction strategies",

    safetyTitle: "Safety Training",
    safetyText: "Comprehensive safety training programs designed to protect your workforce and ensure compliance with industry standards.",
    safetyDetails: "Our award-winning safety training programs cover all aspects of petroleum industry operations. We provide customized training for your specific operational needs and maintain certifications for all participants.",
    safetyBenefits: "✓ Certified instructors ✓ Customized programs ✓ Ongoing support ✓ Industry-recognized certifications",

    consultingTitle: "Consulting Services",
    consultingText: "Strategic consulting to optimize your operations, improve efficiency, and drive business growth.",
    consultingDetails: "Our experienced consultants work with your team to identify opportunities for improvement, implement best practices, and develop strategies for long-term success in the petroleum industry.",
    consultingBenefits: "✓ Strategic planning ✓ Process optimization ✓ Technology assessment ✓ Business development",

    learnMore: "Learn More",

    // About Section (Index)
    aboutTitle: "25 Years of Excellence in Petroleum Services",
    aboutText1:
      "Since our founding in 2000, GABOIL ENERGY has been at the forefront of innovation in the petroleum industry. Our team of highly skilled engineers, technicians, and industry experts work tirelessly to provide solutions that drive efficiency and sustainability.",
    aboutText2:
      "We pride ourselves on our commitment to safety, environmental responsibility, and technological advancement. Our global presence enables us to serve clients across multiple continents, providing localized expertise with global standards.",
    globalClients: "Global Clients",
    projectsCompleted: "Projects Completed",
    industryExperts: "Industry Experts",

    // Testimonials Section
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle:
      "Hear from our satisfied clients about their experience working with GABOIL ENERGY",
    testimonial1:
      "GABOIL ENERGY's expertise in drilling operations has significantly improved our efficiency and safety standards. Their team's dedication to excellence is unmatched.",
    testimonial1Role: "Operations Manager, Global Oil Co.",
    testimonial2:
      "The environmental compliance solutions provided by GABOIL ENERGY have helped us maintain our sustainability goals while optimizing our operations. Highly recommended!",
    testimonial2Role: "Environmental Director, EcoPetrol",
    testimonial3:
      "Their equipment maintenance services have reduced our downtime by 40% and significantly improved our operational efficiency. A true partner in our success.",
    testimonial3Role: "Technical Director, PetroMax",

    // Partners Section
    partnersTitle: "Our Trusted Partners",
    partnersSubtitle:
      "We work with leading companies in the petroleum industry",

    // News Section
    newsTitle: "Latest News & Updates",
    newsSubtitle:
      "Stay informed about our latest achievements and industry developments",
    news1Title: "New Environmental Compliance Initiative",
    news1Text:
      "GABOIL ENERGY launches innovative program to help clients achieve carbon neutrality goals...",
    news2Title: "Advanced Drilling Technology Partnership",
    news2Text:
      "We announce strategic partnership with leading technology provider to enhance drilling operations...",
    news3Title: "Safety Training Program Expansion",
    news3Text:
      "Our award-winning safety training program expands to three new international locations...",
    readMore: "Read More",

    // CTA Section
    ctaTitle: "Ready to Transform Your Operations?",
    ctaText:
      "Contact us today to discuss how our services can benefit your organization",
    ctaButton1: "Get in Touch",
    ctaButton2: "Explore Services",

    // Services Page
    servicesPageTitle: "Our Services",
    servicesPageSubtitle: "Comprehensive solutions for the petroleum industry's most challenging needs",
    servicesPageHeader: "Our Services",
    servicesPageDescription: "We provide comprehensive solutions tailored to the unique challenges of the petroleum industry.",
    servicesOverviewText: "At GABOIL ENERGY, we understand the complexities of the petroleum industry. Our comprehensive service portfolio is designed to address every aspect of your operations, from exploration and drilling to maintenance and compliance.",
    serviceHighlights: "Service Highlights",
    serviceHighlightsDesc: "Quick overview of our core service offerings",
    keyBenefits: "Key Benefits",

    // Drilling Benefits
    drillingBenefit1: "Advanced drilling technology and equipment",
    drillingBenefit2: "Expert personnel with decades of experience",
    drillingBenefit3: "Safety-first approach to all operations",
    drillingBenefit4: "Cost optimization and efficiency",
    drillingBenefit5: "Onshore and offshore capabilities",

    // Maintenance Benefits
    maintenanceBenefit1: "Preventive and corrective maintenance",
    maintenanceBenefit2: "24/7 emergency support services",
    maintenanceBenefit3: "Certified and trained technicians",
    maintenanceBenefit4: "Reduced downtime and increased productivity",
    maintenanceBenefit5: "Comprehensive equipment diagnostics",

    // Environmental Benefits
    environmentalBenefit1: "Full regulatory compliance assurance",
    environmentalBenefit2: "Sustainability consulting and planning",
    environmentalBenefit3: "Environmental monitoring and reporting",
    environmentalBenefit4: "Carbon reduction strategies",
    environmentalBenefit5: "Local and international expertise",

    // Safety Benefits
    safetyBenefit1: "Certified and experienced instructors",
    safetyBenefit2: "Customized training programs",
    safetyBenefit3: "Ongoing support and refresher courses",
    safetyBenefit4: "Industry-recognized certifications",
    safetyBenefit5: "Comprehensive safety protocols",

    // Consulting Benefits
    consultingBenefit1: "Strategic planning and development",
    consultingBenefit2: "Process optimization and efficiency",
    consultingBenefit3: "Technology assessment and implementation",
    consultingBenefit4: "Business development strategies",
    consultingBenefit5: "Industry best practices guidance",

    // Well Integrity & Inspection
    wellIntegrityTitle: "Well Integrity & Inspection",
    wellIntegrityText: "Advanced well integrity assessment and inspection services to ensure safe and efficient well operations throughout their lifecycle.",
    wellIntegrityDetails: "Our well integrity and inspection services provide comprehensive assessment and monitoring of well conditions to ensure operational safety and regulatory compliance. We utilize advanced diagnostic technologies and experienced personnel to identify potential issues before they become critical problems.",
    wellIntegrityBenefit1: "Advanced diagnostic and inspection technology",
    wellIntegrityBenefit2: "Comprehensive well integrity assessments",
    wellIntegrityBenefit3: "Preventive maintenance and risk mitigation",
    wellIntegrityBenefit4: "Regulatory compliance and documentation",
    wellIntegrityBenefit5: "24/7 emergency response capabilities",

    // About Page
    aboutPageTitle: "About Us",
    aboutPageSubtitle: "25 years of excellence in petroleum industry services",
    aboutPageHeader: "About Us",
    ourStory: "Our Story",
    ourStoryText1: "Founded in 2000, GABOIL ENERGY has grown from a small local service provider to a global leader in petroleum industry solutions. Our journey began with a simple mission: to provide reliable, efficient, and safe services to the oil and gas sector.",
    ourStoryText2: "Over the years, we've expanded our expertise and capabilities, always maintaining our commitment to quality and innovation. Today, we serve clients across multiple continents, helping them navigate the complex challenges of the modern petroleum industry.",
    missionValues: "Our Mission & Values",
    missionValuesSubtitle: "Guiding principles that drive our success",
    innovation: "Innovation",
    innovationDesc: "Continuously developing and implementing cutting-edge solutions to meet industry challenges.",
    safety: "Safety",
    safetyDesc: "Maintaining the highest safety standards in all our operations and services.",
    sustainability: "Sustainability",
    sustainabilityDesc: "Promoting environmentally responsible practices throughout our operations.",
    partnership: "Partnership",
    partnershipDesc: "Building long-term relationships based on trust, reliability, and mutual success.",
    leadershipTeam: "Our Leadership Team",
    leadershipTeamSubtitle: "Experienced professionals guiding our company's success",
    ceoTitle: "Chief Executive Officer",
    ceoDesc: "With over 30 years of experience in the petroleum industry, John leads our company with vision and expertise.",
    ctoTitle: "Chief Technology Officer",
    ctoDesc: "Sarah drives our technological innovation and ensures we stay at the forefront of industry advancements.",
    cooTitle: "Chief Operations Officer",
    cooDesc: "Michael oversees our global operations, ensuring efficiency and quality across all services.",
    achievements: "Our Achievements",
    achievementsSubtitle: "Milestones that demonstrate our commitment to excellence",
    globalClientsAch: "Global Clients",
    globalClientsDesc: "We're proud to serve over 250 clients across 30+ countries, providing customized petroleum industry solutions to businesses of all sizes - from local operations to multinational corporations.",
    projectsCompletedAch: "Projects Completed",
    projectsCompletedDesc: "Our team has successfully delivered over 1,500 projects with 98% client satisfaction rate. Each project is managed with meticulous attention to quality, safety, and environmental standards.",
    industryExpertsAch: "Industry Experts",
    industryExpertsDesc: "Our diverse team includes 120+ certified professionals from various disciplines including petroleum engineering, environmental science, and project management, with an average industry experience of 15+ years.",
    yearsExperience: "Years of Experience",
    yearsExperienceDesc: "For over two decades, we've been at the forefront of innovation in the petroleum industry, consistently developing new solutions to meet emerging challenges and setting industry standards for excellence.",

    // Contact Page
    contactPageTitle: "Contact Us",
    contactPageSubtitle: "Get in touch with our team of experts",
    contactPageHeader: "Contact Us",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    officeHours: "Office Hours",
    businessHours: "Business Hours",
    mainOffice: "Main Office",
    support: "Support",
    generalInquiries: "General Inquiries",
    visitUsDays: "Monday to Friday",
    visitUsTime: "8:00 AM - 6:00 PM",
    sendMessage: "Send Us a Message",
    sendMessageDesc: "Fill out the form below and our team will get back to you within 24 hours.",
    yourName: "Your Name",
    yourEmail: "Your Email",
    phoneNumber: "Phone Number",
    subject: "Subject",
    serviceOfInterest: "Service of Interest",
    selectService: "Select a Service",
    drillingOps: "Drilling Operations",
    equipmentMaint: "Equipment Maintenance",
    envCompliance: "Environmental Compliance",
    safetyTraining: "Safety Training",
    technicalConsulting: "Technical Consulting",
    other: "Other",
    yourMessage: "Your Message",
    sendMessageBtn: "Send Message",
    messagePlaceholder: "Provide details about your inquiry...",

    // Footer
    footerDesc: "Leading provider of innovative solutions for the petroleum industry, committed to excellence, safety, and sustainability.",
    quickLinks: "Quick Links",
    footerServices: "Services",
    careers: "Careers",
    footerContact: "Contact Info",
    copyright: "© 2025 GABOIL ENERGY. All Rights Reserved.",

    // Footer - Company Info
    footerCompanyName: "GABOIL ENERGY",
    footerHome: "Home",
    footerAboutUs: "About Us",

    // Footer - Services Links
    footerDrillingOps: "Drilling Operations",
    footerEquipmentMaint: "Equipment Maintenance",
    footerEnvCompliance: "Environmental Compliance",
    footerSafetyTraining: "Safety Training",
    footerConsulting: "Consulting Services",
    footerWellIntegrity: "Well Integrity & Inspection",

    // Footer - Contact Info
    footerAddress: "Luanda - Angola",
    footerPhone: "+244 222 123 456",
    footerEmail: "info@gaboilenergy.com",
    footerHours: "Mon-Fri: 8:00 AM - 6:00 PM",
  },
  pt: {
    // Navigation
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",

    // Hero Section
    heroTitle: "Soluções Inovadoras para a Indústria Petrolífera",
    heroText:
      "Fornecendo tecnologias e serviços de ponta para otimizar operações, aumentar a eficiência e garantir a segurança na extração e processamento de petróleo.",
    heroButton1: "Nossos Serviços",
    heroButton2: "Entre em Contato",

    // Services Section (Index)
    servicesTitle: "Nossos Serviços Especializados",
    servicesSubtitle:
      "Fornecemos soluções abrangentes adaptadas aos desafios únicos da indústria petrolífera, entregando excelência em cada etapa do processo.",

    // Service Cards
    drillingTitle: "Operações de Perfuração",
    drillingText:
      "Tecnologias de perfuração de última geração e pessoal especializado para garantir operações de extração eficientes e seguras em qualquer ambiente.",
    drillingDetails: "Nossa equipe de operações de perfuração utiliza a tecnologia mais recente e metodologias comprovadas para maximizar a eficiência de extração, mantendo os mais altos padrões de segurança. Oferecemos serviços de perfuração em terra e no mar com expertise em condições geológicas desafiadoras.",
    drillingBenefits: "✓ Tecnologia de perfuração avançada ✓ Pessoal especializado ✓ Abordagem focada em segurança ✓ Otimização de custos",

    maintenanceTitle: "Manutenção de Equipamentos",
    maintenanceText:
      "Serviços abrangentes de manutenção para maximizar a vida útil dos equipamentos, prevenir paralisações e otimizar a eficiência operacional.",
    maintenanceDetails: "Fornecemos serviços de manutenção preventiva e corretiva para todos os tipos de equipamentos petrolíferos. Nossos técnicos são certificados e treinados para lidar com máquinas complexas, garantindo tempo de inatividade mínimo e eficiência operacional máxima.",
    maintenanceBenefits: "✓ Manutenção preventiva ✓ Suporte de emergência 24/7 ✓ Técnicos certificados ✓ Redução de tempo de inatividade",

    environmentalTitle: "Conformidade Ambiental",
    environmentalText:
      "Orientação especializada e soluções para garantir que todas as operações atendam ou excedam as regulamentações ambientais, mantendo a produtividade.",
    environmentalDetails: "Nossa equipe de conformidade ambiental garante que suas operações atendam a todas as regulamentações locais e internacionais. Fornecemos avaliações ambientais abrangentes, monitoramento e relatórios para apoiar seus objetivos de sustentabilidade.",
    environmentalBenefits: "✓ Conformidade regulatória ✓ Consultoria de sustentabilidade ✓ Monitoramento ambiental ✓ Estratégias de redução de carbono",

    safetyTitle: "Treinamento de Segurança",
    safetyText: "Programas abrangentes de treinamento de segurança projetados para proteger sua força de trabalho e garantir conformidade com os padrões do setor.",
    safetyDetails: "Nossos programas de treinamento de segurança premiados cobrem todos os aspectos das operações da indústria petrolífera. Fornecemos treinamento personalizado para suas necessidades operacionais específicas e mantemos certificações para todos os participantes.",
    safetyBenefits: "✓ Instrutores certificados ✓ Programas personalizados ✓ Suporte contínuo ✓ Certificações reconhecidas pelo setor",

    consultingTitle: "Serviços de Consultoria",
    consultingText: "Consultoria estratégica para otimizar suas operações, melhorar a eficiência e impulsionar o crescimento dos negócios.",
    consultingDetails: "Nossos consultores experientes trabalham com sua equipe para identificar oportunidades de melhoria, implementar melhores práticas e desenvolver estratégias para o sucesso a longo prazo na indústria petrolífera.",
    consultingBenefits: "✓ Planejamento estratégico ✓ Otimização de processos ✓ Avaliação de tecnologia ✓ Desenvolvimento de negócios",

    learnMore: "Saiba Mais",

    // About Section (Index)
    aboutTitle: "25 Anos de Excelência em Serviços Petrolíferos",
    aboutText1:
      "Desde nossa fundação em 2000, a GABOIL ENERGY tem estado na vanguarda da inovação na indústria petrolífera. Nossa equipe de engenheiros, técnicos e especialistas altamente qualificados trabalha incansavelmente para fornecer soluções que impulsionam a eficiência e a sustentabilidade.",
    aboutText2:
      "Temos orgulho de nosso compromisso com a segurança, responsabilidade ambiental e avanço tecnológico. Nossa presença global nos permite atender clientes em vários continentes, fornecendo expertise local com padrões globais.",
    globalClients: "Clientes Globais",
    projectsCompleted: "Projetos Concluídos",
    industryExperts: "Especialistas do Setor",

    // Testimonials Section
    testimonialsTitle: "O Que Nossos Clientes Dizem",
    testimonialsSubtitle:
      "Ouça nossos clientes satisfeitos sobre sua experiência com a GABOIL ENERGY",
    testimonial1:
      "A expertise da GABOIL ENERGY em operações de perfuração melhorou significativamente nossa eficiência e padrões de segurança. A dedicação de sua equipe à excelência é incomparável.",
    testimonial1Role: "Gerente de Operações, Global Oil Co.",
    testimonial2:
      "As soluções de conformidade ambiental fornecidas pela GABOIL ENERGY nos ajudaram a manter nossas metas de sustentabilidade enquanto otimizamos nossas operações. Altamente recomendado!",
    testimonial2Role: "Diretor Ambiental, EcoPetrol",
    testimonial3:
      "Seus serviços de manutenção de equipamentos reduziram nosso tempo de inatividade em 40% e melhoraram significativamente nossa eficiência operacional. Um verdadeiro parceiro em nosso sucesso.",
    testimonial3Role: "Diretor Técnico, PetroMax",

    // Partners Section
    partnersTitle: "Nossos Parceiros de Confiança",
    partnersSubtitle:
      "Trabalhamos com empresas líderes na indústria petrolífera",

    // News Section
    newsTitle: "Últimas Notícias e Atualizações",
    newsSubtitle:
      "Mantenha-se informado sobre nossas últimas conquistas e desenvolvimentos do setor",
    news1Title: "Nova Iniciativa de Conformidade Ambiental",
    news1Text:
      "GABOIL ENERGY lança programa inovador para ajudar clientes a alcançar metas de neutralidade de carbono...",
    news2Title: "Parceria em Tecnologia Avançada de Perfuração",
    news2Text:
      "Anunciamos parceria estratégica com fornecedor líder de tecnologia para aprimorar operações de perfuração...",
    news3Title: "Expansão do Programa de Treinamento de Segurança",
    news3Text:
      "Nosso premiado programa de treinamento de segurança se expande para três novas localidades internacionais...",
    readMore: "Leia Mais",

    // CTA Section
    ctaTitle: "Pronto para Transformar Suas Operações?",
    ctaText:
      "Entre em contato hoje para discutir como nossos serviços podem beneficiar sua organização",
    ctaButton1: "Entre em Contato",
    ctaButton2: "Explore os Serviços",

    // Services Page
    servicesPageTitle: "Nossos Serviços",
    servicesPageSubtitle: "Soluções abrangentes para os desafios mais complexos da indústria petrolífera",
    servicesPageHeader: "Nossos Serviços",
    servicesPageDescription: "Fornecemos soluções abrangentes adaptadas aos desafios únicos da indústria petrolífera.",
    servicesOverviewText: "Na GABOIL ENERGY, entendemos as complexidades da indústria petrolífera. Nosso portfólio abrangente de serviços foi projetado para abordar todos os aspectos de suas operações, desde exploração e perfuração até manutenção e conformidade.",
    serviceHighlights: "Destaques de Serviços",
    serviceHighlightsDesc: "Visão geral rápida de nossas ofertas de serviços principais",
    keyBenefits: "Benefícios Principais",

    // Drilling Benefits
    drillingBenefit1: "Tecnologia de perfuração avançada e equipamentos",
    drillingBenefit2: "Pessoal especializado com décadas de experiência",
    drillingBenefit3: "Abordagem focada em segurança em todas as operações",
    drillingBenefit4: "Otimização de custos e eficiência",
    drillingBenefit5: "Capacidades em terra e no mar",

    // Maintenance Benefits
    maintenanceBenefit1: "Manutenção preventiva e corretiva",
    maintenanceBenefit2: "Serviços de suporte de emergência 24/7",
    maintenanceBenefit3: "Técnicos certificados e treinados",
    maintenanceBenefit4: "Redução de tempo de inatividade e aumento de produtividade",
    maintenanceBenefit5: "Diagnóstico abrangente de equipamentos",

    // Environmental Benefits
    environmentalBenefit1: "Garantia de conformidade regulatória completa",
    environmentalBenefit2: "Consultoria e planejamento de sustentabilidade",
    environmentalBenefit3: "Monitoramento e relatórios ambientais",
    environmentalBenefit4: "Estratégias de redução de carbono",
    environmentalBenefit5: "Expertise local e internacional",

    // Safety Benefits
    safetyBenefit1: "Instrutores certificados e experientes",
    safetyBenefit2: "Programas de treinamento personalizados",
    safetyBenefit3: "Suporte contínuo e cursos de reciclagem",
    safetyBenefit4: "Certificações reconhecidas pelo setor",
    safetyBenefit5: "Protocolos de segurança abrangentes",

    // Consulting Benefits
    consultingBenefit1: "Planejamento e desenvolvimento estratégico",
    consultingBenefit2: "Otimização de processos e eficiência",
    consultingBenefit3: "Avaliação e implementação de tecnologia",
    consultingBenefit4: "Estratégias de desenvolvimento de negócios",
    consultingBenefit5: "Orientação de melhores práticas do setor",

    // Well Integrity & Inspection
    wellIntegrityTitle: "Integridade de Poços e Inspeção",
    wellIntegrityText: "Serviços avançados de avaliação e inspeção de integridade de poços para garantir operações seguras e eficientes ao longo do ciclo de vida do poço.",
    wellIntegrityDetails: "Nossos serviços de integridade de poços e inspeção fornecem avaliação abrangente e monitoramento das condições do poço para garantir segurança operacional e conformidade regulatória. Utilizamos tecnologias de diagnóstico avançadas e pessoal experiente para identificar possíveis problemas antes que se tornem críticos.",
    wellIntegrityBenefit1: "Tecnologia avançada de diagnóstico e inspeção",
    wellIntegrityBenefit2: "Avaliações abrangentes de integridade de poços",
    wellIntegrityBenefit3: "Manutenção preventiva e mitigação de riscos",
    wellIntegrityBenefit4: "Conformidade regulatória e documentação",
    wellIntegrityBenefit5: "Capacidades de resposta de emergência 24/7",

    // About Page
    aboutPageTitle: "Sobre Nós",
    aboutPageSubtitle: "25 anos de excelência em serviços da indústria petrolífera",
    aboutPageHeader: "Sobre Nós",
    ourStory: "Nossa História",
    ourStoryText1: "Fundada em 2000, a GABOIL ENERGY cresceu de um pequeno provedor de serviços local para uma líder global em soluções da indústria petrolífera. Nossa jornada começou com uma missão simples: fornecer serviços confiáveis, eficientes e seguros ao setor de petróleo e gás.",
    ourStoryText2: "Ao longo dos anos, expandimos nossa expertise e capacidades, sempre mantendo nosso compromisso com qualidade e inovação. Hoje, servimos clientes em vários continentes, ajudando-os a navegar pelos desafios complexos da indústria petrolífera moderna.",
    missionValues: "Nossa Missão e Valores",
    missionValuesSubtitle: "Princípios orientadores que impulsionam nosso sucesso",
    innovation: "Inovação",
    innovationDesc: "Desenvolvendo e implementando continuamente soluções de ponta para atender aos desafios do setor.",
    safety: "Segurança",
    safetyDesc: "Mantendo os mais altos padrões de segurança em todas as nossas operações e serviços.",
    sustainability: "Sustentabilidade",
    sustainabilityDesc: "Promovendo práticas ambientalmente responsáveis em todas as nossas operações.",
    partnership: "Parceria",
    partnershipDesc: "Construindo relacionamentos de longo prazo baseados em confiança, confiabilidade e sucesso mútuo.",
    leadershipTeam: "Nossa Equipe de Liderança",
    leadershipTeamSubtitle: "Profissionais experientes guiando o sucesso de nossa empresa",
    ceoTitle: "Diretor Executivo",
    ceoDesc: "Com mais de 30 anos de experiência na indústria petrolífera, John lidera nossa empresa com visão e expertise.",
    ctoTitle: "Diretor de Tecnologia",
    ctoDesc: "Sarah impulsiona nossa inovação tecnológica e garante que permaneçamos na vanguarda dos avanços do setor.",
    cooTitle: "Diretor de Operações",
    cooDesc: "Michael supervisiona nossas operações globais, garantindo eficiência e qualidade em todos os serviços.",
    achievements: "Nossas Realizações",
    achievementsSubtitle: "Marcos que demonstram nosso compromisso com a excelência",
    globalClientsAch: "Clientes Globais",
    globalClientsDesc: "Temos orgulho de servir mais de 250 clientes em 30+ países, fornecendo soluções personalizadas da indústria petrolífera para empresas de todos os tamanhos - desde operações locais até corporações multinacionais.",
    projectsCompletedAch: "Projetos Concluídos",
    projectsCompletedDesc: "Nossa equipe entregou com sucesso mais de 1.500 projetos com taxa de satisfação de 98% dos clientes. Cada projeto é gerenciado com atenção meticulosa à qualidade, segurança e padrões ambientais.",
    industryExpertsAch: "Especialistas do Setor",
    industryExpertsDesc: "Nossa equipe diversa inclui 120+ profissionais certificados de várias disciplinas, incluindo engenharia de petróleo, ciência ambiental e gerenciamento de projetos, com experiência média no setor de 15+ anos.",
    yearsExperience: "Anos de Experiência",
    yearsExperienceDesc: "Por mais de duas décadas, estamos na vanguarda da inovação na indústria petrolífera, desenvolvendo continuamente novas soluções para atender aos desafios emergentes e estabelecendo padrões de excelência do setor.",

    // Contact Page
    contactPageTitle: "Entre em Contato",
    contactPageSubtitle: "Conecte-se com nossa equipe de especialistas",
    contactPageHeader: "Entre em Contato",
    visitUs: "Visite-nos",
    callUs: "Ligue para Nós",
    emailUs: "Envie um Email",
    officeHours: "Horário de Funcionamento",
    businessHours: "Horário Comercial",
    mainOffice: "Escritório Principal",
    support: "Suporte",
    generalInquiries: "Consultas Gerais",
    visitUsDays: "Segunda a Sexta",
    visitUsTime: "8:00 AM - 6:00 PM",
    sendMessage: "Envie-nos uma Mensagem",
    sendMessageDesc: "Preencha o formulário abaixo e nossa equipe entrará em contato em 24 horas.",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    phoneNumber: "Número de Telefone",
    subject: "Assunto",
    serviceOfInterest: "Serviço de Interesse",
    selectService: "Selecione um Serviço",
    drillingOps: "Operações de Perfuração",
    equipmentMaint: "Manutenção de Equipamentos",
    envCompliance: "Conformidade Ambiental",
    safetyTraining: "Treinamento de Segurança",
    technicalConsulting: "Consultoria Técnica",
    other: "Outro",
    yourMessage: "Sua Mensagem",
    sendMessageBtn: "Enviar Mensagem",
    messagePlaceholder: "Forneça detalhes sobre sua consulta...",

    // Footer
    footerDesc: "Provedor líder de soluções inovadoras para a indústria petrolífera, comprometido com excelência, segurança e sustentabilidade.",
    quickLinks: "Links Rápidos",
    footerServices: "Serviços",
    careers: "Carreiras",
    footerContact: "Informações de Contato",
    copyright: "© 2025 GABOIL ENERGY. Todos os Direitos Reservados.",

    // Footer - Company Info
    footerCompanyName: "GABOIL ENERGY",
    footerHome: "Início",
    footerAboutUs: "Sobre Nós",

    // Footer - Services Links
    footerDrillingOps: "Operações de Perfuração",
    footerEquipmentMaint: "Manutenção de Equipamentos",
    footerEnvCompliance: "Conformidade Ambiental",
    footerSafetyTraining: "Treinamento de Segurança",
    footerConsulting: "Serviços de Consultoria",
    footerWellIntegrity: "Integridade de Poços e Inspeção",

    // Footer - Contact Info
    footerAddress: "Luanda - Angola",
    footerPhone: "+244 222 123 456",
    footerEmail: "info@gaboilenergy.com",
    footerHours: "Seg-Sex: 8:00 AM - 6:00 PM",
  },
};

// Current language
let currentLang = "pt";

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  translatePage();

  // Update the current language display
  const currentLangText = document.querySelector(
    ".current-language .language-text"
  );
  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }

  // Update the flag image
  const currentLangImg = document.querySelector(
    ".current-language .flag-icon"
  );
  if (currentLangImg) {
    if (lang === "en") {
      currentLangImg.src = "images/south-africa.jpg";
      currentLangImg.alt = "English";
    } else if (lang === "pt") {
      currentLangImg.src = "images/Flag_of_Angola.svg.png";
      currentLangImg.alt = "Portuguese";
    }
  }

  // Store the language preference
  localStorage.setItem("preferredLanguage", lang);
}

// Function to translate the page
function translatePage() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

// Initialize translation system
document.addEventListener("DOMContentLoaded", () => {
  // Check for stored language preference
  const storedLang = localStorage.getItem("preferredLanguage");
  if (storedLang) {
    currentLang = storedLang;
  }

  // Set up language switcher event listeners
  const langLinks = document.querySelectorAll(".language-dropdown a");
  langLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Update flag image on initial load
  const currentLangImg = document.querySelector(
    ".current-language .flag-icon"
  );
  if (currentLangImg) {
    if (currentLang === "en") {
      currentLangImg.src = "images/south-africa.jpg";
      currentLangImg.alt = "English";
    } else if (currentLang === "pt") {
      currentLangImg.src = "images/Flag_of_Angola.svg.png";
      currentLangImg.alt = "Portuguese";
    }
  }

  // Update language text display
  const currentLangText = document.querySelector(
    ".current-language .language-text"
  );
  if (currentLangText) {
    currentLangText.textContent = currentLang.toUpperCase();
  }

  // Initial translation
  translatePage();
});
