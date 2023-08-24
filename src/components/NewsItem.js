// import React, { Component } from "react";

// export default class NewsItem extends Component {
//   render() {
//     let { title, description, ImageUrl, NewsUrl, date, authour } = this.props;

//     const maxTitleLength = 50;
//     title =
//       title.length > maxTitleLength
//         ? title.slice(0, maxTitleLength) + "..."
//         : title;

//     if (description) {
//       const maxDescriptionLength = 120;
//       description =
//         description.length > maxDescriptionLength
//           ? description.slice(0, maxDescriptionLength) + "..."
//           : description;
//     }

//     const placeholderImageUrl =
//       "https://via.placeholder.com/467x263.png/CCCCCC/000000?text=No+Image";

//     return (
//       <div className="card mb-4">
//         <img
//           src={ImageUrl || placeholderImageUrl}
//           className="card-img-top"
//           alt="News"
//         />

//         <div className="card-body">
//           <h5 className="card-title">
//             {title}{" "}
//             <span
//               className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
//               style={{ zIndex: 1, left: "90%" }}
//             >
//               {authour}
//             </span>
//           </h5>

//           {description && <p className="card-text">{description}.</p>}
//           <div className="d-flex justify-content-between align-items-center">
//             <a
//               href={NewsUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-sm btn-dark"
//             >
//               Read More
//             </a>
//             <p className="card-text">{date.slice(0, 10)}.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";

const NewsItem = ({ title, description, imageUrl, newsUrl, date, author }) => {
  const maxTitleLength = 50;
  title =
    title.length > maxTitleLength
      ? title.slice(0, maxTitleLength) + "..."
      : title;

  if (description) {
    const maxDescriptionLength = 120;
    description =
      description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + "..."
        : description;
  }

  const placeholderImageUrl =
    "https://via.placeholder.com/467x263.png/CCCCCC/000000?text=No+Image";

  return (
    <div className="card mb-4">
      <img
        src={imageUrl || placeholderImageUrl}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}{" "}
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {author}
          </span>
        </h5>
        {description && <p className="card-text">{description}.</p>}
        <div className="d-flex justify-content-between align-items-center">
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <p className="card-text">{date.slice(0, 10)}.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
