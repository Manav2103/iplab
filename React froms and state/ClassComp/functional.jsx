import React from 'react';
function FunctionalComponent (props){
 const {datetime} = props;
 return(
 <div>
 <h1>Functional Component</h1>
 <p>Date and time = {datetime}</p>
 </div>
 );
}
export default FunctionalComponent;
