import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcoManifesto } from './components/EcoManifesto';
import { SovietPark } from './components/SovietPark';
import { SupStation } from './components/SupStation';
import { BeachBar } from './components/BeachBar';
import { Accommodations } from './components/Accommodations';
import { ResortMap } from './components/ResortMap';
import { ReviewsAndFAQ } from './components/ReviewsAndFAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SupExperience } from './types';
import { ROOMS } from './data/mockData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalRoomId, setModalRoomId] = useState<string>(ROOMS[0].id);
  const [modalSupProgram, setModalSupProgram] = useState<SupExperience | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setModalRoomId(roomId);
    }
    setModalSupProgram(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenSupBooking = (program: SupExperience) => {
    setModalSupProgram(program);
    setIsBookingOpen(true);
  };

  const scrollToPark = () => {
    document.getElementById('park')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSup = () => {
    document.getElementById('sup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-800 selection:text-white">
      {/* Sticky Navigation Header with live lake indicators & sound toggle */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero section */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePark={scrollToPark}
          onExploreSup={scrollToSup}
        />

        {/* Eco & Silence Manifesto: Zero Motorboats, Zero Steamers, Zero Jet Skis */}
        <EcoManifesto />

        {/* Historic Soviet Park: 16 hectares of mature pines & spruces */}
        <SovietPark />

        {/* SUP Boarding Station: The Only Watercraft Allowed */}
        <SupStation onOpenSupBookingModal={handleOpenSupBooking} />

        {/* Beach Bar: Cocktails, mountain herbal teas, and sunset bonfires */}
        <BeachBar />

        {/* Accommodations & Interactive Pricing Calculator */}
        <Accommodations onOpenBooking={handleOpenBooking} />

        {/* Interactive Resort Territory Map */}
        <ResortMap />

        {/* Real Guest Experiences & FAQs */}
        <ReviewsAndFAQ />
      </main>

      {/* Footer & Contacts */}
      <Footer />

      {/* Booking & Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={modalRoomId}
        initialSupProgram={modalSupProgram}
      />
    </div>
  );
}
