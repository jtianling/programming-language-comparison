(handler-case
    (/ 10 0)
  (division-by-zero (e)
    (format t "Error: Cannot divide by zero~%")))
