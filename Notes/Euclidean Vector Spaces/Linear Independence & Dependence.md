
>[!summary]
Linear independence is another way to determine whether our span of a set of vectors is reduced to its lowest size.
>
If a set is <u>reduced</u> to its fullest, then it is called **linearly independent**. 
If a set is <u>not reduced</u> to its fullest, then it is called **linearly dependent.** 
>
**Key equations:**
>
If $c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$ is satisfied and some but not all $c$ scalars are zero, then the set is linearly dependent 
> 
If $c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$ is only satisfied if all $c$  scalars are zero, then the set is linearly independent.

>[!info]+ Read Time
**⏱ 4 mins**
# Linear Independent and Dependent 
Linearly independent vectors are vectors that are not scalar multiples of another vector in a set of vectors. A vector is linearly dependent if the vector can be found as a scalar multiple of other vectors in a set.

Mathematically, a way to see if reducing the span is possible is by noticing the relation between the coefficients and vectors of a vector equation. 

> [!note] 
To derive a generalized equation to determine wether a set of vectors are linearly independent or dependent well use an example

>The example below is adapted from an example in An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of the steps.

Take for example, this span of 3 vectors in $\mathbb{R^3}$ with the vector on a plane below it
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
> 
To determine whether a vector is a linear dependent of another, observe if the addition of vectors and their scalar multiples adds to zero. Where one or more, **but not all,** scalars are zero, so that the addition of the vectors points back to the origin ([[Zero Vector|zero vector]].
> 
Mathematically this described by the [[Span|vector equation]] $\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$, where $\vec{{x}}=\vec{0}$ so that
$\vec{0} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$ 
> 
If the equation is satisfied this means that the addition of vectors point back to the origin ([[Zero Vector|zero vector]].) This means that one or more vector is a scalar multiple of one or more vectors and the span can be reduced
>
If we cannot find any addition of vectors and their scalar that add to zero, or all scalars have to be zero for it to point to the [[Zero Vector|zero vector]], this means that the [[Span|span]] is already reduced to the most.

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

If $c_1 =0$ and $c_2, c_3 \neq 0$ and the solution reduced to zero the set would be **linearly** **dependent**, and **we could reduce the set of vectors**.

## Generalization
>[!assumption]
Assume the set of vectors in $\mathbb{R^n}$   is called $B = \{ \vec{v_1}, \dots, \vec{v_k} \}$   

The set is linearly dependent (can reduce the set) if there exist a real coefficient $c_1 \dots c_k$ not all zero such that:
$$c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$$

The set is linearly independent (cannot reduce the set) if the only solution to 
$$c_1\vec{v_1} + \dots + c_k \vec{v_k} = \vec{0}$$
is $c_1 = \cdots = c_k=0$ (Formally **Trivial solution**)

---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
