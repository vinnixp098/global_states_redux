import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import style from "./RegisterView.module.css";
import { useDispatch } from "react-redux";
import { setEdit } from "../../redux/slices/AppReducer";
import { useLocation, useNavigate } from "react-router-dom";
// import { UserInterface } from "../../app/models/interfaces/UserInterface";

export function RegisterView() {
  const location =  useLocation();
  const dados  = location.state;
  console.log("Dados:  ", dados);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  return (
    <div className={style.container}>
      <h1>Dados do usuário</h1>
      {user ? (
        <>
          <div className={style.userInfomation}>
            <p>Nome: {user.name}</p>
            <p>Apelido: {user.nickName}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.telephone}</p>
            <p>Cidade: {user.city}</p>
            <p>Estado: {user.state}</p>
            <button className={style.button} 
              onClick={()=>{
                dispatch(setEdit(true));
                navigate("/");
              }}
            >Editar</button>
          </div>
        </>
      ) : (
        <p>Os dados do usuário não estão dispóníveis.</p>
      )}
    </div>
  );
}
