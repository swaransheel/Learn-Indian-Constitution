import { useLocation } from "react-router-dom";
import ApiOut from "../components/ApiOut";

import Logo from "../components/Logo";


export default function Page2() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const articleNumber = (urlParams.get('article'));
  const articleTitle = urlParams.get('title');

  return (<>
  
    <div>
        <div className="h-[300px] items-center justify-center  w-full flex flex-col space-x-0 bg-[#FEFAE0]">
          <h1 className="h-[120px] text-[120px] font-staat ">Article</h1>
          <h2 className="text-[100px] font-staat text-center">{articleNumber}</h2>
        </div>
        <div className="bg-[#D4A373] p-4">
          <h1 className="text-[30px] font-staat text-center tracking-wide">{articleTitle}</h1>
        </div>
        <div className="bg-[#D4A373] p-9 h-auto">
        <ApiOut title={articleTitle} number={articleNumber}/>
        </div>
    </div>

    <Logo/>

    </>
  );
}
