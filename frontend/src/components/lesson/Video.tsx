"use client";
import React from 'react';

export default function Video({ id, title }: { id: string; title: string }){
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
      <div className="aspect-video bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}


