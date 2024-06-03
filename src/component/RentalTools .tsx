import React from "react";
import { FaTools } from "react-icons/fa";
import "./RentalTools.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface tools {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img: string;
    secondImage: string;
  };
  status: string;
  circleColor: string;
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
      <div className="heading1" >
        <span>
        <FaTools/> Rental Tools
        </span>
      </div>
<div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th className="centered-header">Work Order</th>
        <th className="centered-header">Tool Ref.</th>
        <th className="centered-header">Team Member</th>
        <th className="centered-header">Status</th>
        <th className="centered-header">Duration</th>
      </tr>
    </thead>
    <tbody className='rentalTable'>
      {tools.map((tool) => (
        <tr key={tool.id}>
          <td className='centered-cell'>{tool.id}</td>
          <td className='centered-cell'>
            <button type="button" className="btn btn-light">
              {tool.toolRef}
            </button>
          </td>
          <td className='centered-cell'>
            <img className='rentalImage' src={tool.TeamMember.img} alt=""/>
            {tool.TeamMember.name}
            <img className='rentalImage' src={tool.TeamMember.secondImage} alt=""/>
          </td>
          <td className='centered-cell'> 
                <div className="circleStyle" style={{ backgroundColor: tool.circleColor }}></div>
    <p>{tool.status}</p>
                  </td>
          <td className='centered-cell durationStyle'>
            {tool.duration}
            <button type="button" className="btn btn-primary spaced-button ">
              Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default RentalTools;

