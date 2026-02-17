import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ViewDetails.css'
const ViewDetails = () => {
  const {Voterid}= useParams();
  const[voterData, setVoterData] = useState({});

  useEffect(()=>{
          fetch("http://localhost:3001/voters/"+ Voterid)
          .then(response => response.json())
          .then(data => setVoterData(data))
          .catch(error => console.log(error))
      } ,[] );
    
  return (
    <div className='main-container'>
          <h1>Voter Information</h1>
          {voterData && <div className="sec-container">
            <p><strong>VoterId:</strong>{voterData.VoterId}</p>
            <p><strong>Name:</strong>{voterData.Name}</p>
            <p><strong>Age:</strong>{voterData.Age}</p>
            <p><strong>Gender:</strong>{voterData.Gender}</p>
          </div>}
    </div>
  )
}

export default ViewDetails
