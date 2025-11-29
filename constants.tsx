import { NavItem, Testimonial, FaqItem, BlogPost, CaseStudy } from './types';
import { LayoutDashboard, ShoppingCart, BarChart3, PieChart } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Service', href: '#service', hasDropdown: true },
  { label: 'Agency', href: '#agency', hasDropdown: true },
  { label: 'Case study', href: '#case-study', hasDropdown: true },
  { label: 'Resources', href: '#resources', hasDropdown: true },
  { label: 'Contact', href: '#contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    role: "CEO",
    company: "Basecamp Corp"
  },
  {
    id: 2,
    quote: "The strategic approach to SEO and content marketing has significantly increased our organic traffic. The team is responsive, data-driven, and truly cares about our long-term success.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "TechFlow"
  },
  {
    id: 3,
    quote: "Working with MAC has been a game-changer. Their insights into user behavior and conversion optimization helped us double our leads in just six months.",
    author: "David Chen",
    role: "Founder",
    company: "StartUp Inc"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "Through SEO optimization, content marketing, and paid advertising, we increase your ranking on search engines, making it easier for potential customers to find you."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "Results vary by strategy. SEO can take 3-6 months, while PPC and social media ads can generate immediate traffic. We provide realistic timelines based on your goals."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We use key performance indicators (KPIs) such as traffic, conversion rates, click-through rates (CTR), and ROI to measure and report on campaign success."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: 'SEO',
    readTime: '5 min read',
    title: 'How a Digital Marketing Agency Can Boost Your Business',
    description: 'We are the top digital marketing agency for branding corp. We offer a full rang engine ...',
    color: 'bg-blue-400'
  },
  {
    category: 'Marketing',
    readTime: '5 min read',
    title: 'The Latest Trends and Strategies with a Digital Marketing Agency',
    description: 'Working with this digital marketing agency has been a true partnership. They have tak...',
    color: 'bg-orange-400'
  },
  {
    category: 'Strategy',
    readTime: '5 min read',
    title: 'Maximizing ROI with the Expertise of a Digital Marketing Agency',
    description: 'What sets this digital marketing agency apart is their commitment to transparency a...',
    color: 'bg-purple-600'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Ai Wave - Ai Chatbot Mobile App",
    year: "Ai Corporation, 2023",
    type: "UI/UX Design",
    image: "https://picsum.photos/seed/case1/600/800"
  },
  {
    id: 2,
    title: "App Lancer - Freelance Marketplace",
    year: "Lancer Corporation, 2023",
    type: "UI/UX Design",
    image: "https://picsum.photos/seed/case2/600/800"
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    year: "Bank Corp, 2024",
    type: "UI/UX Design",
    image: "https://picsum.photos/seed/case3/600/800"
  }
];
