import React from "react";
import { AvatarInterface } from ".";
import { AvatarImage } from "../../asset/images";

export const Avatar: React.FC<AvatarInterface> = React.memo(
  ({ url, className = "" }) => {
    return (
      <>
        <img
          src={url || AvatarImage}
          className={`${className} h-28 w-28 rounded-full object-contain border-2 border-successDark`}
        />
      </>
    );
  }
);
