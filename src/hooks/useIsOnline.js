import { useState, useEffect } from "react";

const useIsOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true);
            console.log("online");
        });

        window.addEventListener("offline", () => {
            setIsOnline(false);
            console.log("offline");
        });

        return () => {

        };

    }, []);

    return isOnline;
}

export  default useIsOnline;