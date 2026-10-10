import React, { useState } from 'react';
import { Star, MessageCircle, ChevronDown, ChevronUp, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS, FAQS } from '../data/mockData';

export const ReviewsAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-stone-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Впечатления гостей</span>
              <span aria-hidden="true">·</span>
              <span>ololo Community</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
              «Здесь наконец-то слышно <br className="hidden sm:inline" />
              <span className="italic text-emerald-900">свои мысли и озеро»</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic font-serif">
                    «{rev.text}»
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-stone-900">{rev.name}</h4>
                    <span className="text-stone-500 text-[11px]">{rev.location} · {rev.stayed}</span>
                  </div>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {rev.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
              Вопросы и ответы
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">
              Все детали об отдыхе в ololo Ак-Жол
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50"
                  >
                    <span className="font-medium text-stone-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className="text-stone-400 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-800" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
