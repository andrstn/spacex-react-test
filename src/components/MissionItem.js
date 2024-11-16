import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faW } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const MissionItem = ({mission}) => {
  const handleWikiRedirect = () => {
    window.location.href = mission.links.wikipedia
  }

  const handleArticleRedirect = () => {
    window.location.href = mission.links.article_link
  }

  const handleYoutubeRedirect = () => {
    window.location.href = mission.links.video_link
  }

  return (
    <div className='MissionItem'>
      <p>{mission.mission_name}</p>
      <div>
        <button onClick={handleWikiRedirect} style={{ background: 'green', borderRadius: '5px', marginRight: '0.5em'}}>
          <FontAwesomeIcon icon={faW} style={{color: "#ffffff"}}/>
        </button>
        <button onClick={handleArticleRedirect} style={{ background: 'green', borderRadius: '5px', marginRight: '0.5em' }}>
          <FontAwesomeIcon icon={faNewspaper} style={{color: "#ffffff"}}/>
        </button>
        <button onClick={handleYoutubeRedirect} style={{ background: 'green', borderRadius: '5px' }}>
          <FontAwesomeIcon icon={faVideo} style={{color: "#ffffff"}}/>
        </button>
      </div>
    </div>
  )
}

export default MissionItem