import { Button, Col, Layout, Space } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import useStyles from '../../../../hooks/useStyles'

const { Header } = Layout

const HeaderLayout = ({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { colorBgContainer } = useStyles()
  return (
    <Header
      style={{
        backgroundColor: colorBgContainer,
      }}
    >
      <Space>
        <Col>
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            type='text'

          />
        </Col>
      </Space>
    </Header>
  )
}

export default HeaderLayout