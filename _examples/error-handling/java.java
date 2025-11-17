try {
    throw new Exception("错误");
} catch (Exception e) {
    System.err.println(e.getMessage());
}