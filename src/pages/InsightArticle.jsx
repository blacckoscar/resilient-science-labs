import { Link, Navigate, useParams } from 'react-router-dom'
import { Arrow, Eyebrow } from '../components/ui.jsx'
import { insights } from '../content.js'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = insights.find((item) => item.slug === slug)
  if (!article) return <Navigate to="/insights" replace />

  return (
    <article className="section article">
      <div className="shell article__wrap">
        <Link to="/insights" className="text-link">
          All insights
        </Link>
        <Eyebrow>{article.kind}</Eyebrow>
        <h1>{article.title}</h1>
        <p className="lede">{article.excerpt}</p>
        <div className="article__media">
          <img src={article.image} alt="" />
        </div>
        <div className="prose">
          {article.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <Link to="/contact" className="text-link">
          Continue the conversation <Arrow />
        </Link>
      </div>
    </article>
  )
}
