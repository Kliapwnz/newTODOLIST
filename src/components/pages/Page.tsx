import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";

type PagePropsType={
    pages:Array<PagesType>
}

export const Page = (props:PagePropsType) => {
   const param=useParams()
    return (

        <div>
            <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>

        </div>
    );
};
