import { Layout, Typography, Button } from 'antd'
import styles from './navbar.module.css'
import React from 'react'

const { Header } = Layout
const { Title } = Typography

const Navbar = () => {
  return (
    <Header className={styles.header}>
      <Title level={3}>
        ATools<span>.</span>
      </Title>
      <div className={styles.buttonGroup}>
        <Button>Start Free Trial</Button>
        <Button type='primary'>Login</Button>
      </div>
    </Header>
  )
}

export default Navbar
