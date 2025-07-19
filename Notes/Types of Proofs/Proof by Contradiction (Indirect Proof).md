
>[!summary]
Proof by contradiction, sometimes called the indirect proof, is a type of proof in which you assume the negation of the proposition to be true, then use logic and steps to disprove your assumption. Hence proving your statement to be true.

>[!info]+ Read Time
⏱ **2 mins**

# Definition 
An indirect proof or proof by contradiction is a type of proof in which we assume the [[Negation|negation]] of the [[Propositions|proposition]] to be true. Then, using logical steps leads to some type of contradiction within a known fact or proven result. 

Often, we use this type of proof in the [[Negation|negation]] of [[Conditional Statements|conditional statements]]. So we assume our hypothesis ($P$) leads to a negation of our conclusion ($\neg Q$). Then we reach a contradiction in our conclusion with our hypothesis. Thus proving that our hypothesis leads to our conclusion. 

## Examples
>[!example] If $n^2$ is even then $n$ is even.
>
Proof by contradiction:
Assume the opposite of the conclusion, so assuming that $n^2$ is [[Even & Odd Numbers|even]] but $n$ is [[Even & Odd Numbers|odd]].
>
If $n$ is odd, then by definition $n = 2k +1$ for k is an [[Integers|integer]] value.
>
Then:
>$$n^2 = (2k+1)^2 = 2(2k^2 + 2k) +1$$
Assuming that $2k^2 + 2k = m$ 
$$2(2k^2 +2k) +1 = 2m +1$$
Which is in the form of the definition of an odd number. This contradicts the beginning of the assumption that $n^2$ is even.
>
Hence proving the statement.

---

>[!example] Show that $\sqrt{2}$ is [[Irrational Numbers|irrational]].
>
>Proof by contradiction:  
>Assume that $\sqrt{2}$ is [[Rational Numbers|rational]] so that there exist two [[Integers]] $a, b$ with no common factor ($\text{gcd(a,b) = 1}$), such that:
>
>$$
\sqrt{2} = \frac{a}{b} \quad \text{where } a,b \in \mathbb{Z}
>$$
>
Using this assumption:
>
>$$
\begin{array}{c}
\sqrt{2} = \frac{a}{b} \\
2 = \frac{a^2}{b^2} \\
a^2 = 2b^2
\end{array}
>$$
>
$a^2$ is even, so let $a = 2k$ for some $k \in \mathbb{Z}$:
>
>$$
\begin{array}{c}
(2k)^2 = 2b^2 \\
4k^2 = 2b^2 \\
2k^2 = b^2
\end{array}
> $$
>
>Then $b^2$ is even, so let $b = 2m$ for some $m \in \mathbb{Z}$:
>
>$$
\begin{array}{c}
2k^2 = 4m^2 \\
k^2 = 2m^2
\end{array}
>$$
>
Now both $a$ and $b$ are divisible by 2, so $\text{gcd}(a,b) \geq 2$, contradicting the assumption that they have no common factors.
>
Therefore, $\sqrt{2}$ is irrational.

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/Kc__ahtaDQU?si=AbSKttL_xXh4PzAH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

📂 Want to see more structured notes like these?  
Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---
