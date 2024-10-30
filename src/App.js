import { useState ,useEffect} from 'react';
import './App.css';
import ProgressBar from './component/ProgressBar';

function App() {

  const [value,setValue]=useState(0)

  useEffect(()=>{
setTimeout(()=>{
  setValue(prev=>prev +1)
},100)

  },[value])
  return (
   <div className='app'>
   <ProgressBar value={value}/>
   </div>
  );
}

export default App;
