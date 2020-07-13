import styled from 'styled-components';

export const Container = styled.div`
  background: #1B262C;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15vh 70vh 15vh;

  section {
    grid-column: 1/2;    
    grid-row: 1/4;
    padding: 40px;
    
    > div {
      background: #E5E5E5;
      height: 100%;
      width: 100%;
      border-radius: 30px;
      box-shadow: inset 4px 4px 3px #FFF, inset -4px -4px 4px rgba(0, 0, 0, 0.3);
      
      display: grid;
      grid-template-rows: 2fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }

    .avatar-area {
      display: flex;
      justify-content: center;
      align-items: center;
      
      grid-column: 1/3;
      grid-row: 1/2;


      img {
        width: 250px;
        height: 250px;
        border-radius: 125px;
        border: 5px solid #FFF;
        box-shadow: 0px 0px 6px #888;
      }
    }

    .info-area {
      text-align: center;
      grid-column: 1/3;
      grid-row: 2/3;

      h1 {
        font-size: 28pt;
        font-weight: bold;
        margin-bottom: 10px;
      }

      span {
        font-size: 15pt;
        color: #888;
      }

      h3 {
        font-size: 15pt;
        margin: 40px 0;
      }

      p {
        font-size: 13pt;
        width: 70%;
        margin-left: 15%;
        margin-bottom: 50px;
      }

      a {
        background: #00AA00;
        padding: 10px 30px;
        border-radius: 5px;
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        background: #009000;
        transition: .6s;
      }
    }

    .followers-area {
      grid-column: 1/2;
      grid-row: 3/4;

      width: 100%;
      height: 100%;
      padding: 50px;

      h1 {
        margin-bottom: 15px;
        text-align: center;
      }

      div {
        display: flex;
        justify-content: center;
      }
    }

    .follower-icon {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      border: 2px solid #FFF;
      box-shadow: 0px 0px 6px #888;
      margin-left: -15px;
    }

    .div-follower-icon {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      border: 2px solid #FFF;
      box-shadow: 0px 0px 6px #888;
      margin-left: -15px;
      background: green;
      color: #FFF;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .repos-area {
      grid-column: 2/3;
      grid-row: 3/4;

      width: 100%;
      height: 100%;
      padding: 50px;

      h1 {
        margin-bottom: 15px;
        text-align: center;
      }
      
      div {
        display: flex;
        justify-content: center;
      }
    }
  }

  main {
    grid-column: 2/3;    
    grid-row: 1/4;
    padding: 40px;

    > div {
      background: rgba(255, 255, 255, .1);
      height: 100%;
      width: 100%;
      border-radius: 30px;
      padding: 20px;

      div.list-repos {
        height: 100%;
        overflow-y: scroll;
        padding: 5px;
      }
    }
  }
`

export const Card = styled.div`
  width: 100%;
  height: 140px;
  background: rgba(255, 255, 255, .1);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 20px; 

  h1 {
    font-size: 18pt;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 10px;
  }

  p {
    color: #E5E5E5;
    text-align: justify;
    letter-spacing: .04em;
    line-height: 20px;
    font-size: 11pt;
  }

  :hover {
    background: rgba(255, 255, 255, .2);
    transition: .6s;
  }
`
