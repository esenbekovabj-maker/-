import React, { useState } from 'react';
import { Trees, Clock, ShieldCheck, MapPin, Sparkles, BookOpen, Wifi } from 'lucide-react';
import { IMAGES, PARK_LOCATIONS } from '../data/mockData';

export const SovietPark: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(PARK_LOCATIONS[0]);

  return (
    <section id="park" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background soft ambient decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & History */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Историческое наследие</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>16 гектаров парка СССР</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight leading-tight text-white">
              Вековой хвойный парк, <br />
              <span className="italic font-light text-emerald-300">сохранённый сквозь эпоху</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Территория пансионата «Ак-Жол» была заложена в конце 1960-х годов как эталонный советский курортный парк на Иссык-Куле. 
              За более чем полвека деревья вымахали в исполинских великанов: тянь-шаньские ели, крымские сосны, тополя и березы 
              образуют естественный микроклиматический купол.
            </p>

            <div className="bg-stone-800/80 border border-stone-700/80 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Уникальные черты парка</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <Trees className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Свыше 3 000 хвойных деревьев</strong> — естественный фильтр воздуха, богатый фитонцидами.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Прохлада в полуденный зной</strong> — температура в парке на 4–6 градусов комфортнее, чем на открытом солнце.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wifi className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Starlink Wi-Fi прямо среди сосен</strong> — коворкинг-беседки и лавочки со скоростной связью для работы на природе.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-stone-400">
              <div>
                <span className="block text-2xl font-serif text-white font-medium">16 га</span>
                <span>Площадь зеленого массива</span>
              </div>
              <div className="h-8 w-px bg-stone-800"></div>
              <div>
                <span className="block text-2xl font-serif text-white font-medium">50+ лет</span>
                <span>Возраст главных аллей</span>
              </div>
              <div className="h-8 w-px bg-stone-800"></div>
              <div>
                <span className="block text-2xl font-serif text-white font-medium">25 видов</span>
                <span>Редких кустарников и деревьев</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Interactive Locations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl group">
              <img
                src={IMAGES.park}
                alt="Исторический парк пансионата ololo Ак-Жол с вековыми соснами"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-stone-900/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-stone-700/80 text-xs">
                  <span className="text-emerald-400 font-semibold block">Аллея 1972 года</span>
                  <span className="text-stone-300">Прямой тенистый спуск от корпусов к тихому пляжу</span>
                </div>
                <div className="hidden sm:block text-right text-[11px] text-stone-400">
                  <span>Фото территории ololo Ак-Жол</span>
                </div>
              </div>
            </div>

            {/* Interactive Park Locations Selector */}
            <div className="bg-stone-800/60 border border-stone-700/60 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Ключевые локации парка:</span>
                </h3>
                <span className="text-[11px] text-stone-400">Нажмите для подробностей</span>
              </div>

              {/* Location tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PARK_LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc)}
                      className={`text-left p-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-emerald-950/80 border-emerald-600 text-white shadow-sm'
                          : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800'
                      }`}
                    >
                      <div className="truncate font-semibold">{loc.name}</div>
                      {loc.yearPlanted && (
                        <div className="text-[10px] text-emerald-400 mt-0.5">{loc.yearPlanted}</div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Location Detail card */}
              <div className="mt-4 pt-4 border-t border-stone-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h4 className="font-semibold text-stone-100">{selectedLocation.name}</h4>
                  <p className="text-stone-400 mt-1 leading-relaxed">{selectedLocation.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                  {selectedLocation.tags.map((tag, idx) => (
                    <span key={idx} className="bg-stone-700/60 text-stone-300 px-2 py-0.5 rounded text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
