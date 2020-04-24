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
  guestId: number;
};

export const GuestDetails: React.FC<HotelDetailsProps> = observer(
  ({ show, setShow, guestId }) => {
    const { guests } = useStore();

    const { loading, loadGuestDetails, guestDetails } = guests;

    React.useEffect(() => {
      loadGuestDetails(guestId);
    }, [guestId]);

    return (
      <Drawer
        width={400}
        title={`${
          loading
            ? "Loading"
            : guestDetails &&
              `${guestDetails.firstName} ${guestDetails.lastName}`
        } - Details`}
        placement="right"
        closable={false}
        onClose={() => setShow(false)}
        visible={show}
        className={style.drawer}
      >
        <Skeleton active loading={loading}>
          <p>
            <EnvironmentOutlined className={style.icon} />{" "}
            <span className={style.title}>Location: </span>
          </p>

          <p>
            <ShopOutlined className={style.icon} />{" "}
            <span className={style.title}>Description: </span>
          </p>

          <p>
            <DatabaseOutlined className={style.icon} />{" "}
            <span className={style.title}>System ID: </span>
          </p>
        </Skeleton>
      </Drawer>
    );
  }
);
