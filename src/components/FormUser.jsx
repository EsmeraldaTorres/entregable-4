import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createUser,
  userEdit,
  updateUser,
  setUserEdit,
  formIsClose,
  setFormIsClose,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(userEdit);
  }, [userEdit]);

  const submit = (data) => {
    if (userEdit) {
      updateUser("/users/", userEdit.id, data);
      setUserEdit();
    } else {
      createUser("/users/", data);
    }
    setFormIsClose(true);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  const handleFormIsClose = () => {
    setFormIsClose(true);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUserEdit();
  };

  return (
    <div className={`form-container ${formIsClose && "form__close"}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <header className="form__header">
          <h2 className="form__title">
            {" "}
            {userEdit ? "Editar usuario" : "Nuevo Usuario"}
          </h2>
          <div onClick={handleFormIsClose} className="form__exit">
            X
          </div>
        </header>
        <label className="form__label">
          <span className="form__field">Nombre</span>
          <input
            className="form__field__value"
            {...register("first_name")}
            type="text"
          />
        </label>
        <label className="form__label">
          <span className="form__field">Apellidos</span>
          <input
            className="form__field__value"
            {...register("last_name")}
            type="text"
          />
        </label>
        <label className="form__label">
          <span className="form__field">Correo</span>
          <input
            className="form__field__value"
            {...register("email")}
            type="email"
          />
        </label>
        <label className="form__label">
          <span className="form__field">Contraseña</span>
          <input
            className="form__field__value"
            {...register("password")}
            type="password"
          />
        </label>
        <label className="form__label">
          <span className="form__field">Cumpleaños</span>
          <input
            className="form__field__value"
            {...register("birthday")}
            type="date"
          />
        </label>
        <button className="form__btn">
          {userEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
