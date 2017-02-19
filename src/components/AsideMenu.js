import React from 'react';
import AsideMenuItem from './AsideMenuItem';

class AsideMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        const router = context.router;
        this.state = {
            menus: [
                {name: "홈", path:"/", active:router.isActive("/", true)},
                {name: "나의 포인트", path:"/point", active:router.isActive("/point")},
                {name: "포인트몰", path:"/reward", active:router.isActive("/reward")},
            ]
        }
    }

    render() {
        let style = {
            listStyle: "none",
            padding: "0px",
            margin: "0px",
            borderStyle: "solid",
            borderWidth: "0px 0px 1px 0px",
            borderColor: "#dfdfdf"
        }

        return <ul style={style}>
            {this.state.menus.map((menu, index) => {
                return (<AsideMenuItem key={index} name={menu.name} path={menu.path} active={menu.active} />)
            })}
        </ul>
    }
}

AsideMenu.contextTypes = {
    router: React.PropTypes.object
}

export default AsideMenu;
