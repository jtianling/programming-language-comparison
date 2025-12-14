func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("除数为零")
    }
    return a / b, nil
}