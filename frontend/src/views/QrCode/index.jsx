import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Qr from "qrcode.react";
import * as S from "./styles";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Qrcode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    await localStorage.setItem("@todo/macaddress", mac);
    setRedirect(true);
    window.location.reload();
  }

  return (
    <>
      <S.Container>
        {redirect && <Redirect to="/" />}
        <Header />
        <S.Content>
          <h1>CAPTURE O QRCODE PELO APP</h1>
          <p>suas atividades serão sicronizadas com a do seu celular.</p>
          <S.QrCodeArea>
            <Qr value="getmacaddress" size={200} />
          </S.QrCodeArea>
          <S.ValidationCode>
            <span>Digite a numeração que apareceu no seu celular</span>
            <input
              type="text"
              onChange={(e) => setMac(e.target.value)}
              value={mac}
            />
            <button type="button" onClick={SaveMac}>
              SICRONIZAR
            </button>
          </S.ValidationCode>
        </S.Content>

        <Footer />
      </S.Container>
    </>
  );
}

export default Qrcode;
