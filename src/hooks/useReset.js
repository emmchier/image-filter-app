import { useGlobalState } from "./useGlobalState";

/*
 * custom hook that returns reset value functions
 */
export const useReset =  ( setParams, setHistoryList ) => {

    const globalState = useGlobalState();

    const resetAll = () => {
        setParams(globalState)
    }

    const resetHistory = () => {
        setParams(globalState);
        setHistoryList([]);
    }

    return {
        resetAll,
        resetHistory
    }
}
