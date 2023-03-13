import React, { useState } from 'react'


export default function AddBlog() {
  const [title, settitle] = useState('')
  const [body, setbody] = useState('')
  const [Image, setImage] = useState('')
  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false)

  const getdata = (e) => {
    e.preventDefault()

    if (title === "") {
      alert('Title is Empty')
      return;
    }
    if (body === "") {
      alert('Description is Empty')
      return;
    }

    const blog = {
      title: title,
      body: body,
      Image: Image,
      userId: 1
    }
    setloading(true)
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setmessage('The Blog has been Published')
        setloading(false)
      });
  }

  return (
    <>{
      message ? <div class="alert alert-warning alert-dismissible fade show my-4" role="alert">
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
                  <h5 className='bg-danger text-center text-light w-100 mt-4 p-2' style={{ borderRadius: 8 }}>Add Blogs</h5>
                  <form onSubmit={getdata}>
                    <div className="my-4 title">
                      <textarea type="text" name="" id='' placeholder='Title' onChange={(e) => settitle(e.target.value)} className='form-control' />
                    </div>
                    <div className="mb-4 body" >
                      <textarea type="text" name="body" id='body' placeholder='Description'cols="30" rows="10" onChange={(e) => setbody(e.target.value)} className='form-control' />
                    </div>
                    <div className="mb-4 uploadfile ">
                      <input onChange={(e) => setImage(e.target.value)} type="file" id="myFile" name="filename" />
                    </div>
                    <div className="mb-4">
                      <button type='submit' disabled={loading ? true : false} className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>{loading ? "Adding..." : "Add blog"}</button>
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


