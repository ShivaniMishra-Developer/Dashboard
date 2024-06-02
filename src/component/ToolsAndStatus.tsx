import React from 'react';
import './WorkOrderStatus.css'

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

const ToolsAndStatus: React.FC<RentalToolsProps> = ({ status }) => {
  return (
    <div className="work-order-status-container">
      <div className="heading">
        <h1>Work order status</h1>
      </div>
      <div className="status-list">
        {status.map((statusNew) => (
          <div className="status-item" key={statusNew.rentalItems}>
            <h1>{statusNew.spareParts}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndStatus;