import React from "react";
import Qr from "qrcode.react";
import * as S from "./styles";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Qrcode() {
  return (
    <>
      <S.Container>
        <Header />

        <S.Content>
          <h1>CAPTURE O QRCODE PELO APP</h1>
          <p>suas atividades serão sicronizadas com a do seu celular.</p>
          <S.QrCodeArea>
            <Qr value="getmacaddress" size={200} />
          </S.QrCodeArea>
          <S.ValidationCode>
            <span>Digite a numeração que apareceu no seu celular</span>
            <input type="text" />
            <button type="button">Sicronizar</button>
          </S.ValidationCode>
        </S.Content>

        <Footer />
      </S.Container>
    </>
  );
}

export default Qrcode;
