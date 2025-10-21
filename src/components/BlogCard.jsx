import React from 'react';
import { Clock, User, ArrowRight, Heart, MessageCircle, Bookmark } from 'lucide-react';

const BlogCard = ({ title, excerpt, author, date, readTime, category, image, featured = false }) => {
  return (
    <article className={`group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-slate-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              ⭐ Öne Çıkan
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className={`font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className={`text-slate-600 mb-4 ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readTime} dk</span>
            </div>
          </div>
          <span className="text-xs">{date}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-slate-500 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center space-x-1 text-slate-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">12</span>
            </button>
            <button className="text-slate-500 hover:text-yellow-500 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium group/btn">
            <span className="text-sm">Devamını Oku</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
