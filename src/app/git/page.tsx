'use client'


import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';


export default function Home() {
   const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/invincibleinventor")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
 return (<div className='grid grid-cols-2 py-16 px-10 items-center content-center mx-auto'>
  <div className='xl:block w-full hidden p-4 rounded-lg border border-neutral-800 w-max bg-white bg-opacity-5'>
<GitHubCalendar hideTotalCount={true} hideColorLegend={true} colorScheme='dark' style={{color:"white"}} hideMonthLabels={true} username={"invincibleinventor"}></GitHubCalendar>
  </div>
  </div>
      );
      
  
}
