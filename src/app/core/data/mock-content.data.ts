import { SiteContent } from '../models/content.models';

export const MOCK_CONTENT: SiteContent = {
  showcaseSlides: [
    {
      image: '/assets/images/slideshow_image_1.jpg',
      tag: 'Equipment Training',
      title: 'Fire warden & life safety readiness',
      caption:
        'Practical sessions covering detection, suppression, and safe evacuation leadership.',
    },
    {
      image: '/assets/images/slideshow_image_2.jpg',
      tag: 'Fire Safety',
      title: 'Hands-on firefighting & evacuation drills',
      caption:
        'Live extinguisher training and emergency response simulations for site teams.',
    },
    {
      image: '/assets/images/slideshow_image_3.jpg',
      tag: 'Site HSE',
      title: 'Workplace safety for high-risk environments',
      caption: 'On-site programs for construction, oil & gas, and industrial operations.',
    },
    {
      image: '/assets/images/slideshow_image_4.jpg',
      tag: 'Classrom Training',
      title: 'Close field Training and Demostration',
      caption: 'Equally valuable training and demostration to turn theory into practicle.',
    },
  ],
  showcaseMarquee: [
    "Leadership Safety Training",
    "Project Safety Management",
    "Safety Committee Formation",
    "EHS Legal Awareness",
    "Scaffolding Training & Certification",
    "Work at Height",
    "Rescue Training",
    "Rigging Safety Practices",
    "Confined Space Safety",
    "Gas Tester Certification",
    "Fire & Hole Watcher",
    "Defensive Driving Training"
  ],
  heroStats: [
    { value: '500+', label: 'Professionals trained' },
    { value: '95%', label: 'Client satisfaction' },
    { value: '15+', label: 'Core programs' },
  ],
  services: [
    {
      icon: '🏢',
      title: 'Audits',
      description:
        'Systematic inspection of fire prevention measures, emergency equipment, and evacuation readiness at your workplace.',
    },
    {
      icon: '🔥',
      title: 'Fire Safety Training',
      description:
        'Basic firefighting, fire warden, evacuation marshal, and live drill programs for facilities and project sites.',
    },
    {
      icon: '🏗️',
      title: 'On-Site & Classroom Delivery',
      description:
        'Flexible training at your workplace or our center, led by certified instructors with real industry experience.',
    },
    {
      icon: '⛑️',
      title: 'Emergency Response Programs',
      description:
        'First aid, CPR, AED, and emergency evacuation training to prepare teams for critical incidents.',
    },
    {
      icon: '📋',
      title: 'HSE Consultancy',
      description:
        'Expert guidance on safety compliance, risk assessments, induction programs, and workforce competency planning.',
    },
    {
      icon: '🎓',
      title: 'Certification Preparation',
      description:
        'Structured preparation for internationally recognized HSE and safety qualifications.',
    },
  ],
  upcomingTrainings: [
    {
      title: 'Basic Firefighting & Fire Warden',
      date: '12 Aug 2026',
      time: '08:00 – 16:00',
      venue: 'Client Site / Classroom',
      category: 'Fire Safety',
      seats: '12 seats available',
    },
    {
      title: 'Authorized Gas Tester (AGT)',
      date: '19 Aug 2026',
      time: '08:00 – 17:00',
      venue: 'Perfect EHS Solutions Training Center',
      category: 'HSE Competency',
      seats: '8 seats available',
    },
    {
      title: 'Emergency Response & Evacuation Drill',
      date: '02 Sep 2026',
      time: '09:00 – 15:00',
      venue: 'On-site (Corporate)',
      category: 'Emergency Response',
      seats: 'Registration open',
    },
    {
      title: 'Work at Height & Rescue Awareness',
      date: '16 Sep 2026',
      time: '08:00 – 16:00',
      venue: 'Perfect EHS Solutions Training Center',
      category: 'Site Safety',
      seats: '10 seats available',
    },
  ],
  conductedTrainings: [
    {
      title: 'Basic Firefighting',
      date: '05 Jul 2026',
      venue: 'Al Noor Contracting — Doha',
      category: 'Fire Safety',
      participants: '24 participants',
      image:
        '/assets/images/trainings/Training_1.png',
    },
    {
      title: 'NEBOSH IGC Preparation Batch',
      date: '22 Jun 2026',
      venue: 'GulfTech Manufacturing',
      category: 'HSE Certification',
      participants: '18 participants',
      image:
          '/assets/images/trainings/Training_2.png',
    },
    {
      title: 'First Aid with CPR & AED',
      date: '10 Jun 2026',
      venue: 'National Facilities Group',
      category: 'Emergency Response',
      participants: '16 participants',
      image:
        '/assets/images/trainings/Training_3.png',
    },
    {
      title: 'Fire Warden & Evacuation Marshal',
      date: '28 May 2026',
      venue: 'Qatar Infrastructure Corp',
      category: 'Fire Safety',
      participants: '20 participants',
      image:
        '/assets/images/trainings/Training_4.png',
    },
    {
      title: 'Authorized Gas Tester (AGT)',
      date: '14 May 2026',
      venue: 'Qatar Oil Services',
      category: 'HSE Competency',
      participants: '12 participants',
      image:
        '/assets/images/trainings/Training_5.png',
    },
    {
      title: 'Work at Height Awareness',
      date: '02 May 2026',
      venue: 'Harbor Hospitality Group',
      category: 'Site Safety',
      participants: '15 participants',
      image:
        '/assets/images/trainings/Training_6.png',
    },
  ],
  trainingActions: [
    {
      title: 'Basic Firefighting',
      date: '05 Jul 2026',
      venue: 'Al Noor Contracting — Doha',
      category: 'Fire Safety',
      participants: '24 participants',
      image:
        '/assets/images/trainings/Training_1.png',
    },
    {
      title: 'NEBOSH IGC Preparation Batch',
      date: '22 Jun 2026',
      venue: 'GulfTech Manufacturing',
      category: 'HSE Certification',
      participants: '18 participants',
      image:
        '/assets/images/trainings/Training_2.png',
    },
    {
      title: 'First Aid with CPR & AED',
      date: '10 Jun 2026',
      venue: 'National Facilities Group',
      category: 'Emergency Response',
      participants: '16 participants',
      image:
        '/assets/images/trainings/Training_3.png',
    },
    {
      title: 'Fire Warden & Evacuation Marshal',
      date: '28 May 2026',
      venue: 'Qatar Infrastructure Corp',
      category: 'Fire Safety',
      participants: '20 participants',
      image:
        '/assets/images/trainings/Training_4.png',
    },
    {
      title: 'Authorized Gas Tester (AGT)',
      date: '14 May 2026',
      venue: 'Qatar Oil Services',
      category: 'HSE Competency',
      participants: '12 participants',
      image:
        '/assets/images/trainings/Training_5.png',
    },
    {
      title: 'Work at Height Awareness',
      date: '02 May 2026',
      venue: 'Harbor Hospitality Group',
      category: 'Site Safety',
      participants: '15 participants',
      image:
        '/assets/images/trainings/Training_6.png',
    },
  ],
  trainingSummary: [
    {
      value: '500+',
      label: 'Professionals trained',
      detail: 'Across corporate and contractor teams',
    },
    { value: '15+', label: 'Core programs', detail: 'Fire, HSE, emergency, and site safety' },
    { value: '95%', label: 'Satisfaction rate', detail: 'Based on post-training feedback' },
    {
      value: '8+',
      label: 'Industries served',
      detail: 'Oil & gas, construction, hospitality, and more',
    },
  ],
  programHighlights: [
    {
      title: 'Fire & Life Safety',
      description:
        'Fire warden, basic firefighting, evacuation planning, and emergency response for facilities and project sites.',
      count: '120+ sessions',
    },
    {
      title: 'HSE Competency',
      description:
        'Authorized gas testing, work at height, rigging awareness, and site safety programs aligned to industry needs.',
      count: '80+ sessions',
    },
    {
      title: 'Emergency Medical Response',
      description:
        'First aid, CPR, AED usage, and basic life support for workplace emergency readiness.',
      count: '60+ sessions',
    },
    {
      title: 'Corporate HSE Programs',
      description:
        'Customized on-site training for workforce compliance, induction, and refresher competency development.',
      count: '40+ engagements',
    },
  ],
  clients: [
    { name: 'thyssenkrup', sector: 'Infrastructure', logo: "/assets/clients/thyssenkrupp.png" },
    { name: 'VOLTAS A TATA Enterprise', sector: 'Manufacturing', logo: "/assets/clients/voltas.png" },
    { name: 'Shapoorji Pallonji', sector: 'Construction', logo: "/assets/clients/shapoorji.png" },
    { name: 'JSSL JSW', sector: 'Facility Management', logo: "/assets/clients/jssl.png" },
    { name: 'GHERZI', sector: 'Oil & Gas', logo: "/assets/clients/gherzi.png" },
    { name: 'Pratibha Industries Limited', sector: 'Construction & Hospitality' , logo: "/assets/clients/pratibha.png"},
  ],
  testimonials: [
    {
      quote:
        'Perfect EHS Solutions delivered practical fire safety training for our site teams. The instructors brought real field experience, not just slides.',
      name: 'Ahmed Khalifa',
      role: 'HSE Manager',
      company: 'Qatar Infrastructure Corp',
      rating: 5,
    },
    {
      quote:
        'We enrolled staff for emergency response and first aid programs. Scheduling was flexible and the delivery was highly professional.',
      name: 'Sarah Mathews',
      role: 'Operations Director',
      company: 'GulfTech Manufacturing',
      rating: 5,
    },
    {
      quote:
        'Their fire warden program helped us improve evacuation readiness across multiple facilities. Strong recommendation for corporate teams.',
      name: 'Eng. Faisal Al-Nuaimi',
      role: 'Project Manager',
      company: 'Qatar Oil Services',
      rating: 5,
    },
    {
      quote:
        'We regularly use Perfect EHS Solutions for contractor induction and refresher training. Consistent quality and clear reporting.',
      name: 'Mohammed Ali',
      role: 'Safety Coordinator',
      company: 'Al Noor Contracting',
      rating: 5,
    },
  ],
};
