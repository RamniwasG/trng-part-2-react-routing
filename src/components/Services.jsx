
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
    return <div className="container">
        <h2 className="text-center text-secondary">Hello Services</h2>
        <div className="row">
            <div className="col-3" style={{backgroundColor: 'lightcoral'}}>
                    <h2>Services</h2>
                    <span style={{fontSize: '14px'}}>our global experties and experience partnered with deep relationships unlocks  extraordinary result</span>
                  <br/>
                        <a href='_blank'style={{fontSize: '12px', color: 'blue', textDecoration: 'none', marginLeft: '20px'}}><b>READ OVERVIEW</b></a>
                    
                    <div>
                        <img src='computerboy.png' alt='computerboy' width={'80px'} height={'80px'} />
                    </div>
            </div>
            <div className="col-9" style={{backgroundColor: 'lightblue'}}>
                {menulist.map((menu) => {
                    return <div className="col-3 text-white">
                        <h5 className="text-dark">{menu.menuHeading}</h5>
                        <ul className="list-unstyled">
                            {menu.subMenuList.map((submenu) => {
                                return <li style={{fontSize: '14px'}}>
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