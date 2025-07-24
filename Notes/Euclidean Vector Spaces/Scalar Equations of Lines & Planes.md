
>[!summary]
Scalar equations are used to verify whether lines are in a plane. We often use this type of equation in validating lines in a plane or creating equations to describe the behaviour of a plane in reference to a point.
>
**Key equations:**
>
**Scalar equations:**
$\vec{n} \cdot \vec{AB} = 0$
>
or
>$$\begin{array}{cc}
\vec{n} \cdot \vec{b} = \vec{n} \cdot \vec{a} \\ 
n_1 b_1 + n_2b_2 + n_2b_3 = d \\ 
\text{Where $d = \vec{n} \cdot \vec{a} $}
\end{array}$$

>[!info]+ Read Time
**⏱ 4 mins**
# Defining Scalar Equations
In [[Vectors Equations of a Line in 2D|vector equations of a line in 2D]] & [[Vectors Equations of a Line in 3D|3D]] we define vector equations to describe the behaviour of vectors.

Sometimes we just want to know whether a vector would be in a plane, or the behaviour of a vector in a plane.

>[!warning] Assumptions
> To make a definition of a normal vector that is [[Tangential & Perpendicular|perpendicular]] to a plane or line. Our solution from this equation is a [[Scalar & Vectors|scalar]] number rather than a [[Scalar & Vectors|vector]] from vector equations. So assume the following:
> 
>- Let $\vec{n} = \begin{bmatrix} n_1 \\ n_2 \\ n_3 \end{bmatrix}$ be our normal vector perpendicular to a plane
>- Let $\vec{AB}$ be a line in our plane 
>- This equation will be derived  using [[Dots Product & Angles| dot products]]
> - Use this image as visual aid
![[se_1.png|400]]

$$\begin{array}{c}
\text{Let $\vec{n} = \begin{bmatrix} n_1 \\ n_2 \\ n_3 \end{bmatrix}$}
\\
\vec{n} \cdot \vec{AB} = 0 \\\\

\text{If $\vec{AB}  = (\vec{b} - \vec{a})$ we can make another equal defination from the above:}\\
\vec{n} \cdot \vec{AB} = 0  \\ 
\vec{n} \cdot (\vec{b} - \vec{a}) = 0 \\ 
\vec{n} \cdot \vec{b} - \vec{n} \cdot \vec{a} = 0 \\
\vec{n} \cdot \vec{b} = \vec{n} \cdot \vec{a} \\ 

n_1 b_1 + n_2b_2 + n_2b_3 = d \\ 
\text{Where $d = \vec{n} \cdot \vec{a} $}
\end{array}$$

>[!bug] Note
If we know our normal vectors to a plane we can determine whether two planes are parallel or orthogonal ([[Orthogonality]]) 
>
If the dot product between two normal vectors is zero then the each plane is orthogonal to one another. ([[Dots Product & Angles]])
>
If one normal vector is a non-zero scalar multiple of another then they are parallel to one another.

# Examples

>The example below is adapted from an example in An Introduction To Linear Algebra For Science and Engineering by Norman, D., & Wolczuk, D. The solution is adapted and is my original interpretation of steps.

>[!example] Example of a finding a scalar equation from a point and plane
Find a scalar equation of a plane that contains the point P(3,-1,3) and is orthogonal to the plane $x_1 -2x_2 + 4x_3 = 2$ 
>
Because we are looking for a plane that is orthogonal to the plane, there is many possible solutions but we will suppose a plane such as $2x_1 + 3x_2 + x_3 = d$ or a normal vector of  $\vec{n_2} = \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix}$.
We can verify the two plane are orthogonal to one another because 
>
>$$\begin{array}{c}
\text{If $\vec{n_1} = \begin{bmatrix} 1 \\ -2 \\4\end{bmatrix}$ and $\vec{n_2 } = \begin{bmatrix} 2 \\ 3 \\ 1\end{bmatrix}$}
\\
\\ 
\vec{n_1} \cdot \vec{n_2} = 1(2) + -2(3) + 4(1) = 0 \\
\text{So they are orthogonal to one another} \\ 
\\
\end{array}$$
>
To find our $d$ scalar to conclude our scalar equation from our derivation we need to find 
>$$\begin{array}{c}
d = \vec{n_2} \cdot \vec{a} \\ \\
\text{Where $\vec{a} = P(3,-1,3)$} \\ 
\\
\vec{n_2} \cdot \vec{a} = 2(3) + 3(-1) + 3(1) = 6 \\ 
d = 6 
\end{array}$$
>
So our scalar equation is therefore:
$$2x_1 + 3x_2 + x_3 = 6$$


---

📂 Want to see more structured notes like these?  
Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter).

---
