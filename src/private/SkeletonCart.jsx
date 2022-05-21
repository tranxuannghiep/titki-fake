import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openFormLogin } from 'redux/action/visibleAction';
import { Box, Container, Typography, Paper, Skeleton, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  left: {
    flex: '1 1 0',
  },
  right: {
    width: '300px',
  },
}));
export default function SkeletonCart() {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(openFormLogin());
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      <Container>
        <Typography component="h2" variant="h4" marginBottom={6}>
          Giỏ hàng
        </Typography>
        <Grid container spacing={2.5}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <Box padding={'5px 10px'} display="flex" alignItems="center">
                <Skeleton variant="rect" width={20} height={20} style={{ marginRight: '10px' }} />
                <Skeleton width="20%" height={30} />
              </Box>
            </Paper>
            <Paper elevation={0}>
              <Box padding={'10px 10px'} display="flex" alignItems="center">
                <Skeleton variant="rect" width={20} height={20} style={{ marginRight: '10px' }} />
                <Skeleton
                  variant="rect"
                  width={100}
                  height={100}
                  style={{ marginRight: '10px', borderRadius: '6px' }}
                />
                <Skeleton width="20%" height={30} />
              </Box>
              <Box padding={'10px 10px'} display="flex" alignItems="center">
                <Skeleton variant="rect" width={20} height={20} style={{ marginRight: '10px' }} />
                <Skeleton
                  variant="rect"
                  width={100}
                  height={100}
                  style={{ marginRight: '10px', borderRadius: '6px' }}
                />
                <Skeleton width="20%" height={30} />
              </Box>
              <Box padding={'10px 10px'} display="flex" alignItems="center">
                <Skeleton variant="rect" width={20} height={20} style={{ marginRight: '10px' }} />
                <Skeleton
                  variant="rect"
                  width={100}
                  height={100}
                  style={{ marginRight: '10px', borderRadius: '6px' }}
                />
                <Skeleton width="20%" height={30} />
              </Box>
              <Box padding={'10px 10px'} display="flex" alignItems="center">
                <Skeleton variant="rect" width={20} height={20} style={{ marginRight: '10px' }} />
                <Skeleton
                  variant="rect"
                  width={100}
                  height={100}
                  style={{ marginRight: '10px', borderRadius: '6px' }}
                />
                <Skeleton width="20%" height={30} />
              </Box>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <Box padding={'20px 20px 30px 20px'}>
                <Skeleton width="60%" height={30} />
                <Skeleton height={25} />
                <Skeleton
                  variant="rect"
                  width="100%"
                  height={60}
                  style={{ marginTop: '10px', borderRadius: '6px' }}
                />
              </Box>
            </Paper>
            <Paper elevation={0} style={{ marginTop: '10px' }}>
              <Box padding={'20px 20px 30px 20px'}>
                <Skeleton width="60%" height={30} />
                <Skeleton
                  variant="rect"
                  width="100%"
                  height={60}
                  style={{ marginTop: '10px', borderRadius: '6px' }}
                />

                <Skeleton width="60%" style={{ marginTop: '10px' }} height={30} />
              </Box>
            </Paper>
            <Paper elevation={0} style={{ marginTop: '10px' }}>
              <Box padding={'10px'}>
                <Skeleton height={60} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
