import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-8 animate-slide-up shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Teknoloji ve Tasarım Blogu</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="gradient-text">Fikirlerin</span>
            <br />
            <span className="text-slate-800">Hayat Bulduğu Yer</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 animate-slide-up max-w-2xl mx-auto leading-relaxed">
            Teknoloji, tasarım, yaşam tarzı ve daha fazlası hakkında ilham verici içerikler. Her gün yeni bir hikaye, her hafta yeni bir perspektif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Yazıları Keşfet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              Hakkımızda
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm md:text-base text-slate-600 mt-1">Yazı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm md:text-base text-slate-600 mt-1">Okuyucu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">20+</div>
              <div className="text-sm md:text-base text-slate-600 mt-1">Kategori</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
