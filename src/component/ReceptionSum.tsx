import React from 'react';
import './ReceptionSum.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const ReceptionSum: React.FC<RentalToolsProps> = ({ status }) => {
  return (
    <div className="container">
      <span className="heading6">
        <span>Reception Summary</span>
      </span>
      <div>
        {status.slice(0,2).map((statusNew) => (
          <div className="d-flex justify-content-between align-items-center" key={statusNew.id}>
          <img src={statusNew.TeamMember.fourthImg} alt="" className='imageStyle' />
            <span>Packages Received {statusNew.packagesReceived}</span>
            <span>{statusNew.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceptionSum;