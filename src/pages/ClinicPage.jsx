import React from 'react';
import ProductPage from '../components/ProductPage';
import { clinicData } from '../data/products/clinic';

export default function ClinicPage({ onOpenDemo, onOpenTrial, onNavigateHome, onNavigateRoute }) {
  return (
    <ProductPage
      data={clinicData}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
    />
  );
}
