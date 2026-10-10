import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Waves, Compass, Sun, MapPin, Calendar, Trees } from 'lucide-react';
import { natureAudio } from '../utils/natureAudio';
import { RESORT_FACTS } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenSupBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const playing = natureAudio.toggle();
    setIsAudioPlaying(playing);
  };

  return (
    <>
      {/* Top weather & eco status ticker */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Озеро Иссык-Куль · с. Кош-Кёль</span>
            </span>
            <span className="hidden sm:inline text-stone-600">/</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Waves className="w-3.5 h-3.5" />
              <span>Вода {RESORT_FACTS.waterTemp} · Кристальная гладь</span>
            </span>
            <span className="hidden md:inline text-stone-600">/</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Воздух {RESORT_FACTS.airTemp} · Горное солнце</span>
            </span>
            <span className="hidden lg:inline text-stone-600">/</span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-300">
              <Trees className="w-3.5 h-3.5" />
              <span>{RESORT_FACTS.parkArea}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Акватория без катеров и скутеров
            </span>

            {/* Ambient sound button */}
            <button
              onClick={handleAudioToggle}
              title="Включить звуки прибоя и сосен"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                isAudioPlaying
                  ? 'bg-emerald-700 text-white font-medium shadow-sm'
                  : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
                  <span>Шум прибоя и сосен</span>
                  <span className="flex gap-0.5 items-end h-3 ml-1">
                    <span className="w-0.5 h-1.5 bg-emerald-300 animate-[bounce_1s_infinite]"></span>
                    <span className="w-0.5 h-3 bg-emerald-300 animate-[bounce_1.3s_infinite]"></span>
                    <span className="w-0.5 h-2 bg-emerald-300 animate-[bounce_0.8s_infinite]"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Звук природы</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/95 backdrop-blur-md text-white shadow-lg py-3 border-b border-stone-800'
            : 'bg-stone-900 text-white py-4 border-b border-stone-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-lg tracking-wider group-hover:bg-emerald-700 transition-colors shadow-sm">
              ol
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight font-sans text-stone-100">ololo</span>
                <span className="font-serif italic text-lg text-emerald-400">Ак-Жол</span>
              </div>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest -mt-0.5">
                Эко-пансионат · Иссык-Куль
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#silence" className="hover:text-emerald-400 transition-colors">
              Философия тишины
            </a>
            <a href="#park" className="hover:text-emerald-400 transition-colors">
              Парк СССР
            </a>
            <a href="#sup" className="hover:text-emerald-400 transition-colors">
              SUP-станция
            </a>
            <a href="#beachbar" className="hover:text-emerald-400 transition-colors">
              Бар на пляже
            </a>
            <a href="#rooms" className="hover:text-emerald-400 transition-colors">
              Проживание
            </a>
            <a href="#map" className="hover:text-emerald-400 transition-colors">
              Карта территории
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Вопросы
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#sup"
              className="text-xs text-stone-300 hover:text-white px-3 py-2 rounded border border-stone-700 hover:border-stone-500 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>SUP-заплывы</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded transition-all shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Забронировать номер</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-white cursor-pointer"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#silence"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Философия тишины & 0 катеров
            </a>
            <a
              href="#park"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Парковая зона эпохи СССР
            </a>
            <a
              href="#sup"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              SUP-бординг & Рассветы
            </a>
            <a
              href="#beachbar"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Бар на пляже у воды
            </a>
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Номера и коттеджи
            </a>
            <a
              href="#map"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Карта курорта
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-emerald-400 py-1.5 text-sm"
            >
              Частые вопросы
            </a>

            <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-2.5 rounded text-sm text-center"
              >
                Забронировать номер
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
