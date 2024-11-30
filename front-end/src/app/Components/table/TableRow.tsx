import React from 'react';
import StatusBadge from './StatusBadge';
import styles from './TableRow.module.sass';

interface TableRowProps {
  title: string;
  status: 'Online' | 'Offline';
  users: number;
  events: number;
  viewsPerUser: number;
  avgTime: string;
  conversions: JSX.Element;
}

const TableRow: React.FC<TableRowProps> = ({ title, status, users, events, viewsPerUser, avgTime, conversions }) => {
  return (
    <div className={styles.row}>
      <div className={styles.cell}>
        <input type="checkbox" />
        {title}
      </div>
      <div className={styles.cell}>
        <StatusBadge status={status} />
      </div>
      <div className={styles.cell}>{users}</div>
      <div className={styles.cell}>{events}</div>
      <div className={styles.cell}>{viewsPerUser}</div>
      <div className={styles.cell}>{avgTime}</div>
      <div className={styles.cell}>{conversions}</div>
    </div>
  );
};

export default TableRow;
