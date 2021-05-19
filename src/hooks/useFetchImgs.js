import { useEffect, useState } from "react"
import { getImageList } from "../service/apiService";

/*
 * custom hook to obtain an array list from service and show loading state
 */
export const useFetchImgs = () => {
    
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });
 
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
