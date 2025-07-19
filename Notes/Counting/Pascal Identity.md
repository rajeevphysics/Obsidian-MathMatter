
> [!summary]
Pascal's identity is an identity in the Pascal triangle. Any number on the Pascal triangle can be found as the sum of the two numbers directly above it.
> 
**Key equation:**
> 
Pascal Identity:
$\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
In [[Pascal Triangle|Pascal's Triangle]] each number is the sum of the two numbers directly above it. Pascal's identity is the generalization of this notion.

![[pac_1.png]]

## Combinatorial Reasoning 
Using the image above, Pascal's identity can be reasoned out. Suppose we wanted to find the number on the third row, second column. We know it's the sum of the two numbers directly above it. Which are the second row, first column and the second row, second column.

Mathematically, if we wanted to find on the $nth$ row and $kth$ column. It would be the sum of the $nth - 1$ row and $kth-1$ column added with the $nth-1$ row and $kth$ column (building [[Combinations|combinations]] recessively)

$$
\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}
$$
## Proof of Identity 
> [!warning] Assumptions
To prove the equation above as an [[Algebraic Proof|algebraic proof]] assume the following:
> - From [[Combinations|combinations]] the $\binom{n}{k} = \frac{n!}{k!\cdot (n-k)!}$
> - The definition of a [[Factorials|factorial]] is:
>  $$
> n! =
> \begin{cases}
> 1, & \text{if } n = 0 \\
> n \cdot (n-1)!, & \text{if } n > 0
> \end{cases}
>  $$

Prove that $\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}$
$$
\begin{array}{c} \\
\text{Left hand side:} \\
\binom{n}{k} = \frac{n!}{k!\cdot (n-k)!}  \\
 \\
\text{Right hand side:} \\
\binom{n-1}{k-1} = \frac{(n-1!}{(k-1)!\cdot [(n-1)-(k-1)]!}= \frac{(n-1)!}{(k-1)!(n-k)!} \quad (1) \\
\binom{n-1}{k}= \frac{(n-1)!}{(k)!\cdot(n-1-k)!}\quad (2) \\
 \\
\text{Rewrite Right Hand side to align with the denomator on left hand side:} \\  \\

\text{Multiply (1) numerator and denomator by k} \\
\frac{(n-1)!\cdot k}{(k-1)!(n-k)! \cdot k} = \frac{(n-1)! \cdot k}{\underbrace{k(k-1)!}_{k!}(n-k)!}= \frac{(n-1)!\cdot k}{k!(n-k)!} \quad (3) \\
 \\
\text{Multiply (2) numerator and denomator by (n-k)
} \\
\frac{(n-1)!\cdot (n-k)}{(k)!\cdot(n-1-k)!\cdot (n-k)} =\frac{(n-1)!\cdot (n-k)}{k!\cdot\underbrace{(n-k)(n-k-1)!}_{(n-k)!}}= \frac{(n-1)!\cdot (n-k)}{k!\cdot (n-k)!} \quad (4)\\
 \\
\text{Add (3) and (4) and simplify}
\end{array}

$$
$$
\begin{align*}
\frac{(n-1)!\cdot k}{k!(n-k)!} + \frac{(n-1)!\cdot (n-k)}{k!\cdot (n-k)!} &= \frac{(n-1)!\cdot(k+n-k)}{k!\cdot(n-k)!}
\\
&= \frac{(n-1)!\cdot n}{k!\cdot (n-k)!}\\
&= \frac{\overbrace{(n-1)!\cdot n}^{n!}}{k!\cdot (n-k)!} \\
&= \frac{n!}{k!\cdot (n-k)!}

\end{align*}
$$
So left hand side equals right hand side.


