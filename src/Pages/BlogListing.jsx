import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BlogListing() {
  const [posts, setposts] = useState([])
  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false)


  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((data) =>
        setposts(data))
  }, [])
  function handleDelete(id) {
    setloading(true)
    fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE", 
    })
      .then((res) => res.json())
      .then(() =>
        setmessage('The Blog has been Deleted!!!'),
        setloading(false)
      )
  }
  return (
    <>
      {
        message ? <div className="alert alert-danger alert-dismissible fade show my-4 w-100" role="alert">
          <strong>Success!!!</strong> {message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> : ''
      }
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => {
              return (
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{post.title.slice(0,40)+'...'}</td>
                  <td>{post.body.slice(0,100)+'...'}</td>
                  <td>
                    <button disabled={loading ? true : false} onClick={() => handleDelete(post.id)}> {loading ? "Deleting..." : "Delete"}</button>
                    <Link to={`/edit-blog/${post.id}`}><i className="bi bi-pencil-square ms-5 "></i></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}