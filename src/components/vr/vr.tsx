import { useRef } from 'react';

const Vr = () => {
    const ref = useRef(null);
    return (
        <span ref={ref} className="custom_vr">
            <span></span>
        </span>
    )
}

export default Vr
