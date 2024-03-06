import React, { useEffect, useState } from "react";

const LikeButton = ({ liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    console.log(isLiked);
  }, [isLiked]);

  return (
    <>
      {isLiked ? (
        <img
          src="/assets/LikeButton/Favorite_fill.svg"
          alt=""
          onClick={handleLike}
        />
      ) : (
        <img
          src="/assets/LikeButton/Favorite.svg"
          alt=""
          onClick={handleLike}
        />
      )}
    </>
  );
};

export default LikeButton;
