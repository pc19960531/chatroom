// import React, { Component } from 'react'
// import { Icon, Input } from 'antd'
// import styles from './header.css'
// import logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom'

// const Header = ({ phoneNum, id, keyValue, initRows }) => {
//     return (
//         <header>
//             <div className={styles.headerTop}>
//                 <div className={styles.headerContent}>
//                     <span ><Link to='/home'>首页</Link></span>
//                     {
//                         phoneNum || id ?
//                             <span>
//                                 您好：{phoneNum ? phoneNum : id}
//                                 <a onClick={this.logOut}>退出登录</a>
//                             </span>
//                             : <Link to='/signin'>用户登录</Link>
//                     }{
//                         phoneNum || id ? <Link to='/profile/myTrade'>个人中心</Link> : null
//                     }
//                     <span ><Link to='/query'>查询订单</Link></span>
//                     <span ><Link to='/shoppingCard'>购物车</Link></span>
//                     <span style={{ paddingRight: '20px' }} className="connectus">联系电话:0515-88811100</span>

//                 </div>
//             </div>
//             <nav>
//                 <div className={styles.container}>
//                     <Link to='/home'>
//                         <img style={{ position: 'absolute', top: '0', width: '200px', marginLeft: '50px' }} src='http://pavrcczjr.bkt.clouddn.com/logo.png' />
//                     </Link>
//                     <div className={styles.containerName}>
//                         网上商城
//                         </div>
//                     <div className={styles.search}>
//                         <Input />
//                         {
//                             keyValue ?
//                                 <Link to='/search'>
//                                     <span>
//                                         <i className="anticon anticon-search ant-input-search-icon"
//                                             onClick={() => {
//                                                 if (keyValue) {
//                                                     store.dispatch(getSearchList(keyValue));
//                                                 } else {
//                                                     message.error("请输入关键字！")
//                                                 }
//                                             }}
//                                         >
//                                         </i>
//                                     </span>
//                                 </Link>
//                                 :
//                                 <span>
//                                     <i className="anticon anticon-search ant-input-search-icon"
//                                         onClick={() => {
//                                             message.error("请输入关键字！")
//                                         }}
//                                     >
//                                     </i>
//                                 </span>
//                         }
//                     </div>
//                     <ul>
//                         <li>
//                             <div
//                                 className="taobaolink"
//                                 onClick={() => {
//                                     window.open("https://shop276196320.taobao.com/?spm=a230r.7195193.1997079397.2.NuOvpd")
//                                 }}>
//                                 淘宝商城</div>
//                         </li>

//                         {/* {
//                             initRows.map((params, index) => (
//                                 <li key={index}><NavLink to={params.url} activeStyle={style} >{params.title}</NavLink></li>
//                             ))
//                         } */}
//                     </ul>
//                 </div>
//             </nav>
//         </header >
//     )
// }

// export default Header