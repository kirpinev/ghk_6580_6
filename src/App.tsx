import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image1 from "./assets/1.png";
import image9 from "./assets/9.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { useState } from "react";
import { Status } from "@alfalab/core-components/status";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag("event", "6580_get_sub", {
      variant_name: "6580_6",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={image1}
          alt="Картинка Альфа-Смарт"
          style={{ borderRadius: "16px" }}
        />

        <Gap size={16} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Typography.Title tag="h1" view="small">
            Вместе выгоднее
          </Typography.Title>
          <Status view="muted" color="grey" uppercase={false} size={24}>
            Новое
          </Status>
        </div>

        <Gap size={16} />

        <Typography.Text>
          Добавляйте родных и друзей в группу, чтобы получить повышенный кэшбэк
        </Typography.Text>

        <Gap size={40} />

        <Typography.Title tag="h1" view="xsmall">
          Вы получите с близким
        </Typography.Title>

        <Gap size={16} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            backgroundColor: "#F8F8F8",
            padding: "16px",
            borderRadius: "16px",
          }}
        >
          <img src={image9} alt="" height={35} />
          <Typography.Text view="primary-small">
            +1 категория кэшбэка каждый месяц
          </Typography.Text>
        </div>

        <Gap size={40} />

        <Typography.Title tag="h1" view="xsmall">
          Как это работает
        </Typography.Title>

        <Gap size={16} />

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-medium" weight="bold">
              1
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Добавьте близкого
            </Typography.Text>
            <Typography.Text color="secondary" view="primary-small">
              Введите телефон или выберите из контактов
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-large" weight="bold">
              2
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Дождитесь подтверждения
            </Typography.Text>
            <Typography.Text color="secondary" view="primary-small">
              Близкий должен подтвердить запрос
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-large" weight="bold">
              3
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Получайте выгоду вместе
            </Typography.Text>
            <Typography.Text color="secondary" view="primary-small">
              Выгода доступна, пока вы и близкие в группе
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Добавить близкого
        </ButtonMobile>
      </div>
    </>
  );
};
