
The problem in the code was that we were using special character like "." to be found and replaced with "-" as many times as it appeared. This problem called for regular expressions method of matching characters, which meant that  "." (since it was a special character) needed to be escaped by using the backslash before the "." => '/.'  and instead of quotes I put it into '/ /'. Also, I needed to find all the dots in the text tested, that's why I used the "g" flag, which represented the global search.


https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript