
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { TrustBuilders } from '../components/home/TrustBuilders';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { ProjectsPreview } from '../components/home/ProjectsPreview';
import { Testimonials } from '../components/home/Testimonials';
import { CTA } from '../components/home/CTA';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Day 2 Day Services | Premium Facility Management in Chennai</title>
        <meta name="description" content="Day 2 Day Services provides premium facility management, housekeeping, and staffing solutions for corporate, industrial, and residential sectors in Chennai." />
      </Helmet>
      <main className="w-full">
        <Hero />
        <TrustBuilders />
        <AboutPreview />
        <ServicesPreview />
        <ProjectsPreview />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
};
