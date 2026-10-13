import { Link } from 'react-router-dom'
import { Arrow, Eyebrow, Network } from '../components/ui.jsx'
import { Mark } from '../components/Logo.jsx'

export default function Platforms() {
  return (
    <>
      <section className="section section--tight">
        <div className="shell split">
          <Eyebrow>Platforms</Eyebrow>
          <div>
            <h1>Complementary approaches to biological intelligence.</h1>
            <p className="lede">
              Two platform concepts, one scientific loop. CULTiiVAR is built for resilient crops. Traiit generalises
              trait intelligence across species.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="shell platform-page">
          <article className="pcard pcard--lg pcard--cultivar">
            <div className="pcard__lockup">
              <Mark size={52} />
              <div>
                <h2>CULTiiVAR</h2>
                <p className="pcard__tag">Intelligence for resilient crops</p>
              </div>
            </div>
            <p>
              A multi-omics, AI-native platform to discover, evaluate and deploy resilient traits — connecting
              evidence, prediction and experiment for food systems that can adapt.
            </p>
            <Link to="/platforms/cultivar" className="text-link">
              Open the CULTiiVAR overview <Arrow />
            </Link>
            <div className="pcard__art pcard__art--lg" aria-hidden="true">
              <Network className="pcard__net" />
              <div className="pcard__seed pcard__seed--xl">
                <img src="/images/crop-leaves.jpg" alt="" />
              </div>
            </div>
          </article>

          <article className="pcard pcard--lg pcard--traiit">
            <div className="pcard__lockup">
              <Mark size={52} />
              <div>
                <h2>Traiit</h2>
                <p className="pcard__tag">Trait intelligence engine</p>
              </div>
            </div>
            <p>
              An AI-driven engine for biological trait discovery, prediction and optimization across species — built
              to find the mechanisms that travel when environments change.
            </p>
            <Link to="/platforms/traiit" className="text-link">
              Open the Traiit overview <Arrow />
            </Link>
            <div className="pcard__art pcard__art--lg" aria-hidden="true">
              <Network className="pcard__net" />
              <div className="pcard__seed pcard__seed--xl">
                <img src="/images/green-mountains.jpg" alt="" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
