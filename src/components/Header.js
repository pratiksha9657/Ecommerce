import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div className='cart' onClick={() => props.handleShow(false)} >flippy cart</div>
            <div className='prop' onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
