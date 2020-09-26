import { createGlobalStyle } from 'styled-components'
import { isRegularExpressionLiteral } from 'typescript'

export default createGlobalStyle`



*{

    margin:0;
    padding:0;

    --color-bg: #f8f7fd;
    --color-primary:#eb5757;
    --color-secundary:#27AE60;
    --color-menu:#F2C94C;

    font-family: 'Courier New', Courier, monospace;





}





body{
    background-color:var(--color-bg);
}

html,
body {
  height: 100vh;
}


`
