import styled from "styled-components";

export const HeaderWrapper = styled.div`
  color: #222;
  .wrapper {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .right-icon {
    margin-left: 20px;
    height: 100%;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`
