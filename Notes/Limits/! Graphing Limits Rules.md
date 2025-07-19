

# Graphing Limits Rules
> [!warning] Assumptions
For interpreting the behaviour of a limit on a graph, assume the following:
> - The limit as you approach from the right is $\displaystyle \lim_{ x \to n^+ } f(x)=a$
> - The limit as you approach from the left is $\displaystyle \lim_{ x \to n^+ } f(x)=b$
> - The function at $n$ is $f(n)=c$
> 
Where $a, b, c$ are defined real values ($a,b,c\in \mathbb{R}$)

## Continuous  Limits
If the limits from the left, right and at the point are all equal, so that $a=b=c$, then the function is **continuous** from the [[! Proof of Discontinuous & Continuous Limits|proof of continuous limits]]. Mathematically, we say this as:

$$
\begin{array}{c}
\displaystyle \lim_{ x \to n }f(x)=a=b =c  \\
f(n)=a=b=c
\end{array}
$$

## Removable Discontinuity Limits
If the limit from the left and right are equal, but the function at the point is defined but not equal to both limits, then the function has a **removable discontinuity**.  Mathematically we say this as:

$$
\begin{array}{c}
\displaystyle \lim_{ x \to n }f(x)=a=b  \\
f(n)\neq a\neq b=c
\end{array}
$$

This is true from the [[! Proof of Removable & Not Removable Limits|proof of removable limits]]

## Not Removable Discontinuity Limits
If the limit from the left and right approach infinity or the function equals infinity, then the function has a non-removable discontinuity. Mathematically we say this as:

$$
\begin{array}{c}
\text{$\displaystyle \lim_{ x \to n }f(x)= \infty$ or $f(n)=\infty$}

\end{array}
$$

This is true from the [[! Proof of Removable & Not Removable Limits|proof of removable limits]]
