import { Breadcrumb, Table } from "antd";
import PageContainer from "../../components/PageContainer";
import useTitle from "../../hooks/useTitle";

const title = 'Profesores'

const ProfesoresPage = () => {
const breadCrumbItems = useTitle({ title, breadcrumb: ['Inicio', 'Profesores'] })

  return (
    <PageContainer
      title={title}
      breadcrumb={<Breadcrumb items={breadCrumbItems} />}

    >
      <Table
        
      />
    </PageContainer>
  )
};

export default ProfesoresPage;