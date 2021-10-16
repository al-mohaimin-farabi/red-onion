import { useEffect, useState } from "react"


const useRestaurentData = () => {
    const [restaurentData, setRestaurentData] = useState();

    useEffect(() => {
        fetch('./restaurentsinfo.json')
            .then(res => res.json())
            .then(data => setRestaurentData(data))
    }, [])

    return [restaurentData]
}

export default useRestaurentData;