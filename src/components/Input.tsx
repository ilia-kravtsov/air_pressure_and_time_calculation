import React, {ChangeEvent, useState} from 'react';
import s from '../style/Input.module.scss'
import ReactTyped from "react-typed";

type InputType = {
    dataCB: (startData: { time: string, pressure: string }) => void
}

export const Input: React.FC<InputType> = ({dataCB}) => {

    let [startData, setStartData] = useState<{time: string, pressure: string}>({time: '', pressure: ''});
    let [timeError, setTimeError] = useState<boolean>(false)
    let [pressureError, setPressureError] = useState<boolean>(false)
    let [emptyError, setEmptyError] = useState<boolean>(false)

    const timeChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setStartData({...startData, time: e.currentTarget.value});
    }
    const pressureChanger = (e: ChangeEvent<HTMLInputElement>) => setStartData({...startData, pressure: e.currentTarget.value});
    const errorHandler = () => {
        setEmptyError(true)
        setTimeout(() => {
            setEmptyError(false)
        }, 4000)
    }
    const onCountClick = () => {
        if (startData.time === '' && startData.pressure === '') {
            errorHandler()
        } else if (startData.time === '' || startData.pressure === '') {
            errorHandler()
        } else {
            const pattern = /^([01]\d|2[0-3]):[0-5]\d$/;
            if (pattern.test(startData.time)) {
                if (+startData.pressure < 250 || +startData.pressure > 300) {
                    setPressureError(true)
                } else {
                    dataCB(startData);
                    setPressureError(false)
                    setStartData({time: '', pressure: ''})
                }
                setTimeError(false)
            } else {
                setTimeError(true)
            }
        }
    }

    return (
        <div className={s.inputContainer}>
            <h1>
                <ReactTyped strings={["Введите исходные данные"]} typeSpeed={70} loopCount={1} />
            </h1>
            <div className={s.inputSection}>
                <div className={s.inputBox}>
                    <input value={startData.time}
                           onChange={timeChanger}
                           className={s.inputData}
                           type={'text'}
                           required/>
                    <span>T вкл. в формате: 10:00</span>
                </div>
                <div className={s.inputBox}>
                    <input value={startData.pressure}
                           onChange={pressureChanger}
                           className={s.inputData}
                           type={'number'}
                           required/>
                    <span>{'250 > P min < 300'}</span>
                </div>
            </div>
            <button type={'submit'} className={s.countClick} onClick={onCountClick}>
                <span>Расчёт</span>
                <div className={s.liquid}></div>
            </button>
            <div className={s.errorBlock}>
                {timeError && <div className={s.error}>Не верно указан формат времени</div>}
                {pressureError && <div className={s.error}>{'250 > P < 300'}</div>}
                {emptyError && <div className={s.error}>{'Заполните все поля'}</div>}
            </div>
        </div>
    );
};

