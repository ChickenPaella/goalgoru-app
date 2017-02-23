import React from "react";

class StarStat extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      return (
        <div>
          <div>
            김유빈님의 별 15개로
            <span>맛있는 간식을!</span>
          </div>
          <div>
          15
          </div>
        </div>
      );
    }
}

export default StarStat;
