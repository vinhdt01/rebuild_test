import React, { useState } from 'react';
import GalleryProduct from './gallery-products'

import classNames from 'classnames/bind';
function ImageSlider() {
 
  const imgs=[
    {id:0,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"},
    {id:1,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/123/gb0000w001550-bong-tai-kim-tien-vang-trang-y-18k-pnj-khoen-tron-01.png"},
    {id:2,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [show , setShow] = useState(false)
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className="main ">
       {show && <GalleryProduct handleShow={handleShow}/>}
      {/* <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
        "w-[76px] h-[76px] mb-2 border-2"
      </div> */}

      <div className=" h-[400px] w-[100px] mr-2">
            {imgs.map((data , i) => (
               <img className={classNames(wordData.id==i?"clicked":"" , 'w-[76px] h-[76px] mb-2 border-2')} src={data.value} onClick={() => handleClick(i)} />
            ))}
      </div>
<div>
          <img className="bg-[#f7f7f7]" src={wordData.value} height="300" width="500" /> 
             <div className="flex justify-center mt-2 cursor-pointer" onClick={handleShow}>
                <img src="https://cdn.pnj.io/images/p_detail/anh.svg"/>
              </div>
</div>  
     </div>
  );
}

export default ImageSlider;