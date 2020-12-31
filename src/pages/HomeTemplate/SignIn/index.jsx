import userApi from 'api/userApi';
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';
import swal from 'sweetalert';

function SignIn(props) {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchListUser = await userApi.getAll();
      setListUser(fetchListUser);
    };

    fetchApi();
  }, []);

  const handleSubmitForm = (formData) => {
    const isUserExist = listUser.filter(
      (user) => user.user_account === formData.user_account
    );

    if (isUserExist.length) {
      if (isUserExist[0].password === formData.password) {
        swal({
          title: 'Đăng nhập thành công',
          icon: 'success',
        });
        localStorage.setItem('login', JSON.stringify(isUserExist));
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        swal({
          title: 'Mật khẩu không chính xác',
          icon: 'warning',
        });
      }
    } else {
      swal({
        title: 'Tài khoản không tồn tại',
        icon: 'warning',
      });
    }
  };

  return (
    <div>
      <Banner />
      <FormContainer onSubmit={handleSubmitForm} />
    </div>
  );
}

export default SignIn;
