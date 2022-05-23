import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import './main.scss';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography } from '@mui/material';
const Main = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
  };
  const SlickArrowLeft = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
  const SlickArrowRight = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
  return (
    <div id="BrandsSlider">
      <Container>
        <Box paddingTop={6} paddingBottom={6}>
          <Slider {...settings} prevArrow={<SlickArrowLeft />} nextArrow={<SlickArrowRight />}>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/30/c6/23/aa01f4c7a4b050117a212591bcd283f5.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/82/9c/5a/ebdd839196663b62a1000dbd5103de67.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/e3/8f/b7/e362ef1fda89e07d71347504843366b0.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/92/8e/18/95f6ba3b1f7863bc4141676425310697.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/80/b5/66/4392b77d34b16bc30f00d16bdf54ad55.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/19/0e/66/52151ef70a574579554dc23596bfa5cf.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/0a/b8/e7/4907e04cd530535d6edb24d0f3208b32.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/e1/e3/59/320d5b6d6e1e00a77eb206c92d076ed8.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/50/86/a0/a7df4ecc45b524c67f52b2ea82361422.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/a7/6c/b8/7a83a6fac538bb6c7a241e145fc7737c.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/58/29/7b/1c772610eee238ee95f5cc8c8734a3bf.jpg.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
            <Link to="/products">
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/5e/36/80/780633a2c074a337c3fb9e6c118c9d31.png.webp"
                  alt=""
                  width="100%"
                />
              </Box>
            </Link>
          </Slider>
        </Box>
        <Box>
          <Paper elevation={0}>
            <Typography variant="h5" padding={2}>
              Gợi Ý Hôm Nay
            </Typography>
          </Paper>
          <Grid container spacing={1} marginTop={0.5}>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Dành cho bạn</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Đi Chợ Siêu Sale</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Deal Siêu Hot</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Rẻ vô đối</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Hàng mới</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={2}>
              <Paper elevation={0}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Link to="/products">
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp"
                      width="100px"
                      alt=""
                    />
                  </Link>
                  <Typography marginTop={1}>Xu hướng thời trang</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Main;
