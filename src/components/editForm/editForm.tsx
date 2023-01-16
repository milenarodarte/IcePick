import React from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iEditRequest } from "../../types/types";
import { Input } from "../input/input";
import { PulseLoader } from "react-spinners";
import {} from "@mui/icons-material";
import { Form } from "../form/form";
import { useLoading } from "../../hooks/useLoading";
import { useUsers } from "../../hooks/useUsers";
import { Button } from "../buttons/button";

const EditForm = () => {
  const { edit, user } = useUsers();
  const { loading } = useLoading();
  const schema = yup.object().shape({
    username: yup.string().required("Entre um nome"),
    password: yup.string(),
    /*.matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,50}$/,
        "Senha deve conter 1 caractere maísculo, 1 minusculo, 1 caractere especial, 1 número e mínimo de 6 caracteres. "
      )*/ passwordConfirm: yup
      .string()
      .test("passwords-match", "Senhas devem corresponder!", function (value) {
        return this.parent.password === value;
      }),
    avatar: yup.string().required("você precisa entrar um avatar válido!"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<iEditRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [showPass, toggleShowPass] = useState<boolean>(false);
  return (
    <Form
      onSubmit={handleSubmit((data: iEditRequest, event) => {
        if (data.password) {
          edit(user!.id, data);
          reset();
          event!.target!.reset();
        } else {
          const partialRequest: iEditRequest = {
            username: data.username,
            avatar: data.avatar,
          };
          edit(user!.id, partialRequest);
        }
      })}
    >
      <h2>Atualizar Perfil</h2>
      <Controller
        control={control}
        name="username"
        defaultValue={user ? user.username : "sem usuário logado"}
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
              placeholder="digite uma nova senha"
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
              placeholder="Confirme sua nova senha"
              onChange={onChange}
              value={value}
            />
          )}
        />
        {<p className="errorMessage">{errors.passwordConfirm?.message}</p>}
        <Controller
          control={control}
          name="avatar"
          defaultValue={user ? user.avatar : "sem usuário logado"}
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
        text={loading ? <PulseLoader /> : "Confirmar Alterações"}
        buttonSize="default"
        buttonStyle="bg-ColorBlue"
        disabled={!isValid || loading}
        type="submit"
      />
    </Form>
  );
};

export default EditForm;
