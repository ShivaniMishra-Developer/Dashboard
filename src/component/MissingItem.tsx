import React from 'react';
import { BiError } from "react-icons/bi";
import './MissingItem.css'

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
              <td>
                <button type="button" className="tool-ref-button">
                  {tool.toolRef}
                </button>
              </td>
              <td>
                <img style={{width:'20px',height:'20px',borderRadius:'100%'}} src={tool.TeamMember.img} alt=""/>
                {tool.TeamMember.name}
                <img style={{width:'20px',height:'20px',borderRadius:'100%'}} src={tool.TeamMember.secondImage} alt=""/>
               <button type="button" className="primary-button">
                  Details
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissingItem;