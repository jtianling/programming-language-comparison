;; Common Lisp 使用列表来实现类似元组的功能
;; 列表一旦创建，通常不修改（函数式编程风格）

;; 创建一个包含不同类型的列表（类似元组）
(defvar point '(10 20))
(defvar person-tuple '("Alice" 30 "Engineer"))

;; 访问元素
(first point)       ;; 10
(second point)      ;; 20
(nth 0 person-tuple) ;; "Alice"
(nth 1 person-tuple) ;; 30
(nth 2 person-tuple) ;; "Engineer"

;; 使用 destructuring-bind 解构
(destructuring-bind (x y) point
  (format t "x: ~A, y: ~A~%" x y))
