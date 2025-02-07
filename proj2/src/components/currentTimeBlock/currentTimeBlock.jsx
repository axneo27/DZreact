import { useState, useEffect } from "react";

function CurrentTimeBlock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="currentTimeBlock">
            <h2>Current Time</h2>
            <p>{time}</p>
        </div>
    );
}

export default CurrentTimeBlock;
