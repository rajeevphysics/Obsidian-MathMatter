

> [!summary]
Torque is the force that causes an object to rotate
> 
**Key Equations:**
> 
Torque:
$\tau = \vec{r}\times \vec{F}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Torque is the twisting force that enables an object to rotate. This is always needed for an object to experience a force to begin or continue rotation. It is defined as the [[Derivatives|derivative]] of [[Angular Momentum|angular momentum]], which physically is the amount of twisting force at a point.

## Derivation 
> [!warning] Assumptions
To derive torque, assume the following:
> - [[Angular Momentum|Angular momentum]] is defined as $\vec{L} = \vec{r} \times \vec{p}$
> - The [[Derivatives|derivative]] of angular momentum is torque $\frac{dL}{dt}=\tau$

$$\begin{array}{c}
\vec{L}=\vec{r}\times \vec{p} \\
\frac{d\vec{L}}{dt} = \frac{d\vec{r}}{dt} \times \vec{p} + \vec{r} \times \frac{d\vec{p}}{dt} \\ 
\frac{d\vec{L}}{dt} = \cancel{ m(\vec{v}\times \vec{v})_{}  }+ \vec{r} \times \vec{F} \\ 
\frac{d\vec{L}}{dt} = \vec{r} \times \vec{F} \\ 
\tau = \vec{r}\times \vec{F}
\end{array}$$

> [!note]
So by definition torque has the twisting force when the force applied is perpendicular to the r vector and/or the r vector is the farthest possible distance away from the reference point.


![[tor_1.png|300]]
[^1]
>[!note] Explanation
Example of torque on a free-body

## Deriving Torque in Term of Moment of Inertia
>[!warning] Assumptions 
From the definition of torque, torque has the most [[Energy|energy]] when it [[Tangential & Perpendicular|perpendicular]] to the r [[Scalar & Vectors|vector]]. So to derive an equation of that assume the following:
> - Torque with a [[Tangential & Perpendicular|perpendicular]] force is defined as $\tau=\vec{r} \times \vec{F_{\perp}=\vec{r}F_{\perp}\sin(90)}$
> - Since the force is perpendicular by definition of [[Newton Laws|newtons second law]] and [[Angular Acceleration|angular acceleration]] $F_{\perp}=ma_{t}=mr\alpha$ 
> - The [[Moment of Inertia|moment of inertia]] is defined as $I=mr^2$

$$\begin{align*}
\tau &= rF_\perp \sin(90) \\ 
&= mr^2 \alpha \\
\tau &= I\alpha
\end{align*}$$


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidian-MathMatter) with a star and help others learn more easily.

---




[^1]: Taken from R.Epp lecture notes. Refer to references for more information
