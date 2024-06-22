import React from "react"
import NewsItem from "./NewsItem"
import NewsDetail from "./NewsDetail"
export default function NewsBoard({ category }) {
  const [article, setArticle] = React.useState([])
  const [detailView, setDetailView] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [totalResults, setTotalResults] = React.useState(0)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=9&page=${page}&apiKey=${
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
          setTotalResults(data.totalResults)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, page])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
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

  function handlePrevClick() {
    setPage((prevPage) => prevPage - 1)
  }
  function handleNextClick() {
    if (page * 9 >= totalResults) return
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <div className="">
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex justify-content-center  flex-wrap ">
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              id={index}
              title={news.title}
              description={news.description}
              imageUrl={news.urlToImage}
              setDetailView={setDetailView}
            />
          )
        })}
      </div>

      <nav aria-label="Page navigation  ">
        <ul className="pagination justify-content-center ">
          <li className="page-item ">
            <a
              className={`page-link ${page <= 1 && "disabled"}`}
              onClick={handlePrevClick}
            >
              Previous
            </a>
          </li>

          <li className={`page-item ${page === 1 && "active"}`}>
            <a
              className="page-link"
              onClick={page <= 1 ? null : handlePrevClick}
            >
              {page === 1 ? page : page - 1}
            </a>
          </li>

          <li className={`page-item ${page > 1 ? "active" : ""}`}>
            <a
              className="page-link"
              onClick={page === 1 ? handleNextClick : null}
            >
              {page === 1 ? page + 1 : page}
            </a>
          </li>

          <li className="page-item ">
            <a
              className="page-link"
              onClick={() => {
                page === 1 ? setPage(3) : handleNextClick()
              }}
            >
              {page === 1 ? page + 2 : page + 1}
            </a>
          </li>

          <li className="page-item ">
            <a
              className={`page-link  ${
                page * 9 >= totalResults ? "disabled" : ""
              }`}
              onClick={handleNextClick}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
