import React, { useState, useEffect } from 'react'

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
    <div>
      {/* if data not loaded in, the have loading on screen, otherwise have each member in a p tag */}
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key = {i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App