import MainProfileStyled from "./mainProfileStyled";
import img from "../../Assets/Imgs/BgMoblie.jpg";
import imgDesktop from "../../Assets/Imgs/BgDesktop.jpg";
import { Button } from "../buttons/button";
import pessoa from "../../Assets/Imgs/pessoa.jpeg";
import SearchInput from "../search/search";
import { userContext } from "../../contexts/userContext/userContext";
import { useContext } from "react";
import { modalContext } from "../../contexts/modalContext/modalContext";
import Modal from "../modal/modal";
import EditForm from "../editForm/editForm";
import FilterSection from "../filter/filter";

const MainProfile = () => {
  const { user } = useContext(userContext);
  const { showModal, closeModal, stateModal } = useContext(modalContext);
  return (
    <>
      {stateModal && <Modal />}
      <MainProfileStyled>
        {window.innerWidth < 500 ? (
          <img className="bg" src={img} alt="backgroundMobile" />
        ) : (
          <img className="bg" src={imgDesktop} alt="bgDesktop" />
        )}
        <div className="containerProfileData">
          <img
            className="profilePicture"
            alt="profilePicture"
            src={user?.avatar}
          />
          <p className="profileParagraph">{user?.username}</p>
          <p className="profileParagraph" id="email">
            {user?.email}
          </p>
          <Button
            text="Atualizar Perfil"
            type="button"
            buttonSize="default"
            buttonStyle="bg-ColorBlue"
            onClick={() => showModal(<EditForm />)}
          />
        </div>
      </MainProfileStyled>
      <FilterSection page="profile" />
    </>
  );
};
export default MainProfile;
