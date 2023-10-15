import React from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import s from '../style/App.module.scss';
import {Block} from "./Block";
import {Particle} from "./Particle";
import {Input} from "./Input";

function App() {

    const dataCB = (startData: {time: string, pressure: string}) => {
        console.log(startData)
    }

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
                    <Block title={'Место'} columNumber={2}/>
                    <Block title={'Подразделение, Постовой'} columNumber={3}/>
                    <Block title={'Состав звена'} columNumber={4}/>
                    <Block title={'T вкл.'} columNumber={5}/>
                    <Block title={'P вкл.'} columNumber={6}/>
                    <Block title={'P max.пад.'} columNumber={7}/>
                    <Block title={'P к.вых.'} columNumber={8}/>
                    <Block title={'ΔT'} columNumber={9}/>
                    <Block title={'T вых.'} columNumber={10}/>
                    <Block title={'T общ.'} columNumber={11}/>
                    <Block title={'T возвр.'} columNumber={12}/>
                    <Block title={'T ф.возвр.'} columNumber={13}/>
                    <Block title={'Доклады и время'} columNumber={14}/>
                </section>
            </main>
        </div>
    );
}

export default App;
