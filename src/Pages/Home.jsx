import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };
    function convertToSlug(Text) {
        return Text.toLowerCase()
                   .replace(/[^\w ]+/g, '')
                   .replace(/ +/g, '-');
      };

    const [posts, setposts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then((res) => res.json())
            .then((data) =>
                // console.log(data))
                setposts(data))
    }, [])

    return (
        <>
            <div className="main-containt mt-4">
                <div className="row">
                    {
                        posts.map((post) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">

                                    <Link to={`/blog/${convertToSlug(post.title)}/${post.id}`}>
                                        <div className="card" style={{ height: 600 }}>
                                            <img src={post.Image} className="card-img-top"style={{height:300}} alt="bloggs" />
                                            <hr />
                                            <div className="card-body">
                                                <h5 className="card-title">{truncate(post.title, 30)}</h5>
                                                <hr/>
                                                <p className="card-text">{truncate(post.body, 170)}</p>
        
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
