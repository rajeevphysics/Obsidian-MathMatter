

> [!summary]
A matrix in reduced row echelon form is a unique matrix. 

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Reduced row echelon form (RREF) is a unique [[Matrix Notation|matrix]]. Meaning you can do some type of different [[Elementary Row Operations (ERO)|row operations]] and end up with the same matrix. A matrix is in reduced row echelon form if the [[Matrix Notation|coefficient matrix]] follows the following properties: 
- If a row does not consist entirely of zero, then the first non-zero number must be a 1
- All zero rows are at the bottom of the matrix 
- In any two successive rows that do not consist entirely of zeros, the [[Leading 1s|leading 1]] in the row occurs farther to the right than the leading 1 on the row above it
- **Each column containing a [[Leading 1s|leading 1]] has zeros in all its entries** 

The highlighted part of the properties is the difference between [[Row Echelon Form|row echelon form]] and reduced row echelon form 

# Examples 

> [!example] Example of matrices in reduced row echelon form
> $$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
> $$
> $$
\begin{bmatrix}
1 & 2 & 0 & 3 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 0
\end{bmatrix}
> $$
> $$
\begin{bmatrix}
1 & 0 & 5 \\
0 & 1 & -3
\end{bmatrix}
> $$

> [!example] Example of matrices **not** in reduced row echelon form
> 
> $$
\begin{bmatrix}
2 & 4 & 6 \\
0 & 1 & 3 \\
0 & 0 & 0
\end{bmatrix}
> $$
> 
> $$
\begin{bmatrix}
1 & 0 & 2 \\
0 & 1 & 4 \\
0 & 1 & 0
\end{bmatrix}
> $$
> 
> $$
\begin{bmatrix}
1 & 2 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0
\end{bmatrix}
> $$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/90YQb3Gajao?si=eWEIVKNPnWd86KTC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>