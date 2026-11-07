import React from 'react';
import ProductPage from '../components/ProductPage';
import { realEstateData } from '../data/products/real-estate';

export default function RealEstatePage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={realEstateData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}

