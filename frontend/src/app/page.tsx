import HeroSection from "@/components/frontPage/HeroSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhysicsRoadmap - Free AP Physics C Lessons & Practice',
  description: 'The best free resource for AP Physics C. Master Mechanics and Electricity & Magnetism with interactive video lessons, practice questions, and a structured learning roadmap.',
};

export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-600 relative">
      <HeroSection />
    </div>
  );
}
