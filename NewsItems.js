import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    let {url,title,description,newsurl,date,source} =this.props;
    return (
      <div >
        <div className="card mx-3 my-3row" style={{width : "15rem"}}>
        
  <img src={url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5><span className='badge bgsecondary'>{source}</span>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'/>on {new Date(date).toLocaleDateString()
    }</p>
    <a href={newsurl} className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
    )
  }
}
