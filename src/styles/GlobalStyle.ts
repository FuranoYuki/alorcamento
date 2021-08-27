import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    }

    html, body, #root, .App{
        min-height: 100vh;
    }

    .App{
        display: flex;
    }

    :root{
        --dark-blue: rgb(18, 38, 57);
        --secondary-main-color: rgb(51, 67, 113);
        --third-main-color: #2e3555;;
        --dark-blue-hover: #293846;
        --white-color: #354153de;
        --gray-color: #a7b1c2;
        --light-blue: #1c84c6;
        --light-blue-hover: #1a7bb9;
        --gray-dark-color: white;
        --salmon-color: #ed5565;
        --border-dark-color: #2f4050;
        --border-light-color: #cecbd0;
        --green-color: #19aa8d; 
        --green-dark-color: #049b7d;
        --body-color: #192e44;
        --border-bottom: #202535;
        --input-border: #e5e6e7;
        --white-text: #ffffff;
        --pink-color: rgb(224, 75, 107);
        --pink-dark-color: rgb(225,42,82);
        --wood-color: rgb(235,214,200)
    }

`;
