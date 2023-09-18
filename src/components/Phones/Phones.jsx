import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    const [phone, setPhone] = useState([])


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhone(data.data))
    }, [])

    return (
        <div>
            <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
            <h2>Phone : {phone.length}</h2>
        </div>
    );
};

export default Phones;