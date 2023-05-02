import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIterator } from '../../modules/api';

export const useGrid = ({
    url,
    getDataSelector,
    setDataAction,
    resetAction
}) => {
    const rowData = useSelector(getDataSelector);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const PAGE_SIZE = 50;

    useEffect(() => {
        dispatch(resetAction());
        const abortController = new AbortController();
        async function iterateData() {
            setLoading(true);
            const iterator = getIterator({ url, signal: abortController.signal, pageSize: PAGE_SIZE });
            try {
                for await (const { data } of iterator) {
                    dispatch(setDataAction(data));
                }
            }
            catch (e) {
                if (e.name === 'AbortError') return;
                else alert(e);
            }
            setLoading(false);
        }
        iterateData();
        return () => {
            abortController.abort();
        }
    }, []);

    return [rowData, loading];
};