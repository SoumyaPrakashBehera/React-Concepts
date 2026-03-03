import React from "react";
import UseStateHook from "./UseStateHook";
import UseStateTask2 from "./UseStateTask2";
import StateWithProps from "./statewithprops/StateWithProps";
import UseRefHookHome from "./userefhook/UseRefHookHome";
import UseEffectHome from "./useffecthook/UseEffectHome";
import UseMemoHook from "./usememohook/UseMemoHook";
import UseCallBackHook from "./usecallbackhook/UseCallBackHook";
const HooksHome=()=>{
  return(
    <div id="hookshome">
      {/* <UseStateHook/> */}
      {/* <UseStateTask2/> */}
      {/* <StateWithProps/> */}
      {/* <UseRefHookHome/> */}
      {/* <UseEffectHome/> */}
      {/* <UseMemoHook/> */}
      <UseCallBackHook/>
    </div>
  )
}
export default HooksHome