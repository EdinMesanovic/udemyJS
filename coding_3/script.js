let dol_1 = 130,
  dol_2 = 108,
  dol_3 = 89;
let koa_1 = 130,
  koa_2 = 91,
  koa_3 = 106;

const avgdol = (dol_1 + dol_2 + dol_3) / 3;
const avgkoa = (koa_1 + koa_2 + koa_3) / 3;

console.log(avgdol, avgkoa);

if (avgdol > avgkoa && avgdol >= 100) {
  console.log("tim dol je pobjednik!!");
} else if (avgkoa > avgdol && avgkoa >= 100) {
  console.log("tim koa je pobjednik");
} else if (avgkoa === avgdol && avgdol >= 100 && avgkoa >= 100) {
  console.log("nerijeseno");
} else {
  console.log(
    "timovi nisu imalo preko 100 bodova tako da niko nije ostvario nagradu!!"
  );
}
