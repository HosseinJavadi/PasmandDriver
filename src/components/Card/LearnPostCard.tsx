import React from "react";
import { Button } from "../Button";
import { LearnPostCardInterface } from ".";

export const LearnPostCard: React.FC<LearnPostCardInterface> = ({
  imgSrc,
  title,
  text,
}) => {
  return (
    <div className=" border-[1px] rounded-xl overflow-hidden border-secondary">
      <img src={imgSrc} className=" max-h-[50vh] object-cover w-full" />
      <div className="p-6 space-y-6">
        <h3 className="text-xl text-center">{title}</h3>
        <p className="text-sm text-black">{text.slice(0, 125)}...</p>
        <Button
          title="ادامه مطلب"
          type="Normal"
          className={{ className: "mx-auto w-full xs:w-[50%]" }}
        />
      </div>
    </div>
  );
};
