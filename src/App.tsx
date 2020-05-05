import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { IntlProvider } from 'react-intl';
import { useStore } from './core/util';
import { messages } from './i18n';
import { observer } from 'mobx-react';
import { client } from '../src/core/apollo';
import { ApolloProvider } from '@apollo/client';

export const App: React.FC = observer(() => {
  const { i18n } = useStore();
  const { locale } = i18n;

  return (
    <ApolloProvider client={client()}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </IntlProvider>
    </ApolloProvider>
  );
});
