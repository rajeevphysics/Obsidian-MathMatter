
> [!summary]
The transpose of a matrix is changing the rows to columns
> 
**Key Equations:**
> 
Transposing a matrix in general:
> 
$(A^T) _{ij} = (A)_{ji}$
> 
Properties of Transposing Matrix:
> 
Double transpose -  $(A^T)^T=A$
Sum of transpose -  $(A+B)^T=A^T+B^T$
Scalar multiple transpose -  $(sA)^T = sA^T$
Product of transpose -  $(AB)^T = A^T B^T$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Transposing a matrix is changing a [[Matrix Notation|matrix]] with $n$ rows to $n$ columns for any matrix in $\mathbb{R}^n$. This transposition is reversible; a matrix can also be changed from $n$ columns to $n$ rows. The [[Dimensions|dimensions]] of a matrix get flipped.  If a matrix is denoted as $A \in \mathbb{R}^n$, then the transpose of that matrix is $A^T$. Formally as 

$$
\begin{array}{c}
\text{If matrix $A = \begin{bmatrix}
x_{1} \\ 
\vdots \\
x_{n}
\end{bmatrix}$} \in \mathbb{R}^n  \\
A^T = \begin{bmatrix}
x_{1} \dots x_{n}
\end{bmatrix}
\end{array}
$$


More generally, transposing a matrix is said as using [[Matrix Notation|entries]] in a matrix stated as 

$$
(A^T) _{ij} = (A)_{ji}
$$

# Properties of Transposing Matrices
> [!warning] Assumptions
Some important properties are stated below. Each property is proven in [[!! Proof of Properties of Transposing Matrices|proof of properties of transposing matrices]], and are only explained and given here. Keep note of the following assumptions:
> - $A$ and $B$ are [[Matrix Notation|matrices]]  
> - $s$ are any scalar real number ($s\in \mathbb{R}$

The **double transpose** is when a matrix is double transposed, like $(A^T)^T$, the result is the original matrix $A$.

Transposing a **sum of matrices** like $(A+B)^T$ results in distributing the transpose over addition. The result is $A^T + B^T$.

Similarly **transposing a scalar multiple and a matrix together** results in factoring out the scalar to get the result $(sA)^T=sA^T$

**Transposing a product of matrices** like $(AB)^T$ results in distributing the transpose to both matrices. The result is as follows $(AB)^T=A^TB^T$

