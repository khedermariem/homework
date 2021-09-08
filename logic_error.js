
function trimWord(word) {
    return word.trim();
  }
  
  function getWordLength(word) {
    return console.log(getWordLength.length);
    ;
  }
  
  function multiply(a, b, c) {
    a * b * c;
    return;
  }
  
  /* ======= TESTS - DO NOT MODIFY ===== */
  
  function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }
  
    console.log(`${test_name}: ${status}`)
  }
  
  test("fixed trimWord function", trimWord("  CodeYourFuture ") === "CodeYourFuture")
  test("fixed wordLength function", getWordLength("A wild sentence appeared!") === 25)
  test("fixed multiply function", multiply(2,3,6) === 36)