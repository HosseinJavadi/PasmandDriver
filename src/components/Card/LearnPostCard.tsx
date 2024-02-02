import React from "react";
import { Button } from "../Button";
import { LearnPostCardInterface } from ".";
import { Image } from "../Image";

export const LearnPostCard: React.FC<LearnPostCardInterface> = ({
  id: learnId,
  imgSrc,
  title,
  text,
}) => {
  return (
    <div className=" border-[1px] rounded-xl overflow-hidden border-secondary">
      <Image
        src={imgSrc}
        className=" max-h-[50vh] object-cover w-full"
        alt={title}
      />
      <div className="p-6 space-y-6">
        <h3 className="text-xl text-center">{title}</h3>
        <p className="text-sm text-black">{text.slice(0, 125)}...</p>
        <Button
          title="ادامه مطلب"
          type="Normal"
          href={`/Learn/Detail/${learnId}`}
          className={{ className: "mx-auto w-full xs:w-[50%]" }}
        />
      </div>
    </div>
  );
};
