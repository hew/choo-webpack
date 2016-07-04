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
    transform: translateY(-100%) translateX(-50%);
    position: absolute;
    opacity: 0;
  }

  .glasses img {
    width: 500px;
  }

`;

export const appStyles = csjs.getCss(root)
