// Remove the async call if you don't require async code
try {
    await main();
} catch (err) {
    console.log(`Uncaught exception: \n\n${err}`);
}

async function main() {
    console.log('This is some cool async stuff');
}
