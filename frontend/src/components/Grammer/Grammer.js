import React, { useState } from 'react';
import logo from './grammer.png';
import './Grammer.css';
import axios from 'axios';

export default function Grammer() {
  const [Test, setTest] = useState("");
  const [Sugtext, setSugtext] = useState("No suggestions");
  var [err, seterr] = useState([]);

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
    // console.log(res.data);
    // console.log(res.data.length)
    console.log(err);
    var newdata = "";
    const err_pairs = new Map();
    if (res.data.length != 0) {
      var pointer = 0;
      res.data.map(
        (ele, index) => {
          var dummy1 = Test.slice(pointer, ele.index);
          var dummy2 = Test.slice(ele.index, ele.index + ele.offset);
          err_pairs.set(dummy1, 0);
          err_pairs.set(dummy2, 1);
          pointer = ele.index + ele.offset;
          newdata += `${index + 1}. ${ele.reason}\n`;
        }
      );
      var dummy3 = Test.slice(pointer, Test.length);
      err_pairs.set(dummy3, 0);



    }
    else {
      newdata = "No Suggestions.";
      // seterr("No err");
    }
    const result = Array.from(err_pairs).map(([name, value]) => ({ name, value }))
    console.log(result);
    setSugtext(newdata);
    seterr(result);
  }
  return (
    <div style={{ backgroundColor: 'white', minHeight: "100vh",paddingBottom:"20px" }}>
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
            <div>Errors</div>
            <section>
              {err.length==0?"No Errors":err.map((el) => {
                let value = el.value;
                console.log(el);
                if (value == 0) {
                  return (<span>{`${el.name}`}</span>);
                }
                else {
                  return (<span style={{ backgroundColor: "yellow" }}>{`${el.name}`}</span>)
                }
              })}
              {/* {Test} */}
            </section>

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
