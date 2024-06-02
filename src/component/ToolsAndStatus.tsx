import React from 'react';
import './ToolsAndStatus.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface statuses {
  id: number;
  toolRef: number;
  
  TeamMember: {
    name: string;
    img: string;
    thirdImg: string;
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
    <div className="tools-and-status-container">
      <div className="heading">
        <h1>Tools and Equipments Availability</h1>
      </div>
      <div className="status-list">
        {status.slice(0,2).map((statusNew) => (
          <div className="status-item" key={statusNew.id}>
             <h1>Rental Items</h1>
             <CircularProgressbar value={statusNew.rentalItems} text={`${statusNew.rentalItems}%`} />          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndStatus;