

> [!summary]
A homogeneous linear equation is a linear equation that equals zero.
> 
**Key Equations & Solutions:**
> 
System of homogeneous linear equations:
$A \vec{x}=0$
> 
Solutions:
$\text{rank}(A) = n$ one solution
> 
$\text{rank(A)} < n$ infinite solutions

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
A homogeneous linear equation is a [[Linear Equations|linear equation]] where the solution value is equal to 0. For example, $a_{1}x_{1}+a_{2}x_{2}\dots a_{n}x_{n}=0$ is a homogeneous linear equation. In a [[Matrix Notation|matrix]], a [[Sets|set]] of linear equations is called a homogeneous system with $m$ equations and $n$ unknowns
$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
\vdots \\
0
\end{bmatrix}
$$

This matrix can also be simplified, letting the coefficient matrix be $A$ and the [[Zero Vector|zero vector]] as $\vec{0}$ or 

$$
A\vec{x}=\vec{0}
$$

# Solutions 
The number of possible solutions in a homogeneous linear equation is dependent on the number of variables ($n$) and the [[Rank|rank]] of the matrix ($A$).

If the $\text{rank}(A) = n$, this means that every variable has a [[Leading 1s|pivot]] and the only solution is the **trivial solution** 

$$
\vec{x}=\vec{0}
$$

If the $\text{rank(A)} < n$, there is at least one free variable that you can set to any real number. This means the result is **non-trivial** and there are **infinitely many solutions** 

The solution set of a homogeneous system of $m$ equations and $n$ variables is a [[Subspace|subspace]] of $\mathbb{R}^n$ and is called the **solution space** of a system.

> [!note]- Why does $\text{Rank}(A)<n$ mean infinite solutions
 Take the example $x+2y+3z=0$ and suppose a vector equation is wanted for the solved system. So the matrix of this is 
> 
> $$
\begin{bmatrix}
1 & 2 & 3
> \end{bmatrix}
> \begin{bmatrix}
x \\
y \\
z
> \end{bmatrix}
=
> \begin{bmatrix}
0
> \end{bmatrix}
> $$
> 
> And the rank of the matrix is 1, where there are 3 variables. So the rank is less than the number of variables. If the question was to make [[!! Span|a vector equation]] of this equation [[Solving a Linear System Using Parametrization|solving this using parametrization]] must be done 
> 
This leads to the following outcome 
> $$
> \begin{array}{c}
x = -2s -3t  \\
 \\
\text{So the vector equation is } \\
\vec{x} = s  \\
> \begin{bmatrix}
-2  \\
1  \\
0
> \end{bmatrix} + t \begin{bmatrix}
-3  \\
0 \\
1
\end{bmatrix}, \space t,s \in \mathbb{R}
\end{array}
> $$
Since $s$ and $t$ can be any [[! Real Numbers|real number]] there are **infinite vectors** that can be made 





