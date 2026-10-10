import React, { useState } from 'react';
import { Volume2, VolumeX, ShieldAlert, Sparkles, Droplets, HeartHandshake, Eye, Bird, Music2 } from 'lucide-react';
import { natureAudio } from '../utils/natureAudio';
import { IMAGES } from '../data/mockData';

export const EcoManifesto: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeComparison, setActiveComparison] = useState<'akzhol' | 'standard'>('akzhol');

  const toggleSound = () => {
    const active = natureAudio.toggle();
    setIsPlaying(active);
  };

  return (
    <section id="silence" className="py-24 bg-stone-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section kicker */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Экологический статус</span>
            <span aria-hidden="true">·</span>
            <span>Акватория тишины</span>
            <span aria-hidden="true">·</span>
            <span>No Motor Policy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Почему на нашем пляже <br className="hidden sm:inline" />
            <span className="italic text-emerald-900">нет ни одного катера</span>
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Большинство пляжей Иссык-Куля заполнены шумом водных мотоциклов, запахом дизельного топлива 
            и бесконечными волнами от пароходов. В <span className="font-semibold text-stone-800">ololo Ак-Жол</span> мы сознательно 
            отказались от любого моторного транспорта на воде.
          </p>
        </div>

        {/* Visual interactive comparison: Ordinary Beach vs ololo Ak-Zhol */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          {/* Segmented Control Switcher */}
          <div className="flex border-b border-stone-200 bg-stone-50 p-1.5">
            <button
              onClick={() => setActiveComparison('akzhol')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeComparison === 'akzhol'
                  ? 'bg-white text-emerald-900 shadow-sm border border-emerald-900/10'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>ololo Ак-Жол (Эко-заповедник)</span>
            </button>

            <button
              onClick={() => setActiveComparison('standard')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeComparison === 'standard'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Обычные шумные курорты</span>
            </button>
          </div>

          {/* Comparison Panel Content */}
          <div className="p-6 sm:p-10">
            {activeComparison === 'akzhol' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif text-emerald-900 font-bold">24 дБ</span>
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-1 rounded">
                      Шум ветра в соснах и озерного прибоя
                    </span>
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed">
                    Когда нет моторов, вода у берега остается стеклянно-прозрачной. Видно каждый камушек на глубине нескольких метров. 
                    Дети могут спокойно плавать у берега без опасности попасть под винт катера или гидроцикла.
                  </p>

                  <ul className="space-y-2.5 text-xs text-stone-700 pt-2">
                    <li className="flex items-start gap-2.5">
                      <Droplets className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                      <span><strong>0% бензиновой пленки</strong> — чистейшая бирюзовая вода озера</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Bird className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                      <span><strong>Птицы и рыба</strong> — бакланы, чайки и иссык-кульский чебачок плавают прямо у мостков</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Music2 className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                      <span><strong>Только весло SUP-борда</strong> — тихий медитативный водный спорт</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-video shadow-md">
                  <img
                    src={IMAGES.sup}
                    alt="Спокойная вода Иссык-Куля в ololo Ак-Жол"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      Зеркальная гладь без моторных волн
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-90">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif text-rose-800 font-bold">85+ дБ</span>
                    <span className="text-xs font-medium text-rose-800 bg-rose-50 px-2 py-1 rounded">
                      Шум двухтактных моторов и крики с «бананов»
                    </span>
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed">
                    На обычных пляжах купание превращается в постоянный стресс: запах отработанных газов, масляные разводы у кромки берега, 
                    постоянные искусственные волны, размывающие дно и пугающие рыбу.
                  </p>

                  <ul className="space-y-2.5 text-xs text-stone-700 pt-2">
                    <li className="flex items-start gap-2.5 text-rose-700">
                      <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Постоянная опасность для пловцов и детей у буйков</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-rose-700">
                      <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Запах бензина и мазута, оседающий на песке и полотенцах</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-rose-700">
                      <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Мутная вода из-за взбаламученного винтами ила</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-100 rounded-xl p-6 border border-stone-300 text-stone-600 flex flex-col justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto mb-3">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium text-stone-900 text-sm mb-1">
                    Катерам и гидроциклам вход закрыт
                  </h4>
                  <p className="text-xs text-stone-600">
                    Наша акватория охраняется и обозначена знаками экологической зоны тишины. 
                    Никаких компромиссов в вопросах покоя гостей.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ambient sound interactive card */}
        <div className="mt-10 max-w-4xl mx-auto bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSound}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-emerald-500 text-stone-950 scale-105 shadow-lg shadow-emerald-500/20'
                  : 'bg-stone-800 text-emerald-400 hover:bg-stone-700'
              }`}
              title={isPlaying ? 'Остановить звук' : 'Послушать тишину озера'}
            >
              {isPlaying ? <Volume2 className="w-7 h-7" /> : <VolumeX className="w-7 h-7" />}
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-stone-100 text-base">
                  {isPlaying ? 'Звучит: шелест волн и сосновый бриз Иссык-Куля' : 'Послушайте, как звучит настоящий тихий Иссык-Куль'}
                </h3>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Сгенерированный чистый акустический фон: мягкий прибой и ветер в кронах 50-летних елей
              </p>
            </div>
          </div>

          <button
            onClick={toggleSound}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex-shrink-0 ${
              isPlaying
                ? 'bg-stone-800 text-stone-300 hover:text-white'
                : 'bg-emerald-700 hover:bg-emerald-600 text-white'
            }`}
          >
            {isPlaying ? 'Выключить звук' : 'Включить атмосферу (Аудио)'}
          </button>
        </div>

        {/* 4 Pillars of Eco Living */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
              Прозрачность до 12 метров
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Отсутствие тяжелых моторных винтов сохраняет природный донный микромир. Вода у пирса напоминает горный хрусталь.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Bird className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
              Заповедный микроклимат
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Сочетание хвойных фитонцидов из парка и чистого ионизированного озерного воздуха исцеляет дыхательные пути и восстанавливает сон за пару дней.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
              Осознанное комьюнити ololo
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Здесь собираются люди, которые уважают личное пространство друг друга, читают книги, работают над проектами и берегут природу Кыргызстана.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
