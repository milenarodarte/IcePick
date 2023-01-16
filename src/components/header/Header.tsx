import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Imgs/icepick_logo.png";
import { userContext } from "../../contexts/userContext/userContext";
import { Button } from "../buttons/button";
import Modal from "../modal/modal";
import { StyledHeader } from "./StyledHeader";
import LoginForm from "../loginForm/loginForm";
import RegisterForm from "../registerForm/registerForm";
import { useModal } from "../../hooks/useModal";
import AddSentenceForm from "../addSentenceForm/AddSentenceForm";

export function Header() {
  const { stateModal, showModal } = useModal();
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.querySelector(".menu");
    document.addEventListener("click", (e: MouseEvent) => {
      if (!element?.contains(e.target as Element)) {
        element?.lastElementChild?.classList.add("hidden");
      }
    });
  }, []);

  function openDropDown(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (e.currentTarget instanceof HTMLElement)
      if (e.currentTarget.className === "menu") {
        e.currentTarget.parentElement?.children[1].children[1].classList.toggle(
          "hidden"
        );
      }
  }

  return (
    <StyledHeader>
      {stateModal && <Modal />}
      <figure>
        <img src={logo} alt="company logo" />
      </figure>
      <div className="div-menu">
        {user ? (
          <>
            <Button
              onClick={() => showModal(<AddSentenceForm />)}
              text="Criar Frase"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
          </>
        ) : (
          <div className="buttons-desktop">
            <Button
              onClick={() => showModal(<LoginForm />)}
              text="Login"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
            <Button
              onClick={() => showModal(<RegisterForm />)}
              className="register"
              text="Cadastrar"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
          </div>
        )}
        <div className="menu" onClick={openDropDown}>
          {user ? (
            <div className="containerImgUser">
              <img src={user?.avatar} alt="user" />
            </div>
          ) : (
            <div className="hamburger">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          )}
          <div className="hidden-menu hidden">
            <div className="drop-down">
              {user && window.location.pathname === "/profile" ? (
                <>
                  {/* P to Button */}
                  <button className="btnDropDown" onClick={() => navigate(-1)}>
                    Voltar
                  </button>
                  <button className="btnDropDown" onClick={logout}>
                    Sair
                  </button>
                </>
              ) : user ? (
                <>
                  <Link to="/profile">Perfil</Link>

                  <button className="btnDropDown" onClick={logout}>
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btnDropDown"
                    onClick={() => showModal(<LoginForm />)}
                  >
                    Login
                  </button>
                  <button
                    className="btnDropDown"
                    onClick={() => showModal(<RegisterForm />)}
                  >
                    Cadastrar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
