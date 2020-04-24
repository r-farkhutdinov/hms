import * as React from "react";
import { useStore } from "../../../core/util";
import { Tabs } from "antd";
import { UserOutlined, ContactsOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import { GeneralInfoTab } from "./Tabs/GeneralInfoTab";
import { DocumentsTab } from "./Tabs/DocumentsTab";

const { TabPane } = Tabs;

export const EditGuest: React.FC = () => {
  const { guests } = useStore();
  const { formatMessage: f } = useIntl();

  console.log(guests);

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              {f({ id: "generalInfo" })}
            </span>
          }
          key="1"
        >
          <GeneralInfoTab />
        </TabPane>
        <TabPane
          tab={
            <span>
              <ContactsOutlined />
              {f({ id: "documents" })}
            </span>
          }
          key="2"
        >
          <DocumentsTab />
        </TabPane>
      </Tabs>
    </>
  );
};
