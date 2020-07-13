import styled from 'styled-components';

export const Container = styled.div`
  background: #1B262C;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 15vh 70vh 15vh;

  aside {
    background: rgba(255, 255, 255, .1);
    grid-column: 1/2;
    grid-row: 2/3;    

    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    h2 {
      color: #FFF;
      padding-top: 20px;
      font-weight: bold;
      text-align: center;
    }

    hr {
      border: 1px solid #888;
      margin: 20px 5%;
      width: 90%;
    }

    ul {
      list-style: none;
      height: 83%;
      width: 100%;
      overflow-y: hidden;
    }

    li {
      width: 90%;
      height: 55px;
      background: rgba(255, 255, 255, .1);
      padding: 10px;
      margin-bottom: 9px;
      margin-left: 5%;
      border-radius: 5px;
      color: #FFF;
      font-size: 12pt;
      text-align: center;
      padding-top: 20px;

      .latest-search-icon {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        border: 2px solid #FFF;
        margin-top: -10px;
        float: left;
      }
    }

    li:hover {
      background: rgba(255, 255, 255, .2);
      cursor: pointer;
      transition: .6s;
    }
  }

  main {
    grid-column: 2/3;
    grid-row: 1/4;

    padding: 40px 0px 40px 40px;

    > div {
      display: grid;
      grid-template-rows: 1fr 2fr 1fr;

      background: rgba(255, 255, 255, .1);
      height: 100%;
      width: 100%;
      border-radius: 30px;      

      .logo-area {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        img {
          width: 350px;
        }
      }

      .input-area {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          display: table-cell;

          label {
            color: #FFF;
            font-size: 13pt;
            font-weight: bold;
            text-align: center;
          }
  
          div {
            display: flex;
            justify-content: center;
            align-items: center;
      
            input {
              padding: 12px;
              border-radius: 5px;    
              margin-top: 20px;     
            }
      
            button {
              margin-left: 10px;
              padding: 12px;
              border-radius: 5px; 
              background: #00AA00;
              color: #FFF;
              font-weight: bold;
              margin-top: 20px; 
            }
      
            button:hover {
              background: #009000;
              transition: .6s;
            }
          }
        }
      }

      .footer {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;

        .center {
          .logo {
            width: 200px;
          }
          
          display: flex;
          justify-content: center;
          align-items: center;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;

          ul {
            list-style: none;

            li {
              display: inline;
              margin-left: 5px;
              margin-right: 5px;

              img {
                width: 40px;
              }
            }
          }
        }

        h1 {
          font-size: 13pt;
          color: #888;
        }
      }
    }
  }

  section {
    grid-column: 3/4;
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

    .follower-icon:hover {
      border: 2px solid #00AA00;
      transition: .8s;
      cursor: pointer;
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

        button {
          padding: 10px;
          border-radius: 5px; 
          background: #00AA00;
          color: #FFF;
          font-weight: bold;
        }

        button:hover {
          background: #009000;
          transition: .6s;
        }
      }
    }

    .alert-area {
      grid-column: 1/3;
      grid-row: 1/4;
      
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
