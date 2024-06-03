import React from "react";
import "./RestockItem.css";

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
    <div className="restockItem-container">
      <div className="heading1">
        <span>Restock Item</span>
      </div>
      <div className="table-responsive">
        <table className="table centered-table">
          <thead>
            <tr>
              <th className="centered-header">Tool Ref.</th>
              <th className="centered-header">Tool/Equipmenet</th>
              <th className="centered-header">Stock Status</th>
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
                <td className="centered-cell">{tool.toolEquipment}</td>
                <td className="centered-cell-flex">
                  <div className="circleStyle" style={{ backgroundColor: tool.circleColor }}></div>
                  <p>{tool.stockStatus}</p>
                  <button type="button" className="btn btn-primary ">
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

export default RestockItem;
