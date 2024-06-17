/* global chrome */

import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {

  const [query,setquery]=useState('');
  const [responsedata,setresdata]=useState('');
const [var1,setvar]=useState(false);
const [url, setUrl] = useState('');

  async function change() {
    if (query !== "") {
      setvar(true);
        console.log(query);
        try {
            const response = await fetch('http://localhost:5000/api', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: query,
                    url:url
                })
            });
            
            if (response.ok) {
                const data = await response.json(); // Assuming server returns JSON data
                console.log(data); // Log the response data
                setresdata(data.message);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}



  const getCurrentTabUrl = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      setUrl(activeTab.url);
    });
  };

  useEffect(() => {
    getCurrentTabUrl();
  }, []);



  return (
    <div className="App" >
      <div id="data">
       <h2>{url}</h2> 
       { var1 &&
       <div id="cont">
       <h4>
        {responsedata}
       </h4></div>
      }
      </div>
      <div id="inputs">
      <input type="text" name="query" id="query" onChange={(e)=>setquery(e.target.value)}/>
     <button onClick={(e)=>change()}>home</button>
     </div>
    </div>
  );
}

export default App;
