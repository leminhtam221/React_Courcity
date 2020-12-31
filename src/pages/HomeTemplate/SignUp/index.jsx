import userApi from 'api/userApi';
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';
import swal from 'sweetalert';

function SignUp(props) {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchListUser = await userApi.getAll();
      setListUser(fetchListUser);
    };

    fetchApi();
  }, []);

  const handleSubmitForm = (formData) => {
    const newListUser = [...listUser];
    const isUserExist = newListUser.filter(
      (user) => user.user_account === formData.user_account
    );

    if (!isUserExist.length) {
      userApi.add(formData);
      newListUser.push(formData);
      setListUser(newListUser);
      swal({
        title: 'Sign Up successs',
        icon: 'success',
      });
    } else {
      swal({
        title: 'Account have exist',
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

export default SignUp;
