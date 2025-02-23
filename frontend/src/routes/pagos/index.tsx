import { Breadcrumb, Table } from "antd"
import PageContainer from "../../components/PageContainer"
import useTitle from "../../hooks/useTitle"

const title = 'Pagos'

const PagosPage = () => {
  const breadCrumbItems = useTitle({ title, breadcrumb: ['Inicio', 'Pagos'] })

  return (
    <PageContainer
      title={title}
      breadcrumb={<Breadcrumb items={breadCrumbItems} />}
    >
      <Table
        
      />
    </PageContainer>
  )
}

export default PagosPage