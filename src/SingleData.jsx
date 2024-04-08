import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function SingleData() {
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function (res) {
          console.log(res.data);
          setData(res.data)
        })
        .catch(function (err) {
          console.log(err);
        })
    }, [])
  return (
    <>
        <div>
        <img src={data.image} alt="" />
        <h1>{data.name}</h1>
        <div className="d-flex">
            {  
                (data.length!=0)?(
                    data.episode.map((item)=>{
                        console.log(item);
                        return(
                            <div>
                                <a href={item}></a>
                            </div>
                        )
                    })
                ):null
            }
        </div>
    </div>
    </>
  )
}

export default SingleData