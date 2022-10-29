import React, { useEffect, useState } from "react";
import Text, {Title} from './typography';
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
            <Text value={page.title} />
            {/* Spotta ut array med en ny map här */}
          </div>
        )
      })}
    </div>
  );
}
export default Pages;