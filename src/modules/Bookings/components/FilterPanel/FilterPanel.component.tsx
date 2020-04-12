import * as React from "react";
import { DatePicker } from "antd";
import * as moment from "moment";
import style from "./FilterPanel.less";
import { useIntl } from "react-intl";

const { RangePicker } = DatePicker;

export const FilterPanel: React.FC = () => {
  const { formatMessage: f } = useIntl();

  return (
    <div className={style.panel}>
      {f({ id: "config" })}
      <RangePicker defaultValue={[moment(), moment().add(30, "d")]} />
    </div>
  );
};
