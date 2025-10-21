import React, { useState } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold gradient-text hidden sm:block">Emrecan's Blog</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Ana Sayfa</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Yazılar</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Kategoriler</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Hakkımda</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">İletişim</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-blue-50 transition-colors hidden sm:block"
            >
              {isDark ? <Sun className="w-5 h-5 text-slate-600" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Ana Sayfa</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Yazılar</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Kategoriler</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Hakkımda</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">İletişim</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
