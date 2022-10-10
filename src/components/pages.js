import React, { useEffect, useState } from "react";
import axios from "axios";
const Pages = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3000/api/graphql", {
      query: `query {
        Pages {
          docs {
            title
            content
            id
          }
        }
      }`,
      variables: {}
    }).then((data) => {
      //console.log(data.data);
      setPages(data.data.data.Pages.docs);
    });
  });
  return (
    <div>
      {pages.map((page) => {
        return (
          <div key={page.id}>
            <h1>{page.title}</h1>
          </div>
        )
      })}
    </div>
  );
}
export default Pages;