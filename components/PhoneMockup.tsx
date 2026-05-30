export default function PhoneMockup() {
  return (
    <div className="phone-stage">
      <span className="halo" aria-hidden="true" />
      <div className="phone" role="img" aria-label="AI voice agent answering a call">
        <span className="notch" aria-hidden="true" />
        <div className="phone-screen">
          <div className="ps-head">
            <div className="ps-label mono">REVENA AI</div>
            <div className="ps-sub">Answering for you · live</div>
          </div>

          <div className="orb-wrap" aria-hidden="true">
            <span className="ring r1" />
            <span className="ring r2" />
            <span className="ring r3" />
            <div className="orb">
              <div className="eq">
                <i /><i /><i /><i /><i />
              </div>
            </div>
          </div>

          <div className="ps-caller">
            <div className="who">Incoming · Unknown caller</div>
            <div className="num mono">+61 412 ••• 904</div>
          </div>

          <div className="ps-status mono">
            <span className="sd" aria-hidden="true" />
            QUALIFYING JOB…
          </div>

          <div className="ps-chip">
            <span className="ic" aria-hidden="true">✓</span>
            <span>Booked · Tue 9:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
