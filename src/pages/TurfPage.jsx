import React from 'react';
import ProductPage from '../components/ProductPage';
import { turfData } from '../data/products/turf';

export default function TurfPage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={turfData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}

