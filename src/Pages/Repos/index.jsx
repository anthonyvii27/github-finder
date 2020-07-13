import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

import { Container, Card } from './styles';

export default function Repos() {
  const username = useParams('id');
  const [userData, setUserData] = useState();
  const [userFollowers, setUserFollowers] = useState([]);
  const [repos, setRepos] = useState([]);
  
  let count = 0;
  
  useEffect(() => {
    api.get(`${username.id}`)
    .then(response => setUserData(response.data))
  }, [username.id])

  useEffect(() => {
    api.get(`${username.id}/followers`)
    .then(response => setUserFollowers(response.data))
  }, [username.id])

  useEffect(() => {
    api.get(`${username.id}/repos`)
    .then(response => setRepos(response.data))
  }, [username.id])


  function printFollower(follower) {
    if(count < 6) {
      count += 1;
      return <img src={follower.avatar_url} key={follower.id} className="follower-icon" alt="follower_image" title={follower.login} />
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
              </div>
            </>
          : alert}              
        </div>
      </section>

      <main>
        <div>
          <div className="list-repos">
            {(repos) ?
              repos.map(repo => (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                  <Card>
                    <h1>{repo.name}</h1>
                    <p>{(repo.description) ? (repo.description.length > 260) ? repo.description.substring(0, 260).concat('...') : repo.description : ''}</p>
                  </Card>
                </a>
              ))
            : ''}
          </div>
        </div>
      </main>
    </Container>
  )
}
