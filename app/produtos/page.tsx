'use client';

import React from 'react';
import useSWR from 'swr';
import { Produto } from '../models/interfaces';
import Card from '@/components/Card/Card';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductsPage: React.FC = () => {
  const { data: products, error, isLoading } = useSWR<Produto[]>('https://api.deisi.shop/products', fetcher);

  if (error) return <div>Ocorreu um erro ao carregar os produtos.</div>;
  if (isLoading) return <div>Carregando...</div>;
  if (!products) return <div>Nenhum produto disponível.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card 
          key={product.id} 
          id={product.id} 
          title={product.title} 
          description={product.description} 
          price={product.price} 
          image={product.image} 
        />
      ))}
    </div>
  );
};

export default ProductsPage;
