import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';

function ProductDetail() {
  let { productId } = useParams()
  let { products, currency, addtoCart } = useContext(shopDataContext)
  let [productData, setProductData] = useState(false)

  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className="overflow-x-hidden">

      <div className='w-full min-h-screen bg-gradient-to-b from-[#141414] to-[#0c2025] flex flex-col lg:flex-row items-center lg:items-center justify-start gap-[20px] px-[16px]'>

        {/* Image Section */}
        <div className='lg:w-1/2 w-full lg:min-h-screen min-h-[60vh] mt-[70px] flex items-center justify-center gap-[30px] flex-col-reverse lg:flex-row'>

          <div className='lg:w-[20%] md:w-[90%] w-full lg:h-[80%] flex items-center lg:flex-col flex-wrap gap-[16px] justify-center'>
            {[image1, image2, image3, image4].map((img, idx) => (
              <div
                key={idx}
                className='md:w-[100px] w-[60px] md:h-[110px] h-[60px] bg-slate-300 border border-[#80808049] rounded-md overflow-hidden'
              >
                <img
                  src={img}
                  alt=""
                  className='w-full h-full object-cover cursor-pointer'
                  onClick={() => setImage(img)}
                />
              </div>
            ))}
          </div>

          <div className='lg:w-[60%] w-[85%] lg:h-[78%] h-[75%] border border-[#80808049] rounded-md overflow-hidden'>
            <img
              src={image}
              alt=""
              className='w-full h-full object-contain rounded-md'
            />
          </div>

        </div>

        {/* Content Section */}
        <div className='lg:w-1/2 w-full flex items-start justify-start flex-col py-[20px] lg:mt-0 gap-[14px]'>

          <h1 className='text-[32px] md:text-[40px] font-semibold text-[aliceblue]'>
            {productData.name.toUpperCase()}
          </h1>

          <div className='flex items-center gap-1'>
            <FaStar className='text-[18px] fill-[#FFD700]' />
            <FaStar className='text-[18px] fill-[#FFD700]' />
            <FaStar className='text-[18px] fill-[#FFD700]' />
            <FaStar className='text-[18px] fill-[#FFD700]' />
            <FaStarHalfAlt className='text-[18px] fill-[#FFD700]' />
            <p className='text-[16px] font-semibold pl-[5px] text-white'>(124)</p>
          </div>

          <p className='text-[26px] font-semibold text-white'>
            {currency} {productData.price}
          </p>

          <p className='w-full md:w-[80%] text-[16px] md:text-[18px] text-white opacity-90'>
            {productData.description} and Stylish , breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable and designed for effortless style.
          </p>

          <div className='flex flex-col gap-[12px] my-[10px]'>

            <p className='text-[22px] font-semibold text-white'>Select Size</p>

            <div className='flex gap-2 flex-wrap'>
              {
                productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    className={`border py-2 px-4 rounded-md transition-all 
                      ${item === size
                        ? 'bg-black text-[#2f97f1] text-[18px]'
                        : 'bg-slate-300 text-black hover:bg-slate-400'
                      }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))
              }
            </div>

            <button className='text-[16px] bg-[#495b61c9] py-[16px] rounded-2xl mt-[10px] border border-[#80808049] text-white shadow-md shadow-black transition-all hover:bg-[#5f737a] active:scale-[0.97]' onClick={()=>addtoCart(productData._id , size)}>
              Add To Cart
            </button>
          </div>

          <div className='w-[90%] h-[1px] bg-slate-700'></div>
          <div className='w-[80%] text-[16px] text-white'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy with 7 days</p>
          </div>

        </div>

      </div>

      <div className='w-[100%] min-h-[70vh] bg-gradient-to-b from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden'>
        <div className='flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]'>
            <p className='border px-5 py-3 text-sm text-white'>Description</p>
            <p className='border px-5 py-3 text-sm text-white'>Reviews (124)</p>
        </div>

        <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
            <p className='w-[95%] h-[90%] flex items-center justify-center'>
                Upgrade Your wardrobe with this stylish slim-fit cotton shirt , available now on ShopGenie. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.
            </p>
        </div>

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>

      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default ProductDetail
