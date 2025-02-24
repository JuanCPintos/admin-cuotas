import { Button, Col, Row, Typography } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'

const { Title, Text } = Typography

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Row align={'middle'} justify={'center'} style={{ height: '100vh' }}>
      <Col span={8} style={{ border: '1px solid grey', borderRadius: '1rem', padding: '2rem' }}>
        <Row gutter={[0, 16]} justify={'center'} align={'middle'}>
          <Col span={24}>
            <Title level={2}>Bienvenido a su administrados</Title>
          </Col>
          <Col span={24}>
            <Text style={{ fontSize: '1.2rem' }}>Por favor inicie sesión</Text>
          </Col>
          <Col span={24}>
            <Button
              icon={<GoogleOutlined />}
              iconPosition='start'
              style={{ fontSize: '1.2rem', padding: '1.5rem 1rem' }}
              onClick={() => loginWithRedirect()}
            >
              Iniciar sesion con Google
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default LoginPage;