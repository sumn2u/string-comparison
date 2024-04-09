# String Comparisons
<span class="badge-npmversion"><a href="https://npmjs.org/package/string-comparisons" title="View this project on NPM"><img src="https://img.shields.io/npm/v/string-comparisons.svg" alt="NPM version" /></a></span>
![npm](https://img.shields.io/npm/dm/string-comparisons)
[![GitHub stars](https://img.shields.io/github/stars/sumn2u/string-comparisons)](https://github.com/sumn2u/string-comparisons/stargazers)
[![GitHub license](https://img.shields.io/github/license/sumn2u/string-comparisons)](https://github.com/sumn2u/string-comparisons/blob/master/LICENCE)
![example workflow](https://github.com/sumn2u/string-comparisons/actions/workflows/static.yml/badge.svg
)

This library provides a versatile collection of functions for calculating the similarity between strings, empowering you to quantify the relatedness of text data in various applications. It implements well-established similarity metrics:

- **Cosine Similarity**
- **Jaccard Similarity**
- **Jaro Similarity**
- **Damerau-Levenshtein Distance**
- **Hamming Distance**
- **Levenshtein Distance**
- **Smith-Waterman Alignment**
- **Sørensen-Dice Coefficient**
- **Jaccard Similarity based on Trigrams**
- **Szymkiewicz Simpson Overlap**


## Installation

Assuming you have Node.js and npm installed, install the library using:

```bash
npm install string-comparisons
```

## Docs
Access the class documentation of each implemented algorithm from [here](https://sumn2u.github.io/string-comparisons/) and find more information on algorithms [here](algorithms.md).

##  String Similarity Algorithm Comparison

| Algorithm              | Normalized | Metric                                  | Similarity | Distance | Space Complexity |
|------------------------|------------|-----------------------------------------|------------|----------|------------------|
| cosine.js              | Yes        | Vector Space Model                      | ✓          |          | O(n)             |
| jaro.js                | No         | Edit Distance                           | ✓          |          | O(min(n, m))     |
| jaccard.js             | No         | Set Theory                              | ✓          |          | O(min(n, m))     |
| damerauLevenshtein.js | No         | Edit Distance                           |            | ✓        | O(max(n, m)²)    |
| hammingDistance.js     | No         | Bitwise Operations                      | ✓          |          | O(1)             |
| jaroWinkler.js         | No         | Edit Distance                           | ✓          |          | O(min(n, m))     |
| levenshtein.js         | No         | Edit Distance                           |            | ✓        | O(max(n, m)²)    |
| smithWaterman.js       | No         | Dynamic Programming (Local Alignment)  | ✓          |          | O(n * m)         |
| sorensenDice.js        | No         | Set Theory                              | ✓          |          | O(min(n, m))     |
| trigram.js             | No         | N-gram Overlap                          | ✓          |          | O(n²)            |
| szymkiewiczSimpsonOverlap.js             | Yes         | Overlap Coefficient                          |  ✓         |          | O(min(m, n))            |

**Explanation of Columns:**

- **Normalized:** Indicates whether the algorithm produces a score between 0 and 1 (normalized).
- **Metric:** The underlying mathematical concept used for comparison.
- **Similarity:** Whether the algorithm outputs a higher score for more similar strings.
- **Distance:** Whether the algorithm outputs a lower score for more similar strings. (One algorithm might use similarity, another distance - they provide the opposite information).
- **Space Complexity:** The amount of extra memory the algorithm needs to run the comparison.

**Notes:**

- ✓ indicates the algorithm applies to that category.
- Some algorithms can be used for both similarity and distance calculations depending on the interpretation of the score.


## Example Usage


```javascript
import StringComparisons from 'string-comparisons';

const { Cosine, Jaccard, Jaro, DamerauLevenshtein, HammingDistance, JaroWrinker, Levenshtein, SmithWaterman, SorensenDice, Trigram } = StringComparisons;

const string1 = 'programming';
const string2 = 'programmer';


console.log('Jaro-Winkler similarity:', JaroWrinker.similarity(string1, string2)); // Output: ~0.9054545454545454
console.log('Levenshtein distance:', Levenshtein.similarity(string1, string2)); // Output: 3
console.log('Smith-Waterman similarity:', SmithWaterman.similarity(string1, string2)); // Output: 16

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

console.log('Sørensen-Dice similarity:', SorensenDice.similarity(set1, set2)); // Output: 0.6666666666666667

const trigram1 = 'hello';
const trigram2 = 'world';

console.log('Trigram Jaccard similarity:', Trigram.similarity(trigram1, trigram2)); // Output: 0 (no shared trigrams)

// so on
```

## Contributing

We encourage contributions to this library! Feel free to fork the repository, make your changes, and submit pull requests.

## Support the Project <a name="support-the-project"></a>⭐

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us get visibility and allow the community to grow. 🙏


## Contact Us
If you have any questions or feedback, please don't hesitate to contact us at sumn2u@gmail.com, or reach out to Suman directly. We hope you find this resource helpful 💜.


## License Information
This project is licensed under the  [MIT](./LICENSE) , which means that you are free to use, modify, and distribute the code as long as you comply with the terms of the license.

## Resources
- [String Similarity Comparision in JS with Examples](https://sumn2u.medium.com/string-similarity-comparision-in-js-with-examples-4bae35f13968)
- [The complete guide to string similarity algorithms](https://yassineelkhal.medium.com/the-complete-guide-to-string-similarity-algorithms-1290ad07c6b7)
