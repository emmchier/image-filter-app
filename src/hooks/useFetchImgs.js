import { useEffect, useState } from "react"
import { getImageList } from "../service/apiService";
 
export const useFetchImgs = () => {
    
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });
    console.log(state);
 
    useEffect(() => {
        getImageList()
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, []);
 
    return state;
}
