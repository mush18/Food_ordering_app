const Header = ()=>
{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOo0SgMAhI631KgFP0nxuESWTOAq2ZQk_fw&usqp=CAU"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        
        </div>
    );
};

export default Header;