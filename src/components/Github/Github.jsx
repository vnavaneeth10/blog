import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/vnavaneeth10')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])


  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>Github followers : {data.followers}
    
    <img src={data.avatar_url} width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    //     fetch('https://api.github.com/users/vnavaneeth10')
    const response = await fetch('https://api.github.com/users/vnavaneeth10')
    return response.json()
}