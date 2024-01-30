import { useNavigate, useParams } from "react-router-dom";
import { learnData } from "./index";
import { Button } from "../../components/Button";

export const LearnDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const learnPost = learnData?.find((learn) => learn.id === +params?.learnId!);
  return (
    <div>
      {learnPost ? (
        <div className="p-2">
          <div className="max-w-7xl border-[1px] border-secondary p-6 mx-auto rounded-lg shadow-md overflow-hidden">
            <div>
              <img
                src={learnPost.imgSrc}
                alt="learn-post-cover"
                className="max-h-[60vh] object-cover overflow-hidden w-full rounded-lg shadow-[0_0_3px] shadow-secondaryDark"
              />
            </div>
            <div className="py-6 space-y-6">
              <h3 className="text-center text-xl ">{learnPost.title}</h3>
              <p className="text-justify leading-8">{learnPost.text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center flex-col gap-3 bg-secondary rounded-lg border-[1px] border-secondary p-6">
            <h3 className="text-xl">{params?.learnId} یافت نشد!</h3>
            <Button
              title="بازگشت"
              className={{ className: "w-full bg-primary" }}
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
