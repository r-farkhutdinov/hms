import * as React from "react";
import { BankOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import style from "./ChooseHotel.less";

type Props = {};

export const ChooseHotel: React.FC<Props> = props => {
  return (
    <div className={style.wrapper}>
      <p className={style.pageTitle}>
        <BankOutlined /> Choose the hotel
      </p>
      <Fade>
        <div className={style.form}></div>
      </Fade>
    </div>
  );
};
