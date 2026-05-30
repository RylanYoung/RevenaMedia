'use client'

import Reveal from './Reveal'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h3l1.5 4.5L7.5 10a12 12 0 0 0 6.5 6.5l1.5-2 4.5 1.5V20a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
  </svg>
)

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5h16M7 12h10M10 19h4" />
  </svg>
)

const CalendarCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v4M16 3v4M8.5 14l2.2 2.2L15.5 12" />
  </svg>
)

const steps = [
  {
    icon: <PhoneIcon />,
    label: 'The call comes in',
    sub: 'AI picks up instantly — no voicemail',
    filled: false,
  },
  {
    icon: <FilterIcon />,
    label: 'It qualifies the job',
    sub: 'Captures name, job type, address & urgency',
    filled: true,
  },
  {
    icon: <CalendarCheckIcon />,
    label: 'Booking confirmed',
    sub: 'Lands in your calendar — you get notified',
    filled: false,
  },
]

export default function HowItWorks() {
  return (
    <section className="block how" id="how" aria-label="How it works">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="tag">How it works</span>
          <h2>
            <span className="light">From ring to </span>booked
            <span className="light"> in seconds.</span>
          </h2>
          <p>
            No apps to learn, no buttons to press. Revena runs the whole job from the first ring to
            the calendar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="how-card">
          <div className="flow" role="list" aria-label="3-step process">
            {steps.map((step, i) => (
              <div key={i} role="listitem" style={{ display: 'contents' }}>
                <div className="node">
                  <div className={`tile${step.filled ? ' fill' : ''}`}>
                    {step.icon}
                  </div>
                  <div className="nlabel">
                    {step.label}
                    <small>{step.sub}</small>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="conn" aria-hidden="true">
                    <span className="nub" />
                    <span className="ln" />
                    <span className="nub" />
                  </div>
                )}
              </div>
            ))}
            <div className="add-tile" aria-hidden="true">+</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
