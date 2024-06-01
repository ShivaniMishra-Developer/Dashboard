import React from "react";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdHomeFilled } from "react-icons/md";
import home from './home.png';
// import tools from './customer-support.png';
// import settings from './settings.png'


function Sidebar() {
  return (
    <div className="App">
      <div className="containerFluid">
        <div className="row">
          <div className="col-md-1">
            <div className="mainsidebar">
              <div className="mainlogo"></div>
              <div className="mainMeno">
                <ul>
                  <li>
                    <a href="#">
                      {/* <MdHomeFilled /> */}
                      55
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <MdHomeFilled /> */}
                      55
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <MdHomeFilled /> */}
                      55
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <MdHomeFilled /> */}
                      55
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <MdHomeFilled /> */}
                      55
                    </a>
                  </li>
                </ul>
              </div>
              <div className="settingIcon">
                <a href="#">55</a>
              </div>
            </div>
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-6">
                <div className="cardDashBoard card text-bg-light mb-3">
                    <div className="headingItem">
                        <h1>       <img src={home} alt="Description" />
Rental Tools</h1>
                    </div>
                  <table class="table"> 
                    
                    <thead>
                      <tr>
                        <th scope="col">Work Order</th>
                        <th scope="col">Tool ref.</th>
                        <th scope="col">Team Member</th>
                        <th scope="col">Staus</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">01</th>
                        <td>
                          <button type="button" class="btn btn-light">
                            6565
                          </button>
                        </td>
                        <td>Alex Noman</td>
                        <td>Completed</td>
                        <td>15.00</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">02</th>
                        <td>
                          <button type="button" class="btn btn-light">
                            5656
                          </button>
                        </td>
                        <td>Razib Rahman</td>
                        <td>In Progress</td>
                        <td>0.5.00</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>{" "}
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <button type="button" class="btn btn-light">
                            1755
                          </button>
                        </td>
                        <td>Luke Nortan</td>
                        <td>Not started</td>
                        <td>0.00</td>
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cardDashBoard card text-bg-light mb-3">
                <div className="headingItem">
                        <h1>Work order status</h1>
                    </div>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="cardDashBoard card text-bg-light mb-3">
                <div className="headingItem">
                        <h1>Tools and</h1>
                    </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Work Order</th>
                        <th scope="col">Tool ref.</th>
                        <th scope="col">Team Member</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">01</th>
                        <td>
                          <button type="button" class="btn btn-light">
                            6565
                          </button>
                        </td>
                        <td>Alex Noman</td>
                      </tr>
                      <tr>
                        <th scope="row">02</th>
                        <td>
                          <button type="button" class="btn btn-light">
                            5656
                          </button>
                        </td>
                        <td>Razib Rahman</td>
                      
                       
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                       
                        <td>Luke Nortan</td>
                       
                        <td>Luke Nortan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-8">
                <div className="cardDashBoard card text-bg-light mb-3">
                <div className="headingItem">
                        <h1>Work order status</h1>
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        <h1>
                            111
                        </h1>
                    </div>
                    <div className="col-md-4">
                        <h1>
                            222
                        </h1>
                    </div> <div className="col-md-4">
                        <h1>
                            333
                        </h1>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="cardDashBoard card text-bg-light mb-3">
                <div className="headingItem">
                        <h1>Missing Item</h1>
                    </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Tool ref.</th>
                        <th scope="col">Tool/Equipment</th>
                        <th scope="col">Stock Status</th>
                        <th scope="col">Staus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <button type="button" class="btn btn-light">
                            6465
                          </button>
                        </td>
                        <td>Screw</td>
                        <td>Low</td>
                        
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type="button" class="btn btn-light">
                            6465
                          </button>
                        </td>
                        <td>Screw</td>
                        <td>Low</td>
                        
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type="button" class="btn btn-light">
                            6465
                          </button>
                        </td>
                        <td>Screw</td>
                        <td>Low</td>
                        
                        <td>
                          <button type="button" class="btn btn-primary">
                            Primary
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cardDashBoard card text-bg-light mb-3">
                    <div className="row ">
                        <div className="col-md-4 ">
                        <div className="text-center">
      <img src={home} alt="Description" />

    </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                            <p>Pacakages Recives</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                        <div className="text-center">
                            <p>10</p>
                            </div>
                        </div>
                        

                    </div>
                    <div className="row ">
                        <div className="col-md-4 ">
                        <div className="text-center">
      <img src={home} alt="Description" />

    </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                            <p>Pacakages Recives</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                        <div className="text-center">
                            <p>10</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
