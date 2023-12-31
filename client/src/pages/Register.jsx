import React, { useState } from 'react';
import { TEInput, TERipple } from "tw-elements-react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/authClient';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    phone:'',
    name:''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="h-screen">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="SampleImage"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/home">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit}>
              
              {/* <!-- User Name input --> */}
              <TEInput
                type="text"
                name='username'
                label="User Name"
                size="lg"
                className="mb-6"
                value={formState.username}
                onChange={handleChange}
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                name='password'
                label="Password"
                className="mb-6"
                size="lg"
                value={formState.password}
                  onChange={handleChange}
              ></TEInput>

              {/* <!-- Name input --> */}
              <TEInput
                type="text"
                name='name'
                label="Name"
                size="lg"
                className="mb-6"
                value={formState.name}
                  onChange={handleChange}
              ></TEInput>

               {/* <!-- Email input --> */}
              <TEInput
                type="email"
                name='email'
                label="Email Address"
                size="lg"
                className="mb-6"
                value={formState.email}
                onChange={handleChange}
              ></TEInput>

               

              {/* <!-- Phone input --> */}
              <TEInput
                type="text"
                name='phone'
                label="Phone Number"
                size="lg"
                className="mb-6"
                value={formState.phone}
                  onChange={handleChange}
              ></TEInput>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <TERipple rippleColor="light">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Register
                  </button>
                </TERipple>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?{""}
                  <Link
                    
                    to='/login'
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
              
              </div>
            </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register