export function sleep(n) {
  let b = true
  let timestamp = new Date().getTime()
  while (b) {
    if (new Date().getTime() - timestamp > n * 1000) {
      b = false
    } else {
      b = true;
    }
  }
}