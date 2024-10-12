import { useRef } from 'react';

const Hr = () => {
    const ref = useRef(null);
    return (
        <hr ref={ref} className="custom_hr" />
    )
}

export default Hr
