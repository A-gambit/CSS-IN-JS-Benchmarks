window.benchMark = function benchMark() {
  const startTime = performance.now();
  document.querySelector('input').click();

  const endTime = performance.now();
  const syncTime = endTime - startTime;

  setTimeout(() => {
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Benchmark time: ${syncTime}, ${endTime - startTime}`);
    }, 0);
  }, 0);
}
