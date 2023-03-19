import { Link } from 'react-router-dom';
import data from '../data';
function HomeScreen() {
  return (
    <div>
      <h1>Produk</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.gambar} alt={product.nama} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.nama}</p>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <p>
                  <strong>{product.harga}</strong>
                </p>
              </Link>
              <button>Tambahkan ke keranjang</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
