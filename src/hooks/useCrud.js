import { useState } from "react";
import axios from "axios";

const useCrud = (BASEURL) => {
  const [response, setResponse] = useState();
  const [advice, setAdvice] = useState(false);
  const [userName, setUserName] = useState();

  const getApi = (path) => {
    const url = `${BASEURL}${path}`;
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postApi = (path, data) => {
    const url = `${BASEURL}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse([...response, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteApi = (path, id) => {
    const url = `${BASEURL}${path}${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        const user = response.filter((e) => e.id == id);
        console.log(user, "user delete");
        setResponse(response.filter((e) => e.id !== id));
        setAdvice(true);
        setUserName({
          first_name: user[0].first_name,
          last_name: user[0].last_name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateApi = (path, id, data) => {
    const url = `${BASEURL}${path}${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse(response.map((e) => (e.id === id ? res.data : e)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [
    response,
    getApi,
    postApi,
    deleteApi,
    updateApi,
    advice,
    setAdvice,
    userName,
  ];
};

export default useCrud;
