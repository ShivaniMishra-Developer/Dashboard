import React from "react";
import { BiError } from "react-icons/bi";
import "./RentalTools.css";
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
    <div className="rental-tools-container">
      <div className="heading1" >
        <span>
        <BiError />
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
            <button type="button" className="btn btn-light">
              {tool.toolRef}
            </button>
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
