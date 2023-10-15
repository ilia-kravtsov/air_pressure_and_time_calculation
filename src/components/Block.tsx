import React from 'react';
import s from '../style/Block.module.scss'

type BlockType = {
    title: string
    columNumber: number
}

export const Block: React.FC<BlockType> = ({title, columNumber}) => {
    return (
        <div className={s.container}>
            <div>{title}</div>
            <div>{columNumber}</div>
        </div>
    );
};

