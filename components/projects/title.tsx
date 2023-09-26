import React, { useEffect, useRef } from "react";

import { useInView } from "framer-motion";
import classNames from "classnames";
import { useProjectStore } from "../store";


type Props = {
    children: React.ReactNode;
    id: string;
};

export const ProjectTitle = ({children, id}: Props) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px"});
    const setInViewProject = useProjectStore((state) => state.setInViewProject );
    const InViewProject = useProjectStore((state) => state.inViewProject)

    useEffect(() => {
        if (isInView) setInViewProject(id);
        if (!isInView && InViewProject === id) setInViewProject(null)
    }, [isInView, id, setInViewProject]);

    return(
        <p
        ref={ref}
        className={classNames(
            "font-bold text-5xl py-40 transition-colors" ,
        isInView ? "text-black" : "text-gray-500"
            )}
            >{children}</p>
    )
}