import React, { useState } from 'react';
import { Wine, Coffee, Flame, Sparkles, Clock, MapPin, Heart, Check } from 'lucide-react';
import { IMAGES, BAR_MENU } from '../data/mockData';
import { MenuItem } from '../types';

export const BeachBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tea' | 'lemonade' | 'cocktails' | 'coffee' | 'snacks'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  const toggleFavorite = (id: string, name: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      setOrderNotification(`Удалено из заметок: ${name}`);
    } else {
      setFavorites([...favorites, id]);
      setOrderNotification(`Добавлено в желания: ${name}`);
    }
    setTimeout(() => setOrderNotification(null), 2500);
  };

  const filteredItems = activeTab === 'all'
    ? BAR_MENU
    : BAR_MENU.filter((item) => item.category === activeTab);

  return (
    <section id="beachbar" className="py-24 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Wine className="w-3.5 h-3.5" />
            <span>Пляжный бар у кромки воды</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>ololo Sunset Bar</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
            Бар на пляже: <br className="hidden sm:inline" />
            <span className="italic font-light text-amber-300">вкус ягод, кофе и золотой закат</span>
          </h2>

          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Деревянная терраса прямо на песке, в трёх метрах от прозрачной воды.
            Здесь варят кофе на рассвете после первого заплыва на сапах, а вечером зажигают теплые гирлянды, 
            разводят огонь в костровой чаше и смешивают коктейли с горными травами.
          </p>
        </div>

        {/* Atmosphere Photo & Highlights Banner */}
        <div className="mt-14 relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
          <div className="aspect-[21/9] sm:aspect-[21/8] w-full relative">
            <img
              src={IMAGES.bar}
              alt="Уютный пляжный бар ololo Ак-Жол на закате"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
          </div>

          <div className="p-6 sm:p-8 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span><strong>07:00 – 23:00</strong> ежедневно</span>
              </span>
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Вечерний костер на закате с 19:30</span>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Прямо на песке у воды</span>
              </span>
            </div>

            <div className="text-xs text-stone-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Доставка напитков к деревянным шезлонгам и гамакам</span>
            </div>
          </div>
        </div>

        {/* Floating Notification */}
        {orderNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-stone-800 border border-amber-400/40 text-amber-300 px-4 py-2.5 rounded-lg shadow-xl text-xs flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span>{orderNotification}</span>
          </div>
        )}

        {/* Interactive Menu Header & Tabs */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-800 pb-5">
            <div>
              <h3 className="text-xl font-serif text-white">Меню бара на пляже</h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Готовим из местных иссык-кульских ягод, высокогорного мёда и чистейшей родниковой воды
              </p>
            </div>

            {/* Segmented Category Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-800/80 rounded-xl border border-stone-700/60">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Все
              </button>
              <button
                onClick={() => setActiveTab('tea')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'tea' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Горные чаи
              </button>
              <button
                onClick={() => setActiveTab('lemonade')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'lemonade' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Лимонады
              </button>
              <button
                onClick={() => setActiveTab('cocktails')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'cocktails' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Коктейли
              </button>
              <button
                onClick={() => setActiveTab('coffee')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'coffee' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Кофе
              </button>
              <button
                onClick={() => setActiveTab('snacks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'snacks' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Закуски
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-stone-800/60 border border-stone-700/60 rounded-xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[10px] text-amber-400 font-medium tracking-wide uppercase mt-0.5 block">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleFavorite(item.id, item.name)}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isFav
                            ? 'text-rose-400 hover:text-rose-300'
                            : 'text-stone-500 hover:text-stone-300'
                        }`}
                        title={isFav ? 'В списке желаний' : 'Добавить в список желаний'}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <p className="text-stone-400 text-xs mt-2.5 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {item.ingredients && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="bg-stone-900/90 text-stone-300 text-[10px] px-2 py-0.5 rounded border border-stone-800"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-700/50 flex items-center justify-between text-xs">
                    <span className="text-stone-400">
                      {item.isLocalProduct && '🌾 Локальный продукт'}
                    </span>
                    <span className="font-bold text-amber-300 text-base font-serif">
                      {item.price} сом
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {favorites.length > 0 && (
            <div className="mt-8 bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 flex items-center justify-between text-xs text-amber-200">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Вы отметили <strong>{favorites.length}</strong> {favorites.length === 1 ? 'напиток' : 'напитка'} в меню для вашего отдыха</span>
              </div>
              <span className="text-stone-400">Покажите бармену на пляже</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
