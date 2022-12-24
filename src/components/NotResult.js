import notResult from "../assets/hamburguesa.png";

export default function NotResult(){
    return(
        <div className='flex items-center flex-col w-auto opacity-30'>
            <img src={notResult} className='' alt=""/>
            <p> No se encontro resultados</p>
        </div>
    )
}
