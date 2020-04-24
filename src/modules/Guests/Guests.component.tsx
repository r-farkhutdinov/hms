import * as React from "react";
import { Table, Skeleton, Space, Button } from "antd";
import { useStore } from "../../core/util";
import { observer } from "mobx-react-lite";
import { useIntl } from "react-intl";
import { usersListColumns } from "./columns";
import style from "./Guests.less";
import { PlusOutlined } from "@ant-design/icons";
import { GuestDetails } from "./Details";

export const Guests: React.FC = observer(() => {
  const { guests } = useStore();
  const { formatMessage: f } = useIntl();
  const [showDetails, setShowDetails] = React.useState<boolean>(false);
  const [detailsUser, setDetailsUser] = React.useState<number>(undefined);

  const { loading, loadGuests } = guests;

  React.useEffect(() => {
    loadGuests();
  }, []);

  return (
    <>
      <Space className={style.panel}>
        <Button type="primary" icon={<PlusOutlined />}>
          {f({ id: "guestAdd" })}
        </Button>
      </Space>
      <GuestDetails
        show={showDetails}
        setShow={setShowDetails}
        guestId={detailsUser}
      />
      <Skeleton title={false} loading={loading} active>
        <Table
          rowKey={"id"}
          showHeader={false}
          loading={loading}
          dataSource={guests.guestsList}
          columns={usersListColumns(f, setDetailsUser, setShowDetails)}
          pagination={false} // TODO: replace with real pagination
        />
      </Skeleton>
    </>
  );
});
