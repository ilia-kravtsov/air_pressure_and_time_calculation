import React, {useEffect, useState} from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import s from '../style/App.module.scss';
import {ResultBlock} from "./ResultBlock";
import {Input} from "./Input";
import {timeCount} from "../utils/timeCount";
import {Fade} from "react-awesome-reveal";
import {ReportsAndTime} from "./ReportsAndTime";

function App() {

    let [data, setData] = useState<{ time: string, pressure: string }>({time: '', pressure: ''})

    useEffect(() => {
        let oldStartTime = localStorage.getItem('startTime')
        let oldStartPressure = localStorage.getItem('startPressure')
        if (oldStartTime && oldStartPressure) {
            setData({time: oldStartTime, pressure: oldStartPressure})
        }
    }, [])

    const dataCB = (startData: { time: string, pressure: string }) => {
        localStorage.setItem('startTime', startData.time)
        localStorage.setItem('startPressure', startData.pressure)
        setData(startData);
    }

    const P_Max_Falling = Math.floor(+data.pressure / 3);
    const P_Exit = Math.floor(+data.pressure - P_Max_Falling);
    const Delta_T = Math.floor(P_Max_Falling * 6.8 / 45);
    const T_Exit = timeCount(data.time, `00:${Delta_T.toString()}`)
    const T_General = Math.floor(+data.pressure * 6.8 / 45)
    const T_Returning = timeCount(data.time, `00:${T_General.toString()}`)
    const T_Fact_Returning = timeCount(data.time, `00:30`)

    return (
        <div className={s.app}>
            <header className={s.header}>
                <Logo className={s.app_logo}/>
            </header>
            <main className={s.body}>
                <Fade direction={'down'}>
                    <Input dataCB={dataCB}/>
                </Fade>
                <section className={s.blocksContainer}>
                    <ResultBlock title={'T вкл.'} columNumber={1} timeOn={data.time}/>
                    <ResultBlock title={'P max.пад.'} columNumber={2} P_Max_Falling={P_Max_Falling}/>
                    <ResultBlock title={'P к.вых.'} columNumber={3} P_Exit={P_Exit}/>
                    <ResultBlock title={'ΔT'} columNumber={4} Delta_T={Delta_T}/>
                    <ResultBlock title={'T вых.'} columNumber={5} T_Exit={T_Exit}/>
                    <ResultBlock title={'T общ.'} columNumber={6} T_General={T_General}/>
                    <ResultBlock title={'T возвр.'} columNumber={7} T_Returning={T_Returning}/>
                    <ResultBlock title={'T ф.возвр.'} columNumber={8} T_Fact_Returning={T_Fact_Returning}/>
                </section>
                <Fade direction={'left'}>
                    <ReportsAndTime timeOn={data.time}/>
                </Fade>
            </main>
            <footer className={s.footer}>
                <a href={'https://t.me/kravtsov_ilia'} className={s.getHireLink} target={'_blank'} rel="noreferrer">
                    <div className={s.getHireContainer}>
                        <div className={s.getHireTitle}>
                            <span>Контакт для связи</span>
                        </div>
                        <img
                            src={'https://ouch-cdn2.icons8.com/kSIAJQ2detV1XffgFuJ10fUEsh4Gm2atdnFRLFz3ORI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg1/L2I5MDg2ZjUyLTRi/NWMtNDYyZC1iMTli/LTk5Y2Q0NGZiYjI4/Yi5wbmc.png'}
                            className={s.getHireIcon}
                            alt={'aboutIcon'}/>
                    </div>
                </a>
            </footer>
        </div>
    );
}

export default App;
