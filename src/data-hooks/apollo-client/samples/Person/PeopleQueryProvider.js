/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import React from 'react';
import PropTypes from 'prop-types';
import PersonFolio  from '../../../../react/examples/PersonFolio/PersonFolio';
import ApolloClientQueryProvider from '../../core/ApolloClientQueryProvider';
import { useGetPersons } from '../../queries/PersonQuery';

const PeopleQueryProvider = ({ configuration }) => {

  const { data } = useGetPersons();
  const personToRender = (<>{data && data.persons.map(person => (
    <PersonFolio firstname={person.firstname} surname={person.surname} age={person.age}/>
   ))}</>);

  if (!data) return <></>;

  return (
    <ApolloClientQueryProvider configuration={configuration}>
      {personToRender}
    </ApolloClientQueryProvider>
  );

};

PeopleQueryProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
};

export default PeopleQueryProvider;
