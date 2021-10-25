# def find_rotation_point(words):
# 	if len(words) == 1:
# 		return -1
# 	wordsLength = len(words)
# 	index = wordsLength // 2
# 	indexPt = index - 1
# 	# print(indexPt, "indexPt")
# 	# print(index, "index")
# 	# print(words[indexPt], 'wordsPt')
# 	# print(words[index], 'wordsIndex')
# 	# print(words[:index])
# 	# print(words[index:])
# 	if words[indexPt] > words[index]:
# 		return index # returns index 5 
# 	searchLeft = find_rotation_point(words[:index])
# 	if searchLeft != -1:
# 		return searchLeft
# 	return find_rotation_point(words[index:]) 
	
# print(find_rotation_point(words = [
#     'ptolemaic',
#     'retrograde',
#     'supplant',
#     'undulate',
#     'xenoepist',
#     'asymptote', # <-- rotates here!
#     'babka',
#     'banoffee',
#     'engender',
#     'karpatka',
#     'othellolagkage'
# ]))

# Model solution

# def find_rotation_point(words):
#   for index, word in enumerate(words):
#     if word < words[index - 1]:
#       print(word, index)
#       return words.index(word)

# words = [
#   'ptolemaic',
#   'retrograde',
#   'supplant',
#   'undulate',
#   'xenoepist',
#   'asymptote', # <-- rotates here!
#   'babka',
#   'banoffee',
#   'engender',
#   'karpatka',
#   'othellolagkage',
# ]

# print(find_rotation_point(words))

def find_rotation_point(words):
  first_word = words[0]
  floor_index = 0
  ceiling_index = len(words) - 1
  
  while floor_index < ceiling_index:
    # guess a point halfway between floor and ceiling
    guess_index = (ceiling_index + floor_index) // 2
    # if the guess comes after the first word or is the first word
    if words[guess_index] >= first_word:
      # go right
      floor_index = guess_index
    else:
      # go left
      ceiling_index = guess_index
    
    # check if floor and ceiling indices have converged
    if floor_index + 1 == ceiling_index:
      break
  
  return ceiling_index