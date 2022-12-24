import {useState,useEffect} from "react";
import {getFoods} from "../../../services/PrivateServices";

export default function CardFood({handleCatchId}){

    const [foods, setFoods]=useState([])

    useEffect(()=>{
        getFoods().then(response=>{
                setFoods(response.data)
            console.log(response.data)
            }
        )
    },[])

    const pipeState=(state)=>{
        if(state){
            return(
                <div className="mt-1 text-sm text-gray-900">Disponible</div>
            )
        }else{
            return(
                <div className="mt-1 text-sm text-gray-900">No Disponible</div>
            )
        }
    }

    return(
        <div className="mt-6 m-auto w-2/3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {foods.map((value)=>(
                <div key={value.id} className="group relative" onClick={()=>handleCatchId(value.id)}>
                    <div
                        className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src={value.image}
                             alt=""
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
                            {pipeState(value.state)}
                        </div>
                        <p className="text-sm font-medium text-gray-900">${value.cost}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
