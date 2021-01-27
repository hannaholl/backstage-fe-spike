import { dashboards, organizations } from './mock-data';

export const useGetOrgs = () => {

  return { data: organizations };
}

export const useGetOrgDetails = orgId => {
  console.log('ADIWOID');
  const org = organizations.find(o => o.id === orgId);
  const orgDashboards = dashboards.filter(dashboard => dashboard.organization_id === orgId);
  return { data: { ...org, dashboards: orgDashboards} };
}
