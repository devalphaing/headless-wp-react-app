import React, { Fragment } from "react";
import styles from "./SingleBlog.module.css";
import { useLocation } from "react-router-dom";

const SingleBlog = ({ data }) => {
  const location = useLocation();
  const receivedData = location.state;

  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]*>/g, "");
  };

  return (
    <Fragment>
      <div className={styles["heading-container"]}>
          {removeHtmlTags(receivedData.title.rendered)}
      </div>

      <div className={styles["content-container"]}>
        {removeHtmlTags(receivedData.content.rendered)}
      </div>
    </Fragment>
  );
};

export default SingleBlog;
