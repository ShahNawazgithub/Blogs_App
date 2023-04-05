import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Editblogs() {
    const { id } = useParams()
    const [post, setpost] = useState({})
    const [message, setmessage] = useState('')
    const [loading, setloading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${id}`)
            .then((response) => response.json())
            .then((json) => setpost(json));
    }, [id])

    const updatedata = (e) => {
        e.preventDefault()
        setloading(true)
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setpost(data)
                setmessage('The Blog has been Updated')
                setloading(false)
            });
    }
    return (
        <>
            {
                message ? <div class="alert alert-success alert-dismissible fade show my-4 w-100" role="alert">
                    <strong>Success!!!</strong> {message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> : ''
            }
            <div className="hero-wrap hero-bread">
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <div className="container-fluid w-100 ">
                                <div className='w-75 m-4'>
                                    <h5 className='bg-danger text-center text-light w-100 mt-4 p-2' style={{ borderRadius: 8 }}>Edit Blogs</h5>
                                    <form onSubmit={updatedata}>
                                        <div className="my-4 title">
                                            <textarea type="text" name="title" id='title' value={post.title} placeholder='Title' onChange={(e) => setpost({ ...post, title: e.target.value })} className='form-control' />
                                        </div>
                                        <div className="mb-4 body" >
                                            <textarea type="text" name="body" id='body' value={post.body} placeholder='Description' cols="30" rows="10" onChange={(e) => setpost({ ...post, body: e.target.value })} className='form-control' />
                                        </div>
                                         
                                        <div className="mb-4">
                                            <button type='submit' disabled={loading ? true : false} className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>{loading ? "Updating..." : "Update blog"}</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



