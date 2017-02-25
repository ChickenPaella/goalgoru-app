import React from "react";
import StoreItem from "./StoreItem";

class StoreList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "productList": [{
            'store': {'id': '1', 'name': '국대'},
            'menu': {'id': '1', 'name': '떡볶이 1인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 11
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '2', 'name': '떡볶이 2인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 22
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '3', 'name': '떡볶이 3인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 23
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '4', 'name': '떡볶이 4인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 14
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '5', 'name': '떡볶이 5인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 15
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '6', 'name': '떡볶이 6인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 26
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '7', 'name': '떡볶이 7인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 27
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '8', 'name': '떡볶이 8인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 18
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '9', 'name': '떡볶이 9인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 19
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '10', 'name': '떡볶이 10인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 20
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '11', 'name': '떡볶이 11인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 11
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '12', 'name': '떡볶이 12인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 22
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '13', 'name': '떡볶이 13인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 13
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '14', 'name': '떡볶이 14인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 14
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '15', 'name': '떡볶이 15인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 15
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '16', 'name': '떡볶이 16인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 26
          }, {
            'store': {'id': '', 'name': '국대'},
            'menu': {'id': '17', 'name': '떡볶이 17인분', 'image': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg'},
            'price': 27
          }]
        };
    }

    render() {
      let style = {
        "textAlign": "center"
      };

      const mapToComponents = (data) => {
        window.historyData = data;
        data.sort((a, b) => { return a.price - b.price; }); // 필요 별 수가 적은 것부터 정렬

        return data.map((item, i) => {
          return (<StoreItem
                      key={item.menu.id}
                      storeName={item.store.name}
                      menuId={item.menu.id}
                      menuName={item.menu.name}
                      menuImage={item.menu.image}
                      price={item.price}
                      />);
        });
      };

      return (
        <div style={style}>{mapToComponents(this.state.productList)}</div>
      );
    }
}

export default StoreList;
