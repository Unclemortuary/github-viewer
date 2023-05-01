import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../modules/api';

export const useGrid = ({
    url,
    getDataSelector,
    setDataAction,
    shouldResetOnUnmount,
    resetAction
}) => {
    const rowData = useSelector(getDataSelector);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!shouldResetOnUnmount && rowData?.length) {
            setLoading(false);
            return;
        }
        const abortController = new AbortController();
        request({ url, signal: abortController.signal })
            .then(response => {
                if (response.status === 200) dispatch(setDataAction(response.data));
            })
            .catch(e => {
                if (e.name === 'AbortError') return;
                else alert(e);
            })
            .finally(() => setLoading(false));
        
        return () => {
            abortController.abort();
            if (shouldResetOnUnmount) dispatch(resetAction());
        }
    }, []);

    return [rowData, loading];
};