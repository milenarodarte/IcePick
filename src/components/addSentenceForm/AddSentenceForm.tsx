import React from "react";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iSentencesAdd } from "../../types/types";
import { Input, Select } from "../input/input";
import { PulseLoader } from "react-spinners";
import { Form } from "../form/form";
import { useLoading } from "../../hooks/useLoading";
import { Button } from "../buttons/button";
import { useUsers } from "../../hooks/useUsers";
import { useSentece } from "../../hooks/useSentence";

const AddSentenceForm = () => {
  const { loading } = useLoading();
  const { user } = useUsers();
  const { addSentence } = useSentece();
  const schema = yup.object().shape({
    text: yup
      .string()
      .required("Frase deve ter um corpo!")
      .matches(/[\s\S]{20,}/, "frase deve ter pelo menos 20 caracteres!"),
    type: yup.string().required("Frase deve ter um tipo!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iSentencesAdd>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <Form onSubmit={handleSubmit((data) => addSentence(data, user!.id))}>
      {/*Adicionar função de adicionar frase posteriormmente*/}
      <h2>Adicionar Frase</h2>
      <Controller
        control={control}
        name="text"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            isDirty={isDirty}
            isValid={error ? false : true}
            type="text"
            placeholder="digite a sua frase aqui"
            onChange={onChange}
            value={value}
          />
        )}
      />

      {<p className="errorMessage">{errors.text?.message}</p>}

      <Controller
        control={control}
        name="type"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Select
            isDirty={isDirty}
            isValid={error ? false : true}
            placeholder="selecione o tipo de frase"
            onChange={onChange}
            value={value}
          >
            <option value="" disabled selected>
              escolha uma categoria
            </option>
            <option value="Formal">Formal</option>
            <option value="Engraçadas">Engraçadas</option>
            <option value="Criativas">Criativas</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Intimidade">Intimidade</option>
            <option value="Paquera">Paquera</option>
          </Select>
        )}
      />
      {<p className="errorMessage">{errors.type?.message}</p>}

      <Button
        text={loading ? <PulseLoader /> : "Adicionar"}
        buttonSize="default"
        buttonStyle="bg-ColorBlue"
        disabled={!isValid || !isDirty || loading}
        type="submit"
      />
    </Form>
  );
};

export default AddSentenceForm;
