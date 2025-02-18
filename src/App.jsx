import React, { useEffect, useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import TextContainer from "./components/TextContainer";
import { useDispatch } from "react-redux";
import { getLanguages, translateText } from "./redux/actions";
import Flags from "./components/Flags";
import { en, tr } from "./constants";

const App = () => {
  const dispatch = useDispatch();

  const [sourceLang, setSourceLang] = useState(tr);
  const [targetLang, setTargetLang] = useState(en);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const handleTranslate = () => {
    // API request
    dispatch(translateText({ sourceLang, targetLang, text }));
  };
  useEffect(() => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  }, [targetLang]);

  return (
    <div className="bg-zinc-900 max-h-full min-h-screen  text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>
        {/* Bayrak kısmı */}
        <Flags sourceLang={sourceLang} targetLang={targetLang} />
        {/* üst kısım */}
        <LanguageSelect
          setSourceLang={setSourceLang}
          sourceLang={sourceLang}
          setTargetLang={setTargetLang}
          targetLang={targetLang}
          setText={setText}
        />
        {/* Text Alanları  */}
        <TextContainer setText={setText} text={text} />
        {/* buton */}
        <button
          onClick={handleTranslate}
          className="bg-zinc-700 mb-14 px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
