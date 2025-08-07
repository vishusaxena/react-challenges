import React from "react";

const Comment = ({ user, comment, replies }) => {
  return (
    <div>
      <p className="">{user}</p>
      <p className="">{comment}</p>
      Replies:
      <div className={`  ${replies.length > 0 ? "mx-15 " : "mx-0"}`}>
        {" "}
        {replies.length > 0 &&
          replies.map((c, i) => (
            <Comment
              key={i}
              user={c.user}
              comment={c.comment}
              replies={c.replies}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
