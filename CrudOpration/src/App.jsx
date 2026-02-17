import { useState } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css'
import VoterRecord from './components/VoterRecord';
import ViewDetails from './components/ViewDetails';
import AddVoter from './components/AddVoter';
import EditVoter from './components/EditVoter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<VoterRecord/>}></Route>
          <Route path='/details/:Voterid' element={<ViewDetails/>}></Route>
          <Route path='/add/:Voterid' element={<AddVoter/>}></Route>
          <Route path='/edit/:Voterid' element={<EditVoter/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
