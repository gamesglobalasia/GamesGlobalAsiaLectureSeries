import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import type { Lecture } from '../data/lectures';
import { goHomeToSchedule } from '../routing';
import { initials } from './ScheduleSection';
import Motif from './Motif';

function MetaRow({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="w-4 h-4 text-sand-400 mt-1 shrink-0" />
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-sand-400 font-semibold">{label}</p>
        <p className="text-sm text-sand-100 font-light mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export default function LectureDetail({ lecture }: { lecture: Lecture }) {
  const { detail } = lecture;

  // Arriving on a detail page should start at the top, not wherever the
  // schedule was scrolled to.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [lecture.id]);

  useEffect(() => {
    document.title = `${lecture.name} — Games and Global Asian Lecture Series`;
    return () => {
      document.title = 'Games and Global Asian Lecture Series';
    };
  }, [lecture.id, lecture.name]);

  return (
    <div className="min-h-screen bg-clay-700 text-sand-100">

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-clay-700/90 backdrop-blur border-b border-sand-100/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <button
            onClick={goHomeToSchedule}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-sand-300 hover:text-sand-50 transition"
            id="back-to-schedule"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to schedule</span>
          </button>

          <span className="hidden sm:block font-serif font-semibold text-sm text-sand-50 tracking-tight">
            Games &amp; Global Asia
          </span>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative max-w-5xl mx-auto px-6 py-16 md:py-20"
      >
        <Motif
          variant="spine"
          className="hidden xl:block absolute right-0 top-12 w-[115px] h-[320px] text-sand-100/60"
        />

        {/* Title block */}
        <p className="text-[11px] uppercase tracking-[0.35em] text-sand-400 font-semibold mb-6">
          {lecture.date}
        </p>

        <h1 className="font-serif text-3xl md:text-5xl leading-[1.15] text-sand-50 max-w-4xl">
          {detail.title}
        </h1>

        {/* Speaker */}
        <div className="flex items-center gap-5 mt-10">
          <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-sand-100/25 bg-clay-800 flex items-center justify-center select-none">
            {lecture.photo ? (
              <img src={lecture.photo} alt={lecture.name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-serif text-2xl text-sand-300 tracking-wide">
                {initials(lecture.name)}
              </span>
            )}
          </div>
          <div>
            <h2 className="font-serif font-semibold text-2xl md:text-3xl text-sand-50">
              {lecture.name}
            </h2>
            <p className="text-sm text-sand-300/90 font-light leading-relaxed mt-1 max-w-2xl">
              {lecture.affiliation}
            </p>
          </div>
        </div>

        {/* When and where */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 py-8 border-y border-sand-100/10">
          <MetaRow icon={Calendar} label="Date" value={lecture.date} />
          <MetaRow icon={Clock} label="Time" value={detail.time} />
          <MetaRow icon={MapPin} label="Location" value={detail.location} />
        </div>

        {/* Abstract */}
        <section className="mt-12 max-w-3xl">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold mb-4">
            Abstract
          </h3>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-sand-100 whitespace-pre-line">
            {detail.abstract}
          </p>
        </section>

        {/* Bio */}
        <section className="mt-12 max-w-3xl">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold mb-4">
            About the Presenter
          </h3>
          <p className="text-sm md:text-base font-light leading-relaxed text-sand-300/90 whitespace-pre-line">
            {detail.bio}
          </p>
        </section>

        {/* Video documentation — rendered only when a recording exists, so an
            absent video leaves no gap on the page. */}
        {detail.videoUrl && (
          <section className="mt-12">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold mb-4">
              Video Documentation
            </h3>
            <div className="relative w-full aspect-video border border-sand-100/15 bg-clay-900 overflow-hidden">
              <iframe
                src={detail.videoUrl}
                title={`${lecture.name} — ${detail.title}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <div className="mt-16 pt-8 border-t border-sand-100/10">
          <button
            onClick={goHomeToSchedule}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-sand-300 hover:text-sand-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to schedule</span>
          </button>
        </div>

      </motion.main>
    </div>
  );
}
