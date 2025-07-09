// src/components/layouts/DashboardLayout.tsx

import React from 'react';
import { Bell, Search } from 'lucide-react';
import Sidebar, { Page } from '../fragments/Sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  activePage: Page;
  setActivePage: (page: Page) => void;
};

const DashboardLayout = ({ children, activePage, setActivePage }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-slate-50/80 backdrop-blur-sm px-8 py-4 flex items-center justify-between z-10 border-b border-slate-200">
          <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"/>
              {/* Pencarian bisa dihubungkan ke state jika diperlukan */}
              <input type="text" placeholder="Cari materi..." className="bg-white rounded-full pl-12 pr-4 py-2.5 w-80 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"/>
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative text-slate-500 hover:text-emerald-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3">
                <div>
                    <h4 className="font-semibold text-sm text-slate-800">Frendy Gerung</h4>
                    <p className="text-xs text-slate-500">Sarjana Komputer</p>
                </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;