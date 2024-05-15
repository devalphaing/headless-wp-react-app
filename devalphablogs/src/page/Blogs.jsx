import React, { Fragment, useEffect, useState } from "react";
import { getPosts } from "../api/getData";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    try{
      const response = await getPosts();
      setPageContent(response.data);
      console.log(response.data);
    }catch(err){
      console.log(err);
    }
  };

  const removeHtmlTags = (text) => {
    text = text.substring(0, 200);
    return text.replace(/<[^>]*>|&hellip;/g, '');
  }  

  const clickHandler = (item)=> {
    console.log(item);
  }

  return (
    <Fragment>
      <div className={styles["heading-container"]}>Blogs</div>
      {pageContent && pageContent.map((item, index) => (
        <div className={styles["blogContainer"]} key={index}>
          <a className={styles["heading"]} onClick={() => clickHandler(item)}>
            {item.title.rendered}
          </a>
          <div className={styles["excerpt"]}>
            {removeHtmlTags(item.excerpt.rendered)}...
          </div>
          <hr />
        </div>
      ))}
    </Fragment>
  );
};

export default Blogs;
