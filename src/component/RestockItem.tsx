import React from "react";
import "./RestockItem.css";

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
  console.log(tools);
  return (
    <div className="restockItem-container">
      <div className="heading">
        <h1>Restock Item</h1>
      </div>
      <table className="tools-table">
        <thead>
          <tr>
            <th>Tool Ref.</th>
            <th>Tool/Equipmenets</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id}>
              <td>{tool.id}</td>
              <td>{tool.toolEquipment}</td>
              <td>
                {tool.stockStatus}{" "}
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
