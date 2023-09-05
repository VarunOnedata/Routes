import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className='test'>

      <h2>Contact</h2>
      <p>.. Routing Buttons ..</p>
      
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button> </Link>
      
      <br/>

<h2>Hooks Concept</h2>
<h5>UseEffect </h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <br/>
      <button onClick={() => setCount(count == 0)}>Refresh</button>


    </div>
  );
}

export default Contact;


