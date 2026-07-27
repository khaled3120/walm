import React, { useState } from 'react';
import {
  ArrowRight,
  Star,
  ShoppingBag,
  LayoutGrid,
  MousePointerClick,
  Mail,
  ClipboardList,
  Gift,
  Trophy,
  Sparkles,
  Plus,
  ChevronUp,
  ChevronDown,
  X,
  CheckCircle2,
  Lock,
  Home,
  Tv,
} from 'lucide-react';

import user1Img from './assets/user1.jpg';
import user2Img from './assets/user2.jpg';
import user3Img from './assets/user3.jpg';

const AFFILIATE_URL = 'https://linkthem.net/aff_c?offer_id=3004&aff_id=144760';

const WALMART_CARDS = [
  {
    icon: Home,
    title: 'Home, Kitchen & Patio',
    description:
      'Kitchenware, cookware, patio furniture, vacuums, bedding, and home storage solutions.',
  },
  {
    icon: Tv,
    title: 'Electronics & Tech Rollbacks',
    description:
      'Smart TVs, laptops, gaming consoles, wireless headphones, tablets, and smart devices.',
  },
  {
    icon: Sparkles,
    title: 'Beauty, Health & Personal Care',
    description:
      'Trending skincare sets, cosmetics, hair styling tools, vitamins, and wellness essentials.',
  },
  {
    icon: ShoppingBag,
    title: 'Groceries & Apparel Deals',
    description:
      'Everyday low price pantry staples, snacks, beverages, family fashion, and seasonal gear.',
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ expanded by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');

  const handleApplyClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = AFFILIATE_URL;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
    setModalStep(1);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#0071DC] selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0071DC] via-[#0051A5] to-[#003369] text-white pt-12 pb-16 sm:pt-20 sm:pb-28 px-4 sm:px-6">
        {/* Softer, subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-sky-300/20 blur-[130px] pointer-events-none rounded-full" />

        {/* Floating wireframe outline icons */}
        <div className="absolute top-12 left-[6%] md:left-[12%] text-white/15 pointer-events-none">
          <Star className="w-7 h-7 sm:w-10 sm:h-10 stroke-[1.5]" />
        </div>
        <div className="absolute bottom-12 left-[5%] md:left-[8%] text-white/15 pointer-events-none">
          <ShoppingBag className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.5]" />
        </div>
        <div className="absolute top-16 right-[6%] md:right-[12%] text-white/15 pointer-events-none">
          <LayoutGrid className="w-7 h-7 sm:w-10 sm:h-10 stroke-[1.5]" />
        </div>

        <div className="relative max-w-2xl sm:max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Applications Open Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 text-xs sm:text-sm text-sky-100 font-semibold mb-8 shadow-inner backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC220] animate-pulse" />
            <span>Applications Open</span>
          </div>

          {/* Headline with Spark Yellow Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-3xl">
            The <span className="text-[#FFC220]">Walmart Discounts</span> They Don't Advertise
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-sky-100/90 font-normal max-w-xl mx-auto mb-9 leading-relaxed px-1">
            Discover how shoppers are unlocking hidden discount codes on groceries, electronics, home goods, apparel, and Rollback deals.
          </p>

          {/* Apply Now Button */}
          <a
            href={AFFILIATE_URL}
            onClick={handleApplyClick}
            id="hero-apply-btn"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0071DC] hover:bg-sky-50 active:scale-95 font-bold text-lg px-9 py-4 rounded-full shadow-xl transition-all duration-200 cursor-pointer mb-8"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {/* Avatars Social Proof Row */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2.5 items-center">
              <img
                src={user1Img}
                alt="Shopper 1"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="inline-block h-10 w-10 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover object-center shadow-sm shrink-0 aspect-square"
              />
              <img
                src={user2Img}
                alt="Shopper 2"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="inline-block h-10 w-10 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover object-center shadow-sm shrink-0 aspect-square"
              />
              <img
                src={user3Img}
                alt="Shopper 3"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="inline-block h-10 w-10 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover object-center shadow-sm shrink-0 aspect-square"
              />
            </div>
            <span className="text-xs sm:text-sm text-blue-100/90 text-center font-medium leading-snug max-w-[210px] block">
              Join 12,000+ readers<br />who've already claimed<br />their discounts
            </span>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0071DC] uppercase block mb-2">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Five Simple Steps to<br />Claiming Your Discounts
            </h2>
          </div>

          {/* Alternating Center Timeline on Desktop, Left-aligned on Mobile */}
          <div className="relative">
            {/* Center Vertical Line on Desktop / Left on Mobile */}
            <div className="absolute left-4 md:left-1/2 top-6 bottom-10 -translate-x-1/2 w-0.5 bg-[#0071DC]/80" />

            <div className="space-y-10 sm:space-y-12">
              {/* STEP 1 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Center Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0071DC] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md z-10 shrink-0">
                  1
                </div>

                {/* Left Side: Card on desktop */}
                <div className="pl-12 md:pl-0 w-full flex justify-end">
                  <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                    <div className="text-left md:text-right">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                        Click apply now
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Start your application — it takes seconds.
                      </p>
                    </div>
                    <div className="shrink-0 p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#0071DC]">
                      <MousePointerClick className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Giant Watermark '01' on desktop */}
                <div className="hidden md:flex justify-start items-center pl-6">
                  <span className="text-6xl lg:text-7xl font-black text-slate-200 tracking-tighter select-none">
                    01
                  </span>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Center Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0071DC] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md z-10 shrink-0">
                  2
                </div>

                {/* Left Side: Giant Watermark '02' on desktop */}
                <div className="hidden md:flex justify-end items-center pr-6">
                  <span className="text-6xl lg:text-7xl font-black text-slate-200 tracking-tighter select-none">
                    02
                  </span>
                </div>

                {/* Right Side: Card on desktop */}
                <div className="pl-12 md:pl-0 w-full flex justify-start">
                  <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                    <div className="shrink-0 p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#0071DC]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                        Enter your email
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Quick 30-second signup process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Center Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0071DC] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md z-10 shrink-0">
                  3
                </div>

                {/* Left Side: Card on desktop */}
                <div className="pl-12 md:pl-0 w-full flex justify-end">
                  <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                    <div className="text-left md:text-right">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                        Complete the survey
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Share your shopping preferences.
                      </p>
                    </div>
                    <div className="shrink-0 p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#0071DC]">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Giant Watermark '03' on desktop */}
                <div className="hidden md:flex justify-start items-center pl-6">
                  <span className="text-6xl lg:text-7xl font-black text-slate-200 tracking-tighter select-none">
                    03
                  </span>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Center Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0071DC] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md z-10 shrink-0">
                  4
                </div>

                {/* Left Side: Giant Watermark '04' on desktop */}
                <div className="hidden md:flex justify-end items-center pr-6">
                  <span className="text-6xl lg:text-7xl font-black text-slate-200 tracking-tighter select-none">
                    04
                  </span>
                </div>

                {/* Right Side: Card on desktop */}
                <div className="pl-12 md:pl-0 w-full flex justify-start">
                  <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                    <div className="shrink-0 p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#0071DC]">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                        Complete 5+ deals
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Simple tasks like app downloads & trials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 5 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Center Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0071DC] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md z-10 shrink-0">
                  5
                </div>

                {/* Left Side: Card on desktop */}
                <div className="pl-12 md:pl-0 w-full flex justify-end">
                  <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                    <div className="text-left md:text-right">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                        Get your discount
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Delivered straight to your inbox.
                      </p>
                    </div>
                    <div className="shrink-0 p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#0071DC]">
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Giant Watermark '05' on desktop */}
                <div className="hidden md:flex justify-start items-center pl-6">
                  <span className="text-6xl lg:text-7xl font-black text-slate-200 tracking-tighter select-none">
                    05
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Brand Button */}
          <div className="mt-14 sm:mt-18 text-center">
            <a
              href={AFFILIATE_URL}
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0071DC] hover:bg-[#005BB5] text-white active:scale-95 font-bold text-lg px-9 py-4 rounded-full shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= UNLOCK REWARDS SECTION ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa] text-slate-900 border-t border-slate-200/60">
        <div className="max-w-xl sm:max-w-3xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0071DC] uppercase block mb-3">
              UNLOCK REWARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What You Can Do With Your Discount Code
            </h2>
          </div>

          {/* Cards Stack */}
          <div className="space-y-4">
            {WALMART_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4"
                >
                  <div className="absolute top-4 right-4 text-slate-400">
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="p-3 rounded-xl shrink-0 bg-sky-50 border border-sky-100 text-[#0071DC]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-left pr-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa] text-slate-900 border-t border-slate-200/60">
        <div className="max-w-xl sm:max-w-2xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0071DC] uppercase block mb-3">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3.5">
            {/* FAQ 1 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-2">
                  What are deals?
                </span>
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                    openFaq === 0
                      ? 'bg-[#0071DC] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {openFaq === 0 ? (
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>
              {openFaq === 0 && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3.5">
                  Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-2">
                  How many do I need?
                </span>
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                    openFaq === 1
                      ? 'bg-[#0071DC] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {openFaq === 1 ? (
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>
              {openFaq === 1 && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3.5">
                  Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-2">
                  How long do they take?
                </span>
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                    openFaq === 2
                      ? 'bg-[#0071DC] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {openFaq === 2 ? (
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>
              {openFaq === 2 && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3.5">
                  Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0071DC] via-[#0051A5] to-[#003369] text-white py-16 sm:py-24 px-4 sm:px-6 text-center">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-sky-300/20 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          {/* Applications Open Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 text-xs sm:text-sm font-semibold mb-8 shadow-inner backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC220] animate-pulse" />
            <span>Applications Open</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Ready to Start Saving?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-sky-100/90 font-normal max-w-md sm:max-w-xl mx-auto mb-9 leading-relaxed px-2">
            Join thousands of shoppers who have already claimed their Walmart discount code. Your next deal is just a few clicks away.
          </p>

          {/* White Pill Button */}
          <a
            href={AFFILIATE_URL}
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center gap-3 bg-white text-[#0071DC] hover:bg-sky-50 active:scale-95 font-bold text-lg px-9 py-4 rounded-full shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </section>

      {/* Simple Clean Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 text-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalStep === 1 ? (
              <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
                <div className="text-center mb-3">
                  <div className="w-11 h-11 rounded-full bg-sky-50 text-[#0071DC] flex items-center justify-center mx-auto mb-2">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Walmart Reward Portal
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Enter your email to verify application eligibility.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-slate-900 outline-none text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0071DC] hover:bg-[#005BB5] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>100% Free • No credit card required</span>
                </p>
              </form>
            ) : (
              <div className="py-3 space-y-3">
                <div className="w-11 h-11 rounded-full bg-sky-50 text-[#0071DC] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Application Sent!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We've emailed your Walmart discount confirmation link to{' '}
                  <strong>{email}</strong>. Check your inbox to complete the 30-second verification.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-2.5 bg-[#0071DC] hover:bg-[#005BB5] text-white font-bold rounded-xl text-xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
