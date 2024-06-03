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

const MissingItem: React.FC<RentalToolsProps> = ({ tools }) => {
  console.log(tools);
  return (
    <div className="rental-tools-container">
      <div className="heading1" style={{ backgroundColor: "none" }}>
        <span>
          <FaTools />
          Missing Item
        </span>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Tool Ref.</th>
              <th>Team Member</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id}>
                <td>{tool.toolRef}</td>
                <td className="text-left">
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                    }}
                    src={tool.TeamMember.img}
                    alt=""
                  />
                  {tool.TeamMember.name}
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                    }}
                    src={tool.TeamMember.secondImage}
                    alt=""
                  />
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

export default MissingItem;
