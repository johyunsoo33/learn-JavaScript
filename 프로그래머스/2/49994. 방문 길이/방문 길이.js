function solution(dirs) {
    var answer = 0;
    const visited = new Set();
    let x = 0, y = 0;
    
   for (let i = 0; i < dirs.length; i++) {
    let nx = x, ny = y;

    if (dirs[i] === 'U') ny += 1;
    else if (dirs[i] === 'D') ny -= 1;
    else if (dirs[i] === 'R') nx += 1;
    else if (dirs[i] === 'L') nx -= 1;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    visited.add(`${x},${y},${nx},${ny}`);
    visited.add(`${nx},${ny},${x},${y}`);

    x = nx;
    y = ny;
    }
   return visited.size / 2;
}