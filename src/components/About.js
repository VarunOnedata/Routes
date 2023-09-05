import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useParams } from 'react-router-dom';


function About() {
  const [count, setCount] = useState(0);
  const { dynamicParam } = useParams();


  return (
    <div className='test'>
    
      <h2>About</h2>
      <p>..  Routing Buttons..</p>
      <Link to="/"> 
      <button>Home</button></Link>

      <Link to="/contact">
        <button>Contact</button>
      </Link>
<br/><br/>
     
<h2>Hooks Concept</h2>
<h5>UseState</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <br/>
      <button onClick={() => setCount(count == 0)}>Refresh</button>

<br/><br/>
<br/><br/>

<h2>Dynamic Route Example</h2>
      <p>Dynamic Parameter: {dynamicParam}</p>
      <Link to="/about/1604"><button>Dynamic route Example</button>
      </Link>




    </div>


   

  );
}

export default About;
