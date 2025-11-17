# Ruby 使用 Fiber 或第三方库
require 'async'

Async do
  sleep 1
  "数据"
end
