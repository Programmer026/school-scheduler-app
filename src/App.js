import './App.css';
import { getMonth } from './util';
import React, { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  // const { monthIndex, showEventModal } = useContext(GlobalContext);

  return (
    <React.Fragment>

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
