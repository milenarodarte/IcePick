import React from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iRegisterRequest } from "../../types/types";
import { Input } from "../input/input";
import { PulseLoader } from "react-spinners";
import { Form } from "../form/form";
import { useLoading } from "../../hooks/useLoading";
import { useUsers } from "../../hooks/useUsers";
import { Button } from "../buttons/button";

const RegisterForm = () => {
  const { register } = useUsers();
  const { loading } = useLoading();

  const schema = yup.object().shape({
    username: yup.string().required("Entre um nome"),
    email: yup
      .string()
      .required("Entre um e-mail!")
      .email("Entre um e-mail válido")
      .lowercase(),
    password: yup
      .string()
      .required("Entre uma senha!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,50}$/,
        "Senha deve conter 1 caractere maísculo, 1 minusculo, 1 caractere especial, 1 número e mínimo de 6 caracteres. "
      ),
    passwordConfirm: yup
      .string()
      .required("você precisa confirmar a senha!")
      .test("passwords-match", "Senhas devem corresponder!", function (value) {
        return this.parent.password === value;
      }),
    avatar: yup
      .string()
      .required("você precisa entrar um avatar válido!")
      .url("precisa entrar uma url válida!"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<iRegisterRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [showPass, toggleShowPass] = useState<boolean>(false);
  return (
    <Form
      onSubmit={handleSubmit((data: iRegisterRequest, event) => {
        register(data);
        reset();
        event!.target!.reset();
      })}
    >
      <h2>Registrar</h2>
      <Controller
        control={control}
        name="username"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            isDirty={isDirty}
            isValid={error ? false : true}
            type="text"
            placeholder="Digite seu nome de usuário"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {<p className="errorMessage">{errors.username?.message}</p>}
      <Controller
        control={control}
        name="avatar"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            isDirty={isDirty}
            isValid={error ? false : true}
            type="text"
            placeholder="Link avatar"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {<p className="errorMessage">{errors.avatar?.message}</p>}
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            isDirty={isDirty}
            isValid={error ? false : true}
            type="text"
            placeholder="digite seu e-mail aqui"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {<p className="errorMessage">{errors.email?.message}</p>}
      <div className="passwordWrapper">
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
          }) => (
            <Input
              isDirty={isDirty}
              isValid={error ? false : true}
              type={showPass ? "text" : "password"}
              placeholder="digite sua senha"
              onChange={onChange}
              value={value}
            />
          )}
        />
        {<p className="errorMessage">{errors.password?.message}</p>}
        <button
          type="button"
          onClick={() => toggleShowPass(!showPass)}
          className="passToggle"
        >
          {showPass ? (
            <VisibilityOffIcon sx={{ color: "grey" }} />
          ) : (
            <VisibilityIcon sx={{ color: "grey" }} />
          )}{" "}
        </button>
      </div>
      <div className="passwordWrapper">
        <Controller
          control={control}
          name="passwordConfirm"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
          }) => (
            <Input
              isDirty={isDirty}
              isValid={error ? false : true}
              type={showPass ? "text" : "password"}
              placeholder="Digite sua senha novamente
          "
              onChange={onChange}
              value={value}
            />
          )}
        />
        {<p className="errorMessage">{errors.passwordConfirm?.message}</p>}
        <button
          type="button"
          onClick={() => toggleShowPass(!showPass)}
          className="passToggle"
        >
          {showPass ? (
            <VisibilityOffIcon sx={{ color: "grey" }} />
          ) : (
            <VisibilityIcon sx={{ color: "grey" }} />
          )}{" "}
        </button>
      </div>

      <Button
        text={loading ? <PulseLoader /> : "Cadastrar"}
        buttonSize="default"
        buttonStyle="bg-ColorBlue"
        disabled={!isValid || !isDirty || loading}
        type="submit"
      />
    </Form>
  );
};

export default RegisterForm;
