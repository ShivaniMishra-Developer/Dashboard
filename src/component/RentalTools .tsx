import React from 'react';
import { FaTools } from 'react-icons/fa';
import './RentalTools.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface tools {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img:string;
    secondImage:string;
  };
  status: string;
  circleColor:string;
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
        <th >Work Order</th>
        <th >Tool Ref.</th>
        <th >Team Member</th>
        <th >Status</th>
        <th >Duration</th>
      </tr>
    </thead>
    <tbody>
      {tools.map((tool) => (
        <tr key={tool.id}>
          <td className='tableData'>{tool.id}</td>
          <td className='tableData'>
            <button type="button" className="btn btn-light">
              {tool.toolRef}
            </button>
          </td>
          <td>
            <img className='rentalImage' src={tool.TeamMember.img} alt=""/>
            {tool.TeamMember.name}
            <img className='rentalImage' src={tool.TeamMember.secondImage} alt=""/>
          </td>
          <td > 
                <div style={{ backgroundColor: tool.circleColor, width: '20px', height: '20px', borderRadius: '50%'}}></div>
    <p>{tool.status}</p>
                  </td>
          <td style={{ color: '#333', textAlign: 'center', }}>
            {tool.duration}
            <button type="button" className="btn btn-primary ">
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