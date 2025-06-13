'use client';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface Props {
  className?: string;
  size?: SizeProp; // string보다는 size Prop에 정해진 값만 허용되도록
}

export default function Spinner({className, size}: Props) {

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faSpinner} className={className} size={size}/>
      </div>
    </>
  );
}