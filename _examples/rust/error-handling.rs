fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("除数为零".to_string())
    } else {
        Ok(a / b)
    }
}