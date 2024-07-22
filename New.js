import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class New extends Component {
  articles=[]
 
        constructor(){
          super();
    this.state={
      articles: this.articles
    }
    
        }
       async componentDidMount (){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0df71fb44f6423d9fea9684f240ad57`
        let data=await fetch(url)
        let parseddata=await data.json()
        this.setState({articles :parseddata.articles})
       }
  render() {
     
    return (
     <div className='container my-3 mx-3'>
     <div className='row'>
      {this.state.articles.map((element)=>{
       return  <div className="col-md-3">
       <NewsItems url={element.urlToImage?element.urlToImage :  "https://www.aljazeera.com/wp-content/uploads/2024/02/GettyImages-1996271864-1708347338.jpg?resize=1920%2C1440" } title={element.title} source={element.source.name} date={element.publishedAt} description={element.description} newsurl={element.url}/>
       </div>
      })}
     
  
   
   
     
     </div>
      </div>
    )
  }
}
