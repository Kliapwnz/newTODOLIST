import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PagePropsType={
    pages:Array<PagesType>
}

export const Page = (props:PagePropsType) => {
   const param=useParams()
    console.log("params", param)
    return (
        <div>
            PAGE
        </div>
    );
};
