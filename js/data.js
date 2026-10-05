/**
 * Fleet Dashboard - Statische data module
 * In productie wordt dit vervangen door een API call naar de Fleet Manager backend.
 */

const fleetData = {
  scripts: 188,
  cronJobs: 34,
  repos: 50,
  services: { total: 5, healthy: 5 },
};

export function getFleetData() {
  return { ...fleetData };
}

export function getServiceStatus(healthy, total) {
  if (healthy === total) return 'status-ok';
  if (healthy === 0) return 'status-error';
  return 'status-warn';
}

export function formatServiceStatus(services) {
  return `${services.healthy}/${services.total}`;
}
