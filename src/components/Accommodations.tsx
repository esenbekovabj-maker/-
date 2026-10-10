import React, { useState } from 'react';
import { Home, Users, Sparkles, Check, Calendar, ArrowRight, ShieldCheck, Coffee } from 'lucide-react';
import { ROOMS } from '../data/mockData';
import { RoomType } from '../types';

interface AccommodationsProps {
  onOpenBooking: (roomId: string) => void;
}

export const Accommodations: React.FC<AccommodationsProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cottage' | 'standard' | 'suite'>('all');
  const [selectedRoomForCalc, setSelectedRoomForCalc] = useState<RoomType>(ROOMS[0]);

  // Calculator state
  const [nights, setNights] = useState<number>(3);
  const [guests, setGuests] = useState<number>(2);
  const [mealPlan, setMealPlan] = useState<'breakfast' | 'fullBoard' | 'none'>('breakfast');
  const [includeSupPass, setIncludeSupPass] = useState<boolean>(true);
  const [includeTransfer, setIncludeTransfer] = useState<boolean>(false);

  const filteredRooms = selectedFilter === 'all'
    ? ROOMS
    : ROOMS.filter((room) => room.category === selectedFilter);

  // Price calculations
  const baseRoomTotal = selectedRoomForCalc.pricePerNight * nights;
  const mealCostPerGuestPerNight = mealPlan === 'breakfast' ? 600 : mealPlan === 'fullBoard' ? 1400 : 0;
  const mealTotal = mealCostPerGuestPerNight * guests * nights;
  const supPassTotal = includeSupPass ? 800 * nights : 0;
  const transferTotal = includeTransfer ? 3800 : 0;
  const grandTotal = baseRoomTotal + mealTotal + supPassTotal + transferTotal;

  return (
    <section id="rooms" className="py-24 bg-stone-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Home className="w-3.5 h-3.5" />
            <span>Проживание в тишине</span>
            <span aria-hidden="true">·</span>
            <span>Коттеджи & Корпуса</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Номера в хвойном парке <br className="hidden sm:inline" />
            <span className="italic text-emerald-900">и эко-коттеджи у озера</span>
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            От обновленных светлых номеров в историческом советском корпусе до отдельных деревянных шале 
            с панорамными террасами среди вековых сосен. В каждом номере — тишина и чистый хвойный воздух.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1 bg-stone-200/80 rounded-xl">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Все варианты
            </button>
            <button
              onClick={() => setSelectedFilter('cottage')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'cottage' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Эко-коттеджи
            </button>
            <button
              onClick={() => setSelectedFilter('standard')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'standard' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Корпус СССР
            </button>
            <button
              onClick={() => setSelectedFilter('suite')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'suite' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Панорамные сьюты
            </button>
          </div>
        </div>

        {/* Room cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={room.image}
                    alt={room.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {room.isPopular && (
                      <span className="bg-emerald-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        Хит бронирования
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded">
                    {room.view}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-stone-900 font-semibold">{room.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-stone-500 mt-1">
                        <span>{room.capacity}</span>
                        <span>·</span>
                        <span>{room.sizeM2} м²</span>
                        <span>·</span>
                        <span>{room.bedType}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-2xl font-bold font-serif text-emerald-900">
                        {room.pricePerNight.toLocaleString()} сом
                      </span>
                      <span className="text-[11px] text-stone-500 block">/ сутки</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-stone-600 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                      В номере:
                    </span>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                      {room.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedRoomForCalc(room);
                    const calcEl = document.getElementById('price-calculator');
                    calcEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 py-2.5 px-3 rounded-lg border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Рассчитать стоимость
                </button>

                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <span>Забронировать</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pricing Calculator Panel */}
        <div id="price-calculator" className="mt-20 bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Интерактивный расчет проживания
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Калькулятор отдыха в ololo Ак-Жол
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Выберите даты, тип питания и эко-активности для прозрачного расчета стоимости
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Chosen Room */}
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1.5">
                  Категория проживания:
                </label>
                <select
                  value={selectedRoomForCalc.id}
                  onChange={(e) => {
                    const r = ROOMS.find((item) => item.id === e.target.value);
                    if (r) setSelectedRoomForCalc(r);
                  }}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} — {r.pricePerNight.toLocaleString()} сом/сутки
                    </option>
                  ))}
                </select>
              </div>

              {/* Nights and Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-stone-300 block mb-1.5">
                    Количество ночей:
                  </label>
                  <div className="flex items-center gap-3 bg-stone-800 border border-stone-700 rounded-xl p-2 px-3">
                    <button
                      onClick={() => setNights(Math.max(1, nights - 1))}
                      className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center font-bold hover:bg-stone-600 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-sm">{nights} {nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'}</span>
                    <button
                      onClick={() => setNights(nights + 1)}
                      className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center font-bold hover:bg-stone-600 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-300 block mb-1.5">
                    Количество гостей:
                  </label>
                  <div className="flex items-center gap-3 bg-stone-800 border border-stone-700 rounded-xl p-2 px-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center font-bold hover:bg-stone-600 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-sm">{guests} {guests === 1 ? 'взрослый' : 'гостя'}</span>
                    <button
                      onClick={() => setGuests(Math.min(6, guests + 1))}
                      className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center font-bold hover:bg-stone-600 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Meal Plan */}
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1.5">
                  Питание в пансионате:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setMealPlan('breakfast')}
                    className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      mealPlan === 'breakfast'
                        ? 'border-emerald-500 bg-emerald-950/80 text-white font-semibold'
                        : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    <div className="font-medium">Эко-завтраки</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">+600 сом/день чел.</div>
                  </button>

                  <button
                    onClick={() => setMealPlan('fullBoard')}
                    className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      mealPlan === 'fullBoard'
                        ? 'border-emerald-500 bg-emerald-950/80 text-white font-semibold'
                        : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    <div className="font-medium">3-раз. питание</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">+1 400 сом/день чел.</div>
                  </button>

                  <button
                    onClick={() => setMealPlan('none')}
                    className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      mealPlan === 'none'
                        ? 'border-emerald-500 bg-emerald-950/80 text-white font-semibold'
                        : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    <div className="font-medium">Без питания</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Кафе и бар по меню</div>
                  </button>
                </div>
              </div>

              {/* Addons toggles */}
              <div className="space-y-2 pt-1">
                <label
                  onClick={() => setIncludeSupPass(!includeSupPass)}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-800/70 border border-stone-700 cursor-pointer hover:border-stone-600"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSupPass}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-stone-700 border-stone-600"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">Безлимитный абонемент на SUP-борды</span>
                      <span className="text-[11px] text-stone-400">Катайтесь на рассвете и закате в любое время</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">800 сом/день</span>
                </label>

                <label
                  onClick={() => setIncludeTransfer(!includeTransfer)}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-800/70 border border-stone-700 cursor-pointer hover:border-stone-600"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeTransfer}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-stone-700 border-stone-600"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">Трансфер из Бишкека / Аэропорта Тамчы</span>
                      <span className="text-[11px] text-stone-400">Комфортный авто с кондиционером и багажником</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">3 800 сом</span>
                </label>
              </div>
            </div>

            {/* Price Receipt Summary */}
            <div className="lg:col-span-5 bg-stone-950 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-stone-200 border-b border-stone-800 pb-3 flex items-center justify-between">
                  <span>Расчет стоимости</span>
                  <span className="text-xs font-normal text-emerald-400">Гарантия лучшей цены</span>
                </h4>

                <div className="space-y-3 py-4 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>{selectedRoomForCalc.title} ({nights} ноч.)</span>
                    <span className="font-semibold text-white">{baseRoomTotal.toLocaleString()} сом</span>
                  </div>

                  {mealPlan !== 'none' && (
                    <div className="flex justify-between">
                      <span>Питание ({guests} гостей × {nights} ноч.)</span>
                      <span className="font-semibold text-white">{mealTotal.toLocaleString()} сом</span>
                    </div>
                  )}

                  {includeSupPass && (
                    <div className="flex justify-between">
                      <span>Безлимит SUP ({nights} дн.)</span>
                      <span className="font-semibold text-white">{supPassTotal.toLocaleString()} сом</span>
                    </div>
                  )}

                  {includeTransfer && (
                    <div className="flex justify-between">
                      <span>Индивидуальный трансфер</span>
                      <span className="font-semibold text-white">{transferTotal.toLocaleString()} сом</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-stone-800 pt-4 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-stone-300">Итоговая стоимость:</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold font-serif text-emerald-400">
                      {grandTotal.toLocaleString()} сом
                    </span>
                    <span className="text-[10px] text-stone-500 block">Без скрытых сборов и налогов</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 space-y-3">
                <button
                  onClick={() => onOpenBooking(selectedRoomForCalc.id)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Перейти к бронированию</span>
                </button>
                <p className="text-[11px] text-stone-400 text-center">
                  Бесплатная отмена за 7 дней до заезда. Оплата картами Элкарт, Visa, МИР или в сомах наличными.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
