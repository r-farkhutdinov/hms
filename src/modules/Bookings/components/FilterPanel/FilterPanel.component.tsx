import * as React from 'react';
import { DatePicker, Space } from 'antd';
import style from './FilterPanel.less';
import { useIntl } from 'react-intl';
import { DateRangeType } from '../../Bookings.component';
import { Moment } from 'moment';

const { RangePicker } = DatePicker;

type Props = {
  dates: DateRangeType;
  setDates: (dates: DateRangeType) => void;
};

export const FilterPanel: React.FC<Props> = ({ dates, setDates }) => {
  const { formatMessage: f } = useIntl();

  const onDatesChange = (values: Moment[]) => {
    setDates({ startDate: values[0], endDate: values[1] });
  };

  return (
    <Space>
      {f({ id: 'config' })}
      <RangePicker onChange={onDatesChange} defaultValue={[dates.startDate, dates.endDate]} />
    </Space>
  );
};
