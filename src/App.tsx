import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import  "./App.css"
const App: React.FC = () => {
  return (
    <div className="App">
            <Sidebar/>
<div className='Dashboard'>
<Dashboard />
</div>
    
    </div>
  );
}

export default App;
