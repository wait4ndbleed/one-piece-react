"use client";

import { useState } from "react";
import { Personagem } from "../components/Personagem";
import { Botoes } from "@/components/Botoes";
import { useContextApi } from "@/hooks/useContextApi";

export default function Home() {

  const {id, setId} = useContextApi();

  return (
    <>
      <Personagem id={id} />

      <Botoes />
    </>
  );
}
