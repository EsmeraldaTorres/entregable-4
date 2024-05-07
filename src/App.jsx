import { useEffect, useState } from "react";

import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import ModalAdvice from "./components/ModalAdvice";

function App() {
  const [userEdit, setUserEdit] = useState();
  const [formIsClose, setFormIsClose] = useState(true);

  const BASEURL = "https://users-crud-entregable-1-node.onrender.com";
  const [
    users,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    advice,
    setAdvice,
    userName,
  ] = useCrud(BASEURL);

  useEffect(() => {
    getUsers("/users/");
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleOpenForm = () => {
    setFormIsClose(false);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__tilte">Usuarios</h1>
        <button onClick={handleOpenForm} className=" form__btn">
          <img src="../images/icons8-más-24.png" className="icon" alt="" />{" "}
          Crear nuevo usuario
        </button>
      </header>
      <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
      />
      {advice && <ModalAdvice setAdvice={setAdvice} userName={userName} />}
      <div className="content__user__cards">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserEdit={setUserEdit}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
