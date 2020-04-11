import * as React from "react";
import { HotelModelType } from "../../../modules/Hotels/store/hotels.model";
import { ShopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import style from "../HeaderSiderLayout.less";

type Props = {
  selectedHotel: HotelModelType;
};

export const HotelDropdown: React.FC<Props> = ({ selectedHotel }) => {
  return (
    <div className={style.hotel}>
      <ShopOutlined />{" "}
      <span>
        {(selectedHotel && selectedHotel.name) || "No hotel chosen"}{" "}
        <Link to={"/chooseHotel"}>(change)</Link>
      </span>
    </div>
  );
};
