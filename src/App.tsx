import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import  "./App.css"
const App: React.FC = () => {
  return (
    <> <div className="App">
    <Sidebar/>
<div className='Dashboard'>
<Dashboard />
</div>

</div>
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
</Routes>
</BrowserRouter> */}
</>
    );
}

export default App;
