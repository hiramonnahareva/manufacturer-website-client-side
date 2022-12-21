import  { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-12-server.onrender.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])
    return [services];
};

export default UseServices;