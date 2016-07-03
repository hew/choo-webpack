import csjs from 'csjs'


export const root = csjs`

  .container {
    max-width: 72em;
    position: relative;
  }

  .box {
    height: 100px;
    width: 80%;
    opacity: 1;
    margin: 0 auto;
  }

  .glasses {
    width: 50vw;
    position: absolute;
    top: 0;
  }

`;

export const appStyles = csjs.getCss(root)
