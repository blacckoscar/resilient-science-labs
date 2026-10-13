import { Arrow, Button, Eyebrow, Orbitals } from '../components/ui.jsx'
import { processSteps } from '../content.js'

export default function Science() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="shell page-hero__grid">
          <div>
            <Eyebrow light>Science</Eyebrow>
            <h1>
              Biological intelligence
              <br />
              for a changing world.
            </h1>
            <p>
              Advanced science. Real-world resilience.
              <br />
              A healthier, more productive planet.
            </p>
            <span className="lime-rule" />
          </div>
          <div className="page-hero__visual" aria-hidden="true">
            <Orbitals light className="page-hero__orbits" />
            <div className="circle-photo circle-photo--lg">
              <img src="/images/forest-canopy.jpg" alt="" />
            </div>
            <div className="circle-photo circle-photo--md">
              <img src="/images/planetary-mountain.jpg" alt="" />
            </div>
            <div className="circle-photo circle-photo--sm">
              <img src="/images/forest-trees.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <Eyebrow>Our science</Eyebrow>
          <div>
            <h2>From complexity to possibility.</h2>
            <p className="lede">
              We explore biology in changing environments, combining diverse data, mechanistic models and experimental
              learning to help us understand, predict and accelerate adaptation.
            </p>
            <div className="prose">
              <p>
                Adaptation is the oldest technology on Earth. It is also the one we understand least well at the scale
                now required. Climate, nutrition, disease and land use are shifting faster than conventional research
                cycles can answer.
              </p>
              <p>
                Resilient Science Labs was created to close that gap. We treat biological systems as intelligible —
                not by reducing them to a single metric, but by connecting the evidence, models and experiments that
                make their behaviour predictable enough to act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="shell">
          <Eyebrow>A continuous loop</Eyebrow>
          <h2>How discovery actually moves.</h2>
          <div className="science-steps">
            {processSteps.map((step) => (
              <article key={step.n} className="science-step">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell cta-row">
          <div>
            <h2>See the platforms this science makes possible.</h2>
            <p>CULTiiVAR and Traiit are complementary ways of turning that loop into working intelligence.</p>
          </div>
          <Button to="/platforms">
            Explore platforms <Arrow />
          </Button>
        </div>
      </section>
    </>
  )
}
