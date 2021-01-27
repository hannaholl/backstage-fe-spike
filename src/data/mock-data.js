export const dashboards = [
  {
    id: 'dash_01DYMV33R6GJK6NT706HNR1X4F',
    title: 'My Company',
    organization_id: 'org_01DYMJEF4PNN38EN7ZVQPSQJ75',
    sharing_hash: null,
  },
  {
    id: 'dash_01DYMV33S3WPQPDC4CVZCAPDWS',
    title: 'My second dashboard',
    organization_id: 'org_01DYMJEF4PNN38EN7ZVQPSQJ75',
    sharing_hash: 'VUDJ68GBKH75JXWO',
  }
];

const instruments = {
  'inst_01DT9E8561FAPFWNZ0XMDWCYV2': {
    id: 'inst_01DT9E8561FAPFWNZ0XMDWCYV2',
    dashboard_id: 'dash_01DYMV33S3WPQPDC4CVZCAPDWS',
    title: 'Space Cargo shipments',
  },
  'inst_01DNSRN0GB43BGTTSQY2E240FN': {
    id: 'inst_01DNSRN0GB43BGTTSQY2E240FN',
    dashboard_id: 'dash_01DYMV33R6GJK6NT706HNR1X4F',
    title: 'Space Cargo value',
  },
};

export const organizations = [
  {
    id: 'org_01DYMJEF4PNN38EN7ZVQPSQJ75',
    legacy_id: 1,
    name: 'Geckoboard',
    created_at: '2017-11-28T17:24:17Z',
  },
  {
    id: 'org_11111',
    legacy_id: 2,
    name: 'Netflix',
    created_at: '2019-06-23T17:24:17Z',
  }
];

const screens = {
  'scrn_01DYMV437JS9KRE9GV03BQPHF4': {
    id: 'scrn_01DYMV437JS9KRE9GV03BQPHF4',
    name: 'London office',
    dashboard_id: 'dash_01DYMV33S3WPQPDC4CVZCAPDWS',
    organization_id: 'org_01DYMJEF4PNN38EN7ZVQPSQJ75',
  },
  'scrn_01DYMY1GP87696FQYXVPPHZACW': {
    id: 'scrn_01DYMY1GP87696FQYXVPPHZACW',
    name: 'New York office',
    dashboard_id: 'dash_01DYMV33R6GJK6NT706HNR1X4F',
    organization_id: 'org_01DYMJEF4PNN38EN7ZVQPSQJ75',
  },
};

const collection = items => ({
  data: Object.values(items),
  total: Object.entries(items).length,
});
