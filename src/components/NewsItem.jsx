import image from "../assets/news.jpg"
import NewsDetail from "./NewsDetail"
export default function NewsItem({ title, description, imageUrl, newsUrl }) {
  return (
    <div
      className="card border-2 rounded-4 d-inline-grid m-3 "
      style={{ maxWidth: "345px" }}
    >
      <img
        src={imageUrl ? imageUrl : image}
        className="card-img-top"
        alt="..."
        style={{ maxHeight: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>

        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minus
molestiae maiores laborum quasi suscipit, sapiente vel cumque voluptate
animi!`}
        </p>
        <a href={<NewsDetail />} target="_self" className="btn btn-light">
          Read more
        </a>
      </div>
    </div>
  )
}
