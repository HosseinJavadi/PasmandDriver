import { Darkhast } from "../../asset/images";
import { RequestSwiper } from "../../components/Swiper";
import { GarbageType } from "../../interfaces/RequestDriverInterface";

export const ConfirmRequest = () => {
  const garbages: GarbageType[] = [
    { title: "پلاستیک", priceUnit: 2000, totoalPrice: 200000, wieght: 5 },
    { title: "کارتن", priceUnit: 2000, totoalPrice: 200000, wieght: 5 },
    { title: "فلز", priceUnit: 2000, totoalPrice: 200000, wieght: 5 },
  ];
  return (
    <div className="p-2">
      <img src={Darkhast} />
      <RequestSwiper
        className="mt-10"
        items={Array(20)
          .fill("")
          .map((n, i) => {
            return {
              address: "قم",
              dateTime: new Date(),
              price: 2002320,
              status: i % 2 == 0 ? "Wating" : "Canceled",
              garbages: garbages,
            };
          })}
      />
    </div>
  );
};
