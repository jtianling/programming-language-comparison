;; Common Lisp 使用垃圾回收
;; 内存由运行时自动管理

;; 创建对象
(defvar data (make-list 1000000))

;; 手动触发垃圾回收（通常不需要）
;; (gc)

(format t "Memory is automatically managed~%")
