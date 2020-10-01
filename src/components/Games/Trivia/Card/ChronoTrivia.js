import React, {
    useState,
    useEffect
} from 'react';
import { Context } from '../../../../Context/Provider';

let interval = null;
const ChronoTrivia = ({ setTimerOn, handle, timerOn }) => {
    const [startTime, setStartTime] = useState(0);
    const [currentTimeMs, setCurrentTimeMs] = useState(0);
    const { state, addClicks } = React.useContext(Context);

    useEffect(() => {
        const until = new Date();
        until.setSeconds(until.getSeconds() + 10);
        setStartTime(until);
       interval = setInterval(() => {
            setCurrentTimeMs(new Date());
        }, 1);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(startTime < currentTimeMs){
            setTimerOn(false);
            handle()
            addClicks()
        }
    }, [startTime, currentTimeMs])

    let actualTime = ''
    function convertMS(milliseconds) {
        let m, s, ms;
        ms = '' + milliseconds % 1000;
        s = Math.floor(milliseconds / 1000);
        m = '' + Math.floor(s / 60);
        s = '' + s % 60;
        actualTime = `${ m.padStart(2, '0')}:${s.padStart(2, '0')}:${ms.padStart(3, '0')}`;
        return actualTime;
    }

    return ( 
        currentTimeMs !== 0 && 
            <div className='chronoTrivia'>
                <p className='chronoTriviaText'> {
                `${convertMS(startTime-currentTimeMs)}`
                } </p>
            </div>
    );
};

export default ChronoTrivia;