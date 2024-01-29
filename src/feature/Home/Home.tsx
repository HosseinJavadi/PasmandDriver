import { useNavigate } from "react-router-dom";
import { Icon } from "../../asset/icons";
import { Button } from "../../components/Button";
import { RequestCard } from "../../components/Card";
import { Slider } from "../../components/Swiper";

export const Home = () => {
  const navigation = useNavigate();
  return (
    <div className="xs:p-3 md:p-1">
      <Slider className="rounded-xl" />
      <Button
        title={`امتیاز شما (4.9)`}
        className={{
          className: "mx-auto mt-5 gap-5 px-3",
          iconClassName: "text-warn",
        }}
        type="Icon"
        icon="Star"
      />
      <div className="grid xs:grid-cols-2 gap-10 mt-10">
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          onClick={() => navigation("/FAQ")}
        >
          <Icon iconType="Question" className="text-info h-7 w-7 " />
          سوالات
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
        >
          <Icon iconType="Help" className="text-warnDark h-7 w-7" />
          راهنما
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
        >
          <Icon iconType="TV" className="text-successDark h-7 w-7" />
          آموزش
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
        >
          <Icon iconType="Report" className="text-primaryLight h-7 w-7" />
          گزارش ها
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
        >
          <Icon iconType="User" className="text-black h-7 w-7" />
          کاربری
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          onClick={() => navigation("ConfirmRequest")}
        >
          <Icon iconType="Letter" className="text-primary h-7 w-7" />
          شروع کار
        </Button>
      </div>
      <h3 className="text-center font-bold mt-6 text-sm">درخواست های فعال</h3>

      <div className="grid grid-cols-1 gap-4">
        {Array(20)
          .fill("")
          .map((n, i) => (
            <RequestCard
              key={i}
              address="قم"
              dateTime={new Date()}
              price={2002320}
              status={i % 2 == 0 ? "Wating" : "Canceled"}
            />
          ))}
      </div>
    </div>
  );
};
