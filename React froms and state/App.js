import React from 'react';
import FunctionalComponent from './FunctionalComp';
import ClassComponent from './ClassComp/classcomp';
function App() {
 const currentDatetime = new Date().toLocaleString();
 return (
 <div>
 < FunctionalComponent datetime={currentDatetime} />
 < ClassComponent datetime={currentDatetime} />
 </div>
 );
}
export default App;