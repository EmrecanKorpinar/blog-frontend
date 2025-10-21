import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 animate-float shadow-xl">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Hiçbir Yazıyı Kaçırmayın</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Haftanın en iyi içeriklerini ve özel yazıları doğrudan e-posta kutunuzda alın. 
              Haftada sadece 1 e-posta, spam yok! 📬
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Abone Oldunuz!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Abone Ol</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              🔒 E-posta adresiniz güvendedir. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">5,000+</div>
              <div className="text-sm text-slate-600 mt-1">Abone</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">95%</div>
              <div className="text-sm text-slate-600 mt-1">Açılma Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-slate-600 mt-1">Puan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
