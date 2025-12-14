try:
    raise ValueError("错误")
except ValueError as e:
    print(f"捕获: {e}")