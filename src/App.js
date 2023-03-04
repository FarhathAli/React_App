import "./App.css";
// import {useState} from "react";

function App() {
  return (
    <div className="page">
      <div>
        <div className="panel">
          <div className="wrapper">
            <img src="./download.svg" alt="" className="logo" />
          </div>
          <img src="./download (1).svg" alt="" className="logo" />
          <div className="wrapper">
            <img src="./wortual.png" alt="" className="logo" />
          </div>
        </div>
        <div className="content">
          <p>
            "You have successfully installed the Worktual for Slack integration.
            Get started by using the '/' Slack slash command."<br></br>
          </p>
          <p>
            If your are not have Slack app. Please click this{" "}
            <a
              href="https://slack.com/intl/en-in/downloads/windows"
              target="_blank"
            >
              link
            </a>{" "}
            to download
          </p>
          <p>"This browser tab can now be closed. "</p>
        </div>
      </div>
    </div>
  );
}

export default App;

//   const [value, setValue] = useState([1,2,3,4,5,6,7,8,9,10])
//   console.log(value, "jdgdgdgd")
  
//   const test = (e)=>{
//     console.log(e);
//     const label =  value.filter((id)=> {
//       return id !== e
//     })
//     setValue([])
//     setValue(label)
//     // console.log(label, "label")
//   }

//   return (
//      <div>
//        {value.map((data, index)=>(
//           <p key={index} onClick={()=>test(data)}>{data}</p>
//   ))}
//      </div>
//   );