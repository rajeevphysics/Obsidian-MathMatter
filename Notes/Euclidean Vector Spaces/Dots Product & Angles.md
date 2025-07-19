
> [!summary]
A dot product describes the projection of one vector onto another.
>
**Key equations:**
>
Generalized Dot Product is always true:
$\vec{a} \cdot \vec{b} = ||\vec{a}|| \space ||\vec{b}|| cos(\theta)$
>
Where the dot product of a and b:
$\vec{a} \cdot \vec{b}  = a_1b_1 + a_2b_2 \dots a_n b_n$

>[!info]+ Read Time
**⏱ 3 min**
# Deriving Dot Products
A dot product describes how much one vector goes into another vector.

>[!warning] Assumptions
We will assume the Law of Cosines is valid without proving.
>
We will assume our example in $\mathbb{R^2}$ but is valid in $\mathbb{R^n}$
>
As well assume we can break vectors into components and add or subtract them like in [[Vectors, Vectors Addiction & Vector Multiplication]]


Suppose we had two vectors $\vec{p}, \vec{q}$ as described below and we want to know the angles between them.

We dont know the angles nor the vector $\vec{QP}$ that lines the two vectors and creates this type of triangle.

From [[Vectors, Vectors Addiction & Vector Multiplication]] we know the following information:
$$\vec{p} = \begin{bmatrix} p_1 \\ p_2\end{bmatrix},\vec{p} = \begin{bmatrix} q_1 \\ q_2\end{bmatrix}, \vec{QP} = \begin{bmatrix} p_1 - q_1 \\ p_2 - q_2\end{bmatrix} $$


![[Screenshot 2025-06-22 at 1.29.52 PM.png]]
$$\begin{array}{c}
\text{From the Law of Cosines we know} \\
||\vec{QP}||^2 = ||\vec{p}||^2 +  ||\vec{q}||^2 -2 ||\vec{p}||\space  ||\vec{q}||cos(\theta) \end{array}$$

>[!bug] Note
The Law of Cosines is a scalar equation not vector equation so cannot use [[Vectors Equations of a Line in 2D]] in this case
>
Remember magnitudes are described by  [[Vector Length]]

$$\begin{array}{c}
\text{From our known vectors we can sub in we get a new result:} \\ 
\vec{p} = \begin{bmatrix} p_1 \\ p_2\end{bmatrix},\vec{p} = \begin{bmatrix} q_1 \\ q_2\end{bmatrix}, \vec{QP} = \begin{bmatrix} p_1 - q_1 \\ p_2 - q_2\end{bmatrix}  \\ 

\\
||\vec{p}||^2 = p_1^2 + p_2^2 \\ 
||\vec{q} ||^2  = q_1 ^2 + q_2 ^2 \\ 
||\vec{QP}||^2 = (p_1 - q_1)^2 + (p_2 -q_2)^2 \\ 
||\vec{QP}||^2 = (p_1 ^2 -2p_1q_1 +q_1^2 ) + (p_2^2 - 2p_2q_2 + q_2 ^2)
\\\\
\text{Sub back into cosine equation}\\
(p_1 ^2 -2p_1q_1 +q_1^2 ) + (p_2^2 - 2p_2q_2 + q_2 ^2) = p_1^2 + p_2^2 + q_1 ^2 + q_2 ^2 - 2 ||\vec{p}||\space  ||\vec{q}||cos(\theta) \\
\\
\cancel{p_1^2  + p_2 ^2 + q_1^2 + q_2 ^2}  - 2(p_1q_1 + p_2q_2 ) = \cancel{p_1^2 + p_2^2 + q_1 ^2 + q_2 ^2} - 2 ||\vec{p}||\space  ||\vec{q}||cos(\theta) \\
 - 2(p_1q_1 + p_2q_2 ) = - 2 ||\vec{p}||\space  ||\vec{q}||cos(\theta) \\\\
 p_1q_1 + p_2q_2 = ||\vec{p}||\space  ||\vec{q}||cos(\theta)
\end{array}$$
We will make the definition that $$\vec{p} \cdot \vec{q} = p_1q_1 + p_2q_2$$
## Generalization
In our generalization its important to note that the following equation always hold true for any value of $\mathbb{R^n}$ $$\vec{a} \cdot \vec{b} = ||\vec{a}|| \space ||\vec{b}|| cos(\theta)$$
But the value for $\vec{a} \cdot \vec{b}$ will change depending on $\mathbb{R^n}$:
$$\vec{a} \cdot \vec{b}  = a_1b_1 + a_2b_2 \dots a_n b_n$$

---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
