import image from "../assets/news.jpg"
export default function NewsItem({
  title,
  description,
  imageUrl,
  id,
  setDetailView,
}) {
  function handleClick(id) {
    setDetailView(id)
  }
  return (
    <div
      className="card border-2 rounded-4 d-inline-grid m-3 "
      style={{ maxWidth: "345px", minHeight: "400px" }}
    >
      <img
        src={imageUrl ? imageUrl : image}
        className="card-img-top img-fluid"
        alt="..."
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          {description
            ? description
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minus
molestiae maiores laborum quasi suscipit!`}
        </p>
        <a onClick={() => handleClick(id)} className="btn btn-dark">
          Read more
        </a>
      </div>
    </div>
  )
}
