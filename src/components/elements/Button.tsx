import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, onClick, variant = 'primary', icon, className = '', type = 'button' }: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center space-x-2 font-semibold py-3 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5';
  
  const variantClasses = {
    primary: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/30',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;