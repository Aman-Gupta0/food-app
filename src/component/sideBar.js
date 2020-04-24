import React, { Fragment } from 'react';
import dataSet from '../data/givenData.json';
import Option from '../pages/sideBarOption';

const style = {
  box: {
    position: 'fixed',
    height: '70%',
    color: '#282c3f',
  },
};

const SideBar = (props) => {
  return (
    <Fragment>
      <div style={style.box}>
        {dataSet.map((x) => {
          return <Option val={x.category} num={x.restaurantList.length} />;
        })}
      </div>
    </Fragment>
  );
};

export default SideBar;
