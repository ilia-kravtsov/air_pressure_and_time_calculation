import s from '../style/ReportsAndTime.module.scss'
import st from '../style/ResultBlock.module.scss'
import {timeCount} from "../utils/timeCount";
import React from "react";

type Props = {
    timeOn?: string
}

export const ReportsAndTime = ({timeOn}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeOn ? timeOn : '00:00'}`}</span>
                <span className={s.text}>Пост - звену: проверка связи.</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:04')}`}</span>
                <span className={s.text}>Звено - посту: прибыли к месту выполнения задания, самочувствие в норме.</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:13')}`}</span>
                <span className={s.text}>Пост - звену: возвращайтесь на свежий воздух, доложите обстановку и самочувствие.</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:14')}`}</span>
                <span className={s.text}>Звено - посту: возвращаемся на свежий воздух, самочувствие в норме.</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:23')}`}</span>
                <span className={s.text}>Пост - звену: доложите обстановку и самочувствие.</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:24')}`}</span>
                <span className={s.text}>Звено - посту: звено возвращается на свежий воздух самочувствие в норме</span>
            </div>
            <div className={s.phrase}>
                <span className={st.time}>{`${timeCount(timeOn ? timeOn : '00:00', '00:30')}`}</span>
                <span className={s.text}>Выход звена</span>
            </div>
        </div>
    );
};

