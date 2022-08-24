const FAVORITE_COLOR = process.env.COLOR;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("My favorite color is $FAVORITE_COLOR");
    await sleep(5000);
  }
}

main();
