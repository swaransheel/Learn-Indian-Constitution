import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonData from '../coi.json'; 

export default function Part1() {
  const [selectedArticle, setSelectedArticle] = useState(''); 
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    if (selectedArticle.trim()) {
      const [articleNumber, articleTitle] = selectedArticle.split('|');
      const encodedValue = encodeURIComponent(articleTitle.trim());
      navigate(`./Page2?article=${articleNumber}&title=${encodedValue}`);
    }
  };

  return (
    <div className="bg-black h-[500px] w-full flex flex-col items-center justify-center text-white">
      <div className="mb-4 w-full-fixed  flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl">📜</h1>
      </div>
      <div className="mb-4">
        <h1 className="font-mar font-light text-[#81B29A] text-5xl mr-5 p-10">
          Unravel the Constitution Code
        </h1>
      </div>
      <div>
        <select value={selectedArticle} onChange={(e) => setSelectedArticle(e.target.value)} className="text-[#000000] font-merri text-1xl bg-slate-400 mr-6 p-3 rounded-[10px] w-64">
          <option value="" disabled>Select an Article</option>
          {jsonData.map((item) => (
            <option key={item.article} value={`${item.article}|${item.title}`}>
              Article {item.article}
            </option>
          ))}
        </select>
        <button
          className="p-3 mr-6 bg-[#3D405B] font-merri text-white rounded-[10px]"
          onClick={handleRedirect}
        >
          Read Article
        </button>
      </div>
    </div>
  );
}
