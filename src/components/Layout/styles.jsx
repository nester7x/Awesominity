import styled from "styled-components";
import { Container } from "@mui/material";

export const Wrapper = styled.div`
  background-color: #fbfbfb;
  position: relative;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: auto;
  &.open {
    overflow: hidden;
  }
`;

export const Main = styled.main`
  overflow-y: auto;
  padding: 15px 0 15px;
  width: 100%;
`;

export const MainContainer = styled(Container)`
  height: 100%;
`;
