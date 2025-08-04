
> [!summary]
A matrix in row echelon form is not a unique matrix. 

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Row echelon form (REF) of a [[Matrix Notation|matrix]] is a matrix that is in a non-unique form. Meaning you could do some type of [[Elementary Row Operations (ERO)|row operation]] and end up with a different type of matrix in the row echelon form. For a matrix to be in row echelon form, the [[Matrix Notation|coefficient matrix]] must have the following properties: 
- If a row does not consist entirely of zero, then the first non-zero number must be a 1
- All zero rows are at the bottom of the matrix 
- In any two successive rows that do not consist entirely of zeros, the [[Leading 1s|leading 1]] in the row occurs farther to the right than the [[Leading 1s|leading 1 ]] on the row above it

# Examples 

> [!example] Examples of matrices in row echelon form
> $$  
\begin{bmatrix}  
1 & 2 & 3 \\  
0 & 1 & 4 \\  
0 & 0 & 5  
\end{bmatrix}  
> $$
> $$  
\begin{bmatrix}  
1 & 0 & -2 & 3 \\  
0 & 1 & 4 & -1 \\  
0 & 0 & 2 & 5 
\end{bmatrix}
> $$
> $$
\begin{bmatrix}
1 & 0 & 0 & 0 \\
-1 & 2 & 0 & 0 \\
2 & 3 & 1 & 0 \\
0 & -1 & 5 & 4
\end{bmatrix}
> $$


> [!example] Examples of matrices **not** in row echelon form 
> $$
\begin{bmatrix}
2 & 4 & 6 \\
1 & 3 & 5 \\
0 & 2 & 1
\end{bmatrix}
> $$
> 
>$$
\begin{bmatrix}
0 & 1 & 2 & 3 \\
2 & 0 & 4 & 1 \\
1 & 1 & 1 & 1
\end{bmatrix}
> $$
> 
> $$
\begin{bmatrix}
3 & 5 & -2 \\
6 & 1 & 0 \\
1 & 4 & 4
\end{bmatrix}
> $$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/oXMPQ-
6YnGA?si=KovUfjJ9sDJ44oTz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>