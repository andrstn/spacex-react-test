import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar'
import axios from 'axios';
import MissionItem from './MissionItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const MissionWrapper = () => {
  const [missions, setMissions] = useState([]);
  const [allMissions, setAllMissions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches')
        setAllMissions(response.data);
        setMissions(response.data);
        console.log(missions)
      } catch (error) {
        console.error('Something went wrong with accessing SpaceX')
      }
    }

    fetch()
  }, [])

  const searchMission = (value) => {
    setMissions(allMissions.filter((mission) => mission.mission_name.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <div className='MissionWrapper'>
      <h1>
        <FontAwesomeIcon icon={faRocket} />
        SpaceX Launches
      </h1>
      <SearchBar searchMission={searchMission}/>
      
      <div id='scrollDiv' style={{ height: 800, overflow: 'auto' }}>
        <InfiniteScroll
          dataLength={missions}
          hasMore={true}
          loader={
          <>
            {
              missions.length === 0
              ? <FontAwesomeIcon icon={faSpinner} style={{color: "#ffffff"}}/>
              : <p style={{color: 'white'}}>You're all set!</p>
            }
          </>
          }
          scrollableTarget='scrollDiv'
        >
          {missions.map((mission, index) => (
            <MissionItem mission={mission} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default MissionWrapper