import React from "react";
import "./My.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import {MdAdd, MdNotificationsNone} from "react-icons/md";
import Member from "../common/Rightbar/Member/Member";
import {Link} from "react-router-dom";

const WhiteBoxMy = styled(WhiteBox)`
  height: 250px;
  .member_profile {
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 10px;
  }
`;

const MyTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #C9C9C9;
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;
const MenuItemBlock = styled.div`
  display: block;
  justify-content: flex-start;
  color: #393939;
  padding: 20px 0;
  border-radius: 3px;
  border-bottom: 1px solid #C9C9C9;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #3C82D9;
    text-shadow: none;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

const My = () => {
  return (
    <my>
      <div className="my__container">
        <div className="fridge__cards">
          <div className="my__notice">
            <WhiteBoxMy>
              <MyTitle>
                <div className="icon-notice"><MdNotificationsNone/></div>
                <h2>알림</h2>
              </MyTitle>
            </WhiteBoxMy>
          </div>
          <div className="my__member">
            <WhiteBoxMy>
              <MyTitle>
                <h2>신선고 멤버 추가하기</h2>
                <Spacer/>
                <div className="plus"><MdAdd/></div>
              </MyTitle>
              <div className="member_profile">
                <Member type="my"/>
              </div>

            </WhiteBoxMy>
          </div>
        </div>
        {/*메뉴*/}
        <div className="my_menu">
          <div className="my_title">
            마이페이지
          </div>
          <div className="bar_title">
            공지사항
          </div>

          <div className="my_menu_bar">
            <MenuItemBlock>
              <Link to='/my'>공지사항</Link>
            </MenuItemBlock>
            <MenuItemBlock>
              <Link to='/'>로그아웃</Link>
            </MenuItemBlock>
            <MenuItemBlock>
              회원탈퇴
            </MenuItemBlock>
          </div>
        </div>
      </div>
    </my>
  );
}

export default My;