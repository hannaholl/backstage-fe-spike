import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetOrgDetails } from '../data/mock-hooks';

const Organization = (props) => {
  const { organizationId } = useParams();
  console.log('organizationId', organizationId);
  const {
  data: {
    name, dashboards
  } } = useGetOrgDetails(organizationId);
  console.log('dashboards', dashboards);
  return (
    <div>
      {name}
    </div>
  );
};

Organization.propTypes = {};

export default Organization;
