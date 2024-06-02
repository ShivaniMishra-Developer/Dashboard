import React from 'react';
// import './RentalTools.css';
import './RestockItem.css'

interface tools {
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
  tools: tools[];
}

const RestockItem: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools)
  return (
    <div className="restockItem-container">
      <div className="heading">
        <h1>
           Restock Item
        </h1>
      </div>
      <table className="tools-table">
        <thead>
          <tr>
            <th>Work Order</th>
            <th>Tool Ref.</th>
            <th>Team Member</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id}>
              <td>{tool.id}</td>
              <td>
                <button type="button" className="tool-ref-button">
                  {tool.toolRef}
                </button>
              </td>
              <td>{tool.TeamMember.name}</td>
              <td>{tool.status}</td>
              <td className="duration-container">
                {tool.duration}
                <button type="button" className="primary-button">
                  Primary
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestockItem;