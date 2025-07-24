
>[!summary]
Vectors in linear algebra are denoted by a scalar point for each available axis. 
>
>
**Key equations:**
>
**For the following equations, it's assumed that vectors are in $\mathbb{R^2}$ but is valid for any $\mathbb{R^n}$** 
>
They are equal if:
>$$\begin{array}{c}
\text{We say} \space {\begin{bmatrix} x_1 \\ x_2\end{bmatrix}} = {\begin{bmatrix} y_1 \\ y_2\end{bmatrix}} \space \text{if:} \\ 
x_1 = y_1 \\ 
x_2 = y_2 
\end{array}
>$$
We generally add vectors in this way:
>
>$$\begin{array}{c}
\vec{x} + \vec{y} = {\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}} + {\begin{bmatrix} y_1 \\ y_2 \end{bmatrix}}  = {\begin{bmatrix} x_1 + y_1 \\ x_y + y_2 \end{bmatrix}}\end{array}$$
And if t is a scalar multiple then multiply vectors are in this way:
$t\vec{x} = t{\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}}  = {\begin{bmatrix} tx_1 \\ tx_2 \end{bmatrix}}$
>
As well:
>$$\begin{array}{c}
\text{If $v_1...v_k \in \mathbb{R^2}$ and $c_1... c_k \in \mathbb{R}$} \\
\text{Then the sum $c_1v_1 ... c_k v_k$ is a linear combination of $v_1...v_k$}
\end{array}$$

>[!info]+ Read Time
**⏱ 3 mins**

# Defining A Set of Vectors
Given a graph with two axes ($\mathbb{R}^2$) it's common to denote a point P by the distance across the x-axis and distance across the y-axis. For example, a point ($x_{1},x_{2}$) in linear algebra is denoted as ${\begin{bmatrix} x_1 \\ x_2\end{bmatrix}}$. 

![[ve_1.png|500]]
> [!note] Explanation
A point $(x_1,x_{2})$ has a displacement in the x-axis by $x_{1}$ and displacement in the y-axis by $x_{2}$

## Generalization 
The generalized for a set a vector can work in an $\mathbb{R^n}$ but well generalize this for a function in $\mathbb{R^2}$
$$\begin{array}{c}
\mathbb{R} ^2 = {\begin{bmatrix} x_1 \\ x_2\end{bmatrix}} | x_1, x_2 \in \mathbb{R} \\ \\
\text{We say} \space {\begin{bmatrix} x_1 \\ x_2\end{bmatrix}} = {\begin{bmatrix} y_1 \\ y_2\end{bmatrix}} \space \text{if:} \\ 
x_1 = y_1 \\ 
x_2 = y_2 
\end{array}$$

# Proving Vector Addition & Multiplication 
>[!warning] Assumption
For this derivation, assume an example in physics, where two forces are multiplied or added together, and then generalize the solutions. 

Suppose two forces $F_1$ and $F_2$. Where $F_{1}=150N$ in the x-axis and $F_{2}=150N$ in the y direction. 

The force when $F_{1}+F_{2}$ is equal to the force in the x-axis and the force in the y-axis. If a force were multiplied, that would be adding a multiplicative scalar amount to a force.

![[Probjv (1).png]]

$$\begin{array}{c}
F_1 = {\begin{bmatrix} 150 \\ 0\end{bmatrix}} \\ 
F_2 = {\begin{bmatrix} 0 \\ 150 \end{bmatrix}} \\ 
F_1 + F_2 = {\begin{bmatrix} 150 \\ 0\end{bmatrix}} + {\begin{bmatrix} 0 \\ 150 \end{bmatrix}}  = {\begin{bmatrix} 150 \\ 150 \end{bmatrix}} \\ 
2F_1 = {\begin{bmatrix} 300 \\ 0 \end{bmatrix}}
\end{array}$$

## Generalization 
For generalizing addition and multiplication from this example we assume its in $\mathbb{R^2}$ but it works for any value of $\mathbb{R^n}$ 

$$\begin{array}{c}
\text{Let $\vec{x} = {\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}} $ and $\vec{y} = {\begin{bmatrix} y_1 \\ y_2\end{bmatrix}} $} \\ 
\vec{x} + \vec{y} = {\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}} + {\begin{bmatrix} y_1 \\ y_2 \end{bmatrix}}  = {\begin{bmatrix} x_1 + y_1 \\ x_y + y_2 \end{bmatrix}}  \\\\ 
\text{If we define t as a sclar multiple then} \\ 
t\vec{x} = t{\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}}  = {\begin{bmatrix} tx_1 \\ tx_2 \end{bmatrix}} 
\end{array}$$

As well, we can make a definition from the example assuming that we a vector in $\mathbb{R^2}$ and a scalar multiple in $\mathbb{R}$. From the example for any form of vectors we make the definition:
$$\begin{array}{c}
\text{If $v_1...v_k \in \mathbb{R^2}$ and $c_1... c_k \in \mathbb{R}$} \\
\text{Then the sum $c_1v_1 ... c_k v_k$ is a linear combination of $v_1...v_k$}
\end{array}$$

---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
