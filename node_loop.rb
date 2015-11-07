loop do
  output = `node main.js`
  puts "executing"
  p output
  sleep(180)
  puts "fetching again"
end
