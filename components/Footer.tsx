'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="fbrand">
          <Image
            src="/revena-logo-white.png"
            alt="Revena Media"
            width={182}
            height={34}
            style={{ height: '34px', width: 'auto' }}
          />
        </div>
        <div className="foot-right">
          <a className="foot-phone" href="tel:+61479116472">0479 116 472</a>
          <div className="floc">Sydney, Australia</div>
        </div>
      </div>
    </footer>
  )
}
