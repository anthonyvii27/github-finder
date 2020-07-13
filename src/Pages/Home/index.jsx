import React, { useState } from 'react';
import api from '../../service/api';

import { Container } from './styles';

import github_logo from '../../images/GitHub_Logo_White.png';
import icon_github from '../../images/icon_github.png';
import icon_linkedin from '../../images/icon_linkedin.png';
import icon_instagram from '../../images/icon_instagram.png';
import enthonydev from '../../images/enthonydev.png';

export default function Home() {
  const [userData, setUserData] = useState();
  const [userFollowers, setUserFollowers] = useState([]);
  const [latestSearches, setLatestSearches] = useState([]);
  const [alert, setAlert] = useState('');
  let count = 0;


  function getUserData(username) {
    api.get(`${username}`)
    .then(response => {
      setUserData(response.data)

      for(let index in latestSearches) {
        if(latestSearches[index].username === username) {
          return
        }
      }

      if(latestSearches.length >= 9) {
        let aux = latestSearches;
        aux.shift();
        setLatestSearches(aux);
      }

      setLatestSearches(latestSearches => [...latestSearches, { username, avatar_url: response.data.avatar_url }]);      
    })
    .catch(error => {
      setUserData();
      if(error.response.status === 404) {
        setAlert(<div className="alert-area"><h1>Not found</h1></div>);
      }
    })

    api.get(`${username}/followers`)
    .then(response => setUserFollowers(response.data))
  }


  function printFollower(follower) {
    if(count < 6) {
      count += 1;
      return <img src={follower.avatar_url} key={follower.id} className="follower-icon" alt="follower_image" title={follower.login} onClick={() => getUserData(follower.login)} />
    } else {
      if(count === 6) {
        let remaining = userFollowers.length - count;
        count += 1;
        return <div className="div-follower-icon" key="last">+{remaining}</div>
      }
    }
  }


  return (
    <Container>
      <aside>
        <h2>Latest searches</h2>
        <hr />
        <ul>
          {(latestSearches) ?
            latestSearches.map(search => (
              <li key={search.username} onClick={() => getUserData(search.username)}>
                <img src={search.avatar_url} className="latest-search-icon" alt="avatar_url" />
                {search.username}
              </li>
            )).reverse()
          : ''}
        </ul>
      </aside>  


      <main>
        <div>
          <div className="logo-area">
            <img src={ github_logo } alt="github" />
          </div>
          <div className="input-area">
            <div>
              <label htmlFor="github-username">Please, enter the Github Username</label>
              <div>
                <input type="text" id="github-username" placeholder="Username" />
                <button onClick={() => getUserData(document.getElementById('github-username').value)}>Search</button>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="center">
              <img src={enthonydev} alt="logo_enthonydev" className="logo" />
            </div>
            <div>
              <ul>
                <li><a href="https://github.com/anthonyvii27" target="_blank" rel="noopener noreferrer"><img src={icon_github} alt="icon_github" /></a></li>
                <li><a href="https://www.linkedin.com/in/anthonyvinicius/" target="_blank" rel="noopener noreferrer"><img src={icon_linkedin} alt="icon_linkedin" /></a></li>
                <li><a href="https://www.instagram.com/enthony.dev/" target="_blank" rel="noopener noreferrer"><img src={icon_instagram} alt="icon_instagram" /></a></li>
              </ul>
            </div>
            <div className="center">
              <h1>Anthony Vinicius - 2020</h1>
            </div>
          </div>
        </div>
      </main>


      <section>        
        <div>
          {(userData && userFollowers) ?
            <>
              <div className="avatar-area">
                <img src={userData.avatar_url} alt="avatar" />
              </div>
              
              <div className="info-area">
                <h1>{userData.name}</h1>
                <span>@{userData.login}</span>
                <h3>{userData.location}</h3>
                <p>{userData.bio}</p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
              </div>

              <div className="followers-area">
                <h1>Followers</h1>
                <div>
                  {userFollowers.map(follower => (
                    printFollower(follower)                
                  ))}
                </div>
              </div>
              
              <div className="repos-area">
                <h1>Repositories: {userData.public_repos}</h1>
                <div>
                  <button onClick={() => window.location.href = `/repos/${userData.login}`}>See more</button>
                </div>
              </div>
            </>
          : alert}              
        </div>
      </section>
    </Container>
  )
}
