'use client'

import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'
import WorkflowMockup, { FormIcon, ClockIcon, MessageIcon, CalendarIcon } from './WorkflowMockup'

const webEnquiryNodes = [
  { icon: <FormIcon />, label: 'Website form filled', sub: 'Trigger' },
  { icon: <ClockIcon />, label: 'Wait 30 seconds', path: '(Default path)', filled: true },
  { icon: <MessageIcon />, label: 'Message & qualify lead', sub: '2-way SMS' },
  { icon: <CalendarIcon />, label: 'Book into calendar', sub: 'Confirmed' },
]

const reviewNodes = [
  { icon: <CalendarIcon />, label: 'Job marked complete', sub: 'Trigger' },
  { icon: <ClockIcon />, label: 'Wait 2 hours', path: '(Default path)', filled: true },
  { icon: <MessageIcon />, label: 'Send review SMS', sub: '5-star request' },
]

export default function Services() {
  return (
    <section className="block" id="services" aria-label="What we build">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="tag">What we build</span>
          <h2>
            <span className="light">AI systems that </span>take every lead
            <br />
            <span className="light">and turn it into </span>booked work.
          </h2>
          <p>
            Done-for-you automations that catch every call, qualify it, and grow your reputation —
            running quietly in the background while you focus on your clients.
          </p>
        </Reveal>

        {/* Feature 1: Voice Receptionist */}
        <Reveal className="feature">
          <div className="f-copy">
            <span className="tag">01 — Voice</span>
            <h3>AI Voice Receptionist</h3>
            <p>
              Answers every call live, qualifies the enquiry, and books it straight to your calendar.
              Day or night, no caller ever hits voicemail.
            </p>
            <ul className="f-list">
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Picks up on the <b>first ring, 24/7</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Sounds natural in <b>your industry&apos;s language</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Books straight to <b>your calendar</b></span>
              </li>
            </ul>
          </div>
          <div className="f-visual">
            <PhoneMockup />
          </div>
        </Reveal>

        {/* Feature 2: Website Enquiry AI */}
        <Reveal className="feature rev">
          <div className="f-copy">
            <span className="tag">02 — Web</span>
            <h3>Website Enquiry AI</h3>
            <p>
              Turns your contact form into an instant conversation. It captures the lead, answers
              questions, and books the job before they bounce to a competitor.
            </p>
            <ul className="f-list">
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Replies in <b>seconds, not days</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Captures the lead <b>before they leave</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Hands you a <b>qualified job, not a name</b></span>
              </li>
            </ul>
          </div>
          <div className="f-visual">
            <WorkflowMockup title="workflow · web_enquiry" nodes={webEnquiryNodes} />
          </div>
        </Reveal>

        {/* Feature 3: Google Review Automation */}
        <Reveal className="feature">
          <div className="f-copy">
            <span className="tag">03 — Reviews</span>
            <h3>Google Review Automation</h3>
            <p>
              Sends a review request after every job, automatically. Build a five-star reputation
              that wins the next customer — without ever thinking about it.
            </p>
            <ul className="f-list">
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Fires the moment a <b>job is marked done</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Perfectly-timed <b>SMS, not a nag</b></span>
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span>
                <span>Turns happy jobs into <b>5-star reviews</b></span>
              </li>
            </ul>
          </div>
          <div className="f-visual">
            <WorkflowMockup title="workflow · review_request" nodes={reviewNodes} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
