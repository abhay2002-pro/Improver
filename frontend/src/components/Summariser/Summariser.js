import React, { useState } from "react";
import logo from "./summarize-icon-9.jpg";
import "./Summariser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Summariser() {
  const [Test, setTest] = useState("");
  const [Sugtext, setSugtext] = useState("");
  const [Show,setShow]=useState(false);

  function showcopy() {
    setShow(true);
    setTimeout(() => {
    setShow(false);
    }, 2000);
  }

  function checker(value) {
    var text = value;
    var document = [];
    var stoplist = [
      "",
      "a",
      "about",
      "above",
      "above",
      "across",
      "after",
      "afterwards",
      "again",
      "against",
      "all",
      "almost",
      "alone",
      "along",
      "already",
      "also",
      "although",
      "always",
      "am",
      "among",
      "amongst",
      "amoungst",
      "amount",
      "an",
      "and",
      "another",
      "any",
      "anyhow",
      "anyone",
      "anything",
      "anyway",
      "anywhere",
      "are",
      "around",
      "as",
      "at",
      "back",
      "be",
      "became",
      "because",
      "become",
      "becomes",
      "becoming",
      "been",
      "before",
      "beforehand",
      "behind",
      "being",
      "below",
      "beside",
      "besides",
      "between",
      "beyond",
      "bill",
      "both",
      "bottom",
      "but",
      "by",
      "call",
      "can",
      "cannot",
      "cant",
      "co",
      "con",
      "could",
      "couldnt",
      "cry",
      "de",
      "describe",
      "detail",
      "do",
      "done",
      "down",
      "due",
      "during",
      "each",
      "eg",
      "eight",
      "either",
      "eleven",
      "else",
      "elsewhere",
      "empty",
      "enough",
      "etc",
      "even",
      "ever",
      "every",
      "everyone",
      "everything",
      "everywhere",
      "except",
      "few",
      "fifteen",
      "fify",
      "fill",
      "find",
      "fire",
      "first",
      "five",
      "for",
      "former",
      "formerly",
      "forty",
      "found",
      "four",
      "from",
      "front",
      "full",
      "further",
      "get",
      "give",
      "go",
      "had",
      "has",
      "hasnt",
      "have",
      "he",
      "hence",
      "her",
      "here",
      "hereafter",
      "hereby",
      "herein",
      "hereupon",
      "hers",
      "herself",
      "him",
      "himself",
      "his",
      "how",
      "however",
      "hundred",
      "ie",
      "if",
      "in",
      "inc",
      "indeed",
      "interest",
      "into",
      "is",
      "it",
      "its",
      "itself",
      "keep",
      "last",
      "latter",
      "latterly",
      "least",
      "less",
      "ltd",
      "made",
      "many",
      "may",
      "me",
      "meanwhile",
      "might",
      "mill",
      "mine",
      "more",
      "moreover",
      "most",
      "mostly",
      "move",
      "much",
      "must",
      "my",
      "myself",
      "name",
      "namely",
      "neither",
      "never",
      "nevertheless",
      "next",
      "nine",
      "no",
      "nobody",
      "none",
      "noone",
      "nor",
      "not",
      "nothing",
      "now",
      "nowhere",
      "of",
      "off",
      "often",
      "on",
      "once",
      "one",
      "only",
      "onto",
      "or",
      "other",
      "others",
      "otherwise",
      "our",
      "ours",
      "ourselves",
      "out",
      "over",
      "own",
      "part",
      "per",
      "perhaps",
      "please",
      "put",
      "rather",
      "re",
      "same",
      "see",
      "seem",
      "seemed",
      "seeming",
      "seems",
      "serious",
      "several",
      "she",
      "should",
      "show",
      "side",
      "since",
      "sincere",
      "six",
      "sixty",
      "so",
      "some",
      "somehow",
      "someone",
      "something",
      "sometime",
      "sometimes",
      "somewhere",
      "still",
      "such",
      "system",
      "take",
      "ten",
      "than",
      "that",
      "the",
      "their",
      "them",
      "themselves",
      "then",
      "thence",
      "there",
      "thereafter",
      "thereby",
      "therefore",
      "therein",
      "thereupon",
      "these",
      "they",
      "thickv",
      "thin",
      "third",
      "this",
      "those",
      "though",
      "three",
      "through",
      "throughout",
      "thru",
      "thus",
      "to",
      "together",
      "too",
      "top",
      "toward",
      "towards",
      "twelve",
      "twenty",
      "two",
      "un",
      "under",
      "until",
      "up",
      "upon",
      "us",
      "very",
      "via",
      "was",
      "we",
      "well",
      "were",
      "what",
      "whatever",
      "when",
      "whence",
      "whenever",
      "where",
      "whereafter",
      "whereas",
      "whereby",
      "wherein",
      "whereupon",
      "wherever",
      "whether",
      "which",
      "while",
      "whither",
      "who",
      "whoever",
      "whole",
      "whom",
      "whose",
      "why",
      "will",
      "with",
      "within",
      "without",
      "would",
      "yet",
      "you",
      "your",
      "yours",
      "yourself",
      "yourselves",
      "the",
    ];
    var sents = text
      .replace(/\.+/g, ".|")
      .replace(/\?/g, "?|")
      //eslint-disable-next-line
      .replace(/\!/g, "!|")
      .split("|");
    sents.pop();
    //Index sentences in document
    sents.forEach(function (sentencz) {
      var wordz = sentencz.split(" ").filter(function (n) {
        return n.indexOf(stoplist) === -1;
      });
      console.log(wordz)
      document.push({
        sentence: sentencz,
        words: wordz,
        score: 0,
      });
    });

    //Assign word frequencies
    document.forEach(function (arrayItem) {
      var count = 0;
      arrayItem.words.forEach(function (word) {
        var match = word;
        document.forEach(function (arrayItem2) {
          arrayItem2.words.forEach(function (word2) {
            if (word2 === match) count++;
          });
        });
      });
      count = count / arrayItem.words.length;
      arrayItem.frequency = count;
    });

    document.sort(function (a, b) {
      return b.frequency - a.frequency;
    });

    console.log(document);

    if (document.length >= 5) {
      var temp =
        sents[0] +
        " - " +
        document[1].sentence +
        " - " +
        document[2].sentence +
        " - " +
        document[3].sentence +
        " - " +
        document[4].sentence;
    }
    console.log(temp);
    setSugtext(temp);
  }
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", paddingBottom: "20px" }}>
      <div id="sumheading">
        <img src={logo} alt="" />
        <h1>Summariser</h1>
      </div>
      <div id="sumsolver">
        <div id="sumsolverlayout">
          <div>
            <div>Original Text</div>
            <textarea
              value={Test}
              onChange={(e) => setTest(e.target.value)}
            ></textarea>

            <button onClick={() => checker(Test)}>Summarise</button>
          </div>
          <div>
            <div>Summarised text</div>
            <textarea disabled={true} value={Sugtext} placeholder={"Enter atleast five sentences"}></textarea>
          </div>
          <div>
            <CopyToClipboard text={Sugtext}
            >
              <button onClick={showcopy} style={{padding:"5px 10px"}}><FontAwesomeIcon icon={faClone} /> Copy</button>
            </CopyToClipboard>
            {Show&&<span style={{color:"white",backgroundColor:"#111",borderRadius:"3px",padding:"3px",marginLeft:"3px"}}>Copied!!</span>}

          </div>
        </div>
      </div>
    </div>
  );
}
