import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import SiderbarMenu from "./SidebarMenu";
import useStyles from "../../../../hooks/useStyles";

const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  const {colorBgContainer} = useStyles()

  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      width={250}
      style={{
        height: "100vh",
        backgroundColor: colorBgContainer,
      }}
    >
      <Link to="/">
        <img style={{ margin: "1rem" }} alt="We Fit" src="./logotipo.svg" width="96px" />
        {/* <img alt="We Fit" /> */}
      </Link>
      <SiderbarMenu />
    </Sider>
  )
}

export default SideBar;