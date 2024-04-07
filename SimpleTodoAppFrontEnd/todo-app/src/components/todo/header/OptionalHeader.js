import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OptionalHeader = ({ children }) => {

    const location = useLocation();

    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/login') {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
    }, [location])

    return (
        <div>{showHeader && children}</div>
    )
}

export default OptionalHeader