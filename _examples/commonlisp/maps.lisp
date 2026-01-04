;; 使用哈希表
(defvar scores (make-hash-table :test 'equal))

;; 添加键值对
(setf (gethash "Alice" scores) 95)
(setf (gethash "Bob" scores) 87)

;; 获取值
(gethash "Alice" scores)  ;; 95

;; 遍历
(maphash (lambda (key value)
           (format t "~A: ~A~%" key value))
         scores)
