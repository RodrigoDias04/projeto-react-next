import React from 'react';
import { Produto } from '@/app/models/interfaces';

interface CardProps {
  produto: Produto;
}

const Card: React.FC<CardProps> = ({ produto }) => {
  return (
    <section > {}
      <h1 >{produto.title}</h1> {}
      <img src={produto.image} alt={produto.title} />
      <p>Custo total: {produto.price}€</p>
      <p>{produto.description}</p> {}
      
    </section>
  );
};

export default Card;
