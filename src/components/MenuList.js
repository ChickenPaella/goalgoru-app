import React from 'react';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class MenuList extends React.Component {
    render() {
        let style = {
            backgroundColor: "#FDF51E"
        }
        let wrapperStyle = {
            listStyle: "none",
            padding: 0,
            margin: 0,
            overflow: "hidden",
            padding: "38px 18px 8px 18px",
            minHeight: "180px",
            overflow: "inherit"
        }
        let alertStyle = {
            display:"block",
            margin:"0 auto",
            width: "52px"
        }
        let alertWrapperStyle = {
            paddingTop: "24px",
            marginBottom: "120px"
        }
        let alertMsgStyle = {
            color: "#bdb71b",
            fontSize: "15px",
            marginTop: "16px",
            textAlign: "center"
        }
        return <div style={style}>
            <ul style={wrapperStyle}>
                {this.props.list.length?this.props.list.map((r, i) => {
                    return (<MenuItem key={i} seq={r.seq} name={r.name} type={r.category} address={r.address} phone={r.phone} distance={Math.round(r.distance)} />)
                }):<div style={alertWrapperStyle}><img style={alertStyle} src="/assets/images/home_ico_alert.png"/><p style={alertMsgStyle}>앗 이런, 근처에 추천식당이 없습니다.</p></div>}
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
