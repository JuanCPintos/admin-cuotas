
import { Col, Layout, Row, Typography } from 'antd';
import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode,
  title?: string,
  subtitle?: string,
  breadcrumb?: ReactNode,
  topRightButton?: ReactNode
}

const { Title, Text } = Typography

const PageContainer = ({ children, title, subtitle, breadcrumb, topRightButton }: PageContainerProps) => {
  return (
    <Layout>
      <Row>
        <Col span={12}>
          <Row>
            {breadcrumb && breadcrumb}
          </Row>
          <Row>
            {title &&
              <Title level={2}>
                {title}
              </Title>
            }
          </Row>
          <Row>
            {subtitle &&
              <Text>
                {subtitle}
              </Text>
            }
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='end'>
            {topRightButton && topRightButton}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </Layout>
  )
}

export default PageContainer