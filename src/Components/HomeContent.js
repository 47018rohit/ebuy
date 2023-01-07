import React from 'react'

export default function HomeContent() {
  return (
    <div className='homeDisplay '>
      <div className="category-link d-flex flex-row justify-content-center align-items-center">
        <div className="btn-group ">
          <button type="button " className="btn btn-light px-4 " >
            Shop Now
          </button>
        </div>
        <div className="btn-group dropdown  ">
          <button type="button " className="btn btn-light px-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Shop By Category
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action three</a></li>
            <li><a className="dropdown-item" href="/">Action three</a></li>
            <li><a className="dropdown-item" href="/">Action three</a></li>
          </ul>
        </div>
      </div>
      {/* owner from unsplash: https://unsplash.com/@timmossholder */}
    </div>
  )
}
