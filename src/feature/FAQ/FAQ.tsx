import { useEffect } from "react";
import { RequestApi } from "../../apis";
import { Button } from "../../components/Button";
import { CollapseGroup, CollapseInterface } from "../../components/Collapse";
import { Image } from "../../components/Image";
import { useFetch } from "../../hooks";
import { BaseResponseInterface, FAQResponseType } from "../../interfaces";
export const FAQ = () => {
  const { data, reFetch } = useFetch<
    BaseResponseInterface<Array<FAQResponseType>>,
    any,
    any
  >({
    request: RequestApi.getFAQList({ type: "driver" }, ""),
  });
  useEffect(() => {
    reFetch(null, { type: "driver" });
  }, []);
  const items: Array<CollapseInterface> | undefined =
    data?.data?.data?.map<CollapseInterface>((n) => {
      return {
        title: n.title,
        element: <p>{n.description}</p>,
        icon: "Question",
      };
    });
  return (
    <>
      <div className="p-2">
        <Image src="/FAQ4.png" />
        <h1 className="text-center text-md mt-5">سوالات متداول</h1>
        <CollapseGroup items={items} className="mt-6 " />
        <div className="flex justify-between items-center px-4  w-full mt-8">
          <p>آیا سوال متفاوتی دارید ؟</p>
          <Button title="ارتباط با پشتیبانی" />
        </div>
      </div>
    </>
  );
};
