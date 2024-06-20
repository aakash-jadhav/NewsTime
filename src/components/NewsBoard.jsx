import React from "react"
import NewsItem from "./NewsItem"
import NewsDetail from "./NewsDetail"
export default function NewsBoard({ category }) {
  const [article, setArticle] = React.useState([])
  const [detailView, setDetailView] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
        setLoading(true)
        const response = await fetch(url)
        if (response.status >= 400) {
          throw new Error("Server Error")
        } else {
          const data = await response.json()
          setArticle(data.articles)
          setError(null)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category])

  if (loading) {
    return (
      <div class="text-center mt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (error) {
    return <div className="container">Error: {error.message}</div>
  }

  if (detailView !== null) {
    return (
      <NewsDetail article={article[detailView]} setDetailView={setDetailView} />
    )
  }
  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {article.map((news, index) => {
        return (
          <NewsItem
            key={index}
            id={index}
            title={news.title}
            description={news.description}
            imageUrl={news.urlToImage}
            article={news}
            setDetailView={setDetailView}
          />
        )
      })}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
