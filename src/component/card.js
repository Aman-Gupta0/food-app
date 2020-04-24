import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

const style = {
  container: {
    backgroundColor: 'white',
    color: 'black',
    paddingBottom: 10,
    border: '1px solid #fff',
  },
  name: {
    fontSize: '17px',
    fontWeight: 500,
    wordBreak: 'break-word',
  },
  types: {
    color: '#686b78',
    fontSize: '13px',
    marginTop: '4px',
  },

  image: {
    height: 160,
    width: 254,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(20,44,63,.05)',
    backgroundBlendMode: 'overlay',
  },
  rating: {
    backgroundColor: '#db7c38',
    color: '#fff',
    textAlign: 'center',
  },
  rating2: {
    backgroundColor: 'green',
    color: '#fff',
    textAlign: 'center',
  },
};
const Card = (props) => {
  let str = '';
  for (let i = 0; i < props.types.length - 1; i++) {
    str += props.types[i] + ', ';
  }
  str += props.types[props.types.length - 1];

  return (
    <Fragment>
      <div style={style.container}>
        <img style={style.image} src={props.src} alt="" />
        <p>
          <span style={style.name}>{props.name}</span>
          <br />
          <span style={style.types}>{str}</span>
        </p>
        <div>
          <Grid container spacing={3}>
            <Grid item>
              <span style={props.rating >= 4 ? style.rating2 : style.rating}>
                {props.rating}
              </span>
            </Grid>

            <Grid item>
              <span>{props.time}</span>
            </Grid>
            <Grid item>
              <span>
                {props.price} {props.name ? 'for 2' : ''}
              </span>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
