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
        <div className="floc">Sydney, Australia</div>
      </div>
    </footer>
  )
}
