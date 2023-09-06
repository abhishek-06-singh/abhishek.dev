import React, { useState, useEffect } from "react";
import Loading from "../landing_page/loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ fontSize: "large", color: "red" }}>hello</div>
      )}
    </div>
  );
};

export default Home;
