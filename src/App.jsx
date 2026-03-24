import { Dithering } from '@paper-design/shaders-react'
import './App.css'

const gridItems = [
  {
    title: 'Bertoldi Lab',
    desc: 'Origami structures that snap between two stable states.',
    image: '/images/bertoldi.png',
    bg: '#e8e4df',
  },
  {
    title: 'Pre-med',
    desc: 'Surgery, international medicine, low-cost devices.',
    image: '/images/premed.png',
    bg: '#e8e4df',
  },
  {
    title: 'Harvard Track & Field',
    desc: 'Ivy Champion, Pan Am Silver.',
    image: '/images/track.png',
    bg: '#d4dce6',
  },
  {
    title: 'USA Climbing',
    desc: 'National Team, 2018–2019.',
    image: '/images/climbing.jpg',
    bg: '#3a3a3a',
  },
  {
    title: 'NaloxNow',
    desc: 'Co-founded it, built the boxes.',
    image: '/images/naloxnow.png',
    bg: '#e8e4df',
  },
  {
    title: 'Good Shepherd',
    desc: 'Hospice and palliative care volunteer.',
    image: '/images/goodshepherd.png',
    bg: '#e8e4df',
  },
  {
    title: 'Gunpla',
    desc: 'Builds them.',
    image: '/images/gunpla.png',
    bg: '#e8e4df',
  },
  {
    title: "Rubik's Cube",
    desc: 'Solves them.',
    image: '/images/rubiks.png',
    bg: '#e8e4df',
  },
]

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site">
      {/* ===== HERO ===== */}
      <section className="landing" id="home">
        <Dithering
          speed={0.25}
          shape="warp"
          type="4x4"
          size={4}
          scale={1}
          colorBack="#00000000"
          colorFront="#EBB2DC"
          style={{
            backgroundColor: '#E2ECF6',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />

        <nav className="top-bar">
          <div className="top-bar-left"></div>
          <div className="top-bar-right">
            <span className="nav-link" onClick={() => scrollTo('work')}>MORE ABOUT ME</span>
            <a className="nav-link" href="mailto:ellamcritchie@college.harvard.edu">SAY HI</a>
            <a className="nav-link nav-linkedin" href="https://www.linkedin.com/in/ella-mcritchie-678275242/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </nav>

        <h1 className="hero-title">
          {"ELLA\n MCRITCHIE"}
        </h1>
        <p className="hero-blurb"><em>Harvard bioengineering student, D1 athlete,<br />& aspiring trauma surgeon.</em></p>

        <img
          className="figure-image"
          src="/images/figure.png"
          alt="Abstract figure pole vaulting"
        />

        <div className="bottom-right-text">
          RUN.<br />JUMP.<br />FLY.
        </div>

        <a className="bottom-left-email" href="mailto:ellamcritchie@college.harvard.edu">
          <span className="email-text">ellamcritchie[@]college.harvard.edu</span>
        </a>
      </section>

      {/* ===== WORK GRID ===== */}
      <section className="work-section" id="work">
        <Dithering
          speed={0.25}
          shape="warp"
          type="4x4"
          size={4}
          scale={1}
          colorBack="#00000000"
          colorFront="#EBB2DC"
          style={{
            backgroundColor: '#E2ECF6',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        <div className="work-grid">
          {gridItems.map((item, i) => (
            <div className="grid-cell" key={i}>
              <div
                className="grid-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: item.bg,
                }}
              />
              <div className="grid-label">
                <span className="grid-title">{item.title}</span>
                <span className="grid-sep"> — </span>
                <span className="grid-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        © made with love by christine zhang ♡
      </footer>
    </div>
  )
}

export default App
