import * as React from "react";
import style from "./ListItem.less";
import { BankOutlined, EnvironmentOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  location: string;
};

export const ListItem: React.FC<Props> = props => {
  const { title, location } = props;

  return (
    <div className={style.item}>
      <BankOutlined />
      <p className={style.title}> {title}</p>
      <p className={style.description}>
        <EnvironmentOutlined /> {location}
      </p>
    </div>
  );
};
