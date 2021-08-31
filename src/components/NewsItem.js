import React from 'react'

const NewsItem =(props)=> {
    
    
        let {title, description, imageUrl, newsUrl,author, date, source} = props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2021/08/Indianflag.jpg?fit=1000%2C562":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6><span class="badge bg-secondary">{source}</span></h6>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
