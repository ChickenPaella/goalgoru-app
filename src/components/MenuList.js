import React from 'react';
import MenuItem from './MenuItem';
import Footer from '../components/Footer';

class MenuList extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            menus: [
                {id:1, title: "스츠란데이", imageUrl: "http://cfile6.uf.tistory.com/image/240BBA45564099E70F2918", category: "일식, 도시락", distance: 0.025},
                {id:2, title: "제임스키친", imageUrl: "http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg", category: "일식, 도시락", distance: 0.1},
                {id:3, title: "큰손 닭 한마리", imageUrl: "http://cfile1.uf.tistory.com/image/0243453750ED82C7145889", category: "일식, 도시락", distance: 1},
                {id:4, title: "핏짜굽는 언니 공릉점", imageUrl: "http://www.multiculturenews.com/FILE_MANAGER/20160829/01591429087903.jpg", category: "일식, 도시락", distance: 1.3},
                {id:5, title: "길버트 버거 앤 프라이즈", imageUrl: "http://photo.12corp.com/photo_viewer/201546_vj6dQF9fwdVl6GLFysmL9yLvBaRtl95Q0OlH_5_DnhCPi3a0sSPefC05tNt9rjAF/vstEval_1447043048639.jpg?type=sth960_q50", category: "일식, 도시락", distance: 2}
            ]
        }
    }

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
        }
        return <div style={style}>
            <ul style={wrapperStyle}>
                {this.state.menus.map((menu, index) => {
                    return (<MenuItem key={index} id={menu.id} title={menu.title} imageUrl={menu.imageUrl} category={menu.category} distance={menu.distance} />)
                })}
            </ul>
            <Footer />
        </div>
    }
}

export default MenuList;
