import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benefit = (props) => {

    return (
        <p className='md:flex items-center mr-2'><CheckCircleIcon className='w-5 h-4 text-green-500'></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default Benefit;