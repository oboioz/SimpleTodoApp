import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OptionalFooter = ({ children }) => {

    const location = useLocation();

    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/login') {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location])

    return (
        <div>{showFooter && children}</div>
    )
}

export default OptionalFooter