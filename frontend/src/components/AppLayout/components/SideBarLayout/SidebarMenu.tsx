import { Menu } from "antd"
import { ItemType, MenuItemType } from "antd/es/menu/interface"
import { useLocation, useNavigate } from "react-router-dom"
import { BicepsFlexed, DollarSign, House, User } from "lucide-react"

const SiderbarMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const items: ItemType<MenuItemType>[] = [
    {
      key: '/',
      label: 'Inicio',
      icon: <House size={18} />,
      onClick: () => navigate('/'),
      // style: { marginTop: '1rem' },
      // children: //por el momento no tendran subitems
    },
    {
      key: '/alumnos',
      label: 'Alumnos',
      icon: <User size={18} />,
      onClick: () => navigate('/alumnos'),
      // style: { marginTop: '1rem' },
    },
    {
      key: '/profes',
      label: 'Profes',
      icon: <BicepsFlexed size={18} />,
      onClick: () => navigate('/profes'),
      // style: { marginTop: '1rem' },
    },
    {
      key: '/pagos',
      label: 'Pagos',
      icon: <DollarSign size={18} />,
      onClick: () => navigate('/pagos'),
      // style: { marginTop: '1rem' },
    },
  ]

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      items={items}
      defaultSelectedKeys={['inicio']}
      defaultOpenKeys={['inicio']}
      style={{ height: '100%' }}
      selectable
    />
  )
}

export default SiderbarMenu