import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
  const { id } = useParams();
  const [post, setpost] = useState({})
  const [users, setusers] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setpost(data))
  }, [id])
 
    useEffect(() => {
      fetch(`http://localhost:5000/users/${post.userId}`)
        .then((res) => res.json())
        .then((data) =>
          setusers(data))
    }, [post.userId])
  return (
    <>
      <div class="card m-4">
        <img src={post.Image} class="card-img-top" alt="blog"style={{height:400}} />
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
        
          <p class="card-text">{post.body}</p>
          <hr />
          {/* <p className='card-text'>Author:-{users.Name}</p> */}
         
        </div>
      </div>
    </>
  )
}
