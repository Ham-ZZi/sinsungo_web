import React, {useState} from "react";
import {ScreenCapture} from 'react-screen-capture';
import Popup from "reactjs-popup";
import "./Basket.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import DietCard from "./Diet/DietCard";
import BasketAddButton from "./BasketAddButton";
import BasketList from "./BasketList";
import { MdClose, MdInsertPhoto } from "react-icons/md";
import share_icon from "../../assets/kakao_small_btn.png"

const WhiteBoxBasket = styled(WhiteBox)`
  height: 765px;
`;
const BasketTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #C9C9C9;

  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;
const DietBlock = styled.div`
  overflow-y: auto; //스크롤
  padding: 10px 20px;
`;
const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const ShareButton = styled.button`
  border: none;
  background: none;
  outline: none;
`;

const Basket = () => {

  const [screenCapture, setScreenCapture] = useState("");
  const [open, setOpen] = useState(false);

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture);
    openModal();
  }; //캡쳐가 끝나면 캡쳐한 사진이 보이는 팝업 생성
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    setScreenCapture("");
  };
  const download = () => {
    const screenCaptureSource = screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'screen-capture.png'; //파일 저장이름 설정
    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (

    <basket>
      <div className="basket__container">
        <div className="fridge__cards">
          {/*식단*/}
          <div className="diet">
            <WhiteBoxBasket>
              <BasketTitle>
                <div className="icon-diet"/>
                <h2>식단</h2>
                <Spacer/>
                <BasketAddButton type="diet"/>
              </BasketTitle>
              <DietBlock>
                <DietCard/>
              </DietBlock>
            </WhiteBoxBasket>
          </div>
          {/*//스크린 캡쳐 기능 추가*/}
          <ScreenCapture onEndCapture={handleScreenCapture} >
            {({onStartCapture}) => (
              <>
                <div className="shopping_list">
                  <WhiteBoxBasket>
                    <BasketTitle>
                      <h2>장보기 목록</h2>
                      <BasketAddButton type="list"/>
                      <Spacer/>
                      <ShareButton onClick={onStartCapture}>
                        <div className="icon-share"/>
                      </ShareButton>

                    </BasketTitle>
                    <IngredientBlock>
                      <BasketList type="list"/>
                    </IngredientBlock>
                  </WhiteBoxBasket>
                </div>
                <Popup open={open} modal closeOnDocumentClick>
                  <div className="modal">
                    <div className="modal__header">
                      <h2>장보기 목록 공유</h2>
                      <button onClick={closeModal}><MdClose/></button>
                    </div>
                    <div className="modal__body">
                      <div className="image__container">
                        <img src={screenCapture} alt="screen capture"/>
                      </div>
                    </div>
                    <div className="modal__footer">
                      <button onClick={download}>
                        <div className="down_img"><MdInsertPhoto/></div>
                      </button>
                      <div>
                        <img src={share_icon} alt="카카오톡 공유"/>
                      </div>
                    </div>
                  </div>
                </Popup>
              </>
            )}
          </ScreenCapture>


        </div>
      </div>
    </basket>
  );
}

export default Basket;