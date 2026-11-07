import React from 'react';
import ProductPage from '../components/ProductPage';
import { fieldServiceData } from '../data/products/field-service';

export default function FieldServicePage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={fieldServiceData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}

