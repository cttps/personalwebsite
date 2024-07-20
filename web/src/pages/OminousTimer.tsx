import React, { useState, useEffect } from 'react';

const end = 1724104800;
const start = 1719817200;

export default function OmTimer() {
    const [now, setNow] = useState(Math.floor(Date.now() / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Math.floor(Date.now() / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const totalDuration = end - start;
    const elapsed = now - start;
    const remaining = end - now;
    const percentage = (elapsed / totalDuration) * 100;

    const weeksLeft = Math.floor(remaining / (60 * 60 * 24 * 7));
    const daysLeft = Math.floor((remaining % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
    const hoursLeft = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
    const minutesLeft = Math.floor((remaining % (60 * 60)) / 60);
    const secondsLeft = remaining % 60;

    return (
        <div className="p-8">
            <h1 className="text-2xl my-2 mb-4">Timer</h1>
            <div className="grid w-full">
                <div className="p-2 shadow-lg grid rounded-xl place-items-center border bg-pink-50">
                    <h2 className="my-2 text-2xl font-semibold">Seeing the stars again</h2>
                    <div className="w-full bg-pink-200 h-4 rounded-full">
                        <div
                            className="bg-pink-400 h-4 rounded-full"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <p className="text-lg my-2">
                        {weeksLeft} weeks {daysLeft} days {hoursLeft} hours {minutesLeft} minutes {secondsLeft} seconds left
                    </p>
                    <p>
                        {percentage.toFixed(2)}% of the way through
                    </p>
                </div>
            </div>
        </div>
    );
}
