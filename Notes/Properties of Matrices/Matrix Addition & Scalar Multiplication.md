
> [!summary]
Matrix addition and scalar multiplication are two operations assumed to be true when matrices $A,B$ are the same size.
> 
**Key Equations:**
> 
Matrix Addition:
$(A+B)_{ij} = A_{ij} +B_{ij}$
> 
Scalar Multiplication:
$(tA)_{ij} = t \cdot A_{ij}$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
[[Matrix Notation|Matrix]] addition is an assumption that two matrices that are the same size can be added. Meaning that each entry can be added to the other. If $A,B$ were to matrices in $\mathbb{R}^{n\times m}$ with entries $a_{ij},b_{ij}$, the sum of the two is $A+B = C$ where $C\in \mathbb{R}^{n\times m}$ defined below

$$
\begin{array}{c} \\
\text{Entires:} \\
A = [a_{ij}] \\
B = [b_{ij}] \\
C = [c_{ij}] \\
 \\
\text{So the sum of }
A+B=C \space \text{is defined through C}  \\ 
c_{ij} = a_{ij}+b_{ij} \quad \text{for all} \space 1 \leq i \leq n, \space 1 \leq j \leq m \\
 \\
\text{So the sum} \\
(A+B)_{ij} = A_{ij} +B_{ij}
\end{array}
$$

Scalar multiplication is an assumption that a [[Scalar & Vectors|scalar]] [[! Real Numbers|real number]] can be multiplied by a matrix. If a $A$ was a [[Matrix Notation|matrix]] in $\mathbb{R}^{n\times m}$ and $t$ was a scalar real number, then the following can be said 

$$
\begin{array}{c}
A = [a_{ij}] \in \mathbb{R}^{n\times m}, t\in \mathbb{R} \\ \\

\text{Then tA = B} \\
B = [b_{ij}]\in \mathbb{R}^{n\times m}  \\
b_{ij} = t\cdot a_{ij} \quad \text{for all} \space 1 \leq i \leq n, \space 1\leq j\leq m  \\
 \\
\text{So then:} \\
(tA)_{ij} = t \cdot A_{ij}
\end{array}
$$

