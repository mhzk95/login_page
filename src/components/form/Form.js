import { Typography, Input, Button, Form, Checkbox } from 'antd'
import React, { useState } from 'react'
import styles from './form.module.css'
import axios from 'axios'

const { Title, Text } = Typography
const { Item } = Form

const Forms = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
    token: '',
  })
  const [logging, setLogging] = useState(false)
  const handleLogin = () => {
    setLogging(true)
    axios
      .post('https://reqres.in/api/login', {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        setUser({ ...user, token: res.data.token, error: '' })
        setLogging(false)
        console.log(res.data.token)
      })
      .catch((err) => {
        setUser({ ...user, error: err.response.data.error, token: '' })
        setLogging(false)
      })
  }
  const handleChange = (e) => {
    setUser((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className={styles.container}>
      <Form className={styles.formContainer}>
        <Title level={2}>Welcome Back</Title>
        <Text type='secondary'>sub-title text goes here</Text>
        <Input
          onChange={handleChange}
          name='email'
          size='large'
          status={user.error && 'error'}
          placeholder='Email Address*'
        ></Input>
        <Input
          onChange={handleChange}
          name='password'
          size='large'
          status={user.error && 'error'}
          placeholder='Password*'
        ></Input>
        {user.error && (
          <span className={styles.errorMessage}>{`* ${user.error}`}</span>
        )}
        {user.token && (
          <span
            className={styles.successMessage}
          >{`Token: ${user.token}`}</span>
        )}
        <Button
          type='primary'
          onClick={handleLogin}
          loading={logging}
          className={styles.loginFormButton}
        >
          Login
        </Button>
        <Item className={styles.checkboxWrapper}>
          <Checkbox className={styles.rememberMe}>Remember Password</Checkbox>

          <a className={styles.forgotPassword} href=''>
            Forgot password?
          </a>
        </Item>
      </Form>
    </div>
  )
}

export default Forms
