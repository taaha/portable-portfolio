import React from 'react';

function Chatpdf() {

  const ref = React.useRef();
  const [height, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    <>
    <div>  
        {/* <iframe
          src="https://darthpanda-chatpdf-app.hf.space"
          title="Chat PDF Application"
          style={{ width: '100%', height: '100%', display: 'block' }}
          ></iframe> */}

  <iframe
      ref={ref}
      onLoad={onLoad}
      id="myFrame"
      title="Chat PDF Application"
      src="https://darthpanda-chatpdf-app.hf.space"
      width="100%"
      // height={height}
      style={{
        width: "100%",
        overflow: "auto",
      }}
    ></iframe>
    </div>

    </>
  );
}

export default Chatpdf;
