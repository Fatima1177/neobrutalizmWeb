import './style.scss'
import {useForm} from 'react-hook-form'
import { useEffect, useState} from 'react'
import axios from 'axios'

const AdminPage = () => {

const {
  register,
  handleSubmit,
  watch,
  reset,
  formState: {errors},
} = useForm()

const [allProducts, setAllProducts] = useState([])
const [showDeleteButtons, setShowDeleteButtons] = useState(false)

const addProduct = async(data) => {
  data.img = data.img[0]
  try{
    const response = await axios.post(
      'http://localhost:3000/products/add', 
      data,
      {
        headers: {
        'Content-Type': 'multipart/form-data',
        'token': localStorage.getItem('token')
        },
  }
  )

  if(response.status === 201) {
    alert('Product added')
    reset()
    getData()
  }else{
    alert(response.data.mes)
  }
  }catch(err){
    console.log(err)
  }
}

const getData = async() => {
  try{
    const res = await fetch('http://localhost:3000/products/')
    const json = await res.json()

    if(res.status === 200) {
      setAllProducts(json)
    }
    else{
      alert("Data gelmedi")
    }

  }catch(err){
    console.log(err)
  }
  
}

useEffect(() =>{
  getData()
},[])
const toggleDeleteActive = () => {
  setShowDeleteButtons(!showDeleteButtons)
}

const deleteProductHandle = async(productId) => {
  const response = await fetch(`http://localhost:3000/products/${productId}`, {
    method: 'DELETE',
  })

  const json =  await response.json()

  if(response.status === 200) {
    alert(json.mes)
    getData()
  }
  else{
    alert(json.mes)
  }
}

  return (
    <div className='adminPage'>
      <h1 className='headingText'>Admin Page</h1>

      <div className="container">
        <form onSubmit={handleSubmit(addProduct)} className='addSection'>
        
        <div className="inpt-box">
          <input id='img'
          {...register('img',{
            required: true,
          })}
          type="file" 
        />
        {errors.title && errors.title.type === 'required'&& (
          <span>Enter product title</span>
        )}
        {errors.title && errors.title.type === 'minLength'&& (
          <span>Enter minumum 2 symbol</span>
        )}
        {errors.title && errors.title.type === 'maxLength'&& (
          <span>Enter maximum 20 symbol</span>
        )}
        {errors.title && errors.title.type === 'pattern'&& (
          <span>Enter only letter</span>
        )}

        </div>



        <div className="inpt-box">
          <input id='title'
          {...register('title',{
            required: true,
            minLength: 2,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="text" 
          placeholder='Product title'
        />
        {errors.title && errors.title.type === 'required'&& (
          <span>Enter product title</span>
        )}
        {errors.title && errors.title.type === 'minLength'&& (
          <span>Enter minumum 2 symbol</span>
        )}
        {errors.title && errors.title.type === 'maxLength'&& (
          <span>Enter maximum 20 symbol</span>
        )}
        {errors.title && errors.title.type === 'pattern'&& (
          <span>Enter only letter</span>
        )}

        </div>

        <div className="inpt-box">
          <input id='Stock count'
          {...register('stockCount',{
            required: true,
            min: 1,
            max: 50,
            pattern: /^[0-9]+$/i,
          })}
          type="text" 
          placeholder='Stock count'
        />
        {errors.stockCount && errors.stockCount.type === 'required'&& (
          <span>Enter stock count</span>
        )}
        {errors.stockCount && errors.stockCount.type === 'minLength'&& (
          <span>Enter minumum 2</span>
        )}
        {errors.stockCount && errors.stockCount.type === 'maxLength'&& (
          <span>Enter maximum 50</span>
        )}
        {errors.stockCount && errors.stockCount.type === 'pattern'&& (
          <span>Enter only number</span>
        )}

        </div>

        <div className="inpt-box">
          <input id='starPerFive'
          {...register('starPerFive',{
            required: true,
            min: 1,
            max: 5,
            pattern: /^[0-9]+$/i,
          })}
          type="text" 
          placeholder='Star Per Five'
        />
        {errors.starPerFive && errors.starPerFive.type === 'required'&& (
          <span>Enter star count</span>
        )}
        {errors.starPerFive && errors.starPerFive.type === 'minLength'&& (
          <span>Enter minumum 1</span>
        )}
        {errors.starPerFive && errors.starPerFive.type === 'maxLength'&& (
          <span>Enter maximum 5</span>
        )}
        {errors.starPerFive && errors.starPerFive.type === 'pattern'&& (
          <span>Enter only number</span>
        )}

        </div>


        <div className="inpt-box">
        <select id='hasDiscount'
        {...register("hasDiscount",{required: true})}>
          
          <option value="">Has Discount?</option>
          <option value={true}>true</option>
          <option value={false}>false</option>
          
        </select>
        {errors.hasDiscount && errors.hasDiscount.type === 'required'&& (
          <span>Enter hasDiscount</span>
        )}

        </div>


        {
          watch("hasDiscount") === "true" &&(
            
          <div className="inpt-box">
          <input id='beforePrice'
          {...register('beforePrice',{
            required: true,
            min: 1,
            max: 10000,
            pattern: /^[0-9]+$/i,
          })}
          type="text" 
          placeholder='Before Price'
        />
        {errors.beforePrice && errors.beforePrice.type === 'required'&& (
          <span>Enter current price</span>
        )}
        {errors.beforePrice && errors.beforePrice.type === 'minLength'&& (
          <span>Enter minumum 1</span>
        )}
        {errors.beforePrice && errors.beforePrice.type === 'maxLength'&& (
          <span>Enter maximum 10000</span>
        )}
        {errors.beforePrice && errors.beforePrice.type === 'pattern'&& (
          <span>Enter only numbers</span>
        )}

          </div>
        )}



        <div className="inpt-box">
          <input id='currentPrice'
          {...register('currentPrice',{
            required: true,
            min: 1,
            max: 10000,
            pattern: /^[0-9]+$/i,
          })}
          type="text" 
          placeholder='Current Price'
        />
        {errors.currentPrice && errors.currentPrice.type === 'required'&& (
          <span>Enter current price</span>
        )}
        {errors.currentPrice && errors.currentPrice.type === 'minLength'&& (
          <span>Enter minumum 1</span>
        )}
        {errors.currentPrice && errors.currentPrice.type === 'maxLength'&& (
          <span>Enter maximum 10000</span>
        )}
        {errors.currentPrice && errors.currentPrice.type === 'pattern'&& (
          <span>Enter only numbers</span>
        )}

        </div>


        <button type='submit'>Add Product</button>

        </form>

        <div className="edit">
          <button onClick={toggleDeleteActive}>Delete Product</button>
          <button>Edit Product</button>
        </div>

      <div className='allProducts'>
        {allProducts.map((product) =>{
          return(
            <div key={product._id} className='product-card'>
              {showDeleteButtons && <button onClick={()=>deleteProductHandle(product._id)} className='deleteBtn'>X</button>}
              <img src={`http://localhost:3000/${product.img}`} alt="" />
              <p>
                Title:<span>{product.title}</span>
              </p>

              <p>
                Price:<span>{product.currentPrice}</span>
              </p>

              <p>
                Stock Count:<span>{product.stockCount}</span>
              </p>

          </div>
          )
        })}
        
      </div>

      </div>
    </div>
  )
}

export default AdminPage