import React, { useState } from 'react'

export default function Register() {
    const [Name, setName] = useState('')
    const [email, setemail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Register, setRegister] = useState('')
    const [Password,setPassword]=useState('')
    const [loading, setloading] = useState(false)
  
    const postData = (e) => {
      e.preventDefault()
  
      if (Name === "") {
        alert('Enter your Name')
        return;
      }
      if (email === "") {
        alert('Please Enter Email')
        return;
      }
      if (Phone === "") {
        alert('Please Enter Phone')
        return;
      }
      if (Password == "" ) {
        alert('Please Enter Password')
        return;
      }
  
      const users= {
        Name: Name,
        email: email,
        Phone: Phone,
        Password:Password
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
                  <h5 className='bg-danger text-center text-light w-100 mt-3 p-2'style={{borderRadius:10}}>Registeration Section</h5>
                  <form onSubmit={postData}>
                    <div className="my-4">
                      <input type="text" name="Name" id='Name' placeholder='Enter Name'onChange={(e)=>setName(e.target.value)} className='form-control' style={{height:50}} />
                    </div>
                   
                    <div className="my-4">
                      <input type="email" name="email" id='email' placeholder='Enter email'onChange={(e)=>setemail(e.target.value)} className='form-control' style={{height:50}} />
                    </div>
                    
                    <div className="my-4">
                      <input type="text" name="Phone" id='Phone' placeholder='Enter Phone'onChange={(e)=>setPhone(e.target.value)} className='form-control' style={{height:50}} />
                    </div>
                  
                    <div className="my-4">
                      <input type="password" name="Password" id='Password' placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)} className='form-control'style={{height:50}} />
                    </div>
                    
                    <div className="mb-4">
                      <button type='submit' disabled={loading ? true : false} className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>{loading ? "Registering..." : "Register"}</button>
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

