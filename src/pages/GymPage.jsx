import React from 'react';
import ProductPage from '../components/ProductPage';
import { gymData } from '../data/products/gym';

export default function GymPage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={gymData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}

