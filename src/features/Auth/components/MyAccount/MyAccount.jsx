import * as yup from 'yup';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFiledLabel from 'components/form-controls/InputFiledLabel/InputFiledLabel';
import SelectFiled from 'components/form-controls/SelectFiled/SelectFiled';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));
export default function MyAccount() {
  const classes = useStyles();
  const itemProvince = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    phone: yup.number().required('Please enter your phone'),
  });
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      province: 10,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Typography component="h2" variant="h4" marginBottom={4}>
          Thông tin tài khoản
        </Typography>
        <Paper elevation={0}>
          <Box padding={'32px 16px'} maxWidth={800} margin="0 auto">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <InputFiledLabel name="name" form={form} label="Họ & Tên" />
              <InputFiledLabel name="phone" form={form} label="Điện thoại di động" />
              <SelectFiled
                name="province"
                form={form}
                label="Tỉnh/Thành phố"
                items={itemProvince}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
