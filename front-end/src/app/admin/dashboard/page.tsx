import Card from '@/app/Components/card/Card';
import Sidebar from '../../Components/sidebar/Sidebar'
import styles from './dashboard.module.sass';
import Table from '@/app/Components/table/Table';

const Dashboard = () => {
     return (
          <>
               <Sidebar />
               <div className={styles.container}>
                    <div className='cards'>
                         <Card title="Chamados"
                              value="14"
                              description="Ultimos 30 dias"
                              percentage="0000" />
                    </div>
                    <div className='cards'>
                         <Card title="Pendentes"
                              value="14"
                              description="Ultimos 30 dias"
                              percentage="0000" />
                    </div>
                    <div className='cards'>
                         <Card title="Resolvidos"
                              value="14"
                              description="Ultimos 30 dias"
                              percentage="0000" />
                    </div>
                    <div className='cards'>
                         <Card title=""
                              value=""
                              description=""
                              percentage="" />
                    </div>
               </div>
               <div className={styles.table}>
                    <Table />
               </div>
          </>
     )
}

export default Dashboard