import React, {useState} from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import s from '../style/App.module.scss';
import {Block} from "./Block";
import {Particle} from "./Particle";
import {Input} from "./Input";
import {timeCount} from "../utils/timeCount";

function App() {

    let [data, setData] = useState<{ time: string, pressure: string }>({time: '', pressure: ''})
    const dataCB = (startData: { time: string, pressure: string }) => setData(startData);

    const P_Max_Falling = Math.floor(+data.pressure / 3);
    const P_Exit = Math.floor(+data.pressure - P_Max_Falling);
    const Delta_T = Math.floor(P_Max_Falling * 6.8 / 45);
    const T_Exit = timeCount(data.time, `00:${Delta_T.toString()}`)
    const T_General = Math.floor(+data.pressure * 6.8 / 45)
    const T_Returning = timeCount(data.time, `00:${T_General.toString()}`)
    const T_Fact_Returning = timeCount(data.time, `00:30`)

    return (
        <div className={s.app}>
            <Particle/>
            <header className={s.header}>
                <Logo className={s.app_logo}/>
            </header>
            <main className={s.body}>
                <Input dataCB={dataCB}/>
                <section className={s.blocksContainer}>
                    <Block title={'Дата'} columNumber={1}/>
                    <Block title={'Адрес'} columNumber={2}/>
                    <Block title={'Подразделение, Постовой'} columNumber={3}/>
                    <Block title={'Состав звена'} columNumber={4}/>
                    <Block title={'T вкл.'} columNumber={5} timeOn={data.time}/>
                    <Block title={'P вкл.'} columNumber={6}/>
                    <Block title={'P max.пад.'} columNumber={7} P_Max_Falling={P_Max_Falling}/>
                    <Block title={'P к.вых.'} columNumber={8} P_Exit={P_Exit}/>
                    <Block title={'ΔT'} columNumber={9} Delta_T={Delta_T}/>
                    <Block title={'T вых.'} columNumber={10} T_Exit={T_Exit}/>
                    <Block title={'T общ.'} columNumber={11} T_General={T_General}/>
                    <Block title={'T возвр.'} columNumber={12} T_Returning={T_Returning}/>
                    <Block title={'T ф.возвр.'} columNumber={13} T_Fact_Returning={T_Fact_Returning}/>
                    <Block title={'Доклады и время'} columNumber={14} timeOn={data.time}/>
                </section>
            </main>
            <footer className={s.footer}>
                <a href={'https://t.me/kravtsov_ilia'} className={s.getHireLink} target={'_blank'} rel="noreferrer" >
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
