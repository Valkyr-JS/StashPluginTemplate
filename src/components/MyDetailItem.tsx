import React from "react";

const MyDetailItem: React.FC<IMyDetailItem> = (props) => {
  const itemClassname = props.title.split(" ").join("").toLowerCase();
  return (
    <div className={"detail-item " + itemClassname}>
      <span className={"detail-item-title " + itemClassname}>
        {props.title}
      </span>
      <span className={"detail-item-value " + itemClassname}>
        {props.value}
      </span>
    </div>
  );
};

export default MyDetailItem;

interface IMyDetailItem {
  title: string;
  value: string;
}
