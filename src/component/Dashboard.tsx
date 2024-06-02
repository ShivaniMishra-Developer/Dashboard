import React from 'react';
// import RentalTools from './RentalTools';
import RentalTools from './RentalTools ';
import WorkOrderStatus from './WorkOrderStatus';
// import ToolsAndStatus from './ToolsAndStatus';
import MissingItem from './MissingItem';
import ReceptionSum from './ReceptionSum';
import { Provider } from 'react-redux';
import store from '../store';
import './Dashboard.css';
import RestockItem from './RestockItem';
import ToolsAndStatus from './ToolsAndStatus';

interface RentalToolProps {
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

const DashbordAllData: RentalToolProps[] = [
  {
    id: 1,
    toolRef: 6565,
    TeamMember: {
      name: 'Alex Noman',
    },
    status: 'completed',
    duration: '15:00',
    missingItem: true,
    rentalItems: 20,
    spareParts: 50,
    toolEquipment: 'crew',
    stockStatus: 'Low',
    packagesReceived: 10,
    processedPackages: 5,
  },
  {
    id: 2,
    toolRef: 6564,
    TeamMember: {
      name: 'Shivv',
    },
    status: 'Incomplete',
    duration: '3:00',
    missingItem: false,
    rentalItems: 5,
    spareParts: 10,
    toolEquipment: 'Bolts',
    stockStatus: 'None',
    packagesReceived: 2,
    processedPackages: 3,
  },
];

const Dashboard: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <div className="dashboard-container"> */}
          <RentalTools tools={DashbordAllData} />
          <WorkOrderStatus status={DashbordAllData} />
      {/* </div> */}
      {/* <div className="dashboard-container"> */}
       <MissingItem tools={DashbordAllData} />
       <ToolsAndStatus status={DashbordAllData} />
   {/* </div> */}
   {/* <div className="dashboard-container"> */}
   <RestockItem tools={DashbordAllData} />
          <ReceptionSum status={DashbordAllData}/>
   {/* </div> */}
    </Provider>
  );
};

export default Dashboard;