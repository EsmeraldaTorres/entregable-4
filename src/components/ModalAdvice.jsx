import React, { useEffect } from "react";
import "./styles/ModalAdvice.css";

const ModalAdvice = ({ setAdvice, userName }) => {
  useEffect(() => {
    console.log(userName, "userName");
  }, [userName]);
  const handleFormIsClose = () => {
    setAdvice(false);
  };
  return (
    <div className={`modal-container`}>
      <form className="modal" onSubmit={handleFormIsClose}>
        <header className="modal__header">
          <h2 className="modal__title">Eliminar usuario</h2>
          <div onClick={handleFormIsClose} className="modal__exit">
            X
          </div>
        </header>
        <div>
          El usuario{" "}
          <span className="modal__text__user__name">
            {userName.first_name} {userName.last_name}{" "}
          </span>{" "}
          se ha eliminado
        </div>
        <button className="modal__btn"> Aceptar</button>
      </form>
    </div>
  );
};

export default ModalAdvice;
