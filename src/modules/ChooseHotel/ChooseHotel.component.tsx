import * as React from "react";
import { BankOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import style from "./ChooseHotel.less";
import { useStore } from "../../core/util";
import { ListItem } from "./components/ListItem";
import { observer } from "mobx-react";
import { Button, message, Skeleton } from "antd";
import useRouter from "use-react-router";

export const ChooseHotel: React.FC = observer(() => {
  const { hotels, authorization } = useStore();
  const {
    loadHotels,
    hotels: hotelsOptions,
    selectHotel,
    loading,
    selectedHotelId
  } = hotels;
  const { history } = useRouter();

  React.useEffect(() => {
    loadHotels((authorization.user && authorization.user.id) || 0); // TODO: remove when ready
  }, []);

  const [hotel, setHotel] = React.useState<number>(selectedHotelId);

  const chooseHotel = () => {
    if (hotel === undefined) {
      message.error("Choose hotel to proceed");
    } else {
      selectHotel(hotel, history);
    }
  };

  return (
    <div className={style.wrapper}>
      <p className={style.pageTitle}>
        <BankOutlined /> Choose the hotel
      </p>
      <Fade>
        <div className={style.panel}>
          <Skeleton loading={loading} active>
            {hotelsOptions &&
              hotelsOptions.map(h => (
                <ListItem
                  onClick={() => setHotel(h.id)}
                  selected={h.id === hotel}
                  key={h.id}
                  location={h.location}
                  title={h.name}
                />
              ))}
          </Skeleton>
          <Button
            className={style.proceed}
            onClick={chooseHotel}
            disabled={hotel === undefined}
            type="primary"
          >
            Proceed
          </Button>
        </div>
      </Fade>
    </div>
  );
});
