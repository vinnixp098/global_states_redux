import { ResponseInterface } from "../models/interfaces/ResponseInterface";

export const formValidation = async (
  name?: string,
  nickName?: string,
  email?: string,
  city?:  string,
  telephone?: string,
  state?: string
): Promise<ResponseInterface> => {
  if (
    name?.trim() === "" ||
    nickName?.trim() === "" ||
    email?.trim() === "" ||
    city?.trim() === "" ||
    telephone?.trim() === "" ||
    state?.trim() === ""
  ) {
    return {
      status: "error",
      message: "Preencha todos os campos",
    };
  }
  return {
    status: "success",
    message: "Formulário válido",
  };
};
