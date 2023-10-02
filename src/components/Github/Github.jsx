/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    
    // const githubData = useLoaderData();
    // console.log(githubData)
    const [githubData, setGithubData]= useState([])
    const [profileBio, setProfileBio]= useState("");

    useEffect(()=>{
            // fetch("https://github.com/users/tayyab94")
            // .then((response)=> response.json())
            // .then(data=>{
            //     console.log(data);
            //     setGithubData(data);
            // })

            const fetchGitHubData = async () => {
                try {
                  const response = await fetch('https://api.github.com/user', {
                    headers: {
                      Authorization:   `Bearer ${String(import.meta.env.VITE_GITHUB_KEY)}`,
                    },
                  });
          
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
          
                  const jsonData = await response.json();
                console.log(jsonData)
                  setGithubData(jsonData);
                  setProfileBio(jsonData.bio);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
          
              fetchGitHubData();
    },[])
  return (
    <>
    <div className='w-full h-auto flex flex-col md:flex-row md:justify-center '>
        <div className='p-10 flex justify-center'>
            <img className='w-[10rem] md:w-[25rem] object-cover rounded-lg' src={githubData.avatar_url} alt="Git Profile Image" />
        </div>
        <div className='mt-10'>
        <h2 className='text-center text-indigo-600 p-4 text-3xl'>Welcome to Github ({githubData.login} )</h2>
      <p className='text-center text-slate-600 w-10/12 '>{githubData.bio}</p>
      <h4 className='text-center'>Followers: <strong className='text-green-600'> {githubData.followers}</strong></h4>
        </div>
    </div>
    </>
  )
}

export default Github;

// export const GetGitHubInfo= async ()=>{
//     const response = await fetch('https://api.github.com/user', {
//                     headers: {
//                       Authorization:   `Bearer ${String(import.meta.env.VITE_GITHUB_KEY)}`,
//                     },
//                   });
//     return response.json();
// }
