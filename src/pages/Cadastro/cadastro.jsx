import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Label from "../../components/label/label";
import S from "./cadastro.module.css";

const Cadastro = () => {
  return (
    <div className="container">
      <h2>Formulário de Cadastro</h2>
      <form>
        <Label id={"nome"} text={"Nome:"} />
        <Input type={"text"} placeholder="Digite seu nome" />

        <Label id={"sobrenome"} text={"Sobrenome:"} />
        <Input type={"text"} placeholder="Digite seu sobrenome" />

        <Label id={"email"} text={"Email:"} />
        <Input type={"email"} placeholder="Digite seu email" />

        <Label id={"tel"} text={"Telefone:"} />
        <Input type={"tel"} placeholder="Digite seu contatinho" />

        <Button content={"Próximo"} />
      </form>
    </div>
  );
};

export default Cadastro;