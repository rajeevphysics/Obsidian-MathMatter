
>[!summary]
Span is the generalization of [[Linear Combinations]] and determines the possible combinations of vectors that can cover a plane
>
We can reduce span if one of the vectors in a vector equations can be a linear combination of another vector.
>
**Key Equations:**
>
Generalization of span:
$Span \space B =  \{ c_1 v_1 + \dots + c_k v_k \space | c_1 \dots c_k \in \mathbb{R} \}$
>
Generalization of vector equation:
$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad ,c_1\dots c_k \in \mathbb{R}$
>
Reducing span is only possible:
>$$\begin{array}{c}
\text{Some vector $\vec{v_i}$ where   $1 \leq i \leq k$ can be written as a linear combination of } \\ 
\vec{v_1},  \dots, \vec{v}_{i-1}, \vec{v}_{i+1},\dots , \vec{v} _ k\\\\
\text{If and only if:}
\\
Span\{\vec{v_1}, \dots, \vec{v_k}\} = Span\{\vec{v_1},  \dots, \vec{v}_{i-1}, \vec{v}_{i+1},\dots , \vec{v} _ k\}
\end{array}$$

>[!info]+ Read Time
**⏱ 4 mins**
# What is Span 
Span is the generalization of [[Linear Combinations]] for $\mathbb{R^n}$. It determines how many possible combinations are vectors covers a type of plane. The formal definitions are the following:
>[!warning] Assumptions
Assume $B =  \{ \vec{v_1} \dots \vec{v_k} \}$ is vectors in $\mathbb{R^n}$ (These are not all type of linear combinations of vectors that are scalar multiples of a vectors, rather just all types of vectors in a plane) 

$$Span \space B =  \{ c_1 v_1 + \dots + c_k v_k \space | c_1 \dots c_k \in \mathbb{R} \} $$
A vector equation from this definition from span can be defined as the following:
$$\vec{x} = c_1v_1+  \dots +c_kv_k, \quad c_1\dots c_k \in \mathbb{R} $$

# Reducing Span
When we make a span of descrite vectors, sometimes one or more of those vectors can be scalar multiples of another. 


>Take for example an example from An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of steps.

If we have a span of the following below:$$
\text{Span} \left\{
\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix},
\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix},
\begin{bmatrix}
3 \\ 0 \\ -2
\end{bmatrix}
\right\}
$$

Notice that by definition our vector equation from span is the following:
$$\vec{x} = c_1\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + c_2\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix} + c_3\begin{bmatrix}
3 \\ 0 \\ -2
\end{bmatrix}, \quad c_1,c_2,c_2 \in \mathbb{R} $$
Notice that the first two vector equation added together give us the last vector equation, so we can rewrite the vector equation as the following (assume $c_1,c_2,c_2 \in \mathbb{R}$ is always true)
$$\begin{array}{c}
\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + \begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix} = \begin{bmatrix}
3 \\ 0 \\ -2
\end{bmatrix} \\ \\

\vec{x} = c_1\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + c_2\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix} + c_3\begin{bmatrix}
3 \\ 0 \\ -2 
\end{bmatrix} \\ 

\vec{x} = c_1\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + c_2\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix} + c_3 \left\{ \begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + \begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix}\right\}

\\\\

\vec{x} = (c_1 + c_3 )\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + (c_2 +c_3)\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix}
\\ 
\text{Cant simplify futher than this so:} \\ 
\text{Let $c_1 + c_3 = s$} \\ 
\text{Let $c_2 + c_3 = t$} \\ \\

\vec{x} = s\begin{bmatrix}
3 \\ 1 \\ -3
\end{bmatrix} + t\begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix}, \quad s,t \in \mathbb{R}
\end{array}$$

This is useful in cases where we don't want scalar multiples of vector equations.

## Generalization 
From using the example above notice that our vectors' equation before we simplified it is technically the same of the vector equation after simplifying because one vector was a scalar multiple of the other.

>[!warning] Assumption
Assume $B = \{\vec{v_1}, \dots, \vec{v_k}\}$ which represents all possible vectors are in $\mathbb{R^n}$ in any type of vector equation

Some vector  where $1 \leq i \leq k$ can be written as a linear combination of
$$\begin{array}{c}
\text{Some vector $\vec{v_i}$ where   $1 \leq i \leq k$ can be written as a linear combination of } \\ 
\vec{v_1},  \dots, \vec{v}_{i-1}, \vec{v}_{i+1},\dots , \vec{v} _ k\\\\
\text{If and only if:}

\\
Span\{\vec{v_1}, \dots, \vec{v_k}\} = Span\{\vec{v_1},  \dots, \vec{v}_{i-1}, \vec{v}_{i+1},\dots , \vec{v} _ k\}
\end{array}$$


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---



