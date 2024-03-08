import React, { useEffect, useState } from "react";

const LikeButton = ({ isLiked, handleClick }) => {
  return (
    <>
      {isLiked ? (
        <img
          src="/assets/LikeButton/Favorite_fill.svg"
          alt=""
          onClick={handleClick}
        />
      ) : (
        <img
          src="/assets/LikeButton/Favorite.svg"
          alt=""
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default LikeButton;
