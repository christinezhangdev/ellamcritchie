import { useNavigate } from 'react-router-dom'
import { Dithering } from '@paper-design/shaders-react'
import './ResearchMedicine.css'

function ResearchMedicine() {
  const navigate = useNavigate()

  return (
    <div className="rm-page">
      <Dithering
        speed={0.15}
        shape="warp"
        type="4x4"
        size={4}
        scale={1}
        colorBack="#00000000"
        colorFront="#EBB2DC"
        style={{
          backgroundColor: '#E2ECF6',
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <div className="rm-content">
        {/* Top Bar */}
        <nav className="rm-top-bar">
          <span className="rm-back" onClick={() => navigate('/')}>&#8592; BACK</span>
          <div className="rm-top-right">
            <span className="rm-nav-link">WORK</span>
            <span className="rm-nav-link">ABOUT</span>
            <span className="rm-nav-link">CONTACT</span>
          </div>
        </nav>

        {/* Page Title */}
        <header className="rm-header">
          <h1 className="rm-title">RESEARCH<br />& MEDICINE</h1>
        </header>

        {/* Research Section */}
        <section className="rm-section">
          <div className="rm-section-label">RESEARCH</div>

          <div className="rm-card">
            <div className="rm-card-header">
              <h2>Bertoldi Group</h2>
              <span className="rm-date">Jan 2025 — Present</span>
            </div>
            <p className="rm-affiliation">Harvard SEAS</p>
            <p className="rm-description">
              Bistable origami hysterons — studying emergent mechanical behavior and soft material properties. Computational modeling with Abaqus FEA.
            </p>
          </div>

          <div className="rm-card">
            <div className="rm-card-header">
              <h2>Fuller Lab</h2>
              <span className="rm-date">Jul — Aug 2024</span>
            </div>
            <p className="rm-affiliation">University of Washington</p>
          </div>
        </section>

        {/* Divider */}
        <div className="rm-divider"></div>

        {/* Medicine Section */}
        <section className="rm-section">
          <div className="rm-section-label">MEDICINE</div>

          <p className="rm-intro">
            Pre-med. Interests in surgery, international medicine, and low-cost medical device development.
          </p>

          <div className="rm-card">
            <div className="rm-card-header">
              <h2>NaloxNow</h2>
              <span className="rm-role">Co-founder</span>
            </div>
            <p className="rm-description">
              Designs and builds physical naloxone distribution boxes deployed in Recovery Cafes. 501(c)(3) nonprofit with a physician board and BakerHostetler pro bono legal support.
            </p>
          </div>

          <div className="rm-card rm-card-quiet">
            <div className="rm-card-header">
              <h2>Good Shepherd Community Care</h2>
            </div>
            <p className="rm-description rm-muted">
              Hospice and pediatric palliative care volunteer. Bereavement calls.
            </p>
          </div>
        </section>

        {/* Bottom nav */}
        <div className="rm-bottom-nav">
          <button className="rm-pill" onClick={() => navigate('/')}>
            <span>HOME</span>
          </button>
          <button className="rm-pill rm-pill-active">
            <span>RESEARCH</span>
          </button>
          <button className="rm-pill rm-pill-active">
            <span>MEDICINE</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResearchMedicine
