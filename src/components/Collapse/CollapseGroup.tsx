import { useState } from "react";
import { CollapseGroupInterface } from ".";
import Collapse from "./Collapse";

type CurrentCollapseType = {
  index?: number;
  show: boolean;
};

export const CollapseGroup: React.FC<CollapseGroupInterface> = ({
  items,
  removeElementAfterChange,
  className = "",
}) => {
  const [currentCollapse, setCurrentCollapse] = useState<CurrentCollapseType>({
    show: true,
  });
  return (
    <div className={`flex justify-center items-center flex-col ${className}`}>
      {items?.map((n, i) => (
        <Collapse
          className={n.className}
          title={n.title}
          icon={n.icon}
          key={i}
          index={currentCollapse.index === i && currentCollapse.show}
          keyItem={i}
          onClick={(index) =>
            setCurrentCollapse({
              ...currentCollapse,
              index: index!,
              show:
                currentCollapse.index === index ? !currentCollapse.show : true,
            })
          }
          element={
            currentCollapse.index === i || !removeElementAfterChange ? (
              n.element
            ) : (
              <></>
            )
          }
        />
      ))}
    </div>
  );
};
