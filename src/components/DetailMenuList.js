import React from 'react';
import { dimming, undimming } from '../actions/DimmerAction';
import { connect } from 'react-redux';
import DetailMenuItem from './DetailMenuItem';

class DetailMenuList extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            menus: [
                {id: 1, name: "불고기 백반", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 2, name: "잔치국수", best: true, type: "단백질", calorie: 480, price: 4000},
                {id: 3, name: "오므라이스", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 4, name: "돈가스", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 5, name: "김치찌개", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 6, name: "불고기 백반", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 7, name: "잔치국수", best: true, type: "단백질", calorie: 480, price: 4000},
                {id: 8, name: "오므라이스", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 9, name: "돈가스", best: false, type: "단백질", calorie: 480, price: 4000},
                {id: 10, name: "김치찌개", best: false, type: "단백질", calorie: 480, price: 4000}
            ]
        }
    }
    render() {
        let style = {
            position: "relative",
            top: "-6px",
            margin: 0,
            padding: 0,
            listStyle: "none"
        }
        return <ul style={style}>
            {this.state.menus.map((menu, index) => {
                return <DetailMenuItem key={menu.id} name={menu.name} best={menu.best} type={menu.type} calorie={menu.calorie} price={menu.price} />
            })}
        </ul>
    }
}

export default DetailMenuList;
