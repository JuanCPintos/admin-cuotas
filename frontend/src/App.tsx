// import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import esES from 'antd/es/locale/es_ES';
import './App.css';
import './output.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Auth0Provider } from '@auth0/auth0-react';
import { config } from './config';


function App() {
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
  const algorithms = [
    defaultAlgorithm,
    darkAlgorithm,
    compactAlgorithm,
  ];

  return (
    <Auth0Provider
      domain={config.AUTH0_DOMAIN}
      clientId={config.AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: config.AUTH0_AUDIENCE,
        redirect_uri: window.location.origin
      }}
    >
      <ConfigProvider
        locale={esES}
        theme={{
          algorithm: algorithms[0],
          token: {
            colorPrimary: "#2d3eb3"
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Auth0Provider>

  )
}

export default App
