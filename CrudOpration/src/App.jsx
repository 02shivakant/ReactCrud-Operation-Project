import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';
import VoterRecord from './components/VoterRecord';
import ViewDetails from './components/ViewDetails';
import AddVoter from './components/AddVoter';
import EditVoter from './components/EditVoter';

function App() {
  

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<VoterRecord/>}></Route>
          <Route path='/details/:id' element={<ViewDetails/>}></Route>
          <Route path='/add/:VoterId' element={<AddVoter/>}></Route>
          <Route path='/edit/:VoterId' element={<EditVoter/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
