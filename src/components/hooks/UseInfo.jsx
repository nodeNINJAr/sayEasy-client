import React, { useContext } from 'react';
import { infoContext } from '../../provider/InfoProvider';


const UseInfo = () => {
    const tutorInfo = useContext(infoContext)
    return tutorInfo;
};

export default UseInfo;