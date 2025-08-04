

> [!summary]
This note explains how to solve a linear system using parameterization in steps. The solution is a vector equation in terms of free variables as parameters. 

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Solving a system of [[Linear Equations|linear equations]] using [[Parametrization|parametrization]] is done when the number of solutions is infinite. Meaning that a [[Free Variables|free variable]] is present. To solve a linear system in this way, the following steps must be done
1. Solve the [[Matrix Notation|augmented matrix]] into [[Reduced Row Echelon Form|reduced row echelon form ]]
2. Solve the [[Dependent Variables|dependent variables]] in terms of the [[Free Variables|free variables]] 
3. Write the solutions as [[! Vector Equations|a vector equation]] using the [[Free Variables|free variables]] as parameters 

# Examples 
> [!example] Solve a system of linear equations using parametrization 
> 
> $$
\begin{array}{c}  \\
\text{Step 1: Solve the augmented matrix (RREF)} \\ \\
\left[
\begin{array}{ccc|c}
1 & -2 & 1 & 3 \\
2 & -4 & 3 & 9 \\
3 & -6 & 2 & 6
\end{array}
\right] \\ \\
R_2 \rightarrow R_2 - 2R_1, \quad R_3 \rightarrow R_3 - 3R_1 \\ \\
\left[
\begin{array}{ccc|c}
1 & -2 & 1 & 3 \\
0 & 0 & 1 & 3 \\
0 & 0 & -1 & -3
\end{array}
\right] \\ \\
R_3 \rightarrow R_3 + R_2 \\
\left[
\begin{array}{ccc|c}
1 & -2 & 1 & 3 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0
\end{array}
\right] \\ \\
R_1 \rightarrow R_1 - R_2 \\
\left[
\begin{array}{ccc|c}
1 & -2 & 0 & 0 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0
\end{array}
\right] \\ \\ 
\text{Step 2: Solve dependent variables in terms of free variables} \\ \\
x - 2y = 0 \Rightarrow x = 2y, \quad z = 3 \\ \\
\text{Let } y = t, \quad t \in \mathbb{R} \\ \\
\Rightarrow x = 2t, \quad y = t, \quad z = 3 \\ \\
\text{Step 3: Write the solution as a vector equation} \\ \\ 
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} =  
t \begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix} + \begin{bmatrix}
0 \\
0 \\
3
\end{bmatrix}, \quad t \in \mathbb{R}
\end{array}
> $$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/lb5tqk1EBeM?si=UphafFjay81jsV42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>