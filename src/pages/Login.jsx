import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import { userContext } from '../reactContext';

//design...materialUI...
import TextField from '@mui/material/TextField';

import { InputAdornment, IconButton, OutlinedInput, FormControl, InputLabel, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { login } from '../api/user'

















const Login = () => {





    const navigate = useNavigate();


    const { setUser } = useContext(userContext)

    //form states.....
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false)



    const handleChange = () => {
        setShowPassword(!showPassword)
    }


    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await login({ email, password });

            if (res.error) toast.error(res.error);

            else {
                toast.success(res.message);
                //set user..
                setUser(res.userName)
                //redirect home now
                navigate('/')
            }



        } catch (error) {
            toast.error(error)
        }
    }




    return (
        <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>

            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor="Login" className='h2'>Login</label>
            </div>

            <div className="form-group">
                <TextField variant='outlined' fullWidth className='form-control' label="Email" id='Email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>


            <div className="form-group mt-3">
                <FormControl size='small' variant='outlined' className='form-control'>

                    <InputLabel>Password</InputLabel>
                    <OutlinedInput label='Password' type={!showPassword ? 'password' : 'text'} value={password} onChange={e => setPassword(e.target.value)} fullWidth className='p-2' endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end' onClick={handleChange} onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                            </IconButton>
                        </InputAdornment>
                    } />

                </FormControl>
            </div>
            <div className="text-center mt-4">
                <Button variant='contained' disabled={!email || !password} onClick={handleLogin}>Submit</Button>
            </div>
        </div >
    )
}

export default Login