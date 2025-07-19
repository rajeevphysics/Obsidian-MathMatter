
> [!summary]
Mathematical induction is a proof technique to prove that some value $P(n)$ is true for all numbers. 
>
It's done by proving a base case, then showing it counts for some nth number, proving it continues to a specified endpoint or forever.

>[!info]+ Read Time
⏱ **3 mins**

# Definition
Mathematical induction, sometimes called weak induction, is a proof technique to prove that a [[Predicates|predicate]] $P(n)$ (whose domain is the set of all [[Logic/Natural Numbers.md|natural numbers]]) is true for all [[Logic/Natural Numbers.md|natural numbers]] (is true infinitely long) or to a specified set of natural numbers. It follows these steps:
1. (Base case) Prove that $P(n)$ It is true for the lowest number $n$ value, usually at 0. This proof establishes a true statement
2. (Inductive Hypothesis) Assume that $P(k)$ It is true for some random, unknown value of $k$
3. (Inductive step) Prove that $P(k+1)$ is true using logic and definitions, thus proving it continues for a specified number or infinitely long.

Another way to think of the steps is to think of a ladder. 

The base case establishes a ladder on the ground, so we know it can stand on the ground. Then the inductive hypothesis is a check that the ladder continues somewhere along the ladder, and the inductive step proves that it continues forever.

## Examples
>[!example] Sum of [[Logic/Natural Numbers.md|natural numbers]]
(Assume that the set of [[Logic/Natural Numbers.md|natural numbers]] starts from 1)
>
Show that: 
>$$
P(n) = 1+2+\dots +n = \frac{n(n+1)}{2}
>$$
Base case (n =1)
>$$
P(1) = \frac{2}{2} = 1
>$$
Inductive step, assume $n =k$ is true
>$$
P(n) = 1+2+\dots + n = \frac{k(k+1)}{2}
>$$
Now we will prove that $n = k+1$
>$$
\begin{array}{c}
1 + 2+\dots + k + (k+1) = \underbrace{\frac{k (k+1)}{2}}_\text{Inductive step} + (k+1)
\end{array}
> $$
> (Continued below)

>[!bug] Note
We are allowed to make this statement because in the inductive step we assumed that n = k and thus that statement was true.
> 
Now, adding k + 1 is like looking at the height of a ladder 1 step above what we were before. Which can be found by looking at the step before it and the height that we move after that step.

>[!example] Sum of [[Logic/Natural Numbers.md|natural numbers]] continued 
This simplifies to:
>$$ \begin{align}
{\frac{k (k+1)}{2}}+ (k+1) &= {\frac{k (k+1)}{2}}+ \frac{2(k+1)}{2}  \\
&= \frac{k(k+1)2(k+1)}{2} \\ 
&= \frac{k(k+1)2(k+1)}{2} \\ 
&= \frac{(k+2)(k+1)}{2} \\ 
&= \frac{(k+1)(k+1)+1}{2} \\\\
\end{align}
> $$
This is equal to 
> $$
\begin{array}{c}
\frac{k(k+1)}{2} \\ \\
\text{Assume k = k+1} \\
\\
\frac{k(k+1)}{2} = \frac{(k+1)(k+1)+1}{2}
\end{array}
>$$
Thus proving this statement


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidian-MathMatter) with a star and help others learn more easily.

---
