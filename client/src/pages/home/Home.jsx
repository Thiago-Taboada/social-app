import React, { useEffect } from 'react';
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Inicio - Super Social";
  }, []);

  return (
    <div className="home">
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
