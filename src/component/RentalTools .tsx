import React from 'react';
import { FaTools } from 'react-icons/fa';
import './RentalTools.css';

interface tools {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img:string;
    secondImage:string;
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

const RentalTools: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools)
  return (
    <div className="rental-tools-container">
      <div className="heading">
        <h1>
          <FaTools /> Rental Tools
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
              <td>
                <img style={{width:'20px',height:'20px',borderRadius:'100%'}} src={tool.TeamMember.img} alt=""/>
                {tool.TeamMember.name}
                <img style={{width:'20px',height:'20px',borderRadius:'100%'}} src={tool.TeamMember.secondImage} alt=""/>
              </td>
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

export default RentalTools;