import React, { useState } from 'react';
import Axios from 'axios';

function MulFileUpload(){
    const [file, setFile] = useState();
    
    const send = event => {
        const data = new FormData();
        data.append("file", file);
    
        Axios.post("http://localhost:5000/posts/upload", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    return (
        <div className="MulFileupload">
      <header className="Mul-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".jpg"
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
    );
}
export default MulFileUpload;