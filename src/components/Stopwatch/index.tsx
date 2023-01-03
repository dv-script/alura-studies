import Button from '../Button';
import Timer from './Timer';
import style from './Stopwatch.module.scss';

export default function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>
                Choose some card and start the timer
            </p>
            <div className={style.timerWrapper}>
                <Timer />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}