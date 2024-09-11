import React, { useState, useEffect } from 'react';

const end = 1735102800;
const start = 1704085200;

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
    const totalPercentage = (elapsed / totalDuration) * 100;

    const weeksLeft = Math.floor(remaining / (60 * 60 * 24 * 7));
    const daysLeft = Math.floor((remaining % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
    const hoursLeft = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
    const minutesLeft = Math.floor((remaining % (60 * 60)) / 60);
    const secondsLeft = remaining % 60;

    const onePercentPercentage = (totalPercentage % 1) * 100;
    const remainingOnePercentTime = 100 - onePercentPercentage
    const remaining1Percent = (Math.floor((remainingOnePercentTime/100) * totalDuration)) / 100
    const onePdaysLeft = Math.floor(remaining1Percent / (60 * 60 * 24));
    const onePhoursLeft = Math.floor((remaining1Percent % (60 * 60 * 24)) / (60 * 60));
    const onePminutesLeft = Math.floor((remaining1Percent % (60 * 60)) / 60);
    const onePsecondsLeft = Math.floor(remaining1Percent % 60);

    const zeroOnePercentPercentage = ((totalPercentage*100) % 1) * 100;
    const remaining01PercentTime = 100 - zeroOnePercentPercentage
    const remaining01Percent = (Math.floor((remaining01PercentTime/100) * totalDuration)) / 10000
    const zonePhoursLeft = Math.floor(remaining01Percent / (60 * 60));
    const zonePminutesLeft = Math.floor((remaining01Percent % (60 * 60)) / 60);
    const zonePsecondsLeft = Math.floor(remaining01Percent % 60);

    return (
        <div className="p-8 text-justify">
            <h1 className="text-2xl my-2 mb-4">my timers</h1>
            <div className="grid w-full text-center overflow-visible">
            { (remaining > 0) ? (
                <div className="p-2 grid rounded-xl place-items-center bg-gradient-to-b from-[rgb(255,204,204)] to-green-100 shadow-2xl shadow-green-200">
                    <h2 className="my-6 text-2xl text-white font-semibold drop-shadow-[0_2px_4px_rgba(247,247,247)]">Christmas!</h2>
                    <div className="w-full bg-green-200 h-4 rounded-full">
                        <div
                            className="bg-green-400 h-4 rounded-full"
                            style={{ width: `${totalPercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-lg my-2">
                        {weeksLeft} weeks {daysLeft} days {hoursLeft} hours {minutesLeft} minutes {secondsLeft} seconds left until done. <br/>
                        {totalPercentage.toFixed(2)}% of the way through
                    </p>
                    <div className="w-full bg-green-200 h-4 rounded-full">
                        <div
                            className="bg-green-400 h-4 rounded-full"
                            style={{ width: `${onePercentPercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-lg my-2">
                        {onePdaysLeft} days {onePhoursLeft} hours {onePminutesLeft} minutes {onePsecondsLeft} seconds left until one percent more. <br/>
                        {onePercentPercentage.toFixed(2)}% of the way through
                    </p>
                    <div className="w-full bg-green-200 h-4 rounded-full">
                        <div
                            className="bg-green-400 h-4 rounded-full"
                            style={{ width: `${zeroOnePercentPercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-lg my-2">
                        {zonePhoursLeft} hours {zonePminutesLeft} minutes {zonePsecondsLeft} seconds left until .01 percent more. <br/>
                        {zeroOnePercentPercentage.toFixed(2)}% of the way through
                    </p>
                </div>
            ) : (
                <p>a</p>
            )}
            </div>
        </div>
    );
}
