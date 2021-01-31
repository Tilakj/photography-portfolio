import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
        background:#1b1b1b;
}

button{
border: 2px solid #23D997;
padding:0.5rem 1.1rem;
font-size:1.1rem;
font-weight:bold;
background:transparent;
color:white;
transition: all 0.5s ease;
&:hover{
    background-color:#23D997;
    color:black;
 }
}

h2{
    font-weight:lighter;
    font-size:3rem;
}
h3{
    color:white;
}
h4{
    font-weight:bold;
}
span{
    font-weight:bold;
    color:#23D997;
}
p{
    padding:3rem 0rem;
    font-size:1.4rem;
    line-height:150%;
    color:#ccc;
}
`

export default GlobalStyle;