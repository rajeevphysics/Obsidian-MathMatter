

# Deriving Discontinuous & continuous Limits
Suppose, for example, we want to know the value of this function ($f(x)=x^2$) approaches as it approaches $x=2$. We can approach the value of $f(2) = x^2$ from the top and bottom. We want to know the behaviour or the value of $f(x)$ as you approach this point.  

![[lim_3.png | 400]]
>[!note] Explanation
The limit of our function $x^2$ as you approach a point $x = 2$ from the top and bottom.

To determine the behaviour near and at a point, we will do the following:
$$\begin{array}{c}
\text{Limit from the left}\\
\lim_{x \to 2^+} (x^2)\\\\

\text{Limit from the right} \\ 
\lim_{x \to 2^-} (x^2) \\ 

\end{array}$$
Determining the behaviour in these two directions allows us to determine the behaviour of a function as it approaches and reaches a point.

**In the example above**, the limit **as we approached the point from the right would result in the following:**

$$
\begin{array}{c}
\lim_{ x \to 2^+} (x^2) = 4  \\
\lim_{x \to 2^-} (x^2) = 4
\end{array}
$$

> [!bug] Note
A limit is as you **approach** a point, never touching it. So we need to check the function at the point as well.
> 
> $$
f(2) = (2)^2 =4
> $$

Mathematically, we can see the limit from the left and right, and the function at the point is the same. These lines up with our graph as well.

So we can now say with certainty that the limit as you approach **and** reach $x=2$ is $4$ or mathematically:
$$
\lim_{ x \to 2} (x^2) =4
$$

---

In another example, we have two lines that both reach two different values at $x =2$. The left line reaches a hole, while the right line reaches a defined point, as described below.

![[lim_4.png]]
>[!note] Explanation
Example of a **discontinuous limit**, red lines show our limit from the left and right as you approach 2

In the example above, when we perform our limits from the left and right:

$$\begin{array}{c}
\lim_{x \to 2^-} 2x = 4
\\\\
\lim_{x \to 2^+} x+1 = 3 \\ 
\end{array}$$

Mathematically, we can see that the limits from the left and right are different. Which lines up with what we see on the graph.  However, before we make a conclusion, we need to check the function at 2.

$$
f(x^2) = 3
$$
These limits from the left and right are different, and since the function exists we say the limit is discontinuous.  Say the limit does not exist since the left and right are the same, even though the function exists at $x=2$

$$
\lim_{x \to 2} \Rightarrow \text{Does Not Exist }
> $$

The limit as we approach 2 does not exist graphically because there is a hole at 2.

## Generalization
We can generalize the solution for our limits depending on key characteristics.

$$\begin{array}{c} 
\displaystyle \lim_{x \to h^-} f(x) = a \\
\displaystyle \lim_{x \to h^+} f(x) = b \\
f(x) = c\\
\\
\text{If $a=b=c$ then and only then:}
\\
\displaystyle \lim_{x \to h} f(x) = a = b =c
\\

\text{If this is true then the limit is countinous} \\ \\

\text{If $a\neq b$ and f(x) exist then}\\ \displaystyle \lim_{x \to h} f(x) \Rightarrow \text{DNE}\\
\text{We call this discontinous limit}
\end{array}$$

