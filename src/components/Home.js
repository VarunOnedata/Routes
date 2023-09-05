import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div className='test'>
    
   
      <br/>
      <br/>
      <h2>Home </h2>
      <p>.. Routing Buttons ..</p>


      <Link to="/contact">  <button>Contact</button>
      </Link>

      <Link to="/about"><button>About</button>
      </Link>
<br/>
    </div>
  );
}

export default Home;
