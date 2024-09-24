import React from "react";
import styled from "../styles/HiComponent.module.scss"

/*---------------import/\---------------*/

function HiComponent() {
  return <div className={styled.hi_container}>
    <p className={styled.hi_text}>
      Добро пожаловать
    </p>
  </div>;
}

export default HiComponent;
