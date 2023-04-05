import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [Name, setName] = useState('')
  const [email, setemail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Register, setRegister] = useState('')
  const [Password, setPassword] = useState('')
  const [loading, setloading] = useState(false)
  const [data, setdata] = useState([])

  const postData = (e) => {
    e.preventDefault()

    var user = data.find((item) => item.email === email)
    if (user) {
      alert('email or phone number is already register')
    }
    else {
      const users = {
        Name: Name,
        email: email,
        Phone: Phone,
        Password: Password
      }
      setloading(true)
      fetch('http://localhost:5000/users',
        {
          method: 'POST',
          body: JSON.stringify(users),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setRegister('Registered successfully')
          setloading(false)
        });
    }
  }
  async function ApiData() {
    var response = await fetch('http://localhost:5000/users')
    var data = await response.json()
    setdata(data)
  }
  useEffect(() => {
    ApiData()
  }, [])
  return (
    <>
      {
        Register ? <div className="alert alert-warning alert-dismissible fade show my-4" role="alert">
          <strong>Registered!!!</strong> {Register}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> : ''
      }
      <div className="hero-wrap hero-bread">
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">

              <div className="container-fluid w-100 ">
                <div className='w-75 m-4'>
                  <h5 className='bg-danger text-center text-light w-100 mt-3 p-2' style={{ borderRadius: 10 }}>Registeration Section</h5>
                  <form onSubmit={postData}>
                    <div className="my-4">
                      <input type="text" name="Name" id='Name' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>

                    <div className="my-4">
                      <input type="email" name="email" id='email' placeholder='Enter email' required onChange={(e) => setemail(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>

                    <div className="my-4">
                      <input type="text" name="Phone" id='Phone' placeholder='Enter Phone' required onChange={(e) => setPhone(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>

                    <div className="my-4">
                      <input type="password" name="Password" id='Password' placeholder='Enter Password' required onChange={(e) => setPassword(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>

                    <div className="mb-4">
                      <button type='submit' disabled={loading ? true : false} className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>{loading ? "Registering..." : "Register"}</button>
                    </div>
                  </form>
                  <div className="mb-4">
                      <button><Link to='/login'>Already Registered Click Here to Login</Link></button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

