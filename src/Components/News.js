import React,{useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const updateNews = async () => {
        // props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4e6b6c3e544df296d0e38b8acf1ff7&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - World News`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
       

        
    }, [])
   const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4e6b6c3e544df296d0e38b8acf1ff7&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };

        return (
            <>
                    <h1 className='text-center' style={{ margin: "100px" }}>World News - {capitalizeFirstLetter(props.category)} </h1>
                     {loading && <Spinner />}
                     <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={ <Spinner />}
                    > 
                        <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 88) : "In the Dark Ages, doctors did things differently. (For one thing, many were barbers.) Th"} urlImage={element.urlToImage ? element.urlToImage : "https://www.thestreet.com/.image/t_share/MTY4NjQ4MzQxOTIwMjI4OTk5/united-parcel-service.jpg"} newsUrl={element.url} author={element.author ? element.author.slice(0, 17) : 'Unknown'} date={element.publishedAt} channelName={element.source["name"]} />
                                </div>
                            })}
                        </div>
                        </div>
                     </InfiniteScroll> 
            </>
        )
}
News.defaultProps = {
    country: 'us',
    pageSize: 1,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News