import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  header {
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 23px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    button {
      width: 22px;
      height: 22px;
      border: 0;
      border-radius: 11px;
      color: #fff;
      cursor: pointer;

      &.left {
        position: absolute;
        left: -11px;
        top: -11px;
        background-color: #e07676;
      }

      &.right {
        position: absolute;
        right: -11px;
        top: -11px;
        background: #63f5b0;
      }
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 10px;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;
