import React, { useState } from 'react';
import logo from './paraphrase.png';
import "./Paraphrase.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Paraphrase() {
  const [Test, setTest] = useState("");
  const [Paratext, setParatext] = useState("");
  const [Show,setShow]=useState(false);
  async function paraphraseConvert() {
    var myHeaders = new Headers();
   
    myHeaders.append("apikey", `${process.env.REACT_APP_API_KEY}`);


    var raw = `${Test}`;

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw
    };
    
    await fetch("https://api.promptapi.com/paraphraser", requestOptions)
      .then(response => response.json())
      .then(result => setParatext(result.paraphrased))
      .catch(error => setParatext("Api limit may be over"));
  }
  function showcopy() {
    setShow(true);
    setTimeout(() => {
    setShow(false);
    }, 2000);
  }

  return (
    <div style={{backgroundColor:'white',minHeight:"100vh",paddingBottom:"20px"}}>
      <div id="paraheading">
        <img src={logo} />
        <h1>Paraphraser</h1>
      </div>
      <div id="parasolver">
        <div id="solverlayout">
          <div>
            <div>Original Text</div>
            <textarea value={Test} onChange={(e) => setTest(e.target.value)}>
            </textarea>

            <button onClick={paraphraseConvert} >Paraphrase</button>

          </div>
          <div>
            <div>Parphrased Text</div>
            <textarea disabled={true} value={Paratext}>
            </textarea>
          </div>
          <div>
            <CopyToClipboard text={Paratext}
            >
              <button onClick={showcopy} style={{padding:"5px 10px"}}><FontAwesomeIcon icon={faClone} /> Copy</button>
            </CopyToClipboard>
            {Show&&<span style={{color:"white",backgroundColor:"#111",borderRadius:"3px",padding:"3px",marginLeft:"3px"}}>Copied!!</span>}

          </div>
        </div>
      </div>
    </div>
  )
}
