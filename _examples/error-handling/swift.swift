do {
    throw NSError(domain: "error", code: 0)
} catch {
    print("捕获: \(error)")
}
