// const about = () => {
//   return <div>about</div>;
// };

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// const About = () => <div>about page</div>;

function About() {
  const [page, setPage] = useState([]);

  const fetchData = () => {
    return axios
      .get("http://ecomapi.abdullahrafi.com/api/about-us")
      .then((response) => setPage(response.data["cmsPageDetails"]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {page.map((pageObj) => {
        return (
          <div>
            <h1>{pageObj.title}</h1>
            <p>{pageObj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default About;
