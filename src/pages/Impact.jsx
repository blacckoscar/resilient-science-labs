import { Arrow, Button, Eyebrow } from '../components/ui.jsx'
import { impactIcons } from '../components/Icons.jsx'
import { impactAreas } from '../content.js'

const stories = [
  {
    title: 'Food systems that can still feed people',
    copy: 'Resilient crops are not an abstract target. They are the difference between a harvest that holds and one that does not when heat, water or disease arrive out of season.',
  },
  {
    title: 'Adaptation as a scientific object',
    copy: 'Climate resilience is not a slogan on a report cover. It is the measurable capacity of living systems to reorganise without collapsing the functions we depend on.',
  },
  {
    title: 'Discovery that compounds',
    copy: 'Every validated prediction becomes evidence for the next model. The impact we care about is a scientific loop that gets faster without getting sloppy.',
  },
]

export default function Impact() {
  return (
    <>
      <section className="impact-page-hero">
        <div className="shell">
          <Eyebrow light>Our impact</Eyebrow>
          <h1>
            A more resilient
            <br />
            biological future.
          </h1>
        </div>
        <div className="shell impact-list impact-list--page">
          {impactAreas.map((item) => {
            const Icon = impactIcons[item.icon]
            return (
              <article key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="shell three">
          {stories.map((item) => (
            <article key={item.title} className="soft-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--warm">
        <div className="shell cta-row">
          <div>
            <h2>This work is still a conversation.</h2>
            <p>If you are asking the same questions from a lab, a field site or a funding desk, we would like to hear them.</p>
          </div>
          <Button to="/contact" variant="forest">
            Contact us <Arrow />
          </Button>
        </div>
      </section>
    </>
  )
}
