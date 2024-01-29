import { useContext, useEffect, useRef } from "react";
import { DeviceContext, DeviceEnum } from "../../context";
export const DeviceManager = () => {
  const deveiceManager = useRef<HTMLDivElement>(null);
  const deviceContext = useContext(DeviceContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      Array.from(deveiceManager.current!.children).forEach((n) => {
        const opacity = getComputedStyle(n).opacity;
        if (opacity === "1") {
          const device = DeviceEnum[n.id as keyof typeof DeviceEnum];
          deviceContext?.setMode?.(device);
        }
      });
    });
  }, []);

  return (
    <div ref={deveiceManager}>
      <div id="xs" className="w-0 h-0 opacity-0 xs:opacity-100"></div>
      <div id="sm" className="w-0 h-0 opacity-0 sm:opacity-100"></div>
      <div id="md" className=" w-0 h-0 opacity-0 md:opacity-100"></div>
      <div id="lg" className=" w-0 h-0  opacity-0 lg:opacity-100"></div>
      <div id="xl" className="w-0 h-0 opacity-0 xl:opacity-100"></div>
    </div>
  );
};
