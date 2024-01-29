import { Icon } from "../../asset/icons";
import { Button } from "../../components/Button";
import { Slider } from "../../components/Swiper";

export const Home = () => {
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
        href=""
      />
      <div className="grid xs:grid-cols-2 gap-5 mt-10">
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          href="FAQ"
        >
          <Icon iconType="Question" className="text-info h-7 w-7 " />
          سوالات متداول
        </Button>
        {/* <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          href=""
        >
          <Icon iconType="Help" className="text-warnDark h-7 w-7" />
          راهنما
        </Button> */}
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          href=""
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
          href="DoneRequests"
        >
          <Icon iconType="Report" className="text-primaryLight h-7 w-7" />
          درخواست ها
        </Button>
        <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          href=""
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
          href="ConfirmRequest"
        >
          <Icon iconType="Letter" className="text-primary h-7 w-7" />
          شروع کار
        </Button>
      </div>
    </div>
  );
};
