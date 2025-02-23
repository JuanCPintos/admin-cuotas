// import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import esES from 'antd/es/locale/es_ES';
import './App.css';
import './output.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';


function App() {
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
  const algorithms = [
    defaultAlgorithm,
    darkAlgorithm,
    compactAlgorithm,
  ];

  return (
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
  )
}

export default App
