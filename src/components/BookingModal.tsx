import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Users, ShieldCheck, Sparkles, Phone, Mail, User, Compass, ArrowRight } from 'lucide-react';
import { ROOMS, SUP_PROGRAMS } from '../data/mockData';
import { RoomType, SupExperience } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialSupProgram?: SupExperience;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialSupProgram,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || ROOMS[0].id);
  const [selectedSupId, setSelectedSupId] = useState<string>(initialSupProgram?.id || '');
  
  // Dates
  const [checkIn, setCheckIn] = useState<string>('2026-06-15');
  const [checkOut, setCheckOut] = useState<string>('2026-06-18');
  const [guests, setGuests] = useState<number>(2);
  const [mealPlan, setMealPlan] = useState<'breakfast' | 'fullBoard' | 'none'>('breakfast');
  const [includeSupPass, setIncludeSupPass] = useState<boolean>(true);

  // Guest details
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Confirmation state
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
    if (initialSupProgram) {
      setSelectedSupId(initialSupProgram.id);
    }
    setBookingConfirmed(false);
  }, [initialRoomId, initialSupProgram, isOpen]);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];
  const currentSup = SUP_PROGRAMS.find((s) => s.id === selectedSupId);

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((dOut.getTime() - dIn.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime < 1 ? 1 : diffTime;

  // Total
  const roomPrice = currentRoom.pricePerNight * nights;
  const mealPrice = (mealPlan === 'breakfast' ? 600 : mealPlan === 'fullBoard' ? 1400 : 0) * guests * nights;
  const supPassPrice = includeSupPass ? 800 * nights : 0;
  const supProgramExtra = currentSup ? currentSup.price : 0;
  const totalPrice = roomPrice + mealPrice + supPassPrice + supProgramExtra;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'OZ-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setBookingConfirmed(true);

    // Save locally
    const existing = JSON.parse(localStorage.getItem('ololo_bookings') || '[]');
    existing.push({
      refCode,
      roomTitle: currentRoom.title,
      checkIn,
      checkOut,
      nights,
      guests,
      guestName,
      guestPhone,
      totalPrice,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('ololo_bookings', JSON.stringify(existing));
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Здравствуйте, ololo Ак-Жол! Я хочу подтвердить бронь #${bookingRef}:\n` +
      `Номер: ${currentRoom.title}\n` +
      `Даты: ${checkIn} — ${checkOut} (${nights} ноч.)\n` +
      `Гостей: ${guests}\n` +
      `Имя: ${guestName || 'Гость'}\n` +
      `Телефон: ${guestPhone}\n` +
      `Итоговая сумма: ${totalPrice.toLocaleString()} сом`
    );
    return `https://wa.me/996555123456?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 px-6 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-medium text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Бронирование в ololo Ак-Жол</span>
            </h3>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Тихий отдых без катеров · Реликтовый парк СССР · Иссык-Куль
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block">
                Бронь успешно зарегистрирована!
              </span>
              <h4 className="text-2xl font-serif text-stone-900 mt-1">
                Номер брони: <span className="text-emerald-900 font-bold">{bookingRef}</span>
              </h4>
              <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto">
                Мы забронировали <strong>{currentRoom.title}</strong> с {checkIn} по {checkOut} ({nights} {nights === 1 ? 'ночь' : 'ночи'}) для {guests} гостей.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-stone-500">Гость:</span>
                <span className="font-semibold text-stone-800">{guestName || 'Гость ololo'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Телефон / WhatsApp:</span>
                <span className="font-semibold text-stone-800">{guestPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Сумма к оплате:</span>
                <span className="font-bold text-emerald-900 font-serif text-sm">{totalPrice.toLocaleString()} сом</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow flex items-center justify-center gap-2"
              >
                <span>Подтвердить в WhatsApp администратору</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-50 cursor-pointer"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            {/* Room selection */}
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">
                Выберите номер или коттедж:
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full border border-stone-300 rounded-lg p-2.5 text-xs text-stone-800 focus:outline-none focus:border-emerald-600"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title} — {r.pricePerNight.toLocaleString()} сом/сутки
                  </option>
                ))}
              </select>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Дата заезда:
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg p-2 text-xs text-stone-800"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Дата выезда:
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg p-2 text-xs text-stone-800"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Количество гостей:
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full border border-stone-300 rounded-lg p-2 text-xs text-stone-800"
                >
                  <option value={1}>1 гость</option>
                  <option value={2}>2 гостя</option>
                  <option value={3}>3 гостя</option>
                  <option value={4}>4 гостя</option>
                  <option value={5}>5+ гостей</option>
                </select>
              </div>
            </div>

            {/* Meal Plan & SUP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Питание:
                </label>
                <select
                  value={mealPlan}
                  onChange={(e) => setMealPlan(e.target.value as any)}
                  className="w-full border border-stone-300 rounded-lg p-2 text-xs text-stone-800"
                >
                  <option value="breakfast">Эко-завтраки (+600 сом/чел)</option>
                  <option value="fullBoard">3-разовое эко-питание (+1 400 сом/чел)</option>
                  <option value="none">Без питания (по меню бара)</option>
                </select>
              </div>

              <div className="flex items-center pt-5">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                  <input
                    type="checkbox"
                    checked={includeSupPass}
                    onChange={(e) => setIncludeSupPass(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                  />
                  <span>Безлимитный SUP-абонемент (+800 сом/день)</span>
                </label>
              </div>
            </div>

            {/* Guest Contacts */}
            <div className="border-t border-stone-200 pt-4 space-y-3">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">
                Контактные данные гостя:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя и фамилия"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg p-2.5 text-xs text-stone-800"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Телефон / WhatsApp (+996...)"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg p-2.5 text-xs text-stone-800"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Пожелания (тихий номер, трансфер из аэропорта, детская кроватка...)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg p-2 text-xs text-stone-800"
                />
              </div>
            </div>

            {/* Total and Submit */}
            <div className="border-t border-stone-200 pt-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 block">Предварительный расчет ({nights} ноч.):</span>
                <span className="text-2xl font-bold font-serif text-emerald-900">
                  {totalPrice.toLocaleString()} сом
                </span>
              </div>

              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Подтвердить бронь</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
