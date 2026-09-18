import React from 'react';
import { motion } from 'motion/react';
import { CornerRightDown } from 'lucide-react';
import ScheduleSection from './components/ScheduleSection';
import ParticipateSection from './components/ParticipateSection';
import LectureDetail from './components/LectureDetail';
import Motif from './components/Motif';
import { getLectureById, LECTURE_PAGES_ENABLED } from './data/lectures';
import { useRoute } from './routing';

const NAV = [
  { id: 'about-section', label: 'About' },
  { id: 'schedule-section', label: 'Schedule' },
  { id: 'participate-section', label: 'Participate' },
];

export default function App() {
  const route = useRoute();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Individual lecture pages. An unknown id, or the feature switched off,
  // falls through to the home page.
  if (LECTURE_PAGES_ENABLED && route.kind === 'lecture') {
    const lecture = getLectureById(route.id);
    if (lecture) return <LectureDetail lecture={lecture} />;
  }

  return (
    <div className="relative min-h-screen bg-clay-700 text-sand-100 selection:bg-sand-100/20 selection:text-white">

      <div className="relative z-10">

        {/* Navigation */}
        <header className="sticky top-0 z-40 bg-clay-700/90 backdrop-blur border-b border-sand-100/10">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-center sm:justify-between gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden sm:block font-serif font-semibold text-sm md:text-base text-sand-50 tracking-tight text-left shrink-0"
            >
              Games &amp; Global Asia
            </button>

            <nav className="flex items-center gap-5 sm:gap-6 text-[10px] font-semibold uppercase tracking-widest text-sand-300">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-sand-50 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Poster motif, set opposite the title the way the printed poster
              sets it opposite the series name. */}
          <div className="pointer-events-none absolute inset-0 max-w-5xl mx-auto px-6" aria-hidden="true">
            <Motif
              variant="flag"
              className="hidden lg:block absolute right-0 top-2 w-[230px] xl:w-[260px] h-[430px] text-sand-100"
            />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.35em] text-sand-400 font-semibold mb-6"
            >
              2026 &ndash;2027 &middot;
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-sand-50 leading-[1.08] max-w-3xl"
            >
              Games and Global Asia<br className="hidden sm:block" />{' '}
              <span className="italic font-medium">Lecture Series</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('schedule-section')}
                className="text-sand-100 hover:text-white transition flex items-center gap-2"
                id="scroll-explore-btn"
              >
                <span className="text-[10px] uppercase tracking-widest font-semibold">
                  See the schedule
                </span>
                <CornerRightDown className="w-4 h-4 animate-bounce" />
              </button>
            </motion.div>
          </div>
        </section>

        <main>

          {/* About the series */}
          <section id="about-section" className="scroll-mt-16 px-6 py-20 border-t border-sand-100/10">
            <div className="max-w-5xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold block mb-3">
                About the Series
              </span>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-xl md:text-2xl leading-relaxed text-sand-100 max-w-4xl"
              >
                This lecture series invites scholars from different fields to explore the
                transformative potential of Asian and Asian diasporic traditions for reimagining
                gaming technologies and challenging dominant Eurocentric paradigms. Rather than
                seeing Asia as a fixed location, we understand it as a nexus of communities,
                traditions, religions, cultures, and technologies.
                Please join us to explore the often-overlooked histories of games and play in Asia,
                learn from lived local experiences of games and play across the region, and discuss
                methodologies for engaging with Asian history and gaming
                technology research.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base font-light leading-relaxed text-sand-300/90 max-w-3xl mt-6"
              >
              
              </motion.p>
            </div>
          </section>

          <ScheduleSection />
          <ParticipateSection />

        </main>

        {/* Footer */}
        <footer className="bg-clay-900 border-t border-sand-100/10 px-6 py-16">
          <div className="max-w-5xl mx-auto space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold mb-4">
                  Organizers
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-serif font-semibold text-sand-50">Haoran Chang</p>
                    <p className="text-xs text-sand-400 font-light mt-0.5">York University</p>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-sand-50">Samuel Pizelo</p>
                    <p className="text-xs text-sand-400 font-light mt-0.5">
                      University of Toronto, Mississauga
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold mb-4">
                  Support
                </h4>
                <p className="text-xs leading-relaxed text-sand-300/80 font-light max-w-md">
                  This lecture series is supported by the ICCIT SimLab at the University of Toronto,
                  Mississauga, the Centre for Culture and Technology (CCT), the UTM Department of
                  English and Drama, and the York Centre for Asian Research (YCAR).
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-sand-100/10">
              <p className="text-[11px] text-sand-400/60 font-light">
                &copy; 2026 Games and Global Asia
              </p>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
