import React from 'react'

const Newsitem = (props) => {

    let { title, description, urlImage, newsUrl, author, date, channelName } = props;
    return (
    

        <>
          <div className="my-3">
            <div className="card text-right" >
               <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                    </div>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-style bg-success">{channelName} </span>
              <img src={urlImage} className="item card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text" ><small style={{ color: "red" }} className="text-muted" >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <p className='btn-read-more'><a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read More</a></p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Newsitem
