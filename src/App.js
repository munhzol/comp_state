import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';
// import MyNewComponent from './components/MyNewComponent';
// import LightSwitch from './components/LightSwitch';


function App() {
  return (
      <>  
        {/* <LightSwitch/>     
        
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
         
        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>   */}

        <PersonCard className="person-card" firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard className="person-card" firstName="Doe1" lastName="Jane1" age={41} hairColor="White"/>
        <PersonCard className="person-card" firstName="Doe2" lastName="Jane2" age={42} hairColor="Yellow"/>
        <PersonCard className="person-card" firstName="Doe3" lastName="Jane3" age={43} hairColor="Green"/>
      </>    
  );
}

export default App;
