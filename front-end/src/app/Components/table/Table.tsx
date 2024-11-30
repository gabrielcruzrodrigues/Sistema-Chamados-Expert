import React from 'react';
import TableRow from './TableRow';
import styles from './Table.module.sass';

const Table: React.FC = () => {
  const data = [
    {
      title: 'Homepage Overview',
      status: 'Online',
      users: 212423,
      events: 8345,
      viewsPerUser: 18.5,
      avgTime: '2m 15s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
    {
      title: 'Product Details - Gadgets',
      status: 'Online',
      users: 172240,
      events: 5653,
      viewsPerUser: 9.7,
      avgTime: '2m 30s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
    {
      title: 'Checkout Process - Step 1',
      status: 'Offline',
      users: 58240,
      events: 3455,
      viewsPerUser: 15.2,
      avgTime: '2m 10s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
    {
      title: 'User Profile Dashboard',
      status: 'Online',
      users: 96240,
      events: 112543,
      viewsPerUser: 4.5,
      avgTime: '2m 40s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
    {
      title: 'Article Listing - Tech News',
      status: 'Offline',
      users: 142240,
      events: 3653,
      viewsPerUser: 3.1,
      avgTime: '2m 55s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
    {
      title: 'FAQs - Customer Support',
      status: 'Online',
      users: 15240,
      events: 106543,
      viewsPerUser: 7.2,
      avgTime: '2m 20s',
      conversions: <div className={styles.conversionsBar}></div>,
    },
  ];

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div>Page Title</div>
        <div>Status</div>
        <div>Users</div>
        <div>Event Count</div>
        <div>Views per User</div>
        <div>Average Time</div>
        <div>Daily Conversions</div>
      </div>
      {data.map((row, index) => (
        <TableRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Table;
