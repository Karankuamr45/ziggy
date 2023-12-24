import { useRouteError } from "react-router-dom";
const PageNotFound=()=>{
    const err=useRouteError()
    console.log(err)
    return(
        <div>
            <h1>OOPs!</h1>
            <h3>{err.status} : {err.statusText}</h3>
            
        </div>
    )
}

export default PageNotFound;