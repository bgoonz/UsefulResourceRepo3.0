async function test() {
  // No unhandled rejection!
  await Promise.reject(new Error('test'));

  return true;
}

test().catch(error => { console.log(error); })