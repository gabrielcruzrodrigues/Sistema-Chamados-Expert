import React from 'react';
import styles from './StatusBadge.module.sass';

interface StatusBadgeProps {
  status: 'Online' | 'Offline';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const isOnline = status === 'Online';
  return (
    <div className={`${styles.badge} ${isOnline ? styles.online : styles.offline}`}>
      {status}
    </div>
  );
};

export default StatusBadge;
