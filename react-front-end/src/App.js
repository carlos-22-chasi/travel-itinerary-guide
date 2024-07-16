import React, { useState, useEffect } from 'react'
import './App.css';
function App(){
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('/members').then(
      response => response.json()
    ).then(
      data => {
        setData(data) 
        console.log(data)
      }
    );
  }, []);

  return (
    <div id = "square">
      {/* if data not loaded in, the have loading on screen, otherwise have each member in a p tag */}
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key = {i}>{member}</p>
        ))
      )}
      <p>fdafa</p>
    </div>
  )
}

export default App