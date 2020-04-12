import * as React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

export const NotFound: React.FC = () => {
  const { formatMessage: f } = useIntl();

  return (
    <Result
      status="404"
      title="404"
      subTitle={f({ id: "notExistMessage" })}
      extra={
        <Link to="/dashboard">
          <Button type="primary">{f({ id: "backHome" })}</Button>
        </Link>
      }
    />
  );
};
