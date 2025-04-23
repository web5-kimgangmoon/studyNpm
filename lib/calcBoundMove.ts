export default function (
  current: number,
  next: number,
  min: number,
  max: number
) {
  const gap = max - min + 1;
  const distance = Math.abs(current - next);
  if (distance < gap / 2) return [next, distance];

  const p1 = Math.abs(current - (next - gap));
  const p2 = Math.abs(current - (next + gap));

  if (p1 < p2 && p1 < distance) return [next - gap, p1];
  if (p2 < p1 && p2 < distance) return [next + gap, p2];
  return [next, distance];
}

// chatgpt 답변

// export default function (
//   current: number,
//   next: number,
//   min: number,
//   max: number
// ) {
//   const range = max - min + 1;
//   let rawDistance = next - current;

//   // 거리 조정 (순환을 고려해서 최단 거리로 변환)(시계를 생각하자)
//   let shortest = ((rawDistance + range / 2) % range + range) % range - range / 2;
//   가장 짧은 거리 = ((거리 + 전체 거리의 반))

// 1. 거리와 전체 거리의 반을 더해주고 그 나머지를 구하면 자동으로 짧은 거리를 얻을 수 있다.(예: 350%360=350이지만, (350+180)%360=170이며 이후 연산으로 반값을 빼주면 170-180=-10. 1~360까지며 10=>360을 계산하면 값이 맞아떨어진다.)
// 2. range를 더해주면, 자동으로 그 값은 양수가 된다.(여기서 더해지는 값은 나머지 연산을 통해 한 번 회전한 값이 되며, 사실상 제자리로 값이 돌아간다.)
// 3. 범위의 반 값을 빼주면 이전에 반 돌렸던 것을 제자리로 되돌리는 셈이 된다.

//   const closest = current + shortest;
//   return [closest, Math.abs(shortest)];
// }
