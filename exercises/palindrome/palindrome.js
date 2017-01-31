function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    for (var i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}

var string = "Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!"

console.log(isPalindrome(string));