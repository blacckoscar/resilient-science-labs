import { Link } from 'react-router-dom'
import { Arrow, Eyebrow } from '../components/ui.jsx'
import { insights } from '../content.js'

export default function Insights() {
  return (
    <section className="section">
      <div className="shell">
        <div className="insights__head">
          <div>
            <Eyebrow>Insights</Eyebrow>
            <h1>
              Questions
              <br />
              worth exploring.
            </h1>
            <p className="lede">
              Perspectives on the science, opportunities and big questions shaping a more resilient biological future.
              Copy here is illustrative.
            </p>
          </div>
        </div>

        <Link to="/insights/adaptive-biology-report" className="report-card">
          <div className="report-card__copy">
            <p className="icard__kind">Technical report 2024</p>
            <h2>Adaptive Biology for a Resilient Future</h2>
            <p>Engineering resilience for biological adaptation.</p>
            <span className="text-link">
              Open the report <Arrow />
            </span>
          </div>
          <div className="report-card__art" aria-hidden="true">
            <img src="/images/report-forest.jpg" alt="" />
          </div>
        </Link>

        <div className="insight-grid insight-grid--page">
          {insights.map((item) => (
            <Link key={item.slug} to={`/insights/${item.slug}`} className="icard">
              <div className="icard__media icard__media--lg">
                <img src={item.image} alt="" />
              </div>
              <p className="icard__kind">{item.kind}</p>
              <h3>
                {item.title} <Arrow />
              </h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
