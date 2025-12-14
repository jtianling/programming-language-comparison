begin
  raise StandardError, "错误"
rescue StandardError => e
  puts "捕获: #{e.message}"
end