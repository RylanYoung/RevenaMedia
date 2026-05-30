'use client'

import Reveal from './Reveal'

const stats = [
  {
    big: (
      <>
        <em>62%</em>
      </>
    ),
    text: (
      <>
        of callers <b>don&apos;t leave a voicemail</b> — they just call the next business on the list.
      </>
    ),
  },
  {
    big: (
      <>
        $300<em>–</em>800
      </>
    ),
    text: (
      <>
        the value of <b>the average missed call</b> in lost work, gone in a single ring-out.
      </>
    ),
  },
  {
    big: (
      <>
        2<em>–</em>3 days
      </>
    ),
    text: (
      <>
        how late most trade businesses <b>follow up a lead</b> — if they ever follow up at all.
      </>
    ),
  },
]

export default function PainStats() {
  return (
    <section className="pain" aria-label="The cost of a missed call">
      <div className="wrap stats">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={i * 0.1} className="stat">
            <div className="big" aria-label={typeof stat.big === 'object' ? undefined : String(stat.big)}>
              {stat.big}
            </div>
            <p>{stat.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
