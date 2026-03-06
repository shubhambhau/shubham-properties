import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { EmiCalculatorPage } from '../pages/MortgageCalculatorPage';
import { MarketInsightsPage } from '../pages/MarketInsightsPage';
import { BlogPostPage } from '../pages/BlogPostPage';
import { PropertiesPage } from '../pages/PropertiesPage';
import { PropertyDetailPage } from '../pages/PropertyDetailPage';
import { ContactPage } from '../pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'properties', element: <PropertiesPage /> },
      { path: 'properties/:id', element: <PropertyDetailPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/emi-calculator', element: <EmiCalculatorPage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'market-insights', element: <MarketInsightsPage /> },
      { path: 'market-insights/:slug', element: <BlogPostPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
