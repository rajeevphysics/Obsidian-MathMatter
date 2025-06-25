
>[!summary]
Linear independence is another way to determine wether our [[Span]] of a set of vectors is reduced to its lowest size.
>
We look at combinations of vectors and their scalars added together to reduce to zero to determine wether a set of reduced to its fullest.
>
If a set is <u>reduced</u> to its fullest we call it **linearly independent**. 
If a set is <u>not reduced</u> to its fullest we call it **linearly dependent.** 
>
**Key equations:**
>
If $c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$ is satisfied and some but not all c scalars are zero then the set is linearly dependent 
>
if $c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$ is only satisfied is all c scalars are zero then the set is linearly independent.

# Linear Independent and Dependent 
From [[Span]] when we wanted to reduce the span of some vectors we had to know what the vectors were to see if any were [[Linear Combinations]] of one another.

>[!note] 
We will talk about this equation with relation to a vector equation.
$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$
Where $c_1 \dots c_k$ are the coefficients of the vectors $v_1 \dots v_k$ 

Another way to see if reducing the span is possible is by noticing the relation between the coefficients and vectors of a vector equation.

>The example below is adapted from a example in An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of steps.

Take for example this span of 3 vectors in $\mathbb{R^3}$ with the vector on a plane below it
$$Z = \left\{\begin{bmatrix}
1 \\ 0 \\ 1
\end{bmatrix},
\begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix},
\begin{bmatrix}
1 \\ 1 \\ 0
\end{bmatrix}\right\}$$
![[Li_1.png|500]]

>[!warning] Linear Dependence Assumptions
If we wanted to see whether any of these vectors are linear combinations of one another, without manually looking at each vector and seeing if their linear combinations are another.
>
We see if addition of vectors and their scalar multiples add to zero, where one or more, **but not all** scalars are zero ($\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$). If this is true this means that we have vectors who are not needed to add back to the origin point (zero vector). 
>
If we cannot find any addition of vectors and their scalar adding to zero, or all sclalar have to be zero for it point to the zero vector, this means that the span is already reduced the most.

$$
\begin{array}{c}
\text{We start with the vector equation} \\ \\
\vec{x} =  c_1 \begin{bmatrix}
1 \\ 0 \\ 1
\end{bmatrix} + c_2 \begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix} + c_3 \begin{bmatrix}
1 \\ 1 \\ 0
\end{bmatrix} \\ \\  \text{We want to see wether the vector equation ever points to zero} \\\\
\begin{bmatrix}
0 \\ 0 \\ 0 
\end{bmatrix} = c_1 \begin{bmatrix}
1 \\ 0 \\ 1
\end{bmatrix} + c_2 \begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix} + c_3 \begin{bmatrix}
1 \\ 1 \\ 0
\end{bmatrix} \\ \text{Use linear combination and solve for $c_1,c_2,c_3$} \\ \\
\begin{bmatrix}
0 \\ 0 \\ 0 
\end{bmatrix} = \begin{bmatrix}
c_1 + c_3 \\ c_2 + c_3 \\ c_1 + c_3 
\end{bmatrix} \\ \\ 

c_1 + c_3 = 0\space (1), \quad c_2 + c_3 = 0 \space (2),  \quad c_1 +c_2 = 0 \space (3)\\ \\

(1) - (3) \\ 
c_3 - c_2 = 0 \\ 
c_3 = c_2 \\ \\

(2) \\ 
2c_3 = 0 \\ 
c_3 = 0 \\\\

\text{Implies that $c_2 = 0$ and $c_1 = 0 $ }

\end{array}$$

Because $c_1 = c_2 = c_3 = 0$ is the only solution so the set is **linearly independent**

If $c_1 =0$ and $c_2, c_3 \neq 0$ and the solution reduced to zero the set would be **linearly** **dependent**, and **we could reduce the span**.

## Generalization
>[!assumption]
Assume the set of vectors in $\mathbb{R^n}$   is called $B = \{ \vec{v_1}, \dots, \vec{v_k} \}$   

The set is linearly dependent (can reduce the set) if there exist a real coefficient $c_1 \dots c_k$ not all zero such that:
$$c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$$

The set of vectors is linearly dependent is it follows the reduction in span from [[Span]]


The set is linearly independent (cannot reduce the set) if the only solution to 
$$c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$$
is $c_1 = \cdots = c_k=0$ (Trivial solution)
