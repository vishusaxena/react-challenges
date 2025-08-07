import React, { useEffect, useState } from "react";
import Comment from "./components/Comment";
import comments from "./data/comment";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    setData(comments);
    console.log(comments);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((c, i) => (
        <div className=" m-5">
          <Comment
            key={i}
            user={c.user}
            comment={c.comment}
            replies={c.replies}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
