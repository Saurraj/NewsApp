// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import InfiniteScroll from "react-infinite-scroll-component";

// const apiKey = process.env.REACT_APP_NEWS_API_KEY;

// export default class NewsComponents extends Component {
//   state = {
//     articles: [],
//     page: 1,
//     totalResults: 0,
//   };

//   async componentDidMount() {
//     this.updateNews();
//   }

//   updateNews = async () => {
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     this.setState((prevState) => ({
//       articles: prevState.articles.concat(data.articles),
//       totalResults: data.totalResults,
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { category } = this.props;
//     const { articles, totalResults } = this.state;

//     return (
//       <div className="container my-4">
//         <div
//           className="d-flex justify-content-center"
//           style={{ marginTop: "90px" }}
//         >
//           <h1>
//             Top - {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
//             Headlines
//           </h1>
//         </div>
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={this.updateNews}
//           hasMore={articles.length < totalResults}
//           loader={
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//               }}
//             >
//               <h2
//                 className="spinner-border text-center align-items-center"
//                 role="status"
//               ></h2>
//             </div>
//           }
//         >
//           <div className="container row my-4">
//             {articles.map((element) => (
//               <div className="container col-md-4 my-3" key={element.url}>
//                 <NewsItem
//                   title={element.title}
//                   description={element.description}
//                   ImageUrl={element.urlToImage}
//                   NewsUrl={element.url}
//                   date={element.publishedAt}
//                   authour={element.source.name}
//                 />
//               </div>
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }

// import React, { useState, useEffect } from "react";
// import NewsItem from "./NewsItem";
// import InfiniteScroll from "react-infinite-scroll-component";

// const apiKey = process.env.REACT_APP_NEWS_API_KEY;

// const NewsComponent = ({ country, category, pageSize }) => {
//   const [articles, setArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   useEffect(() => {
//     updateNews();
//   }, []);

//   const updateNews = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     setArticles((prevArticles) => [...prevArticles, ...data.articles]);
//     setTotalResults(data.totalResults);
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div className="container my-4">
//       <div
//         className="d-flex justify-content-center"
//         style={{ marginTop: "90px" }}
//       >
//         <h1>
//           Top - {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
//         </h1>
//       </div>
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={updateNews}
//         hasMore={articles.length < totalResults}
//         loader={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           >
//             <h2
//               className="spinner-border text-center align-items-center"
//               role="status"
//             ></h2>
//           </div>
//         }
//       >
//         <div className="container row my-4">
//           {articles.map((element) => (
//             <div className="container col-md-4 my-3" key={element.url}>
//               <NewsItem
//                 title={element.title}
//                 description={element.description}
//                 imageUrl={element.urlToImage}
//                 newsUrl={element.url}
//                 date={element.publishedAt}
//                 author={element.source.name}
//               />
//             </div>
//           ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default NewsComponent;

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const NewsComponent = ({ country, category, pageSize, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    updateNews();
  }, [searchQuery]);

  const updateNews = async () => {
    let url;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setTotalResults(data.totalResults);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="container my-4">
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "90px" }}
      >
        <h1>
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : `Top - ${
                category.charAt(0).toUpperCase() + category.slice(1)
              } Headlines`}
        </h1>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={updateNews}
        hasMore={articles.length < totalResults}
        loader={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <h2
              className="spinner-border text-center align-items-center"
              role="status"
            ></h2>
          </div>
        }
      >
        <div className="container row my-4">
          {articles.map((element) => (
            <div className="container col-md-4 my-3" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                date={element.publishedAt}
                author={element.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewsComponent;
