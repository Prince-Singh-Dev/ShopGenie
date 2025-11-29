import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCircleChevronDown } from "react-icons/fa6";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {

  let [showFilter,setShowFilter] = useState(false)
  let {products} = useContext(shopDataContext)
  let [filterProduct , setFilterProduct] = useState([])
  let [category,setCategory] = useState([])
  let [subCategory , setSubCategory] = useState([])
  let [sortType,setSortType] = useState("relavent")

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else
    {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else
    {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()
    if(category.length > 0)
    {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0)
    {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productCopy)
  }

  useEffect(()=>{
    setFilterProduct(products)
  },[products])

  useEffect(()=>{
    applyFilter()
  },[category,subCategory])

  return (
    <div className='w-[98vw] min-h-[100vh] bg-gradient-to-b from-[#141414] to-[#0c2025] flex items-start flex-col md:flow-row justify-start pt-[70px] overflow-x-hidden z-[2]'>

        <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilter ? "h-[45vh]" : "h-[8vh]"} p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed`}>
          
          <p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start' onClick={()=>setShowFilter(prev=>!prev)}>FILTERS
            {!showFilter && <IoIosArrowDroprightCircle className='text-[18px] md:hidden'/>}
            {showFilter && <FaCircleChevronDown className='text-[18px]'/>}
          </p>

          <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
            <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
            <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Men'} className='w-6' onChange={toggleCategory}/>Men</p>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Women'} className='w-6' onChange={toggleCategory}/>Women</p>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Kids'} className='w-6' onChange={toggleCategory}/>Kids</p>
            </div>
          </div>

          <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
            <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
            <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Top Wear'} className='w-6' onChange={toggleSubCategory}/>Top Wear</p>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Bottom Wear'} className='w-6' onChange={toggleSubCategory}/>Bottom Wear</p>
              <p className='flex items-center justify-center gap=[10px] text-[16px] font-light'><input type="checkbox" value={'Winte rWear'} className='w-6' onChange={toggleSubCategory}/>Winter Wear</p>
            </div>
          </div>

        </div>

        <div className='lg:pl-[20%] md:py-[10px]'>

          <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]'>
            <Title text1={"ALL"} text2={"COLLECTIONS"}/>
            <select name="" id="" className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]'>
              <option value="relavent" className='w-[100%] h-[100%]'>Sort By : Relavent</option>
              <option value="low-high" className='w-[100%] h-[100%]'>Sort By : Low to High</option>
              <option value="high-low" className='w-[100%] h-[100%]'>Sort By : High to Low</option>
            </select>
          </div>

          <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
            {
              filterProduct.map((item,index) => (
                <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
              ))
            }
          </div>

        </div>

    </div>
  )
}

export default Collections