import * as React from 'react';
import { DatePicker, Space, Slider, Input } from 'antd';
import style from './FilterPanel.less';
import { useIntl } from 'react-intl';
import { DateRangeType } from '../../Bookings.component';
import { Moment } from 'moment';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

type Props = {
  dates: DateRangeType;
  setDates: (dates: DateRangeType) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
};

export const FilterPanel: React.FC<Props> = ({ dates, setDates, zoom, setZoom }) => {
  const { formatMessage: f } = useIntl();

  const onDatesChange = (values: Moment[]) => {
    setDates({ startDate: values[0], endDate: values[1] });
  };

  return (
    <div className={style.panel}>
      <Space>
        {f({ id: 'config' })}
        <RangePicker onChange={onDatesChange} defaultValue={[dates.startDate, dates.endDate]} />

        <Input placeholder={'Find booking by guest name'} />

        <Button type="primary" icon={<PlusOutlined />}>
          Add booking
        </Button>

        <Slider
          marks={{ 1: 'small', 20: 'large' }}
          style={{ width: 200, margin: '0 30px' }}
          min={1}
          max={20}
          onChange={v => setZoom(v as number)}
          value={zoom}
        />
      </Space>
    </div>
  );
};
