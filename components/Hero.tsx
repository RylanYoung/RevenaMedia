'use client'

import PhoneMockup from './PhoneMockup'

const industries = [
  'Dental',
  'Electrical',
  'Medical',
  'Plumbing',
  'Allied Health',
  'HVAC',
  'Legal',
  'Roofing',
  'Real Estate',
  'Gas Fitting',
  'Physiotherapy',
  'Carpentry',
  'Accounting',
  'Tiling',
  'Psychology',
  'Painting',
  'Optometry',
  'Landscaping',
  'Financial Planning',
  'Solar',
  'Fencing',
  'Chiropractic',
  'Insurance',
  'Concreting',
  'Veterinary',
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="fu d1">
            <span className="light">You just </span>
            missed{' '}
            <span className="grad">another job.</span>
          </h1>

          <p className="hero-sub fu d2">
            Revena builds you an{' '}
            <b>AI voice agent that answers every call</b> — 24/7. It qualifies
            the lead, books it straight to your calendar, and you don&apos;t lift
            a finger.
          </p>

          <div className="hero-cta fu d2">
            <a className="btn btn-purple btn-lg" href="#demo">
              Book a free demo <span className="arr" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost btn-lg" href="#how">
              See how it works
            </a>
          </div>

          <div className="hero-trust fu d3" aria-label="Built for these businesses">
            <span className="ht-label">Built for service businesses that can&apos;t miss a call</span>
            <div className="marquee-wrap" aria-hidden="true">
              <div className="marquee-track">
                {[...industries, ...industries].map((name, i) => (
                  <span key={i} className="marquee-item">
                    <span className="marquee-dot" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual fu d4">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
