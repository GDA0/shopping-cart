import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export function Header ({ cartItemCount }) {
  return (
    <header>
      <nav className='navbar fixed-top bg-white container-fluid border-bottom border-1'>
        <div className='container d-flex justify-content-between py-1'>
          <Link className='navbar-brand'>Shopping Cart</Link>
          <div className='ms-auto d-flex gap-3'>
            <Link className='btn btn-light rounded-pill' to='/shop'>
              Shop
            </Link>
            <Link
              className='btn btn-light rounded-pill position-relative'
              to='/cart'
            >
              Cart{' '}
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'>
                {cartItemCount}
                <span className='visually-hidden'>Cart items</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired
}
