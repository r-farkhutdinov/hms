import * as React from "react";
import { BankOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import style from "./ChooseHotel.less";
import { useStore } from "../../core/util";
import { ListItem } from "./components/ListItem";

export const ChooseHotel: React.FC = () => {
  const { hotels, authorization } = useStore();
  const { loadHotels, hotels: hotelsOptions } = hotels;

  React.useEffect(() => {
    loadHotels(authorization.user.id);
  }, []);

  return (
    <div className={style.wrapper}>
      <p className={style.pageTitle}>
        <BankOutlined /> Choose the hotel
      </p>
      <Fade>
        <div className={style.panel}>
          {hotelsOptions &&
            hotelsOptions.map(h => (
              <ListItem key={h.id} location={h.location} title={h.name} />
            ))}
        </div>
      </Fade>
    </div>
  );
};
