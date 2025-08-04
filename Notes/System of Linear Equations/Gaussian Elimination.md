
> [!summary]
Gaussian elimination is a technique for solving a matrix into row echelon form

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Gaussian elimination is a general algorithm to solve a [[Matrix Notation|matrix]] to [[Row Echelon Form|row echelon form]]. This algorithm does not always need to be followed when solving a matrix, but in general is the fastest way to solve a matrix to get row echelon form. The steps are as follows
1. Locate the leftmost column that is not entirely of zeros
2. Interchange rows if necessary to bring a nonzero entry to the top of the column in step 1
3. If the entry is now at the top of the column found in step 1 is $a$ multiply the row by $\frac{1}{a}$ to introduce a [[Leading 1s|leading 1]] 
4. Zero out all the other entries below the pivot in the same column 
5. Cover the top row in the matrix and begin again at step 1 applied to the [[Sub-Matrix|submatrix]] that remains. Continue this process until the requirements for [[Row Echelon Form|row echelon form]] is made.

After a matrix is in row echelon form the matrix can be converted back into [[Linear Equations|linear equations]] where each variable is solved for.

# Examples 

>[!example] Solve the following matrix using Gaussian elimination 
> $$
\begin{array}{c}
\textbf{Given system:} \\ 
x + y + z = 6 \\
2x + 3y + z = 14 \\
x + 2y + 3z = 14 \\ \\
\textbf{Step 1: Locate leftmost nonzero column (Column 1)} \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & 3 & 1 & 14 \\
1 & 2 & 3 & 14
\end{array}
\right] \\ \\
\textbf{Step 2: Interchange rows if needed (not needed)} \\ \\
\textbf{Step 3: Leading 1 already present at } a_{11} \\ \\
\textbf{Step 4: Zero out entries below the pivot} \\
R_2 \rightarrow R_2 - 2R_1, \quad R_3 \rightarrow R_3 - R_1 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & 2 \\
0 & 1 & 2 & 8
\end{array}
\right] \\ \\
\textbf{Step 5: Submatrix begins at Row 2. Eliminate below new pivot in Column 2} \\
R_3 \rightarrow R_3 - R_2 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & 2 \\
0 & 0 & 3 & 6
\end{array}
\right] \\ \\
\textbf{Back-substitute to solve linear equations:} \\ \\
\text{From Row 3: } 3z = 6 \Rightarrow z = 2 \\
\text{From Row 2: } y - z = 2 \Rightarrow y = 2 + z = 4 \\
\text{From Row 1: } x + y + z = 6 \Rightarrow x = 6 - y - z = 0 \\ \\
\textbf{Final Answer:} \quad x = 0, \quad y = 4, \quad z = 2
\end{array}
> $$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/seet9VyHo3Q?si=-54HI5yVDo6MnTOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>