import React from "react";
import StoreItem from "./StoreItem";

class StoreList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "productList": [{
            'store': {'id': '711', 'name': '세븐일레븐'},
            'menu': {'id': '711_10000', 'name': '1만원 기프티콘', 'image': '../assets/images/store/7Eleven.png'},
            'price': 12,
            'purchased': false
          }, {
            'store': {'id': 'kakao_friends', 'name': '프렌즈'},
            'menu': {'id': 'kakao_apeach_charger', 'name': '어피치 아이폰 홈버튼 스티커', 'image': '../assets/images/store/Apeach_TouchID.png'},
            'price': 6,
            'purchased': false
          }, {
            'store': {'id': 'cu', 'name': 'CU'},
            'menu': {'id': 'cu_10000', 'name': '1만원 기프티콘', 'image': '../assets/images/store/CU.png'},
            'price': 12,
            'purchased': false
          }, {
            'store': {'id': 'goobne', 'name': '굽네치킨'},
            'menu': {'id': 'goobne_garlic', 'name': '소이갈릭', 'image': '../assets/images/store/Goobne_Garlic.png'},
            'price': 19,
            'purchased': false
          }, {
            'store': {'id': 'goobne', 'name': '굽네치킨'},
            'menu': {'id': 'goobne_original', 'name': '오리지널', 'image': '../assets/images/store/Goobne_Original.png'},
            'price': 17,
            'purchased': false
          }, {
            'store': {'id': 'goobne', 'name': '굽네치킨'},
            'menu': {'id': 'goobne_seasoning', 'name': '양념', 'image': '../assets/images/store/Goobne_Seasoning.png'},
            'price': 19,
            'purchased': false
          }, {
            'store': {'id': 'gs25', 'name': 'GS25'},
            'menu': {'id': 'gs25_10000', 'name': '1만원 기프티콘', 'image': '../assets/images/store/GS.png'},
            'price': 12,
            'purchased': true
          }, {
            'store': {'id': 'lguplus', 'name': 'LG U+'},
            'menu': {'id': 'lgu_data_100', 'name': '데이터 쿠폰 100MB', 'image': '../assets/images/store/LG.png'},
            'price': 3,
            'purchased': false
          }, {
            'store': {'id': 'olleh', 'name': 'olleh'},
            'menu': {'id': 'olleh_data_100', 'name': '데이터 쿠폰 100MB', 'image': '../assets/images/store/Olleh.png'},
            'price': 3,
            'purchased': true
          }, {
            'store': {'id': 'kakao_friends', 'name': '프렌즈'},
            'menu': {'id': 'kakao_ryan_phillow', 'name': '바디필로우', 'image': '../assets/images/store/Ryan_Phillow.png'},
            'price': 44,
            'purchased': false
          }, {
            'store': {'id': 'skt', 'name': 'SKT'},
            'menu': {'id': 'skt_data_100', 'name': '데이터 쿠폰 100MB', 'image': '../assets/images/store/SKT.png'},
            'price': 3,
            'purchased': false
          }, {
            'store': {'id': 'kakao_friends', 'name': '프렌즈'},
            'menu': {'id': 'kakao_tube_charger', 'name': 'TUBE 빅바 보조배터리 10000D', 'image': '../assets/images/store/Tube_Charger.png'},
            'price': 50,
            'purchased': false
          }]
        };
    }

    render() {
      let style = {
        "backgroundColor": "#EFEFEF"
      };

      const mapToComponents = (data) => {
        window.historyData = data;
        data.sort((a, b) => { return a.price - b.price; }); // 필요 별 수가 적은 것부터 정렬

        return data.map((item, i) => {
          return (<StoreItem
                      key={item.menu.id}
                      index={i}
                      storeName={item.store.name}
                      menuId={item.menu.id}
                      menuName={item.menu.name}
                      menuImage={item.menu.image}
                      price={item.price}
                      isPurchased={item.purchased}
                      />);
        });
      };

      return (
        <div style={style}>
          {mapToComponents(this.state.productList)}
          <div style={{"clear": "both"}}> </div>
        </div>
      );
    }
}

export default StoreList;
