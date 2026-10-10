import React from 'react';
import { ShieldCheck, Sparkles, Compass, Wine, Trees, ArrowDown } from 'lucide-react';
import { IMAGES, RESORT_FACTS } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePark: () => void;
  onExploreSup: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePark, onExploreSup }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
      {/* Background Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Озеро Иссык-Куль ololo Ак-Жол"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/40"></div>
        <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-[0.5px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Anti-slop zero pill metadata */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-emerald-300 mb-4">
          <span>Северный берег Иссык-Куля</span>
          <span aria-hidden="true" className="text-emerald-500">·</span>
          <span>Село Кош-Кёль</span>
          <span aria-hidden="true" className="text-emerald-500">·</span>
          <span>Пансионат «ololo Ак-Жол»</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Оазис тишины, <br className="hidden sm:inline" />
          <span className="italic font-light text-stone-200">где слышно только озеро</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
          Экологически чистое место на Иссык-Куле без рева катеров и пароходов.
          Только утренние SUP-борды, реликтовый парк советской эпохи и закатный бар у кромки воды.
        </p>

        {/* Core Pillars */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="bg-stone-900/80 backdrop-blur-md p-4 rounded-xl border border-stone-800/80 shadow-lg hover:border-emerald-700/60 transition-colors">
            <div className="flex items-center gap-2.5 text-emerald-400 mb-1">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider">0 катеров</span>
            </div>
            <p className="text-xs text-stone-300">
              Полный запрет на моторные суда. Никакого бензина и шума.
            </p>
          </div>

          <div 
            onClick={onExploreSup}
            className="bg-stone-900/80 backdrop-blur-md p-4 rounded-xl border border-stone-800/80 shadow-lg hover:border-emerald-700/60 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 text-emerald-400 mb-1">
              <Compass className="w-5 h-5 flex-shrink-0 group-hover:rotate-45 transition-transform" />
              <span className="text-xs font-semibold uppercase tracking-wider">Только SUP</span>
            </div>
            <p className="text-xs text-stone-300">
              Зеркальная гладь, утренние заплывы и йога на воде.
            </p>
          </div>

          <div 
            onClick={onExplorePark}
            className="bg-stone-900/80 backdrop-blur-md p-4 rounded-xl border border-stone-800/80 shadow-lg hover:border-emerald-700/60 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5 text-emerald-400 mb-1">
              <Trees className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider">Парк СССР</span>
            </div>
            <p className="text-xs text-stone-300">
              16 га вековых сосен и тянь-шаньских елей с целебным воздухом.
            </p>
          </div>

          <a 
            href="#beachbar"
            className="bg-stone-900/80 backdrop-blur-md p-4 rounded-xl border border-stone-800/80 shadow-lg hover:border-emerald-700/60 transition-colors block"
          >
            <div className="flex items-center gap-2.5 text-amber-400 mb-1">
              <Wine className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider">Бар на пляже</span>
            </div>
            <p className="text-xs text-stone-300">
              Облепиховый чай, коктейли на песке и костер на закате.
            </p>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-lg text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Забронировать номер в парке</span>
          </button>

          <a
            href="#silence"
            className="w-full sm:w-auto bg-stone-800/90 hover:bg-stone-700 text-stone-200 hover:text-white px-7 py-3.5 rounded-lg text-base font-medium border border-stone-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Узнать больше о тишине</span>
            <ArrowDown className="w-4 h-4 text-stone-400" />
          </a>
        </div>

        {/* Micro stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-stone-400">
          <div>
            <strong className="text-white text-sm font-semibold">{RESORT_FACTS.altitude}</strong> над уровнем моря
          </div>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <div>
            <strong className="text-white text-sm font-semibold">12+ м</strong> прозрачность воды
          </div>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <div>
            <strong className="text-white text-sm font-semibold">1970 г.</strong> основание реликтового парка
          </div>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <div>
            <strong className="text-emerald-400 text-sm font-semibold">Starlink</strong> Wi-Fi на территории
          </div>
        </div>
      </div>
    </section>
  );
};
