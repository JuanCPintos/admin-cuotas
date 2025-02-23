import { Breadcrumb, Table } from "antd";
import PageContainer from "../../components/PageContainer";
import useTitle from "../../hooks/useTitle";

const title = 'Alumnos'

const AlumnosPage = () => {
  const breadCrumbItems = useTitle({ title, breadcrumb: ['Inicio', 'Alumnos'] })

  return (
    <PageContainer
      title='Alumnos'
      breadcrumb={<Breadcrumb items={breadCrumbItems} />}
    >
      <Table
        
      />
    </PageContainer>
  )
};

export default AlumnosPage;