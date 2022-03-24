import "./Category.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="category-div">
      {categories.map((category) => {
        return (
          <span key={category._id} className="category-chips">
            {category.categoryName}
          </span>
        );
      })}
    </div>
  );
};
