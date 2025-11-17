async function fetch(): Promise<string> {
    await new Promise(r => setTimeout(r, 1000));
    return "数据";
}