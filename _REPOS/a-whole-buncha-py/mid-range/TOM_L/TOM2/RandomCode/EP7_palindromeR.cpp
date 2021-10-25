// to compile  use g++ -c EP7_palindromeR.cpp && g++ -o palindromeR EP7_palindrome.cpp

#include <iostream>
#include <string>

using namespace std;

bool isPalindrome(string s);
int main()
{
        string test;
        cout << "Type in a word or phrase to see if it is a palindrome: ";
        getline(cin, test);
        if (isPalindrome(test))
                cout << test << " : is a palindrome!" << endl;
        else
                cout << test << " : is not a palindrome!" << endl;
        return 0;
}

bool isPalindrome(string s)
{
        if (s.length() <=1)
                return true;

        return (s[0] == s[s.length() - 1] && isPalindrome(s.substr(1, s.length() - 2)));
}
