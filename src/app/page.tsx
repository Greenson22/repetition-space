// src/app/page.tsx

"use client";

import { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Page } from '@/components/fragments/Sidebar';
import DashboardView from '@/components/views/DashboardView';
import PlaceholderView from '@/components/views/PlaceholderView';

export default function HomePage() {
  const [activePage, setActivePage] = useState<Page>('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardView />;
      case 'pengaturan':
        return <PlaceholderView title="Pengaturan" />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </DashboardLayout>
  );
}