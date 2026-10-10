import React, { useState } from 'react';
import { Compass, Sunrise, Sparkles, Check, Clock, User, Shield, ArrowRight } from 'lucide-react';
import { IMAGES, SUP_PROGRAMS } from '../data/mockData';
import { SupExperience } from '../types';

interface SupStationProps {
  onOpenSupBookingModal: (program: SupExperience) => void;
}

export const SupStation: React.FC<SupStationProps> = ({ onOpenSupBookingModal }) => {
  const [selectedProgram, setSelectedProgram] = useState<SupExperience>(SUP_PROGRAMS[0]);
  const [boardCount, setBoardCount] = useState<number>(2);

  const calculateTotal = () => {
    return selectedProgram.price * boardCount;
  };

  return (
    <section id="sup" className="py-24 bg-stone-50 text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Водная станция</span>
            <span aria-hidden="true">·</span>
            <span>Только сапы</span>
            <span aria-hidden="true">·</span>
            <span>Zero Emission</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Единственный транспорт на воде — <br className="hidden sm:inline" />
            <span className="italic text-emerald-900">тихие SUP-борды</span>
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Поскольку на нашей акватории нет моторных катеров и скутеров, поверхность озера в утренние и вечерние часы 
            превращается в зеркало. Вы скользите на сапе в абсолютной тишине, разглядывая дно на глубине до 12 метров.
          </p>
        </div>

        {/* Feature Hero Card with Photo */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden aspect-[16/10] shadow-md group">
            <img
              src={IMAGES.sup}
              alt="SUP борд на рассвете на озере Иссык-Куль ololo Ак-Жол"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Sunrise className="w-4 h-4 text-amber-400" />
              <span>Штиль на рассвете 06:00 – 08:30</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-4 rounded-b-xl text-white">
              <p className="text-xs sm:text-sm font-medium">
                «Скользить на сапе по озеру, когда вокруг нет ни шума двигателя, ни волн от катеров — это медитация высшего уровня».
              </p>
            </div>
          </div>

          {/* Quick interactive booking calculator right here */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Онлайн-бронирование снаряжения
              </span>
              <h3 className="text-xl font-serif text-stone-900 mt-1">
                Выбрать программу заплыва:
              </h3>
            </div>

            {/* Program selection pills */}
            <div className="space-y-2">
              {SUP_PROGRAMS.map((prog) => {
                const isSelected = selectedProgram.id === prog.id;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedProgram(prog)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-700 bg-emerald-50/70 text-emerald-950 font-medium shadow-sm'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-sm">{prog.title}</div>
                      <div className="text-stone-500 text-[11px] mt-0.5 flex items-center gap-2">
                        <Clock className="w-3 h-3 text-stone-400" />
                        <span>{prog.timeSlot}</span>
                        <span>·</span>
                        <span>{prog.durationMinutes} мин</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <span className="font-bold text-stone-900 text-sm">{prog.price} сом</span>
                      <span className="text-[10px] text-stone-500 block">/ за борд</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Number of boards selector */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-stone-800 block">Количество SUP-бордов</span>
                <span className="text-[11px] text-stone-500">Включая жилеты и весла</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBoardCount(Math.max(1, boardCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-300 flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 cursor-pointer text-sm"
                >
                  -
                </button>
                <span className="w-6 text-center font-semibold text-stone-900 text-sm">{boardCount}</span>
                <button
                  onClick={() => setBoardCount(Math.min(8, boardCount + 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-300 flex items-center justify-center font-bold text-stone-700 hover:bg-stone-100 cursor-pointer text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total and book button */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="text-stone-600">Итого за {boardCount} {boardCount === 1 ? 'доску' : boardCount < 5 ? 'доски' : 'досок'}:</span>
                <span className="text-xl font-bold text-emerald-900 font-serif">
                  {calculateTotal()} сом
                </span>
              </div>

              <button
                onClick={() => onOpenSupBookingModal(selectedProgram)}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Забронировать «{selectedProgram.title.split(':')[0]}»</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-stone-500 mt-2">
                Оплата на станции или при выезде из пансионата
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards with detailed benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Sunrise className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-stone-900 text-sm mb-1">Sunrise-заплывы</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Выход в 6:00 утра. Идеально гладкая вода, мягкие лучи солнца и чай с травами прямо на берегу.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-stone-900 text-sm mb-1">Премиум доски</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Надежные широкие доски Red Paddle и Gladiator с карбоновыми сверхлегкими веслами.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <User className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-stone-900 text-sm mb-1">Легко новичкам</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Так как катера не поднимают волн, у нас научится стоять на сапе даже тот, кто ни разу не пробовал.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Check className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-stone-900 text-sm mb-1">Все включено</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Удобные спасательные жилеты, водонепроницаемые чехлы для телефонов и страховочные лиши.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
