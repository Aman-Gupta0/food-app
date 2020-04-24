import React, { Fragment, Component } from 'react';
import dataSet from '../data/givenData.json';
import Card from '../component/card';
import Grid from '@material-ui/core/Grid';
import images from '../data/images';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        {dataSet.map((x) => {
          return (
            <div>
              <h1 id={x.category}>{x.category.toUpperCase()}</h1>

              <Grid container spacing={1}>
                {x.restaurantList
                  .map((y, i) => {
                    return (
                      <Grid item xs={4} key={i}>
                        <Card
                          name={y.name}
                          rating={y.ratings}
                          price={y.price_for_two}
                          types={y.food_types.map((y) => {
                            return y;
                          })}
                          time={y.delivery_time}
                          isExlusive={y.isExlusive}
                          src={images[Math.floor(Math.random() * 11)]}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
export default MainPage;
