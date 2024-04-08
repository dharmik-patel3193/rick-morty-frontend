import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Alldata() {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(function (res) {
          console.log(res.data.results);
          setData(res.data.results)
        })
        .catch(function (err) {
          console.log(err);
        })
    }, [])
    return (
      <>
        <div className='d-flex'>
          { data.map((item)=>{ return(<Card data={item}/>)})}
        </div>
      </>
    );
}
