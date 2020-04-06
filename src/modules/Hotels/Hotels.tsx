import * as React from "react";
import { List, Skeleton } from "antd";
import { HotelModelType } from "./store/hotels.model";
import { useStore } from "../../core/util";
import { observer } from "mobx-react";
import { SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Hotels: React.FC = observer(() => {
  const { hotels, authorization } = useStore();
  const { loadHotels, hotels: hotelsList, loading, selectedHotelId } = hotels;

  React.useEffect(() => {
    loadHotels((authorization.user && authorization.user.id) || 0); // TODO: remove when ready
  }, []);

  return (
    <>
      <h1>Hotels</h1>
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
              </Link>
            ]}
          >
            <Skeleton title={false} loading={loading} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>
                {selectedHotelId === item.id ? "Currently selected" : ""}
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
});
