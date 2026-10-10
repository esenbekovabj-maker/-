import React, { useState } from 'react';
import { MapPin, Trees, Waves, Wine, Compass, Wifi, Home, Flame, Info } from 'lucide-react';
import { PARK_LOCATIONS } from '../data/mockData';
import { ParkLocation } from '../types';

export const ResortMap: React.FC = () => {
  const [activePin, setActivePin] = useState<ParkLocation>(PARK_LOCATIONS[0]);

  const getPinIcon = (cat: ParkLocation['category']) => {
    switch (cat) {
      case 'nature':
        return <Trees className="w-3.5 h-3.5" />;
      case 'water':
        return <Waves className="w-3.5 h-3.5" />;
      case 'food':
        return <Wine className="w-3.5 h-3.5" />;
      case 'relax':
        return <Wifi className="w-3.5 h-3.5" />;
      case 'stay':
        return <Home className="w-3.5 h-3.5" />;
      default:
        return <MapPin className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="map" className="py-24 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Территория пансионата</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>16 гектаров у озера</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
            Интерактивная карта <br className="hidden sm:inline" />
            <span className="italic font-light text-emerald-300">ololo Ак-Жол</span>
          </h2>

          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Исследуйте ключевые точки нашего тихого оазиса: от вековых сосен и коворкинг-беседок до пляжного бара 
            и причала для SUP-бордов.
          </p>
        </div>

        {/* Map Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Schematic Map Canvas */}
          <div className="lg:col-span-8 bg-stone-950 rounded-2xl border border-stone-800 p-6 relative overflow-hidden shadow-2xl">
            {/* Legend bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-800 text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Info className="w-4 h-4" />
                <span>Нажимайте на метки для подробностей локации</span>
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] text-emerald-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  Парк СССР
                </span>
                <span className="flex items-center gap-1 text-[11px] text-sky-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                  Озеро без моторов
                </span>
              </div>
            </div>

            {/* Stylized Illustrated Territory View */}
            <div className="relative mt-4 w-full aspect-[16/10] bg-stone-900/90 rounded-xl overflow-hidden border border-stone-800/80">
              {/* Lake Section (Top/Right) */}
              <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-sky-950/70 via-teal-950/50 to-transparent flex items-center justify-center">
                <div className="transform -rotate-90 text-[11px] font-semibold tracking-widest text-sky-400/60 uppercase">
                  Кристальное озеро Иссык-Куль (Зона без катеров)
                </div>
              </div>

              {/* Park Section (Left/Bottom) */}
              <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-emerald-950/40 via-stone-900/40 to-transparent p-4 flex flex-col justify-between">
                <div className="text-[10px] text-emerald-400/80 font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <Trees className="w-3 h-3" />
                  <span>Реликтовый сосновый массив 1968–1974 гг.</span>
                </div>
                <div className="text-[10px] text-stone-400 flex items-center gap-1.5">
                  <Home className="w-3 h-3 text-emerald-400" />
                  <span>Въезд & Главный корпус</span>
                </div>
              </div>

              {/* Beach Border line */}
              <div className="absolute top-0 bottom-0 left-[60%] w-0.5 border-r border-dashed border-amber-500/30"></div>

              {/* Interactive Pins */}
              {PARK_LOCATIONS.map((loc) => {
                const isActive = activePin.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActivePin(loc)}
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer transition-all duration-300 group z-20 ${
                      isActive
                        ? 'bg-emerald-500 text-stone-950 scale-125 ring-4 ring-emerald-500/30 shadow-lg'
                        : 'bg-stone-800 text-stone-200 hover:bg-stone-700 hover:scale-110 border border-stone-600'
                    }`}
                  >
                    {getPinIcon(loc.category)}
                    
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-stone-950 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-stone-800">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Detail Card */}
          <div className="lg:col-span-4 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-7 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                {getPinIcon(activePin.category)}
                <span>Локация</span>
              </span>
              {activePin.yearPlanted && (
                <span className="text-[11px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                  {activePin.yearPlanted}
                </span>
              )}
            </div>

            <h3 className="text-xl font-serif text-white font-medium">
              {activePin.name}
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              {activePin.description}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                Теги локации:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activePin.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-stone-900 text-emerald-300 text-xs px-2.5 py-1 rounded-md border border-stone-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <div className="bg-stone-900/80 p-3.5 rounded-xl border border-stone-800 text-xs text-stone-400 space-y-1">
                <span className="text-stone-300 font-medium block">Как пройти:</span>
                <span>Главная аллея связывает спальные корпуса прямо с пляжным баром и станцией сап-бордов всего за 3 минуты спокойной прогулки.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
