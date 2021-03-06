import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1356px) {
    .content, .content-extended-padding {
      padding-bottom: 5%;
      padding-top: 15% !important;
      padding-left: 5%;
    }
    
  
    #icons {
      display: none;
    }
    ul {
      padding-inline-start: 0px;
      font-size: 20px !important;
    }
    h1 {
      font-size: 45px !important;
    }
    .content, .content-extended-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
    h2{
      font-size: 35px !important;
    }
  
  }
  
  h1#greeting {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 15px;
  }
  
  ul#nav2 li,
  ul#nav1 li,
  ul#nav li {
    display: inline;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-end: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 22px;
  }
  
  div#loop {
    font-family: sans-serif;
    font-size: 25px;
  }
  
  Card#1:hover {
    transform: scale(1.1);
  }
  
  .underline--magical {
    background-image: linear-gradient(120deg, #3eb489 0%, #3eb489 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
    transition: background-size, color 0.5s ease-in;
  }
  .underline--magical:hover {
    background-size: 100% 100%;
    color: #fefffc;
    transition: background-size 0.4s ease-in, color 0.4s ease-in;
  }
  
  .greeting {
    font-weight: bold;
  }
  
  h1#projectTitle {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 80px;
    font-weight: bold;
  }
  
  .footer {
    margin-top: 50px;
  }
  
  .bio {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 25px;
  }
  
  u#scroll {
    color: black;
  }
  
  span#icons {
    margin-right: 8px;
    z-index: -100;
  }
  
  .content {
    padding-bottom: 5%;
    padding-top: 5%;
    padding-left: 5%;
  }
  .content-extended-padding{
    padding-bottom: 5%;
    padding-top: 5%;
    padding-left: 22%;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  
  a {
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
  }
`;
