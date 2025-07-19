
>[!summary]
Proof by contraposition is assuming the negation of our conclusion, and proving our hypothesis is false. 

>[!info]+ Read Time
⏱ **2 mins**
# Definition
Proof by contraposition is the opposite of a [[Direct Proof|direct proof]] in that, instead of proving that our conclusion is true by assuming our hypothesis is true, we assume our conclusion is false and then prove our hypothesis is false ([[Conditional Statements|conditional statements]]).

In other words, we follow these steps:
1. Assume the negation of our conclusion (B)
2. Using logic and definitions, we prove that our hypothesis (A) is false

Or mathematically 
$$\neg B \to \neg A$$
## Examples
>[!example] Claim: If $n^2$ is [[Even & Odd Numbers|even]] then $n$ is even.
>
Proof by contraposition:
If $n^2$ is [[Even & Odd Numbers|odd]] then $n$ is odd
>
Let $n = 2k +1$, where k is an integer, so $n$ is odd by definition 
>
Then:
>$$
n^2 = (2k +1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) +1
>$$
If we let $2k^2 + 2k = m$ where m is also an integer, then by simplification:
>$$
2(2k^2 +2k) +1 = 2m +1
>$$
This by definition, an odd number.
>
We proved $n^2$ if odd than $n$ is odd, so then we proved $n^2$ if $n$ is even.

---

>[!example] Claim: If $ab$ is odd then $a$ and $b$ are odd.
>
Proof by contraposition:
If either $a$ or $b$ are even then $ab$ is even
>
If we let $a$ be even $a = 2k$ where k is an integer
>
Then:
$ab = 2(kb)$ 
>Which is always even (also true if we let $b$ be even)
>
Thus proving our claim


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidian-MathMatter) with a star and help others learn more easily.

---
