import React from 'react';
import RentalTools from './RentalTools ';
import WorkOrderStatus from './WorkOrderStatus';
import MissingItem from './MissingItem';
import ReceptionSum from './ReceptionSum';
import { Provider } from 'react-redux';
import store from '../store';
import './Dashboard.css';
import RestockItem from './RestockItem';
import ToolsAndStatus from './ToolsAndStatus';

interface RentalToolProps {
  id: number;
  toolRef: number;
  TeamMember: {
    name: string;
    img: string;
    secondImage: string;
    thirdImg: string;
    fourthImg: string;

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

const DashbordAllData: RentalToolProps[] = [
  {
    id: 1,
    toolRef: 6565,
    TeamMember: {
      name: 'Alex Noman',
      img:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1717330702~exp=1717334302~hmac=a29e709a186581c5357cdd2e18c3e7b9ff17d634af37be6c0c12d9e7b0cbe310&w=1060',
      secondImage:'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?t=st=1717341853~exp=1717345453~hmac=f351c74795010028a7ca830f99238c93d27238f7288033375fcd6e455759caba&w=740',
      thirdImg: 'https://img.freepik.com/free-vector/illustration-gear-doodle-icon_53876-5596.jpg?t=st=1717343004~exp=1717346604~hmac=66fe71785cd86efbcd4483b1a747934252f07bfc52735299b8fd35e54c1aa056&w=826',
      fourthImg: 'https://img.freepik.com/free-photo/industry-abstract-object-blank-cardboard_1203-6080.jpg?t=st=1717395706~exp=1717399306~hmac=7dfcc9046e801d6d4f12fba46bd376058902ee665b8cd6676732e4',
    },
    status: 'completed',
    circleColor: '#008000',
    duration: '15:00',
    missingItem: true,
    rentalItems: 20,
    spareParts: 50,
    toolEquipment: 'crew',
    stockStatus: 'Low',
    packagesReceived: 10,
    processedPackages: 5,

  },
  {
    id: 2,
    toolRef: 6564,
    TeamMember: {
      name: 'Shivv',
      img:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1717330702~exp=1717334302~hmac=a29e709a186581c5357cdd2e18c3e7b9ff17d634af37be6c0c12d9e7b0cbe310&w=1060',
      secondImage:'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?t=st=1717341853~exp=1717345453~hmac=f351c74795010028a7ca830f99238c93d27238f7288033375fcd6e455759caba&w=740',
      thirdImg: 'https://img.freepik.com/free-vector/illustration-gear-doodle-icon_53876-5596.jpg?t=st=1717343004~exp=1717346604~hmac=66fe71785cd86efbcd4483b1a747934252f07bfc52735299b8fd35e54c1aa056&w=826',
      fourthImg: 'https://img.freepik.com/free-photo/industry-abstract-object-blank-cardboard_1203-6080.jpg?t=st=1717395706~exp=1717399306~hmac=7dfcc9046e801d6d4f12fba46bd376058902ee665b8cd6676732e4',


    },
    status: 'Incomplete',
    circleColor: '#ff0000',
    duration: '3:00',
    missingItem: false,
    rentalItems: 5,
    spareParts: 10,
    toolEquipment: 'Bolts',
    stockStatus: 'None',
    packagesReceived: 2,
    processedPackages: 3,
  },
  {
    id: 3,
    toolRef: 5555,
    TeamMember: {
      name: 'JJJJJ',
      img:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1717330702~exp=1717334302~hmac=a29e709a186581c5357cdd2e18c3e7b9ff17d634af37be6c0c12d9e7b0cbe310&w=1060',
      secondImage:'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?t=st=1717341853~exp=1717345453~hmac=f351c74795010028a7ca830f99238c93d27238f7288033375fcd6e455759caba&w=740',
      thirdImg: 'https://img.freepik.com/free-vector/illustration-gear-doodle-icon_53876-5596.jpg?t=st=1717343004~exp=1717346604~hmac=66fe71785cd86efbcd4483b1a747934252f07bfc52735299b8fd35e54c1aa056&w=826',
      fourthImg: 'https://img.freepik.com/free-photo/industry-abstract-object-blank-cardboard_1203-6080.jpg?t=st=1717395706~exp=1717399306~hmac=7dfcc9046e801d6d4f12fba46bd376058902ee665b8cd6676732e4',

    },
    status: 'Not Statretd',
    circleColor: '#FFA500',

    duration: '6:00',
    missingItem: true,
    rentalItems: 8,
    spareParts: 2,
    toolEquipment: 'Wires',
    stockStatus: 'None',
    packagesReceived: 1,
    processedPackages: 5,

  },
];

const Dashboard: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='mainDiv'  >
      <div className='firstDash' style={{gap:'20px', display:'flex' }}>
      <RentalTools tools={DashbordAllData} />
          <WorkOrderStatus status={DashbordAllData} />
      </div>
       
     <div className='secondDash'>
     <MissingItem tools={DashbordAllData} />
       <ToolsAndStatus status={DashbordAllData} />
     </div>
       <div className='thirdDash'>
       <RestockItem tools={DashbordAllData} />
          <ReceptionSum status={DashbordAllData}/>
       </div>
      </div>
   
   
 
  
    </Provider>
  );
};

export default Dashboard;