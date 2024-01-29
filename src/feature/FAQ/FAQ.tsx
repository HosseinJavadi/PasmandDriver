import { Button } from "../../components/Button";
import { CollapseGroup, CollapseInterface } from "../../components/Collapse";

export const FAQ = () => {
  const items: Array<CollapseInterface> = [
    {
      title: "در آمد در این اپلیکیشین واقعی هست ؟",
      icon: "Letter",
      element: <>asdasdasdadadadsadadsadsadadadadadadasdsadsadasd</>,
    },
    {
      title: "در آمد در این اپلیکیشین واقعی هست ؟",
      icon: "Letter",
    },
    {
      title: "در آمد در این اپلیکیشین واقعی هست ؟",
      icon: "Letter",
    },
    {
      title: "در آمد در این اپلیکیشین واقعی هست ؟",
      icon: "Letter",
    },
    {
      title: "در آمد در این اپلیکیشین واقعی هست ؟",
      icon: "Letter",
      element: (
        <div className="p-2  break-all">
          {Array(1000)
            .fill(0)
            .map((n) => n)}
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="p-2">
        <img src="/FAQ4.png" />
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
