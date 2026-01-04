(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age :initarg :age :accessor person-age)))

(defmethod greet ((p person))
  (format t "Hello, ~A~%" (person-name p)))
