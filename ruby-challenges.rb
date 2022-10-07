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

# Challenge 1, Test 1                    
letter_o = 'o'                                
assertEqual(get_Word_With_Char(beverages_array, letter_o), 
["coffee", "soda water"],                            
'gets words that contain character')             

# Challenge 1, Test 2
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

def flatten_hash(hash); hash.values.flatten().sort end

#---------------------------||🧪 Test Cases 🧪||--------------------------------
# Challenge 2, Test 1    

us_states = { 
  northwest: ['Washington', 'Oregon', 'Idaho'], 
  southwest: ['California', 'Arizona', 'Nevada'], 
  notheast: ['Maine', 'New Hampshire', 'Vermont'] 
}     

assertEqual(flatten_hash(us_states), 
[
  'Arizona', 
  'California', 
  'Idaho', 
  'Maine', 
  'Nevada',
  'New Hampshire', 
  'Oregon', 
  'Vermont', 
  'Washington'
],                            
'flattens and organizes hash values alphabetically')      

#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪gets words that contain character
# ✅ TEST PASSED ==> 🧪gets words that contain character
# ✅ TEST PASSED ==> 🧪flattens and organizes hash values alphabetically
#-------------------------------------------------------------------------------

#*******************************************************************************
# --------------------3a) Create a class called Bike that is initialized with a 
# model, wheels, and current_speed. The default number of wheels is 2. The 
# current_speed should start at 0. Create a bike_info method that returns a 
# sentence with all the data from the bike object.
#-------------------------------------------------------------------------------
# -------------------3b) Add the ability to pedal faster and brake. The 
# pedal_faster method should increase the speed by a given amount. The brake 
# method should decrease the speed by a given amount. The bike cannot go 
# negative speeds.
#*******************************************************************************
class Bike 
  def initialize model
    @model = model 
    @wheels = 2 
    @current_speed = 0 
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster(val)
    @current_speed += val
  end

  def brake(val)
    @current_speed >= 1 ? @current_speed -= val : @current_speed = 0
    @current_speed < 0 ? @current_speed = 0 : @current_speed
  end
end

#---------------------------||🧪 Test Cases 🧪||--------------------------------
# Create my_bike object from class
my_bike = Bike.new("Trek Bike")

# Pedal Method Tests  =============================                                   
assertEqual(my_bike.pedal_faster(10), 10, 'Pedal Faster')             

assertEqual(my_bike.pedal_faster(18), 28, 'Pedal Faster')

assertEqual(my_bike.pedal_faster(25), 53, 'Pedal Faster') 


# Pedal Method Tests  =============================
assertEqual(my_bike.brake(2), 51, 'Brake') 

assertEqual(my_bike.brake(15), 36, 'Brake') 

assertEqual(my_bike.brake(55), 0, 'Brake') 

# Pedal Method Tests =============================
assertEqual(my_bike.bike_info, 
"The Trek Bike has 2 wheels and is going 0 mph.",                            
'Bike Info') 

my_bike.pedal_faster(12)
assertEqual(my_bike.bike_info, 
"The Trek Bike has 2 wheels and is going 12 mph.",                            
'Bike Info')

#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪gets words that contain character
# ✅ TEST PASSED ==> 🧪gets words that contain character
# ✅ TEST PASSED ==> 🧪flattens and organizes hash values alphabetically
# ✅ TEST PASSED ==> 🧪Pedal Faster
# ✅ TEST PASSED ==> 🧪Pedal Faster
# ✅ TEST PASSED ==> 🧪Pedal Faster
# ✅ TEST PASSED ==> 🧪Brake
# ✅ TEST PASSED ==> 🧪Brake
# ✅ TEST PASSED ==> 🧪Brake
# ✅ TEST PASSED ==> 🧪Bike Info
# ✅ TEST PASSED ==> 🧪Bike Info
#-------------------------------------------------------------------------------