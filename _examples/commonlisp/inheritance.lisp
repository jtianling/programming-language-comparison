(defclass animal ()
  ((name :initarg :name :accessor animal-name)))

(defmethod speak ((a animal))
  (format t "Some sound~%"))

(defclass dog (animal)
  ())

(defmethod speak ((d dog))
  (format t "Woof!~%"))
