import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"

export default function Header() {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <img src="/images/logos/logo.svg" alt="Website Logo" />
        </Link>
        <MenuWrapper>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              <MenuItem>{item.title}</MenuItem>
            </Link>
          ))}
        </MenuWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, auto);
`
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
`
