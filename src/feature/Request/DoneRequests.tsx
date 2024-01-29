import { RequestCard } from "../../components/Card";

export const DoneRequests = () => {
  return (
    <div className="p-2 py-3">
      <h3 className="text-center text-sm">درخواست های انجام شده</h3>
      <div className="grid grid-cols-1 gap-4">
        {Array(20)
          .fill("")
          .map((n, i) => (
            <RequestCard
              key={i}
              address="قم"
              dateTime={new Date()}
              price={2002320}
              status={i % 2 == 0 ? "DriverCanceled" : "Done"}
            />
          ))}
      </div>
    </div>
  );
};
