import * as React from 'react';
import { Tabs, Skeleton, Badge } from 'antd';
import { useParams } from 'react-router-dom';
import { General } from './Tabs/General';
import { useFetchHotelsByPkQuery, HotelFieldsFragment } from '../../../__generated__/graphql';
import { Rooms } from './Tabs/Rooms';
import { Services } from './Tabs/Services';
import { Prices } from './Tabs/Prices';

const { TabPane } = Tabs;

const tabs = (data: HotelFieldsFragment) => [
  <TabPane key="0" tab="General information">
    <General data={data} />
  </TabPane>,
  <TabPane key="1" tab={<span>Room configurations {<Badge count={'!'} />}</span>}>
    <Rooms />
  </TabPane>,
  <TabPane key="2" tab="Services">
    <Services />
  </TabPane>,
  <TabPane key="3" tab="Prices">
    <Prices />
  </TabPane>,
];

export const HotelSettings: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useFetchHotelsByPkQuery({ variables: { id: +id } });

  return (
    <Tabs defaultActiveKey="0" tabPosition="right">
      <Skeleton loading={loading} active></Skeleton>
      {...tabs(data?.hotels_by_pk)}
    </Tabs>
  );
};
