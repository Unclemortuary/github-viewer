import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useGrid = (
    requestDataCallback,
    getDataSelector,
    setDataAction,
    shouldResetOnUnmount,
    resetAction
) => {
    const rowData = useSelector(getDataSelector);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!shouldResetOnUnmount && rowData?.length) {
            setLoading(false);
            return;
        }
        requestDataCallback()
            .then(response => {
                if (response.status === 200) dispatch(setDataAction(response.data));
            })
            .catch(e => alert(e))
            .finally(() => setLoading(false));
        
        return () => {
            if (shouldResetOnUnmount) dispatch(resetAction());
        }
    }, []);

    return [rowData, loading];
};