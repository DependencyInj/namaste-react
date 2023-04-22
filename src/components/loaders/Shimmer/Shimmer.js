import { useLayoutEffect, useRef } from "react";

const Shimmer = (loading) => {

    const ref = useRef();

    useLayoutEffect(() => {
        if(ref.current){
            const elements = ref.current.querySelectorAll('[data-loading]');
            elements.forEach(element => {
                if(loading){
                    element.classList.add('shimmer');
                } else {
                    element.classList.remove('shimmer');
                }
            });
        }
    }, [loading])

    return ref;
}

export default Shimmer;