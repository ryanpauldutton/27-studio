import classNames from "classnames";
import React from "react";
import { useProjectStore } from "./store";

type ProjectCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps;

type CardProps = {
    id: string;
}

export const ProjectCard = ({ gradient, children, id }: ProjectCardProps) => {
    const setInViewProject = useProjectStore((state) => state.inViewProject);

    return(
        <div 
        className={classNames(
            "absolute inset-0 h-full w-full bg-gradient-to-br  rounded-2xl opacity-0",
        gradient,
        setInViewProject === id ? 'opacity-100' : 'opacity-0'
        )}
        >
           {children}
            </div>
    )
};

export const LaRosa = ({id}: CardProps) => {
    return(
        <ProjectCard id={id} gradient='from-[#ffffff] to-[#111111]'>
            <span />
        </ProjectCard>
    )
}

export const GPAA = ({id}: CardProps) => {
    return(
        <ProjectCard id={id} gradient='from-[#111111] to-[#ffffff]'>
            <span />
        </ProjectCard>
    )
}

export const ProjectThree = ({id}: CardProps) => {
    return(
        <ProjectCard id={id} gradient='from-[#333333] to-[#777777]'>
            <span />
        </ProjectCard>
    )
}

export const ProjectFour = ({id}: CardProps) => {
    return(
        <ProjectCard id={id} gradient='from-[#121212] to-[#656565]'>
            <span />
        </ProjectCard>
    )
}
