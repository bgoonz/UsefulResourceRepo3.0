from string import ascii_letters
class Solution:
    def decodeString(self, s: str) -> str:    
        output = ""
        i = 0
        while i < len(s):
            openings = closings = 0
            j = i
            while j < len(s):
                if s[j] == "[": openings += 1
                if s[j] == "]": closings += 1
                j += 1
                if openings > 0 and openings == closings:
                    break
            output += self.decode(s[i:j])
            i = j
        return output
    
    def decode(self, s):
        # print(f"Decoding {''.join(s)}")
        prefix = count  = ""
        while s[0] in ascii_letters:
            prefix = prefix + s[0]
            s = s[1:]
            if len(s) == 0:
                # print(f"Returning literal {''.join(prefix)}")
                return prefix
        while s[0] != "[":
            count = count + s[0]
            s = s[1:]
        count = int(count)
        return prefix + count * self.decodeString(s[1:-1])
        # print(f"Returning decoded {''.join(return_)}")
        # return return_