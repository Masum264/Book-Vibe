import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
   
    const {bookName, author, image, category, rating} = singleBook;
    return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
