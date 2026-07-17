import { Sparkles, Bug, Users, Building, Briefcase } from 'lucide-react';

export const servicesData = [
  {
    id: 'housekeeping',
    slug: 'housekeeping',
    title: 'Housekeeping',
    description: 'Professional cleaning services for corporate offices, hospitals, apartments, flats, hotels, and industrial facilities.',
    longDescription: 'Our professional housekeeping services are designed to maintain the highest standards of cleanliness and hygiene in your facilities. We use eco-friendly products and advanced cleaning techniques to ensure a safe, spotless environment for your employees and visitors.',
    features: ['Daily Office Cleaning', 'Deep Cleaning', 'Restroom Sanitation', 'Waste Management', 'Floor Maintenance'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pest-control',
    slug: 'pest-control',
    title: 'Pest Control',
    description: 'Comprehensive pest management solutions to keep your corporate spaces, apartments, flats, and hotels safe and hygienic.',
    longDescription: 'Protect your business from infestations with our comprehensive pest control solutions. We employ safe, industry-approved methods to eliminate pests and prevent future occurrences, ensuring full compliance with health and safety regulations.',
    features: ['Rodent Control', 'Termite Treatment', 'Insect Eradication', 'Preventative Inspections', 'Eco-friendly Treatments'],
    icon: Bug,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'manpower-supply',
    slug: 'manpower-supply',
    title: 'Manpower Supply',
    description: 'Reliable skilled and unskilled manpower for various industrial, corporate, hotel, and residential needs.',
    longDescription: 'We provide a reliable workforce tailored to your specific industrial and corporate needs. Whether you require skilled technicians or unskilled labor for short-term or long-term projects, our vetted professionals are ready to integrate seamlessly into your operations.',
    features: ['Skilled Labor', 'Unskilled Labor', 'Temporary Staffing', 'Permanent Placements', 'Background Verified Staff'],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'guest-house',
    slug: 'guest-house',
    title: 'Guest House Mgmt',
    description: 'Complete management of corporate guest houses ensuring premium hospitality.',
    longDescription: 'Ensure your corporate guests experience premium hospitality with our guest house management services. We handle everything from reception and concierge services to catering and maintenance, providing a luxurious home-away-from-home experience.',
    features: ['Reception Services', 'Catering & Food Service', 'Laundry Management', 'Room Maintenance', 'Concierge Assistance'],
    icon: Building,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'staffing',
    slug: 'staffing',
    title: 'Staffing Solutions',
    description: 'End-to-end staffing and payroll solutions tailored to your business requirements.',
    longDescription: 'Streamline your human resources with our end-to-end staffing solutions. We manage the entire lifecycle of employment, including recruitment, payroll processing, compliance, and benefits administration, allowing you to focus on your core business.',
    features: ['Recruitment & Onboarding', 'Payroll Management', 'Statutory Compliance', 'Benefits Administration', 'Performance Tracking'],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200'
  }
];
