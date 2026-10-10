import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Waves, Trees, Compass, Heart, ShieldCheck } from 'lucide-react';
import { RESORT_FACTS } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Top Banner: Eco commitment pledge */}
      <div className="bg-emerald-950/60 border-b border-emerald-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-800/80 text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">
                Заповедная зона тишины озера Иссык-Куль
              </h4>
              <p className="text-xs text-stone-400">
                Катера, пароходы и гидроциклы строго запрещены для сохранения чистейшей воды и покоя гостей
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-emerald-300">
            <span className="flex items-center gap-1.5">
              <Trees className="w-4 h-4 text-emerald-400" />
              <span>16 га парка СССР</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Только SUP-бординг</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-emerald-400" />
              <span>Бар у самой воды</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-lg">
                ol
              </div>
              <div>
                <span className="font-bold text-lg text-white font-sans">ololo</span>{' '}
                <span className="font-serif italic text-lg text-emerald-400">Ак-Жол</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Пансионат нового поколения от семьи ololo на северном берегу Иссык-Куля.
              Место для тех, кто ценит первозданную тишину, вековые хвойные деревья, чистую зеркальную воду и уютное творческое комьюнити.
            </p>

            <div className="text-[11px] text-stone-500">
              Сеть креативных пространств & курортов ololo Кыргызстан
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Разделы
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#silence" className="hover:text-emerald-400 transition-colors">
                  Почему нет катеров и моторов
                </a>
              </li>
              <li>
                <a href="#park" className="hover:text-emerald-400 transition-colors">
                  История парка со времен СССР
                </a>
              </li>
              <li>
                <a href="#sup" className="hover:text-emerald-400 transition-colors">
                  SUP-бординг и рассветные заплывы
                </a>
              </li>
              <li>
                <a href="#beachbar" className="hover:text-emerald-400 transition-colors">
                  Бар на пляже и меню напитков
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-emerald-400 transition-colors">
                  Номера, коттеджи и цены
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-emerald-400 transition-colors">
                  Интерактивная карта территории
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Route */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Как добраться
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-300">Кыргызстан, оз. Иссык-Куль</strong>, с. Кош-Кёль (северный берег).
            </p>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>· 15 км от аэропорта «Иссык-Куль» (Тамчы)</li>
              <li>· 25 км от г. Балыкчы</li>
              <li>· 215 км от г. Бишкек (~3 часа)</li>
            </ul>
            <p className="text-[11px] text-emerald-400 pt-1">
              Организуем встречу на комфортном трансфере
            </p>
          </div>

          {/* Contacts & Reservations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Связь и бронирование
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <a
                href="https://wa.me/996555123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +996 (555) 12-34-56</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-500" />
                <span>+996 (312) 90-88-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-500" />
                <span>akzhol@ololofamily.com</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-stone-500 block">Время работы рецепции:</span>
              <span className="text-xs text-stone-300 font-medium">Круглосуточно (24/7)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} ololo Ак-Жол. Все права защищены. Эко-пансионат на озере Иссык-Куль.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Создано с любовью к природе Иссык-Куля</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
