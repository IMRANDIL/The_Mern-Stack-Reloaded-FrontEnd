import React, { useState } from 'react';


//design...materialUI...
import TextField from '@mui/material/TextField';

import { InputAdornment, IconButton, OutlinedInput, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

















const Register = () => {

    //form states.....
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    //password validation....

    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);






    const handleChange = () => {
        setShowPassword(!showPassword)
    }


    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }




    return (
        <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>

            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor="Register" className='h2'>Register</label>
            </div>



            <div className="form-group">
                <TextField variant='outlined' fullWidth className='form-control' label="UserName" id='userName' value={username} onChange={e => setUsername(e.target.value)} />
            </div>










            <div className="form-group mt-3">
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

                <div className='ml-1'>
                    <div>

                        <small className={hasSixChar ? 'text-success' : 'text-danger'}>
                            at least 6 characters
                        </small>
                    </div>
                </div>
            </div>



            <div className="form-group mt-3">
                <FormControl size='small' variant='outlined' className='form-control'>

                    <InputLabel>confirmPassword</InputLabel>
                    <OutlinedInput label='confirmPassword' type={!showPassword ? 'password' : 'text'} value={confirmPass} onChange={e => setConfirmPass(e.target.value)} fullWidth className='p-2' endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end' onClick={handleChange} onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                            </IconButton>
                        </InputAdornment>
                    } />

                </FormControl>

                {password && confirmPass && (
                    <FormHelperText className='ml-1 mt-1'>
                        {password === confirmPass ? <span className='text-success'>Password does match</span> : <span className='text-danger'>Password does not match</span>}


                    </FormHelperText>)}
            </div>








            <div className="text-center mt-4">
                <Button variant='contained' disabled={!email || !password || !confirmPass || !username}>Submit</Button>
            </div>
        </div >
    )
}

export default Register