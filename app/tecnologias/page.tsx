'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';
import Card from '@/components/Card/Card';

const TecnologiasPage: React.FC = () => {
  const techs = JSON.parse(JSON.stringify(tecnologias));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {techs.map((tech: any, index: number) => (
        <Card 
          key={index} 
          id={tech.id} 
          title={tech.title} 
          description={tech.description} 
          image={tech.image} 
          rating={tech.rating} 
        />
      ))}
    </div>
  );
};