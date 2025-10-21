import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold">Emrecan's Blog</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Teknoloji, tasarım ve yaşam tarzı hakkında ilham verici içerikler paylaştığım kişisel blog platformum.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Ana Sayfa
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Tüm Yazılar
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Kategoriler
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Hakkımda
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                İletişim
              </a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kategoriler</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Teknoloji
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Tasarım
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Yaşam
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                İş Dünyası
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Kişisel Gelişim
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span>emrecan@blog.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Emrecan's Blog. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Çerezler</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
