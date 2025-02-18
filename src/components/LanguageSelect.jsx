import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = ({
  setSourceLang,
  sourceLang,
  setTargetLang,
  targetLang,
  setText,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);
  const { answer } = useSelector((store) => store.translate);

  const formatted = useMemo(
    () =>
      langs.map((lang) => ({
        value: lang.code,
        label: lang.name,
      })),
    [langs]
  );
  // seçili dilleri değişti
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer);
  };
  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
        onChange={(e) => setSourceLang(e)}
        value={sourceLang}
      />

      <button
        onClick={handleSwap}
        className="text-white bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded"
      >
        Değiş
      </button>

      <ReactSelect
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
        onChange={(e) => setTargetLang(e)}
        value={targetLang}
      />
    </div>
  );
};

export default LanguageSelect;
