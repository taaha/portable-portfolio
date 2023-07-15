import React from 'react';

function Chatpdf() {

  return (
    <>
    <div style={{ height: '100vh' }}>  
          <iframe
              id="myFrame"
              title="Chat PDF Application"
              src="https://darthpanda-chatpdf-app.hf.space"
              width="100%"
              height="100%"
              style={{
                width: "100%",
                height:"100%",
                overflow: "auto",
              }}
            ></iframe>
    </div>

    </>
  );
}

export default Chatpdf;
