import React from 'react';
import s from '../style/Block.module.scss'
import {timeCount} from "../utils/timeCount";

type BlockType = {
    title: string
    columNumber: number
    timeOn?: string
    P_Max_Falling?: number
    P_Exit?: number
    Delta_T?: number
    T_Exit?: string
    T_General?: number
    T_Returning?: string
    T_Fact_Returning?: string
}

export const Block: React.FC<BlockType> = ({title, columNumber, timeOn, P_Max_Falling, P_Exit,Delta_T,T_Exit,T_General,T_Returning,T_Fact_Returning}) => {
    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.information}>
                {columNumber === 1 && <div>01.04.1984</div>}
                {columNumber === 2 && <div>ул. Кутузова, 4</div>}
                {columNumber === 3 && <div>
                    <div className={s.eighty}>80 ПСЧ</div>
                    <div>Паустовский П.П.</div>
                </div>}
                {columNumber === 4 && <div>
                    <div>Иванов И.И.</div>
                    <div>Петров П.П.</div>
                    <div>Сидоров С.С.</div>
                    <div>ПТС 'Профи - М'</div>
                </div>}
                {columNumber === 5 && <div className={s.changedBlock}>{`${timeOn ? timeOn?.split(':')[0] + ' ' + 'ч' + ' ' + timeOn?.split(':')[1] + ' ' + 'мин' : '00:00'}`}</div>}
                {columNumber === 6 && <div>
                    <div>299 атм</div>
                    <div>299 атм</div>
                    <div>299 атм</div>
                </div>}
                {columNumber === 7 && <div className={s.changedBlock}>{`${P_Max_Falling} атм`}</div>}
                {columNumber === 8 && <div className={s.changedBlock}>{`${P_Exit} атм`}</div>}
                {columNumber === 9 && <div className={s.changedBlock}>{`${Delta_T} мин`}</div>}
                {columNumber === 10 && <div className={s.changedBlock}>{`${T_Exit === 'NaN:NaN' ? '00:00' : T_Exit}`}</div>}
                {columNumber === 11 && <div className={s.changedBlock}>{`${T_General} мин`}</div>}
                {columNumber === 12 && <div className={s.changedBlock}>{`${T_Returning === 'NaN:NaN' ? '00:00' : T_Returning}`}</div>}
                {columNumber === 13 && <div className={s.changedBlock}>{`${T_Fact_Returning === 'NaN:NaN' ? '00:00' : T_Fact_Returning}`}</div>}
                {columNumber === 14 && <div className={s.phrases}>
                    <div className={s.subContainer}>
                        <div className={s.margin_top}>
                            <span className={s.changedBlock}>{`${timeOn ? timeOn : '00:00'}`}</span>
                            Пост - звену: проверка связи.
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:04')}`}</span>
                            Звено - посту: прибыли к месту выполнения задания, самочувствие в норме.
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:13')}`}</span>
                            Пост - звену: возвращайтесь на свежий воздух, доложите обстановку и самочувствие.
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:14')}`}</span>
                            Звено - посту: возвращаемся на свежий воздух, самочувствие в норме.
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:23')}`}</span>
                            Пост - звену: доложите обстановку и самочувствие.
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:24')}`}</span>
                            Звено - посту: звено возвращается на свежий воздух самочувствие в норме
                        </div>
                        <div>
                            <span className={s.changedBlock}>{`${timeCount(timeOn ? timeOn : '00:00', '00:30')}`}</span>
                            Выход звена
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

