import { Link } from 'react-router-dom'
import { Eyebrow, Orbitals } from '../components/ui.jsx'
import { Mark } from '../components/Logo.jsx'

export default function Report() {
  return (
    <article className="report">
      <section className="report__cover">
        <div className="shell report__grid">
          <div>
            <div className="report__brand">
              <Mark size={44} />
              <span>
                Resilient
                <small>Science Labs</small>
              </span>
            </div>
            <h1>
              Adaptive Biology
              <br />
              for a Resilient Future
            </h1>
            <p className="report__kicker">Technical report 2024</p>
            <p className="report__foot">Engineering resilience for biological adaptation.</p>
          </div>
          <div className="report__visual" aria-hidden="true">
            <Orbitals className="report__orbits" />
            <div className="circle-photo circle-photo--lg">
              <img src="/images/report-forest.jpg" alt="" />
            </div>
            <div className="circle-photo circle-photo--md">
              <img src="/images/forest-canopy.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell article__wrap">
          <Eyebrow>From the report</Eyebrow>
          <h2>A working document, not a finished claim.</h2>
          <div className="prose">
            <p>
              This cover and the pages around it are a design concept. They describe the kind of technical
              communication Resilient Science Labs is built to support: adaptive biology, treated seriously, written
              for people who will test the ideas.
            </p>
            <p>
              The scientific stance is consistent across the site. Integrate evidence. Model mechanisms. Experiment.
              Learn. Repeat until the prediction is useful in a world that is still changing.
            </p>
          </div>
          <Link to="/insights" className="text-link">
            Back to insights
          </Link>
        </div>
      </section>
    </article>
  )
}
