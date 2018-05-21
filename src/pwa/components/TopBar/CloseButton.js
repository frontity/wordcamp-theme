import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'react-emotion';
import { homeContext } from '../../contexts';
import Link from '../Link';

const CloseButton = ({ previousContextRequested, contextIndex }) =>
  contextIndex ? (
    <Container onClick={previousContextRequested}>Close</Container>
  ) : (
    <Container>
      <Link type="page" id={13} context={homeContext}>
        <A>Close</A>
      </Link>
    </Container>
  );

CloseButton.propTypes = {
  previousContextRequested: PropTypes.func.isRequired,
  contextIndex: PropTypes.number.isRequired,
};

export default inject(({ connection }) => ({
  previousContextRequested: connection.previousContextRequested,
  contextIndex: connection.selectedContext.index,
}))(CloseButton);

const Container = styled.div`
  width: ${({ theme }) => theme.sizes.button};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
