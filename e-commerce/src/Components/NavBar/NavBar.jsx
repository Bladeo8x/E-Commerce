import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <nav>
        <h3>ECOFI</h3>
        <div>
          <button>Ice Coffee</button>
          <button>Hot Coffee</button>
          <button>Ice Tea</button>
          <button>Hot Tea</button>
        </div>
        <div>
            <CartWidget />
        </div>
      </nav>
    );
  };
  
  export default NavBar;