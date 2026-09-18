import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { REGISTRATION_URL, CONTACT_EMAIL } from '../data/lectures';

export default function ParticipateSection() {
  const hasRegistration = Boolean(REGISTRATION_URL);

  return (
    <section id="participate-section" className="relative scroll-mt-16 py-20 px-6 border-t border-sand-100/10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-400 font-semibold block mb-3">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-sand-50">
            How to Participate
          </h2>
          <p className="text-sm md:text-base text-sand-300/90 font-light leading-relaxed mt-5">
             Please register for the series  to receive updates and Zoom Link invitations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={hasRegistration ? REGISTRATION_URL : undefined}
              target={hasRegistration ? '_blank' : undefined}
              rel="noreferrer"
              aria-disabled={!hasRegistration}
              className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 border text-sm font-semibold uppercase tracking-widest transition ${
                hasRegistration
                  ? 'bg-sand-50 text-clay-900 border-sand-50 hover:bg-transparent hover:text-sand-50'
                  : 'border-sand-100/25 text-sand-300/60 cursor-default'
              }`}
              id="register-link"
            >
              <span>{hasRegistration ? 'Register' : 'Register Link'}</span>
              {hasRegistration && (
                <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </a>

            {CONTACT_EMAIL && (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-sand-100/25 text-sand-100 text-sm font-semibold uppercase tracking-widest hover:border-sand-100/60 transition"
              >
                <Mail className="w-4 h-4" />
                <span>Email the organizers</span>
              </a>
            )}
          </div>

          {!CONTACT_EMAIL && (
            <p className="text-xs text-sand-400 font-light mt-5">
              Questions? Please Email: gamesglobalasia@gmail.com
            </p>
          )}
        </motion.div>

      </div>
    </section>
  );
}
