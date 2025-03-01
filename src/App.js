import './App.css';

function App() {
  return (
    <div className="p-2">
      Home page
    </div>
  );
}

export default App;

// import { useState } from "react"
// import { menulist } from "../constants/headerConstants"


// const ServicesComp = () => {
//     const [menuList, setMenuList] = useState(menulist);

//     const handleIconClick = (clickedMenu) => {
//         const updatedMenuList = menuList.map((menu) => {
//             if(menu.menuHeading === clickedMenu.menuHeading) {
//                 return {
//                     ...clickedMenu,
//                     hideSubMenu: false,
//                 }
//             } else {
//                 return {
//                     ...menu,
//                     hideSubMenu: true
//                 }
//             }
//         })

//         setMenuList(updatedMenuList);
//     }
    
//     return <div className="row">
//         <div className="col-3 p-3" style={{backgroundColor: 'lightcoral'}}>
//                 <h2>Services</h2>
//                 <span style={{fontSize: '14px'}}>our global experties and experience partnered with deep relationships unlocks  extraordinary result</span>
//                 <br/>
//                 <a href='_blank'style={{fontSize: '12px', color: 'blue', textDecoration: 'none', marginLeft: '20px'}}><b>READ OVERVIEW</b></a>
//                 <div>
//                     <img src='computerboy.jpg' alt='computerboy' width={'180px'} height={'180px'} />
//                 </div>
//         </div>
//         <div className="col-9 p-3" style={{backgroundColor: 'yellow'}}>
//             <div className="row">
//                 {menuList.map((menu) => {
//                     return <div className="col-4" key={menu.menuHeading}>
//                         <div className="d-flex">
//                             <span className="text-dark text-ellipsis"><b>{menu.menuHeading}</b></span>
//                             <img
//                                 src="logo192.png"
//                                 width='20px' height='20px'
//                                 onClick={() => handleIconClick(menu)}
//                                 alt="arrow dropdown"
//                             />
//                         </div>
//                         {!menu.hideSubMenu && 
//                             <ul className="list-unstyled">
//                                 {menu.subMenuList.map((submenu, index) => {
//                                     return <li key={submenu+index} style={{fontSize: '14px'}}>
//                                         <span>{submenu}</span>
//                                     </li>
//                                 })}
//                             </ul>
//                         }
//                     </div>
//                 })}
//             </div>
//         </div>
//     </div>
// }

// export default ServicesComp;