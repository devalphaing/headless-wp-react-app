import React, { Fragment, useEffect, useState } from "react";
import styles from "./About.module.css";
import { getPageContent } from "../api/getData";

const About = () => {

  const [pageContent, setPageContent] = useState(null);

  useEffect(()=>{
    getDataFromApi();
  }, [])

  const getDataFromApi = async()=> {
    const response = await getPageContent('about');
    setPageContent(removeHtmlTags(response.data[0].content.rendered));
    console.log(response);
  }

  const removeHtmlTags = (text)=> {
    return text.replace(/<[^>]*>/g, '');
  }

  return (
    <Fragment>
      <div className={styles["heading-container"]}>
        <div className={styles["heading-head"]}>About Us</div>
      </div>

      <div className={styles["info-container"]}>
        <div className={styles["info-text"]}>
          {pageContent}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
