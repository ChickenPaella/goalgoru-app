import React from 'react';
import { dimming, undimming } from '../actions/DimmerAction';
import { connect } from 'react-redux';
import DetailMenuItem from './DetailMenuItem';

class DetailMenuList extends React.Component {
    render() {
        console.log(this.props.menus);
        let style = {
            position: "relative",
            top: "-6px",
            margin: 0,
            padding: 0,
            listStyle: "none"
        }
        return <ul style={style}>
            {this.props.menus.map((menu, index) => {
                return <DetailMenuItem key={menu.seq} name={menu.name} best={menu.best} type={menu.mainNutri} calorie={menu.calorie} price={menu.price} />
            })}
        </ul>
    }
}

export default DetailMenuList;
