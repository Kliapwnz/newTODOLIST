import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PagePropsType={
    pages:Array<PagesType>
}

export const Page = (props:PagePropsType) => {
   const param=useParams()
    return (
        <div>
            PAGE
        </div>
    );
};
