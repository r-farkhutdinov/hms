import * as React from 'react';
import { BankOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import style from './ChooseHotel.less';
import { useStore } from '../../core/util';
import { ListItem } from './components/ListItem';
import { observer } from 'mobx-react';
import { Button, message, Skeleton } from 'antd';
import useRouter from 'use-react-router';
import { useFetchHotelsQuery } from '../../__generated__/graphql';

export const ChooseHotel: React.FC = observer(() => {
  const { hotels } = useStore();
  const { selectHotel, selectedHotelId } = hotels;
  const { history } = useRouter();

  const { data, loading } = useFetchHotelsQuery();

  const [hotel, setHotel] = React.useState<number>(selectedHotelId);

  const chooseHotel = () => {
    if (hotel === undefined) {
      message.error('Choose hotel to proceed');
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
            {data?.hotels?.map(h => (
              <ListItem
                onClick={() => setHotel(h.hotel_id)}
                selected={h.hotel_id === hotel}
                key={h.hotel_id}
                location={h.location}
                title={h.title}
              />
            ))}
          </Skeleton>
          <Button className={style.proceed} onClick={chooseHotel} disabled={hotel === undefined} type="primary">
            Proceed
          </Button>
        </div>
      </Fade>
    </div>
  );
});
