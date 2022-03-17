import React, { useContext } from 'react';

import { userContext } from '../reactContext';









const Home = () => {
    const { user } = useContext(userContext)



    return (
        <div className='container text-center' style={{ marginTop: '12rem' }}>

            <div className="alert alert-primary p-5">
                <h1>{user && <span className='text-success'>{user}'s{' '}</span>}
                    Home</h1>
            </div>

        </div>
    )
}

export default Home