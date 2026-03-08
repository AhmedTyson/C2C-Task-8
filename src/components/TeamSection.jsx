import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  { id: 1, name: "Dahlia Moore",  role: "Senior Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 2, name: "Jhone Digo",   role: "Marketing",       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 3, name: "Zara Tingo",   role: "Web Developer",   image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: 4, name: "David Zone",   role: "SEO Expert",      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600" },
];

export default function TeamSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 pb-32">
      <div className="text-center mb-[60px]">
        <p className="text-[#2563eb] font-bold uppercase tracking-widest text-sm mb-3">
          Meet Our Team
        </p>
        <h2 className="text-[38px] font-bold text-[#111827] mb-5 tracking-tight">
          Our Creative Team
        </h2>
        <p className="text-[15px] text-[#6b7280] max-w-[580px] mx-auto leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {teamMembers.map(member => (
          <TeamCard 
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
