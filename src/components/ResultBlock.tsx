import React from 'react';
import s from '../style/ResultBlock.module.scss'
import { Fade } from "react-awesome-reveal";

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

export const ResultBlock: React.FC<BlockType> = ({
                                                     title,
                                                     columNumber,
                                                     timeOn,
                                                     P_Max_Falling,
                                                     P_Exit,
                                                     Delta_T,
                                                     T_Exit,
                                                     T_General,
                                                     T_Returning,
                                                     T_Fact_Returning
                                                 }) => {
    const renderContent = () => {
        switch (columNumber) {
            case 1:
                return <div className={s.time}>{`${timeOn ? timeOn?.split(':')[0] + ':' + timeOn?.split(':')[1] : '00:00'}`}</div>;
            case 2:
                return <div className={s.time}>{`${P_Max_Falling} атм`}</div>;
            case 3:
                return <div className={s.time}>{`${P_Exit} атм`}</div>;
            case 4:
                return <div className={s.time}>{`${Delta_T} мин`}</div>;
            case 5:
                return <div className={s.time}>{`${T_Exit === 'NaN:NaN' ? '00:00' : T_Exit}`}</div>;
            case 6:
                return <div className={s.time}>{`${T_General} мин`}</div>;
            case 7:
                return <div className={s.time}>{`${T_Returning === 'NaN:NaN' ? '00:00' : T_Returning}`}</div>;
            case 8:
                return <div className={s.time}>{`${T_Fact_Returning === 'NaN:NaN' ? '00:00' : T_Fact_Returning}`}</div>;
            default:
                return null;
        }
    };

    return (
        <div className={s.fadeForContainer}>
            <Fade direction={'up'}>
                <div className={s.container}>
                    <div className={s.title}>{title}</div>
                    <div className={s.information}>
                        {renderContent()}
                    </div>
                </div>
            </Fade>
        </div>
    );
};
