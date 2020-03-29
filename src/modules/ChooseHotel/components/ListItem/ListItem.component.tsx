import * as React from "react";
import style from "./ListItem.less";
import { EnvironmentOutlined } from "@ant-design/icons";
import classNames from "classnames";

type Props = {
  title: string;
  location: string;
  selected: boolean;
  onClick: () => void;
};

export const ListItem: React.FC<Props> = props => {
  const { title, location, selected, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(style.item, { [`${style.selected}`]: selected })}
    >
      <p className={style.title}> {title}</p>
      <p className={style.description}>
        <EnvironmentOutlined /> {location}
      </p>
    </div>
  );
};
