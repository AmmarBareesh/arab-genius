"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a4271370-db4b-40a5-b013-e38b1c4d7c89");
  }, []);

  return null;
};
