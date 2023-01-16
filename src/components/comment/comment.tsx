import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Comment:React.FC = () => {
    const [show , setShow] = useState(false)
    return (
        <div className=" max-w-[800px] bg-[#f2f2f2] cursor-pointer rounded-lg shadow-lg shadow-indigo-500/40 mb-4">
           <div className="flex  p-4 justify-between" onClick={() => setShow(!show)}><h1 >Bình luận</h1>
           <img className={show && 'rotate-180'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
           </div>
          { show && <div className="border-solid border-t-[1px] border-[#202e65]  mx-2 px-4 py-2">
          <div className="bg-[#fff] my-2 p-2 rounded-lg">
                   <div className="flex items-center ">
                    <p>Bùi Tiến Dũng</p>
                    <div >
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>

                    </div>   
                   </div>
                   <div>Mẫu này có ship tận nhà không ạ ?</div>
               </div>
               <div className="bg-[#fff] my-2 p-2 rounded-lg">
                   <div className="flex items-center">
                    <p>Bùi Tiến Dũng</p>
                    <div >
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>

                    </div>   
                   </div>
                   <div>Mẫu này có ship tận nhà không ạ ?</div>
               </div>
           </div>}
        </div>
    )
}
export default Comment;