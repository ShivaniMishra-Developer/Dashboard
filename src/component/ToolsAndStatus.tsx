
import React from 'react';
// import './ReceptionSum.css';
import './ToolsAndStatus.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


interface statuses {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img: string;
    fourthImg: string;
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
      <span className="heading4">
        <span>Tools and Equipments Availability</span>
      </span>
      <div>
        {status.slice(0,2).map((statusNew) => (
          <div className="d-flex justify-content-between align-items-center" key={statusNew.id}>
          <img src={statusNew.TeamMember.fourthImg} alt="" style={{width: '60px', height: '45px'}} />
            <span>Rental Items </span>
            <CircularProgressbar 
  value={statusNew.rentalItems} 
  text={`${statusNew.rentalItems}%`} 
  styles={{ root: { width: '10%' } }}
/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndStatus;