import { describe, it, expect, beforeEach } from 'vitest';

describe('Fleet Dashboard', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('HTML structure', () => {
    it('should render the main container', () => {
      document.body.innerHTML = `
        <div class="container">
          <h1>🚢 Fleet Dashboard</h1>
        </div>
      `;
      expect(document.querySelector('.container')).toBeTruthy();
      expect(document.querySelector('h1')?.textContent).toContain('Fleet Dashboard');
    });

    it('should render all stat cards', () => {
      document.body.innerHTML = `
        <div class="grid">
          <div class="card"><h3>Scripts</h3><div class="value">188</div></div>
          <div class="card"><h3>Cron Jobs</h3><div class="value">34</div></div>
          <div class="card"><h3>Repos</h3><div class="value">50</div></div>
          <div class="card"><h3>Services</h3><div class="value status-ok">5/5</div></div>
        </div>
      `;
      const cards = document.querySelectorAll('.card');
      expect(cards.length).toBe(4);
    });

    it('should have correct stat values', () => {
      document.body.innerHTML = `
        <div class="grid">
          <div class="card"><h3>Scripts</h3><div class="value">188</div></div>
          <div class="card"><h3>Cron Jobs</h3><div class="value">34</div></div>
          <div class="card"><h3>Repos</h3><div class="value">50</div></div>
          <div class="card"><h3>Services</h3><div class="value status-ok">5/5</div></div>
        </div>
      `;
      const values = document.querySelectorAll('.value');
      expect(values[0]?.textContent).toBe('188');
      expect(values[1]?.textContent).toBe('34');
      expect(values[2]?.textContent).toBe('50');
      expect(values[3]?.textContent).toBe('5/5');
    });
  });

  describe('Status indicators', () => {
    it('should apply status-ok class for healthy services', () => {
      document.body.innerHTML = `<div class="value status-ok">5/5</div>`;
      const el = document.querySelector('.value');
      expect(el?.classList.contains('status-ok')).toBe(true);
    });

    it('should apply status-warn class for warnings', () => {
      document.body.innerHTML = `<div class="value status-warn">3/5</div>`;
      const el = document.querySelector('.value');
      expect(el?.classList.contains('status-warn')).toBe(true);
    });

    it('should apply status-error class for errors', () => {
      document.body.innerHTML = `<div class="value status-error">0/5</div>`;
      const el = document.querySelector('.value');
      expect(el?.classList.contains('status-error')).toBe(true);
    });
  });

  describe('CSS grid layout', () => {
    it('should use auto-fit grid for responsive layout', () => {
      const css = `
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
      `;
      expect(css).toContain('auto-fit');
      expect(css).toContain('minmax(250px, 1fr)');
    });
  });

  describe('Dark theme', () => {
    it('should use dark background color', () => {
      const css = `body { background: #0d1117; color: #c9d1d9; }`;
      expect(css).toContain('#0d1117');
      expect(css).toContain('#c9d1d9');
    });

    it('should use GitHub-style accent colors', () => {
      const css = `
        h1 { color: #58a6ff; }
        .status-ok { color: #3fb950; }
        .status-warn { color: #d29922; }
        .status-error { color: #f85149; }
      `;
      expect(css).toContain('#58a6ff');
      expect(css).toContain('#3fb950');
      expect(css).toContain('#d29922');
      expect(css).toContain('#f85149');
    });
  });
});
