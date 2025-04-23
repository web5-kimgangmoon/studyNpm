export default function (
  current: number,
  next: number,
  min: number,
  max: number
) {
  const gap = max - min + 1;
  const distance = Math.abs(current - next);

  return distance > gap / 2
    ? [
        [next, distance],
        [next - gap, Math.abs(current - (next - gap))],
        [next + gap, Math.abs(current - (next + gap))],
      ].sort((a, b) => {
        return a[1] - b[1];
      })[0]
    : [next, distance];
}
