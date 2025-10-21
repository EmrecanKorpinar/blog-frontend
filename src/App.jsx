import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Yapay Zeka ve Geleceğin Teknolojileri: 2025'te Neler Bizi Bekliyor?",
      excerpt: "Yapay zeka teknolojisinin son gelişmeleri ve yakın gelecekte hayatımızı nasıl değiştireceğine dair kapsamlı bir analiz. ChatGPT'den otonom araçlara kadar her şey...",
      author: "Emrecan",
      date: "15 Ekim 2025",
      readTime: 8,
      category: "Teknoloji",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Minimalist Tasarım Trendleri ve Modern Web Geliştirme",
      excerpt: "2025'te minimalist tasarım nasıl evrimleşiyor? En son UI/UX trendleri ve uygulama örnekleri ile birlikte detaylı bir rehber.",
      author: "Emrecan",
      date: "12 Ekim 2025",
      readTime: 6,
      category: "Tasarım",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop"
    },
    {
      id: 3,
      title: "Uzaktan Çalışma Kültürü: Verimlilik İpuçları ve Araçlar",
      excerpt: "Ev ofisinde verimliliğinizi artırmanın en etkili yolları. Uzmanlardan tavsiyeler ve en iyi araçlar.",
      author: "Emrecan",
      date: "10 Ekim 2025",
      readTime: 5,
      category: "Yaşam",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop"
    },
    {
      id: 4,
      title: "React 19'un Yeni Özellikleri ve Server Components",
      excerpt: "React'in son sürümünde gelen yenilikler ve performans iyileştirmeleri. Pratik örneklerle birlikte detaylı inceleme.",
      author: "Emrecan",
      date: "8 Ekim 2025",
      readTime: 10,
      category: "Web Geliştirme",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop"
    },
    {
      id: 5,
      title: "Sürdürülebilir Yaşam İçin 10 Pratik Öneri",
      excerpt: "Çevre dostu bir yaşam tarzı için bugünden başlayabileceğiniz basit ama etkili adımlar. Doğa için hep birlikte!",
      author: "Emrecan",
      date: "5 Ekim 2025",
      readTime: 4,
      category: "Yaşam",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=450&fit=crop"
    },
    {
      id: 6,
      title: "Blockchain ve NFT'lerin Geleceği: Gerçekten Devrim mi?",
      excerpt: "Kripto dünyasının son durumu ve NFT'lerin sanat, müzik ve oyun sektörlerinde yarattığı değişim üzerine derinlemesine bir bakış.",
      author: "Emrecan",
      date: "1 Ekim 2025",
      readTime: 7,
      category: "Teknoloji",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured & Latest Posts */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Öne Çıkan Yazılar</span>
          </h2>
          <p className="text-slate-600 text-lg">En popüler ve ilgi çeken içeriklerimiz</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400">
            Daha Fazla Yükle
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Popüler Kategoriler</span>
            </h2>
            <p className="text-slate-600 text-lg">İlgi alanınıza göre içerikleri keşfedin</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Teknoloji', icon: '💻', color: 'from-blue-500 to-cyan-500', count: 120 },
              { name: 'Tasarım', icon: '🎨', color: 'from-pink-500 to-rose-500', count: 85 },
              { name: 'Yaşam', icon: '🌱', color: 'from-green-500 to-emerald-500', count: 95 },
              { name: 'İş Dünyası', icon: '💼', color: 'from-purple-500 to-indigo-500', count: 67 },
              { name: 'Sağlık', icon: '❤️', color: 'from-red-500 to-pink-500', count: 54 },
              { name: 'Seyahat', icon: '✈️', color: 'from-orange-500 to-yellow-500', count: 78 }
            ].map((category) => (
              <button 
                key={category.name}
                className="group glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500">{category.count} yazı</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
