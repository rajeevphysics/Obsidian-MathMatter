 
> [!summary]
A dot product projection a vector onto the line of another vector. The projection returns a vector
> 
**Key Equations:**
> 
Dot Product Projection:
$\text{proj}_{u}v = \frac{\vec{u} \cdot \vec{v}}{||u|| ^2} \vec{u}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
A dot product projection refers to a projection where you project one vector onto another. To project a vector onto another vector, it's physically like shining a light on an object and observing the shadow it creates. Mathematically, a projection $\vec{v}$ onto $\vec{u}$, is the vector $\vec{v}$ on the line of $\vec{u}$ described as 

$$
\text{proj}_{u}v = \vec{v}_{u}= \text{$\vec{v}$ onto $\vec{u}$}
$$

![[dpp_1.png|400]]
> [!note] Explanation
Visual to show the show of vector v onto the line of u

## Derivation 
> [!warning] Assumptions
To derive an equation to describe the projection of $\vec{v}$ onto $\vec{u}$, use the following image as a visual aid. 
![[dpp_2.png|350]]
The goal of this derivation is to find the projection $\vec{v}$ onto $\vec{u}$ or $\vec{v_{u}}$ 
> - $\vec{v_{u}}$ can be described as the $\vec{u}$ times some scalar constant ($k$) to change the length of $\vec{u}$ ($v_{u}=k\cdot \vec{u}$)
> - The vector $\vec{v}$ can be rewritten as a [[Linear Combinations|linear combination]] of vectors $v_{u}+\vec{z}$ so $\vec{v} = \vec{v_{u}}+\vec{z}$
> - The [[Dots Product & Angles|dot product]] between $\vec{u}$ and $\vec{v}$ is written as $\vec{v}\cdot \vec{u}$
> - Vector $\vec{z}$ is [[Orthogonality|orthogonal]] to vector $\vec{u}$ so their [[Dots Product & Angles|dot product]] must be zero

$$
\begin{array}{c}
\vec{v}_{u} = k \vec{u} \quad (1) \\
 \\
\vec{u}\cdot \vec{v} = \vec{u}\cdot (\vec{v_{u}}+ \vec{z}) = \vec{u} \cdot \vec{v_{u}} + \cancel{ \vec{u}\cdot\vec{z} }^0 =\vec{u}\cdot \vec{v_{u}} \quad (2)\\
 \\
(1) \Rightarrow (2)  \\
\vec{u} \cdot \vec{v}= \vec{u}\cdot  (k \vec{u})  \\
\frac{\vec{u} \cdot \vec{v}}{\vec{u}\cdot \vec{u}} = k \\
\frac{\vec{u} \cdot \vec{v}}{||u|| ^2}= k \quad (3) \\
 \\
(3)\Rightarrow (1) \\
\vec{v}_{u} = \frac{\vec{u} \cdot \vec{v}}{||u|| ^2} \vec{u}  \\
\text{or} \\
\text{proj}_{u}v = \frac{\vec{u} \cdot \vec{v}}{||u|| ^2} \vec{u} 
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/ndG7qONg7BU?si=t5gR53qV6E_lMHar" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/l5hULvByLNY?si=3v5pJZNTMn6kGZq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>