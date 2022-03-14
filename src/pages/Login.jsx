import React, { useState } from 'react';


//design...materialUI...
import TextField from '@mui/material/TextField';

import { InputAdornment, IconButton, OutlinedInput, FormControl, InputLabel, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

















const Login = () => {

    //form states.....
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false)



    const handleChange = () => {
        setShowPassword(!showPassword)
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
                    <OutlinedInput label='Password' value={password} onChange={e => setPassword(e.target.value)} fullWidth className='p-1' endAdornment={
                        <InputAdornment>
                            <IconButton edge='end' onClick={handleChange}>
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                            </IconButton>
                        </InputAdornment>
                    } />

                </FormControl>
            </div>
            <div className="text-center mt-4">
                <Button variant='contained' disabled={!email || !password}>Submit</Button>
            </div>
        </div >
    )
}

export default Login