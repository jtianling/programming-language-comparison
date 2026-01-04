(loop for i from 0 below 5
      do (format t "~A~%" i))

(let ((i 0))
  (loop while (< i 5)
        do (format t "~A~%" i)
           (incf i)))
