'use client';

import React from 'react';
import useSWR from 'swr';
import produtosData from '@/app/data/produtos.json'; 
import { Produto } from '../models/interfaces';
import Card from '@/components/Card/Card';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductsPage: React.FC = () => {
  const { data: products, error, isLoading } = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products/', fetcher);

  if (error) return <div>Ocorreu um erro ao carregar os produtos.</div>;
  if (isLoading) return <div>Carregando...</div>;
  if (!products) return <div>Nenhum produto disponível.</div>;

  return (
    <div>
      <h1 >Produtos</h1>
    
        {JSON.parse(JSON.stringify(produtosData)).map((produto: Produto) => (

          <Card key={produto.id} produto={produto} />
          
        ))} 
     
    
  </div>

  );
};

export default ProductsPage;
