import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { lectures, LECTURE_PAGES_ENABLED, type Lecture } from '../data/lectures';
import { lectureHref } from '../routing';

export function initials(name: string) {
  // "Mayshu (Meixu) Zhan" -> "MZ"
  const parts = name.replace(/\(.*?\)/g, '').trim().split(/[\s-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '')).toUpperCase();
}

function Portrait({ lecture }: { lecture: Lecture }) {
  return (
    <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border border-sand-100/25 bg-clay-800 flex items-center justify-center select-none">
      {lecture.photo ? (
        <img
          src={lecture.photo}
          alt={lecture.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-serif text-xl md:text-2xl text-sand-300 tracking-wide">
          {initials(lecture.name)}
        </span>
      )}
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section id="schedule-section" className="relative scroll-mt-16 py-20 px-6 border-t border-sand-100/10">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold block mb-3">
            2026&ndash;2027 Season
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-sand-50">
            Lecture Schedule
          </h2>
        </div>

        <ol className="relative">
          {/* Thread running the length of the season */}
          <span
            aria-hidden="true"
            className="absolute left-[31px] md:left-[47px] top-6 bottom-20 w-px bg-sand-100/15"
          />

          {lectures.map((lecture, i) => (
            <motion.li
              key={lecture.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.06 }}
              className="relative flex gap-4 md:gap-8 pb-12 last:pb-0"
            >
              <div className="relative z-10">
                {LECTURE_PAGES_ENABLED ? (
                  <a href={lectureHref(lecture.id)} tabIndex={-1} aria-hidden="true">
                    <Portrait lecture={lecture} />
                  </a>
                ) : (
                  <Portrait lecture={lecture} />
                )}
              </div>

              <div className="flex-1 pt-1">
                <p className="font-serif italic text-lg md:text-xl text-sand-300">
                  {lecture.date}
                </p>
                <h3 className="font-serif font-semibold text-xl md:text-2xl text-sand-50 mt-1">
                  {LECTURE_PAGES_ENABLED ? (
                    <a
                      href={lectureHref(lecture.id)}
                      className="group inline-flex items-baseline gap-1.5 hover:text-white transition decoration-sand-100/40 underline-offset-[6px] hover:underline"
                    >
                      <span>{lecture.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-sand-400 opacity-0 group-hover:opacity-100 transition self-center" />
                    </a>
                  ) : (
                    lecture.name
                  )}
                </h3>
                <p className="text-sm md:text-base text-sand-300/90 font-light leading-relaxed mt-1.5 max-w-3xl">
                  {lecture.affiliation}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 ml-[80px] md:ml-[128px] font-serif italic text-lg text-sand-300"
        >
        
        </motion.p>

      </div>
    </section>
  );
}
