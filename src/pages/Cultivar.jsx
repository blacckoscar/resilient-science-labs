import { useState } from 'react'
import { Arrow, Button, Eyebrow, Network } from '../components/ui.jsx'
import { Mark } from '../components/Logo.jsx'

const tabs = ['Overview', 'Experiments', 'Traits', 'Insights']

const stats = [
  { value: '2,447', label: 'Experiments', icon: 'trend' },
  { value: '1,882', label: 'Promising traits', icon: 'leaf' },
  { value: '3.4x', label: 'Resilience index', icon: 'bars' },
  { value: '92%', label: 'Prediction accuracy', icon: 'target' },
]

function StatIcon({ name }) {
  if (name === 'trend') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 13l4-4 3 2.5L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 5h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'leaf') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M14 3C8 3 3.5 7.2 3 13c4.2.2 8-2.2 10-6-1.8 3.4-5 5.6-8.8 6.2C5.6 15.6 9 16.2 12.4 14 16 12 17.2 6.8 14 3Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  if (name === 'bars') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 14V9M8 14V5M12 14V8M16 14V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export default function Cultivar() {
  const [tab, setTab] = useState('Overview')

  return (
    <section className="dash">
      <div className="dash__bar">
        <div className="shell dash__bar-inner">
          <div className="dash__brand">
            <Mark size={36} />
            <span>CULTiiVAR</span>
          </div>
          <nav className="dash__tabs" aria-label="CULTiiVAR">
            {tabs.map((item) => (
              <button key={item} className={tab === item ? 'is-active' : ''} onClick={() => setTab(item)}>
                {item}
              </button>
            ))}
          </nav>
          <div className="dash__avatar" aria-hidden="true">
            JD
          </div>
        </div>
      </div>

      <div className="dash__hero">
        <div className="shell">
          <h1>
            Crop intelligence
            <br />
            for a more resilient tomorrow.
          </h1>
        </div>
        <div className="dash__photo">
          <img src="/images/crop-leaves.jpg" alt="Crop canopy" />
          <Network tone="light" className="dash__net" />
        </div>
      </div>

      <div className="shell dash__stats">
        {stats.map((item) => (
          <article key={item.label} className="stat">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
            <span className="stat__icon">
              <StatIcon name={item.icon} />
            </span>
          </article>
        ))}
      </div>

      <div className="shell dash__body">
        {tab === 'Overview' && (
          <div className="prose">
            <Eyebrow>Platform</Eyebrow>
            <h2>A multi-omics, AI-native platform for resilient crops.</h2>
            <p>
              CULTiiVAR connects research evidence, predictive models and experimental validation so crop scientists
              can discover, evaluate and deploy traits that remain useful as environments change.
            </p>
            <p>
              The figures above are illustrative of the kind of operating picture the platform is designed to create
              — experiments in motion, traits under evaluation, and a continuously improving resilience index.
            </p>
            <Button to="/contact">
              Talk to us about CULTiiVAR <Arrow />
            </Button>
          </div>
        )}
        {tab === 'Experiments' && (
          <div className="prose">
            <h2>Experiments</h2>
            <p>
              Predictions only become intelligence when they meet the lab and the field. CULTiiVAR is designed to
              queue, track and learn from experimental validation — so every cycle tightens the next one.
            </p>
          </div>
        )}
        {tab === 'Traits' && (
          <div className="prose">
            <h2>Traits</h2>
            <p>
              Promising traits are scored across environments, not just a single trial. The platform keeps the
              biological mechanism visible beside the prediction, so researchers can decide what is worth growing.
            </p>
          </div>
        )}
        {tab === 'Insights' && (
          <div className="prose">
            <h2>Insights</h2>
            <p>
              Insights in CULTiiVAR are not a content feed. They are the questions, mechanisms and results that
              accumulate as the discovery loop turns.
            </p>
            <Button to="/insights" variant="outline">
              Read illustrative insights <Arrow />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
