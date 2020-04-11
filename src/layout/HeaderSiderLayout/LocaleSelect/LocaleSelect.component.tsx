import * as React from "react";
import { Select } from "antd";
import { I18nStore } from "../../../i18n/store";
import { messages } from "../../../i18n";
import { observer } from "mobx-react";
import { GlobalOutlined } from "@ant-design/icons";
import style from "../HeaderSiderLayout.less";

const { Option } = Select;

type Props = {
  i18n: I18nStore;
};

export const LocaleSelect: React.FC<Props> = observer(({ i18n }) => {
  const options = Object.keys(messages).map((key: string, index: number) => (
    <Option key={index} value={key}>
      {key.toUpperCase()}
    </Option>
  ));

  return (
    <div className={style.locale}>
      <GlobalOutlined />
      <Select
        value={i18n.locale}
        onChange={(v: "ru" | "en") => i18n.setLocale(v)}
        loading={i18n.loading}
        style={{ width: 70 }}
        bordered={false}
      >
        {options}
      </Select>
    </div>
  );
});
