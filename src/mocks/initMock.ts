export const initMock = async () => {
  const { worker } = await import('@mocks/browser');
  await worker.start();
};
