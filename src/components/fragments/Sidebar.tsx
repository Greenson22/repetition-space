// src/components/fragments/Sidebar.tsx

"use client";

import React from 'react';
import { Home, Settings, Leaf } from 'lucide-react';

export type Page = 'dashboard' | 'koleksiku' | 'jadwal-siram' | 'pengaturan';

type SidebarProps = {
  activePage: Page;
  setActivePage: (page: Page) => void;
};

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-lg border-r border-slate-200 flex-col shrink-0 hidden md:flex">
      <div className="p-6 flex items-center space-x-3">
        <div className="bg-emerald-500 p-2 rounded-lg shadow-md shadow-emerald-500/20">
          <Leaf className="text-white"/>
        </div>
        <h1 className="text-xl font-bold text-slate-800">Space Repetition</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id as Page)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;