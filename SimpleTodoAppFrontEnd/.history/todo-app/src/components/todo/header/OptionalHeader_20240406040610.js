import React, { useEffect, useState } from 'react';

const OptionalHeader = ({ children }) => {

    const location = useLocation();

    const [showlavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        console.log('this is location: ', location)
        if (location.pathname === '/login') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])

    return (
        <div>{children}</div>
    )
}


export default MaybeShowNavBar