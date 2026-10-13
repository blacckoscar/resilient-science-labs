import { useState } from 'react'
import { Arrow, Button, Eyebrow } from '../components/ui.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact">
      <div className="shell contact__grid">
        <div>
          <Eyebrow>Collaborate</Eyebrow>
          <h1>Let’s ask what’s next.</h1>
          <p className="lede">
            We’re excited to explore ideas, collaborations and new directions at the intersection of biology and
            intelligence.
          </p>
          <p className="side-caption side-caption--static">
            Biological insight today for a more resilient tomorrow.
          </p>
        </div>

        {sent ? (
          <div className="soft-card contact__thanks">
            <h2>Received. Thank you.</h2>
            <p>This is a design-concept form. Your note stayed in the browser — and the invitation to talk is real.</p>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required placeholder="you@institution.org" />
            </label>
            <label>
              Organisation
              <input name="org" placeholder="Lab, university or company" />
            </label>
            <label>
              What should we explore?
              <textarea name="message" required rows="5" placeholder="A question, a collaboration, a direction." />
            </label>
            <Button type="submit" variant="forest">
              Contact us <Arrow />
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
