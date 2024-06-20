import React from "react"
import NewsItem from "./NewsItem"
export default function NewsBoard({ category }) {
  const [article, setArticle] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
        const response = await fetch(url)
        const data = await response.json()
        setArticle(data.articles)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [category])
  console.log("article", article)
  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {article.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            imageUrl={news.urlToImage}
            newsUrl={news.url}
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
