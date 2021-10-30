import React, { useState } from 'react';
import logo from './paraphrase.png';
import './Grammer.css';
import axios from 'axios';

export default function Grammer() {
  const [Test, setTest] = useState("");
  const [Sugtext, setSugtext] = useState("");

  async function checker() {

    const options = {
      url: "http://localhost:4000/check",
      method: "POST",
      withCredentials: true,
      data: {
        Test
      },
    };
    const res = await axios(options);
    console.log(res.data);
    var newdata="";
    res.data.map(
      (ele,index)=>{
        newdata+=`${index+1}. ${ele.reason}\n`;
      }
    );

    setSugtext(newdata);
    // fetch('http://localhost:4000/check', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: Test,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }
  return (
    <div style={{backgroundColor:'white',minHeight:"100vh"}}>
      <div id="gramaheading">
        <img src={logo} />
        <h1>Grammer</h1>
      </div>
      <div id="gramasolver">
        <div id="gramasolverlayout">
          <div>
            <div>Original Text</div>
            <textarea value={Test} onChange={(e) => setTest(e.target.value)}>
            </textarea>

            <button onClick={checker}>Grammer</button>

          </div>
          <div>
            <div>Suggestions</div>
            <textarea disabled={true} value={Sugtext}>
            </textarea>
          </div>

        </div>

      </div>
    </div>
  )
}
