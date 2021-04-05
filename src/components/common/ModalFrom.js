import React from 'react';
import styled from 'styled-components';
import { MdRestaurant } from "react-icons/md";
import WhiteBox from "./WhiteBox";

const StyledWhiteBox = styled(WhiteBox)`
  height: 250px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 15px ;
`;

const InputBlock = styled.div`
  display: flex;
  align-items: center;
  .icon_input {
    display: flex;
    font-size: 1.2rem;
  }
  .dropdown_amount {
    margin-left: 20px;
    width: 10%;
  }
`;

const StyledInput = styled.input`
  font-size: 0.75rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem ;
  padding-top: 0.5rem;
  margin-left: 10px;
  outline: none;
  width: 100%;
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  .input_title {
    display: flex;
    padding-top: 10px;
    font-size: 15px;
  }
  .input_index {
    display: flex;
    padding-top: 10px;
    margin-left: 15px;
    font-size: 10px;
  }
`;
const StyledDropdown = styled.select`
  display: flex;
  font-size: 0.75rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem ;
  padding-top: 0.5rem;
  outline: none;
`;

const ModalFrom = () => {
  return (
    <>
      <StyledWhiteBox>
        <form>
          <label>
            <FormTitle>
              <div className="input_title">재료</div>
              <div className="input_index">필수 입력 사항</div>
            </FormTitle>
            <InputBlock>
              <div className="icon_input"><MdRestaurant/></div>
              <StyledInput autoComplete="name" name="name" placeholder="재료명을 입력해주세요."/>
            </InputBlock>

            <FormTitle>
              <div className="input_title">수량</div>
              <div className="input_index">필수 입력 사항</div>
            </FormTitle>
            <InputBlock>
              <div className="icon_input"><MdRestaurant/></div>
              <StyledInput autoComplete="amount" name="amount" placeholder="수량을 입력해주세요."/>
              <div className="dropdown_amount">
                <StyledDropdown>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="L">L</option>
                  <option value="ml">ml</option>
                </StyledDropdown>
              </div>

            </InputBlock>


            <FormTitle>
              <div className="input_title">날짜</div>
              <div className="input_index">필수 입력 사항</div>
            </FormTitle>
            <InputBlock>
              <StyledDropdown>
                <option value="date">유통기한</option>
                <option value="deadline">남은기한</option>
              </StyledDropdown>
            </InputBlock>
          </label>
        </form>
      </StyledWhiteBox>
    </>
  );
}

export default ModalFrom;

