import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, Button, CellField, Eyebrow, Network, Orbitals, PlayIcon, VideoModal } from '../components/ui.jsx'
import { CycleIcon, impactIcons } from '../components/Icons.jsx'
import { Mark } from '../components/Logo.jsx'
import { impactAreas, insights, processSteps } from '../content.js'

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <Eyebrow light>Science × Intelligence × Adaptation</Eyebrow>
            <h1>
              Engineering intelligence
              <br />
              for biological adaptation.
            </h1>
            <p className="hero__lead">
              From data to discovery to real-world impact.
              <br />
              We rebuild the science infrastructure for a more resilient tomorrow.
            </p>
            <div className="hero__actions">
              <Button to="/platforms">
                Explore our platform <Arrow />
              </Button>
              <button className="btn btn--play" onClick={() => setVideoOpen(true)}>
                <PlayIcon /> Watch video
              </button>
            </div>
            <ul className="hero__axioms">
              <li>
                Nature
                <span>as data</span>
              </li>
              <li>
                Intelligence
                <span>as a multiplier</span>
              </li>
              <li>
                Adaptation
                <span>for a brighter tomorrow</span>
              </li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <Orbitals light className="hero__orbits" />
            <div className="orb orb--leaf">
              <img src="/images/leaf-official.jpg" alt="" />
            </div>
            <div className="orb orb--mountain">
              <img src="/images/fog-hills.jpg" alt="" />
            </div>
            <div className="orb orb--cells">
              <CellField />
            </div>
            <div className="orb orb--net">
              <Network tone="light" />
            </div>
            <p className="side-caption">Science for a more resilient tomorrow.</p>
          </div>
        </div>
        <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      </section>

      <section className="approach">
        <div className="shell approach__grid">
          <div className="approach__copy">
            <Eyebrow>Our approach</Eyebrow>
            <h2>
              From complexity
              <br />
              to possibility.
            </h2>
            <p>
              We explore biology in changing environments, combining diverse data, mechanistic models and experimental
              learning to help us understand, predict and accelerate adaptation for a more resilient future.
            </p>
            <Button to="/science" variant="outline">
              Our science <Arrow />
            </Button>
          </div>

          <div className="approach__platforms">
            <div className="approach__meta">
              <Eyebrow rule={false}>Platform concepts</Eyebrow>
              <Link to="/platforms" className="text-link">
                Exploring complementary approaches <Arrow />
              </Link>
            </div>
            <div className="platform-cards">
              <article className="pcard pcard--cultivar">
                <div className="pcard__lockup">
                  <Mark size={42} />
                  <div>
                    <h3>CULTiiVAR</h3>
                    <p className="pcard__tag">Intelligence for resilient crops</p>
                  </div>
                </div>
                <p>A multi-omics, AI-native platform to discover, evaluate and deploy resilient traits.</p>
                <Link to="/platforms/cultivar" className="text-link">
                  Explore CULTiiVAR <Arrow />
                </Link>
                <div className="pcard__art" aria-hidden="true">
                  <Network className="pcard__net" />
                  <div className="pcard__seed pcard__seed--xl">
                    <img src="/images/crop-leaves.jpg" alt="" />
                  </div>
                </div>
              </article>

              <article className="pcard pcard--traiit">
                <div className="pcard__lockup">
                  <Mark size={42} />
                  <div>
                    <h3>Traiit</h3>
                    <p className="pcard__tag">Trait intelligence engine</p>
                  </div>
                </div>
                <p>An AI-driven engine for biological trait discovery, prediction and optimization across species.</p>
                <Link to="/platforms/traiit" className="text-link">
                  Explore Traiit <Arrow />
                </Link>
                <div className="pcard__art" aria-hidden="true">
                  <Network className="pcard__net" />
                  <div className="pcard__seed pcard__seed--wide">
                    <img src="/images/green-mountains.jpg" alt="" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-band">
        <div className="shell impact-band__grid">
          <div>
            <Eyebrow light>Our impact</Eyebrow>
            <h2>
              A more resilient
              <br />
              biological future.
            </h2>
          </div>
          <ul className="impact-list">
            {impactAreas.map((item) => {
              const Icon = impactIcons[item.icon]
              return (
                <li key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="process">
        <div className="shell">
          <div className="process__head">
            <div>
              <Eyebrow>Our process</Eyebrow>
              <h2>
                A continuous
                <br />
                loop of discovery.
              </h2>
            </div>
            <p>
              We integrate diverse data, mechanistic modelling and iterative experimentation to explore how biological
              systems adapt, with the goal of accelerating solutions for a more resilient tomorrow.
            </p>
          </div>
          <ol className="process__steps">
            {processSteps.map((step) => (
              <li key={step.n}>
                <span className="process__n">{step.n}</span>
                <div className={`process__icon process__icon--${step.visual}`}>
                  {step.visual === 'leaf' && <img src="/images/leaf-dew.jpg" alt="" />}
                  {step.visual === 'network' && <img src="/images/leaf-official.jpg" alt="" />}
                  {step.visual === 'seed' && <img src="/images/process-experiment.png" alt="" />}
                  {step.visual === 'cycle' && <CycleIcon />}
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="insights">
        <div className="shell">
          <div className="insights__head">
            <div>
              <Eyebrow>Illustrative insights</Eyebrow>
              <h2>
                Questions
                <br />
                worth exploring.
              </h2>
              <p>
                Perspectives on the science, opportunities and big questions shaping a more resilient biological future.
              </p>
            </div>
            <Link to="/insights" className="text-link">
              View all insights <Arrow />
            </Link>
          </div>
          <div className="insight-grid">
            {insights.map((item) => (
              <Link key={item.slug} to={`/insights/${item.slug}`} className="icard">
                <div className="icard__media">
                  <img src={item.image} alt="" />
                </div>
                <p className="icard__kind">{item.kind}</p>
                <h3>
                  {item.title} <Arrow />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="collab">
        <div className="shell collab__grid">
          <div>
            <Eyebrow>Collaborate</Eyebrow>
            <h2>
              Let’s ask what’s next.
            </h2>
            <p>
              We’re excited to explore ideas, collaborations and new directions at the intersection of biology and
              intelligence.
            </p>
            <Button to="/contact" variant="forest">
              Contact us <Arrow />
            </Button>
          </div>
          <div className="collab__visual" aria-hidden="true">
            <Orbitals className="collab__orbits" />
            <div className="collab__leaf">
              <img src="/images/leaf-dew.jpg" alt="" />
            </div>
            <p className="side-caption side-caption--dark">
              Biological insight today for a more resilient tomorrow.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
