import React from 'react'
import { Layout } from 'antd'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HorizontalSideBar from '../components/HorizontalSideBar'

// import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
// import { useDispatch } from 'react-redux'
// import WhiteLogo from '../assets/Logo.png'
// import BlueLogo from '../assets/blueLogo.png'
// import MainMenu from './MainMenu'
// import { toggleTheme } from '../redux'
// import Sider from 'antd/es/layout/Sider'
// import { useSelector } from 'react-redux'

const VerticalLayout = ({ children }) => {
  // const dispatch = useDispatch()
  const { Content } = Layout
  // const theme = useSelector((state) => state.theme.theme)

  return (
    <div className='v-layout'>
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Sider
          trigger={null}
          collapsible
          width={220}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: 'var(--sidebar)',
            boxShadow: 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
          }}
        >
          <div className='company-logo'>
            {theme === 'light' ? (
              <img src={BlueLogo} alt='logo' />
            ) : (
              <img src={WhiteLogo} alt='logo' />
            )}
          </div>
          <MainMenu active={active} />
        </Sider> */}

        <div className='layout-contant' style={{ position: 'relative', minHeight: '100vh' }} >
          <div className='verticalSideBar'>
            <SideBar />
          </div>
          <div className='horizontalSideBar'>
            <HorizontalSideBar />
          </div>
          <Layout className='site-layout borderBox' style={{ position: 'relative' }}>
            {/* <Header className='mainHeader'>
            <h3 className='company-title'>Decotechs Admin</h3>

            <Switch
              className='themeSwitch'
              defaultChecked={theme === 'light' ? false : true}
              checkedChildren={<MdDarkMode style={{ fontSize: '20px', marginRight: '5px' }} />}
              unCheckedChildren={
                <MdOutlineDarkMode style={{ fontSize: '20px', marginLeft: '5px' }} />
              }
              onChange={() => dispatch(toggleTheme())}
            />
          </Header> */}
            <div className='largeScreenNav navbar' style={{ position: 'absolute' }}>
              <Navbar />
            </div>
            <Content className='main-content'>{children}</Content>
          </Layout>
          <div className='smallScreenNav navbar'>
            <Navbar />
          </div>
        </div>

      </Layout>
    </div>
  )
}

export default VerticalLayout
