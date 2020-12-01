import React from 'react'
import {BtnPrimary} from '../components/Buttons'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'


type Profile = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
}

// const Container = styled.div`
//   background-color: #15cdfc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: '90vh';
//   padding: 4rem;
//   margin: 2rem 5rem;
//   border-radius: 5px;
//   margin-left: auto;
//   margin-right: auto;
//   width: 30%;
// `;

const SignUp = () => {

    const {register, handleSubmit, errors} = useForm<Profile>()

    const onSubmit = handleSubmit((data) =>{
        alert(JSON.stringify(data))
    })

    return (


      <form onSubmit={onSubmit}>
          <div>
              <label htmlFor="firstName">First Name</label>
              <input ref={register({required: true})} id="firstName" name="firstName" type="text"/>
              {
                  errors.firstName && <div className="error">Enter your name</div>
              }
          </div> 
          <div>
              <label htmlFor="lastName">Last Name</label>
              <input ref={register({required: true})} id="lastName" name="lastName" type="text"/>
              {
                  errors.lastName && <div className="error">Enter your last name</div>
              }
              </div> 
          <div>
              <label htmlFor="email">Email</label>
              <input ref={register({required: true})} id="email" name="email" type="text"/>
              {
                  errors.email && <div className="error">Enter your email</div>
              }
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input ref={register({required: true})} id="password" name="password" type="password"/>
              {
                  errors.password && <div className="error">Enter your password</div>
              }
          </div>
          <div>
              <label htmlFor="role">Role</label>
              <input ref={register({required: true})} id="role" name="role" type="text"/>
              {
                  errors.role && <div className="error">Enter your role</div>
              }
          </div>
          <BtnPrimary type="submit">
              Submit
          </BtnPrimary>
      </form>
    )
}

export default SignUp;