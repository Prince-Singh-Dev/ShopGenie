import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Background from "../component/Background";
import Hero from "../component/Hero";


function Home(){
    let heroData = [
        {text1 : "30% OFF Limited Offer" , text2:"Style That"},
        {text1 : "Discover the Best of Bold Fashion" , text2:"Limited Time Only!"},
        {text1 : "Explore Our Best Collection" , text2:"Shop Now!"},
        {text1 : "Choose your Perfect Fashion Fit" , text2:"Now on Sale!"}
    ]

    let [heroCount,setHeroCount] = useState(0)

    useEffect (() => {
        let interval = setInterval(() =>{
            setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1 ))
        },3000)
        return ()=> clearInterval(interval)
    },[])

    return(

        <div className="overflow-hidden">
            <Nav />  
            <div className='pt-[70px] w-screen h-screen bg-gradient-to-b from-[#141414] to-[#0c2025] relative'>
                <Background heroCount={heroCount}/>
                <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}/>
            </div>
        </div>
    )
}

export default Home