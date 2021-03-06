import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { inject } from 'mobx-react';
import Media from '../Media';
import Link from '../Link';
import { formatDate } from '../../utils';

const Card = ({ type, id, title, creationDate, featured, context, isNew }) => (
  <Link type={type} id={id} context={context}>
    <Container>
      <Media entity={featured} isRounded />
      <Title>{title}</Title>
      <Info>
        <Fecha>{creationDate}</Fecha>
      </Info>
      {isNew && <New>New</New>}
    </Container>
  </Link>
);

Card.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  featured: PropTypes.shape({}).isRequired,
  context: PropTypes.shape({}).isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default inject(({ theme }, { entity }) => ({
  type: entity.type,
  id: entity.id,
  title: entity.title,
  creationDate: formatDate(new Date(entity.creationDate), 'MMMM Do, H:mm'),
  featured: entity.media.featured,
  isNew: theme.announcements.isNew(entity.id),
}))(Card);

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: calc(100vw - 48px);

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:first-child {
    margin-top: 24px;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin: 0;
  padding-top: 8px;
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
  color: ${({ theme }) => theme.color.blue};
`;

const Info = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  line-height: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkGrey};
`;

const Fecha = styled.p`
  margin: 0;
`;

const New = styled.div`
  box-sizing: border-box;
  height: 24px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  position: absolute;
  top: 8px;
  left: -8px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
