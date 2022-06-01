import { CardItem } from '../../entities/card-item/ui/CardItem';
import { cardListApi } from '../../shared/model/services/CardListService';

export const CardList = () => {
    const { data: cards } = cardListApi.useFetchAllCardsQuery(undefined);

    return (
        <div>
            <div>
                {cards && cards.map((card) => <CardItem key={card.uuid} card={card} />)}
            </div>
        </div>
    );
};
