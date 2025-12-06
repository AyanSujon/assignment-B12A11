import React from 'react';
import siteLogo from '../../assets/logo/favicon.png';

const logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <figure className='w-8'>
                <img src={siteLogo} alt="Site Logo" />
            </figure>
            <h5 className='font-bold text-xl text-accent'>ClubSphere</h5>
        </div>
    );
};

export default logo;