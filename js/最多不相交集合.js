// 存在多个集合，求这些集合中不相交的最大个数
// 例： [2,5],[1,3],[2,4],[3,4],[5,6] 中 最多不相交情况为  [1,3],[3,4],[5,6]  3个

//  贪心算法
/**
 * arr:二维数组
 *
 * 假设为开始时间，结束时间
 * 思路1:每次取可选区间时间开始最早的那个 X
 * 思路2：每次取可选区间里时间最短的那个 X
 *
 * 思路3：每次取可选区间内结束时间最早的，删除与他相交的所有区间
 */

let mockArr = [
  [2, 5],
  [1, 3],
  [2, 4],
  [3, 4],
  [5, 6],
];

let mockArr2 = [
  [0, 15],
  [1, 3],
  [5, 8],
  [5, 7],
  [3, 7],
];

getArrCount(mockArr);

function getArrCount(arr) {
  if (arr.length == 0) {
    return 0;
  }
  // 首先按照集合结束的值进行排序
  let sortArr = arr.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log(sortArr);
  let count = 1; //计数变量，至少有1个

  // 只要开始值大于结束值，则这两个集合不相交
  let temp = sortArr[0];
  sortArr.map(item => {
    if (item[0] >= temp[1]) {
      count++;
      temp = item;
    }
  });

  console.log(count);
  return count;
}
