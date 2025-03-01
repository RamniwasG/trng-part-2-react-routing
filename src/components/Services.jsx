
const ServicesComp = () => {

    const menulist = [
        {
            menuHeading: 'Experience design',
            subMenuList: ['UX strategy', 'Disign desing', 'Front-end engineering', 'Conent services', ]
        },
        {
            menuHeading: 'MarTech',
            subMenuList: ['MarTech stragegy', 'MarTech enablement', 'MatTech optimizaion']
        },
        {
            menuHeading: 'Artificial Intelilgence',
            subMenuList: ['AI strategy', 'AI products', 'AI models', 'AI everywhere']
        },
        {
            menuHeading: 'Management Consulting',
            subMenuList: ['Strategic alignment', 'Business transformation', 'Operational excellence']
        },
        {
            menuHeading: 'Ecommerce ',
            subMenuList: ['Ecommerce strategy', 'Ecommerce enablement', 'Ecommerce optimication']
        },
        {
            menuHeading: 'Cloud engineering', 
            subMenuList: ['Cloud advisory', 'Plateform engineering', 'Cloud native development', 'Cloud data & AI']
        },
        {
            menuHeading: 'Data',
            subMenuList: ['Data streategy', 'Data architecture', 'Data democretization', 'Data products', 'Data analytics']
        },
        {
            menuHeading: 'Innovation',
            subMenuList: ['Innovation strategy', 'Products management', 'Products & service incubation', 'Products & Services ideation']
        }
    ]
    return <div className="row">
        <div className="col-3 p-3" style={{backgroundColor: 'lightcoral'}}>
                <h2>Services</h2>
                <span style={{fontSize: '14px'}}>our global experties and experience partnered with deep relationships unlocks  extraordinary result</span>
                <br/>
                <a href='_blank'style={{fontSize: '12px', color: 'blue', textDecoration: 'none', marginLeft: '20px'}}><b>READ OVERVIEW</b></a>
                <div>
                    <img src='computerboy.jpg' alt='computerboy' width={'180px'} height={'180px'} />
                </div>
        </div>
        <div className="col-9 p-3" style={{backgroundColor: 'yellow'}}>
            <div className="row">
                {menulist.map((menu) => {
                    return <div className="col-4" key={menu.menuHeading}>
                        <div className="d-flex">
                            <span className="text-dark text-ellipsis"><b>{menu.menuHeading}</b></span>
                            <img src="logo192.png" width='20px' height='20px' alt="arrow dropdown" />
                        </div>
                        <ul className="list-unstyled">
                            {menu.subMenuList.map((submenu, index) => {
                                return <li key={submenu+index} style={{fontSize: '14px'}}>
                                    <span>{submenu}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default ServicesComp;