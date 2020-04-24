import React, { Fragment } from 'react';

const style = {
  option: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#535665',
    padding: '10px 20px',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  optionHover: {
    backgroundColor: 'orange',
    color: 'white',
  },
  text: {
    fontSize: '16px',
    fontWeight: 600,
    textTransform: 'capitalize',
    display: 'block',
  },
  smallText: {
    opacity: 0.8,
    fontSize: '10px',
    marginTop: '2px',
    textTransform: 'uppercase',
  },
};

const SideBarOption = (props) => {
  if (props.val == 'Only On Swiggy' || props.val == 'See All') return null;
  return (
    <Fragment>
      <div
        style={style.option}
        onClick={() => {
          document.getElementById(`${props.val}`).scrollIntoView({
            behavior: 'smooth',
          });
        }}
      >
        <span style={style.text}>{props.val}</span>

        <span style={style.smallText}>{props.num} OPTIONS</span>
      </div>
    </Fragment>
  );
};

export default SideBarOption;
