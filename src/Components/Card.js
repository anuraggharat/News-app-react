import React from 'react'

export default function Card({item}){
    return (
      <div className="card mb-3 bg-white border-0 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.image}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <p className="card-text">{item.description}</p>
              <div className="d-flex justify-content-between">
                <p className="card-text">
                  <small className="text-muted">{item.publishedAt}</small>
                </p>
                <p>{item.source.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}