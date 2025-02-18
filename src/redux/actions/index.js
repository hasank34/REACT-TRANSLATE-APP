import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../api";

export const getLanguages = createAsyncThunk("lang/getLanguages", async () => {
  // api isteği
  const res = await api.get("/getLanguages");
  return res.data.data.languages;
});

export const translateText = createAsyncThunk(
  "translate/translateText",
  async (p) => {
    // apiye gönderilecek parametreyi belirle, form verileri olarak istiyor
    const data = new FormData();
    data.append("source_language", p.sourceLang.value);
    data.append("target_language", p.targetLang.value);
    data.append("text", p.text);

    // api isteği
    const res = await api.post("/translate", data);
    return res.data.data.translatedText;
  }
);
