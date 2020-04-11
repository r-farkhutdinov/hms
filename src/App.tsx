import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import { MainLayout } from "./layout/MainLayout";
import { IntlProvider } from "react-intl";
import { useStore } from "./core/util";
import { messages } from "./i18n";
import { observer } from "mobx-react";

export const App: React.FC = observer(() => {
  const { i18n } = useStore();
  const { locale } = i18n;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </IntlProvider>
  );
});
