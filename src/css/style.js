import csjs from 'csjs'

export const root = csjs`
  
  html {
    box-sizing: border-box;
    font-family: 'Monospace', 'Courier', sans-serif;
    height: 100%;
    width: 100%;
    border: 15px solid #799FE4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body {
   margin: 0;
   margin-bottom: 5%;
   display: flex;
  }
  input {
    outline: 3px solid #9CBCEF;
  }
  input:focus {
    outline: 3px solid black;
  }
  .container {
    max-width: 40em;
    position: relative;
    margin: 0 auto;
  }
  .inner {
    position: relative;
  }
  .glasses {
    transform: translateY(-100%) translateX(-50%);
    position: absolute;
    top: 5em;
    opacity: 0;
  }
  .glasses img {;
    width: 500px;
  }

  @media(max-width: 40em) {
    .glasses img {;
      width: 300px;
    }
    .inner img {
      width: 300px;
    }

  }

`

export const appStyles = csjs.getCss(root)
