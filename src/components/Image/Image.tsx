import React from "react";
import { ImageInterface } from ".";

export const Image: React.FC<ImageInterface> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <>
      <img src={src} className={className} alt={alt} />
    </>
  );
};
