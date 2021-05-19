import { useGlobalState } from "./useGlobalState";

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
