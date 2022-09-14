import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function CardFood(){
    const [foods,setFoods]=useState([]);

    useEffect(()=>{
        getFoods().catch(error=>console.log(error));
    },[])

    const getFoods= async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/v1/private/foods')
        const data = await response.json();
        console.log(data.data)
        setFoods(data.data);
    }


    return(
        <div className="mt-6 m-auto w-2/3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {foods.map((value)=>(
                <Link to={`/home/${value.id}`}>
                    <div key={value.id} className="group relative">
                        <div
                            className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                 alt="Front of men&#039;s Basic Tee in black."
                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {value.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-900">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${value.cost}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
