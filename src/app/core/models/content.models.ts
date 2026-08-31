export interface ShowcaseSlide {
  image: string;
  tag: string;
  title: string;
  caption: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface TrainingSession {
  title: string;
  date: string;
  time?: string;
  venue: string;
  category: string;
  seats?: string;
  participants?: string;
  image?: string;
}

export interface TrainingAction {
  title: string;
  date: string;
  time?: string;
  venue: string;
  category: string;
  seats?: string;
  participants?: string;
  image?: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ProgramHighlight {
  title: string;
  description: string;
  count: string;
}

export interface ClientItem {
  name: string;
  sector: string;
  logo: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface SiteContent {
  showcaseSlides: ShowcaseSlide[];
  showcaseMarquee: string[];
  heroStats: HeroStat[];
  services: ServiceItem[];
  upcomingTrainings: TrainingSession[];
  conductedTrainings: TrainingSession[];
  trainingActions: TrainingAction[];
  trainingSummary: StatItem[];
  programHighlights: ProgramHighlight[];
  clients: ClientItem[];
  testimonials: TestimonialItem[];
}
