import React from 'react';
import './WorkOrderStatus.css'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

Chart.register(ArcElement, Tooltip, Legend);

const WorkOrderStatus: React.FC<RentalToolsProps> = ({ status }) => {
  const chartData = {
    labels: status.map((status) => status.status),
    datasets: [{
      label: 'Work Order Status',
      data: status.map((status) => 1), // assuming each status has a count of 1
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)',
        // add more colors as needed
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className="work-order-status-container">
      <div className="heading">
        <h1>Work order status</h1>
      </div>
     
      <div className="chart-container">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default WorkOrderStatus;