import React from 'react';
import ProductPage from '../components/ProductPage';
import { coachingData } from '../data/products/coaching';

export default function CoachingPage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={coachingData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}

