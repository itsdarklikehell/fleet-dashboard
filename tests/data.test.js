import { describe, it, expect } from 'vitest';
import { getFleetData, getServiceStatus, formatServiceStatus } from '../js/data.js';

describe('data module', () => {
  it('should return fleet data', () => {
    const data = getFleetData();
    expect(data).toHaveProperty('scripts');
    expect(data).toHaveProperty('cronJobs');
    expect(data).toHaveProperty('repos');
    expect(data).toHaveProperty('services');
  });

  it('should return correct stat values', () => {
    const data = getFleetData();
    expect(data.scripts).toBe(188);
    expect(data.cronJobs).toBe(34);
    expect(data.repos).toBe(50);
    expect(data.services.total).toBe(5);
    expect(data.services.healthy).toBe(5);
  });

  it('should return status-ok when all services healthy', () => {
    expect(getServiceStatus(5, 5)).toBe('status-ok');
  });

  it('should return status-warn when some services unhealthy', () => {
    expect(getServiceStatus(3, 5)).toBe('status-warn');
  });

  it('should return status-error when no services healthy', () => {
    expect(getServiceStatus(0, 5)).toBe('status-error');
  });

  it('should format service status correctly', () => {
    expect(formatServiceStatus({ healthy: 5, total: 5 })).toBe('5/5');
    expect(formatServiceStatus({ healthy: 3, total: 5 })).toBe('3/5');
    expect(formatServiceStatus({ healthy: 0, total: 5 })).toBe('0/5');
  });

  it('should return a copy of fleet data (immutability)', () => {
    const data = getFleetData();
    data.scripts = 999;
    expect(getFleetData().scripts).toBe(188);
  });
});
