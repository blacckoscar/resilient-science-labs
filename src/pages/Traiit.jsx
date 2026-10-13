import { Arrow, Button, Eyebrow, Network, Orbitals } from '../components/ui.jsx'
import { Mark } from '../components/Logo.jsx'

const traits = [
  { title: 'Discover', copy: 'Surface candidate traits from heterogeneous biological evidence across species.' },
  { title: 'Predict', copy: 'Estimate how those traits behave when the environment is no longer stationary.' },
  { title: 'Optimize', copy: 'Rank mechanisms that travel — and hand the strongest hypotheses to experiment.' },
]

export default function Traiit() {
  return (
    <>
      <section className="section section--tight">
        <div className="shell traiit-hero">
          <div>
            <div className="pcard__lockup">
              <Mark size={48} />
              <div>
                <Eyebrow rule={false}>Platform</Eyebrow>
                <h1>Traiit</h1>
                <p className="pcard__tag">Trait intelligence engine</p>
              </div>
            </div>
            <p className="lede">
              An AI-driven engine for biological trait discovery, prediction and optimization across species.
            </p>
            <Button to="/contact">
              Start a conversation <Arrow />
            </Button>
          </div>
          <div className="traiit-visual" aria-hidden="true">
            <Orbitals className="traiit-visual__orbits" />
            <div className="circle-photo circle-photo--lg">
              <img src="/images/green-mountains.jpg" alt="" />
            </div>
            <Network className="traiit-visual__net" />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell three">
          {traits.map((item) => (
            <article key={item.title} className="soft-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <Eyebrow>Why Traiit</Eyebrow>
          <div className="prose">
            <h2>Traits that remain useful when the world changes.</h2>
            <p>
              Most trait pipelines are trained on the environments we already have. Traiit is conceived for the ones
              we are entering — connecting mechanistic structure with predictive models so a promising trait can be
              evaluated across species, not just a single trial.
            </p>
            <p>
              Together with CULTiiVAR, it forms a complementary pair: one platform rooted in crop systems, one engine
              for trait intelligence more broadly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
