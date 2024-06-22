import React from "react"
import image from "../assets/news.jpg"

export default function NewsDetail({ article, setDetailView }) {
  return (
    <>
      <div className="back container my-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setDetailView(null)}
        >
          Back
        </button>

        <h3>{article.title}</h3>

        <img
          src={article?.urlToImage || image}
          className="img-fluid rounded mx-auto d-block my-3"
          alt="..."
          style={{ maxHeight: "400px" }}
        ></img>
        <div className="container-sm">
          <p>{article?.description || "Description not available. "}</p>
          <p>{article?.content || "Content not available"}</p>
          <div className="alert alert-light" role="alert">
            <p>
              <b>Published at </b>
              {article.publishedAt}
            </p>
            <p>
              <b>Source: </b>
              {article?.source.name || "Source not found"}
            </p>
            <p>
              <b>Author: </b>
              {article?.author || "Author not found"}
            </p>
          </div>
        </div>
        <div className="alert alert-secondary" role="alert">
          <a href={article.url}>Click here</a> to visit source website.
        </div>
      </div>
    </>
  )
}
