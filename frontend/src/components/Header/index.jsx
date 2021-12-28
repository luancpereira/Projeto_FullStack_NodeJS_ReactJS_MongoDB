import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

import api from "../../services/api";
import isConnected from "../../utils/isConnected";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();
  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  async function Logout() {
    localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  }

  useEffect(() => {
    lateVerify();
  });

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Inicio</Link>
        <span className="dividir" />
        <Link to="/task">Nova Tarefa</Link>
        <span className="dividir" />
        {!isConnected ? (
          <Link to="/qrcode">Sicronizar Celular</Link>
        ) : (
          <button type="button" onClick={Logout}>
            Sair
          </button>
        )}

        <span className="dividir" />
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
