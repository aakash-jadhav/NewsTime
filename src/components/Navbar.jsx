import React from "react"

export default function Navbar({ setCategory, category }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          <span className="badge bg-light text-dark fs-4">NewsTime</span>
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item cursor-pointer">
              <div
                className={`nav-link ${
                  category === "technology" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => setCategory("technology")}
                role="button"
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  category === "business" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => setCategory("business")}
                role="button"
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "health" ? "active" : ""}`}
                aria-current="page"
                onClick={() => setCategory("health")}
                role="button"
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "sports" ? "active" : ""}`}
                aria-current="page"
                onClick={() => setCategory("sports")}
                role="button"
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  category === "entertainment" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => setCategory("entertainment")}
                role="button"
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
