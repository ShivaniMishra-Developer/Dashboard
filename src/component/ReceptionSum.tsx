import React from 'react';
// import './WorkOrderStatus.css'
import './ReceptionSum.css'

interface statuses {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
  };
  status: string;
  duration: string;
  missingItem: boolean;
  rentalItems: number;
  spareParts: number;
  toolEquipment: string;
  stockStatus: string;
  packagesReceived: number;
  processedPackages: number;
}


interface RentalToolsProps {
  status: statuses[];
}

const ReceptionSum: React.FC<RentalToolsProps> = ({ status }) => {
  return (
    <div className="receptionSum-container">
      <div className="heading">
        <h1>Reception Summary</h1>
      </div>
      <div className="status-list">
        {status.map((statusNew) => (
          <div className="status-item" key={statusNew.id}>
            <h1>{statusNew.status}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceptionSum;