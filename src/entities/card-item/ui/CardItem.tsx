import { FC } from 'react';
import { CardList } from '../../../shared/model/types/CardListTypes';

interface CardItemProps {
    card: CardList
}

export const CardItem: FC<CardItemProps> = ({ card }) => (
    <div>
        {card.uuid}
        ,
        {card.holder}
    </div>
);
