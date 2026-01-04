;; Common Lisp 没有内置的 async/await
;; 但支持多线程（使用 bordeaux-threads 库）

;; 示例：使用 bordeaux-threads
;; (ql:quickload :bordeaux-threads)

;; (defun worker ()
;;   (format t "Thread running~%"))

;; (defvar *thread* (bt:make-thread #'worker))
;; (bt:join-thread *thread*)

;; 基本示例（无外部依赖）
(format t "Common Lisp supports threading via libraries~%")
