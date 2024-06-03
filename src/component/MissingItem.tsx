import React from "react";
import { BiError } from "react-icons/bi";
import "./MissingItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface tools {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img: string;
    secondImage: string;
    thirdImg: string;
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

const MissingItem: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools);
  return (

<div className="missing-tools-container">
        <div className="heading3" >
        <span> <BiError />Missing Item</span>
      </div>
      <div className="table-responsive">
        <table className="table centered-table">
          <thead>
            <tr>
              <th className="centered-header">Tool Ref.</th>
              <th className="centered-header">Team Member</th>
            
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id}>
                <td className="centered-cell">
                  <button type="button" className="btn btn-light">
                    {tool.toolRef}
                  </button>
                </td>
                <td className='centered-cell'>
            <img className='rentalImage' src={tool.TeamMember.img} alt=""/>
            {tool.TeamMember.name}
            <img className='rentalImage' src={tool.TeamMember.secondImage} alt=""/>
            <button type="button" className="btn btn-primary spaced-button ">
              Details
            </button>
          </td>
                <td className="centered-cell"></td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MissingItem;
