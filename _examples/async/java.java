CompletableFuture<String> future = 
    CompletableFuture.supplyAsync(() -> "数据");
future.thenAccept(System.out::println);