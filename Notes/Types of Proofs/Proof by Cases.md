
>[!summary]
Proof by cases applies conditional statements where you create cases in the hypothesis that return to the same conclusion.

>[!info]+ Read Time
⏱ **2 mins**
# Definition
Proof by cases is very similar to [[Types of Proofs/Direct Proof.md|direct proof]] in that it applies [[Logic/Conditional Statements.md|conditional statements]], but the step structure differs slightly:
1. Assume the hypothesis from the proposition is true (**Hypothesis has cases, e.g. Hypothesis is an integer and irrational number**)
2. Then, using definitions, proven results or facts to justify why the conclusion must be true 

The highlighted part of the steps is the difference between proof by cases and [[Types of Proofs/Direct Proof.md|direct proof]]

## Examples
>[!example] Absolute value function for all real numbers x 
For all real numbers x,
> $$
|x| =
\begin{cases}
x, & \text{if } x \ge 0 \\
-x, & \text{if } x < 0
\end{cases}
>$$
**Proof by cases:**
>
Case 1: $x \geq 0$ 
Then the $|x| = x$ by definition 
>
Case 2: $x \leq 0$
Then the $|x| = -x$ by definition, since x is negative and taking the negative of a negative returns positive

---

>[!example] For any [[Integers|integer]] $n, \space n^2$ is even if and only if $n$ is [[Even & Odd Numbers|even]]
>
**Proof by cases:**
>
Case 1: $n$ is even
If n is even, assume $n = 2k$ where k is an integer
>
Then $n^2 = 4k^2$, which will always be even
>
Case 2: $n$ is [[Even & Odd Numbers|odd]]
If n is odd assume $n = 2k + 1$ where k is an integer
>
Then 
>$$ 
\begin{array}{c}
n^2 = (2k+1)^2 = 4k^2 + 4k+1 = 2(2k^2 + 2k ) +1 \\ 
\text{Assume $2k^2 + 2k = m$  where $m$ is also an integer by defintion} \\\\
2(2k^2 + 2k ) +1 = 2m +1
\end{array}
>$$
It is in the form of an odd number, so $n^2$ returns an odd number, proving the statement.


---

📂 Want to see more structured notes like these?  
Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---

