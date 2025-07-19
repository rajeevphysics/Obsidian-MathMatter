
> [!summary]
The binomial theorem is a generalized equation to expand $(x+y)^n$
> 
**Key Equation:**
> 
Binomial Theorem:
$(x+y)^n=\displaystyle \sum_{k=0}^n \binom{n}{k}x^{n-k}y^k$

>[!info]+ Read Time
**⏱ 5 mins**

# Definition  
The binomial theorem is a formula for determining how to expand $(x+y)^n$. It's useful in the mathematical branches of physics and mathematics. This formula provides the expansion as a sum of terms involving $x$ and $y$, along with their coefficients, known as the binomial coefficients. 

# Combinatorial Justification of the Binomial Theorem
To reason out the full formula, take a look at the first five $(x+y)^n$ starting from zero.

$$
\begin{align*}
(x + y)^0 &= 1 x^0 y^0 \\[5pt]
(x + y)^1 &= 1 x^1 y^0 + 1 x^0 y^1 \\[5pt]
(x + y)^2 &= 1 x^2 y^0 + 2 x^1 y^1 + 1 x^0 y^2 \\[5pt]
(x + y)^3 &= 1 x^3 y^0 + 3 x^2 y^1 + 3 x^1 y^2 + 1 x^0 y^3 \\[5pt]
(x + y)^4 &= 1 x^4 y^0 + 4 x^3 y^1 + 6 x^2 y^2 + 4 x^1 y^3 + 1 x^0 y^4 \\[5pt]
(x + y)^5 &= 1 x^5 y^0 + 5 x^4 y^1 + 10 x^3 y^2 + 10 x^2 y^3 + 5 x^1 y^4 + 1 x^0 y^5
\end{align*}
$$

Notice how in each expansion the first terms starts with $x^n$ and the last term has $y^n$ where n is the number of expansion. So we can reason that $(x+y)^n$ starts with $x^n$ then loses an $n$ term giving it to the $y$ term, until all is given to the $y$ term. 

Or it a mathematical sense $(x+y) = \displaystyle \sum_{k=0}^n x^{n-k}y^k$.
But we need to reason out the coefficients in each term as well.

## Binomial Coefficients 
To reason out binomial coefficients well, look at the example for expanding out $(x+y)^3 = (x+y)(x+y)(x+y)$ in the table below, which expands out manually each bracket, notice the resulting term of each choice.
$$

\begin{array}{|c|c|c|c|c|}
\hline
\text{Choice} & \text{From Bracket 1} & \text{From Bracket 2} & \text{From Bracket 3} & \text{Resulting Term} \\
\hline
1 & x & x & x & x^3 \\
2 & x & x & y & x^2 y \\
3 & x & y & x & x^2 y \\
4 & y & x & x & x^2 y \\
5 & x & y & y & x y^2 \\
6 & y & x & y & x y^2 \\
7 & y & y & x & x y^2 \\
8 & y & y & y & y^3 \\
\hline
\end{array}

$$
Notice that there are 3 ways to create $x^2y$ (from choices 2-4) as well as 3 ways to create $xy^2$ (from choices 5-7). 

When we add like terms from our resulting terms, we get $x^3 +3x^2y + 3xy^2 +y^3$ where we could have expressed the coefficients from $x^2y$ and $xy^2$ using [[Combinations|combination]] notion. What would the result look like for this equation
$$\binom{3}{0 }x^3 + \binom{3}{1}x
^2y^1 + \binom{3}{2}x^1y^2 + \binom{3}{3}x^0y^3 
$$
In a general sense, using [[Combinations|combination]] notion makes more sense since it shows the possibility to get that term (or the coefficients when simplified). Sometimes we call this notion the binomial coefficients.

## Generalization  
In a mathematical sense, the general form of the expansion $(x+y)^n$ that takes into account the binomial coefficients and their general term is the following:

$$
(x+y)^n = \displaystyle \sum_{k=0}^n \binom{n}{k}x^{n-k}y^k 
$$

## Proof of Generalization 
> [!warning] Assumptions
To prove the binomial theorem as a [[Mathematical Induction|proof by induction]] assume the following:
> - [[Pascal Identity|Pascal identity]] is $\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}$
> - [[Natural Numbers|Natural number]] start from 0, meaning base case start from 0

$$
\begin{array}{c}
\text{Base case, $n=0$}\\
(x+y)^0 = \displaystyle \sum_{k=0} ^{0} \binom{0}{k}x^ky^k = x^0y^0=1 \\
\\
\text{Assume it hold are $n=m$}\\
(x+y)^m = \displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k}y^{k}\\
\\
\text{Proof it hold for $n=m+1$} \\
\begin{align*}
(x+y)^{m+1} &= (x+y)^m (x+y)\\
&= \displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k}y^{k} (x+y) \\
&=\displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k+1}y^{k} + \displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k}y^{k+1} \quad \text{Expand brackets}
\end{align*}
\\ \\
\text{For the second term let $j=k+1$ so:}\\
\displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k}y^{k+1} = \displaystyle\sum_{j=1}^{m+1} \binom{m}{j-1}x^{m-j+1}y^{j} \\ \\

\end{array}
$$
> [!bug] Note
Rewriting the second term as $j=k+1$ is a dummy index, $j$ has not definition meaning to it. Its just meant to show that we can rewrite the second term.

$$
\begin{align*}
(x+y)^{m+1} &=  \displaystyle\sum_{k=0}^{m} \binom{m}{k}x^{m-k+1}y^{k} + \displaystyle\sum_{k=1}^{m+1} \binom{m}{k-1}x^{m-k+1}y^{k}  \\
\\
&=\binom{m}{0} x^{m+1} + \displaystyle\sum_{k=1}^{m} (\binom{m}{k}+\binom{m}{k-1})x^{m-k+1}y^{k} + \binom{m}{m}y^{m+1}\\
&= \binom{m}{0} x^{m+1} + \displaystyle\sum_{k=1}^{m} \binom{m+1}{k}x^{m- k+1}y^{k} + \binom{m}{m}y^{m+1} \space \text{Pascal idenity} \\
&= \displaystyle\sum_{k=0}^{m+1} \binom{m+1}{k}x^{m- k+1}y^{k}
\end{align*}
\\
$$


# Resources 
<iframe width="560" height="315" src="https://www.youtube.com/embed/dxe6s3K_TGo?si=H6fkeTuomvj9ezq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>