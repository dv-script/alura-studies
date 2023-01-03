import style from './Timer.module.scss';

export default function Time() {
    return (
        <>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerDivision}>:</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
        </>
    )
}