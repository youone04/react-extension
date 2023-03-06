import logo from './logo.svg';
import './App.css';

function App() {

  function test(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          //function: ()=>alert("React chrome extension alert")
          function: ()=>{
            // document.body.innerHTML = "Hello World"
            Array.from(document.querySelectorAll("img"))
            .forEach(function(val) {
                // val.style.display = 'none';
                val.style.filter = "blur(4px)";
});
          }
        }
      )
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Send alert</button>
    </div>
  );
}

export default App;
