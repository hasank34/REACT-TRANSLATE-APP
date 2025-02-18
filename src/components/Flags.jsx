import { languageToCountryCode } from "./../constants/lang";
const Flags = ({ sourceLang, targetLang }) => {
  const sourceCode = languageToCountryCode[sourceLang?.value];
  const targetCode = languageToCountryCode[targetLang?.value];

  return (
    <div className="flex justify-around align-items-center gap-20">
      <div className="flex-1 flex justify-center h-[100px]  ">
        <img
          src={`https://flagsapi.com/${sourceCode}/flat/64.png`}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        />
      </div>
      <div className="flex-1 flex justify-center h-[100px]  ">
        <img
          src={`https://flagsapi.com/${targetCode}/flat/64.png`}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          alt="Target Flag"
        />
      </div>
    </div>
  );
};

export default Flags;
