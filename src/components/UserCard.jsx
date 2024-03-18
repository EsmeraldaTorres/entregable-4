import "./styles/UserCard.css";

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm();
  };

  return (
    <article className="user-card">
      <h2 className="name__user__card">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="content__user__card">
        <li className="info__user__card">
          <span className="info__email__user__card">Correo</span>
          <span>{user.email}</span>
        </li>
        <li className="info__user__card">
          <span className="info__birthday__user__card">Birthday</span>
          <span className="content__date__user__card">
            <img
              src="../../images/icons8-regalo-32.png"
              className="icon"
              alt=""
            />{" "}
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className="content__btns">
        <button onClick={handleDelete} className="bg__btn__delete">
          <img
            src="../../images/icons8-basura-64.png"
            className="icon__actions"
            alt=""
          />
        </button>
        <button onClick={handleEdit} className="bg__btn__edit">
          <img
            src="../../images/icons8-editar-50.png"
            className="icon__actions"
            alt=""
          />
        </button>
      </div>
    </article>
  );
};

export default UserCard;
