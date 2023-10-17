import { useState } from 'react';
import Split from 'react-split';
import logo from '../img/webb.png'

export const EditorPanel = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  
  const handleOutput = () => {
    const iframe = document.getElementById('output');
    iframe.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
 
    iframe.contentWindow.eval(js);
   }
   return (
    <>
    
    <nav className="navbar navbar-light bg-dark">
    <a className="navbar-brand" style={{ color: "white" }}>
      <img src={logo} width="35" height="34" className="d-inline-block align-top" alt="" style={{ marginRight: "5px", marginLeft:"5px" }} />
      Code Editor
    </a>
  </nav>
  
      <Split  className="split mb-2"
      sizes={[40, 60]}
      minSize={300} 
      >

     <div className="code h-100 py-1 position-relative">

      <div className="dropdown position-absolute end-0 me-1">
       
      </div>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active  px-5"
            id="html"
            data-bs-toggle="tab"
            data-bs-target="#html-pane"
            type="button"
            role="tab"
            aria-controls="html-pane"
            aria-selected="true"
          >
            HTML
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link  px-5"
            id="css"
            data-bs-toggle="tab"
            data-bs-target="#css-pane"
            type="button"
            role="tab"
            aria-controls="css-pane"
            aria-selected="false"
          >
            CSS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link  px-5"
            id="js"
            data-bs-toggle="tab"
            data-bs-target="#js-pane"
            type="button"
            role="tab"
            aria-controls="js-pane"
            aria-selected="false"
          >
            JS
          </button>
        </li>
      </ul>

      <div className="tab-content h-100" id="myTabContent">
        <textarea
          type="text"
          className="tab-pane fade show active h-100 w-100"
          id="html-pane"
          role="tabpanel"
          aria-labelledby="html"
          tabIndex={0}
          value={html} onChange={(e) => setHtml(e.target.value)}
          style={{ padding: '10px' }}
        >
          
        </textarea>
        <textarea
          type="text"
          className="tab-pane fade h-100 w-100 "
          id="css-pane"
          role="tabpanel"
          aria-labelledby="css"
          tabIndex={0}
          value={css} onChange={(e) => setCss(e.target.value)}
          style={{ padding: '10px' }}
        >
        
        </textarea>
        <textarea
          type="text"
          className="tab-pane fade h-100 w-100 "
          id="js-pane"
          role="tabpanel"
          aria-labelledby="js"
          tabIndex={0}
          value={js} onChange={(e) => setJs(e.target.value)} 
          style={{ padding: '10px' }}
        >
        
        </textarea>
      </div>
    </div>
      <div className="output px-3 border-bottom mx-1">
      <button className='run' onClick={handleOutput}>Run</button>
        <iframe
        id='output'
        title="output"
        width="100%"
        height="100%"
       ></iframe>
      </div>
       </Split>
    </>
  );
};