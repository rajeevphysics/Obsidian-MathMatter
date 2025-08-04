
> [!summary]
Gauss Jordan Elimination is a technique for solving a matrix into reduced row echelon form 

>[!info]+ Read Time
**⏱ 3 mins**

# Definition 
Gauss-Jordan elimination is an algorithm to solve a [[Matrix Notation|matrix]] in its [[Reduced Row Echelon Form|reduced row echelon form]]. This algorithm does not always need to be followed, but it is usually the fastest way to solve a matrix in this way. The steps are as follows
1. Locate the leftmost column that is not entirely of zeros
2. Interchange rows if necessary to bring a nonzero entry to the top of the column in step 1
3. If the entry is now at the top of the column found in step 1 is $a$ multiply the row by $\frac{1}{a}$ to introduce a [[Leading 1s|leading 1]] 
4. Zero out all the other numbers below the pivot in the same column 
5. Cover the top row in the matrix and begin again at step 1 applied to the [[Sub-Matrix|submatrix]] that remains. Continue this process until the requirements for [[Row Echelon Form|row echelon form]] is made.
6. Starting from the last non-zero row and working upwards, add suitable multiples of each row to the rows above it to introduce zeros above the [[Leading 1s|leadings 1s]]

Step 6 is the difference between [[Gaussian Elimination| Gaussian Elimination]] and  Gauss-Jordan Elimination 

After a matrix is in [[Reduced Row Echelon Form|reduced row echelon form]], variables can be solved for by looking at the matrix or converting back into [[Linear Equations|linear equation]].

# Examples 

> [!example] Solve the following matrix using Gauss Jordan Elimination 
> $$
\begin{array}{c}
\textbf{Step 1:} \text{ Locate the leftmost column that is not entirely zeros} \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & 3 & 1 & 14 \\
1 & 2 & 3 & 14
\end{array}
\right] \\ \\
\textbf{Step 2:} \text{ Interchange rows if necessary (not needed here)} \\ \\
\textbf{Step 3:} \text{ Leading 1 already present at } a_{11} \\ \\
\textbf{Step 4:} \text{ Eliminate entries below the pivot: } \\
R_2 \rightarrow R_2 - 2R_1, \quad R_3 \rightarrow R_3 - R_1 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & 2 \\
0 & 1 & 2 & 8
\end{array}
\right] \\ \\
\textbf{Step 5:} \text{ Submatrix: eliminate below new pivot} \\
R_3 \rightarrow R_3 - R_2 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & 2 \\
0 & 0 & 3 & 6
\end{array}
\right] \\ \\
\text{Scale } R_3 \rightarrow \frac{1}{3} R_3 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & 2 \\
0 & 0 & 1 & 2
\end{array}
\right] \\ \\
\textbf{Step 6:} \text{ Eliminate above pivots} \\
R_1 \rightarrow R_1 - R_3, \quad R_2 \rightarrow R_2 + R_3 \\ \\
\left[
\begin{array}{ccc|c}
1 & 1 & 0 & 4 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2
\end{array}
\right] \\ \\
R_1 \rightarrow R_1 - R_2 \\ \\
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2
\end{array}
\right] \\ \\
\textbf{Final Answer:} \quad x = 0, \quad y = 4, \quad z = 2
\end{array}
> $$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/CK65GbUTk4g?si=L5LoeqH8s1zeg996" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>