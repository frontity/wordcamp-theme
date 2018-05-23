import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from '../Link';

const Button = ({ item, icon: Icon, text }) => (
  <Container>
    {item ? (
      <Link type={item.type} id={item.id}>
        <Content>
          <Icon size={20} />
          <Text>{text}</Text>
        </Content>
      </Link>
    ) : null}
  </Container>
);

Button.propTypes = {
  item: PropTypes.shape({}).isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

const Container = styled.div`
  width: ${({ theme }) => theme.size.button};
  height: ${({ theme }) => theme.size.button};
`;

const Content = styled.div`
  box-sizing: padding-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  line-height: 10px;
  text-transform: uppercase;
  font-size: 10px;
`;