'use client'

import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function DemoSection() {
  return (
    <section className="block demo" id="demo" aria-label="Book a free demo">
      <div className="glow" aria-hidden="true" />
      <div className="wrap demo-grid">
        <Reveal className="demo-copy">
          <span className="tag">Free live demo</span>
          <h2>
            See it live <span className="light">in</span> 15 minutes.
          </h2>
          <p>
            We&apos;ll build a live AI agent on the call and show you exactly how it works for your
            business.
          </p>
          <ul className="demo-bullets">
            <li>
              <span className="ck" aria-hidden="true">✓</span>
              <span>
                <b>Hear it answer a real call</b> in your trade&apos;s voice and tone.
              </span>
            </li>
            <li>
              <span className="ck" aria-hidden="true">✓</span>
              <span>
                <b>No commitment, no jargon</b> — just see it work for yourself.
              </span>
            </li>
            <li>
              <span className="ck" aria-hidden="true">✓</span>
              <span>
                <b>Walk away with a plan</b> to stop missing jobs this week.
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
