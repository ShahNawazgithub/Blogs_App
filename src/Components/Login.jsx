import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const postData = (e) => {
    e.preventDefault()

    if (email === ' ') {
      alert(`email is empty`)
      return;
    }
    if (password === ' ') {
      alert(`password is empty`)
      return;
    }

    console.log(`
    Email: ${email}
    Password: ${password}
    `)
  }
  return (
    <>
      <div className="hero-wrap hero-bread">
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">

              <div className="container-fluid w-100 ">
                <div className='w-75 m-4'>
                  <h5 className='bg-danger text-center text-light w-100 mt-3 p-2' style={{ borderRadius: 10 }}>Login Section</h5>
                  <form onSubmit={postData}>
                    <div className="my-4">
                      <input type="email" name="email" id='email' placeholder='Enter email' onChange={(e) => setemail(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>
                    <div className="my-4">
                      <input type="password" name="password" id='password' placeholder='Enter Password' onChange={(e) => setpassword(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>
                    <div className="my-4">
                      <button type='submit' className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>Login</button>
                      <div className='mt-4' >
                        <button className=' text-center text-light m-3 btn btn-danger' ><Link to="/register">Registration</Link></button>
                      </div>
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
