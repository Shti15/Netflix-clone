import React from 'react'

function Card(props) {
  return (
    <div className="card bg-base-100 image-full w-96 flex-shrink-0 text-white">
            <figure>
              <img src={props.source} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              <div className="card-actions justify-start">
                <button
                  type="button"
                  className="btn bg-[#E50914] btn-md px-2 me-md-2 my-[15px] tracking-[1px] border-[#E50914]  text-white "
                  // onClick={navigate(`/MoviePage/${movieData.result.data[1].movieId}`)}
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
  )
}

export default Card