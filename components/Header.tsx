'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Revena Media home">
          <Image
            src="/revena-logo-white.png"
            alt="Revena Media"
            width={182}
            height={40}
            className="brand-logo"
            priority
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">What we build</a>
          <a href="#how">How it works</a>
          <a href="#demo">Demo</a>
        </nav>

        <div className="nav-right">
          <a className="btn btn-purple" href="#demo">
            Book a demo
          </a>
        </div>
      </div>
    </header>
  )
}
