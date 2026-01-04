;; 创建数组
(defvar numbers (make-array 5 :initial-contents '(1 2 3 4 5)))

;; 访问元素
(aref numbers 0)  ;; 1

;; 修改元素
(setf (aref numbers 0) 10)

;; 列表（更常用）
(defvar items '(1 2 3 4 5))
(push 0 items)  ;; 添加到开头
