import { useState } from 'react'
import { Arrow, Button, Eyebrow, PlayIcon } from '../components/ui.jsx'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="cinematic">
        <div className="cinematic__leaf" aria-hidden="true">
          <img src="/images/leaf-official.jpg" alt="" />
        </div>
        <div className="shell cinematic__grid">
          <div className="cinematic__copy">
            <h1>
              Engineering
              <br />
              intelligence for
              <br />
              biological adaptation.
            </h1>
            <p>
              From data to discovery to real-world impact.
              <br />
              We rebuild the science infrastructure for
              <br />
              a more resilient tomorrow.
            </p>
            <div className="hero__actions">
              <Button to="/platforms">
                Explore our platform <Arrow />
              </Button>
              <button className="btn btn--play" onClick={() => setOpen(true)}>
                <PlayIcon /> Watch video
              </button>
            </div>
          </div>
          <p className="side-caption">Science for a more resilient tomorrow.</p>
        </div>
        {open && (
          <div className="modal" role="dialog" aria-modal="true" aria-label="Introduction">
            <div className="modal__card">
              <button className="modal__close" onClick={() => setOpen(false)} aria-label="Close">
                ×
              </button>
              <Eyebrow>A short introduction</Eyebrow>
              <h2>The work, in one loop.</h2>
              <p>
                Evidence. Prediction. Experiment. Learning. Resilient Science Labs exists to keep that cycle moving
                — so biological intelligence can keep pace with a changing world.
              </p>
              <Button to="/science" variant="forest">
                Read the science <Arrow />
              </Button>
            </div>
          </div>
        )}
      </section>

      <section className="section">
        <div className="shell split">
          <Eyebrow>About</Eyebrow>
          <div className="prose">
            <h2>A laboratory for biological intelligence.</h2>
            <p>
              Resilient Science Labs is a design-led scientific studio. We build platforms and ways of working that
              help researchers understand how living systems adapt — and how that adaptation can be accelerated
              without being simplified into something untrue.
            </p>
            <p>
              The brand, platforms and insights on this site are a complete design concept. They are meant to be
              judged as a piece of scientific communication: precise, calm, and serious about the living world.
            </p>
            <Button to="/contact" variant="outline">
              Get in touch <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
