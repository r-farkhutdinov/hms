import * as React from "react";
import { Drawer, Skeleton } from "antd";
import { useStore } from "../../../core/util";
import { observer } from "mobx-react";
import {
  EnvironmentOutlined,
  ShopOutlined,
  DatabaseOutlined
} from "@ant-design/icons";
import style from "./Details.less";

export type HotelDetailsProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  hotelId: number;
};

export const HotelDetails: React.FC<HotelDetailsProps> = observer(props => {
  const { show, setShow, hotelId } = props;

  const { hotels } = useStore();

  const { hotelDetailsLoading, hotelDetails, loadHotelDetails } = hotels;

  React.useEffect(() => {
    loadHotelDetails(hotelId);
  }, [hotelId]);

  return (
    <Drawer
      width={400}
      title={`${
        hotelDetailsLoading ? "Loading" : hotelDetails && hotelDetails.name
      } - Details`}
      placement="right"
      closable={false}
      onClose={() => setShow(false)}
      visible={show}
      className={style.drawer}
    >
      <Skeleton active loading={hotelDetailsLoading}>
        <p>
          <EnvironmentOutlined className={style.icon} />{" "}
          <span className={style.title}>Location: </span>
          {hotelDetails && hotelDetails.location}
        </p>

        <p>
          <ShopOutlined className={style.icon} />{" "}
          <span className={style.title}>Description: </span>
          {hotelDetails && hotelDetails.description}
        </p>

        <p>
          <DatabaseOutlined className={style.icon} />{" "}
          <span className={style.title}>System ID: </span>
          {hotelDetails && hotelDetails.id}
        </p>
      </Skeleton>
    </Drawer>
  );
});
