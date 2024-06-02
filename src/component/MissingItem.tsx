import React from 'react';
import { BiError } from "react-icons/bi";
// import './RentalTools.css';
import './MissingItem.css'

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

const MissingItem: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools)
  return (
    <div className="missing-tools-container">
      <div className="heading">
        <h1>
        <BiError />
 Missing Item
        </h1>
      </div>
      <table className="tools-table">
        <thead>
          <tr>
           
            <th>Tool Ref.</th>
            <th>Team Member</th>
           
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.toolRef}>
              <td>{tool.id}</td>
              {/* <td>
                <button type="button" className="tool-ref-button">
                  {tool.toolRef}
                </button>
              </td> */}
              <td>{tool.TeamMember.name} <button type="button" className="primary-button">
                  Primary
                </button></td>
            
                
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissingItem;