import Start from './Start';

describe('Start', () => {
  it('should render without crashing', () => {
    const el = Start();
    expect(el instanceof HTMLElement).toBe(true);
  });
});