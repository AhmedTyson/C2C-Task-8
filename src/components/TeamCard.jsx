import React from 'react';

export default function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
      <img src={image} alt={name} className="w-full h-[280px] object-cover" />
      
      <div className="p-5 flex flex-col items-start justify-center text-left">
        <h3 className="font-bold text-[#111827] text-[17px] mb-0.5">{name}</h3>
        <p className="text-[13px] text-[#6b7280] font-medium">{role}</p>
      </div>
    </div>
  );
}
