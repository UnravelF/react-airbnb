import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;
  color: ${props => props.theme.textColor.primary};
  font-size: 14px;
  font-weight: 600;
  .btns {
    display: flex;
    box-sizing: content-box;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.textColor.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      color: #666;
      .top, .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
