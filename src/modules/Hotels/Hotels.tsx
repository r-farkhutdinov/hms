import * as React from 'react';
import { List, Skeleton, Space, Button, Avatar, Badge } from 'antd';
import { useStore } from '../../core/util';
import { observer } from 'mobx-react';
import { SettingOutlined, PlusOutlined, BankFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './Hotels.less';
import { HotelDetails } from './Details';
import { useIntl } from 'react-intl';
import { AddForm } from './AddForm';
import { useFetchHotelsQuery, HotelFieldsFragment } from '../../__generated__/graphql';

export const Hotels: React.FC = observer(() => {
  const { hotels } = useStore();
  const { selectedHotelId } = hotels;
  const { formatMessage: f } = useIntl();

  const { data, loading } = useFetchHotelsQuery();

  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
  const [showAddForm, setShowAddForm] = React.useState<boolean>(false);

  const [hotelId, setHotelId] = React.useState<number>(selectedHotelId);

  const handleHotelDetailsClick = (hotel: number) => {
    setHotelId(hotel);
    setShowDrawer(true);
  };

  return (
    <>
      <Space>
        <Button onClick={() => setShowAddForm(true)} type="primary" icon={<PlusOutlined />}>
          {f({ id: 'addHotel' })}
        </Button>
      </Space>

      <AddForm show={showAddForm} setShow={setShowAddForm} />

      <HotelDetails show={showDrawer} setShow={setShowDrawer} hotelId={hotelId} />

      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={data?.hotels || []}
        renderItem={(item: HotelFieldsFragment) => (
          <List.Item
            actions={[
              <Link to={`/hotels/${item.hotel_id}`}>
                <SettingOutlined />
              </Link>,
            ]}
          >
            <Skeleton title={false} loading={loading} active>
              <List.Item.Meta
                avatar={
                  <Badge count={undefined}>
                    <Avatar size="large" icon={<BankFilled />} />
                  </Badge>
                }
                title={
                  <span className={style.name} onClick={() => handleHotelDetailsClick(item.hotel_id)}>
                    {item.title}
                  </span>
                }
                description={item.location}
              />
              <div>{selectedHotelId === item.hotel_id ? f({ id: 'hotelSelected' }) : ''}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
});
