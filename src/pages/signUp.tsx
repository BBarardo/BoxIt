import React, { useState } from 'react'
import {BtnPrimary} from '../components/Buttons'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'


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

    const {register, handleSubmit, errors} = useForm();
    // const [stateFirstName, setstateFirstName] = useState(false)
    // const [stateLastName, setstateLastName] = useState(false)
    // const [stateEmail, setstateEmail] = useState(false)
    // const [statePassword, setstatePassword] = useState(false)
    // const [stateRole, setstateRole] = useState(false)


    const onSubmit = (data:Profile) =>{
        // !/^[a-z ,.'-]+$/i.test(data.firstName) ? setstateFirstName(true) : setstateFirstName(false)
        // !/^[a-z ,.'-]+$/i.test(data.lastName) ? setstateLastName(true) : setstateLastName(false)
        // !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(data.email) ? setstateEmail(true) : setstateEmail(false)
        // !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(data.password) ? setstatePassword(true) : setstatePassword(false)
        // !/^[a-z ,.'-]+$/i.test(data.role) ? setstateRole(true) : setstateRole(false)
        
        console.log(JSON.stringify(data))
        // alert(JSON.stringify(data));
    }

    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
    }
    return (


      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              {/* <label htmlFor="firstName">First Name</label> */}
              {/* <input ref={register({required: true})} id="firstName" name="firstName" type="text"/> */}
              <TextField 
                id="firstName" 
                label="First Name" 
                variant="outlined" 
                inputRef={register({
                  required: true,
                  minLength: 2,
                  maxLength: 12,
                  pattern: /[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]/
                })} 
                name="firstName" 
                error={errors.firstName}
                helperText={errors.firstName && 'Invalid First Name'}
              />
{/* 
              {
                  errors.firstName && <div className="error">Enter your name</div>
              } */}
          </div> 
          <div>
              {/* <label htmlFor="lastName">Last Name</label> */}
              {/* <input ref={register({required: true})} id="lastName" name="lastName" type="text"/> */}
              <TextField 
                id="lastName" 
                label="Last Name" 
                variant="outlined" 
                inputRef={register({
                  required: true,
                  minLength: 2,
                  maxLength: 12,
                  pattern: /[^0-9.,"?!;:#$%&()*+-/<>=@[\]\^\_\{\}\|\~]/
                })} 
                name="lastName" 
                error={errors.lastName}
                helperText={errors.lastName && 'Invalid Last Name'}
              />
              {
                  errors.lastName && <div className="error">Enter your last name</div>
              }
              </div> 
          <div>
              {/* <label htmlFor="email">Email</label> */}
              {/* <input ref={register({required: true})} id="email" name="email" type="text"/> */}
              <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                inputRef={register({
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                })} 
                name="email" 
                error={errors.email}
                helperText={errors.email && 'Invalid Email'}
              />
              {
                  errors.email && <div className="error">Enter your email</div>
              }
          </div>
          <div>
              {/* <label htmlFor="password">Password</label> */}
              {/* <input ref={register({required: true})} id="password" name="password" type="password"/> */}
              <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                type="password" 
                inputRef={register({
                  required: true,
                  minLength: 6,
                  pattern: /[A-za-z ,.'-,0-9][^()<>[\]{}]/
                })} 
                name="password"
                error={errors.password}
                helperText={errors.password && 'Invalid Password'}
              />
              {
                  errors.password && <div className="error">Enter your password</div>
              }
          </div>
          <div>
              {/* <label htmlFor="role">Role</label> */}
              {/* <input ref={register({required: true})} id="role" name="role" type="text"/> */}
              <TextField 
                id="role" 
                label="Role" 
                variant="outlined" 
                inputRef={register} 
                name="role" 
                error={errors.role}
                helperText={errors.role && 'Invalid Role'}
              />
              {
                  errors.role && <div className="error">Enter your role</div>
              }
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {/* <BtnPrimary type="submit">
              Submit
          </BtnPrimary> */}
      </form>
    )
}

export default SignUp;