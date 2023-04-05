import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then((res) => res.json())
            .then((data) => setposts(data))
    }, [])
    return (
        <>
            <div className="container mt-4">
            <div className="main-containt">
                <div className="row">
                    {
                        posts.map((post) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">
                                    <Link to={`/blog/${post.id}`}>
                                    <div className="card" style={{ height: "100%" }}>
                                        <img src={post.Image} className="card-img-top"style={{height:"60%"}} alt="bloggs" />
                                        <hr />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title.slice(0,20)+'...'}</h5>
                                            <hr/>
                                            <p className="card-text">{post.body.slice(0,200)+'...'}</p>
    
                                        </div>
                                    </div>
                                </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </>
    )
}
