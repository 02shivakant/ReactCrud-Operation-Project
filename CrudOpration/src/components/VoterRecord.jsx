import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from "react-router-dom";
import './Record.css';

const VoterRecord = () => {
     const [voters , setVoters] = useState([]);
     const navigate= useNavigate();
    const ShowDetails = (id) =>{
        navigate(`/details/${id}`);
    }
    useEffect(()=>{
        fetch("http://localhost:3001/voters")
        .then(response => response.json())
        .then(data => setVoters(data))
        .catch(error => console.log(error.message))
    } ,[] )




  return (
    <div className='page-container'>
      <div className="record-card"> 
        <div className="Voterrecord">
            <h1>Voters Record</h1>
            <Link to={'/add/:Voterid'} className='add-btn'>Add New Voters</Link>
        </div>
                <table className='record-table'>
                    <thead>
                        <tr>
                            <th>VoterID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { voters && voters.map(voters=>( 
                            <tr key={voters.VoterId}>
                                <td>{voters.VoterId} </td>
                                <td>{voters.Name} </td>
                                <td> {voters.Age} </td>
                                <td> {voters.Gender} </td>
                                <td>
                                    <button onClick={() => ShowDetails(voters.id)} href="" className='table-btn view-btn'>View</button>
                                    <button href="" className='table-btn edit-btn'>Edit</button>
                                    <button href="" className='table-btn delete-btn'>Delete</button>
                                </td>
                         </tr>)
                        )
                        }
                       
                   </tbody>
                </table>
            </div>
        </div>
       
    
  )
}

export default VoterRecord
