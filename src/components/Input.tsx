import React, {ChangeEvent, useState} from 'react';
import s from '../style/Input.module.scss'
import ReactTyped from "react-typed";
import {Alert, Snackbar} from "@mui/material";

type InputType = {
    dataCB: (startData: { time: string, pressure: string }) => void
}

type Validation = {
    success: string
    error: string
}

export const Input: React.FC<InputType> = ({dataCB}) => {

    let [startData, setStartData] = useState<{time: string, pressure: string}>({time: '', pressure: ''});

    let [validation, setValidation] = useState<Validation>({
        error: '',
        success: '',
    })

    const timeChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setStartData({...startData, time: e.currentTarget.value});
    }
    const pressureChanger = (e: ChangeEvent<HTMLInputElement>) => setStartData({...startData, pressure: e.currentTarget.value});

    const emptyError = (errorText: string) => {
        setValidation({...validation, error: errorText})
        setTimeout(() => {
            setValidation({...validation, error: ''})
        }, 3000)
    }

    const onCountClick = () => {
        if (startData.time === '' && startData.pressure === '') {
            emptyError('Заполните все поля')
        } else if (startData.time === '' || startData.pressure === '') {
            emptyError('Заполните все поля')
        } else {
            const pattern = /^([01]\d|2[0-3]):[0-5]\d$/;
            if (pattern.test(startData.time)) {
                if (+startData.pressure < 260 || +startData.pressure > 300) {
                    emptyError('260 > P < 300')
                } else {
                    dataCB(startData);
                    setValidation({error: '', success: 'расчёт произведён'})
                    setStartData({time: '', pressure: ''})
                    setTimeout(() => {
                        setValidation({...validation, success: ''})
                    }, 2500)
                }
            } else {
                emptyError('Не верно указан формат времени')
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
                    <span>T вкл. формат: 10:00</span>
                </div>
                <div className={s.inputBox}>
                    <input value={startData.pressure}
                           onChange={pressureChanger}
                           className={s.inputData}
                           type={'number'}
                           required/>
                    <span>{'260 > P min < 300'}</span>
                </div>
            </div>
            <button type={'submit'} className={s.countClick} onClick={onCountClick}>
                <span>Расчёт</span>
                <div className={s.liquid}></div>
            </button>
            <div className={s.infoBlock}>
                {<Snackbar open={!!validation.success} autoHideDuration={6000} onClose={() => setValidation({...validation, success: ''})} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={() => setValidation({...validation, success: ''})} severity="success">
                        {validation.success}
                    </Alert>
                </Snackbar>}
                {<Snackbar open={!!validation.error} autoHideDuration={6000} onClose={() => setValidation({...validation, error: ''})} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={() => setValidation({...validation, error: ''})} severity="error">
                        {validation.error}
                    </Alert>
                </Snackbar>}
            </div>
        </div>
    );
};

