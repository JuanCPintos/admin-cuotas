import { Layout } from "antd";
import { ReactNode, Suspense, useState } from "react";
import SideBar from "./components/SideBarLayout";
import { Content } from "antd/es/layout/layout";
import HeaderLayout from "./components/HeaderLayout";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [collapse, setCollapse] = useState(false)

  return (
    <Layout>
      <SideBar collapsed={collapse} />
      <Layout>
        <HeaderLayout  collapsed={collapse} setCollapsed={setCollapse} />
        <Content>
          <Suspense>
            {children}
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
};

export default AppLayout;