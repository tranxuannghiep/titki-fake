import * as yup from 'yup';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFiledLabel from 'components/form-controls/InputFiledLabel/InputFiledLabel';
import SelectFiled from 'components/form-controls/SelectFiled/SelectFiled';
import { useState, useEffect } from 'react';
import { getDistrictsByProvinceCode, getProvinces, getWardsByDistrictCode } from 'sub-vn';
import { useSelector, useDispatch } from 'react-redux';
import TextAreaFiled from 'components/form-controls/TextAreaFiled/TextAreaFiled';
import { setcurrentUser } from 'redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));
export default function MyAccount() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);
  const classes = useStyles();
  const [provinceCode, setProvinceCode] = useState(user.province || '01');
  const [districtCode, setDistrictCode] = useState(user.district || '001');
  const provinces = getProvinces();
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    setDistricts(getDistrictsByProvinceCode(provinceCode));
  }, [provinceCode]);
  const [wards, setWards] = useState([]);
  useEffect(() => {
    setWards(getWardsByDistrictCode(districtCode));
  }, [districtCode]);
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    phone: yup.number().required('Please enter your phone').typeError('Please enter a number'),
  });
  const form = useForm({
    defaultValues: {
      name: user.name || '',
      phone: user.phone || '',
      province: user.province || '01',
      district: user.district || '001',
      ward: user.ward || '00019',
      address: user.address || '',
    },
    resolver: yupResolver(schema),
  });

  const onChangeProvinceCode = (value) => {
    setProvinceCode(value);
  };
  const onChangeDistrictCode = (value) => {
    setDistrictCode(value);
  };
  const handleSubmit = (values) => {
    enqueueSnackbar('C???p nh???t th??ng tin th??nh c??ng', { variant: 'success' });
    dispatch(setcurrentUser(values));
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Typography component="h2" variant="h4" marginBottom={4}>
          Th??ng tin t??i kho???n
        </Typography>
        <Paper elevation={0}>
          <Box padding={'32px 16px'} maxWidth={800} margin="0 auto">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <InputFiledLabel name="name" form={form} label="H??? & T??n" />
              <InputFiledLabel name="phone" form={form} label="??i???n tho???i di ?????ng" />
              <SelectFiled
                name="province"
                form={form}
                label="T???nh/Th??nh ph???"
                items={provinces}
                onChangeCode={onChangeProvinceCode}
              />
              <SelectFiled
                name="district"
                form={form}
                label="Qu???n/Huy???n"
                items={districts}
                onChangeCode={onChangeDistrictCode}
              />
              <SelectFiled name="ward" form={form} label="Ph?????ng/X??" items={wards} />
              <TextAreaFiled name="address" form={form} label="?????a ch???" />
              <Button type="submit" variant="contained" style={{ marginTop: 20, width: 200 }}>
                L??u thay ?????i
              </Button>
              <Button
                onClick={() => navigate(-1)}
                variant="outlined"
                style={{ margin: '20px 0 0 20px', width: 200 }}
              >
                Quay l???i
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
