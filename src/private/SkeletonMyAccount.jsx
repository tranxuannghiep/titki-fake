import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography, Paper, Skeleton } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));
export default function SkeletonMyAccount() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Typography component="h2" variant="h4" marginBottom={4}>
          Thông tin tài khoản
        </Typography>
        <Paper elevation={0}>
          <Box padding={'32px 16px'} maxWidth={800} margin="0 auto">
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={50} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={50} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={50} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={50} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={50} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Skeleton width={200} style={{ marginRight: 100 }} height={50} />
              <Skeleton width={500} height={100} />
            </Box>
            <Box display="flex" alignItems="center">
              <Skeleton width={200} style={{ marginRight: 100 }} height={70} />
              <Skeleton width={200} height={70} />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
