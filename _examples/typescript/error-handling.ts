try {
    throw new Error("错误");
} catch (error) {
    console.error((error as Error).message);
}