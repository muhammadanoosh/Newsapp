import React from 'react'

export default function Slider() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/smile.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </>
  )
}
