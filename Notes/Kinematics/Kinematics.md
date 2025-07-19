
> [!summary]
Kinematics is the study of motion in 1D and 2D
> 
**Key Equations**
> 
General Equations to Describe Motion in 1D:
$\Delta x = v_{avg} t$
$\Delta v = a_{avg} t$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Kinematics describes the motion of [[Displacement|displacement]], [[Velocity|velocity]], and [[Acceleration|acceleration]] in 1D or 2D. 

![[kin_1.png]]
[^1]
>[!note] Explanation
Example of motion in 1D

# Deriving General Expressions
>[!warning] Assumptions 
To derive a general expression to describe motion in 1D, assume the following:
> - The difference of displacement from a to b is the area (integral) of velocity
> - The difference in velocity from a to b is the area (integral) of acceleration

In finding an equation to determine the change in displacement. From the graph below, it's the integral of velocity, where we assume that $v(t)$ can be described as the average velocity $v_{avg}$ from the two times is

$$
\begin{align*}
\Delta x &= \int_{t_{1}} ^{t_{2}} v(t) dt \\ 
&= v_{avg} [t_{2}-t_{1}]\\
 &= v_{avg} \Delta t
\end{align*}
$$

![[kin_4.png|400]]
[^1]
>[!note] Explanation
Total displacement is the area underneath the velocity.

To describe the change in velocity between two times. This can be found as the area under the acceleration graph or the integral of acceleration between $t_{1}$ and $t_{2}$. Assuming that $a(t)$ between the two times is $a_{avg}$ the following can be concluded


$$
\begin{align*}

\Delta v &= \int_{t_{1}} ^{t_{2}} a(t)dt \\
 &= a_{avg} [t_{2}-t_{1}]\\
 &= a_{avg} \Delta t

\end{align*}
$$

![[kin_5.png]]
[^1]
>[!note] Explanation
Total velocity is the area underneath the acceleration.

[^1]: Taken from R. Epp Lecture notes.


---

> 🧪 Think this could help someone else? [Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidian-MathMatter) to help more learners discover it.

---
