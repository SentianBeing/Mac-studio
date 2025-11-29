export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  category: string;
  readTime: string;
  title: string;
  description: string;
  color: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  year: string;
  image: string;
  type: string;
}
