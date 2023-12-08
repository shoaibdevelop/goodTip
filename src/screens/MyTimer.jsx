import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp }) {
    const { seconds,minutes, hours, days} = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <>


            <div id="countdown-container" className="countdown-container">
                <article id="js-countdown" className="countdown">
                    <div id="js-days" className="number">{days}</div>
                    <div id="js-separator" className="separator">
                        <img src="../images/column.png" alt="" />

                    </div>
                    <div id="js-hours" className="number">{hours}</div>
                    <div id="js-separator" className="separator">
                        <img src="../images/column.png" alt="" />

                    </div>
                    <div id="js-minutes" className="number">{minutes}</div>
                    <div id="js-separator" className="separator">
                        <img src="../images/column.png" alt="" />
                    </div>
                    <div id="js-seconds" className="number">{seconds}</div>
                </article>
            </div>


        </>
    );
}

