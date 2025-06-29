
>[!summary]
A basis is our lowest amount of vectors to builds coordinates in a space and changes the way you view vectors in a space.
>
**Requirements of a Basis:**
>-  All vectors are linearly independent ([[Linear Independence]])
>- [[Span]] the space (Have enough vectors to map a space) 

>[!info]+ Read Time
**⏱ 5 mins**

# What Is a Basis
 A basis is the lens of which you view a space. It's a "recipe book" of the lowest amount of vector to build coordinates in a space. A basis changes the way you view vectors in a space. 

>[!info] Requirements of a Basis
>- All vectors are linearly independent ([[Linear Independence]])
>- [[Span]] the space (Have enough vectors to map a space)

You can argue these requirements makes sense, in order to create any possible vector in a space like $\mathbb{R^2}$ you would need vectors who are not [[Linear Combinations]] (Since this would fail at mapping any vector)

As well spanning the space would, can be argued. In the case of $\mathbb{R^2}$ you would need two vectors to span that space, who are linearly independent (from the first requirement)


>[!example] Basis of $\mathbb{R^2}$ 
For a basis of $\mathbb{R^2}$ it would have to be composed of a set of vectors like $B = \{ \vec{v_1}, \vec{v_2} \}$
>
A simple example which doesn't distort our lens of $\mathbb{R^2}$ is something like $$x = \left\{ \begin{bmatrix} 1 \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \end{bmatrix} 
\right\}$$
This satisfies both requirements since the span of this vector set would satify $\mathbb{R^2}$ and all vectors are linearly independent

## Proving a Basis
The general requirements for proving basis is argued above (not using math), but we can show a proof of this in an example below.

>The example below is adapted from a example in An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of steps.

Suppose we had a set x, and we wanted to prove this was a basis of $\mathbb{R^2}$
$$C = \left\{ \begin{bmatrix} -1 \\ 2 \end{bmatrix},\begin{bmatrix} 1 \\ 1 \end{bmatrix} 
\right\}$$
We know since were proving it to be in $\mathbb{R^2}$ it must be contained only two vectors and vectors who are linearly independent.

>[!warning] Assumptions for checking span
We will assume the vector equation from [[Span]] to be true:
>
$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$
>
Where we will let $\vec{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} \in \mathbb{R^2}$ in order to check if the span $\in \mathbb{R^2}$

$$\begin{array}{c}
\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = c_1 \begin{bmatrix} -1 \\ 2 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ 1 \end{bmatrix} \\ \\

\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -c_1 + c_2 \\ 2c_1 + c_2 \end{bmatrix} \\

\\

(1) \quad -c_1 + c_2 = x_1 \\ 
(2) \quad 2c_1 + c_2 = x_2 \\ \\ \text{Solve for $c_1, c_2$ in terms of $x_1, x_2$ to prove span} \\ \\ 
(1) - (2) \\ 
-3c_1 = x_1 - x_2 \\ 
(3) \quad c_1 = \frac{1}{3}
(x_1 + x_2 ) \\ \\

(3) \Rightarrow (1) \\ 
c_2 = x_1 + \frac{1}{3}
(x_1 + x_2 ) \\ 
c_2 = \frac{1}{3}(2x_1 + x_2) \\ \\ 

\text{Sub $c_1,c_2$ into out vector equation} \\ \\

\frac{1}{3}
(x_1 + x_2 ) \begin{bmatrix} -1 \\ 2 \end{bmatrix} + \frac{1}{3}(2x_1 + x_2) \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}

\\\\
\text{Therefore this spans $\mathbb{R^2}$}

\end{array}$$


>[!warning] Assumptions for Linear Independence 
To check for linear independence, we will assume the general equation from [[Linear Independence]]:
>
$c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$
Where we will assume the $\vec{0} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
 If the equation is satisfied only when all scalar must be 0 then it is linear independent.

$$\begin{array}{c}
\begin{bmatrix} 0 \\ 0 \end{bmatrix} = c_1 \begin{bmatrix} -1 \\ 2 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ 1 \end{bmatrix}  \\ 
\\
\begin{bmatrix} 0 \\ 0 \end{bmatrix}  = \begin{bmatrix} -c_1 + c_2 \\ 2c_1 + c_2\end{bmatrix} \\

\\
\text{Expand and solve vector eqations} \\ 
(1) \quad 0 = -c_1 + c_2 \\ 
(2) \quad 0 = 2c_1 + c_2  \\ 

\\ (1) - (2)  \\ 
0 = -3c_1 \\ 
0 = c_1 \\\\

\text{Its implied that if $c_1 = 0$ then $c_2 =0 $ for it to work in equation (1)} \\ \\
\text{Therefore this is linearly independent}
\end{array}$$

## Finding Coordinates With Respect To a basis
If we were in the $\mathbb{R^2}$  plane and we were in our "normal" basis for $\mathbb{R^2}$ like the following basis
$$x = \left\{ \begin{bmatrix} 1 \\ 0 \end{bmatrix},\begin{bmatrix} 0 \\ 1 \end{bmatrix} 
\right\}$$
and we make a measurement our vector can be described from a vector equation like
$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$ from [[Span]]. Our scalars would be some number.

When we now map that same vector with respect to another basis those scalar would change in result of a new basis, but the outcome should result in the same vector.

>The example below is adapted from a example in An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of steps.

From our basis we have a measurement of $\vec{x} = \begin{bmatrix} 4 \\ 1 \end{bmatrix}$ (At the start of this section) and we want to **find the scalars** that map **this vector in respect to a new basis**:
$$C = \left\{ \begin{bmatrix} -1 \\ 2 \end{bmatrix},\begin{bmatrix} 1 \\ 1 \end{bmatrix} 
\right\}$$

>[!warning] Assumptions for checking span
We will assume the vector equation from [[Span]] to be true:
>
$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$
>
Where we will let $\vec{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} \in \mathbb{R^2}$ to find the scalars and assume we know this basis $\in \mathbb{R^2}$

$$\begin{array}{c}
\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = c_1 \begin{bmatrix} -1 \\ 2 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ 1 \end{bmatrix} \\ \\

\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -c_1 + c_2 \\ 2c_1 + c_2 \end{bmatrix} \\

\\

(1) \quad -c_1 + c_2 = x_1 \\ 
(2) \quad 2c_1 + c_2 = x_2 \\ \\ \text{Solve for $c_1, c_2$ in terms of $x_1, x_2$ to prove span} \\ \\ 
(1) - (2) \\ 
-3c_1 = x_1 - x_2 \\ 
(3) \quad c_1 = \frac{1}{3}
(x_1 + x_2 ) \\ \\

(3) \Rightarrow (1) \\ 
c_2 = x_1 + \frac{1}{3}
(x_1 + x_2 ) \\ 
c_2 = \frac{1}{3}(2x_1 + x_2) \\ \\

\text{Assume $\vec{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} $ so $\begin{bmatrix} 4 \\ 1 \end{bmatrix} =\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} $} \\

\\ c_1 = \frac{1}{3}
(-4 + 1 ) = 1 \\ 
c_2 = \frac{1}{3}(2(4) + (1)) = 3
\end{array}$$

Notice that our scalars still map the same vector


---

📂 Want to see more structured notes like these?  
Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter).

---
