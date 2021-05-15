import { useGlobalState } from "./useGlobalState";

export const useReset =  ( setParams, setHistoryList ) => {

    const globalState = useGlobalState();

    const resetAll = () => {
        setParams(globalState)
    }

    const resetHistory = () => {
        setParams({});
        setHistoryList([]);
    }

    const resetAdjustments = () => {
        setParams({
            ...globalState,
            con: 0,
            bri: 0,
            exp: 0, 
            high: 1, 
            vib: 0, 
            hue: 0,
            sat: 0,
            gam: 0
        })
    }

    return {
        resetAll,
        resetHistory,
        resetAdjustments
    }
}
