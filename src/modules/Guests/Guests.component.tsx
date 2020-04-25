import * as React from "react";
import { Table, Skeleton, Space, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useIntl } from "react-intl";
import { usersListColumns } from "./columns";
import style from "./Guests.less";
import { PlusOutlined } from "@ant-design/icons";
import { GuestDetails } from "./Details";
import { useFetchGuestsQuery } from "../../__generated__/graphql";
import { AddForm } from "./AddForm/AddForm.component";

export const Guests: React.FC = observer(() => {
  const { formatMessage: f } = useIntl();
  const [showDetails, setShowDetails] = React.useState<boolean>(false);
  const [detailsUser, setDetailsUser] = React.useState<number>(undefined);
  const [showCreate, setShowCreate] = React.useState<boolean>(false);

  const { data: guestsList, loading } = useFetchGuestsQuery();

  return (
    <>
      <Space className={style.panel}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setShowCreate(true)}
        >
          {f({ id: "guestAdd" })}
        </Button>
      </Space>
      <AddForm show={showCreate} setShow={setShowCreate} />
      <GuestDetails
        show={showDetails}
        setShow={setShowDetails}
        guestId={detailsUser}
      />
      <Skeleton title={false} loading={loading} active>
        <Table<any>
          rowKey={"id"}
          showHeader={false}
          loading={loading}
          dataSource={guestsList?.guests || []}
          columns={usersListColumns(f, setDetailsUser, setShowDetails)}
          pagination={false} // TODO: replace with real pagination
        />
      </Skeleton>
    </>
  );
});
