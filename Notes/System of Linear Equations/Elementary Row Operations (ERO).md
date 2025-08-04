

> [!summary]
Elementary row operations are a set of operations for simple matrices 
> 
**Key Operations:**
$R_{i} \leftrightarrow R_{i}$
$kR_{i} \quad | k\in \mathbb{R}$
$R_{i}\pm kR_{j}=R_{f}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Elementary row operations are the simplest type of operations you can perform on a [[Matrix Notation|matrix]]. Since a [[Matrix Notation|matrix]] is just a notation for describing [[Linear Equations|linear equations]], any operations valid for [[Linear Equations|linear equations]] are valid for a [[Matrix Notation|matrix]].

> [!info] Operations
> - Interchange two rows ($R_{i} \leftrightarrow R_{i}$)
> - Multiply a row by a scalar amount ($kR_{i} \quad | k\in \mathbb{R}$)
> - Replace a row by adding or subtracting other rows together ($R_{i}\pm kR_{j}=R_{f}$)

# Examples 

> [!example] Solving the set of equations using linear equations and matrix notation 
> 
> $$
\begin{array}{c} 
\text{Solve the set of linear equations using linear equations and matrix notation} \\
\begin{cases}
x + 2y = 5, \\ 
3x + 4y = 11
\end{cases} \\
 \\
 \\
\text{Matrix way} \\
\begin{bmatrix}
1 & 2 & 5 \\ 
3 & 4 & 11
\end{bmatrix}
\xrightarrow{R_2 - 3R_1}
\begin{bmatrix}
1 & 2 & 5 \\ 
0 & -2 & -4
\end{bmatrix}
\xrightarrow{-\tfrac12 R_2}
\begin{bmatrix}
1 & 2 & 5 \\ 
0 & 1 & 2
\end{bmatrix}
\xrightarrow{R_1 - 2R_2}
\begin{bmatrix}
1 & 0 & 1 \\ 
0 & 1 & 2
\end{bmatrix} \\
 \\
\boxed{x = 1,\quad y = 2} \\
 \\
\text{Linear equations way} \\
-3(x + 2y) = -15 
\;\Longrightarrow\; -3x - 6y = -15, \\ 
(3x + 4y) + (-3x - 6y) = 11 - 15 
\;\Longrightarrow\; -2y = -4 
\;\Longrightarrow\; y = 2 \\
x + 2\cdot 2 = 5 
\;\Longrightarrow\; x + 4 = 5 
\;\Longrightarrow\; x = 1 \\
 \\
\boxed{x = 1,\quad y = 2}
\end{array}
> $$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/T2Gtt8WygiU?si=xoz4t_wgzWyNvISR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>