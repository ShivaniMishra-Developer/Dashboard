
import React from "react";
import { FaTools } from "react-icons/fa";
import "./RentalTools.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

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

const RestockItem: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools);
  return (
    <div className="rental-tools-container">
      <div className="heading1" style={{ backgroundColor: "none" }}>
        <span>
Restock Item        </span>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Tool Ref.</th>
              <th>Tool/Equipmenet</th>
              <th>Stock/Status</th>

            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id}>
                <td>{tool.toolRef}</td>
                <td className="text-left">
                  
                  {tool.toolEquipment}
                 
                </td>
                <td style={{ alignItems:'center', display:'flex' , justifyContent:'space-between'}}> 
                <div style={{ backgroundColor: tool.circleColor, width: '20px', height: '20px', borderRadius: '50%'}}></div>
    <p>{tool.stockStatus}</p>
    <button type="button" className="btn btn-primary ">
                    Details
                  </button>
                  </td>
                <td></td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestockItem;

