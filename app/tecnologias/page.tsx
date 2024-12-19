'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';
import Card from '@/components/Card/Card';

const TecnologiasPage: React.FC = () => {
  const techs = JSON.parse(JSON.stringify(tecnologias));

  return (
    <div >
    {techs.map((tecnologia: { id: number; title: string; image: string; description: string; rating: number }) => (
      <Card
        key={tecnologia.id}
        produto={{
          id: tecnologia.id,
          title: tecnologia.title,
          image: tecnologia.image,
          description: `${tecnologia.description} - Nota: ${tecnologia.rating}/5`,
        }}
      />
    ))}
  </div>
  );
};

export default TecnologiasPage;