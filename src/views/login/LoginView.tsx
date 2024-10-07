import { useEffect, useState } from "react";
import style from "./LoginView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/UserReducer";
import { UserInterface } from "../../app/models/interfaces/UserInterface";
import { STATES } from "../../app/data/states";
import { RootState } from "../../redux/store";
import { formValidation } from "../../app/validations/formValidation";
import { ResponseInterface } from "../../app/models/interfaces/ResponseInterface";

export function LoginView() {
  const user = useSelector((state: RootState) => state.auth.user);
  const edit = useSelector((state: RootState) => state.app.edit);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<UserInterface>(user);
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    if (edit) {
      setUserInfo(user);
    }
  }, [user, edit]);

  return (
    <div className={style.container}>
      <h1>{edit ? "Editar Dados" : "Preencha o formulário"}</h1>
      <div className={style.form}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={edit ? userInfo.name : name}
          onChange={(e) =>
            edit
              ? setUserInfo({ ...userInfo, name: e.target.value })
              : setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Digite seu apelido"
          value={edit ? userInfo.nickName : nickName}
          onChange={(e) => {
            if (edit) {
              setUserInfo({ ...userInfo, nickName: e.target.value });
            } else {
              setNickName(e.target.value);
            }
          }}
        />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={edit ? userInfo.email : email}
          onChange={(e) => {
            if (edit) {
              setUserInfo({ ...userInfo, email: e.target.value });
            } else {
              setEmail(e.target.value);
            }
          }}
        />
        <input
          type="text"
          placeholder="Digite seu telefone"
          value={edit ? userInfo.telephone : telephone}
          onChange={(e) => {
            if (edit) {
              setUserInfo({ ...userInfo, telephone: e.target.value });
            } else {
              setTelephone(e.target.value);
            }
          }}
        />
        <select
          value={edit ? userInfo.state : state}
          onChange={(e) => {
            if (edit) {
              setUserInfo({ ...userInfo, state: e.target.value });
            } else {
              setState(e.target.value);
            }
          }}
        >
          <option disabled value="">
            Selecione um estado
          </option>
          {STATES.map((stateOption) => (
            <option key={stateOption} value={stateOption}>
              {stateOption}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Digite sua cidade"
          value={edit ? userInfo.city : city}
          onChange={(e) => {
            if (edit) {
              setUserInfo({ ...userInfo, city: e.target.value });
            } else {
              setCity(e.target.value);
            }
          }}
        />
        <button
          onClick={async () => {
            setLoading(true);

            // const responseData: ResponseInterface = await formValidation(
            //   edit ? userInfo.name : name,
            //   edit ? userInfo.email : email,
            //   edit ? user.nickName : nickName,
            //   edit ? userInfo.telephone : telephone,
            //   edit ? userInfo.state : state,
            //   edit ? userInfo.city : city
            // );

            const userData: UserInterface = {
              name: edit ? userInfo.name : name,
              email: edit ? userInfo.email : email,
              nickName: edit ? userInfo.nickName : nickName,
              telephone: edit ? userInfo.telephone : telephone,
              state: edit ? userInfo.state : state,
              city: edit ? userInfo.city : city,
            };

            navigate("/informations", { state: userData });

            // if (responseData.status === "success") {
            //   dispatch(setUser(userData));
            //   navigate("/informations", userData);
            //   setLoading(false);
            // } else {
            //   setError(responseData.message);
            //   setLoading(false);
            // }
          }}
        >
          {loading ? <div className={style.spinner}></div> : "Enviar"}
        </button>
        {error && (
          <div className={style.error}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
