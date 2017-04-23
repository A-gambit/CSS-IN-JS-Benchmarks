window.benchMark = function benchMark() {
  const startTime = performance.now();
  document.querySelector('input').click();

  setTimeout(() => {
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Benchmark time: ${endTime - startTime}`);
    }, 0);
  }, 0);
}
