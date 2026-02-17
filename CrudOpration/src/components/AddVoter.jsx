
import { Link, useNavigate} from "react-router-dom";
import "./AddVoter.css";
import { useState } from "react";

const AddVoter = () => {
    const [voterid, setId]= useState("");   

    const [name, setName]= useState("");   

    const [age, setAge]= useState("");   

    const [gender, setGender]= useState(""); 
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault(); 

    const voterData = {
      VoterId: voterid,
      Name: name,
      Age: Number(age),
      Gender: gender
    };
      
         console.log(voterData);
        
    fetch("http://localhost:3001/voters",{
        method: "POST",
        headers:{
        "Content-Type": "application/json"
        },
        body: JSON.stringify(voterData)
    })

      .then(res => {
        alert("Voter added Successfully !!");
        navigate("/");
      })
      .catch(error => console.log(error))

    };
  return (
    <div className='Form'>
        <h2> Add New Voter</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="ID" >VoterID</label>
        <input type="text" id='ID' required value={voterid} onChange={e => setId(e.target.value)} />

        <label htmlFor="name">Name</label>
        <input type="text" id='name' required value={name} onChange={e => setName(e.target.value)} />
        {/* {name.length===0 && <span>Please enter your name</span>} */}

        <label htmlFor="age">Age</label>
        <input type="text" id='age' required value={age} onChange={e => setAge(e.target.value) }/>

        <label htmlFor="gender">Gender</label>
        <input type="text" id='gender' required value={gender} onChange={e => setGender(e.target.value)}/>

        <div className="buttons_save">
          <button>Save</button>
          <Link to={"/"}>Back</Link>
        </div>
        </form>
        </div>
    
  )
}

export default AddVoter
