import React from 'react';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class MenuList extends React.Component {
    render() {
        let style = {
            backgroundColor: "#FFF45D"
        }
        let wrapperStyle = {
            listStyle: "none",
            padding: 0,
            margin: 0,
            overflow: "hidden",
            padding: "38px 18px 8px 18px",
            minHeight: "180px"
        }
        return <div style={style}>
            <ul style={wrapperStyle}>
                {this.props.list.map((r, i) => {
                    return (<MenuItem key={i} seq={r.seq} name={r.name} type={r.category} address={r.address} phone={r.phone} distance={0.0} />)
                })}
            </ul>
            <Footer />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        list: state.search.list
    }
}

MenuList = connect(mapStateToProps, undefined)(MenuList);

export default MenuList;
