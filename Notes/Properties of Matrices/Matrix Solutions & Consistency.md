

> [!summary]
An augmented matrix in reduced form can have three possible solutions, depending on how the matrix looks in reduced form.
> 
**Key Results:**
Inconsistent systems - Any row in the form $\begin{bmatrix} 0 \space 0\dots 0 \space | \space c\end{bmatrix} \space | \space c \neq 0$ 
Consistent systems - $\text{Rank}(A)=\text{Number of variables}$
Infinite solutions - $\text{Rank}(A)<\text{Number of variables}$

>[!info]+ Read Time
**⏱ 4 mins**

# Definition 
If an [[Matrix Notation|augmented matrix]] $\begin{bmatrix} A \space | \space \vec{b}\end{bmatrix}$ of a system of [[Linear Equations|linear equations]] is in [[Row Echelon Form|row echelon form]] or [[Reduced Row Echelon Form|reduced row echelon form]] and rows are equivalent to $\begin{bmatrix} R \space | \space c\end{bmatrix}$ then the solutions for the matrix are as followed:
- The system is inconsistent if any only if any row of $\begin{bmatrix} R \space | \space c\end{bmatrix}$ are in the form $\begin{bmatrix} 0 \space 0\dots 0 \space | \space c\end{bmatrix}$ where $c\neq 0$. 
- If the [[Rank|rank]] of A are equal to the number of variables (columns) in a system, then each row $\begin{bmatrix} R \space | \space c\end{bmatrix}$ has a unique solution
- The system has infinitely many solutions if the [[Rank|rank]] of A is less than the number of variables (columns) in a system 

## Proof of Inconsistent Solutions 
> [!warning] Assumptions 
To prove a system is inconsistent when a row is in the form $\begin{bmatrix} 0 \space 0\dots 0 \space | \space c\end{bmatrix} \space | \space c \neq 0$ through [[Proof by Contradiction (Indirect Proof)|proof by contradiction]] assume the following: 
> - An [[Matrix Notation|augmented matrix]] is a system of linear equations (swap between the two)

**Proof by Contradiction:** 
A reduced (RREF) augmented matrix with any row following $\begin{bmatrix} 0 \space 0\dots 0 \space | \space c\end{bmatrix} \space | \space c \neq 0$ has a solution.

The row that follows $\begin{bmatrix} 0 \space 0\dots 0 \space | \space c\end{bmatrix} \space | \space c \neq 0$ is rewritten as a linear equation, so $0x_{1}+0x_{2}+\dots+0x_{n}=c\Rightarrow 0=c$ 
This is not possible, $0\neq \text{A number}$, hence reaching a contradiction 

## Proof of Consistent Unique Solution 
> [!warning] Assumptions 
To prove when the rank of a matrix $A$ equals the number of variables in a system means there is a unique solutions through [[Direct Proof|direct proof]] assume the following:
> - [[Rank|Rank]] is the number of pivots in matrix in reduced form
> - An [[Matrix Notation|augmented matrix]] is a system of linear equations (swap between the two)
> - A [[Free Variables|free variable]] is a variable in a system that can written as any number
> - A reduced augmented matrix is a matrix in [[Reduced Row Echelon Form|RREF]]

**Direct Proof:**
If the $\text{Rank}(A)=\text{number of variables}=n$ this means there is no free variables by definition. This mean the augmented matrix in reduced form can be written as a linear equation. 

Any row in this reduced matrix can be written as $r_{m}= \begin{bmatrix} x_{n} & b\end{bmatrix} \Rightarrow x_{n}=b$. So any row has a unique solution. 
## Proof of Infinite Solutions 
> [!warning] Assumptions 
To prove when the rank of matrix $A$ is less the number of free variables means infinite solutions through [[Direct Proof|direct proof]] assume the following:
> - [[Rank|Rank]] is the number of pivots in matrix in reduced form
> - An [[Matrix Notation|augmented matrix]] is a system of linear equations (swap between the two)
> - A [[Free Variables|free variable]] is a variable in a system that can written as any number 
> - A reduced augmented matrix is a matrix in [[Reduced Row Echelon Form|RREF]]

**Direct Proof:**
If the $\text{Rank}(A)< \text{number of variables}$, there is a free variable present in the system.
So by definition a system in a reduced augmented matrix can be written as a linear equation, like the following 

$$
\begin{array}{c}
x_{1}-\alpha = a  \\
0\alpha =0
\end{array}
$$
From the first linear equation $x_{1}=a + \alpha$, but there is no restrictions on what $\alpha$ can equal. So $\alpha$ can be assigned any number ($x_{1} = a+ \alpha \quad | \alpha \in \mathbb{R}$)

This leads to infinite solutions.


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/7QGDi6gRtFU?si=J16H3oipeoK6OJLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>