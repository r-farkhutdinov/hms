import * as React from 'react';
import { List, Skeleton, Space, Button } from 'antd';
import { HotelModelType } from './store/hotels.model';
import { useStore } from '../../core/util';
import { observer } from 'mobx-react';
import { SettingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './Hotels.less';
import { HotelDetails } from './Details';
import { useIntl } from 'react-intl';
import { AddForm } from './AddForm';

export const Hotels: React.FC = observer(() => {
  const { hotels, authorization } = useStore();
  const { loadHotels, hotels: hotelsList, loading, selectedHotelId } = hotels;
  const { formatMessage: f } = useIntl();

  React.useEffect(() => {
    loadHotels((authorization.user && authorization.user.id) || 0); // TODO: remove when ready
  }, []);

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
        dataSource={hotelsList}
        renderItem={(item: HotelModelType) => (
          <List.Item
            actions={[
              <Link to={`/hotels/${item.id}`}>
                <SettingOutlined />
              </Link>,
            ]}
          >
            <Skeleton title={false} loading={loading} active>
              <List.Item.Meta
                title={
                  <span className={style.name} onClick={() => handleHotelDetailsClick(item.id)}>
                    {item.name}
                  </span>
                }
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>{selectedHotelId === item.id ? f({ id: 'hotelSelected' }) : ''}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
});
