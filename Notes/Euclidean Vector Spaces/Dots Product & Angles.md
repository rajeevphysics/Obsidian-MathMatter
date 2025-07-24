
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
# Definition
A dot product describes the behaviour of two vectors. It describes how "much" one vector goes into the other. If they perfectly go into each other, meaning they are in the exact same direction, then the angle is zero. If they are [[Orthogonality|orthogonal]] to one another, the angle is 90 degrees. If this is true, the dot product returns to 0, stating that the vectors are at right angles with each other.


## Derivation 
> [!warning] Assumptions
To derive a formula to describe how much one vector goes into another, assume the following:
> - This derivation will derive in $\mathbb{R}^2$ to allow the use of the law of cosine, but is valid for $\mathbb{R}^n$

Suppose we had two vectors $\vec{p}, \vec{q}$ as described below, and we want to know the angles between them.

We don't know the angles or the vector $\vec{QP}$ that lines the two vectors and creates this type of triangle.

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
$$\vec{a} \cdot \vec{b}  = a_1b_1 + a_2b_2 +\dots +a_n b_n$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/UhaE72UM8Dc?si=Kva7JhnOTTok_yFX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
