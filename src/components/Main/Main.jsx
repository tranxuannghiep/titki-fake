import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import './main.scss';
import { Link } from 'react-router-dom';
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
      <div className="container">
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
      </div>
    </div>
  );
};

export default Main;
