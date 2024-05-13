import './style.scss'
import starIcon from '../../assets/star.svg'

const ProductCard = ({product}) => {

  return (
    <div className='product-card'>
        <div className="img-wrapper">
            <img src={`http://localhost:3000/${product.img}`} alt="" />
        </div>
        
        <h2>{product.title}</h2>
        <span>Stock: {product.stockCount}</span>
        <div className="stars-wrapper">
            {[...Array(product.starPerFive)].map((x, index) => (
                <img key={index} src={starIcon} alt=""/>
            ))}
        </div>

        <p>
            <del>{product.hasDiscount ? `$${product.beforePrice}` : ""}</del>
            <span>${product.currentPrice}</span>
        </p>
        <div className="btn1">
            <button>Buy</button>
        </div>
    </div>
  )
}

export default ProductCard