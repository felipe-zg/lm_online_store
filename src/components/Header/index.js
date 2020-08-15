import React from 'react';

import * as Styled from './styles'

function Header({title, children}) {
  return(
    <Styled.Header>
      <Styled.Content>
        <h2>{title}</h2>
        {children}
      </Styled.Content>
    </Styled.Header>
  )
}

export default Header;
