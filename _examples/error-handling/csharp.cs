try {
    throw new Exception("错误");
} catch (Exception e) {
    Console.Error.WriteLine(e.Message);
}