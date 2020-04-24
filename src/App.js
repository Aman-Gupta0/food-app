import React from 'react';
import MainPage from './pages/mainPage';
import SideBar from './component/sideBar';
import Grid from '@material-ui/core/Grid';

export default function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <MainPage />
        </Grid>
      </Grid>
    </div>
  );
}
