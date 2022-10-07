# ASSESSMENT 5: Ruby Coding Practical Questions --------------------------------
# MINASWAN ---------------------------------------------------------------------

#*******************************************************************************
#====================🧪 assertEqual test method 🧪 =============================
# I decided to create a custom test method to test all the completed challenges
# I realize I could use RSpec for this, (or not do it at all..) but thought I'd 
# make it interesting and create a method that could test for me.
#*******************************************************************************
def assertEqual(actual, expected, describeTest)
  if actual === expected 
    puts "✅ TEST PASSED ==> 🧪#{describeTest}"
  else 
    puts "❌ FAILED: 🧪#{describeTest}, 
    🤰 expected 👉 '#{expected}', 
    🔴 but got 🤦 '#{actual}'." 
  end
end

#*******************************************************************************
# --------------------1) Create a method that takes in an array of words and a 
# single letter and returns an array of all the words containing that particular
# letter. Use the test variables provided.
#*******************************************************************************

def get_Word_With_Char(arr, ltr); arr.select {|word| word.include?(ltr)} end

#---------------------------||🧪 Test Cases 🧪||--------------------------------
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# Challenege 1, Test 1                    
letter_o = 'o'                                
assertEqual(get_Word_With_Char(beverages_array, letter_o), 
["coffee", "soda water"],                            
'gets words that contain character')             

# Challenege 1, Test 2
letter_t = 't'
assertEqual(get_Word_With_Char(beverages_array, letter_t), 
['tea', 'water', 'soda water'], 
'gets words that contain character')    

#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪gets words that contain character
# ✅ TEST PASSED ==> 🧪gets words that contain character
#-------------------------------------------------------------------------------
#*******************************************************************************
# -------------------2) Create a method that takes in a hash and returns one 
# array with all the hash values at their own index and in alphabetical order. 
# No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
#*******************************************************************************

us_states = { 
  northwest: ['Washington', 'Oregon', 'Idaho'], 
  southwest: ['California', 'Arizona', 'Nevada'], 
  notheast: ['Maine', 'New Hampshire', 'Vermont'] 
}
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

#*******************************************************************************
# --------------------3a) Create a class called Bike that is initialized with a 
# model, wheels, and current_speed. The default number of wheels is 2. The 
# current_speed should start at 0. Create a bike_info method that returns a 
# sentence with all the data from the bike object.
#*******************************************************************************

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


#*******************************************************************************
# -------------------3b) Add the ability to pedal faster and brake. The 
# pedal_faster method should increase the speed by a given amount. The brake 
# method should decrease the speed by a given amount. The bike cannot go 
# negative speeds.
#*******************************************************************************

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
