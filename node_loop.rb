loop do
  output = `node main.js`
    puts "executing"
  p output
  sleep(10)
  puts "restarting"
end
