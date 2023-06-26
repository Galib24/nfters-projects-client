import React, { useEffect, useState } from 'react';

const useData = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                 setAllData(data)
                 setLoading(false)
                })
    }, [])
    return [allData, loading]
};
// const topItem = data.filter(item => item.ratio >= 1);

export default useData;