async function fetch() {
    await new Promise(r => setTimeout(r, 1000));
    return "数据";
}